import { Link } from "react-router-dom";
import {
  FaHome,
  FaCode,
  FaLaptopCode,
  FaInbox,
  FaBriefcase,
} from "react-icons/fa";
import ThemeSwitch from "../others/ThemeSwitch";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="flex justify-between gap-10 my-3">
      {/* Logo */}
      <div>
        <h1 className="text-3xl font-bold title-font">
          <span>A</span>
          <span className="-ml-0.5">R</span>
        </h1>
      </div>
      {/* Nav Links */}
      <div className="mx-auto flex items-center justify-center">
        <div className="w-full rounded-full bg-gradient-to-r from-cyan-500/70 to-blue-500/70 p-0.5">
          <div className="flex h-full w-full items-center justify-center bg-black/80 rounded-full">
            <h1 className="px-5 py-2 flex gap-8">
              <Link to="/home" className="flex items-center gap-2">
                <FaHome /> Home
              </Link>
              <Link to="/skills" className="flex items-center gap-2">
                <FaCode /> Skills
              </Link>
              <Link to="/projects" className="flex items-center gap-2">
                <FaLaptopCode /> Projects
              </Link>
              <Link to="/projects" className="flex items-center gap-2">
                <FaBriefcase /> Experience
              </Link>
              <Link to="/about" className="flex items-center gap-2">
                <FaInbox /> Contact
              </Link>
            </h1>
          </div>
        </div>
      </div>
      {/* Search bar */}
      <div className="flex justify-center items-center gap-4">
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Navbar;
