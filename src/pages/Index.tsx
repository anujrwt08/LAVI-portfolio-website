import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import SkillsChart from "@/components/SkillsChart";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <div className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <SkillsChart />
        </div>
      </div>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
