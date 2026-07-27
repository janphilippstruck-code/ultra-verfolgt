/**
 * Routenmotiv – bewusst reduziert.
 * Nur noch der Zeitstrahl nutzt eine durchgehende Route.
 * Rein visuell: pointer-events-none + aria-hidden.
 */

type Variant = "timeline";

type Segment = {
  viewBox: string;
  d: string;
  len: number;
};

const SEGMENTS: Record<Variant, { desktop: Segment; mobile: Segment }> = {
  timeline: {
    desktop: {
      viewBox: "0 0 1200 120",
      d: "M 0 34 C 150 22, 230 44, 380 32 S 620 20, 780 34 S 1020 44, 1200 28",
      len: 1400,
    },
    mobile: {
      viewBox: "0 0 40 1000",
      d: "M 20 0 C 6 140, 34 260, 18 400 S 4 640, 22 780 S 34 900, 18 1000",
      len: 1100,
    },
  },
};

function Segment({ seg, animated }: { seg: Segment; animated: boolean }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className="h-full w-full"
      viewBox={seg.viewBox}
      preserveAspectRatio="none"
      fill="none"
    >
      <path
        d={seg.d}
        stroke="var(--color-primary)"
        strokeWidth={3}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        className={animated ? "route-draw" : undefined}
        style={{ ["--route-len" as string]: String(seg.len) }}
      />
    </svg>
  );
}

export function RoutePath({
  variant,
  className = "",
  animated = true,
}: {
  variant: Variant;
  className?: string;
  animated?: boolean;
}) {
  const { desktop, mobile } = SEGMENTS[variant];
  return (
    <div aria-hidden="true" className={`pointer-events-none ${className}`}>
      <div className="hidden h-full w-full opacity-90 md:block">
        <Segment seg={desktop} animated={animated} />
      </div>
      <div className="h-full w-full opacity-80 md:hidden">
        <Segment seg={mobile} animated={animated} />
      </div>
    </div>
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
