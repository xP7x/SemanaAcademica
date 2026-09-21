import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { User, MapPin, Users, Calendar, Sparkles } from "lucide-react";
import { cn } from "@/src/lib/utils";

type WorkshopItem = {
  id: number;
  day: string;
  dayNumber: "13" | "14";
  time: string;
  title: string;
  type: string;
  speaker: string;
  location: string;
  spots: string;
  note?: string;
};

const workshopsData: WorkshopItem[] = [
  {
    id: 1,
    day: "13/10 • Terça-feira",
    dayNumber: "13",
    time: "19:00",
    title: "Fisioterapia na jornada materna: do pré-parto ao pós-parto",
    type: "Fisioterapia Pélvica",
    speaker: "Natália Casagrande",
    location: "UFRGS - ESEFID",
    spots: "20 vagas",
  },
  {
    id: 2,
    day: "13/10 • Terça-feira",
    dayNumber: "13",
    time: "19:00",
    title: "Workshop de Dermatofuncional",
    type: "Dermatofuncional",
    speaker: "Manoela Neves",
    location: "UFRGS - ESEFID",
    spots: "20 vagas",
  },
  {
    id: 3,
    day: "13/10 • Terça-feira",
    dayNumber: "13",
    time: "19:00",
    title: "Prescrição à Funcionalidade: Reabilitação Pré e Pós-Protética",
    type: "Órtese e Prótese — Empresa Ottobock",
    speaker: "Maira Cunha - Empresa Ottobock",
    location: "UFRGS - ESEFID",
    spots: "20 vagas",
  },
  {
    id: 4,
    day: "14/10 • Quarta-feira",
    dayNumber: "14",
    time: "19:00",
    title: "Workshop de Dry Needling",
    type: "Terapia Manual & Dry Needling",
    speaker: "Empresa Golden",
    location: "UFRGS - ESEFID",
    spots: "20 vagas",
  },
  {
    id: 5,
    day: "14/10 • Quarta-feira",
    dayNumber: "14",
    time: "19:00",
    title: "Workshop De Pilates",
    type: "Pilates — Empresa VOLL",
    speaker: "Empresa VOLL",
    location: "UFRGS - ESEFID",
    spots: "20 vagas",
  },
  {
    id: 6,
    day: "14/10 • Quarta-feira",
    dayNumber: "14",
    time: "19:00",
    title: "Fundamentos da Eletromiografia e Análise com Python",
    type: "Eletromiografia & Python",
    speaker: "André Ivaniski-Mello",
    location: "UFRGS - ESEFID",
    spots: "20 vagas",
  },
];

export function Workshops() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [selectedDayFilter, setSelectedDayFilter] = useState<"all" | "13" | "14">("all");

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
    }
  }, [selectedDayFilter]);

  const filteredWorkshops = workshopsData.filter(ws => {
    if (selectedDayFilter === "all") return true;
    return ws.dayNumber === selectedDayFilter;
  });

  return (
    <section className="py-24 bg-bordo-deep relative overflow-hidden text-paper" id="workshops">
      <div className="px-6 lg:px-24 max-w-6xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-start gap-4"
        >
          <span className="font-display text-5xl text-paper leading-none">06</span>
          <div>
            <h2 className="font-display text-3xl text-paper leading-tight mt-1">WORKSHOPS PRÁTICOS</h2>
            <p className="font-body text-paper/80 mt-3 max-w-2xl text-base leading-relaxed">
              Atividades práticas simultâneas nos dias <strong>13 e 14 de outubro às 19h</strong> na <strong>UFRGS - ESEFID</strong>. Limite estrito de <strong>20 vagas por sala</strong> para garantir imersão prática total.
            </p>
          </div>
        </motion.div>

        {/* Filtro por dia dos workshops */}
        <div className="mt-8 flex flex-wrap gap-2 items-center">
          <button
            onClick={() => setSelectedDayFilter("all")}
            className={cn(
              "px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer border",
              selectedDayFilter === "all"
                ? "bg-paper text-bordo-deep border-paper font-semibold"
                : "bg-transparent text-paper/80 border-paper/30 hover:border-paper hover:text-paper"
            )}
          >
            Todos os workshops (6)
          </button>
          <button
            onClick={() => setSelectedDayFilter("13")}
            className={cn(
              "px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer border",
              selectedDayFilter === "13"
                ? "bg-paper text-bordo-deep border-paper font-semibold"
                : "bg-transparent text-paper/80 border-paper/30 hover:border-paper hover:text-paper"
            )}
          >
            13/10 • Terça (3 turmas)
          </button>
          <button
            onClick={() => setSelectedDayFilter("14")}
            className={cn(
              "px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer border",
              selectedDayFilter === "14"
                ? "bg-paper text-bordo-deep border-paper font-semibold"
                : "bg-transparent text-paper/80 border-paper/30 hover:border-paper hover:text-paper"
            )}
          >
            14/10 • Quarta (3 turmas)
          </button>
        </div>
      </div>

      <div className="pl-6 lg:pl-24" ref={containerRef}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -Math.max(0, width) }}
          whileTap={{ cursor: "grabbing" }}
          className="flex gap-6 cursor-grab pb-12 pr-6"
        >
          {filteredWorkshops.map((ws) => (
            <motion.div
              key={ws.id}
              className="min-w-[320px] md:min-w-[380px] bg-paper text-ink p-7 rounded-lg flex flex-col justify-between shrink-0 shadow-lg hover:-translate-y-1 transition-transform border border-wire"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs font-semibold text-bordo bg-bordo/10 px-2.5 py-1 rounded-full flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {ws.day} • {ws.time}
                  </span>
                  <span className="font-mono text-xs font-bold text-ink/40">
                    #0{ws.id}
                  </span>
                </div>

                <h3 className="font-display text-2xl text-ink mb-1.5 leading-snug">
                  {ws.title}
                </h3>
                <p className="font-body text-xs text-ink/65 mb-4 uppercase tracking-wider font-mono">
                  {ws.type}
                </p>

                <div className="bg-paper-2 p-3 rounded-md border border-wire/60 flex items-center gap-2 mb-4">
                  <User className="w-4 h-4 text-bordo shrink-0" />
                  <div className="text-xs">
                    <span className="text-ink/60 block font-body">Responsável / Palestrante:</span>
                    <strong className="text-ink font-semibold">{ws.speaker}</strong>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-wire flex flex-col gap-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono uppercase text-ink/60 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-bordo" /> Local
                  </span>
                  <span className="font-mono font-medium text-ink bg-wire/30 px-2 py-0.5 rounded-sm">
                    {ws.location}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono uppercase text-ink/60 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-bordo" /> Vagas
                  </span>
                  <span className="font-mono font-semibold text-bordo bg-bordo/10 px-2 py-0.5 rounded-sm">
                    {ws.spots} por turma
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

