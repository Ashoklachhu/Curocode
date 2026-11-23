export interface ServiceFeature { icon: string; title: string; desc: string }
export interface ServiceStep    { num: string; title: string; desc: string }
export interface ServiceFAQ     { q: string; a: string }

export interface ServiceData {
  slug: string;
  title: string;
  /** Short name used in navigation and form dropdowns. */
  short: string;
  icon: string;
  category: string;
  tagline: string;
  summary: string;
  description: string;
  highlights: string[];
  accent: { from: string; to: string; text: string; badge: string; glow: string };
  features: ServiceFeature[];
  process: ServiceStep[];
  faq: ServiceFAQ[];
}

const ACCENT = {
  from: "from-sand-300", to: "to-sand-400",
  text: "text-sand-400",
  badge: "bg-sand-500/15 text-sand-300 border-sand-500/30",
  glow: "rgba(217,195,160,0.18)",
};

const ALL_SERVICES: ServiceData[] = [

  /* ── 1. STAFF AUGMENTATION ─────────────────────────── */
  {
    slug: "staff-augmentation",
    title: "IT Staff Augmentation",
    short: "Staff Augmentation",
    icon: "UserPlus",
    category: "Talent on Demand",
    tagline: "Skilled Engineers. Embedded in Your Team.",
    summary:
      "Extend your in-house team with vetted engineers who work your hours, use your tools and report to your leads.",
    description:
      "Close skill gaps and hit delivery deadlines without the cost and delay of permanent hiring. We provide pre-vetted developers, architects and specialists who integrate directly into your team, your processes and your sprint cadence.",
    highlights: ["Pre-vetted engineers", "Flexible monthly contracts", "Scale up or down"],
    accent: ACCENT,
    features: [
      { icon: "ShieldCheck",   title: "Rigorous Vetting",          desc: "Every engineer passes technical assessments, live coding interviews and communication screening before they reach your shortlist." },
      { icon: "Users",         title: "You Interview, You Decide", desc: "Review profiles and interview candidates yourself. You only onboard the people you are confident in." },
      { icon: "Clock",         title: "Working-Hour Overlap",      desc: "Engineers align with your working hours, so stand-ups, reviews and pairing happen in real time." },
      { icon: "RefreshCw",     title: "Flexible Scaling",          desc: "Add capacity for a launch or wind down after a milestone. Monthly terms with no long lock-in." },
      { icon: "FileText",      title: "IP & Confidentiality",      desc: "NDAs and full IP assignment as standard. Everything your augmented staff build belongs to you." },
      { icon: "LifeBuoy",      title: "Ongoing Account Support",   desc: "A dedicated account manager tracks performance, handles admin and arranges replacements if ever needed." },
    ],
    process: [
      { num: "01", title: "Share Your Requirements", desc: "Tell us the roles, skills, seniority and working hours you need. We confirm scope and budget on a short call." },
      { num: "02", title: "Receive a Shortlist",     desc: "We present a curated set of pre-vetted profiles matched to your stack and team culture." },
      { num: "03", title: "Interview & Select",      desc: "You interview the candidates and choose who joins. We handle contracts, equipment and compliance." },
      { num: "04", title: "Onboard & Scale",         desc: "Your new engineers join your tools and rituals. Add or adjust capacity whenever your roadmap changes." },
    ],
    faq: [
      { q: "How is staff augmentation different from outsourcing a project?", a: "With staff augmentation you keep full control of the work. The engineers join your team and follow your direction, while we take care of hiring, HR, payroll and retention." },
      { q: "Which roles can you provide?",                 a: "Frontend, backend and full-stack developers, mobile engineers, DevOps and cloud engineers, data and AI engineers, QA engineers, UI/UX designers, business analysts and project managers." },
      { q: "What if an engineer is not the right fit?",    a: "Tell your account manager and we will arrange a replacement from our network with a smooth handover, at no additional recruitment cost." },
      { q: "Is there a minimum contract length?",          a: "Engagements are billed monthly. We agree a notice period up front so you keep the flexibility to scale as your needs change." },
    ],
  },

  /* ── 2. DEDICATED TEAMS ────────────────────────────── */
  {
    slug: "dedicated-teams",
    title: "Dedicated Development Teams",
    short: "Dedicated Teams",
    icon: "Users",
    category: "Managed Teams",
    tagline: "A Complete Team. Fully Focused on Your Product.",
    summary:
      "A cross-functional team of engineers, QA and delivery leads working exclusively on your product.",
    description:
      "Get a self-sufficient, cross-functional team that works only on your product. We assemble the right mix of engineers, designers, QA and a delivery lead, and manage the team day to day while you set the priorities.",
    highlights: ["Cross-functional squads", "Delivery manager included", "Long-term continuity"],
    accent: ACCENT,
    features: [
      { icon: "LayoutGrid",    title: "Right-Sized Team",          desc: "We shape the team around your roadmap: engineers, QA, designers, DevOps and a delivery lead in the right proportions." },
      { icon: "Briefcase",     title: "Managed Delivery",          desc: "A dedicated delivery manager runs sprints, reporting and quality control so your leadership can focus on strategy." },
      { icon: "BarChart3",     title: "Transparent Reporting",     desc: "Sprint reviews, velocity tracking and regular status reports give you full visibility of progress and spend." },
      { icon: "GitBranch",     title: "Engineering Best Practice", desc: "Code reviews, CI/CD, automated testing and documentation are built into how the team works from day one." },
      { icon: "Lock",          title: "Security & Compliance",     desc: "Secure access policies, NDAs and IP assignment protect your product, data and customers." },
      { icon: "TrendingUp",    title: "Grows With You",            desc: "Expand the team as your product grows, or spin up a second squad for a new initiative." },
    ],
    process: [
      { num: "01", title: "Discovery Workshop",   desc: "We learn your product, goals, architecture and ways of working, then propose a team composition and budget." },
      { num: "02", title: "Team Assembly",        desc: "We select engineers for your stack and domain. You meet the key members before the engagement starts." },
      { num: "03", title: "Onboarding",           desc: "The team ramps up on your codebase, tools and processes, with a clear 30-day onboarding plan." },
      { num: "04", title: "Continuous Delivery",  desc: "The team ships in regular sprints with demos, metrics and retrospectives, continuously improving over time." },
    ],
    faq: [
      { q: "Who manages the dedicated team?",              a: "A CuroCode delivery manager handles day-to-day management, while your product owner sets priorities. You get the output of a full team without the management overhead." },
      { q: "Will the team work only on my product?",       a: "Yes. A dedicated team is assigned exclusively to your product for the duration of the engagement." },
      { q: "How do you keep the team stable?",             a: "We invest in retention through career development, fair compensation and good working conditions. When changes happen, we plan handovers so knowledge stays with your product." },
      { q: "Can we eventually hire the team in-house?",    a: "Yes. We can agree transfer terms up front if you plan to bring team members in-house in the future." },
    ],
  },

  /* ── 3. SOFTWARE DEVELOPMENT ───────────────────────── */
  {
    slug: "software-development",
    title: "Custom Software Development",
    short: "Software Development",
    icon: "Code2",
    category: "Product Engineering",
    tagline: "From Idea to Production. Engineered to Scale.",
    summary:
      "End-to-end design and engineering of web platforms, mobile apps and enterprise software.",
    description:
      "We take ownership of the full product lifecycle, from discovery and architecture to design, development, launch and ongoing support. Ideal for companies that want a reliable partner to deliver a defined outcome.",
    highlights: ["Web & mobile apps", "Enterprise platforms", "Fixed-scope or agile delivery"],
    accent: ACCENT,
    features: [
      { icon: "AppWindow",       title: "Web Platforms",            desc: "Customer portals, SaaS products and internal tools built with modern, maintainable frameworks." },
      { icon: "Smartphone",      title: "Mobile Applications",      desc: "Native and cross-platform iOS and Android apps with polished UX and reliable performance." },
      { icon: "Database",        title: "Enterprise Systems",       desc: "ERP, CRM and workflow systems tailored to your operations, with integrations to the tools you already use." },
      { icon: "Plug",            title: "APIs & Integrations",      desc: "Robust APIs, payment gateways and third-party integrations that connect your systems securely." },
      { icon: "PenTool",         title: "UI/UX Design",             desc: "Research-led product design that makes complex workflows simple and intuitive for your users." },
      { icon: "RefreshCw",       title: "Modernisation",            desc: "Re-architect legacy applications into scalable, cloud-ready systems without disrupting your business." },
    ],
    process: [
      { num: "01", title: "Discovery & Scoping",   desc: "We define requirements, user journeys and technical architecture, and agree a clear plan, timeline and budget." },
      { num: "02", title: "Design & Prototype",    desc: "Wireframes and interactive prototypes validate the experience before development begins." },
      { num: "03", title: "Build & Test",          desc: "Agile sprints with regular demos, automated testing and code reviews keep quality high and progress visible." },
      { num: "04", title: "Launch & Support",      desc: "We deploy to production, monitor performance and provide ongoing maintenance and enhancements." },
    ],
    faq: [
      { q: "Do you work on fixed price or time and materials?", a: "Both. Well-defined projects can be delivered on a fixed scope and price; evolving products are usually better suited to an agile, time-and-materials model." },
      { q: "Who owns the source code?",                    a: "You do. Full source code and IP are transferred to you, with documentation and no licensing lock-in." },
      { q: "Can you take over an existing codebase?",      a: "Yes. We start with a technical audit, then stabilise, document and continue developing the product." },
      { q: "Do you support Arabic and multilingual products?", a: "Yes. We build RTL layouts and multilingual content management for products serving the Middle East and global markets." },
    ],
  },

  /* ── 4. AI SOLUTIONS ──────────────────────────────────── */
  {
    slug: "ai-solutions",
    title: "AI Solutions & Automation",
    short: "AI Solutions",
    icon: "Brain",
    category: "Artificial Intelligence",
    tagline: "Practical AI. Real Business Results.",
    summary:
      "AI agents, chatbots, automation and data solutions that save time, reduce costs and open up new opportunities.",
    description:
      "We design and build AI solutions that solve real business problems: AI agents and chatbots that serve your customers around the clock, automation that removes repetitive work, generative AI applications and the data foundations that power them. We take ideas from proof of concept to production.",
    highlights: ["AI agents & chatbots", "Workflow & process automation", "Generative AI & data solutions"],
    accent: ACCENT,
    features: [
      { icon: "Bot",             title: "AI Agents & Chatbots",      desc: "Customer service, sales and internal assistants for your website, WhatsApp and team tools, in English, Arabic and other languages." },
      { icon: "Brain",           title: "Generative AI Applications", desc: "Knowledge assistants, smart search, content generation and copilots built on leading AI models and grounded in your own data." },
      { icon: "Workflow",        title: "Workflow Automation",        desc: "Automate repetitive, multi-step processes across your CRM, ERP, email and messaging tools to save time and reduce errors." },
      { icon: "FileText",        title: "Document Processing",        desc: "Extract, classify and summarise invoices, contracts, forms and reports automatically and accurately." },
      { icon: "LineChart",       title: "Data Engineering & Analytics", desc: "Pipelines, data warehouses and dashboards that give you reliable data and a clear, real-time view of the business." },
      { icon: "Cpu",             title: "Machine Learning",           desc: "Forecasting, recommendation and classification models designed, deployed and monitored in production." },
    ],
    process: [
      { num: "01", title: "Assess",         desc: "We review your data, systems and goals to identify high-value, achievable AI and analytics opportunities." },
      { num: "02", title: "Prove",          desc: "A focused proof of concept validates the approach and the business case quickly." },
      { num: "03", title: "Productionise",  desc: "We build the solution for scale, security and reliability, and integrate it with your systems." },
      { num: "04", title: "Optimise",       desc: "We monitor performance, refine models and expand successful use cases across the organisation." },
    ],
    faq: [
      { q: "We are new to AI. Where should we start?",    a: "Start with a short assessment. We identify two or three practical use cases with clear ROI and recommend the simplest path to prove them." },
      { q: "Is our data safe?",                           a: "Yes. We design solutions with access controls, encryption and data residency in mind, and never use your data to train public models." },
      { q: "Can your chatbots work on WhatsApp and in Arabic?", a: "Yes. We build AI assistants for websites, WhatsApp and internal tools, with support for Arabic, English and other languages." },
      { q: "Which platforms do you work with?",           a: "AWS, Azure and Google Cloud, along with leading AI model providers, Snowflake, Databricks, Power BI and other common data tools." },
      { q: "Can you add AI to our existing product?",     a: "Yes. We regularly integrate AI features such as assistants, smart search and summarisation into existing applications." },
    ],
  },

  /* ── 5. CLOUD & DEVOPS ─────────────────────────────── */
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    short: "Cloud & DevOps",
    icon: "Cloud",
    category: "Infrastructure & Operations",
    tagline: "Reliable Infrastructure. Faster Releases.",
    summary:
      "Cloud migration, infrastructure automation and DevOps practices that make software delivery fast and dependable.",
    description:
      "We design, migrate and run cloud infrastructure that is secure, cost-efficient and easy to scale. Our DevOps engineers automate your build, test and release pipelines so your teams can ship with confidence.",
    highlights: ["AWS, Azure & GCP", "CI/CD automation", "24/7 monitoring options"],
    accent: ACCENT,
    features: [
      { icon: "Cloud",           title: "Cloud Migration",          desc: "Plan and execute migrations to AWS, Azure or Google Cloud with minimal downtime and risk." },
      { icon: "Server",          title: "Infrastructure as Code",   desc: "Reproducible, version-controlled infrastructure using Terraform, CloudFormation and Kubernetes." },
      { icon: "GitBranch",       title: "CI/CD Pipelines",          desc: "Automated build, test and deployment pipelines that shorten release cycles and reduce errors." },
      { icon: "Gauge",           title: "Monitoring & Reliability", desc: "Observability, alerting and incident response that keep your systems healthy and available." },
      { icon: "ShieldAlert",     title: "Cloud Security",           desc: "Hardened configurations, identity management and compliance-ready controls across your environments." },
      { icon: "TrendingUp",      title: "Cost Optimisation",        desc: "Right-size resources and remove waste to reduce your monthly cloud spend." },
    ],
    process: [
      { num: "01", title: "Audit",      desc: "We assess your current infrastructure, delivery pipeline, security posture and cloud costs." },
      { num: "02", title: "Design",     desc: "We define a target architecture and roadmap aligned with your performance, security and budget goals." },
      { num: "03", title: "Implement",  desc: "We migrate workloads, automate infrastructure and pipelines, and document everything." },
      { num: "04", title: "Operate",    desc: "Ongoing monitoring, maintenance and optimisation, either managed by us or handed over to your team." },
    ],
    faq: [
      { q: "Can you manage our infrastructure on an ongoing basis?", a: "Yes. We offer managed cloud and DevOps support, including monitoring, patching, backups and incident response." },
      { q: "Do you work with on-premise or hybrid setups?",          a: "Yes. We support hybrid environments and can plan a phased migration that suits your business." },
      { q: "How do you reduce cloud costs?",                        a: "Through right-sizing, reserved capacity, autoscaling, storage tiering and removing unused resources, backed by regular cost reports." },
      { q: "Which tools do you use?",                               a: "Terraform, Kubernetes, Docker, GitHub Actions, GitLab CI, Jenkins, Prometheus, Grafana and the native tooling of each cloud provider." },
    ],
  },

  /* ── 6. QA & TESTING ───────────────────────────────── */
  {
    slug: "qa-testing",
    title: "QA & Software Testing",
    short: "QA & Testing",
    icon: "Bug",
    category: "Quality Engineering",
    tagline: "Release With Confidence. Every Time.",
    summary:
      "Manual and automated testing that catches issues early and protects the experience of your users.",
    description:
      "Our quality engineers help you ship stable, secure and high-performing software. We build test strategies, automate regression testing and integrate quality checks into your delivery pipeline.",
    highlights: ["Test automation", "Performance & security testing", "Embedded QA engineers"],
    accent: ACCENT,
    features: [
      { icon: "Search",          title: "Manual & Exploratory Testing", desc: "Experienced testers who think like your users and uncover issues automated tests miss." },
      { icon: "Zap",             title: "Test Automation",              desc: "Automated UI, API and regression suites using Playwright, Cypress, Selenium and Appium." },
      { icon: "Gauge",           title: "Performance Testing",          desc: "Load and stress testing to make sure your product performs under real-world traffic." },
      { icon: "ShieldAlert",     title: "Security Testing",             desc: "Vulnerability scanning and security reviews to identify risks before attackers do." },
      { icon: "Smartphone",      title: "Mobile & Cross-Browser",       desc: "Coverage across devices, operating systems and browsers your customers actually use." },
      { icon: "GitBranch",       title: "QA in CI/CD",                  desc: "Quality gates integrated into your pipeline so every release is tested automatically." },
    ],
    process: [
      { num: "01", title: "Assess",        desc: "We review your product, release process and current test coverage to identify quality risks." },
      { num: "02", title: "Plan",          desc: "We define a test strategy, priorities and the right balance of manual and automated testing." },
      { num: "03", title: "Execute",       desc: "Our engineers test, report and track defects through to resolution, sprint by sprint." },
      { num: "04", title: "Automate",      desc: "We grow automated coverage over time, reducing regression effort and speeding up releases." },
    ],
    faq: [
      { q: "Can QA engineers join our existing team?",  a: "Yes. QA engineers can be embedded in your sprints through staff augmentation, or we can run testing as a managed service." },
      { q: "Do you write automated tests for existing products?", a: "Yes. We prioritise the most critical user journeys first, then expand coverage step by step." },
      { q: "How do you report results?",                a: "Through your issue tracker, with clear reproduction steps, plus regular quality reports covering coverage, defects and release readiness." },
      { q: "Do you test mobile apps?",                  a: "Yes. We test native and cross-platform apps on real devices and emulators across iOS and Android." },
    ],
  },
];

/** Display order across the site: what we build first, then how we staff it. */
const SERVICE_ORDER = [
  "software-development",
  "ai-solutions",
  "staff-augmentation",
  "dedicated-teams",
  "cloud-devops",
  "qa-testing",
];

export const SERVICES: ServiceData[] = SERVICE_ORDER.map((slug) => ALL_SERVICES.find((s) => s.slug === slug)!);

export function getService(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);

/** Options shown in enquiry forms. */
export const ENQUIRY_OPTIONS = [...SERVICES.map((s) => s.short), "Not sure yet"];

/** Service names used on the old website, kept so existing leads still filter correctly in admin. */
export const LEGACY_SERVICE_NAMES = [
  "Web Development", "AI Automation", "Digital Marketing", "SEO & Growth", "Branding", "Custom Software",
];

