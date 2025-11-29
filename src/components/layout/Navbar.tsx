import { Link } from "react-router-dom";
import { FaSearchengin } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-between gap-10 my-2">
      {/* Logo */}
      <div>
        <h1 className="text-3xl font-bold title-font">
          <span>A</span>
          <span className="-ml-0.5">R</span>
        </h1>
      </div>
      {/* Nav Links */}
      <div className="flex gap-3">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="projects">Projects</Link>
        <Link to="blogs">Blogs</Link>
      </div>
      {/* Search bar */}
      <div>
        <FaSearchengin className="btn btn-ghost" />
      </div>
    </div>
  );
};

export default Navbar;
