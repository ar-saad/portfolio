import { useTheme } from "@/components/ThemeSwitch/ThemeProvider";
import xLogoWhite from "../../assets/x-logo-white.png";
import xLogoBlack from "../../assets/x-logo-black.png";
import facebookLogoWhite from "../../assets/Facebook_Logo_Primary.png";
import gitHubLogoWhite from "../../assets/github-mark-white.png";
import gitHubLogoBlack from "../../assets/github-mark.png";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import CodeBlock from "@/components/ui/CodeBlock";
import AnimatedTitles from "@/components/ui/AnimatedTitles";
import { motion } from "motion/react";

const codeString = `const profile = {
  name: "Abdur Rahman Saad",
  title: "Full-Stack Developer",
  skills: [
    "React.js", "JavaScript", "TypeScript", "Tailwind CSS", "DaisyUI", 
    "Shadcn", "Node.js", "Express.js", "MongoDB", "Mongoose", "NeonDB", 
    "PostgreSQL", "Git", "GitHub", "Nginx", "VPS Deployment", "Firebase", 
    "Vercel", "Netlify", "JWT Auth"
  ],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  yearsOfExperience: 2,
  hireable() {
    return (
      this.hardWorker &&
      this.quickLearner &&
      this.problemSolver &&
      this.yearsOfExperience >= 2
    );
  }
};
`;

const Banner = () => {
  const { theme } = useTheme();

  return (
    <div>
      {/* Grid + vignette background */}
      <div
        id="banner"
        className="
            absolute inset-0 -z-10
            dark:bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
            light:bg-[linear-gradient(rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.06)_1px,transparent_1px)]
            bg-size-[40px_40px]
          "
      />

      {/* Center fade */}
      <div
        className="
          absolute inset-0 -z-10
          dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.65)_70%)]
          light:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.4)_70%)]
        "
      />
      <div className="max-w-[1400px] w-full mx-auto min-h-[calc(100vh-68px)] grid grid-cols-1 md:grid-cols-2 items-center relative p-4 md:p-5 gap-6 md:gap-10 pb-12 md:pb-5">
        {/* Background Glow */}
        <div className="absolute left-1/6 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-linear-to-r from-cyan-500 via-blue-500 to-green-500 rounded-full blur-[130px] opacity-30 -z-10" />

        <div className="w-full max-w-[600px] order-2 md:order-1">
          <div>
            <h1 className="text-3xl md:text-3xl lg:text-6xl font-medium mb-2 title-font">
              Hello
              <motion.span
                className="inline-block ml-2"
                style={{ transformOrigin: "70% 70%" }}
                animate={{
                  rotate: [0, 14, -8, 14, -4, 10, 0, 0],
                }}
                transition={{
                  duration: 1.2,
                  ease: "easeInOut",
                  times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 1],
                  repeat: Infinity,
                }}
                aria-hidden
              >
                👋
              </motion.span>
              <br />I am{" "}
              <span className="bg-linear-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
                Abdur Rahman Saad
              </span>
            </h1>

            <AnimatedTitles
              titles={[
                "Full-stack Developer",
                "Backend Systems Builder",
                "Problem Solver",
              ]}
              letterDelay={45}
              hold={1200}
            />

            <h4 className="text-gray-600 dark:text-gray-400 text-lg my-3">
              I build scalable, user‑focused web applications with a strong
              emphasis on clean design, maintainable architecture, and
              real-world problem solving.
            </h4>
          </div>

          <div className="flex gap-7 my-5 text-xl">
            <Button variant="secondary" className="h-10">
              Let's Connect <FaArrowRight />
            </Button>
            <Button variant="outline" size="icon-lg">
              <a href="https://x.com/arsaad_dev" target="_blank">
                {theme === "dark" ? (
                  <img src={xLogoWhite} alt="" className="w-6 h-6" />
                ) : (
                  <img src={xLogoBlack} alt="" className="w-6 h-6" />
                )}
              </a>
            </Button>

            <Button variant="outline" size="icon-lg">
              <a href="https://github.com/ar-saad" target="_blank">
                {theme === "dark" ? (
                  <img src={gitHubLogoWhite} alt="" className="w-6 h-6" />
                ) : (
                  <img src={gitHubLogoBlack} alt="" className="w-6 h-6" />
                )}
              </a>
            </Button>

            <Button variant="outline" size="icon-lg">
              <a href="https://www.facebook.com/arsaad00/" target="_blank">
                {theme === "dark" ? (
                  <img src={facebookLogoWhite} alt="" className="w-6 h-6" />
                ) : (
                  <img src={facebookLogoWhite} alt="" className="w-6 h-6" />
                )}
              </a>
            </Button>
          </div>
        </div>

        {/* Right Code Block */}
        <div className="w-full order-1 md:order-2 flex justify-center md:justify-end">
          <CodeBlock code={codeString} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
