import { Hero } from "@/components/sections/Hero";
import { TechnicalAreas } from "@/components/sections/TechnicalAreas";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <About />
      <TechnicalAreas />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}
