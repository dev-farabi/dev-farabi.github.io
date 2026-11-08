export type Service = {
  slug: string; name: string; kicker: string; cardDescription: string;
  title: string; description: string; headline: string; intro: string;
  highlights: string[]; deliverables: { title: string; body: string }[];
  process: { title: string; body: string }[];
  faqs: { question: string; answer: string }[];
};
export const services: Service[] = [
  {
    slug: "web-development", name: "Full Stack Development", kicker: "BUILD A BETTER DIGITAL FOUNDATION",
    cardDescription: "Websites and applications that explain your offer, work across devices and make it easy to take the next step.",
    title: "Full Stack Web Development | React, Next.js & WordPress | Farabi",
    description: "Full stack web development by Farabi in Dhaka, Bangladesh. React, Next.js, MERN, WordPress, API integration, deployment and website maintenance.",
    headline: "Websites built around your business.",
    intro: "I build responsive websites and web applications with React, Next.js, Node.js and WordPress. The focus is clear information, reliable functionality and a useful path from first visit to enquiry.",
    highlights: ["Responsive websites & MERN applications", "WordPress, APIs & database integration", "Deployment, maintenance & technical SEO"],
    deliverables: [
      { title: "Responsive frontend", body: "Interfaces that translate your design and content into readable, accessible pages across desktop and mobile." },
      { title: "Application features", body: "Reusable React components, Node.js and Express APIs, database connections and workflows matched to your requirements." },
      { title: "WordPress & integrations", body: "Manageable content, custom frontend connections and REST API integrations that bring your tools together." },
      { title: "Technical SEO foundations", body: "Descriptive metadata, semantic structure, internal links, optimized images and crawl settings appropriate to the website’s access." },
      { title: "Deployment & maintenance", body: "Environment setup, production builds, practical troubleshooting and agreed website updates after launch." },
      { title: "A clear handover", body: "Documented setup and an agreed list of features so you know what has been delivered and how to maintain it." }
    ],
    process: [
      { title: "Define the job", body: "Understand your audience, content, essential features and the action visitors should take." },
      { title: "Build the experience", body: "Develop the interface and connect the systems, with scope and priorities agreed together." },
      { title: "Check & launch", body: "Review responsive layouts, links, forms, accessibility and production readiness before deployment." },
      { title: "Maintain & improve", body: "Use feedback and real issues to guide the next set of improvements." }
    ],
    faqs: [
      { question: "Can you improve an existing website?", answer: "Yes. I can review a React, Next.js or WordPress website and scope improvements to its interface, functionality, integrations, deployment or maintenance." },
      { question: "Do you support SEO during development?", answer: "Yes. I can include technical and on-page foundations such as descriptive titles, clear headings, internal links, image optimization and sitemap configuration. Search rankings also depend on content, competition and other factors." },
      { question: "How do we choose the technology?", answer: "We start with the content, features, integrations and maintenance needs. I can recommend a React or Next.js application, a WordPress website, or a combination based on that scope." },
      { question: "What should I send to start?", answer: "Share your business goal, current website if you have one, required features, available content and preferred timeline. We can then discuss a suitable scope." }
    ]
  },
  {
    slug: "digital-marketing", name: "Digital Marketing", kicker: "HELP THE RIGHT PEOPLE FIND YOU",
    cardDescription: "Connect search, paid campaigns and social content with a website that clearly presents your offer.",
    title: "Digital Marketing | SEO, Meta Ads & Google Ads | Farabi",
    description: "Digital marketing support from Farabi in Dhaka, Bangladesh. SEO, Meta Ads, Google Ads, social media content and landing page improvements for businesses.",
    headline: "Make your offer easier to find. And act on.",
    intro: "I connect SEO, Meta Ads, Google Ads and social media with the pages people land on. My development background helps align the message, the website and the next action you want your customer to take.",
    highlights: ["SEO & search-friendly content structure", "Meta Ads & Google Ads campaign support", "Social media & focused landing pages"],
    deliverables: [
      { title: "SEO & website review", body: "Review page structure, metadata, internal links and content clarity, then prioritize changes around the searches relevant to your offer." },
      { title: "Meta Ads support", body: "Plan audience and creative options, structure campaigns and review the available results against your agreed objective." },
      { title: "Google Ads support", body: "Align search intent, keywords, ad copy and destination pages. Review campaign settings and spend with the business goal in view." },
      { title: "Social media content", body: "Organize content topics, prepare clear copy and visuals, and support a consistent publishing workflow using tools such as Canva." },
      { title: "Landing page improvements", body: "Bring the campaign message onto the page with readable content, responsive layouts and a clear enquiry or purchase path." },
      { title: "Review & next steps", body: "Agree the measures that matter, review data you can share, and use the findings to guide content, campaign and website changes." }
    ],
    process: [
      { title: "Understand your offer", body: "Define the audience, offer, existing channels and the business action you want to encourage." },
      { title: "Prioritize the channels", body: "Choose an initial scope for SEO, paid ads or social content based on your needs and budget." },
      { title: "Connect & launch", body: "Align the content, creative and landing page, then launch the agreed work through your accounts." },
      { title: "Review & refine", body: "Review relevant indicators such as qualified enquiries, clicks, engagement or cost per enquiry when data is available." }
    ],
    faqs: [
      { question: "Can you handle both the website and marketing?", answer: "Yes. My full stack development and digital marketing skills let me work on the website, landing pages, SEO structure and campaign content within one agreed scope." },
      { question: "Do you guarantee search rankings or ad results?", answer: "No fixed ranking, enquiry volume or advertising return is guaranteed. Results depend on your offer, competition, content, budget and implementation. We agree objectives and review the available evidence." },
      { question: "Is advertising spend included?", answer: "Advertising budget is separate from service work and is agreed before launch. Campaigns should run through accounts your business owns, with appropriate access granted for the work." },
      { question: "What should I share for a first discussion?", answer: "Send your website or social profiles, main product or service, target audience, current challenge and approximate campaign budget if you have one. Please do not send account passwords." }
    ]
  }
];
