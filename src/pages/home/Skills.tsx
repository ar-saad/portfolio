import neondb from "../../assets/neon-logomark-dark-color.svg";
import jwt from "../../assets/jwt.png";
import nodejs from "../../assets/jsIconGreen.svg";
import SkillCard from "@/components/ui/SkillCard";

type SkillGroup = {
  label: string;
  accent: string; // Tailwind color for the group label pill
  skills: { title: string; svg: string }[];
};

const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    accent: "from-cyan-500 to-blue-500",
    skills: [
      { title: "React.js", svg: "https://cdn.simpleicons.org/react" },
      { title: "Next.js", svg: "https://cdn.simpleicons.org/nextdotjs" },
      { title: "JavaScript", svg: "https://cdn.simpleicons.org/javascript" },
      { title: "TypeScript", svg: "https://cdn.simpleicons.org/typescript" },
      { title: "Tailwind CSS", svg: "https://cdn.simpleicons.org/tailwindcss" },
      { title: "DaisyUI", svg: "https://cdn.simpleicons.org/daisyui" },
      { title: "Shadcn UI", svg: "https://cdn.simpleicons.org/shadcnui" },
      { title: "TanStack Form", svg: "https://cdn.simpleicons.org/reactquery" },
      { title: "TanStack Query", svg: "https://cdn.simpleicons.org/reactquery" },
    ],
  },
  {
    label: "Backend",
    accent: "from-emerald-500 to-teal-500",
    skills: [
      { title: "Node.js", svg: nodejs },
      { title: "Express.js", svg: "https://cdn.simpleicons.org/express" },
      { title: "Prisma ORM", svg: "https://cdn.simpleicons.org/prisma" },
      { title: "Better Auth", svg: "https://cdn.simpleicons.org/auth0" },
      { title: "JWT Auth", svg: jwt },
      { title: "Nodemailer", svg: "https://cdn.simpleicons.org/nodemailer" },
      { title: "Zod", svg: "https://cdn.simpleicons.org/zod" },
    ],
  },
  {
    label: "Database",
    accent: "from-violet-500 to-purple-600",
    skills: [
      { title: "PostgreSQL", svg: "https://cdn.simpleicons.org/postgresql" },
      { title: "NeonDB", svg: neondb },
      { title: "MongoDB", svg: "https://cdn.simpleicons.org/mongodb" },
      { title: "Mongoose", svg: "https://cdn.simpleicons.org/mongoose" },
      { title: "Firebase", svg: "https://cdn.simpleicons.org/firebase" },
    ],
  },
  {
    label: "Tools & DevOps",
    accent: "from-orange-500 to-amber-500",
    skills: [
      { title: "Git", svg: "https://cdn.simpleicons.org/git" },
      { title: "GitHub", svg: "https://cdn.simpleicons.org/github" },
      { title: "Cloudinary", svg: "https://cdn.simpleicons.org/cloudinary" },
      { title: "Vercel", svg: "https://cdn.simpleicons.org/vercel" },
      { title: "Netlify", svg: "https://cdn.simpleicons.org/netlify" },
      { title: "Nginx", svg: "https://cdn.simpleicons.org/nginx" },
      { title: "VPS / Ubuntu", svg: "https://cdn.simpleicons.org/ubuntu" },
    ],
  },
];

const Skills = () => {
  return (
    <section className="relative isolate overflow-hidden py-20" id="skills">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_30%,rgba(56,189,248,0.12),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.08),transparent_35%)]" />

      <div className="max-w-[1200px] w-full mx-auto px-6">
        {/* Header section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 px-4 py-2 bg-white/5 dark:bg-white/5 backdrop-blur text-sm font-medium mb-6">
            <span className="h-2 w-2 rounded-full bg-linear-to-r from-cyan-500 to-blue-500 animate-pulse" />
            Technical Skills
          </div>
          <h1 className="text-4xl lg:text-5xl font-semibold title-font leading-tight">
            Technologies &amp; Tools
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            A comprehensive stack of modern technologies I use to build
            scalable, performant applications
          </p>
        </div>

        {/* Grouped skill sections */}
        <div className="space-y-10">
          {skillGroups.map((group) => (
            <div key={group.label}>
              {/* Group label */}
              <div className="flex items-center gap-3 mb-5">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r ${group.accent} px-3 py-1 text-xs font-bold tracking-wide text-white shadow-md`}
                >
                  {group.label}
                </span>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              {/* Skills grid */}
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <SkillCard
                    key={skill.title}
                    header={skill.title}
                    img={skill.svg}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
