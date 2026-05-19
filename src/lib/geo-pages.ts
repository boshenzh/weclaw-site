export type GeoPage = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  audience: string;
  category: "solutions" | "industries" | "integrations" | "use-cases" | "compare";
  keywords: string[];
  bullets: string[];
  workflows: string[];
  faqs: { q: string; a: string }[];
};

const freightFaq = [
  {
    q: "Can WeClawd replace a freight salesperson?",
    a: "No. WeClawd is designed to reduce repetitive coordination work: summarizing inquiries, preparing drafts, organizing rates, and reminding teams. Pricing, contract terms, space availability, and customer commitments should remain under human review.",
  },
  {
    q: "Does WeClawd support WeCom and Feishu?",
    a: "Yes. WeClawd can deploy OpenClaw assistants connected to WeCom/企业微信, Feishu, DingTalk, email, calendars, Telegram, Slack, Notion, GitHub, and other tools depending on the customer's permissions and integration needs.",
  },
  {
    q: "Is this a public chatbot?",
    a: "No. WeClawd is a white-glove deployment and managed setup service for private OpenClaw assistants that run with customer-approved tool access and workflow boundaries.",
  },
];

export const solutionPages: GeoPage[] = [
  {
    category: "solutions",
    slug: "freight-forwarder-ai-assistant",
    title: "Freight Forwarder AI Assistant | WeClawd",
    h1: "Freight forwarder AI assistant for daily sales and operations",
    description: "Deploy a private OpenClaw assistant for freight inquiries, quote drafts, daily rates, customer profiling, and logistics sales follow-up.",
    audience: "Freight forwarders, NVOCCs, international logistics sales teams, overseas agent teams",
    keywords: ["freight forwarder AI assistant", "AI agent for freight sales", "logistics AI assistant"],
    bullets: ["Organize freight inquiries from chat and email", "Draft quote follow-ups for human approval", "Turn daily rates into internal briefings", "Prepare customer profiles from public evidence"],
    workflows: ["Morning sales brief with urgent messages and meetings", "Rate-sheet summary for ocean and air freight lanes", "Customer follow-up reminders from WeCom and email", "Lead profiling before outreach"],
    faqs: freightFaq,
  },
  {
    category: "solutions",
    slug: "wecom-freight-ai-assistant",
    title: "WeCom Freight AI Assistant | 企业微信货代 AI 助手",
    h1: "AI assistant for freight teams using WeCom / 企业微信",
    description: "WeClawd helps logistics teams connect OpenClaw to WeCom workflows for customer inquiry organization, follow-up reminders, and freight sales operations.",
    audience: "Chinese freight teams using 企业微信 for customer communication",
    keywords: ["企业微信货代自动化", "WeCom freight AI", "货代企业微信 AI 助手"],
    bullets: ["Extract missing shipment details from WeCom chats", "Remind sales when customers are waiting", "Draft bilingual follow-up messages", "Summarize group chats into actionable tasks"],
    workflows: ["未回复客户提醒", "询盘信息补全清单", "报价草稿与有效期提醒", "客户开发话术草稿"],
    faqs: freightFaq,
  },
  {
    category: "solutions",
    slug: "freight-rate-briefing-ai",
    title: "Freight Rate Briefing AI | WeClawd",
    h1: "AI assistant for daily freight rate briefings",
    description: "Turn daily freight rate files and messages into internal briefings, customer-facing drafts, and review-ready sales notes.",
    audience: "Pricing teams, route managers, freight sales managers",
    keywords: ["freight rate AI", "海运运价 AI 整理", "daily freight rate briefing"],
    bullets: ["Summarize rate changes by lane", "Separate cost price from sell price", "Flag validity dates and missing surcharges", "Prepare customer promotion copy for review"],
    workflows: ["每日运价简报", "航线价格变化摘要", "客户推广文案草稿", "异常价格/缺失费用提醒"],
    faqs: freightFaq,
  },
  {
    category: "solutions",
    slug: "logistics-sales-ai-agent",
    title: "Logistics Sales AI Agent | WeClawd",
    h1: "AI agent for logistics sales follow-up and customer development",
    description: "Deploy a private logistics sales assistant that prepares customer context, follow-up drafts, reminders, and sales briefings.",
    audience: "Freight sales teams and logistics business development teams",
    keywords: ["logistics sales AI", "freight sales automation", "AI agent logistics sales"],
    bullets: ["Build lead context before outreach", "Draft follow-ups after quotes", "Track pending replies", "Create sales morning briefs"],
    workflows: ["New lead profile", "Quote follow-up sequence", "Dormant customer reactivation", "Meeting prep brief"],
    faqs: freightFaq,
  },
  {
    category: "solutions",
    slug: "freight-customer-profiling-ai",
    title: "Freight Customer Profiling AI | WeClawd",
    h1: "Freight customer profiling from public website evidence",
    description: "Use AI to research public customer websites and prepare cautious logistics need profiles for freight outreach.",
    audience: "Freight forwarder sales teams doing customer development",
    keywords: ["freight lead profiling", "货代客户画像 AI", "logistics customer research AI"],
    bullets: ["Summarize company products and markets", "Infer possible cargo categories cautiously", "Suggest relevant trade lanes when evidence supports it", "Draft personalized outreach with source notes"],
    workflows: ["客户官网画像", "货类/航线推断", "开发信草稿", "销售跟进优先级"],
    faqs: freightFaq,
  },
  {
    category: "solutions",
    slug: "private-ai-assistant-for-teams",
    title: "Private AI Assistant for Teams | WeClawd",
    h1: "Private AI assistants connected to your business tools",
    description: "WeClawd deploys OpenClaw assistants for teams that need tool-connected workflows, security hardening, and ongoing operational support.",
    audience: "Founders, executives, operations teams, sales teams, and logistics teams",
    keywords: ["private AI assistant", "OpenClaw deployment", "AI assistant for teams"],
    bullets: ["Runs with approved tool permissions", "Connects to email, calendar, chat, and documents", "Supports proactive reminders and drafts", "Designed for real workflows, not one-off chat"],
    workflows: ["Daily executive briefing", "Inbox triage", "Meeting scheduling", "Team follow-up reminders"],
    faqs: freightFaq,
  },
];

