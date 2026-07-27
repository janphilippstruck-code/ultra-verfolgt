/**
 * Dekorative, durchgehende Routen-Segmente.
 * Jedes Segment endet optisch dort, wo das nächste beginnt.
 * Rein visuell: pointer-events-none + aria-hidden.
 */

type Variant = "hero" | "konzept" | "timeline" | "outro";

type Segment = {
  viewBox: string;
  d: string;
  nodes?: [number, number][];
  pin?: [number, number];
  len: number;
};

const SEGMENTS: Record<Variant, { desktop: Segment; mobile: Segment }> = {
  hero: {
    desktop: {
      viewBox: "0 0 1200 400",
      d: "M -20 330 C 130 300, 190 190, 330 220 S 520 350, 660 270 S 850 130, 1010 210 S 1150 320, 1230 250",
      nodes: [
        [330, 220],
        [660, 270],
        [1010, 210],
      ],
      len: 1800,
    },
    mobile: {
      viewBox: "0 0 400 600",
      d: "M 20 -20 C 40 90, 10 150, 40 230 S 80 340, 40 430 S 20 540, 60 620",
      nodes: [
        [40, 230],
        [40, 430],
      ],
      len: 900,
    },
  },
  konzept: {
    desktop: {
      viewBox: "0 0 200 1200",
      d: "M 130 -20 C 60 110, 150 230, 90 360 S 20 560, 110 700 S 170 880, 90 1030 S 60 1150, 120 1230",
      nodes: [
        [90, 360],
        [110, 700],
      ],
      len: 1500,
    },
    mobile: {
      viewBox: "0 0 60 1000",
      d: "M 40 -20 C 10 120, 50 240, 20 380 S 50 620, 25 780 S 10 900, 40 1020",
      nodes: [[20, 380]],
      len: 1200,
    },
  },
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
  outro: {
    desktop: {
      viewBox: "0 0 1200 320",
      d: "M -20 60 C 160 120, 300 40, 460 110 S 700 230, 860 170 S 1020 120, 1080 190",
      nodes: [
        [460, 110],
        [860, 170],
      ],
      pin: [1080, 190],
      len: 1400,
    },
    mobile: {
      viewBox: "0 0 400 420",
      d: "M 30 -10 C 60 90, 20 150, 60 230 S 130 320, 200 340",
      nodes: [[60, 230]],
      pin: [200, 340],
      len: 700,
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
      {seg.nodes?.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={2}
          fill="var(--color-background)"
          stroke="var(--color-primary)"
          strokeWidth={3}
          vectorEffect="non-scaling-stroke"
        />
      ))}
      {seg.pin && (
        <g transform={`translate(${seg.pin[0] - 9} ${seg.pin[1] - 20})`}>
          <path
            d="M9 20s7-6.2 7-11.4A7 7 0 1 0 2 8.6C2 13.8 9 20 9 20Z"
            fill="var(--color-primary)"
            vectorEffect="non-scaling-stroke"
          />
          <circle cx="9" cy="8.4" r="2.4" fill="var(--color-background)" />
        </g>
      )}
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
      <div className="hidden h-full w-full opacity-60 md:block">
        <Segment seg={desktop} animated={animated} />
      </div>
      <div className="h-full w-full opacity-50 md:hidden">
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
