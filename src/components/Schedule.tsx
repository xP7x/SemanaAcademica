import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/src/lib/utils";

type Activity = {
  time: string;
  activity: string;
  format: string;
};

const dia1: Activity[] = [
  { time: "08:00", activity: "Credenciamento", format: "Recepção e controle de presença" },
  { time: "08:30", activity: "Abertura", format: "Abertura institucional e possível apresentação cultural" },
  { time: "09:00–09:50", activity: "Bloco científico", format: "Palestra" },
  { time: "09:50–10:30", activity: "Bloco científico", format: "Palestra" },
  { time: "10:30–10:40", activity: "Intervalo curto", format: "Livre" },
  { time: "10:40–11:20", activity: "Bloco científico", format: "Palestra" },
  { time: "11:20–12:00", activity: "Bloco científico", format: "Mesa-redonda" },
  { time: "12:30–13:30", activity: "Intervalo", format: "Almoço" },
  { time: "13:30", activity: "Retomada", format: "Orientações ao público" },
  { time: "14:00–14:40", activity: "Bloco científico", format: "Palestra" },
  { time: "14:50–15:30", activity: "Bloco científico", format: "Mesa-redonda" },
  { time: "15:30–16:00", activity: "Intervalo", format: "Coffee break previsto" },
  { time: "16:00–16:40", activity: "Bloco científico", format: "Palestra" },
  { time: "16:50–17:30", activity: "Bloco científico", format: "Palestra" },
  { time: "17:30–18:00", activity: "Encerramento", format: "Agradecimentos e chamada para o dia seguinte" },
];

const dia2: Activity[] = [
  { time: "08:00", activity: "Credenciamento", format: "Recepção e controle de presença" },
  { time: "08:30–09:20", activity: "Bloco científico", format: "Palestra" },
  { time: "09:20–10:00", activity: "Bloco científico", format: "Palestra" },
  { time: "10:00–10:30", activity: "Intervalo", format: "Formato a definir" },
  { time: "10:30–11:20", activity: "Bloco científico", format: "Mesa-redonda" },
  { time: "11:20–12:00", activity: "Bloco científico", format: "Palestra" },
  { time: "12:30–13:30", activity: "Intervalo", format: "Almoço" },
  { time: "13:30", activity: "Retomada", format: "Orientações ao público" },
  { time: "14:00–14:40", activity: "Bloco científico", format: "Palestra" },
  { time: "14:50–15:30", activity: "Bloco científico", format: "Mesa-redonda" },
  { time: "15:30–16:00", activity: "Intervalo", format: "Coffee break previsto" },
  { time: "16:00–16:40", activity: "Bloco científico", format: "Palestra" },
  { time: "16:50–17:30", activity: "Bloco científico", format: "Palestra" },
  { time: "17:30–18:00", activity: "Encerramento", format: "Agradecimentos e chamada para os workshops" },
];

const dias = [
  { id: "dia1", label: "DIA 1 - 13 OUT", local: null, data: dia1 },
  { id: "dia2", label: "DIA 2 - 14 OUT", local: "UFCSPA", data: dia2 },
];

export function Schedule() {
  const [activeTab, setActiveTab] = useState(dias[0].id);

  const activeData = dias.find((d) => d.id === activeTab);

  return (
    <section className="py-24 px-6 lg:px-24 bg-paper-2 relative" id="programacao">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-start gap-4 sticky top-32"
          >
            <span className="font-display text-5xl text-bordo leading-none">04</span>
            <div>
              <h2 className="font-display text-3xl text-ink leading-tight mt-1">PROGRAMAÇÃO</h2>
              <div className="mt-8 flex flex-col gap-2 relative">
                {dias.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => setActiveTab(d.id)}
                    className={cn(
                      "text-left py-3 px-4 font-display text-xl transition-colors relative z-10",
                      activeTab === d.id ? "text-paper" : "text-ink/60 hover:text-ink"
                    )}
                  >
                    {activeTab === d.id && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="absolute inset-0 bg-bordo rounded-md -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    {d.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="md:w-2/3">
          {activeData && (
            <motion.div
              key={activeData.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="mb-8 p-4 bg-wire/10 rounded-md border border-wire/30 flex items-center justify-between">
                <span className="font-body text-ink font-medium">Local do dia:</span>
                {activeData.local ? (
                  <span className="font-mono text-sm">{activeData.local}</span>
                ) : (
                  <span className="font-mono text-xs px-2 py-1 bg-wire text-ink rounded-sm">Em breve</span>
                )}
              </div>

              <div className="relative border-l-2 border-bordo/20 pl-6 pb-4">
                {activeData.data.map((item, idx) => (
                  <div key={idx} className="mb-8 relative group">
                    {/* Timeline dot */}
                    <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-paper border-2 border-bordo/50 group-hover:border-bordo group-hover:bg-bordo transition-colors" />
                    
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                      <span className="font-mono text-sm text-bordo w-24 shrink-0">{item.time}</span>
                      <div>
                        <h4 className="font-display text-xl text-ink">{item.activity}</h4>
                        <p className="font-body text-ink/70 mt-1">{item.format}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
