import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { cn } from "@/src/lib/utils";
import { Clock, User, Sparkles, MapPin, Tag, ArrowDown } from "lucide-react";

type ActivityCategory =
  | "palestra"
  | "mesa"
  | "workshop"
  | "intervalo"
  | "credenciamento"
  | "solenidade"
  | "cultural";

type Activity = {
  time: string;
  activity: string;
  category: ActivityCategory;
  speaker?: string;
  topic?: string;
  theme?: string;
  notes?: string;
};

const dia1: Activity[] = [
  { time: "08:30", activity: "Credenciamento", category: "credenciamento", notes: "Controle de presença (manhã)" },
  { time: "09:00", activity: "Abertura Oficial", category: "solenidade", notes: "Junto do Crefito e coordenadores" },
  { time: "09:30", activity: "Fisioterapia Dermatofuncional na Cirurgia Plástica: da graduação à prática profissional", category: "palestra", speaker: "Thaiane Cavalheiro da Silva", topic: "Dermatofuncional", notes: "Perguntas abertas ao final" },
  { time: "10:20", activity: "Intervalo", category: "intervalo" },
  { time: "10:30", activity: "Palestra: Gerontologia", category: "palestra", speaker: "Murilo de Carvalho", topic: "Gerontologia", notes: "Perguntas abertas ao final" },
  { time: "11:20", activity: "Da lesão ao desempenho: como construir um retorno ao esporte de verdade", category: "palestra", speaker: "Mauren Fraga", topic: "Fisioterapia Esportiva", notes: "Perguntas abertas ao final" },
  { time: "12:10", activity: "Intervalo de Almoço", category: "intervalo" },
  { time: "13:00", activity: "Credenciamento", category: "credenciamento", notes: "Controle de presença (tarde)" },
  { time: "13:30", activity: "Apresentação Cultural", category: "cultural", notes: "Apresentação artística e cultural" },
  { time: "14:00", activity: "Diversidade sexual e de gênero na fisioterapia", category: "palestra", speaker: "Ivana Camargo", topic: "Fisioterapia Pélvica", notes: "Perguntas abertas ao final" },
  { time: "14:50", activity: "Intervalo", category: "intervalo" },
  { time: "15:00", activity: "Palestra: Traumato-ortopédica", category: "palestra", speaker: "Leonardo Neves", topic: "Traumato-ortopédica", notes: "Perguntas abertas ao final" },
  { time: "15:50", activity: "Intervalo", category: "intervalo" },
  { time: "16:00", activity: "Palestra Especial da FILA", category: "palestra", speaker: "Wagner Rosa de Oliveira (FILA)", topic: "Tecnologia e Performance", notes: "Perguntas abertas ao final" },
  { time: "16:50", activity: "Encerramento do Bloco de Palestras", category: "solenidade", notes: "Orientações para os workshops" },
  { time: "17:10", activity: "Coffee Break", category: "intervalo" },
  { time: "19:00", activity: "Workshops Simultâneos", category: "workshop", topic: "Fisioterapia Pélvica, Dermatofuncional e Órtese & Prótese", notes: "Local: UFRGS - ESEFID" },
];

