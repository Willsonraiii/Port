import { useState } from "react";

interface RealImgProps {
  /** Path to Willson's original, unmodified photo (served from /photos). */
  real: string;
  /** Bundled stand-in used only until the original is in place. */
  fallback: string;
  alt: string;
  className?: string;
}

/**
 * Always prefers the original uploaded photo. If the file isn't present
 * yet (e.g. single-file preview), it silently falls back to the bundled
 * stand-in so the layout never breaks.
 */
export function RealImg({ real, fallback, alt, className }: RealImgProps) {
  const [src, setSrc] = useState(real);
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => {
        if (src !== fallback) setSrc(fallback);
      }}
    />
  );
}
