import React, { useEffect, useMemo, useRef, useState } from "react";

export default function CensorXMobileDemo() {
  // ---------- FEED DATA (✅ harmful appears more often / alternating) ----------
  const posts = useMemo(
    () => [
      { id: "p1", type: "safe", user: "riya_arts", loc: "Mumbai • Following", img: safeImg1() },
      { id: "p2", type: "harm", user: "unknown_account", loc: "Suggested • Explore", img: harmImg() },
      { id: "p3", type: "safe", user: "sam_travel", loc: "Goa • Following", img: safeImg2() },
      { id: "p4", type: "harm", user: "unknown_account", loc: "Suggested • Explore", img: harmImg() },
      { id: "p5", type: "safe", user: "nina_design", loc: "Pune • Following", img: safeImg3() },
      { id: "p6", type: "harm", user: "unknown_account", loc: "Suggested • Explore", img: harmImg() },
      { id: "p7", type: "safe", user: "mike_fit", loc: "Delhi • Following", img: safeImg4() },
    ],
    []
  );

  // Duplicate list for seamless loop
  const loopPosts = useMemo(() => [...posts, ...posts], [posts]);

  // ---------- REFS ----------
  const feedRef = useRef(null);
  const scrollerRef = useRef(null);

  // We'll mark *all* harmful posts, and detect any visible one
  const harmfulRefs = useRef([]);

  // ---------- STATE ----------
  const [y, setY] = useState(0);
  const [harmInView, setHarmInView] = useState(false);
  const [blurOn, setBlurOn] = useState(false);

  // toast action cycling (only shown when blur is active)
  const actions = useMemo(() => ["Blur", "Warn", "Notify", "Block"], []);
  const [actionIndex, setActionIndex] = useState(0);

  // ---------- SCROLL (REALISTIC, JS-DRIVEN) ----------
  useEffect(() => {
    let raf = 0;
    let last = performance.now();

    // speed: px/sec (tweak if you want slower/faster)
    const speed = 34;

    function tick(now) {
      const dt = (now - last) / 1000;
      last = now;

      const scroller = scrollerRef.current;
      if (scroller) {
        // We want to loop after half content height (because duplicated list)
        const h = scroller.scrollHeight / 2 || 1;

        setY((prev) => {
          let next = prev + speed * dt;
          if (next >= h) next = next - h;
          return next;
        });

        // ---- Detect harmful in view (based on bounding rects) ----
        const feed = feedRef.current;
        if (feed) {
          const feedRect = feed.getBoundingClientRect();
          let anyHarmVisible = false;

          for (const el of harmfulRefs.current) {
            if (!el) continue;
            const r = el.getBoundingClientRect();

            // consider harmful "arrived" when a decent chunk is inside viewport
            const overlapTop = Math.max(r.top, feedRect.top);
            const overlapBottom = Math.min(r.bottom, feedRect.bottom);
            const overlap = Math.max(0, overlapBottom - overlapTop);
            const visibleRatio = overlap / Math.max(1, r.height);

            if (visibleRatio > 0.45) {
              anyHarmVisible = true;
              break;
            }
          }

          setHarmInView(anyHarmVisible);
        }
      }

      raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Smooth Detect -> Blur and Blur -> Normal
  useEffect(() => {
    let t;
    if (harmInView) {
      // small delay to feel like "AI detected then acted"
      t = setTimeout(() => setBlurOn(true), 220);
    } else {
      setBlurOn(false);
    }
    return () => clearTimeout(t);
  }, [harmInView]);

  // Action chip cycling
  useEffect(() => {
    const t = setInterval(() => setActionIndex((x) => (x + 1) % actions.length), 1100);
    return () => clearInterval(t);
  }, [actions.length]);

  // ---------- RENDER ----------
  return (
    <div className="cxWrap">
      <style>{`
        /* ===== Scoped styles (ONLY this component) ===== */
        .cxWrap{
  padding: clamp(16px, 2.2vw, 22px);
  background: transparent;
  border: 0;
  box-shadow: none;
}


        .cxTop{
          display:flex; align-items: baseline; justify-content: space-between; gap: 12px;
          margin-bottom: 12px;
        }
        .cxBrand{ display:flex; align-items:center; gap:10px; }
        .cxGlowDot{
          width: 10px; height: 10px; border-radius: 999px;
          background: rgba(50,178,169,0.60);
          box-shadow: 0 0 0 7px rgba(50,178,169,0.12);
        }
        .cxName{ font-weight: 950; letter-spacing: -0.02em; font-size: 16px; }
        .cxTag{ font-size: 12px; color: var(--muted2); }

        /* ✅ narrower phone */
        .phone{
          position: relative;

          /* 🔽 reduced width */
          width: min(230px, 100%);
          height: 420px;

          margin: 0 auto;
          border-radius: 30px;
          border: 1px solid rgba(255,255,255,0.12);
        background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(0,0,0,0.30));


          box-shadow: 0 18px 55px rgba(0,0,0,0.55);
          overflow: hidden;
          transform: translateZ(0);
        }

        .phone::before{
          content:"";
          position:absolute; inset:0;
          background:
            radial-gradient(1000px 520px at 25% -10%, rgba(50,178,169,0.14), transparent 60%),
            radial-gradient(800px 420px at 110% 20%, rgba(35,127,121,0.14), transparent 55%);
          pointer-events:none;
        }

        .bezel{
          position:absolute; inset: 10px;
          border-radius: 32px;
          background: rgba(0,0,0,0.18);
          border: 1px solid rgba(255,255,255,0.06);
          overflow: hidden;
          z-index: 1;
        }

        .notch{
          position:absolute;
          top: 10px; left: 50%;
          transform: translateX(-50%);
          width: 132px; height: 28px;
          border-radius: 0 0 18px 18px;
          background: rgba(0,0,0,0.55);
          border: 1px solid rgba(255,255,255,0.06);
          z-index: 20;
        }
        .notch::after{
          content:"";
          position:absolute;
          top: 10px; left: 50%;
          transform: translateX(-50%);
          width: 44px; height: 6px;
          border-radius: 999px;
          background: rgba(255,255,255,0.10);
        }

        .status{
          position:absolute;
          top: 12px; left: 14px; right: 14px;
          display:flex; justify-content: space-between;
          font-size: 12px;
          color: rgba(255,255,255,0.82);
          z-index: 19;
          pointer-events:none;
        }
        .status b{ font-weight: 900; letter-spacing: 0.02em; }
        .sys{ opacity: 0.75; display:flex; align-items:center; gap:6px; }
        .sys svg{ width: 14px; height: 14px; opacity: 0.85; }

        .appBar{
          position:absolute;
          top: 44px; left:0; right:0;
          height: 52px;
          display:flex; align-items:center; justify-content: space-between;
          padding: 0 14px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          background: rgba(0,0,0,0.18);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 18;
        }
        .igLogo{
          font-weight: 950; letter-spacing: -0.02em;
          display:flex; align-items:center; gap:8px;
        }
        .igLogo svg{ width: 16px; height: 16px; opacity: 0.92; }
        .appIcons{ display:flex; align-items:center; gap:12px; opacity: 0.92; }
        .appIcons svg{ width: 18px; height: 18px; }

        /* ✅ Removed stories section */

        /* Feed viewport */
        .feed{
          position:absolute;
          top: 98px; left:0; right:0; bottom: 54px;
          overflow:hidden;
          z-index: 2;
        }

        .scroller{
          will-change: transform;
          transform: translate3d(0,0,0);
        }

        .post{ padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.06); }
        .postHead{ display:flex; align-items:center; gap:10px; margin-bottom: 10px; }
        .avatar{
          width: 34px; height: 34px;
          border-radius: 999px;
          background: radial-gradient(circle at 30% 20%, rgba(255,255,255,0.12), rgba(255,255,255,0.04));
          border: 1px solid rgba(255,255,255,0.08);
        }
        .meta{ line-height: 1.1; }
        .user{ font-weight: 950; font-size: 13px; }
        .loc{ font-size: 11px; color: rgba(255,255,255,0.62); margin-top: 3px; }
        .more{ margin-left:auto; opacity: 0.65; }

        .media{
          position: relative;
          height: 165px;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.03);
          box-shadow: 0 12px 40px rgba(0,0,0,0.35);
        }
        .media img{
          position:absolute;
          inset:0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display:block;
        }

        /* Harmful post has red tint + warning badge (even before blur) */
        .harmBadge{
          position:absolute;
          left: 12px;
          top: 12px;
          display:flex;
          align-items:center;
          gap: 8px;
          padding: 7px 10px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 950;
          letter-spacing: 0.02em;
          background: rgba(0,0,0,0.55);
          border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.90);
        }
        .harmDot{
          width: 8px; height: 8px; border-radius: 999px;
          background: rgba(255,70,90,0.75);
          box-shadow: 0 0 0 6px rgba(255,70,90,0.14);
        }

        .harmTint{
          position:absolute;
          inset:0;
          background: rgba(255,60,90,0.18);
          opacity: 0;
          transition: opacity .25s ease;
        }
        .phone.harm .harmTint{ opacity: 1; }

        /* Whole-screen blur overlay (✅ ONLY when harmful in view) */
        .screenBlur{
          position:absolute;
          inset:0;
          z-index: 50;
          pointer-events:none;
          opacity: 0;
          backdrop-filter: blur(0px);
          -webkit-backdrop-filter: blur(0px);
          background: rgba(0,0,0,0.0);
          transition: opacity .35s ease, backdrop-filter .45s ease, background .45s ease;
        }
        .phone.blur .screenBlur{
          opacity: 1;
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          background: rgba(0,0,0,0.16);
        }

        /* Scan line only during harm/blur */
        .scan{
          position:absolute;
          left: -45%;
          top: 0;
          width: 48%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(50,178,169,0.08),
            rgba(50,178,169,0.20),
            rgba(50,178,169,0.06),
            transparent
          );
          transform: skewX(-14deg);
          opacity: 0;
          pointer-events:none;
          z-index: 60;
        }
        .phone.harm .scan,
        .phone.blur .scan{
          opacity: 0.55;
          animation: scanMove 1.6s ease-in-out infinite;
        }
        @keyframes scanMove{
          0%{ transform: translateX(-70%) skewX(-14deg); opacity: 0; }
          20%{ opacity: .55; }
          100%{ transform: translateX(260%) skewX(-14deg); opacity: 0; }
        }

        .actions{
          margin-top: 10px;
          display:flex;
          align-items:center;
          gap: 14px;
          opacity: 0.92;
        }
        .actions svg{ width: 18px; height: 18px; }
        .actions .spacer{ margin-left:auto; opacity: 0.7; }

        .caption{
          margin-top: 8px;
          font-size: 12px;
          color: rgba(255,255,255,0.74);
          line-height: 1.6;
        }
        .caption b{ color: rgba(255,255,255,0.90); }

        .toast{
          position:absolute;
          left: 14px;
          right: 14px;
          bottom: 70px;
          display:flex;
          gap: 10px;
          align-items:center;
          padding: 12px 12px;
          border-radius: 18px;
          background: rgba(0,0,0,0.66);
          border: 1px solid rgba(255,255,255,0.12);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transform: translateY(18px);
          opacity: 0;
          transition: opacity .35s ease, transform .35s ease;
          pointer-events:none;
          z-index: 70;
        }
        .toast.show{ opacity: 1; transform: translateY(0); }
        .toastDot{
          width: 10px; height: 10px; border-radius: 999px;
          background: rgba(50,178,169,0.60);
          box-shadow: 0 0 0 7px rgba(50,178,169,0.12);
          flex: 0 0 auto;
        }
        .toastTitle{ font-weight: 950; font-size: 13px; }
        .toastSub{ font-size: 12px; color: rgba(255,255,255,0.76); margin-top: 2px; }

        .bottom{
          position:absolute; left:0; right:0; bottom:0;
          height: 54px;
          display:flex; justify-content: space-around; align-items:center;
          border-top: 1px solid rgba(255,255,255,0.06);
          background: rgba(0,0,0,0.22);
          z-index: 16;
          opacity: 0.95;
        }
        .bottom svg{ width: 20px; height: 20px; opacity: 0.9; }

        .foot{
          margin-top: 10px;
          font-size: 12px;
          color: var(--muted2);
          text-align:center;
        }

        @media (max-width: 420px){
          .phone{ width: min(320px, 100%); height: 600px; }
          .feed{ top: 100px; bottom: 58px; }
          .media{ height: 210px; }
          .bottom{ height: 58px; }
        }
      `}</style>

      <div className="cxTop">
        <div className="cxBrand">
          <span className="cxGlowDot" aria-hidden="true" />
          <span className="cxName">CensorX</span>
        </div>
        <div className="cxTag">Blurs the screen only when harmful content appears</div>
      </div>

      <div className={`phone ${harmInView ? "harm" : ""} ${blurOn ? "blur" : ""}`}>
        <div className="bezel">
          <div className="notch" aria-hidden="true" />

          <div className="status">
            <span><b>9:41</b></span>
            <span className="sys">
              <WifiIcon />
              <SignalIcon />
              <BatteryIcon />
            </span>
          </div>

          <div className="appBar">
            <div className="igLogo">
              <InstaGlyph /> Social 
            </div>
            <div className="appIcons" aria-hidden="true">
              <HeartIcon />
              <DmIcon />
              <PlusIcon />
            </div>
          </div>

          {/* ✅ Stories removed */}

          <div className="feed" ref={feedRef}>
            <div
              className="scroller"
              ref={scrollerRef}
              style={{ transform: `translate3d(0, ${-y}px, 0)` }}
            >
              {loopPosts.map((p, idx) => {
                const isHarm = p.type === "harm";
                return (
                  <div className="post" key={`${p.id}-${idx}`}>
                    <div className="postHead">
                      <div className="avatar" />
                      <div className="meta">
                        <div className="user">{p.user}</div>
                        <div className="loc">{p.loc}</div>
                      </div>
                      <div className="more" aria-hidden="true">⋯</div>
                    </div>

                    <div
                      className={`media ${isHarm ? "harm" : ""}`}
                      ref={(el) => {
                        if (!isHarm) return;
                        if (el) harmfulRefs.current[idx] = el;
                      }}
                    >
                      <img src={p.img} alt="" />
                      {isHarm && <div className="harmTint" aria-hidden="true" />}
                      {isHarm && (
                        <div className="harmBadge">
                          <span className="harmDot" aria-hidden="true" />
                          Harmful content
                        </div>
                      )}
                    </div>

                    <div className="actions" aria-hidden="true">
                      <HeartIcon />
                      <CommentIcon />
                      <ShareIcon />
                      <span className="spacer"><SaveIcon /></span>
                    </div>

                    <div className="caption">
                      <b>{isHarm ? "warning:" : "new post:"}</b>{" "}
                      {isHarm ? "explicit / disturbing content may appear" : "safe content continues normally"}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Scan line */}
          <div className="scan" aria-hidden="true" />

          {/* Whole-screen blur overlay */}
          <div className="screenBlur" aria-hidden="true" />

          {/* Toast only when blur is on */}
          <div className={`toast ${blurOn ? "show" : ""}`}>
            <div className="toastDot" aria-hidden="true" />
            <div>
              <div className="toastTitle">CensorX protected your feed</div>
              <div className="toastSub">
                Harmful content detected • Action: <b>{actions[actionIndex]}</b>
              </div>
            </div>
          </div>

          <div className="bottom" aria-hidden="true">
            <HomeIcon />
            <SearchIcon />
            <ReelsIcon />
            <ShopIcon />
            <ProfileIcon />
          </div>
        </div>
      </div>

      <div className="foot">Detects harmful content in view → blurs screen → restores automatically</div>
    </div>
  );
}

/* ---------------- Inline SVG icons ---------------- */
function InstaGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7.5 2.8h9c2.6 0 4.7 2.1 4.7 4.7v9c0 2.6-2.1 4.7-4.7 4.7h-9c-2.6 0-4.7-2.1-4.7-4.7v-9c0-2.6 2.1-4.7 4.7-4.7Z" stroke="rgba(255,255,255,0.92)" strokeWidth="1.6"/>
      <path d="M12 8.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6Z" stroke="rgba(255,255,255,0.92)" strokeWidth="1.6"/>
      <path d="M17.6 6.9h.01" stroke="rgba(255,255,255,0.92)" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}
function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 20s-7-4.4-9.3-8.4C.9 7.7 3.4 5 6.4 5c1.6 0 3 .8 3.8 2 0 0 1.4-2 3.8-2 3 0 5.5 2.7 3.7 6.6C19 15.6 12 20 12 20Z" stroke="rgba(255,255,255,0.92)" strokeWidth="1.6" />
    </svg>
  );
}
function CommentIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 15a4 4 0 0 1-4 4H8l-4 3V7a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8Z" stroke="rgba(255,255,255,0.92)" strokeWidth="1.6" />
    </svg>
  );
}
function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M22 2 11 13" stroke="rgba(255,255,255,0.92)" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M22 2 15 22l-4-9-9-4 20-7Z" stroke="rgba(255,255,255,0.92)" strokeWidth="1.6" strokeLinejoin="round"/>
    </svg>
  );
}
function SaveIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 3h12v18l-6-4-6 4V3Z" stroke="rgba(255,255,255,0.92)" strokeWidth="1.6" />
    </svg>
  );
}
function DmIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M22 2 11 13" stroke="rgba(255,255,255,0.92)" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M22 2 15 22l-4-9-9-4 20-7Z" stroke="rgba(255,255,255,0.92)" strokeWidth="1.6" strokeLinejoin="round"/>
    </svg>
  );
}
function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 5v14M5 12h14" stroke="rgba(255,255,255,0.92)" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}
function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V10.5Z" stroke="rgba(255,255,255,0.92)" strokeWidth="1.6" strokeLinejoin="round"/>
    </svg>
  );
}
function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" stroke="rgba(255,255,255,0.92)" strokeWidth="1.6"/>
      <path d="M16.5 16.5 21 21" stroke="rgba(255,255,255,0.92)" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}
function ReelsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7Z" stroke="rgba(255,255,255,0.92)" strokeWidth="1.6"/>
      <path d="M9 9.5v5l5-2.5-5-2.5Z" fill="rgba(255,255,255,0.88)"/>
      <path d="M4.5 8h15" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4"/>
    </svg>
  );
}
function ShopIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 9V7a6 6 0 0 1 12 0v2" stroke="rgba(255,255,255,0.92)" strokeWidth="1.6"/>
      <path d="M5 9h14l-1 12H6L5 9Z" stroke="rgba(255,255,255,0.92)" strokeWidth="1.6" strokeLinejoin="round"/>
    </svg>
  );
}
function ProfileIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" stroke="rgba(255,255,255,0.92)" strokeWidth="1.6"/>
      <path d="M4 21a8 8 0 0 1 16 0" stroke="rgba(255,255,255,0.92)" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}
function WifiIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 9.5a10 10 0 0 1 14 0" stroke="rgba(255,255,255,0.9)" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M8.5 13a5.5 5.5 0 0 1 7 0" stroke="rgba(255,255,255,0.9)" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M12 17h.01" stroke="rgba(255,255,255,0.9)" strokeWidth="3.2" strokeLinecap="round"/>
    </svg>
  );
}
function SignalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 20v-3" stroke="rgba(255,255,255,0.9)" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M9 20v-6" stroke="rgba(255,255,255,0.9)" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M13 20v-9" stroke="rgba(255,255,255,0.9)" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M17 20v-12" stroke="rgba(255,255,255,0.9)" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}
function BatteryIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 9h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H3V9Z" stroke="rgba(255,255,255,0.9)" strokeWidth="1.6"/>
      <path d="M21 10v4" stroke="rgba(255,255,255,0.9)" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M5 11h9v2H5v-2Z" fill="rgba(255,255,255,0.85)"/>
    </svg>
  );
}