const dia2: Activity[] = [
  { time: "08:30", activity: "Credenciamento", category: "credenciamento", notes: "Controle de presença (manhã)" },
  { time: "09:00", activity: "Abertura do Dia", category: "solenidade", notes: "Abertura do segundo dia" },
  { time: "09:30", activity: "Desmame da ventilação", category: "palestra", speaker: "Caroline Schmidt", topic: "Fisioterapia Respiratória", notes: "Perguntas abertas ao final" },
  { time: "10:20", activity: "Intervalo", category: "intervalo" },
  { time: "10:30", activity: "Doença de Parkinson", category: "palestra", speaker: "Camila Pinto", topic: "Neurofuncional", notes: "Perguntas abertas ao final" },
  { time: "11:20", activity: "Paralisia Cerebral", category: "palestra", speaker: "Mylena Francini", topic: "Neurofuncional Pediátrica", notes: "Perguntas abertas ao final" },
  { time: "12:10", activity: "Intervalo de Almoço", category: "intervalo" },
  { time: "13:00", activity: "Credenciamento", category: "credenciamento", notes: "Controle de presença (tarde)" },
  { time: "13:30", activity: "Apresentação Cultural", category: "cultural", notes: "Apresentação artística e cultural" },
  { time: "14:00", activity: "Palestra: Terapia Intensiva e Adulto Crítico", category: "palestra", speaker: "Gabriela Jaroceski", topic: "Terapia Intensiva e Adulto Crítico", notes: "Perguntas abertas ao final" },
  { time: "14:50", activity: "Intervalo", category: "intervalo" },
  { time: "15:00", activity: "Palestra: Cuidados Paliativos", category: "palestra", speaker: "Mariana Vieira", topic: "Cuidados Paliativos", notes: "Perguntas abertas ao final" },
  { time: "15:50", activity: "Intervalo", category: "intervalo" },
  { time: "16:00", activity: "Reabilitação cardíaca: princípios, segurança e efetividade", category: "palestra", speaker: "Dênis Selau", topic: "Fisioterapia Cardiovascular", notes: "Perguntas abertas ao final" },
  { time: "16:50", activity: "Encerramento do Bloco de Palestras", category: "solenidade", notes: "Orientações para os workshops" },
  { time: "17:10", activity: "Coffee Break", category: "intervalo" },
  { time: "19:00", activity: "Workshops Simultâneos", category: "workshop", topic: "Dry Needling, Pilates e Eletromiografia com Python", notes: "Local: UFRGS - ESEFID" },
];

const dia3: Activity[] = [
  { time: "08:30", activity: "Credenciamento", category: "credenciamento", notes: "Controle de presença (manhã)" },
  { time: "09:00", activity: "Abertura do Dia", category: "solenidade", notes: "Abertura das mesas-redondas" },
  { time: "09:30", activity: "Mesa: Entrei na Fisio, e agora?", category: "mesa", topic: "Vivências Acadêmicas e Integração", speaker: "Professor Luiz Fernando Alvarenga", notes: "Perguntas abertas ao final" },
  { time: "10:20", activity: "Intervalo", category: "intervalo" },
  { time: "10:30", activity: "Mesa: Atenção Primária à Saúde", category: "mesa", topic: "Atenção Primária à Saúde (APS)", speaker: "A definir", notes: "Perguntas abertas ao final" },
  { time: "11:20", activity: "Mesa: Redes Sociais", category: "mesa", topic: "Comunicação e Redes Sociais na Fisioterapia", speaker: "Professora Ângela Ghisleni", notes: "Perguntas abertas ao final" },
  { time: "12:10", activity: "Intervalo de Almoço", category: "intervalo" },
  { time: "13:00", activity: "Credenciamento", category: "credenciamento", notes: "Controle de presença (tarde)" },
  { time: "13:30", activity: "Apresentação Cultural", category: "cultural", notes: "Apresentação especial de Ballet" },
  { time: "14:00", activity: "Mesa: Me formei, e agora?", category: "mesa", topic: "Transição de Carreira e Mercado", speaker: "A definir", notes: "Perguntas abertas ao final" },
  { time: "14:50", activity: "Intervalo", category: "intervalo" },
  { time: "15:00", activity: "Mesa: Aspectos da Dor", category: "mesa", topic: "Aspectos da Dor e Neurociência", speaker: "Professora Camila Pinto", notes: "Perguntas abertas ao final" },
  { time: "15:50", activity: "Intervalo", category: "intervalo" },
  { time: "16:00", activity: "Mesa GreNal: Além das quatro linhas", category: "mesa", theme: "Além das quatro linhas: O Dia a Dia do Fisioterapeuta na Dupla GreNal", topic: "Fisioterapia Esportiva", speaker: "Professor Leandro Bonetti", notes: "Perguntas abertas ao final" },
  { time: "17:00", activity: "Encerramento Oficial da Jornada", category: "solenidade", notes: "Agradecimentos e encerramento do evento" },
];

