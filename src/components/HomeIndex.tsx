import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

interface SectionIndexItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
}

const sections: SectionIndexItem[] = [
  {
    id: "sobre",
    number: "01",
    title: "SOBRE O EVENTO",
    subtitle: "Integração acadêmica de fisioterapia"
  },
  {
    id: "publico",
    number: "02",
    title: "O PÚBLICO",
    subtitle: "Comunidade acadêmica e público externo"
  },
  {
    id: "formato",
    number: "03",
    title: "FORMATO DOS DIAS",
    subtitle: "Palestras, workshops e mesas-redondas"
  }
];

export function HomeIndex() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="px-6 lg:px-24 py-10 bg-paper border-y border-wire/60">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6"
        >
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-bordo" />
            <span className="font-mono text-xs uppercase tracking-widest text-ink/70">
              Índice da Página Inicial
            </span>
          </div>
          <span className="font-mono text-xs text-ink/50 hidden md:block">
            Clique para navegar diretamente até a seção
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sections.map((sec, i) => (
            <motion.button
              key={sec.id}
              onClick={() => scrollTo(sec.id)}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group text-left p-5 bg-paper-2/60 border border-wire/70 hover:border-bordo hover:bg-paper-2 transition-all duration-300 rounded-sm flex flex-col justify-between relative cursor-pointer"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-display text-4xl text-bordo/80 group-hover:text-bordo group-hover:scale-105 transition-all">
                  {sec.number}
                </span>
                <div className="w-7 h-7 rounded-full border border-wire/60 flex items-center justify-center text-ink/40 group-hover:text-bordo group-hover:border-bordo group-hover:translate-y-0.5 transition-all">
                  <ArrowDown className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="mt-4">
                <h3 className="font-display text-xl sm:text-xl text-ink group-hover:text-bordo transition-colors">
                  {sec.title}
                </h3>
                <p className="font-body text-sm sm:text-xs text-ink/65 mt-1 leading-snug">
                  {sec.subtitle}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
