import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../services/firebase/firebase";

const CommentForm = ({ slug }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !message) return;

    setLoading(true);
    try {
      await addDoc(collection(db, "projects", slug, "comments"), {
        name,
        message,
        createdAt: serverTimestamp(),
      });
      setName("");
      setMessage("");
    } catch (err) {
      console.error("Error submitting comment:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 bg-skin-panel border border-skin-accent2/20 rounded-lg"
    >
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border border-skin-accent2/40 bg-skin-bg text-skin-text rounded"
        required
      />
      <textarea
        placeholder="Your feedback..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full p-2 h-24 border border-skin-accent2/40 bg-skin-bg text-skin-text rounded resize-none"
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="px-4 py-2 rounded-md bg-skin-accent text-skin-bg hover:bg-skin-accent2 transition"
      >
        {loading ? "Sending..." : "Submit Feedback"}
      </button>
    </form>
  );
};

export default CommentForm;
