import { Logo } from "@/components/Logo";
import { MapPin, RoutePath } from "@/components/RoutePath";
import { Reveal } from "@/components/Reveal";
import { FACTS, HERO, KONZEPT, OUTRO, TIMELINE } from "@/content/site";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 pb-20 pt-24 sm:px-6"
    >
      <div aria-hidden="true" className="topo absolute inset-0" />
      <div aria-hidden="true" className="grid-lines absolute inset-0 opacity-60" />
      <RoutePath
        variant="hero"
        className="pointer-events-none absolute inset-x-0 top-1/2 h-[60%] w-full -translate-y-1/2 opacity-40"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_50%,transparent_0%,var(--background)_100%)]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <h1 className="sr-only">Ultra Verfolgt – Gejagt bis ins Ziel</h1>
        <Logo className="w-full max-w-[19rem] sm:max-w-md lg:max-w-xl" />

        <p className="eyebrow mt-6 text-[0.68rem] sm:text-xs">{HERO.kicker}</p>

        <p className="mt-6 font-display text-[2.6rem] font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
          {HERO.headline}
        </p>

        <p className="mx-auto mt-6 max-w-xl text-balance text-sm leading-relaxed text-muted-foreground sm:text-base">
          {HERO.lead}
        </p>

        <a
          href={HERO.ctaHref}
          className="mt-10 inline-flex min-h-[48px] items-center justify-center rounded-sm border border-primary bg-transparent px-7 font-display text-lg font-semibold uppercase tracking-[0.14em] text-foreground transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
        >
          {HERO.cta}
        </a>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="eyebrow text-[0.6rem]">Scrollen</span>
        <span className="block h-10 w-px bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}

