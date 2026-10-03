import { BriefcaseBusiness, Clapperboard, CodeXml, MessagesSquare } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import type { HubProject, HubSocialLink } from "@/types/hub";

export const hubProjects: HubProject[] = [
  {
    name: "Portfolio",
    href: "https://portfolio.othorel.fr",
    description: "Selected projects, experience and technical background.",
    category: "Selected work",
    accent: "warm",
    icon: CodeXml,
  },
  {
    name: "SerieMatch",
    href: "https://seriematch.othorel.fr",
    description: "Discover TV series with recommendations tailored to your taste.",
    category: "Series discovery",
    accent: "violet",
    icon: Clapperboard,
  },
  {
    name: "Flexitaf",
    href: "https://flexitaf.fr",
    description: "A private platform for recruitment, onboarding and employment workflows.",
    category: "Recruitment & onboarding",
    accent: "green",
    status: "Private",
    icon: BriefcaseBusiness,
  },
  {
    name: "Syntra",
    href: "https://syntra.othorel.fr",
    description:
      "A community platform for creating spaces and chatting in real time.",
    category: "Community & messaging",
    accent: "blue",
    icon: MessagesSquare,
  },
];

export const hubSocialLinks: HubSocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/othorel",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/olivier-thorel-24a87b158/",
    icon: FaLinkedin,
  },
];
