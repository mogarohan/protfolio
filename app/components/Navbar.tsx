"use client";
import { useState, useEffect } from "react";

const links = ["Skills", "Experience", "Projects", "Education", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
      scrolled ? "bg-black/90 backdrop-blur-md border-zinc-900 shadow-[0_4px_30px_rgba(0,0,0,0.8)]" : "bg-transparent border-transparent"
    }`}>
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <a href="#" className="flex items-center gap-2">
          <span className="font-syne font-extrabold text-2xl tracking-[0.15em] text-[var(--neon-cyan)] uppercase">
            IT EXPERT
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-xs uppercase tracking-widest font-semibold text-gray-400 hover:text-[var(--neon-cyan)] transition-colors duration-300"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* Connect / Hire Button */}
        <a
          href="mailto:mogarohan44@gmail.com"
          className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold px-5 py-2.5 rounded-none border border-[var(--neon-cyan)] text-[var(--neon-cyan)] hover:bg-[var(--neon-cyan)] hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(0,240,255,0.1)] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
        >
          HIRE ME
        </a>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2 text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2 bg-[var(--neon-cyan)]" : ""}`} />
          <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2 bg-[var(--neon-cyan)]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-b border-zinc-900 px-6 py-6 flex flex-col gap-5 relative z-40 shadow-2xl">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm font-semibold uppercase tracking-widest text-gray-300 hover:text-[var(--neon-cyan)] transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {l}
            </a>
          ))}
          <a
            href="mailto:mogarohan44@gmail.com"
            className="inline-flex mt-2 items-center justify-center gap-2 text-xs uppercase tracking-widest font-bold px-5 py-3 rounded-none border border-[var(--neon-cyan)] text-[var(--neon-cyan)] hover:bg-[var(--neon-cyan)] hover:text-black transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          >
            HIRE ME
          </a>
        </div>
      )}
    </nav>
  );
}