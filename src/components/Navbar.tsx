import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/src/lib/utils";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const links = [
    { name: "Início", path: "/" },
    { name: "Convidados", path: "/convidados" },
    { name: "Programação", path: "/programacao" },
  ];

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        scrolled || menuOpen ? "bg-paper/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <div className="flex items-center justify-between px-6 py-6 md:px-12">
        <Link to="/" className="flex items-center gap-3">
          {/* Simple stylized SVG for nav logo */}
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M13 12L15 6L11 12L9 18L13 12Z" fill="currentColor" />
          </svg>
          <span className="font-display font-bold text-2xl tracking-wide uppercase text-bordo hidden sm:block">
            Jornada Fisioterapia
          </span>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={cn(
                "font-display text-xl uppercase tracking-wide hover:text-bordo transition-colors",
                location.pathname === link.path ? "text-bordo" : "text-ink/70"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/inscricao"
            className="px-6 py-3 font-display text-xl uppercase tracking-wide bg-bordo text-paper rounded-full hover:bg-bordo-deep transition-colors shadow-md"
          >
            Garanta sua vaga
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-ink"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 py-8 border-t border-wire/20">
          {links.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={cn(
                "font-display text-2xl uppercase tracking-wide",
                location.pathname === link.path ? "text-bordo" : "text-ink/80"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/inscricao"
            className="mt-4 px-8 py-3 font-display text-xl uppercase tracking-wide bg-bordo text-paper rounded-full hover:bg-bordo-deep transition-colors"
          >
            Garanta sua vaga
          </Link>
        </div>
      )}
    </motion.nav>
  );
}
