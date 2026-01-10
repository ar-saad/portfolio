import profile from "../../assets/profile-picture.png";

const stats = [
  { label: "Experience", value: "2+ years" },
  { label: "Projects", value: "10+ shipped" },
  { label: "Focus", value: "MERN • UI/UX • DevOps" },
];

const focusAreas = [
  "Clean, scalable architecture",
  "Dashboards & role-based systems",
  "Performance + accessibility",
  "Rapid iteration with quality",
];

const coreStack = [
  "React",
  "TypeScript",
  "Tailwind",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Nginx + VPS",
];

const About = () => {
  return (
    <section
      className="relative isolate overflow-hidden py-12 md:py-20"
      id="about"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.12),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(34,197,94,0.08),transparent_25%)]" />

      <div className="max-w-[1200px] w-full mx-auto px-6 grid lg:grid-cols-[1.4fr_1fr] gap-10">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 px-4 py-2 bg-white/5 dark:bg-white/5 backdrop-blur text-sm font-medium">
            <span className="h-2 w-2 rounded-full bg-linear-to-r from-cyan-500 to-blue-500 animate-pulse" />
            About Me
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-semibold title-font leading-tight">
              Building practical web applications with a focus on how things
              work behind the scenes
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a full-stack developer who ships clean, scalable, and
              user-centric web apps. In my final BSc year in Physics, I balance
              academic rigor with hands-on work as a part-time Junior Software
              Developer—applying analytical thinking to real-world products.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              My strength lies across the MERN stack with a UI/UX-first mindset.
              I've built dashboards, role-based systems, and admin experiences
              for products like StartupBase, My3DPrinter, Smart School Bus,
              Alumni Connect, and SchoolCab—always caring about usability,
              performance, and maintainability.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Currently deepening TypeScript, Next.js, PostgreSQL, Mongoose, and
              advanced backend patterns while sharpening problem-solving through
              regular practice. I'm curious, growth-oriented, and motivated to
              build products that are technically solid and thoughtfully
              designed.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 dark:bg-white/5 backdrop-blur p-4 shadow-lg shadow-cyan-500/5"
              >
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  {item.label}
                </p>
                <p className="text-xl font-semibold mt-1">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-white/10 bg-linear-to-r from-cyan-500/10 to-blue-500/10 p-5 backdrop-blur">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.16em] text-gray-500">
                  Focus Areas
                </p>
                <h3 className="text-xl font-semibold">What I optimize for</h3>
              </div>
              <span className="hidden sm:inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold light:text-gray-500 dark:text-cyan-200">
                Product-minded engineer
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {focusAreas.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-gray-800 dark:text-gray-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-linear-to-br from-cyan-500/25 via-blue-500/20 to-green-500/15 blur-3xl" />
          <div className="rounded-3xl border border-white/10 bg-white/60 dark:bg-black/60 backdrop-blur-xl shadow-2xl overflow-hidden">
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-tr from-cyan-500/15 via-transparent to-blue-500/10" />
              <img
                src={profile}
                alt="Profile"
                className="w-full h-[600px] object-cover"
              />
            </div>

            <div className="p-6 space-y-4">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Quick snapshot
                </p>
                <h3 className="text-2xl font-semibold">Abdur Rahman Saad</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Full-stack developer • GenAI • Problem solver
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {coreStack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-gray-100 dark:bg-white/5 border border-white/10 px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 dark:bg-white/5 p-4 space-y-2">
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Recent highlights
                </p>
                <ul className="space-y-1 text-gray-700 dark:text-gray-100">
                  <li>
                    • Built dashboards & admin flows for role-based systems
                  </li>
                  <li>
                    • Deployed on VPS with Nginx, SSL, and CI-friendly setups
                  </li>
                  <li>
                    • Iterating with TypeScript + Express.js + PostgreSQL to
                    scale reliably
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
