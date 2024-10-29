import About from "@/components/about";
import Divider from "@/components/divider";
import Experience from "@/components/experience";
import Introduce from "@/components/introduce";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Introduce />
      <Divider />
      <About />
      <Projects />
      <Skills />
      <Experience />
    </main>
  );
}
