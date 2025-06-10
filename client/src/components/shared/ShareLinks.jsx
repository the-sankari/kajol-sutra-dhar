// src/components/common/ShareLinks.jsx
const ShareLinks = () => {
  const currentUrl = encodeURIComponent(window.location.href);

  return (
    <div className="mt-12">
      <h3 className="font-semibold text-skin-accent2 mb-2">
        Share this project:
      </h3>
      <div className="flex gap-3 flex-wrap">
        <a
          href={`https://twitter.com/intent/tweet?url=${currentUrl}`}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-skin-accent underline hover:text-skin-accent2 transition"
        >
          🐦 Twitter
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-skin-accent underline hover:text-skin-accent2 transition"
        >
          📘 Facebook
        </a>
        <a
          href={`mailto:?subject=Check this project&body=${currentUrl}`}
          className="text-sm text-skin-accent underline hover:text-skin-accent2 transition"
        >
          ✉️ Email
        </a>
      </div>
    </div>
  );
};

export default ShareLinks;
