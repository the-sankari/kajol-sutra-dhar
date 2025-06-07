// components/sections/SkillMatrixHUD.jsx
import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 90 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Redux Toolkit", level: 80 },
  { name: "Drupal", level: 75 },
  { name: "Firebase", level: 70 },
  { name: "Node.js", level: 65 },
];

const SkillMatrixHUD = () => {
  return (
    <section className="py-20 px-6 bg-skin-bg text-skin-text border-t border-skin-accent/10" id="skills">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-skin-accent mb-12 text-center">
          🧬 Skill Matrix HUD
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skills.map((skill, idx) => (
            <div key={idx} className="w-full">
              <div className="flex justify-between mb-1">
                <span className="text-skin-accent2 font-medium">{skill.name}</span>
                <span className="text-sm text-skin-text/60">{skill.level}%</span>
              </div>
              <div className="h-3 bg-skin-panel rounded">
                <motion.div
                  className="h-3 bg-skin-accent rounded"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillMatrixHUD;
