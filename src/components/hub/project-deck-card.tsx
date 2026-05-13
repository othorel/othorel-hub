import Link from "next/link";
import { ArrowUpRight, Code2 } from "lucide-react";
import type { HubProject } from "@/types/hub";

const themeClasses = {
  gold: {
    glow: "bg-primary/25",
    border: "group-hover:border-primary/60",
    icon: "text-primary",
    chip: "text-primary",
  },
  violet: {
    glow: "bg-violet-400/25",
    border: "group-hover:border-violet-300/60",
    icon: "text-violet-200",
    chip: "text-violet-200",
  },
  cyan: {
    glow: "bg-cyan-400/25",
    border: "group-hover:border-cyan-300/60",
    icon: "text-cyan-200",
    chip: "text-cyan-200",
  },
  emerald: {
    glow: "bg-emerald-400/25",
    border: "group-hover:border-emerald-300/60",
    icon: "text-emerald-200",
    chip: "text-emerald-200",
  },
} satisfies Record<
  HubProject["theme"],
  {
    glow: string;
    border: string;
    icon: string;
    chip: string;
  }
>;

type ProjectDeckCardProps = {
  project: HubProject;
  index: number;
  isActive: boolean;
};

export function ProjectDeckCard({
  project,
  index,
  isActive,
}: ProjectDeckCardProps) {
  const Icon = project.icon;
  const theme = themeClasses[project.theme];

  return (
    <Link
      href={project.href}
      className={`glass-panel group relative block h-full overflow-hidden rounded-[2.5rem] p-7 transition duration-500 ${theme.border}`}
    >
      <div className={`absolute -right-24 -top-24 h-72 w-72 rounded-full ${theme.glow} blur-3xl transition duration-500 group-hover:scale-125`} />
      <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />

      <div className="relative flex h-full min-h-[350px] flex-col">
        <div className="flex items-start justify-between gap-6">
          <div>
            <div className="flex items-center gap-3">
              <span className={`text-xs font-semibold uppercase tracking-[0.35em] ${theme.chip}`}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="h-px w-10 bg-white/20" />
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {project.tag}
              </span>
            </div>

            <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
              <span className="size-2 rounded-full bg-primary shadow-[0_0_18px_oklch(0.82_0.145_83)]" />
              {project.status}
            </p>
          </div>

          <div className={`rounded-[1.4rem] border border-white/10 bg-white/10 p-4 shadow-2xl ${theme.icon}`}>
            <Icon className="size-7" />
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-5xl font-semibold tracking-[-0.07em]">
            {project.name}
          </h3>

          <p className="mt-6 max-w-sm text-sm leading-7 text-muted-foreground">
            {project.description}
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between pt-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <Code2 className={`size-4 ${theme.icon}`} />
            Gateway
          </div>

          <div
            className={`flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium transition group-hover:bg-white group-hover:text-background ${theme.icon}`}
          >
            Open
            <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>

      {!isActive && (
        <div className="absolute inset-0 rounded-[2.5rem] bg-background/20 backdrop-blur-[1px]" />
      )}
    </Link>
  );
}
