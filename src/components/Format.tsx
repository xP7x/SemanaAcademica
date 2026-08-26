import { motion } from "framer-motion";

export function Format() {
  const formats = [
    {
      day: "DIA 1",
      title: "Palestras e Workshops",
      desc: "Imersão em áreas como Dermato, Geronto e Pélvica, com apresentações e workshops simultâneos no final do dia."
    },
    {
      day: "DIA 2",
      title: "Palestras e Workshops",
      desc: "Blocos científicos contínuos focados em conteúdo aprofundado, também finalizando com workshops práticos simultâneos."
    },
    {
      day: "DIA 3",
      title: "Mesas-Redondas",
      desc: "Discussões dinâmicas entre profissionais sobre o mercado, carreira e diferentes aspectos da prática fisioterapêutica."
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-24 bg-paper-2 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-start gap-4 mb-16"
        >
          <span className="font-display text-5xl text-bordo leading-none">03</span>
          <h2 className="font-display text-3xl text-ink leading-tight mt-1">FORMATO</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {formats.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group bg-paper p-8 border border-wire hover:border-bordo transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs tracking-widest text-bordo bg-bordo/10 px-2 py-1 rounded-sm mb-4 inline-block">
                  {f.day}
                </span>
                <h3 className="font-display text-2xl text-ink mb-4">{f.title}</h3>
                <p className="font-body text-ink/70 leading-relaxed">{f.desc}</p>
              </div>
              <div className="mt-8 pt-4 border-t border-wire/50">
                <span className="font-mono text-xs uppercase text-ink/40 group-hover:text-bordo transition-colors">
                  Saiba mais &rarr;
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
