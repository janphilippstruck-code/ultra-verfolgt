import { useEffect, useState } from "react";
import { COUNTDOWN, EVENT_END_UTC, EVENT_START_UTC } from "@/content/site";

type State =
  | { phase: "before"; days: number; hours: number; minutes: number; seconds: number }
  | { phase: "running" }
  | { phase: "after" };

function compute(now: number): State {
  if (now >= EVENT_END_UTC) return { phase: "after" };
  if (now >= EVENT_START_UTC) return { phase: "running" };
  const diff = Math.max(0, EVENT_START_UTC - now);
  const s = Math.floor(diff / 1000);
  return {
    phase: "before",
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex min-w-[68px] flex-col items-center sm:min-w-[92px]">
      <span className="font-display text-4xl font-bold leading-none tabular-nums text-foreground sm:text-6xl lg:text-7xl">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-2 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground sm:text-xs">
        {label}
      </span>
    </div>
  );
}

export function Countdown({ className = "" }: { className?: string }) {
  const [state, setState] = useState<State | null>(null);

  useEffect(() => {
    setState(compute(Date.now()));
    const id = window.setInterval(() => setState(compute(Date.now())), 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <p className="eyebrow text-primary">
        {state === null || state.phase === "before" ? COUNTDOWN.label : "SEASON 1"}
      </p>

      <div className="mt-4 min-h-[84px] sm:min-h-[112px]">
        {state === null ? null : state.phase === "before" ? (
          <div
            className="flex items-start justify-center divide-x divide-border/60"
            role="timer"
            aria-live="off"
          >
            <div className="px-2 sm:px-5">
              <Unit value={state.days} label={COUNTDOWN.units.days} />
            </div>
            <div className="px-2 sm:px-5">
              <Unit value={state.hours} label={COUNTDOWN.units.hours} />
            </div>
            <div className="px-2 sm:px-5">
              <Unit value={state.minutes} label={COUNTDOWN.units.minutes} />
            </div>
            <div className="px-2 sm:px-5">
              <Unit value={state.seconds} label={COUNTDOWN.units.seconds} />
            </div>
          </div>
        ) : (
          <p className="font-display text-3xl font-bold uppercase tracking-[0.06em] text-primary sm:text-5xl">
            {state.phase === "running" ? COUNTDOWN.running : COUNTDOWN.finished}
          </p>
        )}
      </div>
    </div>
  );
}
