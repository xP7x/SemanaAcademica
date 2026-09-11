import { Schedule } from "../components/Schedule";
import { EventLocations } from "../components/EventLocations";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";

export function Programacao() {
  return (
    <div className="pt-16">
      <Schedule />
      <EventLocations />
      
      {/* Banner de direcionamento para Workshops */}
      <section className="bg-bordo-deep py-12 px-6 lg:px-24 text-paper">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-paper/80 mb-1">
              <Sparkles className="w-4 h-4" />
              <span className="font-mono text-xs uppercase tracking-widest font-semibold">
                Atividades Práticas Simultâneas
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl text-paper">
              Conheça os 6 Workshops Práticos
            </h3>
            <p className="font-body text-sm text-paper/70 mt-1 max-w-xl">
              Confira a página exclusiva com horários, palestrantes responsáveis e informações sobre as 20 vagas por sala.
            </p>
          </div>

          <Link
            to="/workshops"
            className="px-6 py-3 bg-paper text-bordo font-display text-lg uppercase tracking-wider rounded-full hover:bg-paper-2 transition-colors flex items-center gap-2 shrink-0 shadow-md"
          >
            Ver Workshops <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