const dias = [
  {
    id: "dia1",
    label: "DIA 13/10 • TERÇA",
    subtitle: "Palestras Temáticas e Workshops Práticos",
    local: "Palestras: UFCSPA | Workshops: UFRGS - ESEFID (19h)",
    data: dia1,
  },
  {
    id: "dia2",
    label: "DIA 14/10 • QUARTA",
    subtitle: "Palestras Especializadas e Workshops Práticos",
    local: "Palestras: UFCSPA | Workshops: UFRGS - ESEFID (19h)",
    data: dia2,
  },
  {
    id: "dia3",
    label: "DIA 15/10 • QUINTA",
    subtitle: "Mesas-Redondas e Encerramento",
    local: "UFCSPA",
    data: dia3,
  },
];

function getCategoryBadge(category: ActivityCategory) {
  switch (category) {
    case "palestra":
      return { label: "Palestra", bg: "bg-bordo/10 text-bordo border-bordo/30" };
    case "mesa":
      return { label: "Mesa-Redonda", bg: "bg-amber-900/10 text-amber-900 border-amber-900/30" };
    case "workshop":
      return { label: "Workshop", bg: "bg-bordo text-paper border-bordo" };
    case "cultural":
      return { label: "Apresentação Cultural", bg: "bg-purple-900/10 text-purple-900 border-purple-900/30" };
    case "solenidade":
      return { label: "Solenidade", bg: "bg-wire/40 text-ink/80 border-wire" };
    case "credenciamento":
      return { label: "Presença", bg: "bg-wire/30 text-ink/70 border-wire" };
    case "intervalo":
    default:
      return { label: "Intervalo", bg: "bg-paper-2 text-ink/60 border-wire/60" };
  }
}

