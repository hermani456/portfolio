"use client"
import About from "@/components/About";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import NavBar from "@/components/NavBar";
import Skills from "@/components/Skills";
import { ReactLenis, useLenis  } from "lenis/react"
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })
  return (
    <ReactLenis root>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      {/* <div className="h-screen"></div> */}
    </ReactLenis>
  );
}
