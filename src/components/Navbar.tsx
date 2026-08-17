import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/src/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-colors duration-300",
        scrolled ? "bg-paper/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <div className="flex items-center gap-2">
        {/* Simple stylized SVG for nav logo */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M13 12L15 6L11 12L9 18L13 12Z" fill="currentColor" />
        </svg>
        <span className="font-display font-bold text-xl tracking-wide uppercase text-bordo">
          Jornada Fisioterapia
        </span>
      </div>
      <a
        href="#inscricao"
        className="px-5 py-2 font-display text-lg uppercase tracking-wide bg-bordo text-paper rounded-full hover:bg-bordo-deep transition-colors"
      >
        Garanta sua vaga
      </a>
    </motion.nav>
  );
}
