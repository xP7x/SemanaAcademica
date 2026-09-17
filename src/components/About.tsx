import { motion } from "framer-motion";

export function About() {
  return (
    <section className="py-24 px-6 lg:px-24 bg-paper-2 relative overflow-hidden scroll-mt-24" id="sobre">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        <div className="md:w-1/3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-start gap-4"
          >
            <span className="font-display text-5xl text-bordo leading-none">01</span>
            <h2 className="font-display text-3xl text-ink leading-tight mt-1">SOBRE<br />O EVENTO</h2>
          </motion.div>
        </div>
        <div className="md:w-2/3">
          <div className="flex flex-col gap-5">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-body text-xl md:text-2xl leading-relaxed text-ink/90"
            >
              A Jornada Acadêmica de Fisioterapia <strong>UFRGS</strong> &amp; <strong>UFCSPA</strong> reúne a comunidade acadêmica para três dias de integração, troca de conhecimento e valorização das diferentes áreas de atuação da Fisioterapia.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-body text-xl md:text-2xl leading-relaxed text-ink/90"
            >
              O evento aproxima estudantes, professores, projetos e ligas acadêmicas das duas universidades, além de receber participantes de outras instituições de ensino.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
