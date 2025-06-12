import React from "react";
import ContactForm from "../components/contact/ContactForm";
import TrustBadgePanel from "../components/helper/TrustBadgePanel";
import EncryptedContactPortals from "../components/contact/EncryptedContactPortals";

const Contact = () => (
  <main className="min-h-screen px-4 py-16 bg-skin-bg text-skin-text">
    <header className="mb-12 text-center">
      <h1 className="text-4xl font-bold font-futuristic mb-2">Get in Touch</h1>
      <p className="text-skin-accent2 max-w-xl mx-auto">
        I'm open to collaboration, internships, or just a chat. Drop me a
        message!
      </p>
    </header>

    <ContactForm />
  </main>
);

export default Contact;
