import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { cn } from "@/src/lib/utils";
import { X, Sparkles } from "lucide-react";

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
  "Dermatofuncional",
  "Cuidados paliativos"
];

export interface Speaker {
  id: number;
  name: string;
  role: string;
  summary: string;
  areas: string[];
  photo?: string;
  photoPosition?: string;
}

const mockSpeakers: Speaker[] = [
  { id: 1, name: "Thaiane Cavalheiro", role: "Fisioterapeuta Dermatofuncional • Pós-operatório Cirurgia Plástica", summary: "Focada em técnicas avançadas de recuperação cirúrgica e bem-estar estético.", areas: ["Dermatofuncional"], photo: "/images/convidados/foto thaiane.jpeg", photoPosition: "center 15%" },
  { id: 2, name: "Murilo de Carvalho", role: "Fisioterapeuta Gerontológico", summary: "Dedica-se à melhoria da qualidade de vida, mobilidade e independência funcional na terceira idade.", areas: ["Gerontologia"], photo: "/images/convidados/foto murilo.jpeg", photoPosition: "center 15%" },
  { id: 3, name: "Mauren Fraga", role: "Fisioterapeuta Esportiva", summary: "Atuação especializada na prevenção, reabilitação e desempenho de atletas de alto rendimento.", areas: ["Fisioterapia esportiva"], photo: "/images/convidados/foto mauren.jpeg", photoPosition: "center 20%" },
  { id: 4, name: "Ivana Camargo", role: "Fisioterapia Pélvica-Hospitalar • Saúde Trans", summary: "Referência na atenção às disfunções do assoalho pélvico e pioneira no cuidado à população trans.", areas: ["Fisioterapia pélvica"], photo: "/images/convidados/Foto ivana.jpg", photoPosition: "center 20%" },
  { id: 5, name: "Leonardo Neves", role: "Fisioterapeuta Traumato-ortopédico • Especialista em Reabilitação", summary: "Atua no manejo avançado de fraturas e traumas músculo-esqueléticos de alta complexidade.", areas: ["Traumato-ortopédica"], photo: "/images/convidados/Foto Leonardo.jpg", photoPosition: "center 20%" },
  { id: 6, name: "Caroline Jacoby", role: "Professora & Fisioterapeuta Especialista em Cardiorrespiratória • UFCSPA", summary: "Docente e pesquisadora com vasta experiência no manejo respiratório crônico e suporte ventilatório.", areas: ["Fisioterapia respiratória"], photo: "/images/convidados/Foto Caroline Jacoby.jpeg", photoPosition: "center 20%" },
  { id: 7, name: "Camila Pinto", role: "Fisioterapeuta Neurofuncional Adulto • PhD PPGCMH", summary: "Pesquisadora e clínica especialista no manejo motor e reabilitação na Doença de Parkinson.", areas: ["Neurofuncional"] },
  { id: 8, name: "Mylena Francini", role: "Fisioterapeuta Neurofuncional Pediátrica • PPGCMH", summary: "Especialista em neurodesenvolvimento infantil e intervenção precoce em neuropediatria.", areas: ["Neurofuncional", "Fisioterapia pediátrica"] },
  { id: 9, name: "Gabriela Jaroceski", role: "Fisioterapeuta Especialista em Terapia Intensiva", summary: "Foco no manejo ventilatório, desmame e mobilização precoce do paciente crítico na UTI.", areas: ["Terapia intensiva", "Fisioterapia respiratória"] },
  { id: 10, name: "Mariana Vieira", role: "Médica Especialista em Cuidados Paliativos • Formação em Perdas e Luto", summary: "Abordagem interdisciplinar humanizada focada na qualidade de vida e alívio do sofrimento.", areas: ["Cuidados paliativos"], photo: "/images/convidados/dra-mariana-vieira.jpg", photoPosition: "center 100%" },
  { id: 11, name: "Denis Selau", role: "Fisioterapeuta UFRGS • Residente em Fisioterapia Cardiovascular HCPA", summary: "Atuação no cuidado e reabilitação cardiopulmonar de alta densidade tecnológica no HCPA.", areas: ["Fisioterapia cardiovascular"], photo: "/images/convidados/Foto Denis Selau.jpg", photoPosition: "center 20%" },
  { id: 12, name: "Francisco Araújo", role: "Fisioterapeuta • Pesquisador em Dor Crônica", summary: "Convidado da mesa-redonda de 'Aspectos da Dor', explorando neurociência e dor persistente.", areas: ["Traumato-ortopédica", "Neurofuncional"] },
  { id: 13, name: "Rafael Vercelino", role: "Professor & Pesquisador em Mecanismos da Dor", summary: "Especialista em aspectos neurobiológicos e abordagens terapêuticas interdisciplinares na dor.", areas: ["Traumato-ortopédica", "Neurofuncional"] },
  { id: 14, name: "Adriane Vieira", role: "Professora & Fisioterapeuta • UFRGS", summary: "Pesquisa e prática clínica focada no cuidado multidimensional e alívio da dor.", areas: ["Gerontologia", "Traumato-ortopédica"] },
  { id: 15, name: "Nathália Casagrande", role: "Fisioterapeuta Pélvica • Ministrante do Workshop Prático", summary: "Instrutora do workshop prático de Fisioterapia Pélvica com foco em avaliação e técnicas clínicas.", areas: ["Fisioterapia pélvica"], photo: "/images/convidados/Foto Nathália.jpg", photoPosition: "center 15%" },
  { id: 16, name: "Manoela Neves", role: "Fisioterapeuta Dermatofuncional • Ministrante do Workshop Prático", summary: "Instrutora do workshop prático de Dermatofuncional no laboratório ESEFID da UFRGS.", areas: ["Dermatofuncional"], photo: "/images/convidados/Foto Manoela.jpg", photoPosition: "center 10%" },
  { id: 17, name: "Felipe Xavier", role: "Fisioterapeuta do Grêmio FBPA • Fisioterapia Esportiva", summary: "Convidado da mesa-redonda GreNal, abordando prevenção de lesões e reabilitação no futebol profissional de elite.", areas: ["Fisioterapia esportiva", "Traumato-ortopédica"], photo: "/images/convidados/Felipe Xavier.jpeg", photoPosition: "center 20%" },
  { id: 18, name: "Téo Fronzi Rodrigues", role: "Fisioterapeuta do Sport Club Internacional • Fisioterapia Esportiva", summary: "Convidado da mesa-redonda GreNal, compartilhando a rotina e as abordagens funcionais no futebol de alta performance.", areas: ["Fisioterapia esportiva", "Traumato-ortopédica"], photo: "/images/convidados/Téo Fronzi Rodrigues.jpg", photoPosition: "center 20%" },
  { id: 19, name: "Bruna Eibel", role: "Professora & Fisioterapeuta • UFCSPA / Instituto de Cardiologia", summary: "Referência em reabilitação cardiovascular, pesquisa translacional e fisiologia do exercício clínico.", areas: ["Fisioterapia cardiovascular"], photo: "/images/convidados/Bruna Eibel .jpg", photoPosition: "center 20%" },
  { id: 20, name: "Douglas Stahnke", role: "Fisioterapeuta Especialista em Traumato-ortopédica & Terapia Manual", summary: "Convidado com atuação em avaliação funcional, controle de sobrecarga e reabilitação ortopédica.", areas: ["Traumato-ortopédica"], photo: "/images/convidados/Douglas Stahnke.jpg", photoPosition: "center 15%" },
  { id: 21, name: "Wagner", role: "Fisioterapeuta Especialista • Reabilitação Funcional", summary: "Convidado da mesa-redonda trazendo práticas clínicas integradas e evidências atuais no movimento humano.", areas: ["Traumato-ortopédica", "Fisioterapia esportiva"], photo: "/images/convidados/Foto Wagner.jpeg", photoPosition: "center 20%" },
  { id: 22, name: "Natasha Perusso", role: "Fisioterapeuta em Saúde Coletiva • Atenção Primária à Saúde", summary: "Convidada da mesa de APS, destacando o papel estratégico do fisioterapeuta no SUS e saúde comunitária.", areas: ["Gerontologia"], photo: "/images/convidados/Natasha Perusso.jpeg", photoPosition: "center 20%" },
  { id: 23, name: "Julia Paulon Puerari", role: "Fisioterapeuta • Atenção Primária & Saúde da Família", summary: "Participante da mesa-redonda de APS, debatendo o cuidado em equipe multiprofissional e território.", areas: ["Gerontologia"], photo: "/images/convidados/Julia Paulon Puerari.jpeg", photoPosition: "center 20%" },
  { id: 24, name: "Ana Carolina de Souza Kummer", role: "Fisioterapeuta • Residência & Prática Hospitalar", summary: "Convidada debatedora compartilhando experiências formativas e intervenções clínicas humanizadas.", areas: ["Neurofuncional", "Fisioterapia respiratória"], photo: "/images/convidados/Ana Carolina de Souza Kummer .jpg", photoPosition: "center 20%" },
  { id: 25, name: "Vithória Messa", role: "Fisioterapeuta • Mesa-redonda: 'Me formei, e agora?'", summary: "Debatedora na mesa de transição de carreira, discutindo inserção no mercado e caminhos profissionais.", areas: ["Traumato-ortopédica"], photo: "/images/convidados/Vithória Messa.jpeg", photoPosition: "center 20%" },
  { id: 26, name: "Raphael Caballero", role: "Fisioterapeuta • Pesquisador & Especialista", summary: "Participante convidado das mesas-redondas da Jornada com ênfase em prática baseada em evidências.", areas: ["Traumato-ortopédica", "Fisioterapia esportiva"], photo: "/images/convidados/Raphael Caballero.jpg", photoPosition: "center 20%" },
  { id: 27, name: "Francisca Pereira", role: "Fisioterapeuta • Prática Clínica & Interdisciplinaridade", summary: "Convidada especial das mesas-redondas da Jornada Acadêmica UFRGS & UFCSPA.", areas: ["Gerontologia", "Cuidados paliativos"], photo: "/images/convidados/Francisca Pereira.jpeg", photoPosition: "center 20%" },
];

