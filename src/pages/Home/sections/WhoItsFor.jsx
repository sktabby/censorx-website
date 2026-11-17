
import React from "react";
import { NavLink } from "react-router-dom";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Button";
import { ROUTES } from "../../../routes/routes";

import parentImage from "../../../assets/parentsdp.webp";
import childImage from "../../../assets/childdp.webp";

export default function WhoItsFor() {
  return (
    <Section
      title="Who it’s for"
      subtitle="Protection for children. Confidence for parents."
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
          border-radius:var(--radius-xl);
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
          border-radius:var(--radius-lg);
          display:grid;
          place-items:center;
          background: rgba(50,178,169,0.14);
          border: 1px solid rgba(50,178,169,0.30);
          box-shadow: 0 12px 30px rgba(0,0,0,0.22);
          flex: 0 0 auto;
          overflow:hidden;
        }

        .cx-roleIcon img{
          width:100%;
          height:100%;
          object-fit:cover;
          display:block;
        }

        .cx-roleTitle{
          margin:0;
          font-weight: 800;
          font-size: 16px;
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
        <RoleCard title="Parents" image={parentImage} />
        <RoleCard title="Children" image={childImage} />
      </div>

      <div className="cx-rolesFooter">
     

        <NavLink
          to={ROUTES.ROLES}
          style={{ textDecoration: "none" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Button variant="outline">Explore roles</Button>
        </NavLink>
      </div>
    </Section>
  );
}

function RoleCard({ title, image }) {
  return (
    <Card className="soft cx-roleCard">
      <div className="cx-roleTop">
        <div className="cx-roleIcon" aria-hidden="true">
          <img src={image} alt="" />
        </div>

        <h3 className="cx-roleTitle">{title}</h3>
      </div>
    </Card>
  );
}
