import neondb from "../../assets/neon-logomark-dark-color.svg";
import jwt from "../../assets/jwt.png";
import nodejs from "../../assets/jsIconGreen.svg";

const SkillCard = ({ img, header }: { img: string; header: string }) => {
  return (
    <div className="skill-card-hover group relative rounded-2xl border border-white/10 bg-white/5 dark:bg-white/5 backdrop-blur p-6 transition-all duration-300 ease-out cursor-pointer hover:scale-110 hover:-translate-y-2 w-full max-w-[180px]">
      <div className="flex items-center justify-center mb-4 min-h-16">
        <img
          src={img}
          alt={header}
          className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110 filter group-hover:brightness-110"
        />
      </div>
      <p className="text-center font-medium text-sm text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
        {header}
      </p>
    </div>
  );
};

const techIcons = [
  { title: "React.js", svg: "https://cdn.simpleicons.org/react" },
  { title: "JavaScript", svg: "https://cdn.simpleicons.org/javascript" },
  { title: "TypeScript", svg: "https://cdn.simpleicons.org/typescript" },
  { title: "Tailwind CSS", svg: "https://cdn.simpleicons.org/tailwindcss" },
  { title: "DaisyUI", svg: "https://cdn.simpleicons.org/daisyui" },
  { title: "Shadcn", svg: "https://cdn.simpleicons.org/shadcnui" },
  { title: "Node.js", svg: nodejs },
  { title: "Express.js", svg: "https://cdn.simpleicons.org/express" },
  { title: "MongoDB", svg: "https://cdn.simpleicons.org/mongodb" },
  { title: "Mongoose", svg: "https://cdn.simpleicons.org/mongoose" },
  { title: "NeonDB", svg: neondb },
  { title: "PostgreSQL", svg: "https://cdn.simpleicons.org/postgresql" },
  { title: "Git", svg: "https://cdn.simpleicons.org/git" },
  { title: "GitHub", svg: "https://cdn.simpleicons.org/github" },
  { title: "Nginx", svg: "https://cdn.simpleicons.org/nginx" },
  { title: "VPS Deployment", svg: "https://cdn.simpleicons.org/ubuntu" },
  { title: "Firebase", svg: "https://cdn.simpleicons.org/firebase" },
  { title: "Vercel", svg: "https://cdn.simpleicons.org/vercel" },
  { title: "Netlify", svg: "https://cdn.simpleicons.org/netlify" },
  { title: "JWT Auth", svg: jwt },
];

const Skills = () => {
  return (
    <section
      className="relative isolate overflow-hidden py-20"
      id="skills-section"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_30%,rgba(56,189,248,0.12),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.08),transparent_35%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01)),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[100%_100%,36px_36px,36px_36px]" />

      <div className="max-w-[1200px] w-full mx-auto px-6">
        {/* Header section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 px-4 py-2 bg-white/5 dark:bg-white/5 backdrop-blur text-sm font-medium mb-6">
            <span className="h-2 w-2 rounded-full bg-linear-to-r from-cyan-500 to-blue-500 animate-pulse" />
            Technical Skills
          </div>
          <h1 className="text-4xl lg:text-5xl font-semibold title-font leading-tight">
            Technologies & Tools
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            A comprehensive stack of modern technologies I use to build
            scalable, performant applications
          </p>
        </div>

        {/* Skills grid with centered last row */}
        <div className="skills-grid">
          {techIcons.map((item) => (
            <SkillCard key={item.title} header={item.title} img={item.svg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
