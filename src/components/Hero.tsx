import { useEffect, useRef } from "react";
import {
  ChevronDown,
  PenTool,
  LayoutTemplate,
  Coffee,
  Droplets,
  Users,
  Camera,
  Download,
  Mail,
} from "lucide-react";
import pouring from "@/assets/pouring.jpg";
import portrait from "@/assets/portrait.jpg";
import { BaristaMark } from "./BaristaMark";
import { RealImg } from "./RealImg";
import { downloadCV } from "@/utils/cv";
import { EXPERIENCE } from "@/data";
import { cn } from "@/utils/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#top" className={cn("group flex items-center gap-3", className)}>
      {/* the BARISTA square mark, ringed in the pitcher's chrome */}
      <span className="relative shrink-0">
        <span className="absolute -inset-[2px] rounded-xl bg-[conic-gradient(from_210deg,#2b6bff,#8b5cf6,#e11d2f,#f5b301,#22d3ee,#2b6bff)] opacity-90 transition-all duration-500 group-hover:opacity-100 group-hover:[transform:rotate(20deg)_scale(1.06)]" />
        <span className="relative grid h-11 w-11 place-items-center rounded-[10px] bg-ink">
          <BaristaMark className="h-7 w-7 text-paper transition-transform duration-500 group-hover:scale-105" />
        </span>
      </span>
      <span className="leading-none">
        <span className="block font-body text-[1.3rem] font-extrabold tracking-tight text-paper">
          Willson <span className="text-crimson">Rai</span>
        </span>
        <span className="mt-1 block font-cond text-[8.5px] font-medium tracking-[0.32em] text-mist">
          HEAD BARISTA · CREATIVE
        </span>
      </span>
    </a>
  );
}

/* ---------- floating work cards ---------- */

function JourneyCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-lg border border-white/10 bg-ink p-5 text-left shadow-[0_30px_70px_-20px_rgba(0,0,0,0.8)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-18px_rgba(225,29,47,0.35)]",
        className
      )}
    >
      <p className="font-cond text-[9px] font-medium tracking-[0.4em] text-crimson">
        THE JOURNEY SO FAR
      </p>
      <h4 className="mt-1.5 font-cond text-[15px] font-semibold uppercase leading-snug text-paper">
        Three bars, <span className="text-crimson">one craft</span>
      </h4>
      <ul className="mt-4 space-y-0">
        {EXPERIENCE.map((job, i) => (
          <li key={job.period} className="relative flex gap-3 pb-4 last:pb-0">
            {i < EXPERIENCE.length - 1 && (
              <span className="absolute left-[3px] top-3 h-full w-px border-l border-dashed border-white/25" />
            )}
            <span className="relative mt-1.5 h-[7px] w-[7px] shrink-0 rotate-45 bg-crimson" />
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-2">
                <p className="truncate font-cond text-xs font-semibold text-paper">
                  {job.role}
                </p>
                <p className="shrink-0 font-cond text-[8.5px] tracking-[0.12em] text-ash">
                  {job.period.toUpperCase()}
                </p>
              </div>
              <p className="truncate text-[9.5px] text-mist">{job.place}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-2.5 font-cond text-[8.5px] tracking-[0.22em] text-ash">
        <span>7 YEARS</span>
        <span className="text-crimson">10K+ CUPS</span>
        <span>∞ CURIOSITY</span>
      </div>
    </div>
  );
}

function ResumeCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "card-crimson relative overflow-hidden rounded-lg border border-white/10 p-5 text-center shadow-[0_30px_70px_-20px_rgba(0,0,0,0.85)] transition-all duration-500 hover:-translate-y-2",
        className
      )}
    >
      <Coffee className="absolute left-3 top-16 h-5 w-5 text-white/10" />
      <Droplets className="absolute right-4 top-24 h-5 w-5 text-white/10" />
      <Users className="absolute left-5 bottom-28 h-5 w-5 text-white/10" />
      <Camera className="absolute right-5 bottom-20 h-5 w-5 text-white/10" />
      <BaristaMark className="absolute -bottom-5 -right-4 h-24 w-24 text-white/[0.08]" />
      <p className="font-cond text-sm font-medium tracking-[0.35em] text-paper/90">
        WILLSON RAI
      </p>
      <h4 className="mx-auto mt-3 max-w-[230px] text-[15px] font-bold leading-snug text-paper">
        Seven years behind the bar — the whole story on one page
      </h4>
      <p className="mx-auto mt-3 max-w-[220px] text-[11px] leading-relaxed text-paper/75">
        Experience, mastery levels, certifications and freelance services — ready to
        send straight to your venue.
      </p>
      <button
        onClick={downloadCV}
        className="mx-auto mt-4 flex w-fit items-center gap-2 rounded-md bg-paper px-4 py-2.5 font-cond text-xs font-semibold tracking-[0.15em] text-wine shadow-lg shadow-black/30 transition-transform hover:scale-[1.04]"
      >
        DOWNLOAD MY CV
        <Download className="h-4 w-4" />
      </button>
      <p className="mt-2.5 font-cond text-[9px] tracking-[0.3em] text-paper/80">
        • PDF · UPDATED 2026
      </p>
      <span className="mx-auto mt-4 grid h-16 w-16 place-items-center rounded-full bg-ink/40 ring-2 ring-white/30">
        <BaristaMark className="h-10 w-10 text-paper/90" />
      </span>
    </div>
  );
}

function EventsCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "group relative h-[250px] overflow-hidden rounded-lg border border-white/10 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.85)] transition-all duration-500 hover:-translate-y-2",
        className
      )}
    >
      <RealImg
        real="/photos/portrait.jpg"
        fallback={portrait}
        alt="Willson Rai seated in a heritage room in Lalitpur"
        className="absolute inset-0 h-full w-full object-cover object-[50%_30%] transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-wine/95 via-crimson/80 to-crimson/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
      <span className="stroke-thin pointer-events-none absolute -bottom-4 right-3 font-display text-[110px] leading-none">
        WR
      </span>
      <div className="relative z-10 flex h-full flex-col justify-between p-5">
        <h4 className="max-w-[65%] text-lg font-extrabold leading-tight text-paper">
          Pour with a pro — bring Willson to your bar
        </h4>
        <div>
          <p className="w-fit bg-wine/85 px-2 py-1 font-cond text-[8.5px] font-medium tracking-[0.18em] text-paper">
            AVAILABLE FOR GUEST SHIFTS, EVENTS &amp; CAFÉ COLLABS
          </p>
          <a
            href="mailto:resume@willsonrai.com.np?subject=Guest%20barista%20enquiry"
            className="mt-2.5 flex w-fit items-center gap-2 rounded-md bg-paper px-4 py-2 font-cond text-[11px] font-semibold tracking-[0.15em] text-wine shadow-lg shadow-black/40 transition-transform hover:scale-[1.04]"
          >
            EMAIL WILLSON
            <Mail className="h-3.5 w-3.5" />
          </a>
          <p className="mt-1.5 font-cond text-[8.5px] tracking-[0.28em] text-paper/85">
            • REPLIES WITHIN 24H
          </p>
        </div>
      </div>
    </div>
  );
}