function SpeakerImage({ name, photo, photoPosition }: { name: string; photo?: string; photoPosition?: string }) {
  const [hasError, setHasError] = useState(false);

  const initials = useMemo(() => {
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }, [name]);

  const showPhoto = Boolean(photo) && !hasError;
  const photoSrc = photo ? `${photo}?v=${Date.now()}` : undefined;

  return (
    <div className="w-full h-64 sm:h-72 bg-paper-2 flex items-center justify-center shrink-0 relative overflow-hidden select-none border-b border-wire/30">
      {showPhoto ? (
        <img
          src={photoSrc}
          alt={name}
          loading="lazy"
          decoding="async"
          onError={() => setHasError(true)}
          style={{ objectPosition: photoPosition || "center 20%" }}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-paper-2 via-paper-2 to-wire/25 text-ink/40 p-6 text-center">
          <div className="w-16 h-16 rounded-full border border-wire/60 flex items-center justify-center bg-paper/90 mb-3 shadow-xs transition-transform duration-300 group-hover:scale-105">
            <span className="font-display text-2xl font-bold text-bordo tracking-wider">
              {initials}
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-ink/60">
            Foto em breve
          </span>
        </div>
      )}
      <div className="absolute inset-0 ring-1 ring-inset ring-ink/5 pointer-events-none" />
    </div>
  );
}

