import { projects } from "../../assets/projects";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  return (
    <section className="relative isolate overflow-hidden py-20" id="projects">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_30%,rgba(56,189,248,0.12),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.08),transparent_35%)]" />

      <div className="max-w-[1200px] w-full mx-auto px-6">
        {/* Header section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 px-4 py-2 bg-white/5 dark:bg-white/5 backdrop-blur text-sm font-medium mb-6">
            <span className="h-2 w-2 rounded-full bg-linear-to-r from-cyan-500 to-blue-500 animate-pulse" />
            Featured Projects
          </div>
          <h1 className="text-4xl lg:text-5xl font-semibold title-font leading-tight">
            Projects & Portfolio
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in building modern,
            scalable web applications
          </p>
        </div>

        {/* Projects grid - 2 columns for large devices */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
  // Build array of available repo URLs
  const repoUrls: Array<{ url: string; label: string }> = [];
  if (project.repoUrl?.frontend) {
    repoUrls.push({ url: project.repoUrl.frontend, label: "Frontend" });
  }
  if (project.repoUrl?.backend) {
    repoUrls.push({ url: project.repoUrl.backend, label: "Backend" });
  }

  return (
    <div className="project-card-hover group relative rounded-2xl border border-white/10 bg-white/5 dark:bg-white/5 backdrop-blur overflow-hidden transition-all duration-300 ease-out cursor-pointer hover:scale-[1.02] hover:-translate-y-1">
      {/* Project Banner Image */}
      <div className="relative h-72 overflow-hidden bg-linear-to-br from-cyan-500/10 to-blue-500/10">
        <img
          src={project.bannerImage}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

        {/* Role Badge */}
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur px-3 py-1 text-xs font-medium text-white">
            {project.role}
          </span>
        </div>

        {/* Links overlay on hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 flex-wrap px-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-white/20 backdrop-blur px-4 py-2 text-white hover:bg-white/30 transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4" />
              <span className="text-sm font-medium">Live</span>
            </a>
          )}
          {repoUrls.map((repo, index) => (
            <a
              key={index}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-white/20 backdrop-blur px-4 py-2 text-white hover:bg-white/30 transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4" />
              <span className="text-sm font-medium">{repo.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-gray-950 dark:group-hover:text-white transition-colors mb-2">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div>
          <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
            Technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {project.frontendTech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/15 bg-white/5 dark:bg-white/5 px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-200"
              >
                {tech}
              </span>
            ))}
            {project.backendTech?.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/15 bg-white/5 dark:bg-white/5 px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features Preview */}
        {project.features && project.features.length > 0 && (
          <div>
            <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
              Key Features
            </p>
            <ul className="space-y-1">
              {project.features.slice(0, 3).map((feature, index) => (
                <li
                  key={index}
                  className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2"
                >
                  <span className="text-cyan-500 mt-1">•</span>
                  <span>{feature.title}</span>
                </li>
              ))}
              {project.features.length > 3 && (
                <li className="text-sm text-gray-500 dark:text-gray-400 italic">
                  + {project.features.length - 3} more features
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
