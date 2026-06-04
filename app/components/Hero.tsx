"use client";
import React from "react";

export default function Hero() {
  return (
    <section className="tech-grid w-full min-h-screen flex items-center pt-22 pb-8 px-4 md:px-6 relative overflow-hidden bg-black">
      <div className="absolute top-1/4 left-0 w-64 h-64 md:w-96 md:h-96 bg-[var(--neon-cyan)] opacity-[0.05] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 md:w-96 md:h-96 bg-[var(--neon-purple)] opacity-[0.05] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10 px-2">
        <div>
          <div className="animate-fade-up inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full mb-6 tracking-wide border border-[var(--neon-purple)]/50 text-[var(--neon-purple)] bg-[#111112] shadow-[0_0_10px_rgba(9,132,227,0.15)]">
            Welcome to My Profile.!!
          </div>

          <h1 className="animate-fade-up-2 font-syne font-extrabold leading-tight mb-2 text-white"
            style={{ fontSize: "clamp(3rem, 7vw, 5rem)", letterSpacing: "-2px" }}>
            ROHAN<br />
            <span className="text-[var(--neon-cyan)] drop-shadow-[0_0_10px_rgba(0,206,201,0.3)]">MOGA.</span>
          </h1>

          <div className="animate-fade-up-2 flex flex-wrap gap-2 mb-5">
            <span className="text-[10px] font-mono border border-zinc-800 bg-[#111112] px-2.5 py-1 text-gray-400 uppercase tracking-widest">
              Software Developer
            </span>
            <span className="text-[10px] font-mono border border-[var(--neon-purple)]/30 bg-[#111112] px-2.5 py-1 text-[var(--neon-purple)] uppercase tracking-widest">
              IT Business Owner
            </span>
            <span className="text-[10px] font-mono border border-[var(--neon-cyan)]/30 bg-[#111112] px-2.5 py-1 text-[var(--neon-cyan)] uppercase tracking-widest">
              React Native Expert
            </span>
          </div>

          <div className="animate-fade-up-3 mb-5 pl-4 border-l-2 border-[var(--neon-cyan)] bg-gradient-to-r from-[var(--neon-cyan)]/10 to-transparent py-2">
            <p className="font-mono text-sm text-[var(--neon-cyan)] font-bold italic tracking-wide">
              "Success is earned through hard work."
            </p>
          </div>

          <p className="animate-fade-up-3 text-gray-400 font-light mb-8 text-sm sm:text-base leading-relaxed max-w-md">
            Passionate about working and learning to contribute best for the growth of the organization by continuously developing and applying my skill abilities.
          </p>

          <div className="animate-fade-up-3 grid grid-cols-3 gap-2 sm:gap-4 mb-8">
            {[
              { num: "4th", label: "University Rank", color: "var(--neon-cyan)" },
              { num: "10.00", label: "Final SGPA", color: "var(--neon-purple)" },
              { num: "8.67", label: "CGPA", color: "var(--neon-cyan)" },
            ].map((s) => (
              <div key={s.label} className="bg-[#111112] border border-zinc-800 rounded-xl p-3 sm:p-4 text-center hover:border-zinc-700 transition-all">
                <span className="font-syne font-bold text-xl sm:text-2xl block" style={{ color: s.color }}>
                  {s.num}
                </span>
                <span className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-widest block mt-1">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="animate-fade-up-4 flex flex-wrap gap-4 items-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-black bg-[var(--neon-cyan)] transition-all hover:scale-105 shadow-[0_0_15px_rgba(0,206,201,0.4)]"
            >
              INITIALIZE CONTACT
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium border border-[var(--neon-purple)] text-[var(--neon-purple)] transition-all hover:bg-[var(--neon-purple)] hover:text-white"
            >
              VIEW LOGS
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end mt-10 md:mt-0">
          <div className="relative">
            <div className="w-64 sm:w-80 md:w-96 rounded-2xl overflow-hidden relative z-10 border border-zinc-800 bg-[#111112]">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 pointer-events-none" />
              <img
                src="/rkm.png"
                alt="Rohan Moga Profile"
                className="w-full h-auto object-contain relative z-0" 
              />
            </div>
            <div className="animate-float absolute top-4 -right-4 sm:-right-8 bg-[#111112] border border-[var(--neon-cyan)] shadow-[0_0_10px_rgba(0,206,201,0.2)] rounded-lg px-3 py-2 text-[10px] sm:text-xs font-bold text-[var(--neon-cyan)] whitespace-nowrap z-20 uppercase tracking-wide flex items-center gap-2">
              <span className="text-gray-500">🏆</span> University Rank 4
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}