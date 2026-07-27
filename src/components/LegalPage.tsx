import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <SiteHeader onHome={false} />
      <main className="pt-28 pb-24">
        <article className="mx-auto max-w-2xl px-4 sm:px-6">
          <h1 className="font-display text-4xl font-bold sm:text-6xl">{title}</h1>
          <div className="mt-10 flex flex-col gap-6 text-[0.95rem] leading-relaxed text-muted-foreground [&_a]:text-primary [&_a]:underline-offset-4 hover:[&_a]:underline [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h3]:font-display [&_h3]:text-xl [&_h3]:text-foreground [&_li]:ml-5 [&_li]:list-disc [&_strong]:font-semibold [&_strong]:text-foreground">
            {children}
          </div>
          <p className="mt-14">
            <Link
              to="/"
              className="inline-flex min-h-[44px] items-center rounded-sm border border-primary px-5 font-display text-lg uppercase tracking-[0.12em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Zurück zur Startseite
            </Link>
          </p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
