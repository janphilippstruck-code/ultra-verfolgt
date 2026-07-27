import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { MapPin, RoutePath } from "@/components/RoutePath";
import { Reveal } from "@/components/Reveal";
import { FACTS, HERO, KONZEPT, OUTRO, TIMELINE } from "@/content/site";

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
      <div aria-hidden="true" className="topo absolute inset-0" />
      <div aria-hidden="true" className="grid-lines absolute inset-0 opacity-60" />
      <RoutePath
        variant="hero"
        className="absolute inset-x-0 bottom-0 top-auto z-0 h-[42%] w-full md:top-1/2 md:h-[60%] md:-translate-y-1/2"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_50%,transparent_0%,var(--background)_100%)]"
      />

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
      <RoutePath
        variant="konzept"
        className="absolute inset-y-0 left-0 z-0 h-full w-10 sm:left-4 sm:w-16 lg:left-[7%] lg:w-40"
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

export function JagdFeatures() {
  return (
    <section
      id="eckdaten"
      className="relative overflow-hidden border-t border-border/50 py-14 sm:py-20 lg:py-24"
    >
      <div className="relative z-10 mx-auto max-w-[1140px] px-4 sm:px-6">
        <Reveal>
          <p className="eyebrow">03 — Spielprinzip</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
            {FEATURES_SECTION.heading}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            {FEATURES_SECTION.sub}
          </p>
        </Reveal>

        {/* Mobil: kompakte Zeilen an einer schmalen Routenlinie */}
        <div className="relative mt-8 sm:hidden">
          <span
            aria-hidden="true"
            className="absolute bottom-4 left-[5px] top-4 w-px bg-primary/50"
          />
          <ul className="relative">
            {FEATURES.map((f, i) => (
              <Reveal
                as="li"
                key={f.num}
                delay={i * 70}
                className={`flex gap-4 py-6 pl-6 ${
                  i < FEATURES.length - 1 ? "border-b border-border/50" : ""
                }`}
              >
                <span className="relative -ml-6 w-6 shrink-0 pt-[3px]">
                  <span
                    aria-hidden="true"
                    className="absolute left-[2px] top-[9px] h-[7px] w-[7px] rounded-full bg-primary"
                  />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="font-display text-sm font-semibold tracking-[0.2em] text-primary">
                    {f.num}
                  </span>
                  <h3 className="mt-1 font-display text-2xl font-bold uppercase leading-tight">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                </span>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* Desktop / Tablet: 2 × 2 mit feinen Trennlinien */}
        <div className="mt-12 hidden border-t border-border/50 sm:grid sm:grid-cols-2">
          {FEATURES.map((f, i) => (
            <Reveal
              key={f.num}
              delay={i * 70}
              className={`relative border-b border-border/50 px-6 py-9 lg:px-10 lg:py-11 ${
                i % 2 === 0 ? "sm:border-r sm:border-border/50" : ""
              }`}
            >
              <span
                aria-hidden="true"
                className="absolute -left-[3px] top-[38px] hidden h-[7px] w-[7px] rounded-full bg-primary sm:block"
              />
              <span className="font-display text-sm font-semibold tracking-[0.24em] text-primary">
                {f.num}
              </span>
              <h3 className="mt-2 font-display text-3xl font-bold uppercase leading-tight lg:text-4xl">
                {f.title}
              </h3>
              <p className="mt-4 max-w-[42ch] text-base leading-relaxed text-muted-foreground">
                {f.text}
              </p>
            </Reveal>
          ))}
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
      <RoutePath
        variant="outro"
        className="absolute inset-x-0 top-0 z-0 h-full w-full"
      />
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
