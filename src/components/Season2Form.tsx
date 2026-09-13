import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { submitSeason2Interest } from "@/lib/season2.functions";
import { SEASON2 } from "@/content/site";

const ROLES = [
  { value: "laeufer", label: "Läufer" },
  { value: "sucher", label: "Sucher" },
  { value: "beides", label: "Beides" },
] as const;

const inputClass =
  "min-h-[48px] w-full rounded-sm border border-border bg-background px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";

export function Season2Form() {
  const submit = useServerFn(submitSeason2Interest);
  const [role, setRole] = useState<(typeof ROLES)[number]["value"]>("laeufer");
  const [hasPartner, setHasPartner] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="border border-primary/60 bg-surface/40 p-6 sm:p-10">
        <h3 className="font-display text-2xl font-bold text-primary sm:text-4xl">
          {SEASON2.successHeading}
        </h3>
        <div className="mt-4 flex flex-col gap-2">
          {SEASON2.successText.map((t) => (
            <p key={t} className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              {t}
            </p>
          ))}
        </div>
      </div>
    );
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setError(null);
    setPending(true);
    try {
      const res = await submit({
        data: {
          name: String(form.get("name") ?? ""),
          email: String(form.get("email") ?? ""),
          role,
          hasPartner,
          message: String(form.get("message") ?? ""),
          privacyConsent: form.get("privacy") === "on",
          website: String(form.get("website") ?? ""),
        },
      });
      if (res.ok) setDone(true);
      else setError(res.error);
    } catch {
      setError("Das hat leider nicht geklappt. Bitte versuche es später erneut.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="border border-border/60 bg-surface/30 p-5 sm:p-8">
      <div className="flex flex-col gap-6">
        <div>
          <label htmlFor="s2-name" className="eyebrow block">
            Name
          </label>
          <input id="s2-name" name="name" required autoComplete="name" className={`${inputClass} mt-2`} />
        </div>

        <div>
          <label htmlFor="s2-email" className="eyebrow block">
            E-Mail
          </label>
          <input
            id="s2-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={`${inputClass} mt-2`}
          />
        </div>

        <fieldset>
          <legend className="eyebrow">Ich interessiere mich für</legend>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {ROLES.map((r) => (
              <button
                key={r.value}
                type="button"
                onClick={() => setRole(r.value)}
                aria-pressed={role === r.value}
                className={`min-h-[48px] rounded-sm border px-2 font-display text-base uppercase tracking-[0.1em] transition-colors ${
                  role === r.value
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="eyebrow">Ich habe bereits einen Team-Partner</legend>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {[
              { v: true, l: "Ja" },
              { v: false, l: "Nein" },
            ].map((o) => (
              <button
                key={o.l}
                type="button"
                onClick={() => setHasPartner(o.v)}
                aria-pressed={hasPartner === o.v}
                className={`min-h-[48px] rounded-sm border px-2 font-display text-base uppercase tracking-[0.1em] transition-colors ${
                  hasPartner === o.v
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {o.l}
              </button>
            ))}
          </div>
        </fieldset>

        <div>
          <label htmlFor="s2-message" className="eyebrow block">
            Erzähl uns kurz etwas über dich (optional)
          </label>
          <textarea id="s2-message" name="message" rows={4} className={`${inputClass} mt-2 resize-y`} />
        </div>

        {/* Honeypot */}
        <div aria-hidden="true" className="hidden">
          <label htmlFor="s2-website">Website</label>
          <input id="s2-website" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-muted-foreground">
          <input
            type="checkbox"
            name="privacy"
            required
            className="mt-1 h-5 w-5 shrink-0 accent-[var(--color-primary)]"
          />
          <span>
            {SEASON2.consent.replace(" Weitere Informationen finde ich in der Datenschutzerklärung.", " ")}
            Weitere Informationen finde ich in der{" "}
            <Link to="/datenschutz" className="text-primary underline underline-offset-4">
              Datenschutzerklärung
            </Link>
            .
          </span>
        </label>

        {error && (
          <p role="alert" className="border border-destructive/60 px-4 py-3 text-sm text-foreground">
            {error}
          </p>
        )}

        <div>
          <button
            type="submit"
            disabled={pending}
            className="inline-flex min-h-[52px] w-full items-center justify-center rounded-sm border border-primary bg-primary px-7 font-display text-lg font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto"
          >
            {pending ? "WIRD GESENDET …" : SEASON2.submit}
          </button>
          <p className="mt-3 max-w-[52ch] text-xs leading-relaxed text-muted-foreground">
            {SEASON2.disclaimer}
          </p>
        </div>
      </div>
    </form>
  );
}
