import type { Metadata } from "next";

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export const siteUrl = new URL(configuredUrl).origin;
// Explicit opt-in only: the current owner-private Site must remain noindex.
export const allowIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";
export const profile = {
  name: "Md. Moslemin Hossain (Farabi)",
  role: "Full Stack Developer & Digital Marketer",
  email: "mosleminhossain10@gmail.com",
  telephone: "+8801760204210",
  linkedin: "https://www.linkedin.com/in/moslemin-hossain-farabi",
  github: "https://github.com/dev-farabi"
};
export const whatsappUrl = `https://wa.me/8801760204210?text=${encodeURIComponent("Hi Farabi, I found your portfolio and would like to discuss a project or opportunity.")}`;
export const absoluteUrl = (path = "/") => new URL(path, `${siteUrl}/`).href;
export function pageMetadata(title: string, description: string, path = "/"): Metadata {
  const url = absoluteUrl(path);
  return {
    metadataBase: new URL(siteUrl), title, description,
    alternates: { canonical: url },
    robots: { index: allowIndexing, follow: allowIndexing },
    openGraph: { type: "website", locale: "en_US", siteName: "Farabi", title, description, url,
      images: [{ url: absoluteUrl("/images/portfolio-social.png"), width: 1200, height: 630, alt: "Farabi — Full Stack Developer and Digital Marketer in Dhaka, Bangladesh" }] },
    twitter: { card: "summary_large_image", title, description, images: [absoluteUrl("/images/portfolio-social.png")] },
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" }
  };
}
export const homeMetadata = pageMetadata(
  "Farabi | Full Stack Developer & Digital Marketer",
  "Farabi, Full Stack Developer and Digital Marketer in Dhaka, Bangladesh. MERN, Next.js, WordPress, SEO, Meta Ads, Google Ads and automation."
);
export const profileGraph = {
  "@context": "https://schema.org", "@graph": [
    { "@type": "Person", "@id": absoluteUrl("/#person"), name: profile.name, alternateName: "Farabi", url: absoluteUrl(),
      jobTitle: profile.role, image: absoluteUrl("/images/farabi-640.jpg"), email: profile.email, telephone: profile.telephone,
      address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
      sameAs: [profile.linkedin, profile.github],
      knowsAbout: ["Full stack web development", "React", "Next.js", "Node.js", "WordPress", "API integration", "Search engine optimization", "Meta Ads", "Google Ads", "Social media marketing", "Workflow automation", "IT support"] },
    { "@type": "WebSite", "@id": absoluteUrl("/#website"), url: absoluteUrl(), name: "Farabi — Full Stack Developer & Digital Marketer", inLanguage: "en", publisher: { "@id": absoluteUrl("/#person") } }
  ]
};
export function serializeJsonLd(data: unknown) { return JSON.stringify(data).replace(/</g, "\\u003c"); }
