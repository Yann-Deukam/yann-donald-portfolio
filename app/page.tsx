import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="flex flex-col px-4 items-center">
      <Hero />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
    </div>
  );
}
