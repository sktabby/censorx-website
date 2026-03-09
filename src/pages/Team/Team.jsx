import React from "react";
import { useNavigate } from "react-router-dom";
import CoFounders from "../Home/sections/CoFounders";
import "./Team.css";

export default function Team() {
  const navigate = useNavigate();

  return (
    <div className="team-page">

      <CoFounders />

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