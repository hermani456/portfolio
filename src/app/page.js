"use client"
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import NavBar from "@/components/NavBar";
import { ReactLenis, useLenis  } from "lenis/react"

export default function Home() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })
  return (
    <ReactLenis root>
      <NavBar />
      <Hero />
      <Marquee />
      <div className="h-screen"></div>
    </ReactLenis>
  );
}