/* ---------------- Tiny inline “pictures” (data URIs) ---------------- */
function svgDataUri(svg) {
  const encoded = encodeURIComponent(svg).replace(/'/g, "%27").replace(/"/g, "%22");
  return `data:image/svg+xml;charset=utf-8,${encoded}`;
}

function safeImg1() {
  return svgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#32b2a9" stop-opacity="0.35"/>
          <stop offset="1" stop-color="#0b1f1f" stop-opacity="1"/>
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#g)"/>
      <circle cx="160" cy="170" r="120" fill="#ffffff" opacity="0.10"/>
      <circle cx="640" cy="140" r="160" fill="#ffffff" opacity="0.06"/>
      <rect x="90" y="360" width="620" height="120" rx="26" fill="#ffffff" opacity="0.08"/>
      <rect x="120" y="390" width="340" height="18" rx="9" fill="#ffffff" opacity="0.15"/>
      <rect x="120" y="420" width="280" height="14" rx="7" fill="#ffffff" opacity="0.12"/>
    </svg>
  `);
}

function safeImg2() {
  return svgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
      <defs>
        <linearGradient id="g" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stop-color="#237f79" stop-opacity="0.35"/>
          <stop offset="1" stop-color="#000000" stop-opacity="1"/>
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#g)"/>
      <path d="M0 460 C140 380, 240 520, 420 430 C560 360, 650 410, 800 350 L800 600 L0 600 Z" fill="#ffffff" opacity="0.08"/>
      <circle cx="640" cy="160" r="140" fill="#ffffff" opacity="0.07"/>
      <circle cx="670" cy="130" r="90" fill="#ffffff" opacity="0.06"/>
    </svg>
  `);
}

