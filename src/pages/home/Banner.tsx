import { useEffect, useState } from "react";
import { useTheme } from "@/components/others/ThemeProvider";
import xLogoWhite from "../../assets/x-logo-white.png";
import xLogoBlack from "../../assets/x-logo-black.png";
import facebookLogoWhite from "../../assets/Facebook_Logo_Primary.png";
import gitHubLogoWhite from "../../assets/github-mark-white.png";
import gitHubLogoBlack from "../../assets/github-mark.png";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import CodeBlock from "@/components/ui/codeBlock";

const AnimatedTitles = ({
  titles,
  letterDelay = 50,
  hold = 1200,
}: {
  titles: string[];
  letterDelay?: number;
  hold?: number;
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const currentLen = titles[index].length;
    const duration = currentLen * letterDelay + hold;
    const t = setTimeout(() => {
      setIndex((i) => (i + 1) % titles.length);
    }, duration);
    return () => clearTimeout(t);
  }, [index, titles, letterDelay, hold]);

  const title = titles[index];

  return (
    <h2 className="text-3xl font-medium title-font my-5 border rounded-lg bg-gradient-to-r from-cyan-500/30 to-blue-500/30 w-full max-w-[275px] px-3 py-2 text-center">
      <span className="inline-block mr-2 opacity-0" aria-hidden />
      <span key={index} className="inline-block" aria-label={title} role="text">
        {Array.from(title).map((ch, i) => {
          const isSpace = ch === " ";
          return (
            <span
              key={i}
              className={`letter ${isSpace ? "letter-space" : ""}`}
              style={{ animationDelay: `${i * letterDelay}ms` }}
              aria-hidden={isSpace}
            >
              {isSpace ? "\u00A0" : ch}
            </span>
          );
        })}
      </span>
    </h2>
  );
};

const codeString = `const profile = {
  name: "Abdur Rahman Saad",
  title: "Full-Stack Developer",
  skills: [
    "React.js", "JavaScript", "TypeScript", "Tailwind CSS", "DaisyUI", "Shadcn", 
    "Node.js", "Express.js", "MongoDB", "Mongoose", "NeonDB", "PostgreSQL", "Git",
    "GitHub", "Nginx", "VPS Deployment", "Firebase", "Vercel", "Netlify", "JWT Auth",
  ]
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
      <div className="h-[calc(100vh-68px)] flex justify-between items-center relative">
        {/* Background Glow */}
        <div className="absolute left-1/6 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-cyan-500 via-blue-500 to-green-500 rounded-full blur-[130px] opacity-30 -z-10" />

        <div className="max-w-[600px]">
          <div>
            <h1 className="text-6xl font-medium mb-2 title-font">
              Hello
              <span className="inline-block ml-2 shake-hand" aria-hidden>
                👋
              </span>
              <br />I am{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
                Abdur Rahman Saad
              </span>
            </h1>

            <AnimatedTitles
              titles={[
                "Full-stack Developer",
                "UI/UX Enthusiast",
                "Problem Solver",
              ]}
              letterDelay={45}
              hold={1200}
            />

            <h4 className="text-gray-400 text-lg my-3">
              I build scalable, user‑focused web applications with a strong
              emphasis on clean design, maintainable architecture, and
              real-world problem solving.
            </h4>
          </div>

          <div className="flex gap-7 mt-5 text-xl">
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
        <div>
          <CodeBlock code={codeString} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
