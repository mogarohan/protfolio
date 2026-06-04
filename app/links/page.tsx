import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rohan Moga | Terminal",
  description: "Full Stack Developer",
};

const links = [
  { href: "https://www.linkedin.com/in/moga-rohan-9b71942bb", label: "LINKEDIN_PROFILE", highlight: true },
  { href: "https://github.com/", label: "GITHUB_REPOS", highlight: false },
  { href: "/", label: "MAIN_PORTFOLIO", highlight: false },
  { href: "mailto:mogarohan44@gmail.com", label: "SEND_EMAIL", highlight: false },
];

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col items-center py-12 px-6 font-mono tech-grid">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap');
        main { font-family: 'Space Mono', monospace; }
        .cyber-btn {
          background: transparent;
          border: 1px solid #333;
          position: relative;
          overflow: hidden;
          transition: all 0.2s;
        }
        .cyber-btn:hover {
          border-color: #00F0FF;
          color: #00F0FF;
          box-shadow: 0 0 10px rgba(0, 240, 255, 0.2) inset;
        }
        .cyber-btn.highlight { border-color: #B026FF; color: #B026FF; }
        .cyber-btn.highlight:hover { box-shadow: 0 0 10px rgba(176, 38, 255, 0.2) inset; }
      `}</style>

      {/* Avatar */}
      <div className="w-24 h-24 rounded-none border border-[#00F0FF] p-1 mb-6 relative">
         <img src="/rkm.png" alt="RM" className="w-full h-full object-cover bg-black" />
         <div className="absolute -bottom-2 -right-2 bg-black text-[#00F0FF] text-[10px] px-1 border border-[#00F0FF]">SYS.ON</div>
      </div>

      <h1 className="text-xl font-bold mb-1 tracking-widest text-[#E0E0E0]">ROHAN_MOGA</h1>
      <p className="text-xs text-[#00F0FF] mb-8 uppercase tracking-widest">&gt; Full Stack Dev</p>

      {/* Links */}
      <div className="w-full max-w-sm flex flex-col gap-4">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className={`cyber-btn w-full p-4 text-center text-sm font-bold uppercase tracking-widest ${l.highlight ? 'highlight' : 'text-gray-400'}`}
          >
            [{l.label}]
          </a>
        ))}
      </div>
      
      <p className="mt-12 text-[10px] text-gray-600">CONNECTION ESTABLISHED 2026</p>
    </main>
  );
}