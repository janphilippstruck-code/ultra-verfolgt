import logoAsset from "@/assets/ultra-verfolgt-logo.png.asset.json";
import { SITE } from "@/content/site";

/**
 * Offizielles Logo – einzige erlaubte Logodatei.
 * Wird unverändert in Navigation, Hero und Footer verwendet.
 * Keine Filter, kein Zuschnitt, keine Verzerrung.
 */
export function Logo({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <img
      src={logoAsset.url}
      alt={SITE.logoAlt}
      width={1049}
      height={332}
      draggable={false}
      className={`h-auto w-full object-contain ${className}`}
      style={style}
      loading="eager"
      decoding="async"
    />
  );
}