export function Konzept() {
  return (
    <section id="konzept" className="relative overflow-hidden py-24 sm:py-32">
      <RoutePath
        variant="section"
        className="pointer-events-none absolute left-2 top-0 h-full w-24 opacity-30 sm:left-8 lg:left-[8%] lg:w-40"
      />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <p className="eyebrow">01 — Ausgangslage</p>
          <h2 className="mt-4 font-display text-5xl font-bold sm:text-7xl">{KONZEPT.heading}</h2>
        </Reveal>

        <div className="mt-14 flex flex-col gap-10">
          {KONZEPT.blocks.map((b, i) =>
            b.emphasis ? (
              <Reveal key={i}>
                <p className="relative border-l-2 border-primary py-2 pl-5 font-display text-3xl font-bold uppercase leading-tight text-foreground sm:text-5xl">
                  {b.text}
                </p>
              </Reveal>
            ) : (
              <Reveal key={i}>
                <p className="max-w-[62ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {b.text}
                </p>
              </Reveal>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

function StationMarker({ marker }: { marker: "current" | "upcoming" | "finish" }) {
  if (marker === "finish") {
    return (
      <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-primary bg-background text-primary">
        <MapPin className="h-4 w-4" />
      </span>
    );
  }
  if (marker === "current") {
    return (
      <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-primary bg-background">
        <span className="h-2.5 w-2.5 rounded-full bg-primary" />
      </span>
    );
  }
  return (
    <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-border bg-background">
      <span className="h-2.5 w-2.5 rounded-full bg-border" />
    </span>
  );
}

export function Timeline() {
  return (
    <section id="der-weg" className="relative border-t border-border/50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="eyebrow">02 — Vorbereitung</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold sm:text-6xl">
            {TIMELINE.heading}
          </h2>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            {TIMELINE.intro}
          </p>
        </Reveal>

        <ol className="relative mt-16 flex flex-col gap-12 lg:mt-24 lg:flex-row lg:gap-8">
          {/* Vertikale Linie (mobil) */}
          <span
            aria-hidden="true"
            className="absolute left-[13px] top-2 bottom-2 w-px bg-border lg:hidden"
          />
          <span
            aria-hidden="true"
            className="absolute left-[13px] top-2 h-[26%] w-px bg-primary lg:hidden"
          />
          {/* Horizontale Linie (Desktop) */}
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-[14px] hidden h-px bg-border lg:block"
          />
          <span
            aria-hidden="true"
            className="absolute left-0 top-[14px] hidden h-px w-[12.5%] bg-primary lg:block"
          />

          {TIMELINE.stations.map((s, i) => (
            <Reveal
              as="li"
              key={s.date}
              delay={i * 90}
              className={`relative pl-12 lg:flex-1 lg:pl-0 ${i % 2 === 1 ? "lg:pt-10" : ""}`}
            >
              <span className="absolute left-0 top-0 lg:relative lg:block">
                <StationMarker marker={s.marker} />
              </span>
              {s.marker !== "upcoming" && i % 2 === 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-[13px] hidden lg:block"
                />
              )}
              <div className="lg:mt-6 lg:pr-6">
                <p
                  className={`font-display text-xl font-semibold uppercase tracking-[0.12em] ${
                    s.marker === "upcoming" ? "text-muted-foreground" : "text-primary"
                  }`}
                >
                  {s.date}
                </p>
                {s.badge && (
                  <p className="mt-2 inline-flex items-center gap-2 border border-primary px-2.5 py-1 font-display text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                    {s.badge}
                  </p>
                )}
                <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl">{s.title}</h3>
                <div className="mt-3 flex max-w-[46ch] flex-col gap-2">
                  {s.paragraphs.map((p, j) => (
                    <p key={j} className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function FactIcon({ icon }: { icon: string }) {
  const c = "h-6 w-6 text-primary";
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, "aria-hidden": true } as const;
  if (icon === "teams")
    return (
      <svg viewBox="0 0 24 24" className={c} {...p}>
        <circle cx="8" cy="8" r="3" />
        <circle cx="16.5" cy="9.5" r="2.5" />
        <path d="M3 20c0-3 2.2-5 5-5s5 2 5 5M14 20c0-2.4 1.4-4 3.5-4S21 17.6 21 20" />
      </svg>
    );
  if (icon === "signal")
    return (
      <svg viewBox="0 0 24 24" className={c} {...p}>
        <circle cx="12" cy="12" r="2" />
        <path d="M8.5 15.5a5 5 0 0 1 0-7M15.5 8.5a5 5 0 0 1 0 7M5.5 18.5a9 9 0 0 1 0-13M18.5 5.5a9 9 0 0 1 0 13" />
      </svg>
    );
  if (icon === "clock")
    return (
      <svg viewBox="0 0 24 24" className={c} {...p}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5.2l3.2 2" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" className={c} {...p}>
      <path d="M4 19c3 0 3-6 7-6s4-8 9-8" />
      <circle cx="4" cy="19" r="1.6" />
      <circle cx="20" cy="5" r="1.6" />
    </svg>
  );
}

export function Eckdaten() {
  return (
    <section id="eckdaten" className="border-t border-border/50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="eyebrow">03 — Eckdaten</p>
        </Reveal>
        <dl className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {FACTS.map((f, i) => (
            <Reveal
              key={f.label}
              delay={i * 80}
              className="border-t border-border/60 py-10 sm:py-14 lg:border-l lg:border-t-0 lg:px-8 lg:first:border-l-0 lg:first:pl-0"
            >
              <FactIcon icon={f.icon} />
              <dt className="sr-only">{f.label}</dt>
              <dd className="mt-6">
                {f.value && (
                  <span className="block font-display text-7xl font-bold leading-none text-foreground sm:text-8xl">
                    {f.value}
                  </span>
                )}
                <span
                  className={`mt-3 block font-display font-semibold uppercase tracking-[0.14em] text-muted-foreground ${
                    f.value ? "text-xl" : "text-3xl leading-tight text-foreground sm:text-4xl"
                  }`}
                >
                  {f.label}
                </span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function Outro() {
  return (
    <section
      id="start"
      className="relative overflow-hidden border-t border-border/50 py-28 sm:py-40"
    >
      <div aria-hidden="true" className="topo absolute inset-0 opacity-70" />
      <RoutePath
        variant="outro"
        className="pointer-events-none absolute inset-x-0 top-1/2 h-[70%] w-full -translate-y-1/2 opacity-35"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_50%,transparent_0%,var(--background)_100%)]"
      />
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-6">
        <MapPin className="h-8 w-8 text-primary" />
        <Reveal>
          <h2 className="mt-6 font-display text-4xl font-bold sm:text-6xl">{OUTRO.heading}</h2>
          <p className="mt-6 font-display text-[3.2rem] font-bold leading-none text-primary sm:text-8xl">
            {OUTRO.date}
          </p>
          <p className="mt-8 text-base text-muted-foreground">{OUTRO.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
