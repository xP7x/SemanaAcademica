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
          <h2 className="font-display text-6xl md:text-8xl text-paper mb-8 leading-none">
            GARANTA SUA VAGA
          </h2>
          
          <div className="flex flex-col gap-2 mb-12">
            <span className="font-display text-2xl text-paper">Ingresso Solidário:</span>
            <span className="font-mono text-lg text-paper uppercase tracking-wider">1kg de alimento não perecível</span>
          </div>
          
          <a 
            href="#"
            className="px-10 py-5 font-display text-2xl uppercase tracking-widest bg-paper text-bordo hover:bg-paper-2 transition-colors rounded-full shadow-[0_0_20px_rgba(244,233,221,0.2)] hover:shadow-[0_0_30px_rgba(244,233,221,0.4)]"
          >
            Inscreva-se via Sympla
          </a>
          <span className="font-mono text-xs text-paper/50 mt-6 block tracking-widest uppercase">
            * Vagas limitadas por workshop (20-40 pessoas por atividade)
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
