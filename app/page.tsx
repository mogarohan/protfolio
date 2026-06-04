import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function Home() {
  return (
    // 'overflow-x-hidden' se side ka extra scroll hat jayega
    <main className="w-full overflow-x-hidden flex flex-col gap-0">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}