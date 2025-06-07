import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

const categorizedSkills = {
  Frontend: [
    { name: "React", level: 92, icon: "⚛️" },
    { name: "Tailwind CSS", level: 90, icon: "🎨" },
    { name: "Redux Toolkit", level: 88, icon: "🧰" },
  ],
  Backend: [
    { name: "Node.js", level: 85, icon: "🌐" },
    { name: "Express.js", level: 80, icon: "🚂" },
    { name: "Firebase", level: 78, icon: "🔥" },
  ],
  "CMS / Dev Tools": [
    { name: "Drupal", level: 75, icon: "🐉" },
    { name: "Git", level: 90, icon: "🔧" },
    { name: "Vite", level: 85, icon: "⚡" },
  ],
};

const SkillMatrix = () => {
  return (
    <section
      className="relative px-6 py-24 max-w-6xl mx-auto bg-skin-bg text-skin-text border-t border-skin-accent/10"
      id="skills"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full animate-[gridMove_40s_linear_infinite] bg-[radial-gradient(#00f0ff_1px,transparent_1px)] bg-[size:24px_24px] opacity-5" />
      </div>

      <motion.h2
        className="relative z-10 text-skin-accent text-3xl mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        🧠 Multidimensional Skill Matrix
      </motion.h2>

      <div className="space-y-16 relative z-10">
        {Object.entries(categorizedSkills).map(([category, skills], i) => (
          <div key={category}>
            <motion.h3
              className="text-skin-accent2 text-xl mb-4"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              {category}
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {skills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{
                    opacity: 0,
                    y: 40 * (idx % 2 === 0 ? 1 : -1),
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                    y: 40 * (idx % 2 === 0 ? 1 : -1),
                  }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.1,
                  }}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <SkillCard {...skill} />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillMatrix;
