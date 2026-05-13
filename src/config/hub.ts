import { Code2, Globe2, Lock, Network, Sparkles } from "lucide-react";
import type { HubProject, HubSocialLink } from "@/types/hub";

export const hubProjects: HubProject[] = [
  {
    name: "Portfolio",
    href: "https://portfolio.othorel.fr",
    description: "Case studies, engineering profile and selected full-stack work.",
    status: "Live",
    tag: "Personal brand",
    theme: "gold",
    icon: Globe2,
  },
  {
    name: "SerieMatch",
    href: "https://seriematch.othorel.fr",
    description: "Series discovery platform with taste profile and recommendations.",
    status: "Live",
    tag: "Product",
    theme: "violet",
    icon: Sparkles,
  },
  {
    name: "Flexitaf",
    href: "https://flexitaf.fr",
    description: "Confidential SaaS platform for recruitment, onboarding and automation.",
    status: "Private",
    tag: "Startup",
    theme: "emerald",
    icon: Lock,
  },
];

export const hubSocialLinks: HubSocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/othorel",
    icon: Code2,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/olivier-thorel",
    icon: Network,
  },
];
