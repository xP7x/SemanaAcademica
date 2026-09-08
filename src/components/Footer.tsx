import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="py-14 px-6 lg:px-24 bg-paper-2 border-t border-wire flex flex-col gap-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <div className="flex flex-col gap-2 max-w-xl">
          <span className="font-display text-2xl uppercase tracking-wider text-ink font-semibold">
            Jornada Acadêmica de Fisioterapia
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-bordo font-medium">
            UFRGS & UFCSPA • 13 a 15 de Outubro de 2026
          </span>
          <p className="font-body text-xs text-ink/75 mt-1 leading-relaxed">
            Evento produzido por <strong>Diretório Acadêmico de Fisioterapia da UFRGS</strong> e <strong>Diretório Acadêmico de Fisioterapia da UFCSPA</strong>.
          </p>
        </div>

        <Link
          to="/inscricao"
          className="px-8 py-3 font-display text-lg uppercase tracking-wider bg-bordo text-paper rounded-full hover:bg-bordo-deep transition-colors shadow-md shrink-0"
        >
          Inscrições em breve
        </Link>
      </div>

      <div className="pt-8 border-t border-wire/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <span className="font-body text-xs text-ink/60">
          © 2026 Jornada Acadêmica de Fisioterapia UFRGS & UFCSPA. Todos os direitos reservados.
        </span>

        {/* Logo e Créditos da Cadore Tech */}
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-[11px] uppercase tracking-wider text-ink/50">
            Desenvolvido por
          </span>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-paper rounded-md border border-wire/80 shadow-2xs hover:border-bordo transition-colors">
            {/* Logo Cadore Tech SVG */}
            <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-bordo">
              <rect width="32" height="32" rx="6" fill="currentColor" fillOpacity="0.1" />
              <path d="M10 11L5 16L10 21" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 11L27 16L22 21" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18 9L14 23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <div className="flex flex-col text-left">
              <span className="font-display font-bold text-xs tracking-wide text-ink leading-tight">
                CADORE<span className="text-bordo">.TECH</span>
              </span>
              <span className="font-mono text-[9px] text-ink/50 leading-none">
                DESENVOLVIMENTO WEB
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

