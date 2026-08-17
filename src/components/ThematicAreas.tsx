import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/src/lib/utils";

const areas = [
  "Neurofuncional",
  "Traumato-ortopédica",
  "Fisioterapia esportiva",
  "Terapia intensiva",
  "Fisioterapia respiratória",
  "Fisioterapia pediátrica",
  "Fisioterapia pélvica",
  "Gerontologia",
  "Fisioterapia cardiovascular",
  "Osteopatia",
  "Dermatofuncional",
  "Fisioterapia aquática",
  "Cuidados paliativos",
  "Fisioterapia do trabalho",
  "Pilates"
];

const mockSpeakers = [
  { id: 1, name: "Palestrante a confirmar", role: "Especialista", areas: ["Neurofuncional", "Fisioterapia pediátrica"] },
  { id: 2, name: "Palestrante a confirmar", role: "Especialista", areas: ["Traumato-ortopédica", "Fisioterapia esportiva"] },
  { id: 3, name: "Palestrante a confirmar", role: "Especialista", areas: ["Terapia intensiva", "Fisioterapia respiratória", "Fisioterapia cardiovascular"] },
  { id: 4, name: "Palestrante a confirmar", role: "Especialista", areas: ["Osteopatia", "Gerontologia"] },
  { id: 5, name: "Palestrante a confirmar", role: "Especialista", areas: ["Fisioterapia pélvica", "Fisioterapia do trabalho"] },
  { id: 6, name: "Palestrante a confirmar", role: "Especialista", areas: ["Dermatofuncional", "Fisioterapia aquática"] },
  { id: 7, name: "Palestrante a confirmar", role: "Especialista", areas: ["Cuidados paliativos"] },
  { id: 8, name: "Palestrante a confirmar", role: "Especialista", areas: ["Pilates"] },
  { id: 9, name: "Palestrante a confirmar", role: "Especialista", areas: ["Neurofuncional"] },
  { id: 10, name: "Palestrante a confirmar", role: "Especialista", areas: ["Traumato-ortopédica", "Osteopatia"] },
  { id: 11, name: "Palestrante a confirmar", role: "Especialista", areas: ["Fisioterapia esportiva"] },
  { id: 12, name: "Palestrante a confirmar", role: "Especialista", areas: ["Terapia intensiva", "Fisioterapia cardiovascular"] },
  { id: 13, name: "Palestrante a confirmar", role: "Especialista", areas: ["Fisioterapia pediátrica", "Fisioterapia respiratória"] },
  { id: 14, name: "Palestrante a confirmar", role: "Especialista", areas: ["Fisioterapia pélvica", "Gerontologia"] },
  { id: 15, name: "Palestrante a confirmar", role: "Especialista", areas: ["Fisioterapia do trabalho", "Pilates"] },
];

export function ThematicAreas() {
  const [activeArea, setActiveArea] = useState<string | null>(null);

  const toggleArea = (area: string) => {
    setActiveArea(prev => prev === area ? null : area);
  };

  return (
    <section className="py-24 px-6 lg:px-24 bg-paper relative" id="palestrantes">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-start gap-4 sticky top-32"
          >
            <span className="font-display text-5xl text-bordo leading-none">03</span>
            <div>
              <h2 className="font-display text-3xl text-ink leading-tight mt-1">ÁREAS &<br/>PALESTRANTES</h2>
              <p className="font-body text-ink/70 mt-6 text-lg">
                Selecione uma área temática para destacar os palestrantes relacionados.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-2/3 flex flex-col gap-12">
          {/* Areas Tags */}
          <div className="flex flex-wrap gap-2">
            {areas.map((area, i) => (
              <motion.button
                key={area}
                onClick={() => toggleArea(area)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, type: "spring", stiffness: 100 }}
                className={cn(
                  "px-4 py-2 border rounded-full font-mono text-sm tracking-wide transition-all duration-300 cursor-pointer",
                  activeArea === area 
                    ? "bg-bordo text-paper border-bordo shadow-md"
                    : "border-ink/20 bg-paper-2 text-ink/80 hover:border-bordo hover:text-bordo"
                )}
              >
                {area}
              </motion.button>
            ))}
          </div>

          {/* Speakers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {mockSpeakers.map((speaker, i) => {
              const isHighlighted = activeArea ? speaker.areas.includes(activeArea) : true;
              return (
                <motion.div
                  key={speaker.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={cn(
                    "p-6 border transition-all duration-500",
                    isHighlighted ? "border-wire bg-paper-2 opacity-100 scale-100" : "border-wire/30 bg-paper/50 opacity-30 scale-[0.98]"
                  )}
                >
                  <div className="w-16 h-16 bg-wire/30 rounded-full mb-4 flex items-center justify-center">
                    <span className="font-mono text-xs text-ink/50">FOTO</span>
                  </div>
                  <h3 className="font-display text-2xl text-ink mb-1">{speaker.name}</h3>
                  <p className="font-body text-ink/70 text-sm mb-4">{speaker.role}</p>
                  <div className="flex flex-wrap gap-2">
                    {speaker.areas.map(a => (
                      <span key={a} className={cn(
                        "font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded-sm transition-colors",
                        activeArea === a ? "bg-volt text-ink" : "bg-wire/30 text-ink/60"
                      )}>
                        {a}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
          
          <div className="p-4 bg-wire/10 border border-wire/30 rounded-md">
            <p className="font-mono text-xs text-ink/60 uppercase tracking-widest text-center">
              Nomes e fotos dos palestrantes serão confirmados em breve
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
