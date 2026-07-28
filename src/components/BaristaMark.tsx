import { cn } from "@/utils/cn";

/**
 * The BARISTA square mark — recreated from the logo etched on the pitcher:
 * a thin square frame enclosing B Λ R / I / S T Λ with a diagonal stroke.
 */
export function BaristaMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("text-paper", className)}
      fill="none"
      aria-hidden
    >
      <rect x="16" y="16" width="68" height="68" stroke="currentColor" strokeWidth="2.4" />
      {/* diagonal through the I */}
      <line x1="45" y1="42" x2="60" y2="66" stroke="currentColor" strokeWidth="1.6" />
      <g
        fill="currentColor"
        fontFamily="Oswald, sans-serif"
        fontWeight="300"
        textAnchor="middle"
      >
        <text x="50" y="40" fontSize="17" letterSpacing="6">
          BAR
        </text>
        <text x="50" y="58" fontSize="17" letterSpacing="0">
          I
        </text>
        <text x="50" y="76" fontSize="17" letterSpacing="6">
          STA
        </text>
      </g>
    </svg>
  );
}
