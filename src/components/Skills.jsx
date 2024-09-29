"use client"
import Marquee from "./Marquee";
import Container from "./Container";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Skills = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const skillsRef = useRef(null);

  useGSAP(() => {
    gsap.to(containerRef.current, {
      opacity: 1,
    });

    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "back.inOut",
    });

    gsap.from(skillsRef.current, {
      scrollTrigger: {
        trigger: skillsRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: {
        amount: 0.5,
      },
      ease: "back.inOut",
    });
  }, []);

  return (
    <div className="mb-14 lg:mb-40 opacity-0" ref={containerRef}>
      <Container>
        <div className="flex justify-center items-center mb-10">
          <h2 className="text-3xl lg:text-5xl font-orbitron font-semibold neon-text-blue" ref={titleRef}>
            Skills
          </h2>
        </div>
      </Container>
      <Marquee raf={skillsRef}/>
    </div>
  );
};

export default Skills;