export function Schedule() {
  const [searchParams, setSearchParams] = useSearchParams();
  const diaParam = searchParams.get("dia");

  const [activeTab, setActiveTab] = useState(() => {
    if (diaParam && dias.some((d) => d.id === diaParam)) {
      return diaParam;
    }
    return dias[0].id;
  });

  useEffect(() => {
    if (diaParam && dias.some((d) => d.id === diaParam) && diaParam !== activeTab) {
      setActiveTab(diaParam);
    }
  }, [diaParam]);

  const handleTabChange = (diaId: string) => {
    setActiveTab(diaId);
    setSearchParams({ dia: diaId }, { replace: true });
  };

  const activeData = dias.find((d) => d.id === activeTab);

  return (
    <section className="py-24 px-6 lg:px-24 bg-paper-2 relative" id="programacao">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-start gap-4 sticky top-28"
          >
            <span className="font-display text-5xl text-bordo leading-none">05</span>
            <div className="w-full">
              <h2 className="font-display text-3xl text-ink leading-tight mt-1">PROGRAMAÇÃO</h2>
              <p className="font-body text-sm text-ink/70 mt-2">
                13, 14 e 15 de outubro de 2026 • UFRGS e UFCSPA
              </p>

              <div className="mt-8 flex flex-col gap-2 relative">
                {dias.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => handleTabChange(d.id)}
                    className={cn(
                      "text-left py-3 px-4 rounded-md transition-all relative z-10 cursor-pointer border",
                      activeTab === d.id
                        ? "text-paper border-bordo shadow-md"
                        : "text-ink/70 hover:text-ink bg-paper/60 border-wire/70 hover:border-bordo/40"
                    )}
                  >
                    {activeTab === d.id && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="absolute inset-0 bg-bordo rounded-md -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="font-display text-lg block">{d.label}</span>
                    <span className={cn(
                      "font-body text-xs block mt-0.5",
                      activeTab === d.id ? "text-paper/80" : "text-ink/50"
                    )}>
                      {d.subtitle}
                    </span>
                  </button>
                ))}
              </div>

              {/* Informações adicionais de apoio */}
              <div className="mt-8 p-4 bg-paper border border-wire rounded-md hidden md:block">
                <div className="flex items-center gap-2 text-bordo mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider">Atenção</span>
                </div>
                <p className="font-body text-xs text-ink/75 leading-relaxed">
                  Os workshops práticos acontecem nos dias 13 e 14 às 19h no <strong>ESEFID - UFRGS</strong>, distribuídos por áreas temáticas.
                </p>
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
              {/* Local banner com atalho para os mapas */}
              <div className="mb-8 p-4 bg-paper rounded-md border border-wire flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-2 text-ink/80">
                  <MapPin className="w-4 h-4 text-bordo shrink-0" />
                  <span className="font-body text-sm font-medium">Local do dia:</span>
                </div>
                <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap justify-between sm:justify-end">
                  <span className="font-mono text-xs sm:text-sm text-ink font-semibold">
                    {activeData.local}
                  </span>
                  <a
                    href="#locais"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("locais")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    title="Ver mapa e rota até o local"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-bordo/10 hover:bg-bordo text-bordo hover:text-paper font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200 border border-bordo/30 hover:border-bordo group/btn cursor-pointer shrink-0"
                  >
                    <span>Ver no mapa</span>
                    <ArrowDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-y-0.5" />
                  </a>
                </div>
              </div>

              {/* Timeline list */}
              <div className="relative border-l-2 border-bordo/25 pl-6 pb-4 ml-3 sm:ml-4">
                {activeData.data.map((item, idx) => {
                  const badge = getCategoryBadge(item.category);
                  const isHighlight = item.category === "palestra" || item.category === "mesa" || item.category === "workshop";

                  return (
                    <div key={idx} className="mb-8 relative group">
                      {/* Timeline dot */}
                      <div
                        className={cn(
                          "absolute -left-[31px] top-2 w-3.5 h-3.5 rounded-full border-2 transition-all duration-300",
                          isHighlight
                            ? "bg-bordo border-paper shadow-xs group-hover:scale-125"
                            : "bg-paper border-bordo/50 group-hover:border-bordo"
                        )}
                      />

                      <div className={cn(
                        "p-4 sm:p-5 rounded-lg border transition-all duration-200",
                        isHighlight
                          ? "bg-paper border-wire/90 shadow-xs hover:border-bordo/60 hover:shadow-md"
                          : "bg-paper/50 border-wire/50 hover:bg-paper"
                      )}>
                        {/* Header: Time + Badge */}
                        <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                          <div className="flex items-center gap-2">
                            <Clock className="w-3.5 h-3.5 text-bordo" />
                            <span className="font-mono text-sm font-semibold text-bordo">
                              {item.time}
                            </span>
                          </div>
                          <span className={cn(
                            "font-mono text-[11px] uppercase tracking-wider px-2.5 py-0.5 rounded-full border",
                            badge.bg
                          )}>
                            {badge.label}
                          </span>
                        </div>

                        {/* Title / Tema */}
                        <h4 className="font-display text-xl sm:text-2xl text-ink leading-snug">
                          {item.activity}
                        </h4>

                        {/* Speaker, Theme & Topic */}
                        {(item.speaker || item.topic || item.theme) && (
                          <div className="mt-3 pt-3 border-t border-wire/40 flex flex-col gap-1.5">
                            {item.theme && (
                              <div className="flex items-start gap-2 text-xs font-mono text-ink/80">
                                <Sparkles className="w-3.5 h-3.5 text-bordo shrink-0 mt-0.5" />
                                <span>
                                  <strong className="text-bordo font-semibold uppercase tracking-wider">Tema: </strong>
                                  <span className="font-body text-ink/90 font-medium">{item.theme}</span>
                                </span>
                              </div>
                            )}
                            {item.topic && (
                              <div className="flex items-center gap-2 text-xs font-mono text-ink/75">
                                <Tag className="w-3.5 h-3.5 text-bordo shrink-0" />
                                <span>
                                  <strong className="text-bordo font-semibold uppercase tracking-wider">Área: </strong>
                                  {item.topic}
                                </span>
                              </div>
                            )}
                            {item.speaker && (
                              <div className="flex items-start gap-2 text-sm text-ink/90">
                                <User className="w-4 h-4 text-bordo mt-0.5 shrink-0" />
                                <span className="font-body font-medium">
                                  <span className="text-ink/65">
                                    {item.category === "mesa" ? "Moderador(a): " : "Palestrante: "}
                                  </span>
                                  <strong className="text-ink font-semibold">{item.speaker}</strong>
                                </span>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Observations / Notes / Perguntas (nunca exibido em intervalos) */}
                        {item.notes && item.category !== "intervalo" && (
                          <div className="mt-2.5 pt-2 border-t border-wire/30 text-xs font-body text-ink/70 italic flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-bordo/60 shrink-0" />
                            <span>{item.notes}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

