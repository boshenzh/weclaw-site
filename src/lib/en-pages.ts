export type EnPage = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  audience: string;
  summary: string;
  sections: { title: string; body: string[]; bullets?: string[] }[];
  faqs: { q: string; a: string }[];
  related: { title: string; href: string }[];
};

export const enPages: EnPage[] = [
  {
    slug: "openclaw-deployment",
    title: "OpenClaw Deployment Service for Teams | WeClawd",
    description: "WeClawd helps teams deploy private OpenClaw assistants with secure tool access, workflow design, and managed setup support.",
    keywords: ["OpenClaw deployment", "private AI assistant", "AI assistant for teams", "OpenClaw setup"],
    audience: "Founders, executive teams, operators, and teams evaluating OpenClaw",
    summary: "WeClawd is a white-glove deployment and managed setup service for private OpenClaw assistants, focused on practical business workflows rather than generic chat.",
    sections: [
      {
        title: "What WeClawd deploys",
        body: [
          "WeClawd helps teams turn OpenClaw from an open-source project into a working private assistant connected to real tools: email, calendars, messaging apps, documents, spreadsheets, and team workflows.",
          "The goal is not to replace human judgment. The goal is to reduce repetitive coordination work: summaries, drafts, reminders, briefings, and review queues."
        ],
        bullets: ["Private OpenClaw setup", "Tool access and permission design", "Workflow configuration", "Security hardening and operational support"]
      },
      {
        title: "When a team needs this",
        body: [
          "A general AI chat interface is enough for one-off writing or questions. A deployed assistant becomes useful when work repeats every day and lives across multiple tools: inboxes, chats, calendars, files, and spreadsheets.",
          "Good first workflows are low-risk and easy to verify: inbox triage, daily briefings, meeting prep, sales follow-up reminders, and customer inquiry summaries."
        ]
      }
    ],
    faqs: [
      { q: "Is WeClawd an AI model?", a: "No. WeClawd is a deployment and managed setup service for OpenClaw-based assistants. The model and tools depend on the customer environment." },
      { q: "Is this fully autonomous?", a: "No. High-risk actions such as external commitments, payments, contracts, and pricing decisions should remain under human approval." },
      { q: "Who is this for?", a: "Teams that need a private, tool-connected assistant for repeatable workflows rather than a standalone chatbot." }
    ],
    related: [
      { title: "Freight forwarder AI assistant", href: "/en/freight-forwarder-ai-assistant" },
      { title: "WeClawd vs ChatGPT", href: "/en/weclawd-vs-chatgpt" }
    ]
  },
  {
    slug: "freight-forwarder-ai-assistant",
    title: "Freight Forwarder AI Assistant | WeClawd",
    description: "Private OpenClaw assistants for freight forwarders: inquiry summaries, rate briefings, customer profiling, and sales follow-up workflows.",
    keywords: ["freight forwarder AI assistant", "logistics AI assistant", "freight sales AI", "rate briefing AI"],
    audience: "Freight forwarders, logistics teams, NVOCCs, and freight sales teams",
    summary: "For freight teams, the practical starting point is not fully automated quoting. It is organizing inquiries, rates, customer context, and follow-up work so humans can move faster.",
    sections: [
      {
        title: "Four useful freight workflows",
        body: [
          "Freight teams often work across WeCom, email, spreadsheets, rate sheets, and customer websites. A private assistant can organize these inputs into reviewable outputs without making final commercial commitments."
        ],
        bullets: ["Customer inquiry triage", "Daily ocean/air freight rate briefings", "Customer profile and outreach drafts", "Quote follow-up reminders"]
      },
      {
        title: "Human approval remains critical",
        body: [
          "Pricing, space availability, surcharges, contract terms, and customer commitments should not be left to an AI assistant. The assistant should prepare drafts, summaries, missing-information checklists, and reminders for freight sales and operations teams to review."
        ]
      }
    ],
    faqs: [
      { q: "Can it quote customers automatically?", a: "It can prepare quote drafts and organize rate information, but final pricing and commitments should remain under human review." },
      { q: "Can it work with WeCom and Feishu?", a: "Yes, depending on customer authorization, account permissions, and integration constraints." },
      { q: "What should a freight team start with?", a: "Inquiry triage or daily rate briefing are usually the clearest first workflows." }
    ],
    related: [
      { title: "Chinese freight AI page", href: "/zh/huodai-ai-zhushou" },
      { title: "OpenClaw deployment", href: "/en/openclaw-deployment" }
    ]
  },
  {
    slug: "weclawd-vs-chatgpt",
    title: "WeClawd vs ChatGPT for Business Workflows | WeClawd",
    description: "Compare a deployed private OpenClaw assistant with a general-purpose chat interface for operational workflows.",
    keywords: ["WeClawd vs ChatGPT", "OpenClaw vs ChatGPT", "AI assistant for business workflows"],
    audience: "Teams deciding between general AI chat and a deployed private assistant",
    summary: "ChatGPT is useful for one-off conversations. WeClawd is for teams that need an assistant connected to approved tools and recurring workflows.",
    sections: [
      {
        title: "The main difference",
        body: [
          "ChatGPT usually waits for a user to paste context and ask a question. A deployed OpenClaw assistant can be configured around approved tools, schedules, permissions, and recurring workflows.",
          "For many teams, the bottleneck is not writing one answer. It is repeatedly gathering context from email, calendars, chats, documents, and spreadsheets."
        ],
        bullets: ["ChatGPT: general conversation and writing", "WeClawd: tool-connected workflow deployment", "ChatGPT: manual context copy-paste", "WeClawd: structured recurring outputs and review boundaries"]
      }
    ],
    faqs: [
      { q: "Does WeClawd replace ChatGPT?", a: "No. Teams can still use ChatGPT for ad hoc work. WeClawd focuses on deployed workflows and tool-connected assistants." },
      { q: "Can WeClawd use different models?", a: "Model choice depends on the deployment setup and customer requirements. The core value is workflow integration, not a single model." },
      { q: "What actions need human approval?", a: "External commitments, pricing, contracts, payments, legal judgments, and sensitive messages should remain under human approval." }
    ],
    related: [
      { title: "Chinese Doubao comparison", href: "/compare/weclawd-vs-doubao" },
      { title: "OpenClaw deployment", href: "/en/openclaw-deployment" }
    ]
  },
  {
    slug: "setup-cost",
    title: "OpenClaw Setup Cost and Risk Checklist | WeClawd",
    description: "A practical checklist for evaluating OpenClaw private deployment costs, permissions, infrastructure, security, and review boundaries.",
    keywords: ["OpenClaw setup cost", "private AI assistant cost", "OpenClaw security", "AI assistant deployment checklist"],
    audience: "Teams evaluating the budget and risk of a private AI assistant deployment",
    summary: "OpenClaw deployment cost is not just server cost. Teams need to budget for integrations, permissions, security hardening, workflow design, and maintenance.",
    sections: [
      {
        title: "What to budget for",
        body: [
          "The software may be open source, but a production assistant still needs infrastructure, model usage, OAuth/integration setup, security hardening, logs, backups, and workflow tuning.",
          "For non-technical teams, the largest cost is often operational time: debugging, permissions, edge cases, and making workflows reliable enough for daily use."
        ],
        bullets: ["Infrastructure", "Model/API usage", "OAuth and integrations", "Security hardening", "Workflow design and maintenance"]
      },
      {
        title: "Start with limited permissions",
        body: [
          "A useful assistant often needs tool access, but access should expand gradually. Start with read-only summaries, drafts, and reminders. Add write actions only after the workflow is stable and the review boundary is clear."
        ]
      }
    ],
    faqs: [
      { q: "Is private deployment automatically secure?", a: "No. It improves control, but security still depends on model routing, permissions, logs, third-party integrations, and operational discipline." },
      { q: "Should a team start cloud or local?", a: "It depends on data sensitivity, maintenance capacity, and integration needs. Many teams should start with a low-risk cloud pilot." },
      { q: "What should not be automated first?", a: "Payments, refunds, contracts, legal advice, pricing commitments, and sensitive customer replies." }
    ],
    related: [
      { title: "Chinese cost and risk article", href: "/blog/openclaw-private-deployment-cost-and-risk" },
      { title: "OpenClaw deployment", href: "/en/openclaw-deployment" }
    ]
  }
];

export function getEnPage(slug: string) {
  return enPages.find((page) => page.slug === slug);
}
