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

// All services share the same brand accent — indigo → purple
const ACCENT = {
  from: "from-indigo-600", to: "to-purple-600",
  text: "text-indigo-400",
  badge: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
  glow: "rgba(99,102,241,0.35)",
};

export const SERVICES: ServiceData[] = [
  /* ── 1. WEB SOLUTIONS ─────────────────────────────── */
  {
    slug: "web-solutions",
    title: "Web Solutions",
    category: "Design & Development",
    tagline: "Websites That Work While You Sleep",
    description:
      "We build high-performance websites and web applications that don't just look great — they convert visitors into paying customers. Every pixel is intentional, every interaction is optimised for your UAE audience.",
    accent: ACCENT,
    heroStats: [
      { value: "3x",   label: "Average conversion lift" },
      { value: "<1s",  label: "Load time target" },
      { value: "100",  label: "Google PageSpeed score" },
      { value: "30d",  label: "Average delivery" },
    ],
    features: [
      { icon: "Zap",          title: "Lightning Fast",       desc: "Sub-second load times, optimised Core Web Vitals, CDN-deployed globally so UAE visitors get instant experiences." },
      { icon: "Smartphone",   title: "Mobile-First Design",  desc: "Over 70% of UAE traffic is mobile. We design for the small screen first, then scale up — never the other way around." },
      { icon: "Palette",      title: "Premium UI/UX",        desc: "Bespoke designs that reflect your brand. No templates, no shortcuts. Every screen crafted for maximum impact." },
      { icon: "Plug",         title: "CMS Integration",      desc: "Update your own content without a developer. We integrate headless CMS so your team stays in control." },
      { icon: "ShoppingCart", title: "E-Commerce Ready",     desc: "Full e-commerce builds with payment gateways, inventory, Arabic language support, and UAE VAT compliance." },
      { icon: "ShieldCheck",  title: "Secure & Scalable",    desc: "SSL, GDPR-ready, regular security audits. Built to handle traffic spikes from your marketing campaigns." },
    ],
    process: [
      { num: "01", title: "Discovery Call",     desc: "We learn your business, goals, competitors, and target audience. Outcome: a clear project brief and timeline." },
      { num: "02", title: "Design & Prototype", desc: "High-fidelity wireframes and interactive mockups. You see exactly what you're getting before a line of code is written." },
      { num: "03", title: "Development",        desc: "Built with Next.js, optimised for speed and SEO. Daily updates so you're never in the dark." },
      { num: "04", title: "Launch & Optimise",  desc: "We launch, monitor, and iterate. A/B test key pages in the first 30 days to maximise your conversion rate." },
    ],
    results: [
      { value: "215%", label: "Average lead increase post-launch" },
      { value: "47%",  label: "Drop in bounce rate" },
      { value: "3.2x", label: "ROAS on paid traffic" },
    ],
    faq: [
      { q: "How long does a website take?",         a: "A standard business website takes 3–4 weeks. E-commerce or custom web apps take 6–10 weeks depending on complexity." },
      { q: "Do you support Arabic language?",       a: "Yes — full RTL layout, Arabic typography, and bilingual content management is included on all projects." },
      { q: "What's included after launch?",         a: "30 days of free bug fixes and tweaks. After that, our maintenance retainer covers updates, backups, and monitoring." },
      { q: "Can I update the website myself?",      a: "Absolutely. We set up a user-friendly CMS and provide a training session so your team can manage content independently." },
    ],
  },

  /* ── 2. AI AUTOMATION ─────────────────────────────── */
  {
    slug: "ai-automation",
    title: "AI Automation",
    category: "Artificial Intelligence",
    tagline: "Let AI Handle the Repetitive. You Focus on Growth.",
    description:
      "We build intelligent automation systems that eliminate manual work, reduce operational costs, and let your team focus on high-value tasks. From WhatsApp AI agents to full workflow automation — we make AI work for your specific business.",
    accent: ACCENT,
    heroStats: [
      { value: "80%", label: "Reduction in manual tasks" },
      { value: "24/7", label: "AI works around the clock" },
      { value: "60d",  label: "Average time to go live" },
      { value: "4x",   label: "Team productivity boost" },
    ],
    features: [
      { icon: "MessageCircle", title: "WhatsApp AI Agent",       desc: "Automatically qualify leads, answer FAQs, book appointments, and follow up via WhatsApp — in Arabic and English." },
      { icon: "GitBranch",     title: "Workflow Automation",     desc: "Connect your CRM, email, calendar, and tools. Triggers fire automatically so nothing falls through the cracks." },
      { icon: "BarChart3",     title: "AI Reporting Dashboards", desc: "Real-time dashboards that pull data from all your platforms and surface the insights that actually matter." },
      { icon: "Mail",          title: "Email & Follow-Up AI",    desc: "Personalised follow-up sequences triggered by behaviour — website visit, form fill, or inactivity." },
      { icon: "Bot",           title: "Custom AI Assistants",    desc: "Train a GPT-powered assistant on your business knowledge. Answer customer queries instantly, at scale." },
      { icon: "Layers",        title: "System Integrations",     desc: "We connect Zoho, Salesforce, HubSpot, Slack, Google Workspace, QuickBooks and 200+ other tools via API." },
    ],
    process: [
      { num: "01", title: "Process Audit",     desc: "We map your current workflows, identify the highest-ROI automation opportunities, and prioritise by impact." },
      { num: "02", title: "Solution Design",   desc: "Blueprint of every automation, trigger, and integration. You approve the logic before we build anything." },
      { num: "03", title: "Build & Integrate", desc: "We build, connect, and test every automation in a staging environment before touching your live systems." },
      { num: "04", title: "Monitor & Improve", desc: "Ongoing monitoring, error handling, and monthly optimisations to keep your automations running perfectly." },
    ],
    results: [
      { value: "80%",  label: "Reduction in manual data entry" },
      { value: "6hrs", label: "Saved per team member daily" },
      { value: "2min", label: "Average lead response time (was 6hrs)" },
    ],
    faq: [
      { q: "Do I need technical knowledge?",     a: "Zero. We handle all the technical setup. You just describe the process you want automated and we build it." },
      { q: "Which tools do you integrate with?", a: "200+ tools including WhatsApp Business API, Zoho, Salesforce, HubSpot, Slack, Google Workspace, and custom APIs." },
      { q: "How long before I see ROI?",         a: "Most clients recover the investment within 60–90 days through time saved and leads that no longer slip through the cracks." },
      { q: "Is my data secure?",                 a: "Yes. All automations use encrypted API connections. We never store sensitive customer data on third-party servers." },
    ],
  },

  /* ── 3. DIGITAL MARKETING ─────────────────────────── */
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    category: "Performance Marketing",
    tagline: "Every Dirham Spent Should Come Back With Friends.",
    description:
      "Data-driven marketing campaigns that fill your pipeline with qualified leads. We run Google, Meta, TikTok, and Snapchat ads built specifically for the UAE market — with creatives, targeting, and copy that converts.",
    accent: ACCENT,
    heroStats: [
      { value: "3.2x",  label: "Average ROAS achieved" },
      { value: "47%",   label: "Lower cost per lead" },
      { value: "215%",  label: "Lead volume increase" },
      { value: "7d",    label: "Campaign launch time" },
    ],
    features: [
      { icon: "Target",     title: "Google Ads",            desc: "Search, Display, Performance Max, and YouTube campaigns. We capture buyers at every stage of the funnel." },
      { icon: "ImageIcon",  title: "Meta Ads",              desc: "Facebook and Instagram campaigns with scroll-stopping creatives. Laser-targeted to your ideal UAE customer profile." },
      { icon: "Play",       title: "TikTok & Snapchat",    desc: "Reach younger UAE demographics with native-feel short-form video ads that don't feel like ads." },
      { icon: "TrendingUp", title: "Full-Funnel Strategy",  desc: "Awareness → Consideration → Conversion → Retention. We cover every stage so leads don't leak from your funnel." },
      { icon: "Wand2",      title: "Creative Production",   desc: "Ad creatives, copy, and video in Arabic and English. Built on data — not guesswork — and updated weekly." },
      { icon: "LineChart",  title: "Analytics & Reporting", desc: "Weekly performance reports with plain-English insights. You always know exactly what's working and what we're testing." },
    ],
    process: [
      { num: "01", title: "Market Research",   desc: "Competitor analysis, audience deep-dive, keyword research. We know your market before spending a single dirham." },
      { num: "02", title: "Campaign Strategy", desc: "Full funnel blueprint: platforms, budgets, audiences, creatives, and KPIs. Agreed before launch." },
      { num: "03", title: "Launch & Optimise", desc: "Campaigns go live with daily optimisation in week one. We test aggressively and scale what works." },
      { num: "04", title: "Scale & Retain",    desc: "Once profitable campaigns are identified, we scale budgets and introduce retargeting to maximise LTV." },
    ],
    results: [
      { value: "AED 3.2", label: "Revenue per AED 1 spent" },
      { value: "47%",     label: "Avg. cost-per-lead reduction" },
      { value: "215%",    label: "Lead volume growth in 60 days" },
    ],
    faq: [
      { q: "What's the minimum ad budget?",    a: "We recommend a minimum of AED 5,000/month ad spend. Our management fee is separate and scales with spend." },
      { q: "How quickly will I see results?",  a: "Initial data within 7 days. Optimised performance typically kicks in by week 3–4 as we accumulate signal." },
      { q: "Do you create the ads or do I?",   a: "We handle everything — strategy, copywriting, creative design, and video production in both Arabic and English." },
      { q: "Can I pause anytime?",             a: "Yes. We work on monthly rolling contracts. No lock-in, no penalty. We keep clients because results speak for themselves." },
    ],
  },

  /* ── 4. SEO & GROWTH ──────────────────────────────── */
  {
    slug: "seo-growth",
    title: "SEO & Growth",
    category: "Organic Growth",
    tagline: "Rank Higher. Get Found. Grow Without Paying Per Click.",
    description:
      "Sustainable organic growth that compounds over time. We optimise your website for Google UAE search, build authority, and create content that attracts your ideal customers — without depending on ad spend forever.",
    accent: ACCENT,
    heroStats: [
      { value: "Top 3", label: "Google rankings target" },
      { value: "6mo",   label: "Avg. time to page 1" },
      { value: "300%",  label: "Organic traffic increase" },
      { value: "0",     label: "Cost per organic click" },
    ],
    features: [
      { icon: "Settings2", title: "Technical SEO",       desc: "Site speed, Core Web Vitals, crawlability, structured data, and mobile optimisation — the foundation everything else builds on." },
      { icon: "FileText",  title: "Content Strategy",    desc: "Keyword-led content that answers what your customers are actually searching for in UAE Google." },
      { icon: "Link2",     title: "Link Building",       desc: "High-quality backlinks from UAE and regional publications that build your domain authority over time." },
      { icon: "MapPin",    title: "Local SEO",           desc: "Google Business Profile optimisation, local citations, and review management to dominate Dubai, Abu Dhabi, and UAE local search." },
      { icon: "Globe",     title: "Arabic SEO",          desc: "Arabic keyword research and bilingual content strategy to capture the significant Arabic-language search market in UAE." },
      { icon: "Search",    title: "Competitor Analysis", desc: "Monthly analysis of what your top competitors are doing — so we're always one step ahead." },
    ],
    process: [
      { num: "01", title: "SEO Audit",          desc: "Full technical audit, keyword gap analysis, and competitor mapping. Your current position clearly defined." },
      { num: "02", title: "Keyword Strategy",   desc: "We identify the highest-value, most achievable keywords for your business and map them to pages." },
      { num: "03", title: "On-Page & Technical",desc: "We fix every technical issue and optimise every page. Content updated to match search intent perfectly." },
      { num: "04", title: "Authority Building", desc: "Monthly content creation and link building to steadily grow your domain rating and organic rankings." },
    ],
    results: [
      { value: "300%", label: "Organic traffic increase (12 months)" },
      { value: "#1",   label: "Rankings achieved for competitive terms" },
      { value: "60%",  label: "Reduction in paid ad dependency" },
    ],
    faq: [
      { q: "How long does SEO take to work?",       a: "Honest answer: 3–6 months for meaningful movement, 6–12 months for significant results. SEO is a long-term investment." },
      { q: "Do you guarantee first page rankings?", a: "No one can guarantee specific rankings — Google's algorithm is unpredictable. We guarantee consistent effort, transparency, and proven methods." },
      { q: "Do you do Arabic SEO?",                 a: "Yes. We have native Arabic speakers on the team and a dedicated Arabic keyword strategy for all SEO clients." },
      { q: "Can I do SEO and paid ads together?",   a: "Absolutely — they complement each other. Paid ads give immediate traffic while SEO builds long-term organic equity." },
    ],
  },

  /* ── 5. BRANDING ──────────────────────────────────── */
  {
    slug: "branding",
    title: "Branding",
    category: "Brand Identity",
    tagline: "Your Brand is the Story Before You Speak.",
    description:
      "A powerful brand isn't just a logo — it's the feeling your customers get at every touchpoint. We build brand identities that communicate your value instantly, create emotional connection, and make you impossible to forget.",
    accent: ACCENT,
    heroStats: [
      { value: "2x",  label: "Price premium with strong brand" },
      { value: "7x",  label: "Customer recall improvement" },
      { value: "21d", label: "Full identity delivery" },
      { value: "∞",   label: "Lifetime brand ownership" },
    ],
    features: [
      { icon: "PenTool",    title: "Logo & Visual Identity", desc: "Multiple concept directions, unlimited refinements. Delivered in every format you'll ever need — print, digital, Arabic." },
      { icon: "BookOpen",   title: "Brand Guidelines",       desc: "A comprehensive brand bible covering colours, typography, tone of voice, photography style, and usage rules." },
      { icon: "LayoutGrid", title: "Social Media Kit",       desc: "Branded templates for Instagram, LinkedIn, Facebook, and TikTok. Post consistently without a designer every time." },
      { icon: "Briefcase",  title: "Business Collateral",    desc: "Business cards, letterheads, email signatures, presentation templates — everything your team needs to look professional." },
      { icon: "Lightbulb",  title: "Brand Strategy",         desc: "Positioning, target audience profiling, competitor differentiation. The thinking that makes the design meaningful." },
      { icon: "Package",    title: "Packaging Design",       desc: "Product packaging and unboxing experiences that turn customers into brand ambassadors on social media." },
    ],
    process: [
      { num: "01", title: "Brand Discovery",     desc: "Deep-dive workshop into your vision, values, audience, and competitive landscape. This shapes everything." },
      { num: "02", title: "Strategy & Concepts", desc: "Brand strategy document and 2–3 distinct visual concepts, each with rationale and application examples." },
      { num: "03", title: "Refine & Develop",    desc: "You choose a direction, we develop it fully. Iterate until it's perfect — no arbitrary revision limits." },
      { num: "04", title: "Deliver & Guide",     desc: "Full brand kit delivered with a walkthrough session. Your team knows exactly how to use every element." },
    ],
    results: [
      { value: "2x",  label: "Higher perceived value post-rebrand" },
      { value: "40%", label: "Increase in referrals from brand recognition" },
      { value: "3wk", label: "Average full identity delivery" },
    ],
    faq: [
      { q: "What if I already have a logo?",    a: "We can work with your existing logo, refine it, or create a full rebrand. We'll recommend the best path after seeing your current assets." },
      { q: "Do you design in Arabic?",          a: "Yes. All branding includes Arabic versions of logos, collateral, and guidelines designed by native Arabic designers." },
      { q: "Who owns the final designs?",       a: "You do. Full intellectual property transfer with delivery. No licensing, no restrictions, no surprises." },
      { q: "How many revisions do I get?",      a: "Unlimited within reason. Our process is structured so revisions are focused and efficient — not endless back-and-forth." },
    ],
  },

  /* ── 6. MAINTENANCE ───────────────────────────────── */
  {
    slug: "maintenance",
    title: "Maintenance & Support",
    category: "Ongoing Support",
    tagline: "We Don't Just Build It — We Keep It Running Perfectly.",
    description:
      "Your website is a 24/7 sales asset. Downtime, security issues, or a slow page costs you real money. Our maintenance plans keep your digital presence fast, secure, up-to-date, and always converting.",
    accent: ACCENT,
    heroStats: [
      { value: "99.9%", label: "Uptime guarantee" },
      { value: "<4hr",  label: "Emergency response time" },
      { value: "Daily", label: "Automated backups" },
      { value: "24/7",  label: "Monitoring coverage" },
    ],
    features: [
      { icon: "ShieldAlert", title: "Security Monitoring",  desc: "Real-time malware scanning, firewall management, and instant alerts. Issues caught before they become problems." },
      { icon: "Zap",         title: "Performance Tuning",   desc: "Monthly speed audits, image optimisation, caching updates — so your site stays fast as it grows." },
      { icon: "HardDrive",   title: "Daily Backups",        desc: "Automated daily backups with 30-day retention. One-click restore if anything ever goes wrong." },
      { icon: "RefreshCw",   title: "Software Updates",     desc: "CMS, plugins, and dependencies kept up-to-date in a staging environment before applying to live." },
      { icon: "Phone",       title: "Priority Support",     desc: "Dedicated WhatsApp support line. Content updates, bug fixes, and small changes handled within 24 hours." },
      { icon: "BarChart2",   title: "Monthly Reports",      desc: "Uptime, speed, security, and traffic report every month. You always know your site's health." },
    ],
    process: [
      { num: "01", title: "Onboarding Audit",    desc: "Full audit of your current site — security, speed, code quality, and backups. We document everything." },
      { num: "02", title: "Setup & Secure",      desc: "Security hardening, backup configuration, monitoring tools installed. Your site is locked down." },
      { num: "03", title: "Ongoing Maintenance", desc: "Monthly update cycles, weekly performance checks, and immediate response to any alerts." },
      { num: "04", title: "Proactive Reporting", desc: "Monthly report and quarterly strategy call to discuss improvements and upcoming needs." },
    ],
    results: [
      { value: "99.9%", label: "Client uptime rate" },
      { value: "0",     label: "Security breaches on maintained sites" },
      { value: "4x",    label: "Faster page speed after tuning" },
    ],
    faq: [
      { q: "What if my site goes down?",              a: "You contact us via WhatsApp and we're on it within 4 hours, guaranteed. Critical issues get immediate response 24/7." },
      { q: "Do you maintain sites you didn't build?", a: "Yes. We onboard any site regardless of who built it. We'll fix any issues we find during the initial audit." },
      { q: "Can I request content changes?",          a: "Yes. All plans include a monthly content update allowance. Additional changes are billed at a simple hourly rate." },
      { q: "What's the minimum contract length?",     a: "Monthly rolling — no lock-in. We earn your business every month through reliability and responsiveness." },
    ],
  },
];

export function getService(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);
