import { useState } from "react";
import {
  Gauge,
  Sparkles,
  FlaskConical,
  UtensilsCrossed,
  Users,
  Camera,
  PenTool,
  Video,
  GraduationCap,
  Award,
  BookOpen,
  Mail,
  MapPin,
  ArrowUpRight,
  ArrowUp,
  Plus,
  Coffee,
  Download,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { Logo } from "./Hero";
import { RealImg } from "./RealImg";
import { downloadCV } from "@/utils/cv";
import cup from "@/assets/cup.jpg";
import {
  MARQUEE,
  TRIO,
  EXPERIENCE,
  STATS,
  SERVICES,
  CREATIVE,
  FREELANCE,
  TRAINING,
  CERTS,
} from "@/data";
import { cn } from "@/utils/cn";

const ICONS: Record<string, React.ElementType> = {
  gauge: Gauge,
  art: Sparkles,
  flask: FlaskConical,
  menu: UtensilsCrossed,
  users: Users,
  camera: Camera,
  pen: PenTool,
  video: Video,
};

function Label({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 font-cond text-xs font-medium uppercase tracking-[0.4em] text-crimson">
      <span className="grid h-7 w-7 place-items-center border border-crimson/60 text-[10px]">
        {index}
      </span>
      {children}
      <span className="h-px w-12 bg-crimson/50" />
    </p>
  );
}

/* ---------------- marquee ---------------- */

export function Marquee() {
  const row = [...MARQUEE, ...MARQUEE];
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-ink py-5">
      <div className="marquee-track flex w-max items-center gap-8">
        {row.map((m, i) => (
          <span key={i} className="flex items-center gap-8">
            <span
              className={cn(
                "font-display text-2xl uppercase tracking-tight lg:text-3xl",
                i % 2 ? "stroke-red" : "text-paper/85"
              )}
            >
              {m}
            </span>
            <Coffee className="h-5 w-5 text-crimson" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- about ---------------- */

export function About() {
  return (
    <section id="about" className="grid-bg-sm relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(43,107,255,0.12),transparent)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-12">
        <Reveal>
          <Label index="01">About Me</Label>
          <h2 className="mt-6 font-display text-4xl uppercase leading-[1.05] tracking-tight text-paper sm:text-5xl lg:text-6xl">
            The Art of
            <br />
            <span className="stroke-paper">Every Cup</span>
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-mist">
            I'm Willson Rai, a passionate Head Barista and freelancer from Lalitpur,
            Nepal. With over seven years in the coffee and hospitality industry, I've
            grown from pulling my first espresso shot to leading teams, training new
            baristas, and creating visual identities for cafés and restaurants.
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-mist">
            Beyond the bar, I wear the hat of a creative freelancer — designing menus,
            crafting social media content, and building brand identities. Coffee and
            creativity flow through everything I do.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-cond text-xs tracking-[0.2em] text-paper/80">
              <MapPin className="h-3.5 w-3.5 text-crimson" /> LALITPUR, NEPAL
            </span>
            <span className="font-cond text-sm italic tracking-wide text-ash">
              — Willson Rai
            </span>
          </div>
        </Reveal>

        <Reveal delay={150} className="relative mx-auto w-fit">
          <div className="stripes absolute -left-8 -top-8 h-40 w-40 rounded-full opacity-70" />
          <div className="absolute -bottom-4 -right-4 h-full w-full rounded-[28px] border-2 border-crimson/70" />
          <RealImg
            real="/photos/cup.png"
            fallback={cup}
            alt="Tulip latte art poured by Willson Rai, resting on a granite café counter"
            className="relative h-[420px] w-[340px] rounded-[26px] object-cover shadow-2xl ring-1 ring-white/15 sm:w-[400px]"
          />
          <div className="absolute -left-6 bottom-10 rounded-xl border border-white/10 bg-ink/90 px-5 py-4 shadow-xl backdrop-blur">
            <p className="font-display text-3xl text-crimson">7+</p>
            <p className="mt-1 font-cond text-[10px] tracking-[0.25em] text-mist">
              YEARS BEHIND THE BAR
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- brew trio ---------------- */

export function Trio() {
  return (
    <section id="craft" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal className="max-w-2xl">
          <Label index="02">The Craft</Label>
          <h2 className="mt-6 font-display text-4xl uppercase tracking-tight text-paper sm:text-5xl">
            The <span className="stroke-red">Brew</span> Trio
          </h2>
          <p className="mt-5 text-mist">
            Seven years behind the bar, a cup that tells a story, and the bean that
            started it all — each rendered with the care of a slow pour.
          </p>
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {TRIO.map((t, i) => (
            <Reveal
              key={t.index}
              delay={i * 120}
              className={cn(i === 1 && "md:mt-12", i === 2 && "md:mt-24")}
            >
              <article className="group relative h-full overflow-hidden rounded-xl border border-white/10 bg-panel/50 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-crimson/50">
                <span className="stroke-mid font-display text-7xl transition-colors duration-500 group-hover:stroke-red">
                  {t.index}
                </span>
                <h3 className="mt-6 font-cond text-2xl font-semibold text-paper">
                  {t.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{t.body}</p>
                <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-crimson transition-transform duration-500 group-hover:scale-x-100" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- experience ---------------- */

export function Experience() {
  return (
    <section id="experience" className="grid-bg-sm relative py-24 lg:py-32">
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[460px] w-[460px] rounded-full bg-[radial-gradient(closest-side,rgba(225,29,47,0.1),transparent)]" />
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <Reveal>
          <Label index="03">Journey &amp; Mastery</Label>
          <h2 className="mt-6 font-display text-4xl uppercase tracking-tight text-paper sm:text-5xl">
            Work <span className="stroke-paper">Experience</span>
          </h2>
        </Reveal>

        <div className="relative mt-16 border-l border-white/15 pl-8 lg:pl-12">
          {EXPERIENCE.map((job, i) => (
            <Reveal key={job.role + job.period} delay={i * 100} className="relative pb-16 last:pb-0">
              <span className="absolute -left-[41px] top-1.5 h-4 w-4 rotate-45 border-2 border-crimson bg-coal lg:-left-[57px]" />
              <span className="inline-block rounded-full border border-white/20 px-4 py-1 font-cond text-xs tracking-[0.2em] text-paper/80">
                {job.period}
              </span>
              <h3 className="mt-4 font-cond text-2xl font-semibold text-paper lg:text-3xl">
                {job.role} <span className="text-crimson">·</span>{" "}
                <span className="text-mist">{job.place}</span>
              </h3>
              <ul className="mt-5 grid gap-x-10 gap-y-2.5 md:grid-cols-2">
                {job.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-mist">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                {job.skills.map(([name, val]) => (
                  <div key={name}>
                    <div className="flex items-center justify-between font-cond text-xs tracking-[0.15em] text-paper/85">
                      <span>{name.toUpperCase()}</span>
                      <span className="text-crimson">{val}%</span>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="meter-fill h-full rounded-full bg-gradient-to-r from-wine to-crimson"
                        style={{ "--w": `${val}%` } as React.CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- services ---------------- */

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal className="max-w-2xl">
          <Label index="04">What I Do</Label>
          <h2 className="mt-6 font-display text-4xl uppercase tracking-tight text-paper sm:text-5xl">
            Brewed to <span className="stroke-red">Perfection</span>
          </h2>
          <p className="mt-5 text-mist">
            From the first crack of the roast to the final pour — every detail of the
            coffee experience, handled with care.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 lg:grid-cols-4">
          {STATS.map(([num, label]) => (
            <div key={label} className="group bg-ink p-7 transition-colors duration-500 hover:bg-wine/40">
              <p className="font-display text-4xl text-paper transition-colors group-hover:text-crimson lg:text-5xl">
                {num}
              </p>
              <p className="mt-2 font-cond text-[11px] tracking-[0.2em] text-mist">
                {label.toUpperCase()}
              </p>
            </div>
          ))}
        </Reveal>

        <div className="mt-16 grid gap-x-16 lg:grid-cols-2">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon];
            return (
              <Reveal key={s.title} delay={(i % 2) * 100}>
                <div className="group flex items-start gap-6 border-t border-white/10 py-7 transition-colors hover:border-crimson/60">
                  <span className="font-cond text-sm font-semibold text-crimson">
                    0{i + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-cond text-xl font-semibold text-paper transition-transform duration-300 group-hover:translate-x-1">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist">{s.body}</p>
                  </div>
                  <span className="grid h-12 w-12 shrink-0 place-items-center border border-white/15 text-paper/80 transition-all duration-500 group-hover:rotate-6 group-hover:border-crimson group-hover:text-crimson">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- creative ---------------- */

export function Creative() {
  return (
    <section className="grid-bg-sm relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute -right-32 top-1/4 h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(43,107,255,0.1),transparent)]" />
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal className="max-w-2xl">
          <Label index="05">Beyond the Bar</Label>
          <h2 className="mt-6 font-display text-4xl uppercase tracking-tight text-paper sm:text-5xl">
            Creative <span className="stroke-paper">Experience</span>
          </h2>
          <p className="mt-5 text-mist">
            Alongside barista work, I bring a creative freelance skill set — visual,
            practical, and built for hospitality brands.
          </p>
        </Reveal>
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {CREATIVE.map((c, i) => {
            const Icon = ICONS[c.icon];
            return (
              <Reveal key={c.title} delay={(i % 2) * 120} className={cn(i % 2 === 1 && "sm:mt-10")}>
                <article className="group flex h-full gap-6 rounded-xl border border-white/10 bg-panel/50 p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-crimson/50">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-lg bg-crimson text-white shadow-lg shadow-crimson/30 transition-transform duration-500 group-hover:-rotate-6">
                    <Icon className="h-6 w-6" strokeWidth={1.7} />
                  </span>
                  <div>
                    <h3 className="font-cond text-xl font-semibold text-paper">{c.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-mist">{c.body}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- freelance accordion ---------------- */

export function Freelance() {
  const [open, setOpen] = useState(0);
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_1.4fr] lg:px-12">
        <Reveal>
          <Label index="06">Available for Hire</Label>
          <h2 className="mt-6 font-display text-4xl uppercase leading-[1.05] tracking-tight text-paper sm:text-5xl">
            Freelance
            <br />
            <span className="stroke-red">Services</span>
          </h2>
          <p className="mt-6 max-w-sm text-mist">
            Seven years of craft, offered to cafés, restaurants and events across
            Lalitpur and beyond.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-crimson px-6 py-3 font-cond text-sm font-semibold tracking-[0.15em] text-white transition-all hover:gap-3.5 hover:bg-[#c11425]"
          >
            START A PROJECT <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>

        <Reveal delay={120}>
          <div className="border-t border-white/10">
            {FREELANCE.map((f, i) => {
              const active = open === i;
              return (
                <div key={f.title} className="border-b border-white/10">
                  <button
                    onClick={() => setOpen(active ? -1 : i)}
                    className="flex w-full items-center gap-6 py-6 text-left"
                    aria-expanded={active}
                  >
                    <span
                      className={cn(
                        "font-display text-lg transition-colors",
                        active ? "text-crimson" : "stroke-mid"
                      )}
                    >
                      0{i + 1}
                    </span>
                    <span className="flex-1 font-cond text-xl font-semibold text-paper sm:text-2xl">
                      {f.title}
                    </span>
                    <Plus
                      className={cn(
                        "h-5 w-5 text-crimson transition-transform duration-300",
                        active && "rotate-45"
                      )}
                    />
                  </button>
                  <div
                    className="grid transition-all duration-500 ease-out"
                    style={{ gridTemplateRows: active ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-7 pl-14 pr-6 text-sm leading-relaxed text-mist">
                        {f.body}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- education ---------------- */

export function Education() {
  const lists = [
    { title: "Training", icon: GraduationCap, items: TRAINING },
    { title: "Certifications & Education", icon: Award, items: CERTS },
  ];
  return (
    <section className="grid-bg-sm relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <Reveal>
          <Label index="07">Training &amp; Credentials</Label>
          <h2 className="mt-6 font-display text-4xl uppercase tracking-tight text-paper sm:text-5xl">
            Education &amp; <span className="stroke-paper">Certifications</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {lists.map((list, li) => (
            <Reveal key={list.title} delay={li * 120}>
              <h3 className="flex items-center gap-3 font-cond text-lg font-semibold tracking-wide text-crimson">
                <list.icon className="h-5 w-5" /> {list.title.toUpperCase()}
              </h3>
              <ul className="mt-6 space-y-5">
                {list.items.map((it) => (
                  <li
                    key={it.title}
                    className="group border-l-2 border-white/15 pl-5 transition-colors hover:border-crimson"
                  >
                    <p className="flex items-center gap-2 font-semibold text-paper">
                      <BookOpen className="h-4 w-4 text-crimson" />
                      {it.title}
                    </p>
                    <p className="mt-1 text-sm text-mist">{it.meta}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- contact + footer ---------------- */

export const IG_URL = "https://www.instagram.com/willson_obito/";
export const WA_URL =
  "https://wa.me/9779765829096?text=Hi%20Willson%2C%20I%27d%20like%20to%20talk%20about%20a%20barista%20project.";

export const IG_PATH =
  "M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.3-.1 1.7-.1 4.9-.1Zm0 1.8c-3.1 0-3.5 0-4.8.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.2.8-.4.4-.6.7-.8 1.2-.2.4-.3 1-.4 2.1-.1 1.3-.1 1.7-.1 4.8s0 3.5.1 4.8c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.2.4.4.7.6 1.2.8.4.2 1 .3 2.1.4 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.2-.8.4-.4.6-.7.8-1.2.2-.4.3-1 .4-2.1.1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.2-.4-.4-.7-.6-1.2-.8-.4-.2-1-.3-2.1-.4-1.3-.1-1.7-.1-4.8-.1Zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 1.8a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2Zm5.1-3.2a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z";

export const WA_PATH =
  "M12 2a9.9 9.9 0 0 0-8.5 15L2 22l5.2-1.4A9.9 9.9 0 1 0 12 2Zm0 1.8a8.1 8.1 0 1 1-4.1 15.1l-.3-.2-3.1.8.8-3-.2-.3A8.1 8.1 0 0 1 12 3.8Zm-3.5 4c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.7 2.7 4.2 3.7 2.1.8 2.5.7 2.9.6.5 0 1.4-.6 1.6-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.5-.3l-1.7-.8c-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.5-1.9-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5 0-.2 0-.4-.1-.5l-.7-1.7c-.2-.4-.4-.4-.6-.4h-.5Z";

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    path: "M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.6V3.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.3H7.6V13h2.7v8h3.2Z",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    path: "M6.9 8.6H3.9V21h3V8.6ZM5.4 3.5a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6ZM21 13.9c0-3.2-1.7-4.7-4-4.7-1.8 0-2.6 1-3.1 1.7V8.6h-3V21h3v-6.5c0-1.7.8-2.7 2.2-2.7 1.3 0 1.9.9 1.9 2.7V21h3v-7.1Z",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 lg:py-36">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(225,29,47,0.14),transparent)]" />
      <span className="stroke-dim pointer-events-none absolute -bottom-8 left-0 select-none font-display text-[22vw] uppercase leading-none">
        Willson
      </span>
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-leaf/50 px-4 py-1.5 font-cond text-xs tracking-[0.25em] text-leaf">
            <span className="pulse-dot h-2 w-2 rounded-full bg-leaf" /> AVAILABLE FOR HIRE
          </span>
          <h2 className="mt-8 font-display text-5xl uppercase leading-[1.02] tracking-tight text-paper sm:text-7xl">
            Let's brew
            <br />
            <span className="stroke-red">together</span>
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-mist">
            Available for café collaborations, menu consulting and professional barista
            training across Lalitpur and beyond. Seven years of craft, shared in every
            conversation.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:resume@willsonrai.com.np"
              className="inline-flex items-center gap-2.5 rounded-md bg-crimson px-7 py-3.5 font-cond text-sm font-semibold tracking-[0.15em] text-white shadow-xl shadow-crimson/25 transition-all hover:-translate-y-0.5 hover:bg-[#c11425]"
            >
              <Mail className="h-4 w-4" /> RESUME@WILLSONRAI.COM.NP
            </a>
            <button
              onClick={downloadCV}
              className="inline-flex items-center gap-2.5 rounded-md border border-paper/40 px-7 py-3.5 font-cond text-sm font-semibold tracking-[0.15em] text-paper transition-all hover:-translate-y-0.5 hover:border-paper hover:bg-paper hover:text-wine"
            >
              <Download className="h-4 w-4" /> DOWNLOAD CV
            </button>
            <span className="inline-flex items-center gap-2 rounded-md border border-white/15 px-6 py-3.5 font-cond text-sm tracking-[0.15em] text-paper/85">
              <MapPin className="h-4 w-4 text-blue" /> LALITPUR, NEPAL
            </span>
          </div>
          <div className="mt-10 flex items-center justify-center gap-4">
            {SOCIALS.map(({ label, href, path }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-mist transition-all duration-300 hover:-translate-y-1 hover:border-crimson hover:text-crimson"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d={path} />
                </svg>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 sm:flex-row lg:px-12">
        <Logo />
        <p className="text-center font-cond text-xs tracking-[0.2em] text-ash">
          © 2026 WILLSON RAI · HEAD BARISTA &amp; CREATIVE FREELANCER
        </p>
        <a
          href="#top"
          className="group flex items-center gap-2 font-cond text-xs tracking-[0.2em] text-mist transition-colors hover:text-crimson"
        >
          BACK TO TOP
          <span className="grid h-8 w-8 place-items-center border border-white/15 transition-transform group-hover:-translate-y-1">
            <ArrowUp className="h-4 w-4" />
          </span>
        </a>
      </div>
    </footer>
  );
}
