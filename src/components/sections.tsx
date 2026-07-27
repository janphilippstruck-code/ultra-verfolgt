import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { MapPin, RoutePath } from "@/components/RoutePath";
import { Reveal } from "@/components/Reveal";
import { FEATURES_SECTION, HERO, KONZEPT, OUTRO, TIMELINE } from "@/content/site";


function ScrollHint() {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const onScroll = () => setHidden(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1.5 transition-opacity duration-500 min-[380px]:flex ${
        hidden ? "opacity-0" : "opacity-100"
      }`}
    >
      <span className="sr-only">Zum nächsten Abschnitt scrollen</span>
      <span aria-hidden="true" className="block h-8 w-px bg-gradient-to-b from-transparent to-primary" />
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4 text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28"
    >
      <div aria-hidden="true" className="topo absolute inset-0 opacity-50 sm:opacity-100" />
      <div aria-hidden="true" className="grid-lines absolute inset-0 opacity-30 sm:opacity-60" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_50%,transparent_0%,var(--background)_100%)]"
      />
      {/* Ein einzelner, dezenter Standortpunkt */}
      <div aria-hidden="true" className="absolute bottom-[18%] right-[12%] hidden sm:block">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute -inset-3 rounded-full border border-primary/25" />
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        </span>
      </div>


      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <h1 className="sr-only">Ultra Verfolgt – Gejagt bis ins Ziel</h1>
        <Logo
          className="mx-auto"
          style={{ width: "min(90%, 900px)", maxWidth: "650px" }}
        />

        <p className="eyebrow mt-8 text-[0.68rem] sm:text-xs">{HERO.kicker}</p>

        <p className="mt-5 font-display text-[2.4rem] font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
          {HERO.headline}
        </p>

        <p className="mx-auto mt-5 max-w-xl text-balance text-sm leading-relaxed text-muted-foreground sm:text-base">
          {HERO.lead}
        </p>

        <a
          href={HERO.ctaHref}
          className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-sm border border-primary bg-transparent px-7 font-display text-lg font-semibold uppercase tracking-[0.14em] text-foreground transition-colors duration-300 hover:bg-primary hover:text-primary-foreground sm:mt-10"
        >
          {HERO.cta}
        </a>
      </div>

      <ScrollHint />
    </section>
  );
}

export function Konzept() {
  return (
    <section id="konzept" className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <p className="eyebrow">01 — Ausgangslage</p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-6xl lg:text-7xl">
            {KONZEPT.heading}
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-col gap-7 sm:mt-14 sm:gap-10">
          {KONZEPT.blocks.map((b, i) =>
            b.emphasis ? (
              <Reveal key={i}>
                <p className="relative border-l-2 border-primary py-2 pl-5 font-display text-2xl font-bold uppercase leading-tight text-foreground sm:text-4xl lg:text-5xl">
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
    <section
      id="der-weg"
      className="relative overflow-hidden border-t border-border/50 py-16 sm:py-24 lg:py-32"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="eyebrow">02 — Vorbereitung</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold sm:text-5xl lg:text-6xl">
            {TIMELINE.heading}
          </h2>
          <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            {TIMELINE.intro}
          </p>
        </Reveal>

        <ol className="relative mt-12 flex flex-col gap-10 sm:gap-12 lg:mt-24 lg:flex-row lg:gap-8">
          {/* Route als Verbindung – Desktop */}
          <RoutePath
            variant="timeline"
            className="absolute inset-x-0 -top-8 z-0 hidden h-32 w-full lg:block"
          />
          {/* Vertikale Route – mobil */}
          <span
            aria-hidden="true"
            className="absolute bottom-2 left-[13px] top-2 w-px bg-border lg:hidden"
          />
          <span
            aria-hidden="true"
            className="absolute left-[13px] top-2 h-[24%] w-px bg-primary lg:hidden"
          />
          {/* Fortschritt Desktop */}
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
              className="relative z-10 pl-12 lg:flex-1 lg:pl-0"
            >
              <span className="absolute left-0 top-0 lg:relative lg:block">
                <StationMarker marker={s.marker} />
              </span>
              <div className={`lg:pr-6 ${i % 2 === 1 ? "lg:mt-16" : "lg:mt-6"}`}>
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
                    <p
                      key={j}
                      className="text-sm leading-relaxed text-muted-foreground sm:text-base"
                    >
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

function ThreeLines() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 160 60"
      className="h-10 w-full max-w-[180px]"
      fill="none"
      preserveAspectRatio="none"
    >
      <path d="M2 10 C 50 6, 90 22, 158 14" stroke="var(--color-border)" strokeWidth="1" />
      <path d="M2 30 C 60 34, 100 18, 158 30" stroke="var(--color-border)" strokeWidth="1" />
      <path d="M2 50 C 46 52, 96 40, 158 46" stroke="var(--color-border)" strokeWidth="1" />
      <circle cx="2" cy="10" r="2" fill="var(--color-primary)" />
      <circle cx="2" cy="30" r="2" fill="var(--color-primary)" />
      <circle cx="2" cy="50" r="2" fill="var(--color-primary)" />
    </svg>
  );
}

function SearchRing() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      className="h-full w-full"
      fill="none"
      strokeLinecap="round"
    >
      <path d="M50 12 A 38 38 0 0 1 88 50" stroke="var(--color-border)" strokeWidth="1" />
      <path d="M50 88 A 38 38 0 0 1 12 50" stroke="var(--color-border)" strokeWidth="1" />
      <path d="M26 74 A 34 34 0 0 0 74 74" stroke="var(--color-border)" strokeWidth="1" />
      <path d="M50 26 A 24 24 0 0 1 74 50" stroke="var(--color-primary)" strokeWidth="1.4" />
      <circle cx="50" cy="50" r="2.4" fill="var(--color-primary)" />
    </svg>
  );
}

function ConvergingRoutes() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 600 120"
      className="h-full w-full"
      fill="none"
      preserveAspectRatio="none"
    >
      <path
        d="M0 20 C 120 40, 200 6, 320 44 S 480 78, 566 62"
        stroke="var(--color-border)"
        strokeWidth="1"
      />
      <path
        d="M0 62 C 140 52, 220 96, 340 70 S 490 50, 566 62"
        stroke="var(--color-border)"
        strokeWidth="1"
      />
      <path
        d="M0 104 C 110 92, 240 112, 360 86 S 500 66, 566 62"
        stroke="var(--color-primary)"
        strokeOpacity="0.55"
        strokeWidth="1"
      />
      <circle cx="566" cy="62" r="3.5" fill="var(--color-primary)" />
    </svg>
  );
}

export function JagdFeatures() {
  const { teams, sucher, stunden, weg } = FEATURES_SECTION;
  return (
    <section
      id="eckdaten"
      className="relative overflow-hidden py-14 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />
      <div className="relative z-10 mx-auto max-w-[1140px] px-4 sm:px-6">
        <Reveal>
          <p className="eyebrow text-primary">{FEATURES_SECTION.eyebrow}</p>
          <h2 className="mt-3 max-w-[18ch] font-display text-3xl font-bold sm:text-5xl lg:text-6xl">
            {FEATURES_SECTION.heading}
          </h2>
        </Reveal>

        <div className="mt-9 grid grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-12 sm:gap-0">
          {/* 3 Teams */}
          <Reveal className="relative col-span-1 border border-border/60 p-4 sm:col-span-7 sm:border-0 sm:border-b sm:border-r sm:border-border/50 sm:p-8 lg:p-10">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-6xl font-bold leading-none text-primary sm:text-8xl lg:text-9xl">
                {teams.figure}
              </span>
              <span className="font-display text-lg font-semibold uppercase tracking-[0.18em] sm:text-2xl">
                {teams.label}
              </span>
            </div>
            <p className="mt-3 max-w-[38ch] text-xs leading-relaxed text-muted-foreground sm:mt-5 sm:text-base">
              {teams.text}
            </p>
            <div className="mt-4 hidden sm:block">
              <ThreeLines />
            </div>
          </Reveal>

          {/* 1 Sucher-Team */}
          <Reveal
            delay={70}
            className="relative col-span-1 overflow-hidden border border-border/60 p-4 sm:col-span-5 sm:border-0 sm:border-b sm:border-border/50 sm:p-8 lg:p-10"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-6 -top-6 hidden h-40 w-40 opacity-70 sm:block"
            >
              <SearchRing />
            </div>
            <div className="relative flex items-baseline gap-3">
              <span className="font-display text-6xl font-bold leading-none text-primary sm:text-8xl lg:text-9xl">
                {sucher.figure}
              </span>
              <span className="font-display text-lg font-semibold uppercase tracking-[0.18em] sm:text-2xl">
                {sucher.label}
              </span>
            </div>
            <p className="relative mt-3 max-w-[32ch] text-xs leading-relaxed text-muted-foreground sm:mt-5 sm:text-base">
              {sucher.text}
            </p>
          </Reveal>

          {/* 8 Stunden */}
          <Reveal
            delay={140}
            className="col-span-2 border border-border/60 bg-surface/40 p-4 sm:col-span-12 sm:border-0 sm:border-b sm:border-border/50 sm:bg-transparent sm:p-8 lg:p-10"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
              <div>
                <p className="font-display text-4xl font-bold leading-none tracking-[0.04em] sm:text-7xl lg:text-8xl">
                  {stunden.figure}
                </p>
                <p className="mt-2 font-display text-sm font-semibold uppercase tracking-[0.24em] text-primary sm:text-lg">
                  {stunden.label}
                </p>
              </div>
              <p className="max-w-[46ch] text-xs leading-relaxed text-muted-foreground sm:text-base">
                {stunden.text}
              </p>
            </div>
          </Reveal>

          {/* Kein sicherer Weg */}
          <Reveal
            delay={210}
            className="relative col-span-2 overflow-hidden border border-border/60 p-4 sm:col-span-12 sm:border-0 sm:p-8 lg:p-10"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 opacity-60 lg:block"
            >
              <ConvergingRoutes />
            </div>
            <h3 className="relative font-display text-2xl font-bold uppercase leading-tight sm:text-5xl lg:text-6xl">
              {weg.label}
            </h3>
            <p className="relative mt-3 max-w-[42ch] text-xs leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
              {weg.text}
            </p>
            <div className="mt-4 sm:hidden">
              <div className="h-10 w-full">
                <ConvergingRoutes />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}



export function Outro() {
  return (
    <section
      id="start"
      className="relative overflow-hidden border-t border-border/50 py-20 sm:py-28 lg:py-36"
    >
      <div aria-hidden="true" className="topo absolute inset-0 opacity-70" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_50%,transparent_0%,var(--background)_100%)]"
      />
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-6">
        <MapPin className="h-8 w-8 text-primary" />
        <Reveal>
          <h2 className="mt-5 font-display text-3xl font-bold sm:text-5xl lg:text-6xl">
            {OUTRO.heading}
          </h2>
          <p className="mt-5 font-display text-[2.8rem] font-bold leading-none text-primary sm:text-7xl lg:text-8xl">
            {OUTRO.date}
          </p>
          <p className="mt-6 text-base text-muted-foreground">{OUTRO.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
