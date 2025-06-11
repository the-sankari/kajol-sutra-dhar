import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProjects } from "../features/projects/projectsSlice";

import ProjectCard from "../components/project/ProjectCard";
import ProjectFilterBar from "../components/project/ProjectFilterBAr";

const Projects = () => {
  const dispatch = useDispatch();
  const {
    list: projects,
    loading,
    error,
  } = useSelector((state) => state.projects);

  const [activeTag, setActiveTag] = useState("All");

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const filteredProjects =
    activeTag === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <section className="min-h-screen px-6 py-16 bg-skin-bg text-skin-text">
      <h1 className="text-4xl font-bold text-center text-skin-accent2 mb-8">
        🚀 Projects
      </h1>

      {loading && (
        <p className="text-center text-skin-muted">Loading projects...</p>
      )}

      {error && <p className="text-center text-red-500">Error: {error}</p>}

      {!loading && !error && (
        <>
          <ProjectFilterBar
            projects={projects}
            onFilter={(tag) => setActiveTag(tag)}
          />

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={idx}
                title={project.name}
                description={project.description}
                tech={project.tags}
                github={project.github}
                live={project.live || ""}
                image={project.image}
                slug={project.slug}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Projects;
