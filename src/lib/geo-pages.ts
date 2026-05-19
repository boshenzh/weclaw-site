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

export const chineseGeoPages: GeoPage[] = [
  {
    category: "solutions",
    slug: "huodai-ai-zhushou",
    title: "货代 AI 助手｜企业微信国际物流自动化｜WeClawd 喂龙虾",
    h1: "货代 AI 助手：帮国际物流团队整理询盘、运价和客户跟进",
    description: "WeClawd 为货代、国际物流和跨境贸易团队部署私有 OpenClaw AI 助手，支持企业微信、飞书、邮箱、日历和表格工作流。",
    audience: "货代、国际物流、跨境贸易、海运空运代理团队",
    keywords: ["货代 AI 助手", "国际物流 AI 助手", "企业微信货代自动化", "海运运价 AI 整理", "货代客户开发 AI"],
    bullets: ["整理企业微信和邮件里的客户询盘", "把每日运价表变成销售可用的简报", "基于公开资料生成客户画像和开发信草稿", "提醒销售跟进未回复客户和即将过期报价"],
    workflows: ["企业微信询盘分拣", "每日海运/空运运价整理", "客户线索画像和开发信", "报价后跟进提醒", "销售晨报和待办汇总"],
    faqs: [
      { q: "货代 AI 助手能做什么？", a: "它可以在客户授权范围内连接企业微信、飞书、邮箱、日历和表格，帮助整理询盘、提取缺失信息、总结运价、起草跟进话术、生成客户画像和提醒销售待办。" },
      { q: "AI 可以直接替货代销售报价吗？", a: "不建议。AI 更适合整理运价、生成报价草稿和提醒有效期；最终价格、附加费、舱位和商务承诺应由业务人员确认。" },
      { q: "WeClawd 和直接用 ChatGPT 有什么区别？", a: "ChatGPT 通常需要人工复制粘贴；WeClawd 部署的是可长期运行、能连接业务工具的 OpenClaw 执行助手，可以围绕企业微信、飞书、邮箱和表格配置固定工作流。" },
    ],
  },
  {
    category: "solutions",
    slug: "guoji-wuliu-ai-zhushou",
    title: "国际物流 AI 助手｜跨境物流自动化｜WeClawd 喂龙虾",
    h1: "国际物流 AI 助手：让销售、操作和管理层少做重复整理",
    description: "面向国际物流公司的私有 AI 助手部署服务，覆盖客户沟通、运价整理、海外代理跟进、会议提醒和每日运营简报。",
    audience: "国际物流公司、跨境物流团队、海外代理协作团队",
    keywords: ["国际物流 AI", "跨境物流自动化", "物流销售 AI", "海外代理 AI 跟进"],
    bullets: ["汇总客户沟通和待办", "整理海外代理邮件和报价信息", "生成中英文跟进草稿", "每天推送运营重点和风险提醒"],
    workflows: ["海外代理邮件摘要", "中英文客户跟进草稿", "操作异常提醒", "管理层每日简报"],
    faqs: [
      { q: "国际物流公司适合先做哪个 AI 场景？", a: "通常建议先从企业微信/邮件询盘整理、每日运价简报或客户跟进提醒开始，因为这些场景重复度高、价值清晰、容易验收。" },
      { q: "能接入企业微信和飞书吗？", a: "可以。具体能力取决于客户授权、账号权限和接口条件。WeClawd 会围绕实际工具栈配置工作流。" },
      { q: "适合小团队吗？", a: "适合。4-50 人的货代或物流团队，如果每天有大量客户沟通、报价和跟进任务，就能从 AI 助手里获得明显节省。" },
    ],
  },
  {
    category: "integrations",
    slug: "qiyeweixin-huodai-ai",
    title: "企业微信货代 AI 助手｜WeCom 国际物流自动化｜WeClawd",
    h1: "企业微信货代 AI 助手：把聊天记录变成询盘、待办和跟进提醒",
    description: "WeClawd 帮货代团队在企业微信场景下部署私有 AI 助手，整理客户询盘、群聊信息、销售跟进和报价草稿。",
    audience: "使用企业微信获客和服务客户的货代团队",
    keywords: ["企业微信货代 AI", "企业微信国际物流自动化", "WeCom 货代助手", "企业微信客户跟进 AI"],
    bullets: ["从聊天中提取起运港、目的港、货量和时效", "识别客户未回复和销售未跟进", "生成报价后跟进话术", "把群聊摘要变成销售待办"],
    workflows: ["企业微信客户询盘摘要", "未回复客户提醒", "群聊要点整理", "报价草稿和跟进话术"],
    faqs: [
      { q: "企业微信里的聊天能自动整理吗？", a: "在客户授权和技术条件允许的范围内，可以把聊天内容整理成询盘摘要、缺失信息清单和待办提醒。" },
      { q: "会自动发消息给客户吗？", a: "默认建议先生成草稿并由销售确认。涉及报价、承诺和外部发送的动作，应保留人工审核。" },
      { q: "企业微信货代 AI 和普通客服机器人有什么区别？", a: "普通客服机器人偏固定问答；WeClawd 部署的 OpenClaw 助手更偏内部执行助手，可以结合聊天、邮件、日历和表格做连续工作流。" },
    ],
  },
  {
    category: "use-cases",
    slug: "meiri-yunjia-zhengli-ai",
    title: "每日运价整理 AI｜海运空运报价简报自动化｜WeClawd",
    h1: "每日运价整理 AI：把运价表变成内部简报和客户推广草稿",
    description: "帮助货代团队整理每日海运/空运运价，区分成本价与销售价，生成内部简报、客户推广文案和待确认事项。",
    audience: "货代价格、航线、销售和运营团队",
    keywords: ["每日运价整理 AI", "海运运价自动整理", "空运报价 AI", "货代运价简报"],
    bullets: ["提取航线、价格、有效期和备注", "区分成本价、销售价和待确认费用", "生成内部运价简报", "生成客户推广文案草稿"],
    workflows: ["运价表解析", "航线价格变化摘要", "报价有效期提醒", "客户推广文案草稿"],
    faqs: [
      { q: "AI 能看懂运价表吗？", a: "可以协助解析常见表格和文档中的航线、价格、有效期、附加费和备注，但关键价格仍建议人工复核。" },
      { q: "能区分销售价和成本价吗？", a: "可以根据表格结构、字段名和规则进行区分，并把不确定项标记出来给业务确认。" },
      { q: "能每天自动发简报吗？", a: "可以配置成每日工作流：读取来源、生成简报、送到待审核位置，再由负责人确认是否对外发送。" },
    ],
  },
  {
    category: "use-cases",
    slug: "huodai-kehu-kaifa-ai",
    title: "货代客户开发 AI｜客户画像与开发信草稿｜WeClawd",
    h1: "货代客户开发 AI：基于公开资料生成客户画像和开发信草稿",
    description: "为货代销售团队分析客户官网和公开资料，谨慎判断货类、出货场景和潜在物流需求，并生成个性化开发信草稿。",
    audience: "货代销售、业务开发和客户开发团队",
    keywords: ["货代客户开发 AI", "货代客户画像", "国际物流开发信", "货代拓客 AI"],
    bullets: ["读取客户官网公开信息", "总结产品、市场和可能货类", "谨慎判断潜在航线需求", "生成个性化开发信和跟进话术"],
    workflows: ["客户官网分析", "货类和航线需求推断", "开发信草稿", "跟进优先级建议"],
    faqs: [
      { q: "AI 会不会乱猜客户需求？", a: "WeClawd 的做法是证据优先：只基于公开资料做谨慎推断，并把不确定内容标出来，避免把猜测当事实。" },
      { q: "能批量处理客户名单吗？", a: "可以围绕客户线索表配置批量分析流程，但需要控制节奏、保留来源证据，并把结果放入待审核位置。" },
      { q: "开发信可以直接群发吗？", a: "不建议直接群发。更适合先生成个性化草稿，由销售确认后再发送。" },
    ],
  },
  {
    category: "compare",
    slug: "weclawd-vs-chatgpt-zh",
    title: "WeClawd 和 ChatGPT 区别｜货代 AI 助手怎么选",
    h1: "WeClawd 和 ChatGPT 的区别：一个是聊天工具，一个是部署到业务里的 AI 助手",
    description: "解释为什么货代和国际物流团队如果想做企业微信、邮箱、运价和客户跟进自动化，通常需要工具连接型 AI 助手，而不只是 ChatGPT 对话框。",
    audience: "正在评估 ChatGPT、豆包或私有 AI 助手的中国企业客户",
    keywords: ["WeClawd 和 ChatGPT 区别", "货代 AI 助手怎么选", "企业 AI 助手部署", "OpenClaw 和 ChatGPT"],
    bullets: ["ChatGPT 适合临时问答和写作", "WeClawd 适合连接企业微信、邮箱、日历和表格", "WeClawd 可以按业务流程长期运行", "外部发送和报价仍保留人工审核"],
    workflows: ["从 ChatGPT 试用过渡到业务工作流", "企业微信询盘自动整理", "每日运价简报", "销售跟进提醒"],
    faqs: [
      { q: "有 ChatGPT 还需要 WeClawd 吗？", a: "如果只是写文案和问答，ChatGPT 够用；如果要连接企业微信、邮箱、日历和表格，并长期执行固定工作流，就需要 WeClawd 这类部署服务。" },
      { q: "WeClawd 是模型吗？", a: "不是。WeClawd 是 OpenClaw AI 助手的部署和托管服务，会根据客户业务配置工具连接、权限、安全和工作流。" },
      { q: "可以用豆包或其他模型吗？", a: "具体模型取决于部署方式和可用接口。核心价值不是某个模型，而是把 AI 接到业务工具和流程里。" },
    ],
  },
];


