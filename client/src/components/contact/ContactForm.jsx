import React, { useState, useEffect } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import { db } from "../../services/firebase/firebase";
import FormInput from "../common/FormInput";
import FormTextarea from "../common/FormTextarea";
import RecaptchaBlock from "../helper/RecaptchaBlock";
import ContactReasonSelector from "./ContactReasonSelector";
import IdentityScannerPanel from "./IdentityScannerPanel";
import EncryptedContactPortals from "./EncryptedContactPortals";
import TrustBadgePanel from "../helper/TrustBadgePanel";
import QuickContactFallback from "./QuickContactFallback";
import TerminalQuickContact from "./TerminalQuickContact";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [reason, setReason] = useState("Collaboration");
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Load identity data on page load
  useEffect(() => {
    const saved = localStorage.getItem("identityData");
    if (saved) {
      setSubmittedData(JSON.parse(saved));
    }
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (!captchaVerified) {
      toast.error("Please complete the reCAPTCHA.");
      return;
    }

    const hasSubmitted = localStorage.getItem("hasSubmitted");
    if (hasSubmitted) {
      toast.error("🛑 You've already submitted. Please try again later.");
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, "messages"), {
        ...form,
        reason,
        timestamp: serverTimestamp(),
      });

      const identityPayload = {
        email: form.email,
        reason,
        time: new Date().toLocaleString(),
        visitorId:
          "XC" +
          Math.floor(Math.random() * 100) +
          "-" +
          Math.random().toString(36).substring(2, 4).toUpperCase(),
      };

      setSubmittedData(identityPayload);
      localStorage.setItem("identityData", JSON.stringify(identityPayload));
      localStorage.setItem("hasSubmitted", "true");

      toast.success("✅ Message sent!");
      setForm({ name: "", email: "", message: "" });
      setCaptchaVerified(false);
    } catch (err) {
      console.error(err);
      toast.error("❌ Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!submittedData && (
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto glass p-6 rounded-xl space-y-6"
        >
          <ContactReasonSelector selected={reason} onSelect={setReason} />

          <FormInput
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          <FormInput
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />
          <FormTextarea
            label="Message"
            name="message"
            value={form.message}
            onChange={handleChange}
          />

          <RecaptchaBlock
            siteKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
            onVerify={() => setCaptchaVerified(true)}
            onExpire={() => setCaptchaVerified(false)}
          />

          <button
            type="submit"
            disabled={loading}
            className="glow-button px-6 py-3 rounded-lg font-semibold"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}

      {submittedData && (
        <>
          <IdentityScannerPanel
            email={submittedData.email}
            reason={submittedData.reason}
            time={submittedData.time}
            visitorId={submittedData.visitorId}
          />
          <TrustBadgePanel />
          <EncryptedContactPortals />

          <button
            onClick={() => {
              setSubmittedData(null);
              localStorage.removeItem("identityData");
              localStorage.removeItem("hasSubmitted");
            }}
            className="mt-4 text-xs underline text-skin-accent hover:text-skin-accent2 block mx-auto"
          >
            🔄 Clear Identity Panel
          </button>
        </>
      )}
      {!submittedData && (
        <>
          <QuickContactFallback />
          <TerminalQuickContact />
        </>
      )}
      <ToastContainer position="bottom-center" theme="dark" />
    </>
  );
};

export default ContactForm;
