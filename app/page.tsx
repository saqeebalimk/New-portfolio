import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { AIEngineering } from "@/components/sections/AIEngineering";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <About />
      <AIEngineering />
      <Projects />
      <Contact />
    </div>
  );
}
