/** Dekorative, abstrakte GPS-Route. Rein visuell. */
export function RoutePath({
  className = "",
  variant = "hero",
  animated = true,
}: {
  className?: string;
  variant?: "hero" | "section" | "outro";
  animated?: boolean;
}) {
  const paths: Record<string, string> = {
    hero: "M -20 300 C 120 250, 180 120, 320 160 S 520 320, 660 250 S 840 90, 1020 190 S 1180 340, 1320 260",
    section:
      "M 60 -20 C 20 120, 160 200, 120 330 S 20 520, 90 660 S 180 820, 110 980 S 40 1120, 120 1240",
    outro: "M -20 200 C 140 120, 260 260, 420 200 S 640 60, 800 150 S 950 250, 1020 150",
  };

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className={className}
      viewBox={variant === "section" ? "0 0 200 1260" : "0 0 1200 400"}
      preserveAspectRatio={variant === "section" ? "none" : "xMidYMid slice"}
      fill="none"
    >
      <path
        d={paths[variant]}
        stroke="var(--color-primary)"
        strokeWidth={variant === "section" ? 2 : 2.5}
        strokeLinecap="round"
        strokeOpacity="0.55"
        className={animated ? "route-draw" : undefined}
        style={{ ["--route-len" as string]: "3000" }}
      />
    </svg>
  );
}

/** Dezenter Standortmarker. */
export function MapPin({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}
