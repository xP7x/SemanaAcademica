import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const workshops = [
  { time: "08:00–10:00", title: "Workshop Prático", type: "Fisioterapia esportiva" },
  { time: "10:30–12:30", title: "Workshop Prático", type: "Traumato-ortopédica" },
  { time: "13:30–15:30", title: "Workshop Prático", type: "Dermatofuncional" },
  { time: "16:00–18:00", title: "Workshop Prático", type: "Pilates" },
  { time: "A definir", title: "Workshop Prático", type: "Fisioterapia aquática" },
  { time: "A definir", title: "Workshop Prático", type: "Neurofuncional" },
];

export function Workshops() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
    }
  }, []);

  return (
    <section className="py-24 bg-bordo-deep relative overflow-hidden" id="workshops">
      <div className="px-6 lg:px-24 max-w-6xl mx-auto mb-16">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-start gap-4"
        >
          <span className="font-display text-5xl text-volt leading-none">05</span>
          <div>
            <h2 className="font-display text-3xl text-paper leading-tight mt-1">DIA 3 — WORKSHOPS</h2>
            <p className="font-body text-paper/70 mt-4 max-w-xl">
              O terceiro dia é dedicado a workshops práticos descentralizados. A programação e locais específicos serão confirmados em breve. Arraste para explorar.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="pl-6 lg:pl-24" ref={containerRef}>
        <motion.div 
          drag="x" 
          dragConstraints={{ right: 0, left: -width }}
          whileTap={{ cursor: "grabbing" }}
          className="flex gap-6 cursor-grab pb-12"
        >
          {workshops.map((ws, i) => (
            <motion.div
              key={i}
              className="min-w-[300px] md:min-w-[400px] bg-paper p-8 flex flex-col justify-between shrink-0 hover:rotate-1 transition-transform"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div>
                <span className="font-mono text-sm text-bordo mb-4 block">{ws.time}</span>
                <h3 className="font-display text-2xl text-ink mb-2">{ws.title}</h3>
                <p className="font-body text-ink/70">{ws.type}</p>
              </div>
              <div className="mt-12 flex flex-col gap-2">
                <div className="flex items-center justify-between border-t border-wire pt-4">
                  <span className="font-mono text-xs uppercase text-ink/50">Local</span>
                  <span className="font-mono text-xs px-2 py-1 bg-wire/30 text-ink rounded-sm">Em breve</span>
                </div>
                <div className="flex items-center justify-between border-t border-wire pt-4">
                  <span className="font-mono text-xs uppercase text-ink/50">Vagas</span>
                  <span className="font-mono text-xs px-2 py-1 bg-wire/30 text-ink rounded-sm">Em breve</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
