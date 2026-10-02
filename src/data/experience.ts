import type { JobEntryData, SkillCategory } from "../types";

export const jobEntries: JobEntryData[] = [
  {
    role: "Full-Stack Software Engineer",
    dates: "Jan – Sept 2026",
    metaCompany: "EnsoNex (DMSA Global) Sdn. Bhd.",
    companyUrl: "https://ensonex.com/",
    metaLocation: "Cyberjaya, Malaysia",
    accent: "violet",
    projects: [
      {
        title: "AI-Powered Creator Tagging System",
        badge: "AI/ML",
        badgeAccent: "violet",
        meta: "Full ownership — design, architecture, implementation · EnsoNex",
        description:
          "Designed and built an end-to-end serverless pipeline on AWS Bedrock, Lambda, GraphQL, and DynamoDB with the YouTube Data API — tagging 16,000+ creator profiles sourced by the platform's in-house discovery system into 300+ games, 200+ genres, and 30+ content styles, with Creator Style classification and Confidence Score logic on each result — reducing manual tagging from ~3 minutes to under 1 second per creator (80 per batch).",
        tiles: [
          { chip: "Pipeline Output - Single Game", caption: "Single-game creator: LLM finds the game and returns genre, setting and platform tags", image: "/detail/AITagging_Testing.png" },
          { chip: "Verification", caption: "Checked against the real channel: content is mostly Zenless Zone Zero", image: "/detail/AITagging_Result.png" },
          { chip: "Pipeline Output - Multi Games", caption: "Multi-game creator: finds 4 titles and merges them into one strategy/SLG tag set", image: "/detail/AITagging_MultiGames_Testing.png" },
          { chip: "Verification", caption: "Checked against the real channel: Rise of Kingdoms and Call of Dragons content", image: "/detail/AITagging_MultiGames_Result.png" },
          { chip: "Production UI", caption: "Generated tags shown on creator cards for brand discovery and filtering", image: "/detail/AITagging_UI.png" },
        ],
        tags: ["AWS Bedrock", "AWS Lambda", "GraphQL", "DynamoDB", "YouTube Data API", "Node.js"],
        stats: [
          { label: "16,000+", description: "Creator profiles tagged" },
          { label: "~3 min → <1 sec", description: "Per creator" },
          { label: "Full ownership", description: "End-to-end delivery" },
        ],
      },
      {
        title: "Multi-Portal SaaS Platform",
        badge: "SaaS",
        badgeAccent: "violet",
        meta: "Full-stack developer — Creator & Marketer portals, Staff portal contributions · EnsoNex",
        description:
          "Built the Creator and Marketer/Brand portals full-stack on a greenfield SaaS platform of four interconnected portals serving 40+ brands, including authentication, dashboards, campaign creation and management, creator discovery, onboarding verification, analytics — and contributed features to the internal Staff portal. Built the end-to-end campaign lifecycle (invitation, multi-round negotiation, deliverables, document signing, submission), supporting 30+ active campaigns and digitizing workflows previously managed manually across 700+ campaigns. Delivered cross-platform UI across web, iOS, and Android with dark/light theming and responsive layouts for phones, tablets, and foldables, contributed to a shared library of ~76 reusable components, and produced system architecture diagrams and onboarding tutorials for the platform.",
        tiles: [
          { chip: "Creator Portal", caption: "Campaign marketplace: creators browse matched brand campaigns by genre, platform and payout", image: "/detail/CreatorPortal_Marketplace.png" },
          { chip: "Brand/Marketer Portal", caption: "Brand dashboard: marketers see only their own games and campaigns, each with a creator pipeline", image: "/detail/MarketerPortal_BrandManagement.png" },
          { chip: "Staff Portal", caption: "Internal operations: manage every campaign's status, budget and timeline in one place", image: "/detail/StaffPortal_CampaignManagement.png" },
        ],
        tags: ["React Native", "Expo", "TypeScript", "AWS Amplify Gen 2", "AppSync GraphQL", "Cognito", "Lambda", "S3", "DynamoDB"],
        stats: [
          { label: "2 portals", description: "Built full-stack" },
          { label: "40+ brands", description: "Served by the platform" },
          { label: "700+ campaigns", description: "Workflows digitized" },
          { label: "Web · iOS · Android", description: "Phones, tablets & foldables" },
        ],
      },
      {
        title: "Internal AI Knowledge Assistant",
        badge: "AI/ML",
        badgeAccent: "violet",
        meta: "Knowledge base author and tester — AI chat for the Staff and Marketer portals · EnsoNex",
        description:
          "Wrote and tested 30+ FAQ documents (SOPs, FAQs, policies) that feed the internal AI knowledge chat assistant for the Staff and Marketer portals. Understands the system end to end on AWS Bedrock, S3, and Lambda: an ingest Lambda uses Amazon Nova to extract facts and FAQs from uploaded documents into a JSON knowledge base, and a query Lambda answers questions grounded on it — so the documentation was written and tested to match how the model reads and answers. The assistant handles 150+ queries per week and has reduced support tickets by ~55%.",
        tiles: [
          { chip: "Chat UI", caption: "Answers Marketer and Staff portal questions, with chat history", image: "/detail/AIChat_UI.png" },
          { chip: "Architecture", caption: "How it works: ingest Lambda extracts facts to JSON, query Lambda answers with Nova Lite", image: "/detail/AIChat_Architecture.png" },
        ],
        tags: ["AWS Bedrock", "Amazon Nova", "RAG", "S3", "Lambda"],
        stats: [
          { label: "150+/week", description: "Queries handled" },
          { label: "~55%", description: "Fewer support tickets" },
          { label: "30+ docs", description: "Written and tested" },
        ],
      },
    ],
  },
  {
    role: "AI Engineer Intern",
    dates: "Mar – Aug 2025",
    metaCompany: "Pandai Education Sdn. Bhd.",
    companyUrl: "https://my.pandai.org/",
    metaLocation: "Kuala Lumpur, Malaysia",
    accent: "cyan",
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
    metaCompany: "Lifewood Data Technology Sdn. Bhd.",
    companyUrl: "https://lifewood.com/",
    metaLocation: "Cyberjaya, Malaysia",
    accent: "green",
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
    items: ["Agile/Scrum", "Responsive Design", "Component Architecture", "Cross-platform Development", "Technical Documentation" ],
  },
  {
    title: "Developer Tools",
    accent: "green",
    items: ["Git", "GitHub", "Xcode", "Android Studio", "VS Code", "Postman", "Figma", "OpenProject"],
  },
];
