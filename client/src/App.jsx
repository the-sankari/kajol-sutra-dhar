import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/helper/ScrollToTop";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetails from "./components/project/ProjectsDetails";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import SingleBlogPage from "./pages/SingleBlogPage";
import { adminRoutes } from "./admin/routes"; // ✅ This stays

import "./css/theme.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Public routes wrapped with Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<ProjectDetails />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blogs/:id" element={<SingleBlogPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* ✅ Admin routes placed outside the layout */}
        {adminRoutes}
      </Routes>
    </Router>
  );
}

export default App;
