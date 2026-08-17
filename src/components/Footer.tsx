export function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-24 bg-paper-2 border-t border-wire text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex flex-col gap-2">
        <span className="font-display text-xl uppercase tracking-widest text-ink">
          Jornada Acadêmica de Fisioterapia
        </span>
        <span className="font-mono text-xs uppercase tracking-widest text-ink/60">
          UFRGS & UFCSPA • 13 a 15 de Outubro de 2026
        </span>
      </div>
      <div className="flex flex-col md:items-end gap-2">
        <span className="font-mono text-xs uppercase tracking-widest text-ink/40">
          Site desenvolvido por Cadore Tech
        </span>
      </div>
    </footer>
  );
}
