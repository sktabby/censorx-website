import React from "react";
import Section from "../../../components/ui/Section";
import visionImg from "../../../assets/vision.webp";

export default function Vision() {
  return (
    <Section
      title="Future vision"
      subtitle="Where we want this to go."
    >
      <style>{`
        .cxVi{
          background:#ffffff;
          color:#111827;
          border-radius:var(--radius-xl);
          padding:clamp(22px, 4vw, 36px);
          box-shadow:0 16px 44px rgba(0,0,0,0.30);
          display:grid;
          grid-template-columns:minmax(0, 1.3fr) minmax(240px, 0.7fr);
          gap:clamp(22px, 4vw, 40px);
          align-items:center;
        }
        .cxVi h3{
          margin:0 0 14px;
          font-size:clamp(17.5px, 2.5vw, 23px);
          line-height:1.25;
          font-weight:800;
          color:#0b1220;
        }
        .cxVi p{
          margin:0 0 14px;
          max-width:820px;
          font-size:clamp(13.5px, 1.6vw, 15px);
          line-height:1.85;
          color:#374151;
        }
        .cxVi p:last-child{ margin-bottom:0; }
        .cxVi p b{ color:#0b1220; }

        .cxVi-media{
          margin:0;
        }
        .cxVi-media img{
          display:block;
          width:100%;
          height:auto;
          border-radius:var(--radius-lg);
          box-shadow:0 18px 44px rgba(0,0,0,0.28);
        }
        @media (max-width: 900px){
          .cxVi{ grid-template-columns:1fr; }
          .cxVi-media{
            order:-1;
            width:100%;
            max-width:420px;
            margin:0 auto;
          }
        }
      `}</style>

      <div className="cxVi">
        <div>
          <h3>A childhood online that parents do not have to fear.</h3>

          <p>
            We want protection to be as normal as a seatbelt. Nobody feels watched
            by a seatbelt. It is simply there, everyone knows it is there, and it
            matters on the one day something goes wrong.
          </p>

          <p>
            <b>For children,</b> that means safety that is honest with them. They
            should always know when protection is on and why, and they should
            never feel that someone is secretly reading their life.
          </p>

          <p>
            <b>For parents and schools,</b> it means hearing about the few things
            that really need attention, without having to check a phone every
            night or read every message.
          </p>

          <p>
            <b>For us,</b> it means limits we will not cross. We will not build
            hidden monitoring, we will not collect more than the job needs, and we
            will keep saying openly what CensorX can and cannot do.
          </p>
        </div>

        <figure className="cxVi-media">
          <img src={visionImg} alt="CensorX future vision" />
        </figure>
      </div>
    </Section>
  );
}