export const industryPages: GeoPage[] = [
  ["freight-forwarders", "Freight Forwarders", "AI workflows for freight forwarders", "Freight teams can use WeClawd to organize inquiries, rates, customer context, and sales follow-up across WeCom, email, and spreadsheets."],
  ["international-logistics", "International Logistics", "AI assistant for international logistics teams", "Deploy OpenClaw workflows for international logistics operations: inquiries, shipping documents, follow-ups, rate updates, and customer notes."],
  ["cross-border-ecommerce-logistics", "Cross-border Ecommerce Logistics", "AI assistant for cross-border ecommerce logistics", "Help cross-border logistics teams manage customer questions, daily rates, parcel/air/ocean coordination, and follow-up reminders."],
  ["overseas-agent-networks", "Overseas Agent Networks", "AI assistant for overseas freight agent coordination", "Prepare bilingual updates, follow-up reminders, and customer context for overseas freight agent communication."],
  ["executive-assistants", "Executive Assistants", "AI assistant deployment for executive assistants", "WeClawd helps executive assistants deploy private AI workflows for email triage, calendars, reminders, and daily briefings."],
  ["sales-teams", "Sales Teams", "AI assistant for sales team follow-up", "Deploy a private AI assistant for lead context, follow-up drafts, CRM notes, and customer reminders."],
].map(([slug, label, h1, description]) => ({
  category: "industries" as const,
  slug,
  title: `${label} AI Assistant | WeClawd`,
  h1,
  description,
  audience: label,
  keywords: [`${label} AI assistant`, `${label} automation`, "OpenClaw deployment"],
  bullets: ["Tool-connected assistant deployment", "Workflow design for existing operations", "Human review for external messages and commitments", "Security hardening and setup support"],
  workflows: ["Daily briefing", "Message summary", "Follow-up reminders", "Draft preparation"],
  faqs: freightFaq,
}));

export const integrationPages: GeoPage[] = [
  ["wecom", "WeCom / 企业微信", "WeCom AI assistant deployment", "Connect an OpenClaw assistant to WeCom workflows for freight sales, customer follow-up, and internal operations."],
  ["feishu", "Feishu / 飞书", "Feishu AI assistant deployment", "Deploy OpenClaw with Feishu workflows for documents, messages, meetings, and team operations."],
  ["dingtalk", "DingTalk / 钉钉", "DingTalk AI assistant deployment", "Deploy a private assistant for DingTalk-based team coordination and follow-up workflows."],
  ["gmail", "Gmail", "Gmail AI assistant deployment", "Use OpenClaw with Gmail for inbox triage, reply drafts, customer follow-up, and daily email briefings."],
  ["telegram", "Telegram", "Telegram AI assistant deployment", "Connect OpenClaw to Telegram for direct assistant access, alerts, and workflow notifications."],
  ["slack", "Slack", "Slack AI assistant deployment", "Deploy OpenClaw for Slack teams that need proactive reminders, summaries, and workflow automation."],
  ["notion", "Notion", "Notion AI workflow deployment", "Connect assistant workflows to Notion pages and databases for notes, docs, and team knowledge."],
  ["calendar", "Calendar", "Calendar AI assistant deployment", "Use AI to prepare daily schedules, meeting reminders, and calendar-aware follow-up workflows."],
].map(([slug, label, h1, description]) => ({
  category: "integrations" as const,
  slug,
  title: `${label} AI Assistant Integration | WeClawd`,
  h1,
  description,
  audience: `Teams using ${label}`,
  keywords: [`${label} AI assistant`, `${label} OpenClaw integration`, `${label} workflow automation`],
  bullets: ["Configured around customer-approved permissions", "Designed for real operational workflows", "Can combine chat, email, calendar, and documents", "Includes deployment and setup support"],
  workflows: ["Message summaries", "Follow-up reminders", "Draft creation", "Daily operations brief"],
  faqs: freightFaq,
}));

