import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

function Counter({ from, to }: { from: number; to: number }) {
  const [count, setCount] = useState(from);
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    const duration = 2000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      // easeOutExpo
      const ease = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);

      setCount(Math.floor(from + (to - from) * ease));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animationFrame = requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, [from, to]);

  return <span ref={nodeRef}>{count}</span>;
}

export function Audience() {
  return (
    <section className="py-24 px-6 lg:px-24 bg-paper relative scroll-mt-24" id="publico">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-start gap-4"
          >
            <span className="font-display text-5xl text-bordo leading-none">02</span>
            <div>
              <h2 className="font-display text-3xl text-ink leading-tight mt-1">O PÚBLICO</h2>
              <p className="font-body text-sm text-ink/70 mt-3 leading-relaxed">
                Um espaço plural, acolhedor e integrador para toda a Fisioterapia.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-2/3 flex flex-col gap-10">
          {/* Card Principal: Todos são bem-vindos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-paper-2 rounded-lg border-2 border-bordo/20 relative overflow-hidden shadow-xs"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-bordo/5 rounded-bl-full pointer-events-none" />
            <span className="font-mono text-xs uppercase tracking-widest text-bordo font-semibold block mb-2">
              Comunidade Integrada
            </span>
            <h3 className="font-display text-3xl sm:text-4xl text-ink leading-snug mb-4">
              Todos são <span className="text-bordo">muito bem-vindos!</span>
            </h3>
            <p className="font-body text-lg sm:text-xl text-ink/85 leading-relaxed">
              Do primeiro ao último semestre, incluindo <strong>egressos e magistrados</strong>, <strong>discentes e docentes</strong> de qualquer instituição de ensino.
            </p>
          </motion.div>

          {/* Cards complementares */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col border-l-2 border-bordo/30 pl-6"
            >
              <span className="font-display text-6xl md:text-7xl text-bordo mb-2">
                <Counter from={0} to={300} />+
              </span>
              <span className="font-display text-xl text-ink mb-1">Participantes Esperados</span>
              <span className="font-body text-sm text-ink/75 leading-relaxed">
                Integração direta entre discentes da UFCSPA, UFRGS e estudantes de todo o estado.
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col border-l-2 border-wire pl-6"
            >
              <span className="font-display text-4xl text-ink mb-2 pt-2">
                Qualquer Instituição
              </span>
              <span className="font-body text-sm text-ink/75 leading-relaxed">
                Inscrições abertas para estudantes de graduação, pós-graduandos, residentes, professores e profissionais da saúde de qualquer faculdade ou universidade.
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
