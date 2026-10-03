import { ArrowUpRight } from "lucide-react";
import { hubSocialLinks } from "@/config/hub";

export function SocialLinks() {
  return (
    <nav aria-label="Social links" className="flex items-center gap-1 sm:gap-2">
      {hubSocialLinks.map((link) => {
        const Icon = link.icon;

        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link flex min-h-11 items-center gap-1.5 rounded-lg px-2 text-xs sm:px-3 sm:text-sm"
          >
            <Icon aria-hidden="true" className="size-3.5 shrink-0" />
            {link.label}
            <ArrowUpRight aria-hidden="true" className="hidden size-3.5 shrink-0 sm:block" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        );
      })}
    </nav>
  );
}
