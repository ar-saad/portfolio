import { Mail, Github, Twitter, Facebook, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden mt-20 border-t border-white/10">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_0%,rgba(34,197,94,0.05),transparent_40%)]" />

      <div className="max-w-[1200px] w-full mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Bio */}
          <div className="md:col-span-2">
            <div className="shrink-0 mb-6">
              <h1 className="text-3xl font-bold title-font">
                <span>A</span>
                <span className="-ml-0.5">R</span>
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-sm leading-relaxed">
              Full-stack Developer building scalable, user‑focused web applications 
              with a strong emphasis on clean design and maintainable architecture.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-gray-600 dark:text-gray-400 font-medium">
              <li>
                <a href="#banner" className="hover:text-cyan-500 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-500 transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-500 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-500 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-cyan-500 transition-colors">Experience</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-500 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Connect</h3>
            <div className="flex flex-col gap-4">
              <a 
                href="mailto:arsaad.dev@gmail.com" 
                className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-green-500 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-green-500/10 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-medium text-sm md:text-base">arsaad.dev@gmail.com</span>
              </a>
              
              <div className="flex gap-4 mt-2">
                <a 
                  href="https://github.com/ar-saad" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://x.com/arsaad_dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10 transition-all"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.facebook.com/arsaad00/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-[#1877F2] hover:bg-[#1877F2]/10 transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            © {currentYear} Abdur Rahman Saad. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <p className="text-gray-500 dark:text-gray-500 text-sm flex items-center gap-1.5">
              Made with <span className="text-red-500 animate-pulse text-lg">♥</span> in Bangladesh
            </p>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={scrollToTop}
              className="rounded-full w-10 h-10 hover:bg-cyan-500 hover:text-white transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
