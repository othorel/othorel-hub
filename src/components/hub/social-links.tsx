import Link from "next/link";
import { hubSocialLinks } from "@/config/hub";
import { Button } from "@/components/ui/button";

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-3">
      {hubSocialLinks.map((link) => {
        const Icon = link.icon;

        return (
          <Button
            key={link.label}
            asChild
            variant="ghost"
            className="rounded-full text-muted-foreground hover:text-foreground"
          >
            <Link href={link.href}>
              <Icon className="size-4" />
              {link.label}
            </Link>
          </Button>
        );
      })}
    </div>
  );
}
