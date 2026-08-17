import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Hero() {
  const [days, setDays] = useState(0);

  useEffect(() => {
    // Simple mock countdown to Oct 13, 2026
    const target = new Date("2026-10-13T08:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;
      if (distance > 0) {
        setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-24 overflow-hidden pt-20">
      {/* The big line/snake graphic in background */}
      <motion.svg
        className="absolute left-6 lg:left-24 top-0 bottom-0 w-32 h-[150%] -z-10 text-wire/30"
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
        initial={{ strokeDashoffset: 1000 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <path
          d="M50 0 Q100 100 50 200 T50 400 T50 600 T50 800 T50 1000"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeDasharray="1000"
        />
        <path d="M40 100 L60 50 L45 100 L65 150 L40 100Z" fill="currentColor" className="text-volt/50" />
      </motion.svg>

      <div className="max-w-5xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="font-mono text-sm tracking-widest text-bordo bg-bordo/10 px-3 py-1 rounded-full">
            13, 14 E 15 DE OUTUBRO DE 2026
          </span>
          <span className="font-mono text-sm tracking-widest text-ink/70">
            UFRGS & UFCSPA
          </span>
        </motion.div>

        <h1 className="font-display text-[clamp(4rem,10vw,10rem)] leading-[0.85] text-bordo mb-8">
          <motion.span
            className="block overflow-hidden"
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            JORNADA
          </motion.span>
          <motion.span
            className="block overflow-hidden"
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            ACADÊMICA DA
          </motion.span>
          <motion.span
            className="block overflow-hidden"
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            FISIOTERAPIA
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-8 items-start sm:items-center mt-12"
        >
          <div className="flex flex-col">
            <span className="font-display text-5xl text-bordo">{days}</span>
            <span className="font-mono text-xs uppercase tracking-widest text-ink/60">Dias até o evento</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
