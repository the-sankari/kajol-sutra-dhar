import React from "react";
import Hero from "../components/home/Hero";
import AboutSection from "../components/home/AboutSection";
import SkillsSection from "../components/home/SkillsSection";
import ProjectsSection from "../components/home/ProjectsSection";
import ContactCTASection from "../components/home/ContactCTASection";

const Home = () => {
  return (
    <div className="bg-skin-bg text-skin-text " >
      <Hero />
      {/* Other sections can be added here */}
      <AboutSection /> 
      <SkillsSection />
      <ProjectsSection />
     <ContactCTASection />
    </div>
  );
};

export default Home;
