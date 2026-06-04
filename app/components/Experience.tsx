"use client";

const experiences = [
  {
    role: "Full Stack Development Intern",
    company: "@ TechStrota // Vadodara",
    year: "2025 - 2026",
    desc: "Developed production-grade web and mobile applications under expert mentorship at TechStrota. Built live SaaS projects using a modern full-stack architecture. Recognised as Star Achiever 2026 for outstanding technical performance and growth.",
    tags: ["PHP", "Laravel 12", "React.js", "Next.js", "MySQL", "JavaScript", "Python", "Full Stack"],
    color: "var(--neon-purple)",
  },
  {
    role: "Software Development Intern",
    company: "@ Arkya Apps // Bhuj",
    year: "2024",
    desc: "Gained hands-on industry experience by contributing to software development and application life-cycles. Assisted the core team in building, testing, and optimizing dynamic digital solutions.",
    tags: ["Web Development", "Web Optimization", "UI/UX", "Testing"],
    color: "var(--neon-cyan)",
  },
  {
    role: "Ethical Hacking & Cyber Security",
    company: "Certification Course",
    year: "2022",
    desc: "Completed an intensive training program focused on ethical hacking, network security, and vulnerability assessments. Learned core principles of defending systems against modern cyber threats.",
    tags: ["Ethical Hacking", "Cyber Security", "Network Defense", "Penetration Testing"],
    color: "var(--neon-purple)",
  }
];

const certificates = [
  { id: 1, title: "TechStrota Star Achiever", img: "/rkm.png" },
  { id: 2, title: "Arkya Apps Internship", img: "/rkm.png" },
  { id: 3, title: "Ethical Hacking Certified", img: "/rkm.png" }
];

export default function Experience() {
  return (
    <section id="experience" className="w-full overflow-hidden py-16 px-4 md:px-6 border-t border-zinc-900 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-[var(--neon-purple)] font-mono text-sm">04 //</span>
          <h2 className="font-syne font-bold text-4xl text-white">Work History & Logs</h2>
        </div>

        <div className="relative pl-6 border-l border-zinc-800 mb-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-8 last:mb-0">
              <div 
                className="absolute w-3 h-3 rounded-full -left-[30.5px] top-2"
                style={{ backgroundColor: exp.color, boxShadow: `0 0 10px ${exp.color}` }} 
              />
              <div 
                className="bg-[#111112] rounded-xl p-6 md:p-8 border border-zinc-800 ml-4 transition-all duration-300 group"
                style={{ "--hover-border": exp.color } as React.CSSProperties}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = exp.color;
                  e.currentTarget.style.boxShadow = `0 0 15px ${exp.color}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#27272a";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-syne font-bold text-2xl text-white group-hover:text-white transition-colors">
                      {exp.role}
                    </h3>
                    <p className="font-mono text-sm mt-2 transition-colors" style={{ color: exp.color }}>
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 bg-black border border-zinc-800 text-gray-400 rounded">
                    {exp.year}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {exp.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] uppercase tracking-widest font-semibold px-2 py-1 bg-black border border-zinc-800 text-gray-400 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 mb-6">
          <span className="text-[var(--neon-cyan)] font-mono text-sm">SYS //</span>
          <h3 className="font-syne font-bold text-2xl text-white">Verified Credentials</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.map((cert, index) => {
            const isCyan = index % 2 === 0;
            const glowColor = isCyan ? "var(--neon-cyan)" : "var(--neon-purple)";

            return (
              <div 
                key={cert.id} 
                className="group relative rounded-xl overflow-hidden border border-zinc-800 bg-[#111112] transition-all duration-300"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = glowColor;
                  e.currentTarget.style.boxShadow = `0 0 20px ${glowColor}30`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#27272a";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="w-full aspect-[4/3] bg-black relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none" />
                  <img 
                    src={cert.img} 
                    alt={cert.title} 
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-0 left-0 w-full h-1 bg-[var(--neon-cyan)]/50 blur-[2px] opacity-0 group-hover:opacity-100 group-hover:animate-[fadeUp_2s_ease-in-out_infinite] z-20 pointer-events-none" />
                </div>
                <div className="absolute bottom-0 left-0 w-full p-4 z-20">
                  <p className="font-mono text-[10px] text-gray-400 uppercase tracking-widest mb-1">
                    Document [{cert.id}]
                  </p>
                  <h4 className="font-syne font-bold text-sm text-white group-hover:text-[var(--neon-cyan)] transition-colors">
                    {cert.title}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}