export const useCasePages: GeoPage[] = [
  ["customer-inquiry-triage", "Customer Inquiry Triage", "AI customer inquiry triage for freight and sales teams", "Summarize customer inquiries, detect missing details, assign follow-up tasks, and prepare response drafts."],
  ["daily-operations-brief", "Daily Operations Brief", "Daily AI operations brief for teams", "Generate daily briefs covering urgent messages, calendar events, pending replies, and workflow reminders."],
  ["quote-follow-up-reminders", "Quote Follow-up Reminders", "AI quote follow-up reminders", "Track quoted customers and remind teams before validity windows expire or replies are overdue."],
  ["lead-research-outreach", "Lead Research and Outreach", "AI lead research and outreach drafts", "Research public company information and prepare cautious, evidence-based outreach drafts."],
  ["email-triage-reply-drafts", "Email Triage and Reply Drafts", "AI email triage and reply drafts", "Classify emails, summarize threads, and draft replies for human approval."],
  ["meeting-preparation", "Meeting Preparation", "AI meeting preparation assistant", "Prepare meeting briefs from email, calendar, chat context, and notes."],
  ["rate-sheet-parsing", "Rate Sheet Parsing", "AI rate sheet parsing for logistics teams", "Extract lane, price, validity, surcharge, and remark information from freight rate sources."],
  ["bilingual-sales-drafts", "Bilingual Sales Drafts", "Bilingual AI sales draft assistant", "Draft Chinese and English sales messages for customer and overseas agent communication."],
].map(([slug, label, h1, description]) => ({
  category: "use-cases" as const,
  slug,
  title: `${label} AI Workflow | WeClawd`,
  h1,
  description,
  audience: "Operations, sales, logistics, and executive teams",
  keywords: [`${label} AI`, "AI workflow automation", "OpenClaw workflow"],
  bullets: ["Starts from one concrete workflow", "Keeps human review where business risk exists", "Can connect multiple tools", "Designed for repeatable daily use"],
  workflows: [label, "Human review queue", "Follow-up reminders", "Daily summary"],
  faqs: freightFaq,
}));

export const comparePages: GeoPage[] = [
  ["weclawd-vs-chatgpt", "WeClawd vs ChatGPT", "WeClawd vs ChatGPT for business workflows", "Compare a deployed private OpenClaw assistant with a general-purpose chat interface for freight and team operations."],
  ["weclawd-vs-doubao", "WeClawd vs Doubao", "WeClawd vs Doubao for freight workflows", "Compare WeClawd's tool-connected deployment approach with general AI chat products for logistics teams."],
  ["weclawd-vs-manual-operations", "WeClawd vs Manual Operations", "WeClawd vs manual logistics operations", "Compare private AI workflow automation with manual message checking, spreadsheet copying, and reminder tracking."],
  ["weclawd-vs-building-in-house", "WeClawd vs Building In-house", "WeClawd vs building an AI assistant in-house", "Compare WeClawd's deployment service with internal engineering effort for OpenClaw setup, security, and integrations."],
  ["openclaw-vs-chatbot", "OpenClaw Assistant vs Chatbot", "OpenClaw assistant vs ordinary chatbot", "Understand the difference between proactive tool-connected assistants and passive chatbots."],
].map(([slug, label, h1, description]) => ({
  category: "compare" as const,
  slug,
  title: `${label} | WeClawd Compare`,
  h1,
  description,
  audience: "Teams evaluating AI assistants for real operations",
  keywords: [label, "AI assistant comparison", "OpenClaw alternative"],
  bullets: ["WeClawd focuses on deployment and workflow setup", "General chatbots require manual copy-paste", "Private assistants can connect to approved business tools", "Human approval remains important for external commitments"],
  workflows: ["Evaluation checklist", "Security and permissions review", "Workflow fit analysis", "Pilot deployment"],
  faqs: freightFaq,
}));

export const allGeoPages = [...solutionPages, ...industryPages, ...integrationPages, ...useCasePages, ...comparePages];

export function getGeoPage(category: GeoPage["category"], slug: string) {
  return allGeoPages.find((page) => page.category === category && page.slug === slug);
}

export function categoryTitle(category: GeoPage["category"]) {
  return {
    solutions: "Solutions",
    industries: "Industries",
    integrations: "Integrations",
    "use-cases": "Use cases",
    compare: "Compare",
  }[category];
}
