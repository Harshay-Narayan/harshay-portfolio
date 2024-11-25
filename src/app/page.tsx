import SectionDivider from "./components/SectionDivider";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 pt-24">
      <Toaster />
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
