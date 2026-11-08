/** Shared, accessible click-to-chat control for every portfolio route. */
export function WhatsAppIcon({ size = 24 }: { size?: number }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><path d="M20.9 11.4a8.8 8.8 0 0 1-13 7.8L3 21l1.7-5.1A8.8 8.8 0 1 1 20.9 11.4Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 7.4c-.7.2-1 1.1-.8 2.2.5 2.5 3 5.1 5.6 5.6 1.1.2 2-.2 2.2-.9l.2-1.1-2.2-1.1-.9 1a7.6 7.6 0 0 1-3-3l1-.9-1-2.1Z" fill="currentColor"/></svg>; }

export default function WhatsAppChat({ href, displayNumber = "+880 1760 204210" }: { href: string; displayNumber?: string }) {
  return <a className="whatsapp-float" href={href} target="_blank" rel="noopener noreferrer" aria-label={`Chat with Farabi on WhatsApp at ${displayNumber} (opens in a new tab)`} title={`Chat on WhatsApp: ${displayNumber}`}><WhatsAppIcon size={27} /><span className="whatsapp-float-label">Chat on WhatsApp</span></a>;
}
