import { motion } from "framer-motion";

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
            INSCRIÇÕES EM BREVE
          </h2>
          <p className="font-body text-paper/80 text-lg max-w-xl mb-10">
            A abertura do primeiro lote de inscrições para a Jornada Acadêmica será divulgada nos canais oficiais das universidades e diretórios acadêmicos.
          </p>
          
          <div className="flex flex-col gap-2 mb-10 p-6 bg-paper/10 border border-paper/20 rounded-xl backdrop-blur-xs max-w-md w-full">
            <span className="font-display text-xl sm:text-2xl text-paper">Ingresso Solidário:</span>
            <span className="font-mono text-base text-paper uppercase tracking-wider font-semibold">1kg de alimento não perecível</span>
            <span className="font-body text-xs text-paper/70 mt-1">
              Entregue no credenciamento nos dias do evento
            </span>
          </div>
          
          <div className="inline-flex items-center justify-center px-10 py-5 font-display text-2xl uppercase tracking-widest bg-paper text-bordo rounded-full shadow-[0_0_20px_rgba(244,233,221,0.2)] opacity-95">
            Abertura em Breve via Sympla
          </div>
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
