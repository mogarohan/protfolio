"use client";

import React from "react";

const projects = [
  {
    num: "SYS.01",
    name: "QR-SaaS Restaurant Platform & M.Sc(IT) Final Year Project",
    desc: "A high-performance, multi-tenant live production SaaS application that served as my M.Sc. IT final semester project at Sardar Patel University. Evaluated with a perfect 10/10 marks panel score, directly securing the 4th University Rank. Engineered with highly optimized relational tables under TechStrota mentorship, featuring real-time concurrent transactional order tracking, secure payment gateways, and automated inventory depletion triggers.",
    tags: ["PHP/Laravel 12", "React.js", "MySQL Architecture", "Multi-Tenancy", "SaaS Infrastructure"],
    status: "ONLINE",
  },
  {
    num: "SYS.02",
    name: "Jewellery E-Commerce Site",
    desc: "A professional e-commerce platform engineered during my Bachelor's degree in collaboration with Arkya Apps. Specifically architected to manage high-value asset catalogs, detailed jewellery design variants, and safe customer buying histories. Developed with secure transactional logic pipelines, optimized table lookups for pricing metrics, and dynamic inventory sync configurations.",
    tags: ["Bachelor Project", "Arkya Apps", "E-Commerce", "MySQL Schemas", "Web Security"],
    status: "COMPLETED",
  },
  {
    num: "SYS.03",
    name: "Automated Library Management System",
    desc: "A structural backend software utility developed to automate resource tracking operations. Features complete data schemas for catalog indexing, student transactional databases, automated penalty fine computation logs, and book issuance audit matrices. Powered by optimized search algorithm integration for rapid item identification and atomic query transactions to guarantee absolute data consistency.",
    tags: ["Python", "MySQL Connect", "Database Logic", "Relational Views", "File IO Processing"],
    status: "COMPLETED",
  },
  {
    num: "SYS.04",
    name: "Hardware Stock & Supply Chain Management System",
    desc: "A comprehensive Bachelor-level final year project engineered to manage physical retail hardware assets. Architected with dedicated database pipelines mapping raw material inventories, vendor supply chains data, purchase receipt ledgers, and dynamic low-stock alert constraints. Employs trigger structures to maintain precise mathematical sync between sales logs and overall stock availability.",
    tags: ["Bachelor Project", "Full Stack", "Relational Mapping", "Inventory Logs", "SQL Triggers"],
    status: "COMPLETED",
  },
  {
    num: "SYS.05",
    name: "Carpenter Booking & Custom Orders Platform (In-House)",
    desc: "An internal, in-house web application developed during my Bachelor's graduation to bridge customers with skilled manufacturing labor. Structured with a fluid relational layout tracking detailed asset design catalogs, active appointment scheduling arrays, specialized pricing models, and specific job execution status pipelines. Features cross-table normalization to match customized client specifications smoothly.",
    tags: ["In-House Project", "Bachelor Tech", "Web UI", "Relational Tables", "Booking Schemas"],
    status: "COMPLETED",
  },
  {
    num: "SYS.06",
    name: "Social Media Optimization & Analytics Pipeline",
    desc: "Orchestrated and managed a high-traction social media page ecosystem for a continuous 1-year runtime cycle. Developed tailored digital content distribution pipelines, monitored complex user engagement analytics metrics, and engineered high-conversion visual graphics layouts to maximize organic reach, community growth velocity, and target audience retention strategies.",
    tags: ["Brand Operations", "Growth Metrics", "Graphic Designing", "Audience Analytics", "1-Year Maintenance"],
    status: "COMPLETED",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="w-full overflow-hidden py-16 px-4 md:px-6 border-t border-zinc-900 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-[var(--neon-cyan)] font-mono text-sm">03 //</span>
          <h2 className="font-syne font-bold text-4xl text-white">Execution Logs</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, index) => {
            const isCyan = index % 2 === 0;
            const cardColor = isCyan ? "var(--neon-cyan)" : "var(--neon-purple)";
            const shadowColor = isCyan ? "rgba(0, 206, 201, 0.1)" : "rgba(9, 132, 227, 0.1)";
            
            // Generates padded numbering format: 01, 02, 03, etc.
            const displayPoint = String(index + 1).padStart(2, "0");

            return (
              <div
                key={p.num}
                className="relative p-8 rounded-xl overflow-hidden border bg-[#111112]"
                style={{ 
                    borderColor: cardColor,
                    boxShadow: `0 0 15px ${shadowColor}`
                }}
              >
                <div 
                  className="absolute top-0 right-0 w-24 h-24 opacity-[0.05] rounded-bl-full pointer-events-none"
                  style={{ backgroundColor: cardColor }}
                />
                
                {/* Header Container layout with Point System */}
                <div className="flex justify-between items-center mb-6">
                  {/* Clean point tracking system prefix */}
                  <span className="font-mono text-xs font-bold text-zinc-500 tracking-wider">
                    {displayPoint} //
                  </span>
                  
                  <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest border ${
                    p.status === 'ONLINE' 
                      ? 'text-[var(--neon-cyan)] border-[var(--neon-cyan)] bg-[#00F0FF05]' 
                      : 'text-[var(--gold)] border-[var(--gold)] bg-[#FFD70005]'
                  }`}>
                    {p.status}
                  </span>
                </div>

                <h3 className="font-syne font-bold text-2xl text-white mb-4" style={{ color: cardColor }}>
                  {p.name}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6 font-light">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] uppercase tracking-widest font-mono font-semibold px-2 py-1 bg-black border border-zinc-800 text-gray-300 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}