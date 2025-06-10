import { useEffect, useState } from "react";
import { db } from "../../services/firebase/firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

const CommentList = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "comments", slug, "messages"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setComments(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });

    return () => unsubscribe();
  }, [slug]);

  return (
    <div className="mt-8 space-y-4">
      <h3 className="text-lg font-semibold text-skin-accent2">💬 Feedback</h3>
      {comments.length === 0 && (
        <p className="text-sm text-skin-text/60 italic">No feedback yet.</p>
      )}
      {comments.map((c) => (
        <div
          key={c.id}
          className="p-3 border border-skin-accent2/20 rounded bg-skin-panel"
        >
          <p className="text-sm font-semibold text-skin-accent">{c.name}</p>
          <p className="text-sm text-skin-text/90 mt-1">{c.message}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
