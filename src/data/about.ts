import type { AboutStat, Testimonial } from "../types";

export const aboutIntro =
  "I'm an AI engineer who builds LLM-powered systems and ships them end to end. I've put AI into production across gaming creator platforms, EdTech, and AI data services — from owning a serverless LLM pipeline that tags 16,000+ creator profiles, to helping build LLM-powered essay marking and exam generation tools, to annotating large-scale multimodal datasets for model training. My full-stack background means I don't stop at the model: I make the architectural calls, build the product around it, and deliver software people actually use.";

export const testimonials: Testimonial[] = [
  {
    quote:
      "This was not a task handed to her with a blueprint; she identified the technical approach, made key architectural decisions, and delivered a production-ready system that now underpins how we match creators to campaigns. The initiative and judgment she demonstrated were well beyond what is typically expected at her level.",
    name: "Bhaviinish Ganasan",
    title: "Technical Lead, EnsoNex Sdn. Bhd.",
    letterUrl: "/detail/Letters/Recommendation_Letter_Desy_Maharani.pdf",
  },
  {
    quote:
      "Desy demonstrated strong technical proficiency across front-end and back-end development, a sound understanding of AI systems integration, and the ability to deliver independently across multiple workstreams simultaneously. She was reliable, diligent, and consistently delivered quality outputs throughout her engagement.",
    name: "Angie Chung",
    title: "CEO & Founder, EnsoNex Sdn. Bhd.",
    letterUrl: "/detail/Letters/Reference_Letter_Desy_Maharani.pdf",
  },
];

export const aboutStats: AboutStat[] = [
  {
    accent: "violet",
    headline: "1.5+ years experience",
    description: "AI and full-stack engineering",
  },
  {
    accent: "green",
    headline: "3 companies",
    description: "Gaming creator platforms, EdTech, and AI data services",
  },
  {
    accent: "violet",
    headline: "LLMs + full-stack + cloud",
    description: "LLM APIs, DSPy, AWS Bedrock, React, TypeScript",
  },
  {
    accent: "orange",
    headline: "Gold Award + 2 publications",
    description: "International research recognition",
  },
];