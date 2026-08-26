import { motion } from "framer-motion";

export function Sponsors() {
  const sponsors = [
    { name: "VOLL Pilates", desc: "Workshops e brindes" },
    { name: "Instituto Golden", desc: "Workshops e brindes" },
    { name: "FILA", desc: "Palestra" },
    { name: "Cadore Tech", desc: "Desenvolvimento Web" }
  ];

  return (
    <section className="py-24 px-6 lg:px-24 bg-paper relative">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-start gap-4"
          >
            <span className="font-display text-5xl text-bordo leading-none">07</span>
            <h2 className="font-display text-3xl text-ink leading-tight mt-1">APOIO &<br/>PATROCÍNIO</h2>
          </motion.div>
        </div>
        
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {sponsors.map((sponsor, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center justify-center p-8 border border-wire bg-paper-2 hover:border-bordo transition-colors group text-center"
            >
              <span className="font-display text-3xl text-ink/60 group-hover:text-bordo transition-colors">{sponsor.name}</span>
              <span className="font-mono text-xs uppercase tracking-widest text-ink/50 mt-3">{sponsor.desc}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
