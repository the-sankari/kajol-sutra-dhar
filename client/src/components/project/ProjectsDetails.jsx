import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { projects } from "../../data/projects";
import ReactMarkdown from "react-markdown";

import HeroMedia from "../shared/HeroMedia";
import Breadcrumb from "../shared/Breadcrumb";
import ProjectTabs from "../tabs/ProjectTabs";
import CommentForm from "../common/CommentForm";
import CommentList from "../common/CommentList";
import ShareLinks from "../shared/ShareLinks";
import RelatedProjects from "../shared/RelatedProjects";
import ActionButtons from "../shared/ActionsButton";

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-skin-accent text-xl">
        🚫 Project not found
      </div>
    );
  }

  const related = projects
    .filter(
      (p) =>
        p.slug !== slug && p.tags?.some((tag) => project.tags?.includes(tag))
    )
    .slice(0, 3);

  return (
    <section className="min-h-screen px-4 md:px-8 py-20 bg-skin-bg text-skin-text">
      <Breadcrumb paths={["Home", "Projects", project.name]} />

      <HeroMedia
        title={project.name}
        media={project.media}
        image={project.image}
      />

      {/* Description */}
      <div className="max-w-5xl mx-auto mt-10">
        {project.description && (
          <ReactMarkdown className="prose prose-invert max-w-none text-skin-text/90 mb-10">
            {project.description}
          </ReactMarkdown>
        )}
      </div>

      {/* Actions */}
      <div className="max-w-5xl mx-auto">
        <ActionButtons live={project.live} github={project.github} />
      </div>

      {/* Tabs */}
      <div className="max-w-5xl mx-auto">
        <ProjectTabs
          tech={project.tags || []}
          gallery={project.gallery || []}
          challenges={project.challenges || []}
        />
      </div>

      {/* Comments */}
      <div className="max-w-5xl mx-auto mt-12">
        <CommentForm slug={slug} />
        <CommentList slug={slug} />
      </div>

      {/* Share */}
      <div className="max-w-5xl mx-auto mt-12">
        <ShareLinks />
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="max-w-5xl mx-auto mt-16">
          <RelatedProjects projects={related} />
        </div>
      )}

      {/* Back Link */}
      <div className="max-w-5xl mx-auto mt-12">
        <Link
          to="/projects"
          className="text-skin-accent hover:underline inline-flex items-center gap-1"
        >
          ← Back to Projects
        </Link>
      </div>
    </section>
  );
};

export default ProjectDetails;
