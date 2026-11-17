import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE, PAGES, NOT_FOUND, structuredData } from "./seoData";

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function writeJsonLd(key, items) {
  document.head
    .querySelectorAll(`script[data-seo-ld="${key}"]`)
    .forEach((n) => n.remove());
  items.forEach((data) => {
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.setAttribute("data-seo-ld", key);
    s.textContent = JSON.stringify(data);
    document.head.appendChild(s);
  });
}

// Sets title, description, canonical, social tags, robots and structured
// data for the current route. Renders nothing.
export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path =
      pathname.length > 1 ? pathname.replace(/\/+$/, "").toLowerCase() : "/";
    const page = PAGES[path];
    const known = Boolean(page);
    const meta = page || NOT_FOUND;
    const url = known ? SITE.url + (page.canonical || path) : SITE.url + path;

    document.title = meta.title;
    setMeta("name", "description", meta.description);
    setMeta("name", "robots", known ? "index,follow" : "noindex,follow");
    setCanonical(known ? url : SITE.url + "/");

    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", SITE.name);
    setMeta("property", "og:locale", SITE.locale);
    setMeta("property", "og:title", meta.title);
    setMeta("property", "og:description", meta.description);
    setMeta("property", "og:url", url);
    setMeta("name", "twitter:card", "summary");
    setMeta("name", "twitter:title", meta.title);
    setMeta("name", "twitter:description", meta.description);

    writeJsonLd("page", structuredData(path));
  }, [pathname]);

  return null;
}
