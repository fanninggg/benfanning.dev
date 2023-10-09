import { Navbar } from "../shared/Navbar";
import { About } from "./About";
import { Footer } from "./Footer";
import { Landing } from "./Landing";
import { Projects } from "./Projects";
import { Testimonials } from "./Testimonials";

export const Resume = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <About />
      <Projects />
      <Testimonials />
      <Footer />
    </div>
  );
}