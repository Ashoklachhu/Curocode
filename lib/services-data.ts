export interface ServiceFeature { icon: string; title: string; desc: string }
export interface ServiceStep    { num: string; title: string; desc: string }
export interface ServiceResult  { value: string; label: string }
export interface ServiceFAQ     { q: string; a: string }

export interface ServiceData {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  accent: { from: string; to: string; text: string; badge: string; glow: string }
  heroStats: { value: string; label: string }[];
  features: ServiceFeature[];
  process: ServiceStep[];
  results: ServiceResult[];
  faq: ServiceFAQ[];
}

const ACCENT = {
  from: "from-indigo-600", to: "to-purple-600",
  text: "text-indigo-400",
  badge: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
  glow: "rgba(99,102,241,0.35)",
};

export const SERVICES: ServiceData[] = [

  /* ── 1. WEB & APP DEVELOPMENT ──────────────────────── */
  {
    slug: "web-app-development",
    title: "Web & App Development",
    category: "Development & Engineering",
    tagline: "Custom-Built for Your Business. Engineered to Scale.",
    description:
      "We design and engineer custom websites, client portals, and web applications tailored precisely to your business needs — not off-the-shelf templates. Every build is fast, secure, and built to grow with you.",
    accent: ACCENT,
    heroStats: [
      { value: "30d",  label: "Average project delivery" },
      { value: "<1s",  label: "Load time target" },
      { value: "100",  label: "Google PageSpeed score" },
      { value: "3x",   label: "Average conversion lift" },
    ],
    features: [
      { icon: "Monitor",         title: "Custom Websites",         desc: "Bespoke business websites designed around your brand, goals, and audience — built to convert visitors into customers." },
      { icon: "LayoutDashboard", title: "Portals & Dashboards",    desc: "Client portals, internal dashboards, and admin panels built with real-time data, role-based access, and clean UX." },
      { icon: "AppWindow",       title: "Web Applications",        desc: "Complex web apps with custom logic, database architecture, API integrations, and scalable cloud infrastructure." },
      { icon: "Smartphone",      title: "Mobile-First Engineering", desc: "Every build starts on mobile. Responsive, touch-optimised, and tested across all devices and screen sizes." },
      { icon: "Plug",            title: "Third-Party Integrations", desc: "CRMs, payment gateways, ERPs, and APIs — we connect your web build to the tools your business already uses." },
      { icon: "ShieldCheck",     title: "Security & Performance",  desc: "SSL, OWASP-compliant code, automated backups, and performance monitoring built in from day one." },
    ],
    process: [
      { num: "01", title: "Discovery & Scoping",  desc: "We define your requirements, user flows, and technical architecture. You get a clear brief, timeline, and fixed price." },
      { num: "02", title: "Design & Prototype",   desc: "High-fidelity mockups for every screen. You approve the exact look and feel before development begins." },
      { num: "03", title: "Build & Test",         desc: "Developed in sprints with daily updates. Rigorous QA testing across browsers, devices, and performance benchmarks." },
      { num: "04", title: "Launch & Handover",    desc: "We deploy, monitor live performance, and hand over full documentation. Your team is trained and ready to manage it." },
    ],
    results: [
      { value: "215%", label: "Average lead increase post-launch" },
      { value: "47%",  label: "Drop in bounce rate" },
      { value: "30d",  label: "Average delivery from kickoff" },
    ],
    faq: [
      { q: "Do you build custom or use templates?",    a: "Always custom. We never use templates — every website and app is engineered specifically for your business and goals." },
      { q: "Can you build in Arabic?",                 a: "Yes — full RTL layout, Arabic typography, and bilingual content management is standard on all UAE projects." },
      { q: "Who owns the code after delivery?",        a: "You do. Full source code handover, no licensing, no lock-in. It's yours completely." },
      { q: "Do you offer post-launch support?",        a: "Yes — 30 days of free fixes post-launch. For ongoing support, our Smart Support System plan covers everything." },
    ],
  },

  /* ── 2. AI AUTOMATION ──────────────────────────────── */
  {
    slug: "ai-automation",
    title: "AI Automation",
    category: "Autonomous Systems",
    tagline: "Smart Workflows That Run Your Business on Autopilot.",
    description:
      "We build intelligent automation systems that eliminate manual work, cut costs, and let your team focus on what actually matters. From AI-powered lead handling to fully autonomous business workflows — we make your operations run themselves.",
    accent: ACCENT,
    heroStats: [
      { value: "80%",  label: "Reduction in manual tasks" },
      { value: "24/7", label: "Systems run around the clock" },
      { value: "60d",  label: "Average time to go live" },
      { value: "4x",   label: "Team productivity boost" },
    ],
    features: [
      { icon: "MessageCircle", title: "WhatsApp AI Agent",       desc: "Automatically qualify leads, answer FAQs, book appointments, and follow up via WhatsApp in Arabic and English — 24/7." },
      { icon: "GitBranch",     title: "Business Workflow Bots",  desc: "Map any business process — lead handling, invoicing, onboarding — and we automate it end-to-end with zero manual input." },
      { icon: "Bot",           title: "Custom AI Assistants",    desc: "Train a GPT-powered assistant on your business knowledge. Instant, accurate answers for staff and customers at scale." },
      { icon: "Mail",          title: "Autonomous Follow-Up",    desc: "Behaviour-triggered email and WhatsApp sequences that nurture leads automatically — from first touch to closed deal." },
      { icon: "BarChart3",     title: "Automated Reporting",     desc: "Real-time dashboards and scheduled AI reports that surface the numbers you need without manual data pulling." },
      { icon: "Layers",        title: "Deep System Integrations",desc: "Seamlessly connect Zoho, HubSpot, Salesforce, Slack, Google Workspace, QuickBooks, and 200+ tools via smart API bridges." },
    ],
    process: [
      { num: "01", title: "Process Mapping",     desc: "We audit your current workflows, identify the highest-value automation opportunities, and rank them by ROI and effort." },
      { num: "02", title: "Automation Blueprint", desc: "Full logic map of every trigger, action, and integration. You review and approve everything before we build." },
      { num: "03", title: "Build & Integrate",   desc: "Built and stress-tested in staging. We connect every system and run end-to-end tests before touching your live environment." },
      { num: "04", title: "Monitor & Improve",   desc: "24/7 monitoring with error handling. Monthly optimisation reviews to keep every automation running at peak performance." },
    ],
    results: [
      { value: "80%",  label: "Reduction in manual data entry" },
      { value: "6hrs", label: "Saved per team member every day" },
      { value: "2min", label: "Lead response time (was 6 hours)" },
    ],
    faq: [
      { q: "Do I need technical knowledge to get started?", a: "None at all. You describe how your business works — we handle every technical aspect of building the automation." },
      { q: "Which tools can you connect to?",               a: "200+ tools including WhatsApp Business API, Zoho, HubSpot, Salesforce, Slack, Google Workspace, and custom APIs." },
      { q: "How quickly will I see ROI?",                   a: "Most clients recover the investment within 60–90 days through time saved and opportunities no longer missed." },
      { q: "Is my business data safe?",                     a: "Yes. All integrations use encrypted API connections. We never store sensitive data on third-party servers." },
    ],
  },

  /* ── 3. BRAND & UI DESIGN ──────────────────────────── */
  {
    slug: "brand-ui-design",
    title: "Brand & UI Design",
    category: "Design & Identity",
    tagline: "Design That Communicates Before Words Do.",
    description:
      "We build premium brand identities and UI design systems that make your business look world-class at every touchpoint. From your logo to your product interface — every element is intentional, cohesive, and built to convert.",
    accent: ACCENT,
    heroStats: [
      { value: "2x",  label: "Perceived value with strong brand" },
      { value: "21d", label: "Full brand identity delivery" },
      { value: "7x",  label: "Customer recall improvement" },
      { value: "∞",   label: "Lifetime brand ownership" },
    ],
    features: [
      { icon: "PenTool",    title: "Logo & Brand Identity",    desc: "Distinctive logos and visual identities delivered in every format — digital, print, and Arabic — with unlimited refinements." },
      { icon: "Layers",     title: "UI Design Systems",        desc: "Scalable component libraries and design tokens for your web or app product. Consistent UI that speeds up every future build." },
      { icon: "Palette",    title: "Brand Guidelines",         desc: "A comprehensive brand bible covering colours, typography, tone of voice, photography style, and do's and don'ts." },
      { icon: "LayoutGrid", title: "Social Media Kit",         desc: "Branded post templates for Instagram, LinkedIn, TikTok, and Facebook. Your team posts on-brand every time, effortlessly." },
      { icon: "Briefcase",  title: "Business Collateral",      desc: "Business cards, letterheads, email signatures, pitch decks, and proposals — everything that touches a client, perfected." },
      { icon: "Lightbulb",  title: "Brand Strategy",           desc: "AI-assisted positioning, audience profiling, and competitor differentiation. The thinking that makes the design meaningful." },
    ],
    process: [
      { num: "01", title: "Brand Discovery",     desc: "Deep-dive into your vision, values, market position, and competitors. We identify white space and your strongest differentiators." },
      { num: "02", title: "Strategy & Concepts", desc: "Brand strategy document plus 2–3 distinct visual concepts, each with rationale, mood board, and real-world application examples." },
      { num: "03", title: "Refine & Perfect",    desc: "You select a direction and we develop it fully. Iterate until every element is exactly right — no revision limits." },
      { num: "04", title: "Deliver & Activate",  desc: "Full brand and UI kit delivered with a live walkthrough. Your team knows how to apply every element across every channel." },
    ],
    results: [
      { value: "2x",  label: "Higher perceived value post-rebrand" },
      { value: "40%", label: "Increase in referrals from brand recognition" },
      { value: "3wk", label: "Average full identity delivery" },
    ],
    faq: [
      { q: "What's the difference between branding and UI design?",  a: "Branding covers your identity — logo, colours, tone. UI design applies that to digital interfaces — websites, apps, dashboards." },
      { q: "Do you design in Arabic?",                               a: "Yes. All brand work includes Arabic versions with native Arabic designers and AI-assisted typographic refinement." },
      { q: "Who owns the final designs?",                            a: "You do, fully. Complete IP transfer on delivery — no licensing fees, no restrictions, ever." },
      { q: "Can you redesign an existing brand?",                    a: "Absolutely. We audit your current brand, identify what to evolve vs replace, and recommend the most strategic path forward." },
    ],
  },

  /* ── 4. AI-POWERED MARKETING FUNNEL ────────────────── */
  {
    slug: "ai-marketing-funnel",
    title: "AI-Powered Marketing Funnel",
    category: "AI-Driven Growth",
    tagline: "Full-Funnel. Fully Autonomous. Always Optimising.",
    description:
      "We build and manage end-to-end marketing funnels powered by AI — from the first ad impression to the closed deal. Strategy, creative, campaigns, landing pages, and follow-up sequences all running autonomously to fill your pipeline.",
    accent: ACCENT,
    heroStats: [
      { value: "3.2x",  label: "Average ROAS achieved" },
      { value: "47%",   label: "Lower cost per lead" },
      { value: "215%",  label: "Lead volume increase" },
      { value: "7d",    label: "Funnel launch time" },
    ],
    features: [
      { icon: "Target",     title: "AI Ad Campaigns",           desc: "Google, Meta, TikTok, and Snapchat campaigns managed by AI — autonomously testing creatives, bids, and audiences 24/7." },
      { icon: "FileText",   title: "High-Converting Landing Pages", desc: "AI-informed landing pages built for a single goal: turning ad clicks into leads. Tested and optimised continuously." },
      { icon: "Mail",       title: "Automated Lead Nurturing",  desc: "AI-triggered email and WhatsApp sequences that move leads through your funnel automatically — no manual follow-up needed." },
      { icon: "RefreshCw",  title: "Retargeting & Re-Engagement", desc: "Autonomous retargeting campaigns that bring back lost visitors and re-engage cold leads with the right message at the right time." },
      { icon: "Wand2",      title: "AI Creative Production",    desc: "Ad creatives, copy, and video in Arabic and English — continuously refreshed by AI based on live performance data." },
      { icon: "LineChart",  title: "Funnel Analytics",          desc: "Full-funnel visibility from first click to closed deal. AI-generated weekly insights that tell you exactly what to scale." },
    ],
    process: [
      { num: "01", title: "Funnel Audit & Strategy", desc: "AI analyses your market, competitors, and audience to design the highest-converting funnel architecture for your business." },
      { num: "02", title: "Build the Funnel",         desc: "We build landing pages, write copy, produce creatives, and set up all automation sequences before going live." },
      { num: "03", title: "Launch & AI Optimise",     desc: "Funnel goes live and AI begins optimising every element — bids, creatives, audiences, and sequences — within hours." },
      { num: "04", title: "Scale & Compound",         desc: "Once profitable, we scale ad spend, expand audiences, and add retargeting layers to compound results month on month." },
    ],
    results: [
      { value: "AED 3.2", label: "Revenue per AED 1 spent" },
      { value: "47%",     label: "Cost-per-lead reduction" },
      { value: "215%",    label: "Lead volume in 60 days" },
    ],
    faq: [
      { q: "What platforms do you run campaigns on?",        a: "Google Search, Display, YouTube, Meta (Facebook & Instagram), TikTok, and Snapchat — all managed under one strategy." },
      { q: "What's the minimum ad budget?",                  a: "We recommend AED 5,000/month in ad spend. Our management fee is separate and scales with your budget." },
      { q: "Do you create all the ad content?",              a: "Yes — strategy, copy, creative design, and video in Arabic and English. Fully handled by our team and AI tools." },
      { q: "How is this different from just running ads?",   a: "We build the entire funnel — ads, landing pages, nurture sequences, and retargeting — so leads don't just click, they convert." },
    ],
  },

  /* ── 5. SMART SUPPORT SYSTEM ────────────────────────── */
  {
    slug: "smart-support-system",
    title: "Smart Support System",
    category: "Autonomous Customer Handling",
    tagline: "Your Support Team. Available 24/7. Powered by AI.",
    description:
      "We build intelligent support systems — AI chatbots, automated helpdesks, and autonomous customer handling workflows — so your business delivers instant, accurate support around the clock without growing your headcount.",
    accent: ACCENT,
    heroStats: [
      { value: "24/7", label: "Autonomous customer support" },
      { value: "<30s", label: "Average AI response time" },
      { value: "80%",  label: "Queries resolved without human" },
      { value: "4x",   label: "Support capacity increase" },
    ],
    features: [
      { icon: "Bot",           title: "AI Chatbot",              desc: "A fully trained AI chatbot on your website and WhatsApp — answers questions, qualifies leads, and books appointments instantly." },
      { icon: "MessageCircle", title: "WhatsApp Helpdesk",       desc: "AI-managed WhatsApp support that handles incoming queries, triages issues, and escalates to humans only when needed." },
      { icon: "HelpCircle",    title: "Intelligent FAQ Engine",  desc: "AI trained on your products, services, and policies — giving customers accurate answers instantly, in Arabic and English." },
      { icon: "GitBranch",     title: "Smart Ticket Routing",    desc: "Incoming support requests automatically categorised, prioritised, and routed to the right team member with full context." },
      { icon: "RefreshCw",     title: "Escalation Workflows",    desc: "AI handles what it can, escalates what it can't — with full conversation history passed to your team seamlessly." },
      { icon: "BarChart3",     title: "Support Analytics",       desc: "AI-generated reports on response times, resolution rates, common queries, and customer satisfaction trends." },
    ],
    process: [
      { num: "01", title: "Support Audit",       desc: "We map your current support volume, common queries, escalation paths, and tools. Every gap is identified and prioritised." },
      { num: "02", title: "AI Training",          desc: "We train your AI on your business knowledge base, FAQs, products, and tone of voice — in Arabic and English." },
      { num: "03", title: "Build & Integrate",   desc: "Chatbot deployed on your website and WhatsApp. Helpdesk and ticketing system configured and connected to your team." },
      { num: "04", title: "Optimise & Expand",   desc: "Monthly AI retraining based on real conversations. Continuous improvement to resolution rates and customer satisfaction." },
    ],
    results: [
      { value: "80%",  label: "Queries resolved without human input" },
      { value: "24/7", label: "Support availability" },
      { value: "4x",   label: "Support capacity without added headcount" },
    ],
    faq: [
      { q: "Can the AI handle Arabic conversations?",      a: "Yes — all AI systems are trained bilingually. The bot detects the language and responds fluently in Arabic or English." },
      { q: "What happens when the AI can't answer?",       a: "It escalates gracefully to a human agent with the full conversation history — no customer ever hits a dead end." },
      { q: "Which platforms does it work on?",             a: "Website chat widget, WhatsApp Business, and we can extend to Instagram DMs, Facebook Messenger, and email." },
      { q: "How long does setup take?",                    a: "Most clients are live within 3–4 weeks. Training improves continuously over the first 60 days as the AI learns from real interactions." },
    ],
  },

  /* ── 6. AI BUSINESS INTELLIGENCE ───────────────────── */
  {
    slug: "ai-business-intelligence",
    title: "AI Business Intelligence",
    category: "Data & Intelligence",
    tagline: "Turn Your Business Data Into Decisions. Automatically.",
    description:
      "We build AI-powered intelligence systems that analyse your business performance, surface what's working and what isn't, and deliver clear, actionable reports — so you always know exactly where to focus to grow faster.",
    accent: ACCENT,
    heroStats: [
      { value: "360°", label: "Business performance visibility" },
      { value: "Real-time", label: "Data dashboards" },
      { value: "AI",   label: "Generated insights" },
      { value: "1",    label: "Source of truth for your team" },
    ],
    features: [
      { icon: "BarChart3",       title: "AI Performance Dashboards", desc: "Custom real-time dashboards that pull data from all your platforms — sales, marketing, operations — into one clear view." },
      { icon: "LineChart",       title: "Automated Reports",          desc: "AI-generated weekly and monthly reports delivered to your inbox. Plain-English insights — no data analyst needed." },
      { icon: "Search",          title: "Competitor Intelligence",    desc: "AI monitors your competitors' digital presence, pricing, and strategies — so you always know where you stand in the market." },
      { icon: "TrendingUp",      title: "Predictive Analytics",       desc: "AI models that forecast sales trends, predict churn, and identify your highest-value growth opportunities before they happen." },
      { icon: "Target",          title: "KPI Tracking & Alerts",      desc: "Define your key metrics and let AI monitor them automatically — instant alerts when something needs your attention." },
      { icon: "Database",        title: "Data Unification",           desc: "We connect all your data sources — CRM, website, ads, POS, and more — into a single unified intelligence layer." },
    ],
    process: [
      { num: "01", title: "Data Audit",          desc: "We map every data source in your business, identify gaps, and design the intelligence architecture that gives you full visibility." },
      { num: "02", title: "Dashboard Design",    desc: "Custom dashboards built around your specific KPIs and decision-making needs — reviewed and approved before we build." },
      { num: "03", title: "AI Integration",      desc: "All data sources connected, AI models trained on your historical data, and automated reporting pipelines configured." },
      { num: "04", title: "Insights & Action",   desc: "Monthly intelligence reviews where AI insights translate directly into business decisions and growth actions." },
    ],
    results: [
      { value: "360°", label: "Visibility across all business functions" },
      { value: "3x",   label: "Faster decision-making with AI insights" },
      { value: "40%",  label: "Reduction in wasted marketing spend" },
    ],
    faq: [
      { q: "What data sources can you connect?",          a: "Any platform with an API — Google Analytics, Meta Ads, CRMs, Shopify, POS systems, accounting software, and more." },
      { q: "Do I need a data team to use this?",          a: "No. We build the entire system and deliver AI-generated reports in plain English. No technical knowledge needed." },
      { q: "How is this different from Google Analytics?", a: "We unify all your data sources — not just website traffic — and layer AI analysis on top to surface insights GA can't show." },
      { q: "Can the reports be customised?",               a: "Completely. Every dashboard and report is built around your specific business metrics, goals, and the decisions you need to make." },
    ],
  },
];

export function getService(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);
