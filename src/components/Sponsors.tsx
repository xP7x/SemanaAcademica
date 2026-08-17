import { motion } from "framer-motion";

export function Sponsors() {
  return (
    <section className="py-24 px-6 lg:px-24 bg-paper relative">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-start gap-4"
          >
            <span className="font-display text-5xl text-bordo leading-none">06</span>
            <h2 className="font-display text-3xl text-ink leading-tight mt-1">APOIO &<br/>PATROCÍNIO</h2>
          </motion.div>
        </div>
        
        <div className="md:w-2/3 flex flex-col gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center p-12 border border-wire bg-paper-2 hover:border-bordo transition-colors group"
          >
            <span className="font-display text-4xl text-ink/40 group-hover:text-bordo transition-colors">GOLDEN</span>
            <span className="font-mono text-xs uppercase tracking-widest text-ink/60 mt-4">Apoio a Workshops e Brindes</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center justify-center p-12 border border-wire bg-paper-2 hover:border-bordo transition-colors group"
          >
            <span className="font-display text-4xl text-ink/40 group-hover:text-bordo transition-colors">Cadore Tech</span>
            <span className="font-mono text-xs uppercase tracking-widest text-ink/60 mt-4">Desenvolvimento Web</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