/* ---------- hero ---------- */

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const nodes = Array.from(el.querySelectorAll<HTMLElement>("[data-depth]"));
    if (!nodes.length) return;
    let raf = 0;
    const apply = (dx: number, dy: number) => {
      nodes.forEach((node) => {
        const d = Number(node.dataset.depth) || 0;
        node.style.transform = `translate3d(${dx * d}px, ${dy * d}px, 0)`;
      });
    };

    if (window.matchMedia("(pointer: fine)").matches) {
      const onMove = (e: MouseEvent) => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          const { innerWidth, innerHeight } = window;
          apply(
            (e.clientX / innerWidth - 0.5) * 2,
            (e.clientY / innerHeight - 0.5) * 2
          );
        });
      };
      el.addEventListener("mousemove", onMove);
      return () => {
        el.removeEventListener("mousemove", onMove);
        cancelAnimationFrame(raf);
      };
    }

    // touch devices: gentle scroll-driven drift keeps the collage alive
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const p = Math.min(1, window.scrollY / (window.innerHeight || 1));
        apply(0, p * -0.6);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const wrap = (depth: number, float: string, pos: string, child: React.ReactNode) => (
    <div data-depth={depth} className={cn("transition-transform duration-300 ease-out", pos)}>
      <div className={float}>{child}</div>
    </div>
  );

  return (
    <section
      id="top"
      ref={sectionRef}
      className="grid-bg relative min-h-svh overflow-hidden pb-20 pt-24 lg:h-svh lg:min-h-[860px] lg:pb-0 lg:pt-0"
    >
      {/* ambient glows */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[560px] w-[560px] rounded-full bg-[radial-gradient(closest-side,rgba(43,107,255,0.28),transparent)]" />
      <div className="pointer-events-none absolute -right-32 top-0 h-[480px] w-[480px] rounded-full bg-[radial-gradient(closest-side,rgba(225,29,47,0.14),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_40%,transparent_55%,rgba(0,0,0,0.5))]" />

      {/* blue accent bar */}
      <div className="absolute left-0 top-24 z-20 h-32 w-5 bg-blue lg:top-28 lg:h-44 lg:w-8" />

      {/* giant repeated outline type */}
      <div className="pointer-events-none absolute left-0 top-[13%] z-0 select-none leading-[0.99]">
        {["stroke-dim", "stroke-mid", "stroke-red", "stroke-paper"].map((s) => (
          <div
            key={s}
            className={cn(
              "font-display uppercase tracking-[-0.02em] text-[17vw] lg:text-[10.2vw]",
              s
            )}
          >
            7 Years
          </div>
        ))}
      </div>

      {/* dashed connectors */}
      <svg
        className="pointer-events-none absolute inset-0 z-10 hidden h-full w-full opacity-70 lg:block"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="none"
      >
        <g stroke="rgba(244,241,234,0.55)" strokeWidth="1.5" strokeDasharray="4 7">
          <path d="M290 430 V 386 H 470" />
          <path d="M880 512 H 1016 V 592" />
          <path d="M262 772 H 420" />
          <path d="M1016 300 V 240" />
        </g>
        <g fill="#262626" stroke="rgba(244,241,234,0.85)" strokeWidth="1.5">
          <rect x="284" y="424" width="12" height="12" />
          <rect x="1010" y="506" width="12" height="12" />
          <rect x="256" y="766" width="12" height="12" />
        </g>
      </svg>

      {/* right-side ornaments */}
      <div className="absolute right-[8%] top-[37%] z-10 hidden flex-col items-center gap-3 lg:flex">
        <span className="h-4 w-4 rotate-45 border-2 border-paper/80" />
        <span className="h-4 w-4 rotate-45 bg-paper/90" />
      </div>
      <svg
        className="absolute right-[1%] top-[46%] z-10 hidden text-paper/70 lg:block"
        width="92"
        height="46"
        viewBox="0 0 92 46"
        fill="none"
      >
        {[0, 16, 32, 48, 64].map((x) => (
          <ellipse key={x} cx={14 + x} cy="23" rx="13" ry="21" stroke="currentColor" strokeWidth="1.6" />
        ))}
      </svg>

      {/* signature tick marks */}
      <div
        className="absolute right-8 top-24 z-20 hidden items-end gap-3 lg:flex"
        aria-hidden
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="w-px bg-paper/70"
            style={{ height: i % 2 ? 18 : 26 }}
          />
        ))}
      </div>

      {/* collage body */}
      <div className="relative z-20 mx-auto mt-10 max-w-7xl px-6 lg:mt-0 lg:h-full lg:max-w-none lg:px-0">
        {/* portrait cluster */}
        {wrap(
          -8,
          "float-a",
          "relative z-20 mx-auto w-fit lg:absolute lg:right-[15%] lg:top-[9%]",
          <div className="relative">
            <div className="stripes spin-slow absolute -left-10 -top-8 h-[300px] w-[300px] rounded-full opacity-90 lg:h-[340px] lg:w-[340px]" />
            <div className="metal absolute -right-2 -top-2 h-full w-full rounded-[32px]" />
            <RealImg
              real="/photos/pouring.png"
              fallback={pouring}
              alt="Willson Rai pouring a tulip rosetta from his rainbow pitcher"
              className="relative h-[300px] w-[260px] rounded-[28px] object-cover object-[50%_35%] shadow-2xl ring-1 ring-white/25 lg:h-[315px] lg:w-[280px]"
            />
            <div className="absolute -bottom-9 -right-4 flex items-center gap-3 rounded-xl border border-crimson/60 bg-white/[0.07] px-5 py-3.5 shadow-xl backdrop-blur-md lg:-right-14">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-crimson p-1 text-white">
                <BaristaMark className="h-full w-full" />
              </span>
              <div className="leading-none">
                <p className="font-cond text-xl font-semibold tracking-wide text-crimson">
                  SPECIALTY COFFEE
                </p>
                <p className="mt-1 font-cond text-[9px] tracking-[0.3em] text-paper/70">
                  HEAD BARISTA · LALITPUR, NEPAL
                </p>
              </div>
            </div>
          </div>
        )}

        {/* floating work cards */}
        {wrap(
          10,
          "float-b",
          "relative z-10 mx-auto mt-16 w-full max-w-[380px] lg:absolute lg:left-[4%] lg:top-[46%] lg:mt-0 lg:w-[375px]",
          <JourneyCard className="lg:-rotate-1" />
        )}
        {wrap(
          16,
          "float-c",
          "relative z-30 mx-auto mt-10 w-full max-w-[310px] lg:absolute lg:left-[31%] lg:top-[37%] lg:mt-0 lg:w-[300px]",
          <ResumeCard />
        )}
        {wrap(
          12,
          "float-b",
          "relative z-20 mx-auto mt-10 w-full max-w-[520px] lg:absolute lg:right-[2%] lg:top-[59%] lg:mt-0 lg:w-[480px]",
          <EventsCard />
        )}

        {/* metal tool tiles */}
        {wrap(
          -6,
          "float-a",
          "relative z-20 mx-auto mt-14 flex w-fit items-end gap-4 lg:absolute lg:bottom-[6%] lg:left-[12%] lg:mt-0",
          <>
            <div className="metal grid h-24 w-24 place-items-center rounded-2xl lg:h-28 lg:w-28">
              <LayoutTemplate className="h-10 w-10 text-[#3a3d44]" strokeWidth={1.4} />
            </div>
            <div className="metal mb-8 grid h-20 w-20 place-items-center rounded-2xl lg:h-24 lg:w-24">
              <PenTool className="h-9 w-9 text-[#3a3d44]" strokeWidth={1.4} />
            </div>
          </>
        )}
      </div>

      {/* bottom-right blue square */}
      <div className="absolute bottom-0 right-0 z-20 h-10 w-10 bg-blue" />

      {/* scroll cue */}
      <a
        href="#about"
        className="absolute bottom-5 left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-mist transition-colors hover:text-paper lg:flex"
      >
        <span className="font-cond text-[10px] tracking-[0.4em]">SCROLL</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
