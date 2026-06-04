"use client";

import React from "react";

// Professional Tech SVGs (Colors handled dynamically via brandColor)
const icons = {
  react: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)"/>
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
    </svg>
  ),
  mobile: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
      <path d="M12 18h.01"/>
    </svg>
  ),
  backend: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
      <path d="M6 6h.01M6 18h.01"/>
    </svg>
  ),
  database: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <ellipse cx="12" cy="5" rx="9" ry="3"/>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
    </svg>
  ),
  web: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
  java: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
      <line x1="6" y1="1" x2="6" y2="4"/>
      <line x1="10" y1="1" x2="10" y2="4"/>
      <line x1="14" y1="1" x2="14" y2="4"/>
    </svg>
  ),
  python: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <polyline points="4 17 10 11 4 5"/>
      <line x1="12" y1="19" x2="20" y2="19"/>
    </svg>
  ),
  android: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M12 2a8 8 0 0 0-8 8v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a8 8 0 0 0-8-8z"/>
      <path d="M8 12h.01M16 12h.01"/>
    </svg>
  ),
  aspnet: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  testing: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M9 2v10l-4.5 8h15L15 12V2"/>
      <line x1="9" y1="2" x2="15" y2="2"/>
      <line x1="6.5" y1="16" x2="17.5" y2="16"/>
    </svg>
  ),
  design: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="7" cy="8" r="1"/>
      <circle cx="12" cy="5" r="1"/>
      <circle cx="17" cy="8" r="1"/>
      <path d="M17 14.5c0 1.5-1.5 2.5-3 2.5h-4a5 5 0 0 1 0-10h.5"/>
    </svg>
  )
};

const skills = [
  { icon: icons.react, name: "React JS / NEXT JS", type: "Frontend Framework", desc: "Building scalable, interactive UIs and SSR apps.", level: 95, brandColor: "#61DAFB" },
  { icon: icons.mobile, name: "React Native", type: "Mobile Development", desc: "Cross-platform mobile applications for iOS & Android.", level: 90, brandColor: "#00D8FF" },
  { icon: icons.backend, name: "PHP / Laravel 12", type: "Backend Architecture", desc: "Robust APIs, routing, and secure server-side logic.", level: 90, brandColor: "#FF2D20" },
  { icon: icons.database, name: "MY SQL", type: "Database Management", desc: "Relational database design, queries & optimization.", level: 85, brandColor: "#00758F" },
  { icon: icons.web, name: "HTML / CSS / JS", type: "Web Fundamentals", desc: "Core web technologies and DOM manipulation.", level: 95, brandColor: "#E34F26" },
  { icon: icons.java, name: "OOP (C, C++, JAVA)", type: "Core Programming", desc: "Object-oriented design patterns & logic building.", level: 80, brandColor: "#ED8B0A" },
  { icon: icons.python, name: "Python", type: "Scripting / Data", desc: "Automation, scripts, and backend data processing.", level: 75, brandColor: "#3776AB" },
  { icon: icons.android, name: "Android", type: "App Development", desc: "Building scalable and native mobile applications.", level: 80, brandColor: "#3DDC84" },
  { icon: icons.aspnet, name: "ASP.NET", type: "Backend Architecture", desc: "Developing secure enterprise software solutions.", level: 80, brandColor: "#512BD4" },
  { icon: icons.testing, name: "App Testing", type: "Quality Assurance", desc: "Ensuring bug-free, optimized code and UI testing.", level: 85, brandColor: "#00CEC9" },
  { icon: icons.design, name: "Graphic Designing", type: "UI/UX & Design", desc: "Creating visually appealing digital assets and layouts.", level: 85, brandColor: "#A855F7" },
];

