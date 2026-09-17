import { Link } from "react-router-dom";
import { SYMPLA_INSCRICAO_URL } from "../lib/constants";

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

        <a
          href={SYMPLA_INSCRICAO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 font-display text-lg uppercase tracking-wider bg-bordo text-paper rounded-full hover:bg-bordo-deep transition-all shadow-md shrink-0 hover:scale-105 active:scale-95 cursor-pointer"
        >
          Inscreva-se
        </a>
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
          {/* Logo Cadore Tech */}
          <img
            src="/images/cadoretech-logo.png"
            alt="CadoreTech"
            className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </footer>
  );
}

