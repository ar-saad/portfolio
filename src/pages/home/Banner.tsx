import { useTheme } from "@/components/ThemeSwitch/ThemeProvider";
import xLogoWhite from "../../assets/x-logo-white.png";
import xLogoBlack from "../../assets/x-logo-black.png";
// import facebookLogoWhite from "../../assets/Facebook_Logo_Primary.png";
import gitHubLogoWhite from "../../assets/github-mark-white.png";
import gitHubLogoBlack from "../../assets/github-mark.png";
import { Download, MessageCircle } from "lucide-react";
import CodeBlock from "@/components/ui/CodeBlock";
import AnimatedTitles from "@/components/ui/AnimatedTitles";
import { motion, type Variants } from "motion/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Banner = () => {
  const { theme } = useTheme();
  const magneticButtonRef = useRef<HTMLButtonElement>(null);
  const resumeLink =
    "https://drive.google.com/file/d/1i2NlGoiEpuW3_3dSmw93pvdwyLpt40dR/view?usp=sharing";

  useEffect(() => {
    const button = magneticButtonRef.current;
    if (!button) return;

    const moveButton = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      gsap.to(button, {
        x: x * 0.4,
        y: y * 0.4,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const resetButton = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)",
      });
    };

    button.addEventListener("mousemove", moveButton);
    button.addEventListener("mouseleave", resetButton);

    return () => {
      button.removeEventListener("mousemove", moveButton);
      button.removeEventListener("mouseleave", resetButton);
    };
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const socialLinks = [
    {
      href: "https://x.com/arsaad_dev",
      iconDark: xLogoWhite,
      iconLight: xLogoBlack,
      label: "Twitter",
    },
    {
      href: "https://github.com/ar-saad",
      iconDark: gitHubLogoWhite,
      iconLight: gitHubLogoBlack,
      label: "GitHub",
    },
    // {
    //   href: "https://www.facebook.com/arsaad00/",
    //   iconDark: facebookLogoWhite,
    //   iconLight: facebookLogoWhite,
    //   label: "Facebook",
    // },
  ];

  return (
    <div className="relative">
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

      <div className="max-w-[1400px] w-full mx-auto min-h-[calc(100vh-68px)] flex items-center relative p-6 md:p-10">
        {/* Background Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-linear-to-r from-cyan-500 via-blue-500 to-green-500 rounded-full blur-[130px] -z-10"
        />

        <div className="w-full grid grid-cols-1 lg:grid-cols-[auto_1.2fr_1fr] items-center gap-12">
          {/* Vertical Social Links */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex flex-col gap-6"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.1 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 backdrop-blur flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <img
                  src={theme === "dark" ? social.iconDark : social.iconLight}
                  alt={social.label}
                  className="w-5 h-5 transition-opacity"
                />
              </motion.a>
            ))}
            <div className="w-px h-20 bg-linear-to-b from-white/20 to-transparent mx-auto mt-2" />
          </motion.div>

          {/* Main Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-[700px]"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 title-font tracking-tight">
                Hello
                <motion.span
                  className="inline-block ml-3"
                  style={{ transformOrigin: "70% 70%" }}
                  animate={{
                    rotate: [0, 14, -8, 14, -4, 10, 0, 0],
                  }}
                  transition={{
                    duration: 1.2,
                    ease: "easeInOut",
                    times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 1],
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                  aria-hidden
                >
                  👋
                </motion.span>
                <br />
                <span className="text-gray-900 dark:text-white">I am </span>
                <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-600 text-transparent bg-clip-text">
                  Abdur Rahman Saad
                </span>
              </h1>

              <div className="h-12 lg:h-16">
                <AnimatedTitles
                  titles={[
                    "Full-stack Developer",
                    "Backend Systems Builder",
                    "UI/UX Enthusiast",
                  ]}
                  letterDelay={45}
                  hold={1500}
                />
              </div>

              <h4 className="text-gray-600 dark:text-gray-400 text-lg md:text-xl my-6 leading-relaxed max-w-[600px]">
                I build scalable, user‑focused web applications with a strong
                emphasis on clean design, maintainable architecture, and
                real-world problem solving.
              </h4>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-6 items-center"
            >
              {/* Magnetic CTA with Snake Border & Pulse */}
              <div className="relative group/cta">
                <motion.button
                  ref={magneticButtonRef}
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="group relative px-8 py-4 rounded-2xl bg-black dark:bg-black text-white font-bold text-lg shadow-2xl shadow-cyan-500/20 overflow-hidden"
                >
                  {/* Snake Border Effect */}
                  <div className="absolute inset-0 p-[2px] rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-r from-cyan-400 via-blue-600 to-indigo-600 opacity-20" />
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,#06b6d4_360deg)]"
                    />
                  </div>

                  {/* Internal Glow */}
                  <div className="absolute inset-[2px] rounded-2xl bg-linear-to-r from-cyan-400 to-blue-500 z-10" />

                  <motion.div
                    animate={{
                      opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-cyan-500 blur-xl z-10 pointer-events-none"
                  />

                  <span className="relative z-20 flex items-center gap-2">
                    Let's Talk{" "}
                    <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </span>
                </motion.button>

                {/* External Pulse */}
                <div className="absolute inset-0 rounded-2xl bg-cyan-500/20 blur-xl group-hover/cta:scale-110 transition-transform -z-10 animate-pulse" />
              </div>

              {/* Enhanced Resume Button */}
              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute -inset-0.5 rounded-2xl bg-linear-to-r from-gray-500/50 to-white/20 blur-sm group-hover:from-cyan-500/50 group-hover:to-blue-500/50 transition-all duration-500" />
                <button className="relative h-14 px-8 rounded-2xl bg-white/5 dark:bg-black/40 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all text-lg font-semibold flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-white/5 group-hover:bg-cyan-500/10 transition-colors">
                    <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <span>Download Resume</span>
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-linear-to-r from-transparent via-cyan-500 to-transparent group-hover:w-full transition-all duration-500" />
                </button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Code Block with Pulse Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="relative w-full flex justify-center lg:justify-end"
          >
            {/* Pulse Glow Background */}
            <div className="absolute -inset-1 rounded-3xl bg-linear-to-r from-cyan-500 to-blue-600 opacity-20 blur-2xl animate-pulse" />
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(6, 182, 212, 0.2)",
                  "0 0 40px rgba(6, 182, 212, 0.4)",
                  "0 0 20px rgba(6, 182, 212, 0.2)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 w-full max-w-[550px] rounded-xl"
            >
              <CodeBlock />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
