import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const SkillCard = ({ name, level, icon }) => {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.3}
      scale={1.02}
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
    >
      <div className="group perspective">
        <div className="relative w-full h-44 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180 hover:scale-[1.02] hover:shadow-[0_0_20px_#00f0ff66]">
          {/* Front Side */}
          <div className="absolute w-full h-full backface-hidden bg-skin-panel border border-skin-accent rounded-xl shadow-lg p-4 flex flex-col items-center justify-center">
            <div className="text-3xl">{icon}</div>
            <h4 className="text-lg font-semibold text-skin-accent mt-2">
              {name}
            </h4>
            <div className="w-full mt-3 bg-skin-accent/10 rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full bg-skin-accent"
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              />
            </div>
            <p className="text-xs text-skin-text/60 mt-1">{level}%</p>
          </div>

          {/* Back Side */}
          <div className="absolute w-full h-full rotate-y-180 backface-hidden bg-skin-panel border border-skin-accent2 rounded-xl shadow-inner flex items-center justify-center p-4">
            <p className="text-sm text-skin-accent2 text-center leading-relaxed">
              ⚡ {name} neural capabilities expanding. Level: {level}%
            </p>
          </div>

          {/* AI Eye Hover Indicator */}
          <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition duration-300">
            <div className="w-6 h-6 animate-pulse rounded-full bg-skin-accent shadow-[0_0_10px_#00f0ff]" />
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default SkillCard;
