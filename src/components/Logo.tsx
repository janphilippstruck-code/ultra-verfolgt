import logoAsset from "@/assets/ultra-verfolgt-logo.png.asset.json";
import { SITE } from "@/content/site";

/**
 * Logo-Komponente.
 * Die Bilddatei lässt sich zentral hier austauschen
 * (transparentes PNG oder SVG).
 */
export function Logo({ className = "" }: { className?: string }) {
  return <img src={logoAsset.url} alt={SITE.logoAlt} className={className} loading="eager" />;
}
