"use client";

import React from "react";

// Official Tech SVGs with authentic brand color configurations
const icons = {
  email: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.16-3.8c-1.08 0-1.8.57-2.14 1.14v-1h-2.39v8.96h2.39v-4.9c0-.26.02-.52.1-.7.22-.53.71-1.08 1.54-1.08 1.08 0 1.52.82 1.52 2.03v4.75h2.4zM7.05 8.16a1.38 1.38 0 1 0 0-2.76l-.02-.01a1.38 1.38 0 0 0 0 2.77m-1.2 10.34h2.4V9.54H5.85v8.96z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
      <defs>
        {/* Original Instagram Instagram Multi-Color Premium Gradient definition */}
        <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="100%" stopColor="#285AEB" />
        </linearGradient>
      </defs>
      <path fill="url(#instagram-gradient)" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.68-3.89 1.1 0 2.25.2 2.25.2v2.47h-1.27c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
    </svg>
  ),
  location: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  )
};

const contacts = [
  { icon: icons.email, label: "EMAIL ADDRESS", value: "mogarohan44@gmail.com", href: "mailto:mogarohan44@gmail.com", brandColor: "#EA4335" },
  { icon: icons.phone, label: "PHONE NUMBER", value: "+91 9313225740", href: "tel:+919313225740", brandColor: "#25D366" },
  { icon: icons.linkedin, label: "LINKEDIN", value: "Rohan Moga", href: "https://www.linkedin.com/in/moga-rohan-9b71942bb", brandColor: "#0A66C2" },
  { icon: icons.instagram, label: "INSTAGRAM", value: "@_._kano21", href: "https://www.instagram.com/_._kano21?igsh=MWZnM3hncXlmMGg3YQ==", brandColor: "url(#instagram-gradient)" },
  { icon: icons.facebook, label: "FACEBOOK", value: "Rohan Moga", href: "https://www.facebook.com/share/1ABd4mxyJ8/", brandColor: "#1877F2" },
  { icon: icons.location, label: "LOCATION", value: "Wagheshvari street, Mandvi - Kutchh", href: null, brandColor: "#FF4757" },
];

const languages = [
  { lang: "GUJRATI", status: "PRO" },
  { lang: "HINDI", status: "FLUENT" },
  { lang: "ENGLISH", status: "NATIVE" },
];

export default function Contact() {
  return (
    <>
      <section id="contact" className="w-full overflow-hidden py-16 px-4 md:px-6 border-t border-zinc-900 tech-grid bg-black relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[var(--neon-cyan)] opacity-5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="font-syne font-bold text-4xl text-white mb-4">Initiate Connection</h2>
          <p className="text-gray-400 mb-10 max-w-lg mx-auto px-2">
            Server is online. Send a request to collaborate on innovative projects, discuss technical opportunities, or connect on social networks.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
            {contacts.map((c) => {
              // Extract solid color representation for handling dynamic borders and shadow definitions
              const activeColor = c.brandColor.startsWith("url") ? "#E1306C" : c.brandColor;

              const inner = (
                <div 
                  className="p-5 bg-[#111112] border border-zinc-800 rounded-xl transition-all duration-300 h-full flex items-center gap-4 shadow-lg group text-left"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = activeColor;
                    e.currentTarget.style.boxShadow = `0 0 20px ${activeColor}30`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#27272a";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Icon Container box - locks matching brand tints */}
                  <div 
                    className="w-10 h-10 rounded-lg bg-black border border-zinc-800 flex flex-shrink-0 items-center justify-center transition-all duration-300 group-hover:scale-105"
                    style={{ color: c.brandColor.startsWith("url") ? undefined : c.brandColor }}
                  >
                    {c.icon}
                  </div>
                  
                  <div className="overflow-hidden w-full">
                    <p 
                      className="text-[10px] font-mono mb-1 uppercase tracking-widest transition-colors duration-300 opacity-60 group-hover:opacity-100"
                      style={{ color: activeColor }}
                    >
                      {c.label}
                    </p>
                    <p className="text-sm font-bold text-white break-words group-hover:text-gray-200 transition-colors leading-tight">
                      {c.value}
                    </p>
                  </div>
                </div>
              );

              return c.href ? (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="block w-full">
                  {inner}
                </a>
              ) : (
                <div key={c.label} className="block w-full">{inner}</div>
              );
            })}
          </div>

          <div className="max-w-3xl mx-auto border border-zinc-800 bg-black p-6 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
             <div className="text-left">
               <p className="text-[10px] font-mono text-[var(--neon-cyan)] mb-1 uppercase tracking-widest">Language Modules</p>
               <h3 className="font-syne font-bold text-xl text-white">Installed Languages</h3>
             </div>
             <div className="flex flex-wrap gap-3 justify-center">
                {languages.map((l, idx) => (
                  <div 
                    key={l.lang} 
                    className="px-4 py-2 bg-[#111112] border border-zinc-800 rounded flex flex-col items-center"
                    style={{ borderBottom: `2px solid ${idx % 2 === 0 ? 'var(--neon-cyan)' : 'var(--neon-purple)'}` }}
                  >
                    <span className="text-sm font-bold text-white uppercase tracking-widest">{l.lang}</span>
                    <span className="text-[8px] font-mono text-gray-500 uppercase mt-1">{l.status}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      <footer className="text-center py-6 px-4 md:px-6 border-t border-zinc-900 bg-black font-mono text-xs text-gray-600">
        <p>Developed By <span className="text-[var(--neon-cyan)]">ROHAN MOGA</span> © 2026</p>
      </footer>
    </>
  );
}