function safeImg3() {
  return svgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#0b2a29" stop-opacity="1"/>
          <stop offset="1" stop-color="#000000" stop-opacity="1"/>
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#g)"/>
      <rect x="90" y="90" width="620" height="420" rx="38" fill="#32b2a9" opacity="0.10"/>
      <rect x="120" y="130" width="360" height="28" rx="14" fill="#ffffff" opacity="0.12"/>
      <rect x="120" y="180" width="420" height="18" rx="9" fill="#ffffff" opacity="0.10"/>
      <rect x="120" y="220" width="300" height="18" rx="9" fill="#ffffff" opacity="0.08"/>
      <circle cx="610" cy="230" r="85" fill="#ffffff" opacity="0.06"/>
    </svg>
  `);
}

function safeImg4() {
  return svgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
      <defs>
        <linearGradient id="g" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#32b2a9" stop-opacity="0.22"/>
          <stop offset="1" stop-color="#000000" stop-opacity="1"/>
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#g)"/>
      <circle cx="210" cy="220" r="150" fill="#ffffff" opacity="0.06"/>
      <rect x="90" y="360" width="620" height="160" rx="36" fill="#ffffff" opacity="0.07"/>
      <rect x="130" y="400" width="280" height="18" rx="9" fill="#ffffff" opacity="0.12"/>
      <rect x="130" y="435" width="360" height="14" rx="7" fill="#ffffff" opacity="0.10"/>
    </svg>
  `);
}

function harmImg() {
  // Keep it “non-graphic”, but clearly flagged as harmful (red, warning patterns)
  return svgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#ff2d55" stop-opacity="0.22"/>
          <stop offset="1" stop-color="#000000" stop-opacity="1"/>
        </linearGradient>
        <pattern id="p" width="30" height="30" patternUnits="userSpaceOnUse" patternTransform="rotate(25)">
          <rect width="30" height="30" fill="transparent"/>
          <rect x="0" y="0" width="12" height="30" fill="#ff2d55" opacity="0.16"/>
        </pattern>
      </defs>
      <rect width="800" height="600" fill="url(#g)"/>
      <rect width="800" height="600" fill="url(#p)"/>
      <circle cx="400" cy="260" r="150" fill="#ff2d55" opacity="0.10"/>
      <path d="M400 130 L540 410 H260 Z" fill="#ffffff" opacity="0.10"/>
      <rect x="220" y="440" width="360" height="52" rx="18" fill="#ffffff" opacity="0.08"/>
      <text x="400" y="472" font-size="22" text-anchor="middle" fill="#ffffff" opacity="0.75" font-family="Arial">Sensitive / Harmful</text>
    </svg>
  `);
}
