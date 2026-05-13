import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const socialLinks = [
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

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-3">
      {socialLinks.map((link) => {
        const Icon = link.icon;

        return (
          <Link
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="glass-panel group flex items-center gap-3 rounded-full px-5 py-3 text-sm font-medium text-muted-foreground transition duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground"
          >
            <Icon className="size-5 text-primary transition duration-300 group-hover:scale-110" />
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
