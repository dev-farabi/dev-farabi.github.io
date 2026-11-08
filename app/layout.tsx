import "./globals.css";
import { homeMetadata, profileGraph, serializeJsonLd } from "../lib/seo";

export const metadata = homeMetadata;
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(profileGraph) }} />{children}</body></html>;
}
