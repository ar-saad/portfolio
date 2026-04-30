import Banner from "./Banner";
import About from "./About.tsx";
import Skills from "./Skills.tsx";
import Projects from "./Projects.tsx";
import Experience from "./Experience.tsx";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Experience />
    </div>
  );
};

export default Home;
