import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/helper/ScrollToTop";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetails from "./components/project/ProjectsDetails";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import "./css/theme.css";
import Blog from "./pages/Blog";
import SingleBlogPage from "./pages/SingleBlogPage";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ✅ This must come before Routes */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<ProjectDetails />} />
          <Route path="blog" element={<Blog />} />
          <Route path="/blogs/:id" element={<SingleBlogPage />} />

          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
