import React from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

export default function TrustSignals() {
  return (
    <Section title="Trust & ethics" subtitle="Safety only works when users trust it.">
      <Card
        className="soft"
        style={{
          borderRadius: 22,
          overflow: "hidden",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(0,0,0,0.10))",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 18px 55px rgba(0,0,0,0.22)",
        }}
      >
        <style>{`
          .cx-legalWrap{
            padding: 16px;
          }

          .cx-legalTop{
            display:flex;
            align-items:flex-start;
            justify-content: space-between;
            gap: 12px;
            padding: 14px 14px 12px;
            border-radius: 18px;
            background: rgba(255,255,255,0.03);
            border: 1px solid rgba(255,255,255,0.06);
          }

          .cx-legalBadgeRow{
            display:flex;
            align-items:center;
            gap: 10px;
            flex-wrap: wrap;
          }

          .cx-legalBadge{
            display:inline-flex;
            align-items:center;
            gap: 8px;
            padding: 8px 10px;
            border-radius: 999px;
            border: 1px solid rgba(50,178,169,0.22);
            background: rgba(50,178,169,0.08);
            color: rgba(255,255,255,0.84);
            font-size: 12px;
            font-weight: 850;
            letter-spacing: -0.01em;
          }

          .cx-legalMeta{
            color: rgba(255,255,255,0.55);
            font-size: 12px;
            line-height: 1.4;
            text-align: right;
            white-space: nowrap;
          }

          .cx-legalGrid{
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 12px;
            margin-top: 12px;
          }

          @media (max-width: 980px){
            .cx-legalGrid{ grid-template-columns: repeat(2, minmax(0, 1fr)); }
            .cx-legalMeta{ display:none; }
          }
          @media (max-width: 640px){
            .cx-legalGrid{ grid-template-columns: 1fr; }
          }

          .cx-legalItem{
            position: relative;
            padding: 14px 14px 12px;
            border-radius: 18px;
            background: rgba(0,0,0,0.22);
            border: 1px solid rgba(255,255,255,0.08);
            overflow:hidden;
          }

          .cx-legalItem::before{
            content:"";
            position:absolute;
            inset:-2px;
            background:
              radial-gradient(360px 160px at 18% 0%, rgba(50,178,169,0.16), transparent 60%),
              radial-gradient(340px 150px at 90% 30%, rgba(255,255,255,0.06), transparent 65%);
            opacity: 0.85;
            pointer-events:none;
          }

          .cx-legalRow{
            position: relative;
            display:flex;
            gap: 12px;
            align-items:flex-start;
          }

          .cx-legalIcon{
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display:grid;
            place-items:center;
            background: rgba(50,178,169,0.10);
            border: 1px solid rgba(50,178,169,0.22);
            box-shadow: 0 10px 24px rgba(0,0,0,0.22);
            flex: 0 0 auto;
          }

          .cx-legalTitle{
            margin: 0;
            font-weight: 950;
            letter-spacing: -0.01em;
            color: rgba(255,255,255,0.92);
            font-size: 13.5px;
            line-height: 1.2;
          }

          .cx-legalText{
            margin-top: 6px;
            color: rgba(255,255,255,0.70);
            font-size: 12.5px;
            line-height: 1.65;
          }

          .cx-legalFooter{
            margin-top: 12px;
            padding: 12px 14px;
            border-top: 1px solid rgba(255,255,255,0.07);
            display:flex;
            align-items:flex-start;
            gap: 10px;
            color: rgba(255,255,255,0.62);
            font-size: 12px;
            line-height: 1.55;
          }

          .cx-legalFooter strong{
            color: rgba(255,255,255,0.86);
            font-weight: 850;
          }
        `}</style>

        <div className="cx-legalWrap">
          {/* Top line like a legal header */}
          <div className="cx-legalTop">
            <div className="cx-legalBadgeRow">
              <span className="cx-legalBadge">
                <DocIcon />
                Policy principles
              </span>
              <span className="cx-legalBadge">
                <ShieldIcon />
                Privacy-first
              </span>
            </div>

            <div className="cx-legalMeta" aria-hidden="true">
              Internal guidelines
              <br />
              v1.0
            </div>
          </div>

          {/* Items */}
          <div className="cx-legalGrid">
            <Item
              icon={<DeviceIcon />}
              title="On-device processing"
              text="Designed so sensitive content doesn’t need to leave your phone."
            />
            <Item
              icon={<ConsentIcon />}
              title="Consent-driven"
              text="Permissions are explained clearly and used only for protection."
            />
            <Item
              icon={<EthicsIcon />}
              title="Ethical AI"
              text="Built to reduce harm, avoid misuse, and protect vulnerable users."
            />
          </div>

          {/* Simple legal note */}
          <div className="cx-legalFooter">
            <InfoIcon />
            <div>
              <strong>Commitment:</strong> CensorX aims to protect users in real-time while minimizing data exposure.
              Features are built to respect privacy, dignity, and trust.
            </div>
          </div>
        </div>
      </Card>
    </Section>
  );
}

function Item({ icon, title, text }) {
  return (
    <div className="cx-legalItem">
      <div className="cx-legalRow">
        <div className="cx-legalIcon" aria-hidden="true">
          {icon}
        </div>

        <div style={{ position: "relative" }}>
          <div className="cx-legalTitle">{title}</div>
          <div className="cx-legalText">{text}</div>
        </div>
      </div>
    </div>
  );
}

/* --- Simple inline SVGs (minimal + legal vibe) --- */

function DocIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M7 3h7l3 3v15H7V3z" stroke="rgba(255,255,255,0.85)" strokeWidth="2" strokeLinejoin="round" />
      <path d="M14 3v4h4" stroke="rgba(255,255,255,0.65)" strokeWidth="2" strokeLinejoin="round" />
      <path d="M9 12h6M9 16h6" stroke="rgba(50,178,169,0.9)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3l7 4v6c0 5-3 8-7 8s-7-3-7-8V7l7-4z"
        stroke="rgba(255,255,255,0.85)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M9.5 12l1.7 1.7L14.8 10" stroke="#32b2a9" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DeviceIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M8 3h8a2 2 0 012 2v14a2 2 0 01-2 2H8a2 2 0 01-2-2V5a2 2 0 012-2z" stroke="rgba(255,255,255,0.85)" strokeWidth="2" />
      <path d="M10 18h4" stroke="#32b2a9" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function ConsentIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M7 7h10v14H7V7z" stroke="rgba(255,255,255,0.85)" strokeWidth="2" strokeLinejoin="round" />
      <path d="M9 3h6v4H9V3z" stroke="rgba(255,255,255,0.65)" strokeWidth="2" strokeLinejoin="round" />
      <path d="M9 12h6M9 16h5" stroke="#32b2a9" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function EthicsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M12 4v16" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M6 8h12l-1.4 3.2a4 4 0 01-3.7 2.4h-1.9a4 4 0 01-3.7-2.4L6 8z"
        stroke="rgba(255,255,255,0.85)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M9 19h6" stroke="#32b2a9" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flex: "0 0 auto" }}>
      <path
        d="M12 22a10 10 0 100-20 10 10 0 000 20z"
        stroke="rgba(255,255,255,0.55)"
        strokeWidth="2"
      />
      <path d="M12 10v6" stroke="#32b2a9" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M12 7h.01" stroke="#32b2a9" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
