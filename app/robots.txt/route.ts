import { absoluteUrl } from "../../lib/seo";
// Authentication protects the private Site. Crawlers that can access a page must see its noindex directive.
export const dynamic = "force-static";
export function GET() {
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${absoluteUrl("/sitemap.xml")}\n`, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
