import React from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

const YT_URL = "https://www.youtube.com/watch?v=O34oDpCF6yU";
const YT_THUMB = "https://img.youtube.com/vi/O34oDpCF6yU/hqdefault.jpg";

export default function TRLStatus() {
  return (
    <Section
      title="Technology Readiness"
      subtitle="Clear maturity status builds credibility."
    >
      {/* TRL STATUS CARD */}
      <Card className="soft">
        <div
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <kbd className="pill">Current TRL</kbd>
          <div style={{ fontWeight: 900, fontSize: 18 }}>
            TRL 6 (prototype demonstrated)
          </div>
        </div>

        <hr className="sep" />

        <ul className="list">
          <li>
            <b>Working now:</b> real-time detection + basic safety actions.
          </li>
          <li>
            <b>In progress:</b> better personalization, smarter alert thresholds.
          </li>
          <li>
            <b>Planned:</b> multi-language + richer institutional use-cases.
          </li>
        </ul>
      </Card>

      {/* VIDEO CARD */}
   {/* VIDEO CARD */}
<Card className="soft" style={{ marginTop: 18, padding: 18 }}>
  <div style={{ fontWeight: 900, fontSize: 16, marginBottom: 10 }}>
    Prototype demo (video)
  </div>

  <a
    href={YT_URL}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "block",
      position: "relative",
      borderRadius: 18,
      overflow: "hidden",
      border: "1px solid rgba(255,255,255,0.10)",
    }}
  >
    {/* Thumbnail */}
    <img
      src={YT_THUMB}
      alt="CensorX prototype demo video"
      style={{
        width: "100%",
        display: "block",
        aspectRatio: "2 / 1",
        objectFit: "cover",
      }}
    />

    {/* Overlay */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(180deg, rgba(0,0,0,0.12), rgba(0,0,0,0.5))",
      }}
    >
      {/* Play Button */}
      <div
        style={{
          width: 74,
          height: 74,
          borderRadius: "50%",
          background: "rgba(255,0,0,0.92)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 16px 36px rgba(0,0,0,0.5)",
        }}
      >
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: "18px solid white",
            borderTop: "11px solid transparent",
            borderBottom: "11px solid transparent",
            marginLeft: 5,
          }}
        />
      </div>
    </div>
  </a>

  <p className="p" style={{ marginTop: 12, opacity: 0.78 }}>
    Short walkthrough of the working prototype and current safety pipeline.
  </p>
</Card>

    </Section>
  );
}
