import { motion } from "framer-motion";
import { SYMPLA_INSCRICAO_URL } from "../lib/constants";
import { ExternalLink } from "lucide-react";

export function Registration() {
  return (
    <section className="py-32 px-6 lg:px-24 bg-bordo-deep relative text-center" id="inscricao">
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <span className="font-display text-5xl text-paper mb-6">08</span>
          <h2 className="font-display text-5xl sm:text-6xl md:text-8xl text-paper mb-6 leading-none">
            INSCRIÇÕES ABERTAS
          </h2>
          <p className="font-body text-paper/80 text-lg max-w-xl mb-10">
            As inscrições para a Jornada Acadêmica da Fisioterapia UFRGS & UFCSPA já estão disponíveis através da plataforma Sympla. Garanta a sua vaga!
          </p>
          
          <div className="flex flex-col gap-2 mb-10 p-6 bg-paper/10 border border-paper/20 rounded-xl backdrop-blur-xs max-w-md w-full">
            <span className="font-display text-xl sm:text-2xl text-paper">Ingresso Solidário:</span>
            <span className="font-mono text-base text-paper uppercase tracking-wider font-semibold">1kg de alimento não perecível</span>
            <span className="font-body text-xs text-paper/70 mt-1">
              Entregue no credenciamento nos dias do evento
            </span>
          </div>
          
          <a
            href={SYMPLA_INSCRICAO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 font-display text-2xl uppercase tracking-widest bg-paper text-bordo rounded-full shadow-[0_0_30px_rgba(244,233,221,0.35)] hover:bg-paper-2 hover:scale-105 active:scale-95 transition-all cursor-pointer font-bold"
          >
            <span>Inscreva-se</span>
            <ExternalLink className="w-6 h-6" />
          </a>
          <span className="font-mono text-xs text-paper/60 mt-6 block tracking-widest uppercase">
            * Vagas limitadas por workshop (20 pessoas por atividade na UFRGS - ESEFID)
          </span>
        </motion.div>
      </div>

      {/* Lightning decorative */}
      <motion.svg
        className="absolute inset-0 w-full h-full -z-0 opacity-5 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
      >
        <path d="M0 0 L100 100 L50 100 L150 200" stroke="currentColor" fill="none" strokeWidth="1" className="text-paper/20" vectorEffect="non-scaling-stroke" />
      </motion.svg>
    </section>
  );
}
