import React from "react";
import { NavLink } from "react-router-dom";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Button";
import { ROUTES } from "../../../routes/routes";

export default function WhoItsFor() {
  return (
    <Section
      title="Who it’s for"
      subtitle="Designed for different users — without forcing one experience on everyone."
    >
      <style>{`
        .cx-rolesGrid{
          display:grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap:14px;
          align-items:stretch;
        }

        .cx-roleCard{
          position:relative;
          overflow:hidden;
          border-radius:22px;
          background: linear-gradient(180deg, rgba(7,25,24,0.70), rgba(0,0,0,0.55));
          border: 1px solid rgba(255,255,255,0.10);
          box-shadow: 0 18px 55px rgba(0,0,0,0.18);
          padding:18px;
          transition: transform 260ms ease, border-color 260ms ease;
        }
        .cx-roleCard:hover{
          transform: translateY(-4px);
          border-color: rgba(50,178,169,0.32);
        }

        .cx-roleCard::before{
          content:"";
          position:absolute;
          left:-40px;
          top:-40px;
          width:180px;
          height:180px;
          background: radial-gradient(circle at 35% 35%, rgba(50,178,169,0.24), transparent 60%);
          opacity:0.95;
          pointer-events:none;
        }

        .cx-roleCard::after{
          content:"";
          position:absolute;
          right:-60px;
          bottom:-60px;
          width:220px;
          height:220px;
          background: radial-gradient(circle at 50% 50%, rgba(35,127,121,0.16), transparent 62%);
          opacity:0.9;
          pointer-events:none;
        }

        .cx-roleTop{
          display:flex;
          align-items:center;
          gap:14px;
        }

        .cx-roleIcon{
          width:48px;
          height:48px;
          border-radius:16px;
          display:grid;
          place-items:center;
          background: rgba(50,178,169,0.14);
          border: 1px solid rgba(50,178,169,0.30);
          box-shadow: 0 12px 30px rgba(0,0,0,0.22);
          flex: 0 0 auto;
        }

        .cx-roleTitle{
          margin:0;
          font-weight: 900;
          font-size: 17px;
          letter-spacing: -0.01em;
          color: rgba(255,255,255,0.94);
          line-height: 1.15;
        }

        .cx-rolesFooter{
          margin-top:14px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:12px;
          flex-wrap:wrap;
        }

        .cx-rolesHint{
          font-size:12px;
          color: rgba(255,255,255,0.65);
        }
      `}</style>

      <div className="cx-rolesGrid">
        <RoleCard title="Parents" icon={parentIcon} />
        <RoleCard title="Children" icon={childIcon} />
        <RoleCard title="Individuals" icon={individualIcon} />
      </div>

      <div className="cx-rolesFooter">
        <div className="cx-rolesHint">
          One system • Three experiences • Same protection layer
        </div>

        <NavLink to={ROUTES.ROLES} style={{ textDecoration: "none" }}>
          <Button variant="outline">Explore roles</Button>
        </NavLink>
      </div>
    </Section>
  );
}

function RoleCard({ title, icon }) {
  return (
    <Card className="soft cx-roleCard">
      <div className="cx-roleTop">
        <div className="cx-roleIcon" aria-hidden="true" style={{ color: "#32b2a9" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {icon}
          </svg>
        </div>

        <h3 className="cx-roleTitle">{title}</h3>
      </div>
    </Card>
  );
}

/* Icons kept same, just extracted */
const parentIcon = (
  <>
    <path
      d="M12 3l8 4v6c0 5-3.5 8-8 8s-8-3-8-8V7l8-4z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M9.5 12.5l1.8 1.8 3.8-4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </>
);

const childIcon = (
  <>
    <path
      d="M8 10a4 4 0 118 0v1a3 3 0 01-3 3h-2a3 3 0 01-3-3v-1z"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path
      d="M9 18h6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </>
);

const individualIcon = (
  <>
    <path
      d="M12 21s-7-4.4-7-10a4 4 0 017-2 4 4 0 017 2c0 5.6-7 10-7 10z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M9.2 12.2l1.6 1.6 3.9-3.9"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </>
);
