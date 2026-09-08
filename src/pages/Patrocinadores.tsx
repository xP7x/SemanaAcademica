import { Sponsors } from "../components/Sponsors";
import { Sparkles, Handshake } from "lucide-react";

export function Patrocinadores() {
  return (
    <div className="pt-20">
      {/* Intro Banner */}
      <section className="bg-paper-2 py-12 px-6 lg:px-24 border-b border-wire">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-bordo mb-2">
              <Sparkles className="w-4 h-4" />
              <span className="font-mono text-xs uppercase tracking-widest font-semibold">
                Parcerias que Fortalecem a Fisioterapia
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl text-ink">
              APOIO & PATROCÍNIO
            </h1>
            <p className="font-body text-ink/75 mt-2 max-w-xl text-base">
              Conheça as empresas, marcas e instituições que viabilizam e impulsionam a Jornada Acadêmica UFRGS & UFCSPA.
            </p>
          </div>

          <div className="p-4 bg-paper border border-wire rounded-md flex items-center gap-3 text-xs font-mono max-w-xs">
            <Handshake className="w-6 h-6 text-bordo shrink-0" />
            <span className="text-ink/80">
              Interessado em apoiar o evento? Entre em contato com a comissão organizadora.
            </span>
          </div>
        </div>
      </section>

      <Sponsors />
    </div>
  );
}
