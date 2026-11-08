import { ArrowUpRight, ArrowLeft, Check, Code2, Megaphone, Mail } from "lucide-react";
import DesktopCursor from "./desktop-cursor";
import WhatsAppChat from "./whatsapp-chat";
import { type Service, services } from "../lib/services";
import { absoluteUrl, profile, serializeJsonLd, whatsappUrl } from "../lib/seo";

export default function ServicePage({ service }: { service: Service }) {
  const path = `/services/${service.slug}`;
  const Icon = service.slug === "web-development" ? Code2 : Megaphone;
  const related = services.find(item => item.slug !== service.slug)!;
  const schema = {
    "@context": "https://schema.org", "@graph": [
      { "@type": "Service", "@id": absoluteUrl(`${path}#service`), name: service.name, serviceType: service.name,
        description: service.description, url: absoluteUrl(path), provider: { "@id": absoluteUrl("/#person") } },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl() },
        { "@type": "ListItem", position: 2, name: service.name, item: absoluteUrl(path) }
      ] }
    ]
  };
  return <div className="portfolio service-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }} />
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><div className="nav-container service-nav-container"><a className="brand" href="/" aria-label="Farabi home">farabi<span className="brand-dot">.</span></a><nav className="service-navigation" aria-label="Main navigation"><a href="/#services">Services</a><a href="/#work">Projects</a><a href="/#experience">About</a><a className="nav-contact" href="/#contact">Let’s talk <ArrowUpRight size={15} /></a></nav></div></header>
    <main id="main">
      <section className="service-hero container">
        <nav className="service-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span aria-current="page">{service.name}</span></nav>
        <div className="service-hero-grid"><div><p className="eyebrow">{service.kicker}</p><h1>{service.headline}</h1><p className="service-lead">{service.intro}</p><div className="hero-actions"><a className="button button-primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Discuss your project <ArrowUpRight size={18} /></a><a className="text-link" href="/#work">Explore my work <ArrowUpRight size={17} /></a></div></div><aside className="service-summary"><span className="service-icon"><Icon size={32} strokeWidth={1.5} /></span><p className="service-kicker">YOUR WEBSITE. YOUR NEXT STEP.</p><h2>{service.name}</h2><ul>{service.highlights.map(item => <li key={item}><Check size={18} /><span>{item}</span></li>)}</ul><span className="service-summary-byline">Farabi · Dhaka, Bangladesh<br />Available for remote collaboration</span></aside></div>
      </section>
      <section className="section container service-inclusions"><div className="section-top"><div><p className="eyebrow">A PRACTICAL SCOPE</p><h2>What we can<br /><span>work on together.</span></h2></div><p className="section-description">Choose the work that fits your needs. Deliverables and priorities are agreed before the project begins.</p></div><div className="deliverables-grid">{service.deliverables.map((item, i) => <article key={item.title}><span className="service-index">0{i + 1}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div></section>
      <section className="section service-process-section"><div className="container"><div className="section-top"><div><p className="eyebrow">THE WORKING PROCESS</p><h2>A clear goal.<br /><span>A useful next step.</span></h2></div></div><ol className="service-process">{service.process.map((step, i) => <li key={step.title}><span>0{i + 1}</span><h3>{step.title}</h3><p>{step.body}</p></li>)}</ol></div></section>
      <section className="section container service-faq"><div><p className="eyebrow">BEFORE WE START</p><h2>A few useful<br /><span>answers.</span></h2></div><div className="faq-list">{service.faqs.map(faq => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div></section>
      <section className="container service-cta"><p className="eyebrow">LET’S TALK ABOUT YOUR GOAL</p><h2>Tell me what you<br /><span>want to improve.</span></h2><p>Share your website, the challenge and the result you’re working towards. We can discuss the right scope from there.</p><div className="hero-actions"><a className="button button-primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Chat on WhatsApp <ArrowUpRight size={18} /></a><a className="text-link" href={`mailto:${profile.email}`}><Mail size={17} /> Email Farabi</a></div></section>
      <div className="container related-service"><span>ALSO EXPLORE</span><a href={`/services/${related.slug}`}>{related.name}<ArrowUpRight size={22} /></a></div>
    </main>
    <footer className="site-footer container"><a className="brand footer-brand" href="/">farabi<span className="brand-dot">.</span></a><p>© 2026 Md. Moslemin Hossain</p><a href="/" className="back-top"><ArrowLeft size={16} /> Back to portfolio</a></footer>
    <WhatsAppChat href={whatsappUrl} />
    <DesktopCursor motion={true} paused={false} />
  </div>;
}