const softSkills = [
  { name: "Leadership", desc: "Guiding development teams and driving project vision to successful deployment." },
  { name: "Time Management", desc: "Prioritizing tasks and meet strict deadlines in fast-paced environments." },
  { name: "Team Working", desc: "Collaborating seamlessly with cross-functional pods to achieve unified goals." },
  { name: "Problem Solving", desc: "Analyzing complex system bugs and engineering optimized, scalable solutions." },
  { name: "Good Communication", desc: "Articulating technical concepts clearly to developers, clients, and stakeholders." },
  { name: "Creativity & Adaptability", desc: "Innovating approaches and rapidly adjusting to new tech stacks and requirements." },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full overflow-hidden py-16 px-4 md:px-6 relative border-t border-zinc-900 bg-black">
      <div className="max-w-5xl mx-auto">
        
        {/* Technical Skills Header */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-[var(--neon-purple)] font-mono text-sm">01 //</span>
          <h2 className="font-syne font-bold text-4xl text-white">System Capabilities</h2>
        </div>

        {/* Detailed Technical Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-10">
          {skills.map((s, index) => {
            const isCyan = index % 2 === 0;
            const glowColor = isCyan ? "var(--neon-cyan)" : "var(--neon-purple)";
            const hoverShadow = isCyan 
              ? "hover:shadow-[0_0_15px_rgba(0,206,201,0.15)]" 
              : "hover:shadow-[0_0_15px_rgba(9,132,227,0.15)]";

            return (
              <div
                key={s.name}
                className={`group bg-[#111112] border border-zinc-800 rounded-xl p-5 transition-all duration-300 ${hoverShadow}`}
                style={{ "--hover-border": glowColor } as React.CSSProperties}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = glowColor}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = "#27272a"}
              >
                <div className="flex justify-between items-start mb-3">
                  {/* Fixed: Logos will now permanently show their vibrant brand colors */}
                  <div 
                    className="transition-transform duration-300 group-hover:scale-110"
                    style={{ color: s.brandColor }}
                  >
                    {s.icon}
                  </div>
                  <span className="text-[10px] font-mono text-gray-500 group-hover:text-white transition-colors">
                    {s.level}%
                  </span>
                </div>
                
                <h4 className="font-bold text-sm text-gray-200 group-hover:text-white transition-colors">
                  {s.name}
                </h4>
                <p className="text-[9px] text-gray-500 uppercase tracking-widest mt-1 mb-2">
                  {s.type}
                </p>
                <p className="text-xs text-gray-400 leading-relaxed mb-4 line-clamp-2">
                  {s.desc}
                </p>

                <div className="w-full bg-black h-1 rounded overflow-hidden border border-zinc-900">
                  <div 
                    className="h-full transition-all duration-1000 ease-out opacity-50 group-hover:opacity-100"
                    style={{ 
                      width: `${s.level}%`, 
                      backgroundColor: glowColor,
                      boxShadow: `0 0 10px ${glowColor}`
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Soft Skills Header */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[var(--neon-cyan)] font-mono text-sm">02 //</span>
          <h3 className="font-syne font-bold text-xl text-white">Human Protocols</h3>
        </div>
        
        {/* Detailed Soft Skills Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {softSkills.map((s, index) => {
            const isCyan = index % 2 === 0;
            const glowColor = isCyan ? "var(--neon-cyan)" : "var(--neon-purple)";
            const hoverShadow = isCyan 
              ? "hover:shadow-[0_0_10px_rgba(0,206,201,0.1)]" 
              : "hover:shadow-[0_0_10px_rgba(9,132,227,0.1)]";

            return (
              <div
                key={s.name}
                className={`group bg-[#111112] border border-zinc-800 rounded-lg p-5 transition-all duration-300 ${hoverShadow}`}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = glowColor}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = "#27272a"}
              >
                <h4 className="font-bold text-sm text-gray-200 group-hover:text-white transition-colors mb-2 flex items-center gap-2">
                  <span className="text-lg transition-colors" style={{ color: glowColor }}>&gt;</span> 
                  {s.name}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}