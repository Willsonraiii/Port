import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Hero, { Logo } from "./components/Hero";
import {
  Marquee,
  About,
  Trio,
  Experience,
  Services,
  Creative,
  Freelance,
  Education,
  Contact,
  Footer,
} from "./components/Sections";
import { FloatingContact } from "./components/FloatingContact";
import { NAV } from "./data";
import { cn } from "./utils/cn";

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/10 bg-ink/85 py-3 backdrop-blur-md"
          : "bg-transparent py-5"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
        <Logo />
        <div className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="link-line font-cond text-xs font-medium uppercase tracking-[0.25em] text-paper/80 transition-colors hover:text-paper"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-md bg-crimson px-5 py-2.5 font-cond text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all hover:-translate-y-0.5 hover:bg-[#c11425]"
          >
            Hire Me
          </a>
        </div>
        <button
          className="grid h-10 w-10 place-items-center border border-white/15 text-paper md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* mobile panel */}
      <div
        className="grid overflow-hidden border-white/10 bg-ink/95 backdrop-blur-md transition-all duration-500 md:hidden"
        style={{
          gridTemplateRows: open ? "1fr" : "0fr",
          borderBottomWidth: open ? 1 : 0,
        }}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3 font-cond text-sm uppercase tracking-[0.25em] text-paper/85 transition-colors hover:text-crimson"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-md bg-crimson px-5 py-3 text-center font-cond text-sm font-semibold uppercase tracking-[0.2em] text-white"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <main className="bg-coal text-paper antialiased">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Trio />
      <Experience />
      <Services />
      <Creative />
      <Freelance />
      <Education />
      <Contact />
      <Footer />
      <FloatingContact />
    </main>
  );
}
