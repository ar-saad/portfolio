import { projects } from "../../assets/projects";
import { ExternalLink, Github } from "lucide-react";
import { motion, type Variants } from "motion/react";

const Projects = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative isolate overflow-hidden py-20" id="projects">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_30%,rgba(56,189,248,0.12),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.08),transparent_35%)]" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-[1200px] w-full mx-auto px-6"
      >
        {/* Header section */}
        <div className="text-center mb-16">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 rounded-full border border-white/10 px-4 py-2 bg-white/5 dark:bg-white/5 backdrop-blur text-sm font-medium mb-6"
          >
            <span className="h-2 w-2 rounded-full bg-linear-to-r from-cyan-500 to-blue-500 animate-pulse" />
            Featured Projects
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-semibold title-font leading-tight"
          >
            Projects & Portfolio
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto"
          >
            A collection of projects showcasing my skills in building modern,
            scalable web applications
          </motion.p>
        </div>

        {/* Projects grid - 2 columns for large devices */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <motion.div variants={itemVariants} key={project.id}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
        </div>
      </motion.div>
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
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="project-card-hover group relative rounded-2xl border border-white/10 bg-white/5 dark:bg-white/5 backdrop-blur overflow-hidden cursor-pointer"
    >
      {/* Project Banner Image */}
      <div className="relative h-72 overflow-hidden bg-linear-to-br from-cyan-500/10 to-blue-500/10">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
          src={project.bannerImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

        {/* Role Badge */}
        <div className="absolute top-4 right-4 z-10">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold tracking-wide shadow-lg ring-1 ${
              project.role === "Full Stack"
                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white ring-cyan-400/50 shadow-cyan-500/30"
                : "bg-gradient-to-r from-violet-500 to-purple-600 text-white ring-violet-400/50 shadow-violet-500/30"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full animate-pulse ${
                project.role === "Full Stack" ? "bg-cyan-200" : "bg-violet-200"
              }`}
            />
            {project.role}
          </span>
        </div>

        {/* Links overlay on hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 flex-wrap px-4">
          {project.liveUrl && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-white/20 backdrop-blur px-4 py-2 text-white hover:bg-white/30 transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4" />
              <span className="text-sm font-medium">Live</span>
            </motion.a>
          )}
          {repoUrls.map((repo, index) => (
            <motion.a
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-white/20 backdrop-blur px-4 py-2 text-white hover:bg-white/30 transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4" />
              <span className="text-sm font-medium">{repo.label}</span>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-500 transition-colors mb-2">
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
            {[...project.frontendTech, ...(project.backendTech || [])].map(
              (tech) => (
                <motion.span
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  key={tech}
                  className="rounded-full border border-white/15 bg-white/5 dark:bg-white/5 px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-200 cursor-default"
                >
                  {tech}
                </motion.span>
              )
            )}
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
    </motion.div>
  );
};

export default Projects;
