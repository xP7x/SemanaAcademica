import { Workshops } from "../components/Workshops";
import { motion } from "framer-motion";
import { Sparkles, Calendar, MapPin, Users } from "lucide-react";

export function WorkshopsPage() {
  return (
    <div className="pt-20">
      {/* Intro Banner */}
      <section className="bg-paper-2 py-12 px-6 lg:px-24 border-b border-wire">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-bordo mb-2">
              <Sparkles className="w-4 h-4" />
              <span className="font-mono text-xs uppercase tracking-widest font-semibold">
                Imersão Prática
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl text-ink">
              WORKSHOPS PRÁTICOS
            </h1>
            <p className="font-body text-ink/75 mt-2 max-w-xl text-base">
              Atividades hands-on com especialistas do mercado nas noites de 13 e 14 de outubro.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-xs font-mono">
            <div className="p-3 bg-paper border border-wire rounded-md flex items-center gap-2">
              <Calendar className="w-4 h-4 text-bordo" />
              <span>13 e 14 de Outubro às 19h</span>
            </div>
            <div className="p-3 bg-paper border border-wire rounded-md flex items-center gap-2">
              <MapPin className="w-4 h-4 text-bordo" />
              <span>UFRGS - ESEFID</span>
            </div>
            <div className="p-3 bg-paper border border-wire rounded-md flex items-center gap-2">
              <Users className="w-4 h-4 text-bordo" />
              <span>20 Vagas por Turma</span>
            </div>
          </div>
        </div>
      </section>

      <Workshops />
    </div>
  );
}
