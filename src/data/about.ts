import type { AboutStat, Testimonial } from "../types";

export const aboutIntro =
  "I'm a full-stack engineer who thrives at the intersection of software and AI. I've shipped production systems across gaming creator platforms, EdTech, and AI data services — from designing serverless AI pipelines to architecting multi-portal applications serving creators, brands, and agencies. I care most about owning problems end-to-end: understanding the business need, making the architectural calls, and delivering working software that people actually use.";

export const testimonial: Testimonial = {
  quote:
    "This was not a task handed to her with a blueprint; she identified the technical approach, made key architectural decisions, and delivered a production-ready system that now underpins how we match creators to campaigns. The initiative and judgment she demonstrated were well beyond what is typically expected at her level.",
  name: "Bhaviinish Ganasan",
  title: "Technical Lead, EnsoNex Sdn. Bhd.",
};

export const aboutStats: AboutStat[] = [
  {
    accent: "violet",
    headline: "2+ years experience",
    description: "Full-stack and AI engineering",
  },
  {
    accent: "green",
    headline: "3 companies",
    description: "Gaming creator platforms, EdTech, and AI data services",
  },
  {
    accent: "violet",
    headline: "Full-stack + AI + cloud",
    description: "React, TypeScript, AWS, LLM APIs",
  },
  {
    accent: "orange",
    headline: "Gold Award + 2 publications",
    description: "International research recognition",
  },
];