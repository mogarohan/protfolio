"use client";
import React from "react";

const education = [
  {
    degree: "M.Sc. (Information Technology)",
    school: "Sardar Patel University (SPU), Vallabh Vidyanagar",
    year: "July 2024 – April 2026",
    metrics: ["🏆 4th University Rank", "🥈 2nd College Rank", "CGPA: 8.67", "Final SGPA: 10.00", "86.70%"],
    modules: ["Advanced Full-Stack Architectures", "Enterprise SaaS Design", "Relational Database Performance Tuning", "API Security Protocols"],
  },
  {
    degree: "B.Sc. (Computer Application & IT)",
    school: "Kachchh University",
    year: "2021 – 2024",
    metrics: ["Graduated with Distinction"],
    modules: ["Object-Oriented Systems (C++, Java)", "Database Management Systems (RDBMS)", "Web Infrastructure Fundamentals", "Application Lifecycle Testing"],
  },
  {
    degree: "HSC – 12th Commerce",
    school: "SSGK Ahmedabad",
    year: "2021",
    metrics: ["General Stream Board Certification"],
    modules: ["Business Analytics Logic", "Financial Ledger Auditing", "Information Practices Foundations"],
  },
  {
    degree: "SSC – 10th Standard",
    school: "SSGK Ahmedabad",
    year: "2019",
    metrics: ["General Board Certification"],
    modules: ["Foundation Mathematics", "Analytical Core Sciences", "Logical Computing Basics"],
  },
];

export default function Education() {
  return (
    <section id="education" className="w-full overflow-hidden py-16 px-4 md:px-6 border-t border-zinc-900 bg-black relative">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[var(--neon-purple)] opacity-5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col gap-2 mb-10">
          <div className="flex items-center gap-3">
            <span className="text-[var(--neon-cyan)] font-mono text-base tracking-widest">05 // DATA_MATRIX</span>
          </div>
          <h2 className="font-syne font-extrabold text-4xl sm:text-5xl text-white tracking-tight mt-1">
            Academic Credentials
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          {education.map((e, idx) => {
            const isEven = idx % 2 === 0;
            const cardGlowColor = isEven ? "var(--neon-cyan)" : "var(--neon-purple)";
            const staticGlowOpacity = isEven ? "rgba(0, 206, 201, 0.12)" : "rgba(9, 132, 227, 0.12)";

            return (
              <div
                key={idx}
                className="p-6 md:p-8 rounded-2xl border bg-[#111112]"
                style={{
                  borderColor: cardGlowColor,
                  boxShadow: `0 8px 30px ${staticGlowOpacity}`,
                }}
              >
                <div className="border-b border-zinc-800 pb-6 mb-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-syne font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                        {e.degree}
                      </h3>
                      <p className="font-mono text-sm sm:text-base text-gray-400 mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="text-zinc-600 font-bold tracking-wider"></span> 
                        <span className="text-zinc-200">{e.school}</span>
                      </p>
                    </div>
                    <div className="flex flex-col lg:items-end flex-shrink-0 justify-center">
                      <span className="text-base sm:text-lg font-mono font-bold tracking-wider" style={{ color: cardGlowColor }}>
                        {e.year}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-8">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-4 flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: cardGlowColor }} />
                      Performance Logs
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {e.metrics.map((m, mIdx) => (
                        <span
                          key={mIdx}
                          className="text-xs md:text-sm font-mono font-semibold px-4 py-2.5 rounded-lg bg-black border border-zinc-800 text-white"
                          style={{ color: cardGlowColor }}
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-4 flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: cardGlowColor }} />
                      Core Knowledge Architecture
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {e.modules.map((mod, modIdx) => (
                        <div 
                          key={modIdx} 
                          className="flex items-center gap-3 text-sm sm:text-base font-mono text-zinc-300 bg-black border border-zinc-800 px-4 py-3 rounded-xl"
                        >
                          <span className="text-base font-bold select-none" style={{ color: cardGlowColor }}>↳</span>
                          <span className="tracking-wide">{mod}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}