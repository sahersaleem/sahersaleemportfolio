
import Hero from "./components/Hero";
import About from "./components/About";
import { ShootingStars } from "../app/components/ui/shooting-stars";
import { StarsBackground } from "../app/components/ui/stars-background";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/ui/Footer";
export default function Home() {
  return (
    <main className="h-screen w-full bg-[#21083e]">
      <ShootingStars />
      <StarsBackground/>
    
     <Hero/>
     <About/>
     <Skills/>
     <Projects/>
     <Contact/>
     <Footer/>
    
    </main>
  );
}