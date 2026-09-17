import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/src/lib/utils";
import { Menu, X } from "lucide-react";
import { SYMPLA_INSCRICAO_URL } from "../lib/constants";


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
    { name: "Workshops", path: "/workshops" },
    { name: "Patrocinadores", path: "/patrocinadores" },
  ];

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        scrolled || menuOpen ? "bg-paper/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="flex items-center justify-between px-6 py-4 md:px-12">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="font-display font-bold text-2xl tracking-wide uppercase text-bordo">
            Jornada Fisioterapia
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "font-display text-lg uppercase tracking-wide hover:text-bordo transition-colors",
                location.pathname === link.path ? "text-bordo font-bold" : "text-ink/75"
              )}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={SYMPLA_INSCRICAO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 font-display text-base uppercase tracking-wide bg-bordo text-paper rounded-full hover:bg-bordo-deep transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer"
          >
            Inscreva-se
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-ink cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir Menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col items-center gap-5 py-8 bg-paper/98 border-t border-wire/30 shadow-lg px-6">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "font-display text-xl uppercase tracking-wide py-1",
                location.pathname === link.path ? "text-bordo font-bold" : "text-ink/80"
              )}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={SYMPLA_INSCRICAO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 w-full max-w-xs text-center px-6 py-3 font-display text-lg uppercase tracking-wide bg-bordo text-paper rounded-full hover:bg-bordo-deep transition-all shadow-md active:scale-95 cursor-pointer"
          >
            Inscreva-se
          </a>
        </div>
      )}
    </motion.nav>
  );
}
