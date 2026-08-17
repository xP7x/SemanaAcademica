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
          <span className="font-display text-5xl text-volt mb-6">07</span>
          <h2 className="font-display text-6xl md:text-8xl text-paper mb-8 leading-none">
            GARANTA SUA VAGA
          </h2>
          
          <p className="font-body text-xl text-paper/70 mb-12 max-w-xl mx-auto">
            A plataforma de inscrições e os valores dos lotes serão divulgados em breve. Fique atento às nossas redes para não perder a abertura oficial.
          </p>
          
          <button 
            disabled
            className="px-8 py-4 font-display text-2xl uppercase tracking-widest bg-volt/20 text-volt border border-volt/50 rounded-full cursor-not-allowed opacity-80"
          >
            Inscrições em breve
          </button>
        </motion.div>
      </div>

      {/* Lightning decorative */}
      <motion.svg
        className="absolute inset-0 w-full h-full -z-0 opacity-5 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
      >
        <path d="M0 0 L100 100 L50 100 L150 200" stroke="currentColor" fill="none" strokeWidth="1" className="text-volt" vectorEffect="non-scaling-stroke" />
      </motion.svg>
    </section>
  );
}
