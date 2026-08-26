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
  { id: 1, name: "Deborah Matias", role: "Fisioterapeuta da Seleção Brasileira Sub-21 de Judô", summary: "Especialista no acompanhamento e reabilitação de atletas de alto rendimento.", areas: ["Fisioterapia esportiva"] },
  { id: 2, name: "Thaiane Cavalheiro", role: "Fisioterapeuta Dermatofuncional; Pós operatório cirurgia plástica", summary: "Focada em técnicas avançadas de recuperação cirúrgica e bem-estar estético.", areas: ["Dermatofuncional"] },
  { id: 3, name: "Leonardo Neves", role: "Fisioterapeuta traumato. Especialista em reabilitação", summary: "Atua na recuperação de traumas complexos com abordagem integrativa e humanizada.", areas: ["Traumato-ortopédica"] },
  { id: 4, name: "Ivana Camargo", role: "Fisioterapia pélvica-hospitalar, saúde trans", summary: "Pioneira na fisioterapia para a população trans e disfunções do assoalho pélvico.", areas: ["Fisioterapia pélvica"] },
  { id: 5, name: "Murilo de Carvalho", role: "Fisioterapeuta Gerontológico", summary: "Dedica-se à melhoria da qualidade de vida e mobilidade na terceira idade.", areas: ["Gerontologia"] },
  { id: 6, name: "Mylena Francini", role: "Fisioterapeuta, PPGCMH", summary: "Pesquisadora focada em neurociência aplicada ao movimento esportivo.", areas: ["Neurofuncional", "Fisioterapia esportiva"] },
  { id: 7, name: "Camila Pinto", role: "Fisioterapeuta Neurofuncional Adulto, Phd PPGCMH", summary: "Especialista em reabilitação neurológica com vasta produção científica.", areas: ["Neurofuncional"] },
  { id: 8, name: "Denis Selau", role: "Fisioterapeuta UFRGS, Residente Cardiovascular HCPA", summary: "Atua na linha de frente do cuidado intensivo e reabilitação cardíaca.", areas: ["Fisioterapia cardiovascular"] },
  { id: 9, name: "Natanielle Dutra", role: "Fisioterapeuta Esp. Cardiorrespiratória e Terapia Intensiva", summary: "Experiência sólida no suporte respiratório de pacientes críticos.", areas: ["Fisioterapia respiratória", "Terapia intensiva"] },
  { id: 10, name: "Mariana Vieira", role: "Médica Cuidados Paliativos, Formação em Perdas", summary: "Médica convidada, integrando a visão multiprofissional sobre o fim de vida e luto.", areas: ["Cuidados paliativos"] },
  { id: 11, name: "Gabriela Jaroceski", role: "Fisioterapeuta Esp. Terapia Intensiva", summary: "Comprometida com a excelência técnica em unidades de terapia intensiva.", areas: ["Terapia intensiva", "Fisioterapia respiratória"] },
];

export function ThematicAreas() {
  const [activeArea, setActiveArea] = useState<string | null>(null);

  const toggleArea = (area: string) => {
    setActiveArea(prev => prev === area ? null : area);
  };

  return (
    <section className="py-24 px-6 lg:px-24 bg-paper relative" id="palestrantes">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <div className="w-full">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-start gap-4"
          >
            <span className="font-display text-5xl text-bordo leading-none">04</span>
            <div>
              <h2 className="font-display text-3xl text-ink leading-tight mt-1">ÁREAS &<br/>PALESTRANTES</h2>
              <p className="font-body text-ink/70 mt-4 text-lg">
                Selecione uma área temática para destacar os palestrantes relacionados.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="w-full flex flex-col gap-12">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    "border transition-all duration-500 overflow-hidden rounded-lg flex flex-col h-full",
                    isHighlighted ? "border-wire bg-paper-2 opacity-100 scale-100 shadow-md" : "border-wire/30 bg-paper/50 opacity-30 scale-[0.98]"
                  )}
                >
                  <div className="w-full h-48 bg-wire/30 flex items-center justify-center shrink-0">
                    <span className="font-mono text-xs text-ink/50">FOTO</span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display text-2xl text-ink mb-1">{speaker.name}</h3>
                    <p className="font-body text-ink/70 text-sm mb-4">{speaker.role}</p>
                    <p className="font-body text-ink/80 text-sm mb-6 flex-1">{speaker.summary}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {speaker.areas.map(a => (
                        <span key={a} className={cn(
                          "font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded-sm transition-colors",
                          activeArea === a ? "bg-bordo text-paper" : "bg-wire/30 text-ink/60"
                        )}>
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}
