import React, { useState } from "react";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";

const FAQS = [
  {
    q: "What exactly is CensorX, and what problem does it solve?",
    a: "CensorX is a real-time AI digital safety app that protects children and individuals from harmful content and cyberbullying as it appears on the screen. It goes beyond app or website blocking by understanding what the user is actually seeing in real time."
  },
  {
    q: "How is CensorX different from Google Family Link or other parental control apps?",
    a: "Traditional parental control apps focus on restricting access, such as blocking apps or limiting screen time. CensorX focuses on protecting experience by detecting harmful images, videos, and harassment inside apps where traditional controls fail."
  },
  {
    q: "Does CensorX work inside apps like WhatsApp, Instagram, YouTube Shorts, and games?",
    a: "Yes. CensorX is app-agnostic and works automatically inside social media apps, chat apps, browsers, games, and video platforms without requiring any integration or cooperation from those apps."
  },
  {
    q: "How does CensorX detect harmful content in real time?",
    a: "CensorX uses on-device AI to analyze what is displayed on the screen, including images, videos, and text. Detection happens instantly, allowing harmful content to be blocked or flagged the moment it appears."
  },
  {
    q: "Does CensorX read, store, or upload private messages or media?",
    a: "No. CensorX follows a privacy-first approach. All analysis happens locally on the device. No messages, images, videos, or screen recordings are stored or uploaded to servers."
  },
  {
    q: "What happens if a child tries to uninstall or disable CensorX?",
    a: "CensorX continuously monitors its protection state. If a child attempts to uninstall, force-stop, or disable permissions, parents are notified and re-enabling protection requires parent authentication."
  },
  {
    q: "Does CensorX work without internet or in Incognito / Private mode?",
    a: "Yes. CensorX does not rely on browser history or network traffic. It continues working offline and is unaffected by Incognito or Private mode because it analyzes what appears on the screen directly."
  },
  {
    q: "What if CensorX blocks something harmless by mistake?",
    a: "CensorX is tuned conservatively to reduce false positives. Parents always have override controls, and detections are logged for improvement, not punishment."
  },
  {
    q: "Will CensorX slow down the phone or drain battery?",
    a: "CensorX uses lightweight, optimized on-device models and event-based detection. Battery usage is comparable to standard accessibility services and works well on mid-range Android devices."
  },
  {
    q: "Who is CensorX for, and is this a prototype or production app?",
    a: "CensorX is designed for parents, children, and individuals who want real-time digital safety. The current APK is a prototype for evaluation and testing, with a production-ready release planned after validation."
  }
];

export default function FAQList() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <Section title="FAQs" subtitle="Clear answers to the most common questions.">
      <div style={{ display: "grid", gap: 12 }}>
        {FAQS.map((x, idx) => (
          <FAQItem
            key={idx}
            q={x.q}
            a={x.a}
            open={openIndex === idx}
            onToggle={() =>
              setOpenIndex(openIndex === idx ? null : idx)
            }
          />
        ))}
      </div>
    </Section>
  );
}

function FAQItem({ q, a, open, onToggle }) {
  return (
    <Card className="soft">
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          background: "transparent",
          border: "none",
          color: "inherit",
          cursor: "pointer",
          padding: 0,
          textAlign: "left",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <div style={{ fontWeight: 900 }}>{q}</div>
        <kbd className="pill">{open ? "—" : "+"}</kbd>
      </button>

      {open && (
        <p className="p" style={{ marginTop: 10 }}>
          {a}
        </p>
      )}
    </Card>
  );
}
