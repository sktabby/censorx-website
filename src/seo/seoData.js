// Single source of truth for per-page SEO: titles, descriptions, canonical
// URLs and structured data. Keep titles under ~60 characters and descriptions
// under ~160. Plain, factual wording only.

export const SITE = {
  url: "https://censorx.in",
  name: "CensorX",
  locale: "en_IN",
  email: "team@censorx.in",
  logo: "https://censorx.in/favicon.png",
  sameAs: [
    "https://www.linkedin.com/company/censorx-ai",
    "https://www.instagram.com/censorx.ai/",
  ],
  about:
    "CensorX is a child digital-safety app that helps parents protect children from harmful content and online harassment, with checks done on the child's phone.",
};

// `canonical` is only set where the live URL carries a trailing slash
// (the static legal folders). Every other page uses its plain path.
export const PAGES = {
  "/": {
    name: "Home",
    title: "CensorX",
    description:
      "An Android child safety app that checks the child's screen on the phone for harmful content and possible harassment. Screenshots are never saved or uploaded.",
  },
  "/features": {
    name: "Features",
    title: "Features – On-Device Child Safety App | CensorX",
    description:
      "See how CensorX detects harmful content and possible harassment on the child's phone, sends calm alerts to parents, and leaves protections in their control.",
  },
  "/roles": {
    name: "Parents and children",
    title: "CensorX for Parents and Children – Who Can Use It",
    description:
      "How CensorX works for parents and for children: what a parent can control, and what a child can always see on their own phone.",
  },
  "/download": {
    name: "Install on Android",
    title: "Install CensorX on Android – Steps and Permissions",
    description:
      "Learn how to set up CensorX on a child's Android phone, which permissions it asks for, and why each one is needed.",
  },
  "/user-guide": {
    name: "User guide",
    title: "CensorX User Guide – Parent and Child Setup",
    description:
      "A simple guide to using CensorX: how a parent sets it up, how the child's phone is protected, and what to do next.",
  },
  "/roadmap": {
    name: "Roadmap",
    title: "CensorX Roadmap – What We Are Building Next",
    description:
      "Where CensorX is today and what we plan to build next for children's digital safety.",
  },
  "/use-cases": {
    name: "Use cases",
    title: "CensorX Use Cases – Real Situations Families Face",
    description:
      "Everyday online situations that families and learners face, and how CensorX helps a parent find out and respond.",
  },
  "/why-it-matters": {
    name: "Why it matters",
    title: "Why Child Online Safety Matters | CensorX",
    description:
      "Why harmful content and online harassment affect children, and why they need protection that is real-time and respects their privacy.",
  },
  "/faq": {
    name: "FAQ",
    title: "CensorX FAQ – Privacy, Setup and Safety Answers",
    description:
      "Answers to common questions about how CensorX works, what it detects, what stays on the phone and what a parent can control.",
  },
  "/contact": {
    name: "Contact",
    title: "Contact CensorX – Parents, Schools and Partners",
    description:
      "Get in touch with the CensorX team about the app, a school partnership or any other question.",
  },
  "/career": {
    name: "Careers",
    title: "Careers at CensorX – Internships and Open Roles",
    description:
      "Join the CensorX team. Apply for internships and roles that help build a safer digital experience for children.",
  },
  "/team": {
    name: "Team",
    title: "Our Team – The People Behind CensorX",
    description:
      "Meet the co-founders and team building CensorX, a child digital-safety app.",
  },
  "/about": {
    name: "About",
    title: "About CensorX – Our Mission and Story",
    description:
      "Why we built CensorX, the problem we are working on, and how the app protects children while respecting their privacy.",
  },
  "/schools": {
    name: "Schools",
    title: "CensorX for Schools – Child Safety Partnerships",
    description:
      "How schools can help families protect students online with CensorX: class codes, simple setup, and no access to a child's private messages.",
  },
  "/legal/disclaimer": {
    name: "Disclaimer",
    title: "Disclaimer – CensorX",
    description:
      "What CensorX can and cannot do: a safety aid, not a guarantee and not a replacement for parenting.",
  },
  "/privacy": {
    name: "Privacy Policy",
    title: "CensorX – Privacy Policy",
    canonical: "/privacy/",
    description:
      "How CensorX collects, uses and protects information, what never leaves a child's phone, and how to delete your data.",
  },
  "/terms": {
    name: "Terms of Service",
    title: "CensorX – Terms of Service",
    canonical: "/terms/",
    description:
      "The terms for using CensorX, the child digital-safety app: who may use it, subscriptions, school codes and limits of liability.",
  },
  "/delete-account": {
    name: "Delete your account",
    title: "CensorX – Delete Your Account",
    canonical: "/delete-account/",
    description:
      "How to delete your CensorX account and data, in the app or by email, and what is deleted or kept.",
  },
};

export const NOT_FOUND = {
  title: "Page not found – CensorX",
  description: "This page does not exist.",
};

const abs = (p) => SITE.url + p;

const organization = {
  "@type": "Organization",
  "@id": abs("/#organization"),
  name: SITE.name,
  url: abs("/"),
  logo: SITE.logo,
  description: SITE.about,
  email: SITE.email,
  sameAs: SITE.sameAs,
  contactPoint: {
    "@type": "ContactPoint",
    email: SITE.email,
    contactType: "customer support",
    areaServed: "IN",
    availableLanguage: ["English"],
  },
};

const website = {
  "@type": "WebSite",
  "@id": abs("/#website"),
  url: abs("/"),
  name: SITE.name,
  inLanguage: "en-IN",
  publisher: { "@id": abs("/#organization") },
};

// No offers, price, rating or store link: none of those exist yet.
const softwareApplication = {
  "@type": "SoftwareApplication",
  "@id": abs("/#app"),
  name: SITE.name,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Android",
  description:
    "An Android app that helps parents protect children from harmful content and online harassment. The screen is checked on the child's phone, and screenshots are never saved or uploaded.",
  url: abs("/"),
  publisher: { "@id": abs("/#organization") },
};

const schoolsService = {
  "@type": "Service",
  "@id": abs("/schools#service"),
  name: "CensorX for Schools",
  serviceType: "Child digital-safety programme for schools",
  description:
    "Schools help families protect students online with CensorX. The school never sees a child's private messages.",
  areaServed: { "@type": "Country", name: "India" },
  audience: { "@type": "Audience", audienceType: "Schools" },
  provider: { "@id": abs("/#organization") },
  url: abs("/schools"),
};

function breadcrumb(path, page) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: abs("/") },
      {
        "@type": "ListItem",
        position: 2,
        name: page.name,
        item: abs(page.canonical || path),
      },
    ],
  };
}

// Returns an array of JSON-LD objects for the given path. FAQPage is added
// by the FAQ page itself so it always matches the visible questions.
export function structuredData(path) {
  const page = PAGES[path];
  if (!page) return [];
  if (path === "/") {
    return [
      {
        "@context": "https://schema.org",
        "@graph": [organization, website, softwareApplication],
      },
    ];
  }
  const out = [{ "@context": "https://schema.org", ...breadcrumb(path, page) }];
  if (path === "/download") {
    out.push({ "@context": "https://schema.org", ...softwareApplication });
  }
  if (path === "/schools") {
    out.push({ "@context": "https://schema.org", ...schoolsService });
  }
  return out;
}
