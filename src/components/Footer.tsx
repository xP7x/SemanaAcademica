import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-24 bg-paper-2 border-t border-wire flex flex-col gap-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div className="flex flex-col gap-2">
          <span className="font-display text-xl uppercase tracking-widest text-ink">
            Jornada Acadêmica de Fisioterapia
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-ink/60">
            UFRGS & UFCSPA • 13 a 15 de Outubro de 2026
          </span>
        </div>
        <Link
          to="/inscricao"
          className="px-8 py-3 font-display text-lg uppercase tracking-widest bg-bordo text-paper rounded-full hover:bg-bordo-deep transition-colors shadow-md"
        >
          Fazer Inscrição
        </Link>
      </div>
      <div className="text-center md:text-right">
        <span className="font-mono text-xs uppercase tracking-widest text-ink/40">
          Site desenvolvido por Cadore Tech
        </span>
      </div>
    </footer>
  );
}
