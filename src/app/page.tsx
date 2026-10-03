import { ArrowUpRight } from "lucide-react";
import { SocialLinks } from "@/components/hub/social-links";
import { hubProjects } from "@/config/hub";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
      <a href="#applications" className="skip-link">
        Skip to applications
      </a>

      <header className="flex min-h-24 items-center justify-between gap-3 border-b border-border/70 sm:min-h-28">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <span aria-hidden="true" className="hub-monogram hidden size-10 shrink-0 items-center justify-center rounded-xl font-mono text-sm font-medium sm:flex">
            OT
          </span>
          <div className="min-w-0">
            <p className="text-sm font-medium tracking-tight sm:text-base">Olivier Thorel</p>
            <p className="mt-1 text-xs text-muted-foreground">Full-stack developer</p>
          </div>
        </div>
        <SocialLinks />
      </header>

      <main id="applications" tabIndex={-1} className="pb-8 pt-9 outline-none sm:pb-10 sm:pt-11">
        <div className="mb-7 flex flex-col gap-3 sm:mb-9 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
          <h1 className="text-[2rem] font-medium leading-tight tracking-[-0.045em] sm:text-[2.75rem]">
            Projects &amp; products
          </h1>
          <p className="max-w-64 text-sm leading-6 text-muted-foreground sm:pb-1">
            Applications, platforms and selected work.
          </p>
        </div>

        <ul aria-label="Applications" className="application-grid">
          {hubProjects.map((project) => {
            const Icon = project.icon;
            const domain = new URL(project.href).hostname;
            return (
              <li key={project.name} className="min-w-0">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-accent={project.accent}
                  className="application-panel flex h-full min-h-64 flex-col rounded-2xl p-6 sm:min-h-[17rem] sm:p-7"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="flex items-center gap-3 text-xs font-medium text-muted-foreground sm:text-sm">
                      <span aria-hidden="true" className="application-accent h-px w-5 shrink-0" />
                      {project.category}
                    </p>
                    <Icon aria-hidden="true" className="application-icon size-8 shrink-0" strokeWidth={1.5} />
                  </div>

                  <div className="mb-7 mt-7">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <h2 className="text-[1.75rem] font-medium leading-tight tracking-[-0.035em] sm:text-[2rem]">
                        {project.name}
                      </h2>
                      {project.status && (
                        <span className="rounded-full border border-border bg-muted/60 px-2 py-0.5 text-xs font-medium text-foreground/80">
                          {project.status}
                        </span>
                      )}
                    </div>
                    <p className="mt-3 max-w-[44ch] text-sm leading-6 text-muted-foreground">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-3 border-t border-border/60 pt-4">
                    <span className="min-w-0 break-all font-mono text-xs text-muted-foreground">{domain}</span>
                    <span className="application-arrow flex size-8 shrink-0 items-center justify-center rounded-full">
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </main>

      <footer className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-border/70 py-6 text-xs text-muted-foreground sm:py-7">
        <span className="flex items-center gap-2.5 font-mono">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
          othorel.fr
        </span>
        <p>Olivier Thorel · Full-stack developer</p>
      </footer>
    </div>
  );
}
