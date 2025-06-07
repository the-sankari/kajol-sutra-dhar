// sections/ContactCTASection.jsx

import { Link } from "react-router-dom";

const ContactCTASection = () => {
  return (
    <section className="relative py-28 px-6 text-center bg-skin-panel border-y border-skin-accent/20 shadow-md">
      {/* Optional glowing ring */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,#00f0ff30,transparent_70%)] pointer-events-none" />

      <h2 className="text-3xl md:text-4xl font-bold text-skin-accent mb-4">
        🧠 Let's Collaborate Across Time
      </h2>
      <p className="text-skin-text text-lg md:text-xl mb-10 max-w-2xl mx-auto">
        Whether you’re from Earth-101 or another multiverse, I'm open to
        futuristic ideas, freelance missions, or building dreamtech together.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap justify-center gap-6">
        <Link
          to="/contact"
          className="px-6 py-3 border border-skin-accent2 text-skin-accent2 rounded-lg hover:bg-skin-accent2 hover:text-skin-bg transition duration-300 shadow-md"
        >
          📨 Initiate Contact
        </Link>

        <a
          href="mailto:kajol@example.com"
          className="px-6 py-3 border border-skin-accent text-skin-accent rounded-lg hover:bg-skin-accent hover:text-skin-bg transition duration-300 shadow-md"
        >
          🧬 Quantum Mail
        </a>
      </div>
    </section>
  );
};

export default ContactCTASection;
