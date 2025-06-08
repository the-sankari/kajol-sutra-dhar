import React from "react";
import { motion } from "framer-motion";
import NeuralProfileScan from "../components/about/NeuralProfileScan";
import QuantumResume from "../components/about/QuantumResume";
import SkillMatrix from "../components/about/skills/SkillMatrix";
import TerminalPrompt from "../components/about/TerminalPrompt";
import AIProfileCompanion from "../components/about/ProfileCompanion/AIProfileCompanion";

export default function About() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden min-h-screen bg-skin-bg text-skin-text p-6 space-y-20 transition-colors duration-700"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-grid bg-center bg-[length:32px_32px] animate-grid-glow" />
      </div>

      {/* Title */}
      <h1 className="text-5xl text-center font-futuristic text-skin-accent tracking-widest mb-12">
        ABOUT ME
      </h1>

      {/* Sections */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <NeuralProfileScan />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <QuantumResume />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <SkillMatrix />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <AIProfileCompanion />
      </motion.section>
    {/* <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <TerminalPrompt /> */}
      {/* </motion.section> */}
    </motion.main>
  );
}
