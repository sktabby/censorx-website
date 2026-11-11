
import React, { useEffect, useMemo, useRef, useState } from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.15 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, inView };
}

export default function CoFounders() {
  const { ref, inView } = useInView();

  const members = useMemo(
    () => [
      {
        key: "ashar",
        name: "Mr. Mohammad Ashar",
        role: "Co-Founder | Cloud & Security",
        description: "Leads cloud security, legal and compliance.",
      },
      {
        key: "tabish",
        name: "Mr. Tabish Shaikh",
        role: "Co-Founder | Computer Engineer",
        description: "Leads AI/ML development and backend architecture.",
      },
      {
        key: "aqsa",
        name: "Ms. Aqsa Shah",
        role: "Co-Founder | ECS Engineer",
        description: "Leads product development and digital strategy.",
      },
    ],
    []
  );

  return (
    <Section title="Team" subtitle="The people behind CensorX.">

      <style>{`
        .cx-teamWrap {
          width: 100%;
          max-width: 1050px;
          margin: 22px auto 0;
          padding: 0 12px;
        }

        .cx-teamGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          align-items: stretch;
        }

        .cx-teamCard {
          position: relative;
          width: 100%;
          min-height: 175px;
          overflow: hidden;
          background: #ffffff !important;
          border: 1px solid rgba(21, 76, 72, 0.2) !important;
          border-radius: 16px !important;
          box-shadow: 0 5px 18px rgba(0, 0, 0, 0.06) !important;
          opacity: 0;
          transform: translateY(15px);
          transition:
            opacity 600ms ease,
            transform 600ms ease,
            box-shadow 300ms ease,
            border-color 300ms ease !important;
        }

        .cx-teamCard::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: #154c48;
        }

        .cx-teamCard.in {
          opacity: 1;
          transform: translateY(0);
        }

        .cx-teamCard:hover {
          transform: translateY(-4px) !important;
          border-color: #237f79 !important;
          box-shadow: 0 10px 25px rgba(21, 76, 72, 0.12) !important;
        }

        .cx-text {
          min-height: 175px;
          padding: 23px 15px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .cx-name {
          margin: 0;
          color: #103e3a !important;
          font-size: 21px;
          font-weight: 800;
          letter-spacing: -0.5px;
          line-height: 1.3;
        }

        .cx-role {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          margin-top: 11px;
          padding: 7px 11px;
          background: #eef6f4;
          border: 1px solid rgba(21, 76, 72, 0.15);
          border-radius: 6px;
          color: #154c48 !important;
          font-size: 12px;
          font-weight: 700;
          line-height: 1.4;
        }

        .cx-dot {
          width: 7px;
          height: 7px;
          flex: 0 0 7px;
          border-radius: 50%;
          background: #237f79;
        }

        .cx-divider {
          width: 35px;
          height: 2px;
          margin: 13px auto 10px;
          border-radius: 10px;
          background: #237f79;
          transition: width 300ms ease;
        }

        .cx-teamCard:hover .cx-divider {
          width: 55px;
        }

        .cx-desc {
          margin: 0;
          max-width: 310px;
          color: #405b56 !important;
          font-size: 14px;
          font-weight: 500;
          line-height: 1.55;
        }

        @media (max-width: 980px) {
          .cx-teamGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
          }
        }

        @media (max-width: 640px) {
          .cx-teamWrap {
            max-width: 390px;
          }

          .cx-teamGrid {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .cx-teamCard,
          .cx-text {
            min-height: 160px;
          }

          .cx-text {
            padding: 20px 15px;
          }

          .cx-name {
            font-size: 20px;
          }

          .cx-role {
            font-size: 11px;
          }

          .cx-desc {
            font-size: 13px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cx-teamCard,
          .cx-divider {
            transition: none !important;
          }

          .cx-teamCard {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      <div ref={ref} className="cx-teamWrap">
        <div className="cx-teamGrid">

          {members.map((m, idx) => (
            <Card
              key={m.key}
              className={`soft cx-teamCard ${inView ? "in" : ""}`}
              style={{
                transitionDelay: `${inView ? idx * 130 : 0}ms`,
              }}
            >
              <div className="cx-text">

                <h3 className="cx-name">
                  {m.name}
                </h3>

                <div className="cx-role">
                  <span className="cx-dot" aria-hidden="true" />
                  <span>{m.role}</span>
                </div>

                <div className="cx-divider" />

                <p className="cx-desc">
                  {m.description}
                </p>

              </div>
            </Card>
          ))}

        </div>
      </div>

    </Section>
  );
}
