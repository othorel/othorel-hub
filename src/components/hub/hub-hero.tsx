import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { SocialLinks } from "@/components/hub/social-links";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function HubHero() {
  return (
    <div className="flex flex-col items-start">
      <Badge className="glass-panel rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-primary">
        Olivier Thorel
      </Badge>

      <h1 className="mt-8 max-w-3xl text-left text-5xl font-semibold tracking-[-0.06em] sm:text-7xl lg:text-8xl">
        One gateway.
        <span className="block text-gradient-gold">All projects.</span>
      </h1>

      <p className="mt-7 max-w-xl text-left text-base leading-8 text-muted-foreground sm:text-lg">
        A visual entry point to my portfolio, products, experiments and social
        links. Built as the main menu of my personal VPS ecosystem.
      </p>

      <div className="mt-9 flex flex-wrap gap-3">
        <Button asChild size="lg" className="rounded-full px-6">
          <Link href="https://portfolio.othorel.fr">
            Enter portfolio
            <ArrowUpRight className="size-4" />
          </Link>
        </Button>

        <Button
          asChild
          size="lg"
          variant="outline"
          className="glass-panel rounded-full px-6"
        >
          <Link href="https://github.com/othorel">
            View GitHub
            <ExternalLink className="size-4" />
          </Link>
        </Button>
      </div>

      <Separator className="my-9 max-w-md opacity-40" />

      <SocialLinks />
    </div>
  );
}
