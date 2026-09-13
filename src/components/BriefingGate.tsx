import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { unlockBriefing } from "@/lib/briefing.functions";
import type { Briefing, BriefingGroup } from "@/content/briefing-types";
import { BriefingView } from "@/components/BriefingView";
import { Logo } from "@/components/Logo";

const LABEL: Record<BriefingGroup, string> = {
  laeufer: "INTERN // LÄUFER",
  sucher: "INTERN // SUCHER",
};

export function BriefingGate({ group }: { group: BriefingGroup }) {
  const unlock = useServerFn(unlockBriefing);
  const [briefing, setBriefing] = useState<Briefing | null>(null);
  const [password, setPassword] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const storageKey = `uv-briefing-${group}`;

  // Bereits in dieser Browser-Sitzung freigeschaltet? Dann Inhalt erneut laden.
  useEffect(() => {
    const saved = sessionStorage.getItem(storageKey);
    if (!saved) return;
    let active = true;
    unlock({ data: { group, password: saved } })
      .then((res) => {
        if (!active) return;
        if (res.ok) setBriefing(res.briefing);
        else sessionStorage.removeItem(storageKey);
      })
      .catch(() => sessionStorage.removeItem(storageKey));
    return () => {
      active = false;
    };
  }, [group, storageKey, unlock]);

  if (briefing) return <BriefingView briefing={briefing} />;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setError(null);
    try {
      const res = await unlock({ data: { group, password } });
      if (res.ok) {
        sessionStorage.setItem(storageKey, password);
        setBriefing(res.briefing);
      } else {
        setError(res.error);
      }
    } catch {
      setError("Das hat nicht geklappt. Bitte versuche es erneut.");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-16 sm:px-6">
      <div className="w-full max-w-md">
        <Link to="/" className="inline-flex">
          <Logo style={{ width: "clamp(150px, 44vw, 220px)" }} />
        </Link>
        <p className="eyebrow mt-8 text-primary">{LABEL[group]}</p>
        <h1 className="mt-3 font-display text-3xl font-bold uppercase sm:text-4xl">
          Briefing geschützt
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Dieser Bereich ist ausschließlich für die Teilnehmer der ersten Jagd bestimmt.
        </p>

        <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-4">
          <label htmlFor="briefing-pw" className="eyebrow">
            Passwort
          </label>
          <input
            id="briefing-pw"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="min-h-[52px] w-full rounded-sm border border-border bg-background px-4 text-base text-foreground outline-none transition-colors focus:border-primary"
          />
          {error && (
            <p role="alert" className="text-sm text-primary">
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={pending}
            className="inline-flex min-h-[52px] items-center justify-center rounded-sm border border-primary bg-primary px-6 font-display text-lg font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {pending ? "PRÜFE …" : "BRIEFING ÖFFNEN"}
          </button>
        </form>

        <Link
          to="/"
          className="mt-8 inline-flex min-h-[44px] items-center text-sm text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
        >
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}
