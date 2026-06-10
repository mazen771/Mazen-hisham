import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-bg">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Portfolio;