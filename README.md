# Farabi — Full Stack Developer & Digital Marketer

A responsive, dark portfolio with animated artwork, a professional portrait, service pages, project filters and direct contact links. The standalone Next.js source matches the private Sites portfolio’s content and design.

## Run locally

Use Node.js 22.13 or newer, extract this ZIP, and open the `Farabi-Portfolio` folder in a terminal:

```bash
npm install
npm run dev
```

Open the address printed in the terminal, normally http://localhost:3000. For a production build:

```bash
npm run build
npm start
```

`npm run typecheck` checks TypeScript. A pinned pnpm lockfile is also included; you can use `pnpm install --frozen-lockfile` instead of npm. No API keys, database or contact-form backend are required.

## Where to edit

| File | Purpose |
| --- | --- |
| `app/page.tsx` | Homepage, real projects, filters, experience, skills, contact and animations |
| `lib/services.ts` | Development and digital marketing page content, deliverables, process and FAQs |
| `components/service-page.tsx` | Shared service page layout |
| `lib/seo.ts` | Professional identity, canonical origin, metadata, JSON-LD and service-page WhatsApp destination |
| `app/layout.tsx` | Global stylesheet, default metadata and Person/WebSite structured data |
| `app/services/web-development/page.tsx` | Development route and unique metadata |
| `app/services/digital-marketing/page.tsx` | Marketing route and unique metadata |
| `app/robots.txt/route.ts` | Crawler instructions and sitemap URL |
| `app/sitemap.xml/route.ts` | Homepage and service-page URLs |
| `app/globals.css` | Responsive layouts, colors, readable type, animation and cursor styles |
| `components/whatsapp-chat.tsx` | Shared floating WhatsApp control and icon |
| `components/desktop-cursor.tsx` | Automatic custom mouse pointer and decorative follower |
| `public/images/` | Optimized portrait sizes and 1200×630 social sharing image |
| `public/cursors/` | Native SVG pointers and PNG fallbacks |

## SEO configuration and privacy

The existing Sites deployment remains owner-private. Search engines cannot index content behind its sign-in gate. All pages also default to `noindex, nofollow`. The sitemap, canonical links, metadata and structured data prepare the source for an explicitly authorized public deployment later; they do not make this private Site discoverable in Google.

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to your deployment’s exact origin before building. It defaults to `http://localhost:3000` for local development.

Only for a deployment you have chosen to make public: set `NEXT_PUBLIC_ALLOW_INDEXING=true`, set the real public origin, then rebuild and redeploy. Confirm that the live pages are publicly accessible, have the correct canonical URLs and no longer carry `noindex` before submitting `/sitemap.xml` through your own Google Search Console account. Ranking and campaign performance are not guaranteed.

This standalone export has no authentication layer. `noindex` is not access control: configure private access at your hosting provider if you need to restrict visitors. No analytics accounts, advertising IDs, tracking scripts or credentials have been added.

## Content and client value

- Both roles appear in the introduction, services, skills, experience, contact copy and search/social metadata.
- Digital marketing covers SEO, Meta Ads, Google Ads, social media and landing-page improvements. Automation covers n8n, Zapier and AI-assisted workflows.
- Service pages describe possible deliverables, a working process and practical FAQs. Scope is agreed with each client; no fabricated campaign metrics, testimonials or ranking claims are included.
- Professional experience and skills follow the supplied final CV. Education and training timeline entries are omitted as requested. Private identity information and third-party reference details from that CV are not included, and the PDF itself is not hosted.

## Existing interactions retained

The default Live projects filter shows the four supplied URLs. All work includes earlier contribution case studies. External project links open safely in a new tab; project art is labelled **Concept visualization**, rather than presented as a screenshot. Dialogs restore focus when closed.

- https://bd.whatson.agency/
- https://sultanshahparties.netlify.app/
- https://mehedi-hasan-digi.netlify.app/
- https://itteamdashboard.netlify.app/#

WhatsApp uses `https://wa.me/8801760204210` with an encoded greeting. The visitor chooses whether to send it; the site does not send messages automatically. The shared floating control appears on the homepage and both service pages, with a 56px mobile target and safe-area spacing. It is hidden while a homepage case-study dialog is open. To change contact details, update `app/page.tsx` and `lib/seo.ts` together.

Portraits use local WebP variants with JPEG fallbacks, fixed image boxes and responsive loading. Replace the social image separately if your name, role or photo changes.

The custom mouse pointer activates automatically for eligible desktop/laptop mouse users. There is no cursor switch or stored opt-out. Touch, editable text, keyboard use and high-contrast modes keep appropriate native behavior. Reduced motion or the homepage Motion toggle disables animated effects while retaining the static custom cursor.

Body text is 16px or larger, supporting interface text is generally 14px or larger, and decorative illustration labels use 12px or larger. Native FAQ disclosures on the service pages work without a JavaScript interaction handler.

See `VALIDATION.md` for completed checks and verification limits. Dependencies, build output, source-hosting credentials and runtime state are excluded from this ZIP.
