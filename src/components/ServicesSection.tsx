import { motion } from "framer-motion";
import { User, Baby, Heart, Users, Brain, Laptop } from "lucide-react";

const services = [
  {
    icon: User,
    title: "Felnőtt egyéni terápia",
    description: "Klinikai szakpszichológia, pszichológiai tanácsadás, személyiségvizsgálat, autogén tréning és relaxáció.",
  },
  {
    icon: Baby,
    title: "Gyermekterápia",
    description: "Nevelési tanácsadás, iskolaérettség vizsgálata, ADHD diagnosztika, viselkedéses zavarok kezelése.",
  },
  {
    icon: Heart,
    title: "Párterápia",
    description: "Kommunikációs problémák, elhidegülés, féltékenység, szexuális problémák és konfliktuskezelés.",
  },
  {
    icon: Users,
    title: "Családterápia",
    description: "Gyermeknevelési problémák, családi kommunikáció javítása, konfliktusok feloldása.",
  },
  {
    icon: Brain,
    title: "Pszichológiai vizsgálatok",
    description: "Intelligencia- és személyiségtesztek, figyelemzavar vizsgálata, projektív tesztek.",
  },
  {
    icon: Laptop,
    title: "Online terápia",
    description: "Távkonzultációs lehetőség kényelmes otthoni környezetben, ugyanolyan szakmai színvonalon.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ServicesSection = () => (
  <section id="szolgaltatasok" className="py-24 lg:py-32" style={{ background: "var(--section-gradient)" }}>
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary text-sm uppercase tracking-[0.2em] mb-3 font-medium">Szolgáltatásaink</p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
          Miben segíthetünk?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Minden életkorban és élethelyzetben megbízható pszichológiai támogatást nyújtunk.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((s) => (
          <motion.div
            key={s.title}
            variants={item}
            className="group bg-background rounded-xl p-8 transition-shadow duration-300"
            style={{ boxShadow: "var(--card-shadow)" }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--card-shadow-hover)")}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--card-shadow)")}
          >
            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-5">
              <s.icon className="w-6 h-6 text-accent-foreground" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;
