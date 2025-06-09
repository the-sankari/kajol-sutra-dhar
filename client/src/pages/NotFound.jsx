// pages/NotFound.jsx
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center text-center text-skin-accent">
    <h1 className="text-5xl font-bold mb-4">404</h1>
    <p className="text-lg mb-6">Page not found.</p>
    <Link to="/" className="underline hover:text-skin-accent2">
      ← Go Home
    </Link>
  </div>
);

export default NotFound;
