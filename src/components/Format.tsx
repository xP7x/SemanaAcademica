import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function Format() {
  const formats = [
    {
      day: "DIA 1 • 13 OUT",
      dayId: "dia1",
      title: "Palestras e Workshops Práticos",
      desc: "Abertura oficial com ciclo de palestras temáticas ao longo de todo o dia e workshops práticos simultâneos no turno da noite."
    },
    {
      day: "DIA 2 • 14 OUT",
      dayId: "dia2",
      title: "Palestras Especializadas e Prática",
      desc: "Segundo dia com palestras ministradas por especialistas e nova rodada de workshops práticos simultâneos às 19h."
    },
    {
      day: "DIA 3 • 15 OUT",
      dayId: "dia3",
      title: "Mesas-Redondas e Encerramento",
      desc: "Dia dedicado a debates aprofundados em mesas-redondas temáticas com convidados e encerramento oficial da jornada."
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-24 bg-paper-2 relative scroll-mt-24" id="formato">
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
                <Link
                  to={`/programacao?dia=${f.dayId}`}
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase text-ink/60 group-hover:text-bordo group-hover:translate-x-1 transition-all duration-200"
                >
                  Saiba mais &rarr;
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

