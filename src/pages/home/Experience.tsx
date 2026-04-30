import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ExperienceRole = {
  title: string;
  type: "Internship" | "Permanent";
  period: string;
  description: string;
  responsibilities: string[];
  keyProjects: {
    name: string;
    liveUrl?: string;
    summary: string;
  }[];
  technologies: string[];
};

const company = {
  name: "FronTech Limited",
  location: "Bangladesh",
  industry: "Software Development",
  totalDuration: "2 years 2 months",
  logo: "/frontech.jpg",
  linkedinUrl: "https://www.linkedin.com/company/frontech-robotics/",
};

const roles: ExperienceRole[] = [
  {
    title: "Junior Software Developer",
    type: "Permanent",
    period: "Jul 2024 — Oct 2025",
    description:
      "Promoted to a permanent role where I took on greater ownership of frontend architecture and cross-functional collaboration. Led the development of multiple client-facing products from scratch, working closely with backend and hardware teams to deliver scalable, production-ready solutions.",
    responsibilities: [
      "Built and maintained interactive single-page applications using modern web technologies",
      "Collaborated in agile team environments, participating in planning and code reviews",
      "Deployed production-ready code and contributed to performance improvements",
      "Led frontend architecture decisions for new product builds",
      "Managed end-to-end VPS hosting, domain routing, and CI/CD pipelines using Nginx and GitHub Actions",
    ],
    keyProjects: [
      {
        name: "Smart School Bus",
        liveUrl: "https://smartschoolbus.gov.bd",
        summary:
          "Built the entire frontend for a school transportation platform featuring real-time GPS tracking, live video streaming, photo-based attendance, and multi-role dashboards.",
      },
      {
        name: "Alumni Connect",
        liveUrl: "https://alumniconnect.xyz",
        summary:
          "Developed the complete frontend with dynamic subdomain-based routing, multi-role dashboards, secure authentication, and seamless API integration with the backend team.",
      },
      {
        name: "Startup Base",
        liveUrl: "https://startupbase.info",
        summary:
          "Created a comprehensive resource hub for the Bangladesh startup ecosystem with user registration, dynamic profiles, categorized content modules, and full VPS deployment.",
      },
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "React Router",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Nginx",
      "VPS",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "MERN Stack Web Developer Intern",
    type: "Internship",
    period: "Sep 2023 — Jun 2024",
    description:
      "Joined as an intern and quickly ramped up on the MERN stack in a professional environment. Contributed to active projects, gained experience with agile workflows, and built a strong foundation in production-level frontend development.",
    responsibilities: [
      "Built interactive, responsive UI components for web applications using React.js",
      "Collaborated with senior developers on feature planning and implementation",
      "Participated in code reviews and adopted best practices for clean, maintainable code",
      "Learned and applied agile methodologies in a team setting",
      "Assisted in debugging and resolving production issues",
    ],
    keyProjects: [],
    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "DaisyUI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Git",
      "GitHub",
    ],
  },
];

const Experience = () => {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lineRef.current) {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: "#experience",
            start: "top 70%",
            end: "bottom 80%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative isolate overflow-hidden py-20" id="experience">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.12),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_50%_90%,rgba(34,197,94,0.08),transparent_30%)]" />

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
            variants={cardVariants}
            className="inline-flex items-center gap-3 rounded-full border border-white/10 px-4 py-2 bg-white/5 dark:bg-white/5 backdrop-blur text-sm font-medium mb-6"
          >
            <span className="h-2 w-2 rounded-full bg-linear-to-r from-cyan-500 to-blue-500 animate-pulse" />
            Work Experience
          </motion.div>
          <motion.h1
            variants={cardVariants}
            className="text-4xl lg:text-5xl font-semibold title-font leading-tight"
          >
            Professional Journey
          </motion.h1>
          <motion.p
            variants={cardVariants}
            className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto"
          >
            Building real-world products, growing from intern to developer — all
            at one company I've called home for 2+ years
          </motion.p>
        </div>

        {/* Company header card */}
        <motion.div
          variants={cardVariants}
          className="rounded-2xl border border-white/10 bg-linear-to-r from-cyan-500/10 to-blue-500/10 p-6 backdrop-blur mb-10"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-white/10 flex items-center justify-center shadow-lg overflow-hidden border border-white/20">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-semibold">{company.name}</h2>
                  <a
                    href={company.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#0A66C2] transition-colors"
                    title="View on LinkedIn"
                  >
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
                <div className="flex items-center gap-3 mt-1 text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {company.location}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-gray-400" />
                  <span>{company.industry}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-cyan-500" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                {company.totalDuration}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div
            ref={lineRef}
            className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent hidden md:block origin-top"
          />

          <div className="space-y-8">
            {roles.map((role, index) => (
              <motion.div
                variants={cardVariants}
                key={index}
                className="relative md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-8 hidden md:flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 ring-4 ring-background shadow-lg shadow-cyan-500/30" />
                </div>

                {/* Role card */}
                <div className="experience-card-hover rounded-2xl border border-white/10 bg-white/5 dark:bg-white/5 backdrop-blur overflow-hidden transition-all duration-300 ease-out">
                  {/* Role header */}
                  <div className="p-6 pb-4 border-b border-white/5">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="text-xl font-semibold">
                            {role.title}
                          </h3>
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold tracking-wide shadow-md ring-1 ${
                              role.type === "Permanent"
                                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white ring-cyan-400/50 shadow-cyan-500/30"
                                : "bg-gradient-to-r from-violet-500 to-purple-600 text-white ring-violet-400/50 shadow-violet-500/30"
                            }`}
                          >
                            <span
                              className={`h-1.5 w-1.5 rounded-full animate-pulse ${
                                role.type === "Permanent"
                                  ? "bg-cyan-200"
                                  : "bg-violet-200"
                              }`}
                            />
                            {role.type}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5" />
                          {role.period}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-3">
                      {role.description}
                    </p>
                  </div>

                  <div className="p-6 space-y-6">
                    {/* Responsibilities */}
                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                        Key Responsibilities
                      </p>
                      <ul className="space-y-2">
                        {role.responsibilities.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2"
                          >
                            <span className="text-cyan-500 mt-0.5 shrink-0">
                              ▸
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Projects */}
                    {role.keyProjects.length > 0 && (
                      <div>
                        <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                          Key Projects Delivered
                        </p>
                        <div className="grid gap-3">
                          {role.keyProjects.map((project, i) => (
                            <div
                              key={i}
                              className="rounded-xl border border-white/10 bg-white/5 dark:bg-white/5 p-4 transition-all duration-200 hover:border-cyan-500/30"
                            >
                              <div className="flex items-center justify-between mb-1">
                                <h4 className="font-semibold text-sm">
                                  {project.name}
                                </h4>
                                {project.liveUrl && (
                                  <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-xs text-cyan-500 hover:text-cyan-400 transition-colors"
                                  >
                                    <ExternalLink className="w-3 h-3" />
                                    Live
                                  </a>
                                )}
                              </div>
                              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                                {project.summary}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Technologies used */}
                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                        Technologies Used
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {role.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-white/15 bg-white/5 dark:bg-white/5 px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
