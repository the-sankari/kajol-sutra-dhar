// // components/sections/AboutSection.jsx
// import React, { useState } from "react";

// const AboutSection = () => {
//   const [activeTab, setActiveTab] = useState("bio");

//   const renderTabContent = () => {
//     switch (activeTab) {
//       case "bio":
//         return (
//           <div className="p-6 text-base text-skin-text/90">
//             📍 Based in Helsinki, Finland
//             <br />
//             🌐 Open to remote & hybrid opportunities
//             <br />
//             🧠 Building interfaces that feel like they're from the next century
//           </div>
//         );
//       case "skills":
//         return (
//           <ul className="p-6 list-disc pl-6 space-y-2 text-skin-accent2 text-base">
//             <li>⚛️ React + Redux Toolkit</li>
//             <li>🎨 Tailwind CSS + Vite</li>
//             <li>🧠 Firebase + Firestore</li>
//             <li>🌐 Drupal Headless CMS</li>
//             <li>🧩 Multilingual, multipage, fully responsive designs</li>
//           </ul>
//         );
//       case "education":
//         return (
//           <div className="p-6 text-base text-skin-text/90 space-y-2">
//             🎓 Full-Stack Web Development
//             <br />
//             🏫 Business College Helsinki
//             <br />
//             📅 2023–2025
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <section
//       id="about-section"
//       className="py-24 px-4 md:px-10 text-skin-text bg-skin-bg border-t border-skin-accent/10"
//     >
//       <div className="max-w-5xl mx-auto space-y-20">
//         {/* Intro Card */}
//         <div className="space-y-6">
//           <h2 className="text-4xl font-bold text-skin-accent">
//             👤 About Kajol
//           </h2>
//           <p className="text-lg leading-relaxed text-skin-text/90">
//             I'm Kajol Sutra Dhar, a full-stack developer passionate about
//             futuristic technology. I design systems that feel like tools from
//             the year 3194 — sleek, smart, and human-first.
//           </p>
//         </div>

//         {/* Futuristic Card Box */}
//         <div className="bg-skin-panel p-6 md:p-8 rounded-2xl border border-skin-accent shadow-lg backdrop-blur-md">
//           <h3 className="text-2xl font-semibold text-skin-accent mb-2">
//             🧬 Developer DNA
//           </h3>
//           <p className="text-base text-skin-text/80">
//             Constantly evolving. Eternally curious. From retro code to quantum
//             frontends, I write software with purpose and precision — merging
//             functionality with imagination.
//           </p>
//         </div>

//         {/* Tab-style Section */}
//         <div className="border border-skin-accent rounded-xl overflow-hidden">
//           <div className="bg-skin-panel px-6 py-3 flex gap-6 border-b border-skin-accent/30 text-sm">
//             <button
//               onClick={() => setActiveTab("bio")}
//               className={`${
//                 activeTab === "bio" ? "text-skin-accent" : "text-skin-text/50"
//               } hover:text-skin-accent transition`}
//             >
//               [Bio]
//             </button>
//             <button
//               onClick={() => setActiveTab("skills")}
//               className={`${
//                 activeTab === "skills"
//                   ? "text-skin-accent"
//                   : "text-skin-text/50"
//               } hover:text-skin-accent transition`}
//             >
//               [Skills]
//             </button>
//             <button
//               onClick={() => setActiveTab("education")}
//               className={`${
//                 activeTab === "education"
//                   ? "text-skin-accent"
//                   : "text-skin-text/50"
//               } hover:text-skin-accent transition`}
//             >
//               [Education]
//             </button>
//           </div>
//           <div>{renderTabContent()}</div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;


import { section } from 'framer-motion/client'
import React from 'react'
import NeuralProfileScan from '../about/NeuralProfileScan'
import QuantumTimeline from '../about/QuantumTimeline'
import SkillMatrixHUD from '../about/SkillMatrixHUD'
import LiveTerminalPrompt from '../about/LiveTerminalPromt'
import { MultiverseFlipcards } from '../about/MultiverseFlipCard'
import AIProfileCompanion from '../about/AIProfileCampanion'
import SkillMatrix from '../about/skills/SkillMatrix'

const AboutSection = () => {
  return (
    <section id="about-section">
      <NeuralProfileScan />
      <QuantumTimeline />
      {/* <SkillMatrixHUD />
      <LiveTerminalPrompt />
      <MultiverseFlipcards />
      <AIProfileCompanion /> */}
    </section>
  )
}

export default AboutSection
