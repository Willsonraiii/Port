import { useEffect, useState } from "react";
import { IG_URL, WA_URL, WA_PATH, IG_PATH } from "./Sections";
import { cn } from "@/utils/cn";

/** Sticky WhatsApp + Instagram bubbles, visible once past the hero. */
export function FloatingContact() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = [
    {
      label: "Chat on WhatsApp",
      href: WA_URL,
      path: WA_PATH,
      cls: "bg-leaf shadow-leaf/30 hover:bg-[#1aa851]",
    },
    {
      label: "Follow on Instagram",
      href: IG_URL,
      path: IG_PATH,
      cls: "bg-[linear-gradient(45deg,#f9ce34,#ee2a7b,#6228d7)] shadow-[#ee2a7b]/30 hover:brightness-110",
    },
  ];

  return (
    <div
      className={cn(
        "fixed bottom-5 right-5 z-50 flex flex-col gap-3 transition-all duration-500",
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      )}
    >
      {items.map((it, i) => (
        <a
          key={it.label}
          href={it.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={it.label}
          title={it.label}
          className={cn(
            "group grid h-12 w-12 place-items-center rounded-full text-white shadow-xl transition-all duration-300 hover:-translate-y-1 active:scale-95",
            it.cls
          )}
          style={{ transitionDelay: show ? `${i * 70}ms` : "0ms" }}
        >
          {i === 0 && (
            <span className="absolute inline-flex h-12 w-12 animate-ping rounded-full bg-leaf/40 [animation-duration:2.6s]" />
          )}
          <svg viewBox="0 0 24 24" className="relative h-5 w-5" fill="currentColor">
            <path d={it.path} />
          </svg>
        </a>
      ))}
    </div>
  );
}
