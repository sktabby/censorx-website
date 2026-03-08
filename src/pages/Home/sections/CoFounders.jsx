import React, { useEffect, useMemo, useRef, useState } from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";
import {
  PROTECTED_MEMBER_UNLOCK_EVENT,
  saveProtectedMemberUnlock,
} from "../../../utils/protectedMembers";

import tabishImg from "../../../assets/team/tabish.jpeg";
import asharImg from "../../../assets/team/ashar.jpeg";

const TEAM_IMAGE_PROXY =
  import.meta.env.VITE_TEAM_IMAGE_PROXY?.trim() ||
  import.meta.env.VITE_CAREER_FORM_PROXY?.trim() ||
  "";

function useInView(options = { threshold: 0.18 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, options);

    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);

  return { ref, inView };
}

function Underline() {
  return (
    <div
      aria-hidden="true"
      style={{
        width: 120,
        height: 3,
        borderRadius: 999,
        background: "rgba(255,255,255,0.18)",
      }}
    />
  );
}

async function sha256Hex(value) {
  const bytes = new TextEncoder().encode(value);
  const hash = await window.crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(hash))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function ProtectedMemberFrame({ memberKey, name }) {
  const [state, setState] = useState({
    password: "",
    frameSrc: "",
    status: "locked",
    error: "",
    requestToken: "",
    profileUrl: "",
  });
  const timeoutRef = useRef(null);
  const stateRef = useRef({
    requestToken: "",
  });

  useEffect(() => {
    stateRef.current = {
      requestToken: state.requestToken,
    };
  }, [state.requestToken]);

  useEffect(() => {
    function onMessage(event) {
      const data = event.data;

      if (!data || data.type !== "protected-member-status" || data.member !== memberKey) {
        return;
      }

      const activeRequestToken = stateRef.current.requestToken;

      if (activeRequestToken && data.requestToken && data.requestToken !== activeRequestToken) {
        return;
      }

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      if (data.ok) {
        saveProtectedMemberUnlock(memberKey, {
          profileUrl: data.profileUrl || "",
        });

        setState((current) => ({
          ...current,
          status: "unlocked",
          error: "",
          password: "",
          profileUrl: data.profileUrl || "",
        }));
        return;
      }

      setState((current) => ({
        ...current,
        status: "locked",
        frameSrc: "",
        error: data.error || "Unable to unlock this profile.",
        profileUrl: "",
      }));
    }

    window.addEventListener("message", onMessage);
    return () => {
      window.removeEventListener("message", onMessage);
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [memberKey]);

  async function handleUnlock(e) {
    e.preventDefault();

    const password = state.password.trim();

    if (!password) {
      setState((current) => ({
        ...current,
        error: "Enter the password to view this profile.",
      }));
      return;
    }

    if (!TEAM_IMAGE_PROXY) {
      setState((current) => ({
        ...current,
        error: "Protected image service is not configured.",
      }));
      return;
    }

    if (!window.crypto?.subtle) {
      setState((current) => ({
        ...current,
        error: "This browser cannot unlock protected profiles.",
      }));
      return;
    }

    try {
      const passwordHash = await sha256Hex(password);
      const requestToken = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
      const params = new URLSearchParams({
        action: "protected-member",
        member: memberKey,
        passwordHash,
        origin: window.location.origin,
        requestToken,
      });

      setState((current) => ({
        ...current,
        status: "loading",
        error: "",
        requestToken,
        frameSrc: `${TEAM_IMAGE_PROXY}?${params.toString()}`,
        profileUrl: "",
      }));

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        setState((current) => {
          if (current.requestToken !== requestToken || current.status !== "loading") {
            return current;
          }

          return {
            ...current,
            status: "locked",
            frameSrc: "",
            error: "The protected image service did not respond. Check the Apps Script deployment and permissions.",
          };
        });
        timeoutRef.current = null;
      }, 8000);
    } catch (error) {
      console.error("Protected member unlock error:", error);
      setState((current) => ({
        ...current,
        status: "locked",
        error: "Unable to process the password right now.",
        profileUrl: "",
      }));
    }
  }

  return (
    <div className="cx-frame cx-frameProtected">
      {state.frameSrc ? (
        <iframe
          className="cx-protectedEmbed"
          title={`${name} protected profile`}
          src={state.frameSrc}
        />
      ) : (
        <div className="cx-protectedPlaceholder" aria-hidden="true">
          <div className="cx-protectedGlow" />
          <div className="cx-protectedBadge">Protected</div>
          <div className="cx-protectedInitials">AQ</div>
        </div>
      )}

      {state.status !== "unlocked" && (
        <div className="cx-protectedOverlay">
          <div className="cx-protectedEyebrow">Private profile</div>
          <div className="cx-protectedTitle">Protected Member</div>
          <p className="cx-protectedText">
            This member photo is hidden by default. Enter the password to reveal it.
          </p>

          <form className="cx-protectedForm" onSubmit={handleUnlock}>
            <input
              className="cx-protectedInput"
              type="password"
              value={state.password}
              onChange={(e) =>
                setState((current) => ({
                  ...current,
                  password: e.target.value,
                  error: "",
                }))
              }
              placeholder="Enter password"
              autoComplete="off"
            />
            <button
              className="cx-protectedButton"
              type="submit"
              disabled={state.status === "loading"}
            >
              {state.status === "loading" ? "Checking..." : "View Image"}
            </button>
          </form>

          {state.error ? <div className="cx-protectedError">{state.error}</div> : null}
        </div>
      )}

    </div>
  );
}

