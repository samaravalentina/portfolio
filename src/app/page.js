import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Contact />
    <Technologies />
    </>
  );
}