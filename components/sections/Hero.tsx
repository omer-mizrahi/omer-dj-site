export function Hero() {
  return (
    <section
      id="hero"
      className="scroll-mt-24 border-b border-white/5 bg-gradient-to-bl from-neon-purple/15 via-background to-electric-blue/10 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-surface/40 p-8 backdrop-blur-sm sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-turquoise">
          Omer Mizrahi · DJ
        </p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          כותרת ראשית
        </h1>
        <p className="mt-4 max-w-2xl text-muted">
          אזור Hero — תוכן יגיע בהמשך.
        </p>
      </div>
    </section>
  );
}
