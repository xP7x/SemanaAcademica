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
    <section className="py-24 px-6 lg:px-24 bg-paper relative">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-start gap-4"
          >
            <span className="font-display text-5xl text-bordo leading-none">02</span>
            <h2 className="font-display text-3xl text-ink leading-tight mt-1">O PÚBLICO</h2>
          </motion.div>
        </div>

        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col border-l border-wire pl-6"
          >
            <span className="font-display text-7xl md:text-8xl text-bordo mb-2">
              <Counter from={0} to={300} />+
            </span>
            <span className="font-body text-lg text-ink/80">Estudantes esperados, somando  alunos da UFCSPA e  alunos da UFRGS.</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="flex flex-col border-l border-wire pl-6"
          >
            <span className="font-display text-4xl md:text-5xl text-ink mb-2 pt-4">
              Público Externo
            </span>
            <span className="font-body text-lg text-ink/80">Aberto também para estudantes e profissionais de outras instituições de ensino interessados em nossa programação científica.</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
