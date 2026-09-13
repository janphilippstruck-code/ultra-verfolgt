import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import type { Briefing, BriefingBlock } from "@/content/briefing-types";
import { Logo } from "@/components/Logo";

function Blocks({ blocks }: { blocks: BriefingBlock[] }) {
  return (
    <div className="mt-5 flex flex-col gap-5">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "lead":
            return (
              <p key={i} className="font-display text-xl uppercase tracking-[0.04em] text-foreground sm:text-2xl">
                {b.text}
              </p>
            );
          case "p":
            return (
              <p key={i} className="text-base leading-relaxed text-muted-foreground">
                {b.text}
              </p>
            );
          case "list":
            return (
              <ul key={i} className="flex flex-col gap-2">
                {b.items.map((it) => (
                  <li key={it} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
                    <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            );
          case "highlight":
            return (
              <div key={i} className="border-l-2 border-primary bg-surface/40 px-4 py-4">
                {b.title && (
                  <p className="eyebrow text-primary">{b.title}</p>
                )}
                <div className={`flex flex-col gap-2 ${b.title ? "mt-2" : ""}`}>
                  {b.lines.map((l) => (
                    <p key={l} className="text-base font-medium leading-relaxed text-foreground">
                      {l}
                    </p>
                  ))}
                </div>
              </div>
            );
          case "schedule":
            return (
              <ol key={i} className="flex flex-col">
                {b.items.map((it) => (
                  <li
                    key={it.time}
                    className="border-b border-border/50 py-4 last:border-b-0 sm:flex sm:gap-6"
                  >
                    <p className="font-display text-lg font-semibold uppercase tracking-[0.1em] text-primary sm:w-44 sm:shrink-0">
                      {it.time}
                    </p>
                    <div className="mt-1 sm:mt-0">
                      {it.title && (
                        <p className="font-display text-xl font-bold uppercase text-foreground">{it.title}</p>
                      )}
                      {it.text && (
                        <p className="mt-1 text-base leading-relaxed text-muted-foreground">{it.text}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            );
          case "cards":
            return (
              <div key={i} className="grid gap-4 sm:grid-cols-2">
                {b.items.map((c) => (
                  <div key={c.title} className="border border-border/60 bg-surface/30 p-5">
                    <p className="font-display text-lg font-bold uppercase tracking-[0.08em] text-primary">
                      {c.title}
                    </p>
                    <ul className="mt-3 flex flex-col gap-2">
                      {c.lines.map((l) => (
                        <li key={l} className="text-sm leading-relaxed text-muted-foreground">
                          {l}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            );
          case "quotes":
            return (
              <div key={i} className="flex flex-col gap-3">
                {b.items.map((q) => (
                  <p
                    key={q}
                    className="border border-border/60 px-4 py-3 font-display text-base uppercase tracking-[0.06em] text-foreground"
                  >
                    {q}
                  </p>
                ))}
              </div>
            );
        }
      })}
    </div>
  );
}

export function BriefingView({ briefing }: { briefing: Briefing }) {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/60 px-4 pb-8 pt-8 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <Link to="/" className="inline-flex">
            <Logo style={{ width: "clamp(140px, 40vw, 200px)" }} />
          </Link>
          <h1 className="mt-6 font-display text-3xl font-bold uppercase leading-tight sm:text-5xl">
            {briefing.title}
          </h1>
          <p className="mt-3 font-display text-lg uppercase tracking-[0.1em] text-primary">
            {briefing.date}
          </p>
          <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-1">
            {briefing.facts.map((f) => (
              <li key={f} className="text-base text-muted-foreground">
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-col gap-2">
            {briefing.intro.map((t) => (
              <p key={t} className="text-base leading-relaxed text-muted-foreground">
                {t}
              </p>
            ))}
          </div>
        </div>
      </header>

      <nav
        aria-label="Abschnitte"
        className="sticky top-0 z-40 border-b border-border/60 bg-background/95 backdrop-blur-md"
      >
        <ul className="mx-auto flex max-w-3xl gap-2 overflow-x-auto px-4 py-3 sm:px-6">
          {briefing.sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="inline-flex min-h-[44px] items-center whitespace-nowrap rounded-sm border border-border px-3 font-display text-base uppercase tracking-[0.08em] text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {s.nav}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <main className="mx-auto max-w-3xl px-4 pb-24 sm:px-6">
        {briefing.sections.map((s) => (
          <section key={s.id} id={s.id} className="scroll-mt-24 border-b border-border/50 py-10 last:border-b-0">
            <h2
              className={`font-display text-2xl font-bold uppercase sm:text-4xl ${
                s.accent ? "text-primary" : "text-foreground"
              }`}
            >
              {s.title}
            </h2>
            <Blocks blocks={s.blocks} />
          </section>
        ))}
      </main>

      {showTop && (
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="fixed bottom-5 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-sm border border-primary bg-background text-primary"
          aria-label="Nach oben"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 15l6-6 6 6" />
          </svg>
        </a>
      )}
    </div>
  );
}
