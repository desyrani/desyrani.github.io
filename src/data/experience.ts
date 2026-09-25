import type { JobEntryData, SkillCategory } from "../types";

export const jobEntries: JobEntryData[] = [
  {
    role: "Full-Stack Software Engineer",
    dates: "Jan – Sept 2026",
    metaCompany: "EnsoNex (DMSA Global)",
    metaLocation: "Cyberjaya, Malaysia",
    projects: [
      {
        title: "AI-Powered Creator Tagging System",
        badge: "AI/ML",
        badgeAccent: "violet",
        meta: "Full ownership — design, architecture, implementation · EnsoNex",
        description:
          "Designed and implemented a serverless pipeline using AWS Lambda, LLM APIs, and the YouTube Data API to automatically enrich creator profiles with structured game genres, content styles, and metadata — reducing manual tagging from ~3 minutes per creator to under 1 second (80 creators per batch) across 16,000+ profiles spanning 300+ games and 200+ genres.",
        tiles: [
          { chip: "Pipeline Output - Single Game", caption: "Single-game creator: LLM finds the game and returns genre, setting and platform tags", image: "/detail/AITagging_Testing.png" },
          { chip: "Verification", caption: "Checked against the real channel: content is mostly Zenless Zone Zero", image: "/detail/AITagging_Result.png" },
          { chip: "Pipeline Output - Multi Games", caption: "Multi-game creator: finds 4 titles and merges them into one strategy/SLG tag set", image: "/detail/AITagging_MultiGames_Testing.png" },
          { chip: "Verification", caption: "Checked against the real channel: Rise of Kingdoms and Call of Dragons content", image: "/detail/AITagging_MultiGames_Result.png" },
          { chip: "Production UI", caption: "Generated tags shown on creator cards for brand discovery and filtering", image: "/detail/AITagging_UI.png" },
        ],
        tags: ["AWS Lambda", "LLM APIs", "YouTube Data API", "Node.js", "DynamoDB"],
        stats: [
          { label: "Automated", description: "Creator classification" },
          { label: "Production", description: "Serverless pipeline" },
          { label: "Full ownership", description: "End-to-end delivery" },
        ],
      },
      {
        title: "Multi-Portal SaaS Platform",
        badge: "SaaS",
        badgeAccent: "cyan",
        meta: "Core contributor — frontend and backend architecture · EnsoNex",
        description:
          "Helped architect and deliver a production-ready SaaS platform spanning four interconnected portals (Creator, Agency, Brand, Staff) with a shared design system, a component library of ~76 reusable components, campaign workflows, analytics dashboards, and AWS cloud integrations — including the end-to-end campaign lifecycle (invitation, negotiation, deliverables, signing, settlement) powering 30+ active campaigns.",
        tiles: [
          { chip: "Creator Portal", caption: "Campaign marketplace: creators browse matched brand campaigns by genre, platform and payout", image: "/detail/CreatorPortal_Marketplace.png" },
          { chip: "Brand/Marketer Portal", caption: "Brand dashboard: marketers see only their own games and campaigns, each with a creator pipeline", image: "/detail/MarketerPortal_BrandManagement.png" },
          { chip: "Staff Portal", caption: "Internal operations: manage every campaign's status, budget and timeline in one place", image: "/detail/StaffPortal_CampaignManagement.png" },
          { chip: "Agency Portal", caption: "Agency dashboard: track a roster of creators with followers, engagement and earnings", image: "/detail/AgencyPortal_Analytics.png" },
        ],
        tags: ["React Native", "TypeScript", "AWS Amplify Gen 2", "AppSync GraphQL", "DynamoDB"],
        stats: [
          { label: "4 portals", description: "Interconnected system" },
          { label: "Greenfield", description: "Built from scratch" },
          { label: "Reusable", description: "Shared components" },
        ],
      },
      {
        title: "Internal AI Knowledge Assistant",
        badge: "AI/ML",
        badgeAccent: "violet",
        meta: "Co-developed with a colleague — design and implementation · EnsoNex",
        description:
          "Co-developed an internal AI knowledge chat assistant on AWS Bedrock, S3, and Lambda that answers platform questions from 30+ internal documents (SOPs, FAQs, policies) — handling 150+ queries per week and reducing support tickets by ~55%. When the original Bedrock Knowledge Base retrieval broke, we redesigned it as two Lambdas: one extracts facts and FAQs from uploaded documents into a JSON knowledge base, the other answers questions grounded on it.",
        tiles: [
          { chip: "Chat UI", caption: "Answers platform questions for brands and staff, with chat history", image: "/detail/AIChat_UI.png" },
          { chip: "Architecture", caption: "Replaced a failing Bedrock Knowledge Base with two Lambdas: ingest extracts facts to JSON, query answers with Nova Lite", image: "/detail/AIChat_Architecture.png" },
        ],
        tags: ["AWS Bedrock", "Amazon Nova", "RAG", "S3", "Lambda"],
        stats: [
          { label: "150+/week", description: "Queries handled" },
          { label: "~55%", description: "Fewer support tickets" },
          { label: "30+ docs", description: "Indexed knowledge base" },
        ],
      },
    ],
  },
  {
    role: "AI Engineer Intern",
    dates: "Mar – Aug 2025",
    metaCompany: "Pandai Education",
    metaLocation: "Kuala Lumpur, Malaysia",
    bullets: [
      "Built an AI essay grading system achieving 85%+ alignment with human evaluators and processing 1,000+ essays in under 5 seconds each, handling both the backend grading pipeline (Node.js) and frontend integration (React.js) for the assessment interface.",
      "Developed and maintained full-stack features across the Pandai education platform — building React.js frontend components, Node.js backend services, and RESTful APIs to integrate AI-powered tools into the production application.",
      "Developed LLM-powered applications integrating DSPy for prompt optimization and Langfuse for model monitoring and auto-alerting, enhancing evaluation accuracy and reliability.",
      "Enhanced LLM performance by improving accuracy by 10%+ and reducing false positives/negatives by 15%, contributing to MagicAI Tools and Pandai App integrations for API scalability.",
      "Worked within an Agile/Scrum workflow, participating in sprint planning sessions, managing code through Git version control, and conducting peer code reviews across the engineering team.",
    ],
  },
  {
    role: "AI Data Engineer",
    dates: "Aug – Dec 2025",
    metaCompany: "Lifewood",
    metaLocation: "Cyberjaya, Malaysia",
    bullets: [
      "Supported autonomous driving, smart city, and aviation AI projects by processing and validating large-scale multimodal datasets (image, video, audio, LiDAR, sensor) with 99% data accuracy.",
      "Built high-quality machine learning datasets by transforming unstructured data into structured, production-ready formats, accelerating AI model training, validation, and deployment.",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    accent: "violet",
    items: ["TypeScript", "JavaScript", "Python", "SQL", "Java"],
  },
  {
    title: "Frontend & Mobile",
    accent: "cyan",
    items: [
      "React Native",
      "React",
      "Expo Router",
      "NativeWind",
      "Tailwind CSS",
      "Xcode",
      "Android Studio",
      "CSS",
      "HTML",
    ],
  },
  {
    title: "Backend & APIs",
    accent: "orange",
    items: ["GraphQL", "AWS AppSync", "REST APIs", "Node.js", "FastAPI"],
  },
  {
    title: "Database",
    accent: "green",
    items: ["Amazon DynamoDB (NoSQL)", "PostgreSQL", "MySQL"],
  },
  {
    title: "Cloud (AWS)",
    accent: "violet",
    items: ["Amplify Gen 2", "Lambda", "Cognito", "S3", "Bedrock", "IAM (Identity and Access Management)", "CloudWatch"],
  },
  {
    title: "Artificial Intelligence",
    accent: "cyan",
    items: ["LLM Applications", "LLM APIs", "AWS Bedrock", "DSPy", "Langfuse", "RAG", "TensorFlow", "PyTorch"],
  },
  {
    title: "Software Engineering",
    accent: "orange",
    items: ["System Design", "Component Architecture", "Cross-platform Development", "Agile/Scrum"],
  },
  {
    title: "Developer Tools",
    accent: "green",
    items: ["Git", "GitHub", "VS Code", "Postman", "Figma", "OpenProject PMO"],
  },
  {
    title: "Data Analytics Tools",
    accent: "violet",
    items: ["Tableau", "PowerBI", "Google Data Studio", "R", "Google Spreadsheet", "Microsoft Excel"],
  },
];
