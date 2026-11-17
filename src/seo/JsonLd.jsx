import { useEffect } from "react";

// Adds one JSON-LD block to <head> while the page is mounted.
export default function JsonLd({ id, data }) {
  useEffect(() => {
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.setAttribute("data-seo-ld", id);
    s.textContent = JSON.stringify(data);
    document.head.appendChild(s);
    return () => s.remove();
  }, [id, data]);
  return null;
}
