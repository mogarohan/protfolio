"use client";

import React, { useState, useEffect } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll position check karne ke liye
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Top par scroll karne ka function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-[100] bg-[#111] border border-[var(--neon-cyan)] text-[var(--neon-cyan)] p-3 rounded-full shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:bg-[var(--neon-cyan)] hover:text-black hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] transition-all duration-300"
      aria-label="Scroll to top"
    >
      {/* Up Arrow SVG Icon */}
      <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="w-6 h-6"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}