export default function CoFounders() {
  const { ref, inView } = useInView();
  const [protectedNames, setProtectedNames] = useState({
    aqsa: false,
  });

  useEffect(() => {
    function handleProtectedMemberUnlock(event) {
      const detail = event.detail;
      const memberKey = String(detail?.memberKey || "").toLowerCase();

      if (!memberKey) {
        return;
      }

      setProtectedNames((current) => ({
        ...current,
        [memberKey]: Boolean(detail?.unlocked),
      }));
    }

    window.addEventListener(PROTECTED_MEMBER_UNLOCK_EVENT, handleProtectedMemberUnlock);

    return () => {
      window.removeEventListener(PROTECTED_MEMBER_UNLOCK_EVENT, handleProtectedMemberUnlock);
    };
  }, []);

  const members = useMemo(
    () => [
      {
        key: "ashar",
        name: "Mohammad Ashar",
        role: "Co-Founder | Cloud & Security",
        line1: "Manages website development and research",
        line2: "Handles security, legal compliance, and operations",
        img: asharImg,
      },
      {
        key: "tabish",
        name: "Tabish Shaikh",
        role: "Co-Founder | Computer Engineer",
        line1: "Leads AI/ML development and model integration,",
        line2: "Handles backend architecture and system logic",
        img: tabishImg,
      },
      {
        key: "aqsa",
        name: "Aqsa Shah",
        role: "Co-Founder | ECS Engineer",
        line1: "Oversees finance and frontend development",
        line2: "Leads marketing, strategy, and content creation",
        protectedImage: true,
      },
    ],
    []
  );

  return (
    <Section title="Team" subtitle="The people behind CensorX.">
      <style>{`
        .cx-teamWrap{
          margin-top: 16px;
          width: 100%;
          max-width: 980px;
          margin-left: auto;
          margin-right: auto;
          padding: 0 12px;
        }

        .cx-teamGrid{
          display: grid;
          gap: 14px;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          justify-items: center;
          align-items: start;
        }

        @media (max-width: 980px){
          .cx-teamWrap{ max-width: 760px; }
          .cx-teamGrid{ grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (max-width: 640px){
          .cx-teamWrap{ max-width: 360px; }
          .cx-teamGrid{ grid-template-columns: 1fr; gap: 12px; }
        }

        .cx-teamCard{
          width: 100%;
          max-width: 500px;
          border-radius: 22px;
          overflow: hidden;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.10);
          box-shadow: 0 14px 40px rgba(0,0,0,0.18);
          transform: translateY(12px);
          opacity: 0;
          transition: transform 850ms cubic-bezier(.2,.8,.2,1), opacity 850ms ease;
        }
        .cx-teamCard.in{ transform: translateY(0); opacity: 1; }
        .cx-teamCard:hover{ transform: translateY(-3px); }

        @media (max-width: 980px){
          .cx-teamCard{ max-width: 320px; }
        }
        @media (max-width: 640px){
          .cx-teamCard{ max-width: 320px; }
        }

        .cx-frame{
          width: 100%;
          max-width: 200px;
          aspect-ratio: 415 / 600;
          margin: 14px auto 0;
          border-radius: 18px;
          overflow: hidden;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.10);
          position: relative;
        }

        @media (max-width: 980px){
          .cx-frame{ max-width: 260px; }
        }

        @media (max-width: 640px){
          .cx-frame{
            max-width: 240px;
            margin-top: 12px;
            border-radius: 16px;
          }
        }

        .cx-frame img,
        .cx-protectedEmbed{
          width: 100%;
          height: 100%;
          border: 0;
          display: block;
          object-fit: cover;
          object-position: center;
          transform: scale(1.02);
          transition: transform 900ms cubic-bezier(.2,.8,.2,1);
        }

        .cx-frame::after{
          content:"";
          position:absolute;
          inset:0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.00), rgba(0,0,0,0.28));
          pointer-events:none;
          z-index: 1;
        }

        .cx-teamCard:hover .cx-frame img{ transform: scale(1.05); }

        .cx-frameProtected{
          background:
            linear-gradient(180deg, rgba(8, 33, 36, 0.92), rgba(2, 15, 18, 1)),
            radial-gradient(circle at top, rgba(62, 214, 220, 0.18), transparent 58%);
        }

        .cx-protectedPlaceholder{
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          overflow: hidden;
        }

        .cx-protectedGlow{
          position: absolute;
          inset: -18%;
          background:
            radial-gradient(circle at top, rgba(79, 195, 247, 0.42), transparent 38%),
            radial-gradient(circle at bottom, rgba(24, 255, 214, 0.24), transparent 42%);
          filter: blur(26px);
          transform: scale(1.1);
        }

        .cx-protectedBadge{
          position: absolute;
          top: 16px;
          left: 16px;
          z-index: 2;
          padding: 6px 10px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(0,0,0,0.36);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .cx-protectedInitials{
          position: relative;
          z-index: 2;
          width: 120px;
          height: 120px;
          border-radius: 999px;
          display: grid;
          place-items: center;
          font-size: 34px;
          font-weight: 800;
          letter-spacing: 0.04em;
          color: rgba(255,255,255,0.9);
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.14);
          backdrop-filter: blur(10px);
          filter: blur(10px);
          transform: scale(1.08);
        }

        .cx-protectedOverlay{
          position: absolute;
          inset: 0;
          z-index: 3;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 10px;
          padding: 18px;
          background:
            linear-gradient(to top, rgba(1, 7, 9, 0.94), rgba(1, 7, 9, 0.55) 48%, rgba(1, 7, 9, 0.18));
          backdrop-filter: blur(12px);
        }

        .cx-protectedEyebrow{
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(147, 233, 237, 0.9);
        }

        .cx-protectedTitle{
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .cx-protectedText{
          margin: 0;
          font-size: 12.5px;
          line-height: 1.55;
          color: rgba(255,255,255,0.82);
        }

        .cx-protectedForm{
          display: grid;
          gap: 8px;
        }

        .cx-protectedInput{
          width: 100%;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.06);
          color: #fff;
          padding: 11px 13px;
          border-radius: 12px;
          outline: none;
        }

        .cx-protectedInput::placeholder{
          color: rgba(255,255,255,0.48);
        }

        .cx-protectedInput:focus{
          border-color: rgba(79, 195, 247, 0.48);
          box-shadow: 0 0 0 3px rgba(79, 195, 247, 0.12);
        }

        .cx-protectedButton{
          border: 0;
          border-radius: 12px;
          padding: 11px 14px;
          font-weight: 700;
          color: #03171a;
          background: linear-gradient(135deg, #52dfe6, #39b7c2);
          cursor: pointer;
        }

        .cx-protectedButton:disabled{
          cursor: wait;
          opacity: 0.7;
        }

        .cx-protectedError{
          font-size: 12px;
          line-height: 1.5;
          color: #ffb6b6;
        }

        .cx-text{
          padding: 12px 16px 16px;
          text-align: center;
        }

        .cx-name{
          margin: 10px 0 0;
          font-size: 20px;
          font-weight: 850;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .cx-role{
          margin: 10px 0 0;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          font-size: 12px;
          font-weight: 650;
          opacity: 0.92;
        }

        .cx-dot{
          width: 7px;
          height: 7px;
          border-radius: 99px;
          background: var(--accent, #4FC3F7);
          box-shadow: 0 0 0 4px rgba(79,195,247,0.12);
          flex: 0 0 auto;
        }

        .cx-divider{
          width: 34px;
          height: 2px;
          border-radius: 999px;
          margin: 12px auto 10px;
          background: rgba(255,255,255,0.18);
        }

        .cx-desc{
          margin: 0;
          font-size: 12.5px;
          line-height: 1.6;
          opacity: 0.88;
        }

        @keyframes cxFloat{
          0%{ transform: translateY(0); }
          50%{ transform: translateY(-5px); }
          100%{ transform: translateY(0); }
        }

        .cx-teamCard.in .cx-frame{
          animation: cxFloat 7.2s ease-in-out 1.2s infinite;
        }
      `}</style>

      <Underline />

      <div ref={ref} className="cx-teamWrap">
        <div className="cx-teamGrid">
          {members.map((m, idx) => {
            const isProtectedUnlocked = m.protectedImage && protectedNames[m.key];
            const displayName = m.protectedImage && !isProtectedUnlocked ? "Protected Member" : m.name;

            return (
            <Card
              key={m.key}
              className={`soft cx-teamCard ${inView ? "in" : ""}`}
              style={{ transitionDelay: `${inView ? idx * 120 : 0}ms` }}
            >
              {m.protectedImage ? (
                <ProtectedMemberFrame memberKey={m.key} name={m.name} />
              ) : (
                <div className="cx-frame">
                  <img src={m.img} alt={m.name} />
                </div>
              )}

              <div className="cx-text">
                <h3 className="cx-name">{displayName}</h3>

                <div className="cx-role">
                  <span className="cx-dot" aria-hidden="true" />
                  <span>{m.role}</span>
                </div>

                <div className="cx-divider" />

                <p className="cx-desc">
                  {m.line1} {m.line2}
                </p>
              </div>
            </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
