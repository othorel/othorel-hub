import { HubBackground } from "@/components/hub/hub-background";
import { HubHero } from "@/components/hub/hub-hero";
import { ProjectDeck } from "@/components/hub/project-deck";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden text-foreground">
      <HubBackground />

      <section className="relative mx-auto grid min-h-screen w-full max-w-7xl items-center gap-12 px-6 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <HubHero />
        <ProjectDeck />
      </section>
    </main>
  );
}
