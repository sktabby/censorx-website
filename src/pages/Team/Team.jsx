
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CoFounders from "../Home/sections/CoFounders";
import ourStoryImage from "../../assets/our story.webp";
import "./Team.css";

export default function Team() {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="team-page">

      <CoFounders />

      {/* OUR STORY SECTION */}
      <section className="team-story">
        <div className="team-story-box">

          <div className="team-story-content">

            <h2 className="team-story-title">
              Our Story
            </h2>

            <h3 className="team-story-subtitle">
              Built from a simple concern. Driven by a promise to protect.
            </h3>

            <div className="team-story-description">

              <p>
                CensorX began with a simple question: How can we make
                the internet safer for the people we care about most?
              </p>

              <p>
                In December 2024, three friends—Tabish, Aqsa, and
                Ashar—came together with a shared concern about what
                children were experiencing online. Instead of immediately
                building a product, we listened. We met hundreds of
                parents, heard their fears, and understood the problems
                they faced in protecting their children.
              </p>

              <div
                className={`team-story-extra ${
                  showMore ? "expanded" : ""
                }`}
                aria-hidden={!showMore}
              >
                <div className="team-story-extra-inner">

                  <p>
                    Some conversations stayed with us. Parents told us
                    they were ready to pay anything if their child could
                    be safe online. That made us realize CensorX could
                    never be just another app. It had to be about the
                    emotions of parents, the innocence of children,
                    and the welfare of families.
                  </p>

                  <p>
                    We saw a gap: existing tools could monitor and
                    restrict, but harmful content and harassment could
                    still reach children unexpectedly. So we designed
                    CensorX to provide protection in the moment, not
                    only after something had happened.
                  </p>

                  <p>
                    Since then, we have spent months researching,
                    testing, failing, rebuilding, and learning.
                    Every parent we met shaped our vision.
                  </p>

                  <p>
                    <strong>
                      CensorX is more than a product.
                    </strong>{" "}
                    It is our commitment to building a safer digital
                    world for children—and giving parents one less
                    thing to worry about.
                  </p>

                </div>
              </div>

            </div>

            <button
              type="button"
              className="team-story-toggle"
              onClick={() => setShowMore(!showMore)}
              aria-expanded={showMore}
            >
              {showMore ? "Read Less" : "Read More"}

              <span
                className={`team-story-arrow ${
                  showMore ? "rotated" : ""
                }`}
              >
                ↓
              </span>
            </button>

          </div>

          <div className="team-story-image">
            <img
              src={ourStoryImage}
              alt="The story and vision behind CensorX"
              loading="lazy"
            />
          </div>

        </div>
      </section>


      {/* CAREER SECTION */}
      <section className="team-career">
        <div className="team-career-box">

          <span className="team-career-badge">
            We're Expanding
          </span>

          <h2 className="team-career-title">
            Join the CensorX Team
          </h2>

          <p className="team-career-text">
            We are expanding our team and looking for passionate developers,
            researchers, and innovators who want to build technology that
            protects people online. If you are excited about AI, Android,
            and safety-first platforms, we would love to have you join us.
          </p>

          <button
            className="team-career-btn"
            onClick={() => navigate("/career")}
          >
            View Careers
          </button>

        </div>
      </section>

    </div>
  );
}
