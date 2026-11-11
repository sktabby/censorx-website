import React, { useState } from "react";
import ourStoryImage from "../../../assets/our story.png";

const css = `
  .cxOs{
    background:#ffffff;
    color:#111827;
    border-radius:24px;
    padding:clamp(22px, 4vw, 40px);
    box-shadow:0 16px 44px rgba(0,0,0,0.28);
    display:grid;
    grid-template-columns:minmax(0, 1.3fr) minmax(240px, 0.7fr);
    gap:clamp(22px, 4vw, 44px);
    align-items:center;
  }
  .cxOs h2{
    margin:0 0 8px;
    font-size:clamp(24px, 3.4vw, 34px);
    line-height:1.15;
    font-weight:900;
    letter-spacing:-0.01em;
    color:#0b1220;
  }
  .cxOs h3{
    margin:0 0 18px;
    font-size:clamp(15.5px, 2vw, 18px);
    line-height:1.45;
    font-weight:700;
    color:#0f6b65;
  }
  .cxOs p{
    margin:0 0 14px;
    font-size:clamp(14.5px, 1.8vw, 16px);
    line-height:1.85;
    color:#374151;
  }
  .cxOs p strong{ color:#0b1220; }

  /* smooth open / close */
  .cxOs-extra{
    display:grid;
    grid-template-rows:0fr;
    opacity:0;
    transition:grid-template-rows .45s ease, opacity .35s ease;
  }
  .cxOs-extra.open{
    grid-template-rows:1fr;
    opacity:1;
  }
  .cxOs-extra > div{
    overflow:hidden;
    min-height:0;
  }

  .cxOs-toggle{
    margin-top:6px;
    display:inline-flex;
    align-items:center;
    gap:8px;
    background:none;
    border:none;
    padding:0;
    font:inherit;
    font-size:14px;
    font-weight:800;
    color:#0f6b65;
    cursor:pointer;
  }
  .cxOs-toggle:hover{ color:#0b4f4b; }
  .cxOs-arrow{
    display:inline-block;
    transition:transform .3s ease;
  }
  .cxOs-arrow.rotated{ transform:rotate(180deg); }

  .cxOs-media img{
    display:block;
    width:100%;
    height:auto;
    border-radius:18px;
  }

  @media (max-width: 900px){
    .cxOs{ grid-template-columns:1fr; }
    .cxOs-media{
      order:-1;
      width:100%;
      max-width:420px;
      margin:0 auto;
    }
  }
  @media (prefers-reduced-motion: reduce){
    .cxOs-extra, .cxOs-arrow{ transition:none; }
  }
`;

export default function OurStory() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="container section">
      <style>{css}</style>

      <div className="cxOs">
        <div>
          <h2>Our Story</h2>

          <h3>Built from a simple concern. Driven by a promise to protect.</h3>

          <p>
            CensorX began with a simple question: How can we make the
            internet safer for the people we care about most?
          </p>

          <p>
            In December 2024, three friends—Tabish, Aqsa, and Ashar—came
            together with a shared concern about what children were
            experiencing online. Instead of immediately building a product,
            we listened. We met hundreds of parents, heard their fears, and
            understood the problems they faced in protecting their children.
          </p>

          <div
            className={`cxOs-extra${showMore ? " open" : ""}`}
            aria-hidden={!showMore}
          >
            <div>
              <p>
                Some conversations stayed with us. Parents told us they were
                ready to pay anything if their child could be safe online.
                That made us realize CensorX could never be just another
                app. It had to be about the emotions of parents, the
                innocence of children, and the welfare of families.
              </p>

              <p>
                We saw a gap: existing tools could monitor and restrict, but
                harmful content and harassment could still reach children
                unexpectedly. So we designed CensorX to provide protection
                in the moment, not only after something had happened.
              </p>

              <p>
                Since then, we have spent months researching, testing,
                failing, rebuilding, and learning. Every parent we met
                shaped our vision.
              </p>

              <p>
                <strong>CensorX is more than a product.</strong> It is our
                commitment to building a safer digital world for
                children—and giving parents one less thing to worry about.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="cxOs-toggle"
            onClick={() => setShowMore((s) => !s)}
            aria-expanded={showMore}
          >
            {showMore ? "Read Less" : "Read More"}
            <span
              className={`cxOs-arrow${showMore ? " rotated" : ""}`}
              aria-hidden="true"
            >
              ↓
            </span>
          </button>
        </div>

        <div className="cxOs-media">
          <img
            src={ourStoryImage}
            alt="The story and vision behind CensorX"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}