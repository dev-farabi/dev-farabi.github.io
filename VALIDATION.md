# Portfolio validation — 9 November 2026

## Completed checks

- Hosted Sites/Vinext production build: passed, including the homepage, both service pages, robots.txt and sitemap.xml.
- Standalone Next.js 16.3.4 production build with Webpack: passed. Homepage, both service pages, robots.txt and sitemap.xml were prerendered.
- TypeScript: passed for the hosted source and during the standalone production build.
- CSS parser and Git whitespace checks: passed.
- Generated standalone HTML: verified exactly one H1 per page, three distinct titles and descriptions, the correct canonical origin/path, Open Graph data, Twitter large-image metadata and `noindex, nofollow` on all three pages.
- JSON-LD: parsed successfully on every page. The homepage includes Person and WebSite data; each service page adds Service and BreadcrumbList data tied to visible content.
- Sitemap XML: parsed and confirmed to list exactly the homepage and the two service routes. robots.txt references the correct sitemap URL.
- Final-CV updates: dual professional role, April 2024–September 2026 WhatsOn employment, skills and the supplied LinkedIn URL appear in the generated homepage content.
- Four supplied live project destinations remain present, including the dashboard hash. External links retain safe new-tab attributes. Earlier contribution case studies, filters, dialog focus handling and copy-email logic are preserved.
- New service pages include native FAQ disclosures, clear WhatsApp/email actions and a link to the related service.
- The professional portrait, 1200×630 social sharing image and all four custom cursor assets are included. The sharing image was visually inspected.
- Sensitive identity information and third-party reference contact details from the supplied CV were excluded. The original CV PDF is not in the project or public assets.
- Publication succeeded using the existing owner-private Site. Access was not changed.

## Verification limits

Desktop/mobile visual browser QA and live interaction testing remain unverified because of the existing preview browser environment failure. Responsive breakpoints, wrapping, touch targets, reduced motion and keyboard behavior have been implemented and reviewed in source; they have not been independently confirmed in a working browser during this update.

Validation used the environment’s installed dependencies. A fresh internet dependency installation was not performed. No Lighthouse score, Core Web Vitals result, search ranking, Search Console submission, Google rich-result eligibility or advertising performance is claimed.

The private sign-in gate prevents public search indexing. The default noindex setting also remains enabled. Technical SEO is prepared for a future explicitly public deployment; the current Site has not been made public.

## Preserved design and behavior

The dark violet/cyan theme, Farabi name card, optimized portrait variants, project filtering, motion control, WhatsApp click-to-chat and automatically active desktop mouse cursor remain. There is no cursor switch or stored opt-out. Native cursor fallbacks apply to touch, keyboard and appropriate accessibility modes.

The ZIP contains source, assets, a pinned lockfile and instructions. Installed dependencies, build output, runtime state and credentials are excluded.

## Latest requested changes

- Removed the education and continuing-development/training entries shown in the supplied screenshot.
- A single shared floating WhatsApp component now renders on the homepage and both service detail routes. The homepage still hides it while a case-study dialog is open.
- Generated HTML confirms exactly one floating chat link per page, the correct +8801760204210 destination, an accessible name and safe new-tab link attributes.
- Hosted and standalone production builds and TypeScript checks passed for this update. Existing visual-browser verification limits still apply.
