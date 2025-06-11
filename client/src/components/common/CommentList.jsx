import { useEffect, useState } from "react";
import { db } from "../../services/firebase/firebase";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { fetchAvatar } from "../../features/avatar/avatarSlice";
import { formatDistanceToNow } from "date-fns";

const CommentList = ({ slug }) => {
  const [comments, setComments] = useState([]);
  const [replies, setReplies] = useState({});
  const [replyForms, setReplyForms] = useState({});
  const [replyTexts, setReplyTexts] = useState({});

  const dispatch = useDispatch();
  const avatars = useSelector((state) => state.avatar.avatars);

  useEffect(() => {
    const q = query(
      collection(db, "projects", slug, "comments"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetched = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(fetched);

      // Fetch avatars for commenters
      fetched.forEach((comment) => {
        if (!avatars[comment.name]) {
          dispatch(fetchAvatar(comment.name));
        }

        // Fetch replies for each comment
        const repliesQuery = query(
          collection(db, "projects", slug, "comments", comment.id, "replies"),
          orderBy("createdAt", "asc")
        );

        onSnapshot(repliesQuery, (replySnap) => {
          const replyData = replySnap.docs.map((r) => {
            const data = { id: r.id, ...r.data() };
            if (!avatars[data.name]) {
              dispatch(fetchAvatar(data.name));
            }
            return data;
          });

          setReplies((prev) => ({
            ...prev,
            [comment.id]: replyData,
          }));
        });
      });
    });

    return () => unsubscribe();
  }, [slug, avatars, dispatch]);

  const handleReplySubmit = async (commentId) => {
    const reply = replyTexts[commentId];
    const name = "Anonymous"; // Replace with user.name if you have auth
    if (!reply || !reply.trim()) return;

    try {
      if (!avatars[name]) {
        dispatch(fetchAvatar(name));
      }

      await addDoc(
        collection(db, "projects", slug, "comments", commentId, "replies"),
        {
          name,
          message: reply,
          createdAt: serverTimestamp(),
        }
      );
      setReplyTexts((prev) => ({ ...prev, [commentId]: "" }));
      setReplyForms((prev) => ({ ...prev, [commentId]: false }));
    } catch (err) {
      console.error("Error submitting reply:", err);
    }
  };

  return (
    <div className="mt-8 space-y-4">
      <h3 className="text-lg font-semibold text-skin-accent2">
        💬 Feedback {comments.length > 0 && `(${comments.length})`}
      </h3>

      {comments.length === 0 && (
        <p className="text-sm text-skin-text/60 italic">No feedback yet.</p>
      )}

      {comments.map((comment) => (
        <div
          key={comment.id}
          className="p-3 border border-skin-accent2/20 rounded bg-skin-panel transition-opacity duration-300 animate-fade-in"
        >
          <div className="flex items-center gap-3 mb-2">
            <img
              src={`data:image/svg+xml;utf8,${encodeURIComponent(
                avatars[comment.name] || ""
              )}`}
              alt={comment.name}
              className="w-8 h-8 rounded-full border border-skin-accent"
            />
            <div className="flex flex-col">
              <p className="text-sm font-semibold text-skin-accent">
                {comment.name}
              </p>
              {comment.createdAt?.seconds && (
                <p className="text-xs text-skin-text/60 italic">
                  {formatDistanceToNow(
                    new Date(comment.createdAt.seconds * 1000),
                    { addSuffix: true }
                  )}
                </p>
              )}
            </div>
          </div>

          <p className="text-sm text-skin-text/90 mt-1">{comment.message}</p>

          <button
            className="text-xs mt-2 text-skin-accent hover:underline"
            onClick={() =>
              setReplyForms((prev) => ({
                ...prev,
                [comment.id]: !prev[comment.id],
              }))
            }
          >
            {replyForms[comment.id] ? "Cancel" : "Reply"}
          </button>

          {replyForms[comment.id] && (
            <div className="mt-2 space-y-2">
              <textarea
                placeholder="Your reply..."
                value={replyTexts[comment.id] || ""}
                onChange={(e) =>
                  setReplyTexts((prev) => ({
                    ...prev,
                    [comment.id]: e.target.value,
                  }))
                }
                className="w-full p-2 h-20 border border-skin-accent2/40 bg-skin-bg text-skin-text rounded resize-none"
              />
              <button
                onClick={() => handleReplySubmit(comment.id)}
                className="px-3 py-1 text-sm bg-skin-accent text-skin-bg rounded hover:bg-skin-accent2"
              >
                Send Reply
              </button>
            </div>
          )}

          {replies[comment.id]?.length > 0 && (
            <div className="mt-4 pl-4 border-l border-skin-accent2/30 space-y-3">
              {replies[comment.id].map((reply) => (
                <div key={reply.id} className="text-sm flex gap-3 items-start">
                  <img
                    src={`data:image/svg+xml;utf8,${encodeURIComponent(
                      avatars[reply.name] || ""
                    )}`}
                    alt={reply.name}
                    className="w-7 h-7 rounded-full border border-skin-accent"
                  />
                  <div>
                    <p className="font-semibold text-skin-accent">
                      {reply.name}
                    </p>
                    <p className="text-skin-text/80">{reply.message}</p>
                    {reply.createdAt?.seconds && (
                      <p className="text-xs text-skin-muted italic">
                        {formatDistanceToNow(
                          new Date(reply.createdAt.seconds * 1000),
                          { addSuffix: true }
                        )}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CommentList;
