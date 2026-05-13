"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Layers3,
} from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { hubProjects } from "@/config/hub";

export function ProjectOrbit() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProject = hubProjects[activeIndex];

  const visibleProjects = useMemo(() => {
    return hubProjects.map((project, index) => {
      let offset = index - activeIndex;

      if (offset > hubProjects.length / 2) {
        offset -= hubProjects.length;
      }

      if (offset < -hubProjects.length / 2) {
        offset += hubProjects.length;
      }

      return {
        project,
        offset,
      };
    });
  }, [activeIndex]);

  function goPrevious() {
    setActiveIndex((current) =>
      current === 0 ? hubProjects.length - 1 : current - 1,
    );
  }

  function goNext() {
    setActiveIndex((current) =>
      current === hubProjects.length - 1 ? 0 : current + 1,
    );
  }

  if (!activeProject) {
    return null;
  }

  return (
    <div className="relative min-h-[680px] overflow-hidden rounded-[3.5rem] border border-white/10 bg-white/[0.035] p-6 shadow-[0_50px_180px_oklch(0_0_0_/_55%)] backdrop-blur-2xl">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,oklch(1_0_0_/_5%)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0_/_5%)_1px,transparent_1px)] bg-[size:56px_56px] opacity-25" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,oklch(0.82_0.145_83_/_22%),transparent_24rem)]" />
      <div className="pointer-events-none absolute -left-28 top-20 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-12 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-[52%] h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20" />
      <div className="pointer-events-none absolute left-1/2 top-[52%] h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

      <div className="relative z-20 flex items-start justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-muted-foreground">
            <Layers3 className="size-4 text-primary" />
            Project selector
          </div>

          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">
            <span className="text-gradient-gold">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <span className="mx-3 text-muted-foreground">/</span>
            {String(hubProjects.length).padStart(2, "0")}
          </h2>
        </div>

        <div className="flex gap-2">
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="glass-panel size-11 rounded-full"
            onClick={goPrevious}
            aria-label="Previous project"
          >
            <ArrowLeft className="size-4" />
          </Button>

          <Button
            type="button"
            variant="outline"
            size="icon"
            className="glass-panel size-11 rounded-full"
            onClick={goNext}
            aria-label="Next project"
          >
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>

      <div className="relative z-10 mt-8 h-[470px] [perspective:1500px]">
        <motion.div
          key={activeProject.name}
          className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[90px]"
          initial={{ opacity: 0.35, scale: 0.85 }}
          animate={{ opacity: 0.8, scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        {visibleProjects.map(({ project, offset }) => {
          const Icon = project.icon;
          const isActive = offset === 0;
          const isHidden = Math.abs(offset) > 2;

          return (
            <motion.div
              key={project.name}
              className="absolute left-1/2 top-1/2 w-[min(82vw,390px)]"
              initial={false}
              animate={{
                x: `calc(-50% + ${offset * 205}px)`,
                y: isActive ? "-52%" : "-48%",
                z: isActive ? 160 : -Math.abs(offset) * 120,
                rotateY: offset * -24,
                rotateZ: offset * 3,
                scale: isActive ? 1 : 0.76,
                opacity: isHidden ? 0 : isActive ? 1 : 0.36,
                filter: isActive ? "blur(0px)" : "blur(2px)",
                zIndex: 20 - Math.abs(offset),
              }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 23,
              }}
              style={{
                transformStyle: "preserve-3d",
                pointerEvents: isHidden ? "none" : "auto",
              }}
            >
              <Link
                href={project.href}
                className="glass-panel group relative block min-h-[390px] overflow-hidden rounded-[2.5rem] p-7 transition duration-500 hover:border-primary/50"
              >
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/90 to-transparent" />
                <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl transition duration-500 group-hover:bg-primary/30" />
                <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />

                <div className="relative flex min-h-[336px] flex-col">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground">
                        {project.tag}
                      </div>

                      <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="size-2 rounded-full bg-primary shadow-[0_0_18px_oklch(0.82_0.145_83)]" />
                        {project.status}
                      </p>
                    </div>

                    <div className="rounded-[1.4rem] border border-white/10 bg-white/10 p-4 text-primary shadow-2xl transition duration-500 group-hover:scale-110 group-hover:bg-primary/15">
                      <Icon className="size-7" />
                    </div>
                  </div>

                  <div className="mt-12">
                    <h3 className="text-5xl font-semibold tracking-[-0.06em]">
                      {project.name}
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-muted-foreground">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-10">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                      <Code2 className="size-4 text-primary" />
                      Gateway
                    </div>

                    <div className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                      Open
                      <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      <div className="relative z-20 flex items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="truncate text-sm font-medium">{activeProject.name}</p>
          <p className="mt-1 truncate text-xs text-muted-foreground">
            {activeProject.description}
          </p>
        </div>

        <div className="flex shrink-0 gap-2">
          {hubProjects.map((project, index) => (
            <button
              key={project.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex
                  ? "w-9 bg-primary shadow-[0_0_18px_oklch(0.82_0.145_83_/_55%)]"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Show ${project.name}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
