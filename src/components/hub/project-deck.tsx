"use client";

import { useMemo, useRef, useState, type WheelEvent } from "react";
import { ArrowLeft, ArrowRight, Layers3 } from "lucide-react";
import {
  animate as animateMotion,
  motion,
  useMotionValue,
  type PanInfo,
} from "motion/react";

import { ProjectDeckCard } from "@/components/hub/project-deck-card";
import { Button } from "@/components/ui/button";
import { hubProjects } from "@/config/hub";

const dragThreshold = 90;
const velocityThreshold = 650;
const wheelThreshold = 35;

const themeGlowClasses = {
  gold: "bg-primary/25",
  violet: "bg-violet-400/25",
  cyan: "bg-cyan-400/25",
  emerald: "bg-emerald-400/25",
};

export function ProjectDeck() {
  const [activeIndex, setActiveIndex] = useState(0);
  const dragX = useMotionValue(0);
  const wheelLockedRef = useRef(false);

  const activeProject = hubProjects[activeIndex];

  const deckProjects = useMemo(() => {
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
        index,
        offset,
      };
    });
  }, [activeIndex]);

  function resetDrag() {
    animateMotion(dragX, 0, {
      type: "spring",
      stiffness: 220,
      damping: 28,
    });
  }

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

  function handleDragEnd(
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) {
    const shouldGoNext =
      info.offset.x < -dragThreshold || info.velocity.x < -velocityThreshold;

    const shouldGoPrevious =
      info.offset.x > dragThreshold || info.velocity.x > velocityThreshold;

    if (shouldGoNext) {
      goNext();
    }

    if (shouldGoPrevious) {
      goPrevious();
    }

    resetDrag();
  }

  function handleWheel(event: WheelEvent<HTMLDivElement>) {
    const mainDelta =
      Math.abs(event.deltaX) > Math.abs(event.deltaY)
        ? event.deltaX
        : event.deltaY;

    if (Math.abs(mainDelta) < wheelThreshold || wheelLockedRef.current) {
      return;
    }

    wheelLockedRef.current = true;

    if (mainDelta > 0) {
      goNext();
    } else {
      goPrevious();
    }

    window.setTimeout(() => {
      wheelLockedRef.current = false;
    }, 450);
  }

  if (!activeProject) {
    return null;
  }

  return (
    <div className="relative min-h-[690px] overflow-visible p-2">
      <div className="pointer-events-none absolute inset-0 rounded-[3rem] bg-[linear-gradient(to_right,oklch(1_0_0_/_4%)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0_/_4%)_1px,transparent_1px)] bg-[size:56px_56px] opacity-20" />

      <div
        className={`pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full ${themeGlowClasses[activeProject.theme]} blur-[100px]`}
      />
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-12 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-20 flex items-start justify-between gap-6 px-2">
        <div>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-muted-foreground">
            <Layers3 className="size-4 text-primary" />
            Project deck
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
            className="glass-panel size-11 cursor-pointer rounded-full"
            onClick={goPrevious}
            aria-label="Previous project"
          >
            <ArrowLeft className="size-4" />
          </Button>

          <Button
            type="button"
            variant="outline"
            size="icon"
            className="glass-panel size-11 cursor-pointer rounded-full"
            onClick={goNext}
            aria-label="Next project"
          >
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>

      <div
        className="relative z-10 mt-10 h-[480px] cursor-grab overflow-visible active:cursor-grabbing [perspective:1500px]"
        onWheel={handleWheel}
      >
        <motion.div
          className="absolute inset-0 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: -240, right: 240 }}
          dragElastic={0.08}
          dragMomentum={false}
          style={{ x: dragX, touchAction: "pan-y" }}
          onDragEnd={handleDragEnd}
        >
          {deckProjects.map(({ project, index, offset }) => {
            const isActive = offset === 0;
            const isHidden = Math.abs(offset) > 2;

            return (
              <motion.div
                key={project.name}
                className="absolute left-1/2 top-1/2 h-[430px] w-[min(82vw,410px)]"
                initial={false}
                animate={{
                  x: `calc(-50% + ${offset * 190}px)`,
                  y: isActive ? "-52%" : "-47%",
                  z: isActive ? 180 : -Math.abs(offset) * 140,
                  rotateY: offset * -22,
                  rotateZ: offset * 2.5,
                  scale: isActive ? 1 : 0.68,
                  opacity: isHidden ? 0 : isActive ? 1 : 0.22,
                  filter: isActive ? "blur(0px)" : "blur(3px)",
                  zIndex: 30 - Math.abs(offset),
                }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 24,
                }}
                style={{
                  transformStyle: "preserve-3d",
                  pointerEvents: isHidden ? "none" : "auto",
                }}
              >
                <ProjectDeckCard
                  project={project}
                  index={index}
                  isActive={isActive}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div className="relative z-20 px-2">
        <div className="mb-4 flex items-center justify-between gap-4">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Navigation
          </p>

          <p className="max-w-xs truncate text-right text-xs text-muted-foreground">
            {activeProject.name}
          </p>
        </div>

        <div className="relative h-12">
          <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-white/10" />

          <div className="relative flex h-full items-center justify-between">
            {hubProjects.map((project, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={project.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="group flex cursor-pointer flex-col items-center gap-2"
                  aria-label={`Show ${project.name}`}
                >
                  <span
                    className={`size-3 rounded-full border transition ${
                      isActive
                        ? "border-primary bg-primary shadow-[0_0_24px_oklch(0.82_0.145_83_/_70%)]"
                        : "border-white/20 bg-background group-hover:border-white/50"
                    }`}
                  />

                  <span
                    className={`hidden text-[0.65rem] uppercase tracking-[0.2em] transition sm:block ${
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    {project.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
