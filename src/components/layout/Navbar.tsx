import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import {
  FaHome,
  FaLaptopCode,
  FaInbox,
  FaBriefcase,
  FaCode,
} from "react-icons/fa";
import ThemeSwitch from "../others/ThemeSwitch";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#banner-section", icon: FaHome, label: "Home" },
    { href: "#about-section", icon: FaInbox, label: "About" },
    { href: "#skills-section", icon: FaCode, label: "Skills" },
    { to: "/projects", icon: FaLaptopCode, label: "Projects", isLink: true },
    { to: "/projects", icon: FaBriefcase, label: "Experience", isLink: true },
    { to: "/about", icon: FaInbox, label: "Contact", isLink: true },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="max-w-[1400px] w-full mx-auto flex justify-between items-center gap-4 md:gap-10 my-3 sticky top-3 z-50 px-4">
      {/* Logo */}
      <div className="shrink-0">
        <h1 className="text-2xl md:text-3xl font-bold title-font">
          <span>A</span>
          <span className="-ml-0.5">R</span>
        </h1>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden lg:flex mx-auto items-center justify-center flex-1">
        <div className="w-fit rounded-full bg-linear-to-r from-cyan-500/70 to-blue-500/70 p-0.5">
          <div className="flex h-full w-full items-center justify-center dark:bg-black/80 light:bg-gray-100/80 rounded-full">
            <div className="px-5 py-2 flex gap-4 xl:gap-8">
              {navLinks.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <Icon className="text-sm" />
                    <span className="hidden xl:inline">{item.label}</span>
                  </>
                );

                if (item.isLink) {
                  return (
                    <Link
                      key={index}
                      to={item.to!}
                      className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                    >
                      {content}
                    </Link>
                  );
                }
                return (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                  >
                    {content}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Theme Switch and Mobile Menu Button */}
      <div className="flex items-center gap-2 md:gap-4">
        <ThemeSwitch />

        {/* Mobile Menu Button */}
        <Button
          variant="outline"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Mobile Menu Panel */}
          <div className="fixed top-0 right-0 h-full w-64 bg-background border-l z-50 lg:hidden transform transition-transform duration-300 ease-in-out shadow-xl">
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-xl font-bold title-font">
                  <span>A</span>
                  <span className="-ml-0.5">R</span>
                </h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Mobile Menu Links */}
              <div className="flex-1 overflow-y-auto p-4">
                <nav className="flex flex-col gap-2">
                  {navLinks.map((item, index) => {
                    const Icon = item.icon;
                    const content = (
                      <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors">
                        <Icon />
                        <span>{item.label}</span>
                      </div>
                    );

                    if (item.isLink) {
                      return (
                        <Link
                          key={index}
                          to={item.to!}
                          onClick={handleNavClick}
                          className="text-foreground"
                        >
                          {content}
                        </Link>
                      );
                    }
                    return (
                      <a
                        key={index}
                        href={item.href}
                        onClick={handleNavClick}
                        className="text-foreground"
                      >
                        {content}
                      </a>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
