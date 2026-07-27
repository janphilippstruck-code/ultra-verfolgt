import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { SITE } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-3">
          <Logo className="h-9 w-auto" />
          <p className="font-display text-base uppercase tracking-[0.16em] text-muted-foreground">
            {SITE.fullName}
          </p>
        </div>
        <nav aria-label="Rechtliche Hinweise">
          <ul className="flex flex-wrap items-center gap-6">
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
