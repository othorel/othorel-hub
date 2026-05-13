import type { LucideIcon } from "lucide-react";

export type HubProjectTheme = "gold" | "violet" | "cyan" | "emerald";

export type HubProject = {
  name: string;
  href: string;
  description: string;
  status: string;
  tag: string;
  theme: HubProjectTheme;
  icon: LucideIcon;
};

export type HubSocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};
