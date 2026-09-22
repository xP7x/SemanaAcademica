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
      className: "h-44 sm:h-52 md:h-56 w-auto max-w-full scale-105",
    },
    {
      name: "Instituto Golden",
      logo: "/images/patrocinadores/logo golden_logo_ensino_preta.svg",
      className: "h-28 sm:h-36 md:h-40 w-auto max-w-full",
    },
    {
      name: "VOLL Pilates Group",
      logo: "/images/patrocinadores/logo_voll_pilates_group_institucional.svg",
      className: "h-32 sm:h-40 md:h-44 w-auto max-w-full",
    },
  ];

  return (
    <section className="py-24 px-6 lg:px-24 bg-paper relative">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="lg:w-1/3 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-start gap-4 justify-center lg:justify-start"
          >
            <span className="font-display text-5xl text-bordo leading-none">07</span>
            <h2 className="font-display text-3xl text-ink leading-tight mt-1">
              APOIO &<br />PATROCÍNIO
            </h2>
          </motion.div>
          <p className="font-body text-sm text-ink/65 mt-4 leading-relaxed max-w-sm mx-auto lg:mx-0">
            Empresas e instituições que acreditam no potencial acadêmico e viabilizam a Jornada.
          </p>
        </div>

        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 items-center justify-items-center w-full">
          {sponsors.map((sponsor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex items-center justify-center w-full min-h-[180px] p-2"
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

