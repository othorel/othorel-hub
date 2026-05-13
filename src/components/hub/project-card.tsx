import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { HubProject } from "@/types/hub";

type ProjectCardProps = {
  project: HubProject;
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  const Icon = project.icon;

  return (
    <Link href={project.href} className="group">
      <Card
        className={`glass-panel relative overflow-hidden rounded-[2rem] transition duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_30px_120px_oklch(0.82_0.145_83_/_18%)] ${className ?? ""}`}
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
        <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-primary/10 blur-3xl transition duration-500 group-hover:bg-primary/20" />

        <CardHeader className="flex flex-row items-start justify-between gap-5">
          <div>
            <Badge
              variant="secondary"
              className="mb-4 rounded-full border border-white/10 bg-white/5 text-muted-foreground"
            >
              {project.tag}
            </Badge>

            <CardTitle className="text-2xl tracking-tight">
              {project.name}
            </CardTitle>

            <CardDescription className="mt-2 max-w-md text-sm leading-6">
              {project.description}
            </CardDescription>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-3 text-primary shadow-2xl">
            <Icon className="size-5" />
          </div>
        </CardHeader>

        <CardContent className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="size-2 rounded-full bg-primary shadow-[0_0_18px_oklch(0.82_0.145_83)]" />
            {project.status}
          </div>

          <div className="flex items-center gap-2 text-sm font-medium text-primary opacity-80 transition group-hover:opacity-100">
            Open
            <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
