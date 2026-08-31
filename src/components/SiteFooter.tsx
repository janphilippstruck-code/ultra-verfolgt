import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { BALLONLAEUFER, SITE } from "@/content/site";
import ballonLogo from "@/assets/ballonlaeufer-logo.png.asset.json";

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
        <div className="flex flex-col items-center gap-4 md:items-end">
          <a
            href={BALLONLAEUFER.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-[44px] items-center gap-3 rounded-sm border border-border/60 px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <img
              src={ballonLogo.url}
              alt={BALLONLAEUFER.logoAlt}
              className="h-7 w-auto object-contain"
              loading="lazy"
              decoding="async"
            />
            <span className="underline-offset-4 group-hover:underline">
              {BALLONLAEUFER.label} ↗
            </span>
          </a>
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
      </div>
    </footer>
  );
}
