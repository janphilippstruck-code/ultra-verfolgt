import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { SITE } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 py-10 text-center sm:px-6 md:flex-row md:items-center md:justify-between md:gap-6 md:py-12 md:text-left">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <Logo style={{ width: "clamp(190px, 26vw, 300px)" }} />
          <p className="font-display text-sm uppercase tracking-[0.16em] text-muted-foreground sm:text-base">
            {SITE.fullName}
          </p>
        </div>
        <nav aria-label="Rechtliche Hinweise">
          <ul className="flex flex-wrap items-center justify-center gap-6">
            <li>
              <Link
                to="/impressum"
                className="inline-flex min-h-[44px] items-center text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
              >
                Impressum
              </Link>
            </li>
            <li>
              <Link
                to="/datenschutz"
                className="inline-flex min-h-[44px] items-center text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
              >
                Datenschutz
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
