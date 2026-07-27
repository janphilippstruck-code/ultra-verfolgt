import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { NAV_HIGHLIGHT, NAV_LINKS } from "@/content/site";

export function SiteHeader({ onHome = true }: { onHome?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const href = (hash: string) => (onHome ? hash : `/${hash}`);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-border/60 bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex min-h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:min-h-[6rem]">
        <Link
          to="/"
          className="flex shrink-0 items-center rounded-sm py-1"
          aria-label="Ultra Verfolgt – Startseite"
          onClick={() => setOpen(false)}
        >
          <Logo style={{ width: "clamp(150px, 18vw, 260px)" }} />
        </Link>


        <nav aria-label="Hauptnavigation" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={href(l.href)}
              className="font-display text-lg font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href={href(NAV_HIGHLIGHT.href)}
            className="inline-flex h-11 items-center rounded-sm border border-primary px-4 font-display text-lg font-semibold tracking-[0.1em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            {NAV_HIGHLIGHT.label}
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-border text-foreground md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile Navigation"
          className="border-t border-border/60 bg-background/95 px-4 pb-6 pt-2 backdrop-blur-md md:hidden"
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={href(l.href)}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[52px] items-center border-b border-border/40 font-display text-2xl uppercase tracking-[0.1em] text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href={href(NAV_HIGHLIGHT.href)}
                onClick={() => setOpen(false)}
                className="inline-flex min-h-[48px] items-center rounded-sm border border-primary px-5 font-display text-2xl tracking-[0.08em] text-primary"
              >
                {NAV_HIGHLIGHT.label}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
