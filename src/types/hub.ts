import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

export type HubProject = {
  name: string;
  href: string;
  description: string;
  category: string;
  accent: "warm" | "violet" | "green" | "blue";
  status?: "Private";
  icon: LucideIcon;
};

export type HubSocialLink = {
  label: string;
  href: string;
  icon: IconType;
};
