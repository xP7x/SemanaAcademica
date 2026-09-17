import { motion } from "framer-motion";
import { cn } from "@/src/lib/utils";

type Sponsor = {
  name: string;
  logo: string;
  className?: string;
};

export function Sponsors() {
  const sponsors: Sponsor[] = [
    {
      name: "Cadore Tech",
      logo: "/images/patrocinadores/CadoreTech_vertical-preto.svg",
      className: "h-56 sm:h-64 md:h-72 w-auto max-w-full scale-110 sm:scale-115",
    },
    {
      name: "Instituto Golden",
      logo: "/images/patrocinadores/logo golden_logo_ensino_preta.svg",
      className: "h-36 sm:h-44 md:h-48 w-auto max-w-full",
    },
  ];

  return (
    <section className="py-24 px-6 lg:px-24 bg-paper relative">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-start gap-4"
          >
            <span className="font-display text-5xl text-bordo leading-none">07</span>
            <h2 className="font-display text-3xl text-ink leading-tight mt-1">
              APOIO &<br />PATROCÍNIO
            </h2>
          </motion.div>
          <p className="font-body text-sm text-ink/65 mt-4 leading-relaxed">
            Empresas e instituições que acreditam no potencial acadêmico e viabilizam a Jornada.
          </p>
        </div>

        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16 items-center justify-items-center">
          {sponsors.map((sponsor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex items-center justify-center w-full min-h-[220px]"
            >
              <img
                src={sponsor.logo}
                alt={`Logo ${sponsor.name}`}
                className={cn(
                  "object-contain hover:scale-105 transition-transform duration-300 drop-shadow-xs",
                  sponsor.className
                )}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