const opsFaq = [
  { q: "OpenClaw 可以处理传统企业运营工作吗？", a: "可以。OpenClaw 更适合连接企业微信、飞书、邮箱、日历、表格和文档后，执行重复性的整理、提醒、草稿和审核流转工作。涉及对外承诺、付款、合同签署和法律判断的动作应保留人工确认。" },
  { q: "WeClawd 和普通聊天机器人有什么区别？", a: "普通聊天机器人主要回答问题；WeClawd 部署的是工具连接型 AI 助手，可以围绕客服、法务、电商、销售、行政、人事、财务等真实业务流程长期运行。" },
  { q: "企业数据安全吗？", a: "WeClawd 会按客户环境做权限、OAuth、沙箱、防火墙和审计等安全配置。但 AI 访问业务工具不是零风险，建议从低风险场景开始，逐步扩展授权范围。" },
];

const traditionalOpsChinesePages: GeoPage[] = [
  {
    category: "solutions",
    slug: "qiyefuwu-ai-zhushou",
    title: "企业客服 AI 助手｜企业微信客服自动化｜WeClawd 喂龙虾",
    h1: "企业客服 AI 助手：整理客户问题、生成回复草稿、提醒人工跟进",
    description: "WeClawd 为传统企业部署私有客服 AI 助手，连接企业微信、飞书、邮箱和表格，帮助客服团队整理问题、生成回复草稿和升级待办。",
    audience: "客服团队、售后团队、客户成功团队、传统企业运营团队",
    keywords: ["企业客服 AI 助手", "客服自动化", "企业微信客服 AI", "售后 AI 助手", "客户问题自动整理"],
    bullets: ["自动整理客户咨询和售后问题", "生成客服回复草稿供人工确认", "识别需要升级给销售/技术/财务的问题", "汇总每日高频问题和投诉风险"],
    workflows: ["客户咨询摘要", "FAQ 回复草稿", "售后工单分流", "投诉风险提醒", "每日客服简报"],
    faqs: opsFaq,
  },
  {
    category: "solutions",
    slug: "falv-wendang-ai-zhushou",
    title: "法律文档 AI 助手｜合同审阅与法务文件整理｜WeClawd",
    h1: "法律文档 AI 助手：整理合同、提取风险点、生成审阅清单",
    description: "面向企业法务、律所和管理团队的私有 AI 文档助手，帮助整理合同条款、提取关键信息、生成审阅清单和邮件草稿。",
    audience: "企业法务、律师、律所助理、管理层",
    keywords: ["法律文档 AI", "合同审阅 AI", "法务 AI 助手", "合同风险提取", "律所 AI 助手"],
    bullets: ["提取合同主体、金额、期限和义务", "整理风险条款和待确认问题", "生成审阅清单和对外沟通草稿", "归档合同版本和会议纪要"],
    workflows: ["合同要点摘要", "风险条款清单", "法务邮件草稿", "合同版本归档", "会议纪要整理"],
    faqs: [
      { q: "AI 可以替代律师审合同吗？", a: "不可以。AI 适合做信息提取、摘要和初步风险清单，最终法律判断和签署建议必须由专业人员确认。" },
      { q: "适合企业法务还是律所？", a: "两者都适合。企业法务可用于合同流转和内部答疑，律所可用于材料整理、初稿和客户沟通准备。" },
      { q: "能处理中文合同吗？", a: "可以围绕中文合同、英文合同或中英双语合同配置摘要、条款提取和审阅清单流程。" },
    ],
  },
  {
    category: "solutions",
    slug: "dianshang-yunying-ai-zhushou",
    title: "电商运营 AI 助手｜客服、商品、订单和内容自动化｜WeClawd",
    h1: "电商运营 AI 助手：把客服、商品、订单和内容工作流串起来",
    description: "WeClawd 帮电商团队部署私有 AI 助手，支持客服问题整理、商品文案、订单异常提醒、评价总结和运营日报。",
    audience: "电商运营、跨境电商、品牌店铺、客服和内容团队",
    keywords: ["电商运营 AI", "电商客服 AI", "商品文案 AI", "订单异常 AI", "跨境电商 AI 助手"],
    bullets: ["整理售前售后问题", "生成商品标题、卖点和详情页草稿", "提醒订单异常和退款风险", "汇总评价、差评和客户反馈"],
    workflows: ["电商客服摘要", "商品文案草稿", "订单异常提醒", "评价情绪总结", "运营日报"],
    faqs: opsFaq,
  },
  {
    category: "use-cases",
    slug: "xiaoshou-genjin-ai-zhushou",
    title: "销售跟进 AI 助手｜客户开发与跟进提醒｜WeClawd",
    h1: "销售跟进 AI 助手：提醒客户回访、生成跟进话术、整理销售线索",
    description: "面向传统企业销售团队的 AI 工作流，连接企业微信、邮箱、日历和表格，帮助整理客户线索、生成跟进草稿和销售晨报。",
    audience: "B2B 销售、客户经理、商务拓展和销售管理者",
    keywords: ["销售跟进 AI", "客户开发 AI", "销售线索 AI", "企业微信销售助手", "销售晨报 AI"],
    bullets: ["识别长时间未跟进客户", "生成个性化跟进话术", "整理客户背景和沟通历史", "每天推送销售待办和重点机会"],
    workflows: ["客户线索整理", "跟进提醒", "销售话术草稿", "会议前客户简报", "销售日报"],
    faqs: opsFaq,
  },
  {
    category: "use-cases",
    slug: "xingzheng-renshi-ai-zhushou",
    title: "行政人事 AI 助手｜日程、招聘、入职和制度问答｜WeClawd",
    h1: "行政人事 AI 助手：处理日程、招聘材料、入职清单和内部问答",
    description: "为行政、人事和办公室团队部署 OpenClaw AI 助手，帮助整理日程、会议、招聘简历、入职流程和员工制度问答。",
    audience: "行政、人事、办公室主任、创业公司运营团队",
    keywords: ["行政 AI 助手", "人事 AI 助手", "招聘简历 AI", "员工制度问答 AI", "入职流程自动化"],
    bullets: ["整理会议和日程提醒", "总结简历和候选人信息", "生成入职清单和提醒", "回答内部制度常见问题"],
    workflows: ["日程晨报", "招聘简历摘要", "入职待办清单", "员工制度问答", "会议纪要整理"],
    faqs: opsFaq,
  },
  {
    category: "use-cases",
    slug: "caiwu-baoxiao-ai-zhushou",
    title: "财务报销 AI 助手｜发票、报销和付款提醒｜WeClawd",
    h1: "财务报销 AI 助手：整理发票、报销材料和付款提醒",
    description: "面向财务和运营团队的 AI 助手工作流，帮助收集报销材料、检查缺失信息、生成付款提醒和月度汇总。",
    audience: "财务、运营、行政和创业公司管理团队",
    keywords: ["财务报销 AI", "发票整理 AI", "付款提醒 AI", "报销自动化", "财务 AI 助手"],
    bullets: ["检查报销材料是否齐全", "整理发票、金额、项目和付款对象", "提醒待审批和待付款事项", "生成月度费用摘要"],
    workflows: ["报销材料检查", "发票信息整理", "付款提醒", "费用月报", "审批待办汇总"],
    faqs: opsFaq,
  },
  {
    category: "use-cases",
    slug: "huiyi-jiyao-ai-zhushou",
    title: "会议纪要 AI 助手｜行动项、待办和跟进提醒｜WeClawd",
    h1: "会议纪要 AI 助手：把会议内容变成行动项和跟进提醒",
    description: "连接日历、文档和消息工具，帮助团队整理会议纪要、行动项、负责人、截止日期和后续提醒。",
    audience: "管理层、项目经理、销售、运营和行政团队",
    keywords: ["会议纪要 AI", "行动项自动整理", "会议待办 AI", "项目跟进 AI", "日程 AI 助手"],
    bullets: ["整理会议讨论要点", "提取行动项、负责人和截止日期", "会后生成跟进消息草稿", "提醒未完成事项"],
    workflows: ["会议纪要摘要", "行动项提取", "负责人和截止日期整理", "会后跟进提醒"],
    faqs: opsFaq,
  },
  {
    category: "solutions",
    slug: "chuantong-qiye-yunying-ai",
    title: "传统企业运营 AI 助手｜客服、销售、法务、财务、人事自动化｜WeClawd",
    h1: "传统企业运营 AI 助手：把重复的客服、销售、法务、财务、人事工作交给 AI 整理",
    description: "WeClawd 为传统企业部署私有 OpenClaw AI 助手，把企业微信、飞书、邮箱、日历、表格和文档串成可执行的运营工作流。",
    audience: "传统企业老板、总经理、运营负责人、销售和职能部门负责人",
    keywords: ["传统企业 AI 助手", "企业运营 AI", "企业微信自动化", "办公室 AI 助手", "OpenClaw 企业部署"],
    bullets: ["客服问题整理和回复草稿", "销售线索和跟进提醒", "合同/法务文档摘要", "财务报销和行政人事待办"],
    workflows: ["企业运营日报", "跨部门待办汇总", "客户问题分流", "合同和报销材料整理", "管理层晨报"],
    faqs: opsFaq,
  },
];

export const allChineseGeoPages = [...chineseGeoPages, ...traditionalOpsChinesePages];

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
