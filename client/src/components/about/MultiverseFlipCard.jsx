import { motion } from "framer-motion";
import FloatingHolograms from "./FloatingHolograms";

const cards = [
  {
    id: 1,
    title: "Timeline Alpha",
    description: "Web developer from Earth-349X.",
  },
  {
    id: 2,
    title: "Timeline Sigma",
    description: "UX Engineer in Space Station 42.",
  },
  {
    id: 3,
    title: "Timeline Eos",
    description: "AI-augmented DevOps strategist.",
  },
];

const MultiverseFlipcards = () => {
  return (
    <section
      className="py-20 px-6 bg-skin-panel border-t border-skin-accent/10 text-skin-text"
      id="multiverse"
    >
      {/* <FloatingHolograms /> */}
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-skin-accent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          🪐 Alternate Timeline Avatars
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              className="group [perspective:1000px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: card.id * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-60 w-full transform-style preserve-3d group-hover:rotate-y-180 transition-transform duration-700 ease-in-out rounded-lg border border-skin-accent/20 shadow-lg">
                <div className="absolute inset-0 p-6 bg-skin-panel rounded-lg">
                  <h3 className="text-xl font-bold text-skin-accent mb-2">
                    {card.title}
                  </h3>
                  <p className="text-skin-text/80">
                    Hover to reveal identity...
                  </p>
                </div>

                <div className="absolute inset-0 p-6 bg-skin-bg rounded-lg rotate-y-180 backface-hidden">
                  <p className="text-skin-accent2 font-mono text-lg">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { MultiverseFlipcards };
