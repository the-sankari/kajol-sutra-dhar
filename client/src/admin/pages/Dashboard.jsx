import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase/firebase";
import { Link } from "react-router-dom";
import { FileText, FolderKanban, Mail } from "lucide-react";

export default function Dashboard() {
  const [counts, setCounts] = useState({
    blogs: 0,
    projects: 0,
    messages: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCounts = async () => {
      const blogsSnap = await getDocs(collection(db, "blogs"));
      const projectsSnap = await getDocs(collection(db, "projects"));
      const messagesSnap = await getDocs(collection(db, "contact_messages")); // optional

      setCounts({
        blogs: blogsSnap.size,
        projects: projectsSnap.size,
        messages: messagesSnap.size,
      });

      setLoading(false);
    };

    fetchCounts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full text-xl text-white">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <DashboardCard
          title="Total Blogs"
          count={counts.blogs}
          icon={<FileText size={36} />}
          link="/admin/blogs"
          color="from-blue-500 to-indigo-500"
        />
        <DashboardCard
          title="Total Projects"
          count={counts.projects}
          icon={<FolderKanban size={36} />}
          link="/admin/projects"
          color="from-green-500 to-emerald-500"
        />
        <DashboardCard
          title="Contact Messages"
          count={counts.messages}
          icon={<Mail size={36} />}
          link="/admin/messages"
          color="from-pink-500 to-fuchsia-500"
        />
      </div>
    </div>
  );
}

function DashboardCard({ title, count, icon, link, color }) {
  return (
    <Link
      to={link}
      className={`p-6 rounded-xl shadow-xl bg-gradient-to-br ${color} transform hover:scale-105 transition-all text-white flex flex-col items-center justify-center text-center`}
    >
      <div className="mb-4">{icon}</div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-4xl font-bold">{count}</p>
    </Link>
  );
}
