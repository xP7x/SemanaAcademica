import { motion } from "framer-motion";
import { MapPin, Navigation, ExternalLink, Sparkles, Building2 } from "lucide-react";

export function EventLocations() {
  return (
    <section className="py-16 px-6 lg:px-24 bg-paper-2 border-t border-b border-wire" id="locais">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-bordo mb-2">
              <Sparkles className="w-4 h-4" />
              <span className="font-mono text-xs uppercase tracking-widest font-semibold">
                Localização & Como Chegar
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-ink uppercase tracking-tight">
              Locais do Evento
            </h2>
            <p className="font-body text-ink/75 text-base mt-2 max-w-2xl">
              A Jornada Acadêmica acontece em dois polos universitários tradicionais de Porto Alegre.
              Fique atento ao local de cada atividade:
            </p>
          </div>
        </div>

        {/* Two Maps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: UFCSPA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-paper border border-wire rounded-lg overflow-hidden shadow-sm flex flex-col justify-between"
          >
            <div className="p-6 pb-4">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-full font-mono text-[11px] uppercase tracking-wider bg-bordo/10 text-bordo font-semibold border border-bordo/20 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5" />
                  Palestras & Mesas-Redondas
                </span>
                <span className="font-mono text-xs text-ink/50">Dias 13, 14 e 15</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl text-ink leading-snug">
                UFCSPA • Prédio Principal
              </h3>
              <p className="font-body text-xs text-ink/70 mt-0.5 mb-3">
                Universidade Federal de Ciências da Saúde de Porto Alegre
              </p>

              <div className="flex items-start gap-2 text-sm text-ink/85 mt-2 bg-paper-2/60 p-3 rounded border border-wire/40">
                <MapPin className="w-4 h-4 text-bordo shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-body font-medium">Rua Sarmento Leite, 245</span>
                  <span className="font-body text-xs text-ink/65">
                    Centro Histórico • Porto Alegre - RS • CEP 90050-170
                  </span>
                </div>
              </div>
            </div>

            {/* Map Container */}
            <div className="w-full h-56 sm:h-64 bg-wire/20 border-t border-b border-wire/40 relative">
              <iframe
                title="Mapa UFCSPA"
                src="https://maps.google.com/maps?q=UFCSPA%2C+Rua+Sarmento+Leite%2C+245+-+Centro+Hist%C3%B3rico%2C+Porto+Alegre+-+RS&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Card Footer Actions */}
            <div className="p-4 bg-paper flex items-center justify-between gap-3">
              <span className="font-mono text-[11px] text-ink/60">
                Solenidades, credenciamento e palestras
              </span>
              <a
                href="https://maps.google.com/?q=UFCSPA,+Rua+Sarmento+Leite,+245+-+Centro+Hist%C3%B3rico,+Porto+Alegre+-+RS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-bordo text-paper rounded font-mono text-xs uppercase tracking-wider hover:bg-bordo-deep transition-colors shadow-xs shrink-0"
              >
                <Navigation className="w-3.5 h-3.5" />
                Rotas <ExternalLink className="w-3 h-3 opacity-70" />
              </a>
            </div>
          </motion.div>

          {/* Card 2: ESEFID - UFRGS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-paper border border-wire rounded-lg overflow-hidden shadow-sm flex flex-col justify-between"
          >
            <div className="p-6 pb-4">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-full font-mono text-[11px] uppercase tracking-wider bg-amber-900/10 text-amber-900 font-semibold border border-amber-900/20 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5" />
                  Workshops Práticos (19h)
                </span>
                <span className="font-mono text-xs text-ink/50">Dias 13 e 14/10</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl text-ink leading-snug">
                ESEFID • UFRGS
              </h3>
              <p className="font-body text-xs text-ink/70 mt-0.5 mb-3">
                Escola de Educação Física, Fisioterapia e Dança da UFRGS
              </p>

              <div className="flex items-start gap-2 text-sm text-ink/85 mt-2 bg-paper-2/60 p-3 rounded border border-wire/40">
                <MapPin className="w-4 h-4 text-bordo shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-body font-medium">Rua Felizardo, 750</span>
                  <span className="font-body text-xs text-ink/65">
                    Jardim Botânico • Porto Alegre - RS • CEP 90690-200
                  </span>
                </div>
              </div>
            </div>

            {/* Map Container */}
            <div className="w-full h-56 sm:h-64 bg-wire/20 border-t border-b border-wire/40 relative">
              <iframe
                title="Mapa ESEFID UFRGS"
                src="https://maps.google.com/maps?q=ESEFID+UFRGS%2C+Rua+Felizardo%2C+750+-+Jardim+Bot%C3%A2nico%2C+Porto+Alegre+-+RS&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Card Footer Actions */}
            <div className="p-4 bg-paper flex items-center justify-between gap-3">
              <span className="font-mono text-[11px] text-ink/60">
                Salas e laboratórios práticos (19h)
              </span>
              <a
                href="https://maps.google.com/?q=ESEFID+UFRGS,+Rua+Felizardo,+750+-+Jardim+Bot%C3%A2nico,+Porto+Alegre+-+RS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-bordo text-paper rounded font-mono text-xs uppercase tracking-wider hover:bg-bordo-deep transition-colors shadow-xs shrink-0"
              >
                <Navigation className="w-3.5 h-3.5" />
                Rotas <ExternalLink className="w-3 h-3 opacity-70" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
