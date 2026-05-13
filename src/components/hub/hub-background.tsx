export function HubBackground() {
  return (
    <>
      <div className="noise-mask pointer-events-none absolute inset-0 opacity-30" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
    </>
  );
}