export function ThematicAreas() {
  const [activeArea, setActiveArea] = useState<string | null>(null);

  const toggleArea = (area: string) => {
    setActiveArea(prev => (prev === area ? null : area));
  };

  const clearFilter = () => {
    setActiveArea(null);
  };

  // Traz para cima os palestrantes do tema selecionado
  const sortedSpeakers = useMemo(() => {
    if (!activeArea) return mockSpeakers;
    return [...mockSpeakers].sort((a, b) => {
      const aMatches = a.areas.includes(activeArea) ? 1 : 0;
      const bMatches = b.areas.includes(activeArea) ? 1 : 0;
      return bMatches - aMatches;
    });
  }, [activeArea]);

  const matchedCount = useMemo(() => {
    if (!activeArea) return 0;
    return mockSpeakers.filter(s => s.areas.includes(activeArea)).length;
  }, [activeArea]);

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
              <h2 className="font-display text-3xl text-ink leading-tight mt-1">ÁREAS &<br />PALESTRANTES</h2>
              <p className="font-body text-ink/70 mt-4 text-lg">
                Selecione uma área temática para trazer os palestrantes relacionados para o topo.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="w-full flex flex-col gap-8">
          {/* Areas Tags */}
          <div className="flex flex-wrap gap-2 items-center">
            <button
              onClick={clearFilter}
              className={cn(
                "px-4 py-2 border rounded-full font-mono text-sm tracking-wide transition-all duration-300 cursor-pointer",
                activeArea === null
                  ? "bg-bordo text-paper border-bordo shadow-md"
                  : "border-ink/20 bg-paper-2 text-ink/80 hover:border-bordo hover:text-bordo"
              )}
            >
              Todas as áreas
            </button>
            {areas.map((area, i) => (
              <motion.button
                key={area}
                onClick={() => toggleArea(area)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02, type: "spring", stiffness: 100 }}
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

          {/* Feedback do filtro ativo */}
          <AnimatePresence>
            {activeArea && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center justify-between flex-wrap gap-3 py-3 px-4 bg-bordo/10 border border-bordo/30 rounded-md"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-bordo" />
                  <span className="font-mono text-sm text-ink">
                    Tema selecionado: <strong className="text-bordo uppercase">{activeArea}</strong>
                    {matchedCount > 0 ? (
                      <span className="text-ink/70 ml-2">
                        ({matchedCount} {matchedCount === 1 ? "palestrante encontrado no topo" : "palestrantes trazidos para o topo"})
                      </span>
                    ) : (
                      <span className="text-ink/60 italic ml-2">
                        (Ainda sem palestrantes confirmados nesta área)
                      </span>
                    )}
                  </span>
                </div>

                <button
                  onClick={clearFilter}
                  className="inline-flex items-center gap-1 font-mono text-xs text-bordo hover:text-bordo-deep uppercase tracking-wider underline cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                  Limpar filtro
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Speakers Grid com Animação de Layout */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {sortedSpeakers.map((speaker) => {
              const isSelectedTheme = activeArea ? speaker.areas.includes(activeArea) : false;
              const isDefaultView = activeArea === null;

              return (
                <motion.div
                  layout
                  key={speaker.id}
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  className={cn(
                    "group border transition-all duration-300 overflow-hidden rounded-lg flex flex-col h-full relative",
                    isSelectedTheme
                      ? "border-bordo bg-paper-2 shadow-lg ring-1 ring-bordo/30 order-first"
                      : isDefaultView
                        ? "border-wire bg-paper-2 shadow-sm"
                        : "border-wire/40 bg-paper/40 opacity-50 hover:opacity-80"
                  )}
                >
                  {isSelectedTheme && (
                    <div className="absolute top-3 right-3 z-10 bg-bordo text-paper px-2.5 py-1 rounded-full font-mono text-[10px] tracking-wider uppercase shadow flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Tema selecionado
                    </div>
                  )}

                  <SpeakerImage
                    name={speaker.name}
                    photo={speaker.photo}
                    photoPosition={speaker.photoPosition}
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display text-2xl text-ink mb-1">{speaker.name}</h3>
                    <p className="font-body text-ink/70 text-sm mb-4">{speaker.role}</p>
                    <p className="font-body text-ink/80 text-sm mb-6 flex-1">{speaker.summary}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {speaker.areas.map(a => (
                        <button
                          key={a}
                          type="button"
                          onClick={() => toggleArea(a)}
                          className={cn(
                            "font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded-sm transition-colors cursor-pointer text-left",
                            activeArea === a
                              ? "bg-bordo text-paper font-semibold shadow-xs"
                              : "bg-wire/30 text-ink/70 hover:bg-bordo/20 hover:text-bordo"
                          )}
                        >
                          {a}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

