"use client";
import Container from "./Container";
import { projects } from "@/utils";
import ProjectCard from "./ProjectCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

const Projects = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef(null);
  const projectsRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(() => {
    gsap.to(containerRef.current, {
      opacity: 1,
    });

    gsap.from(projectsRef.current.children, {
      scrollTrigger: {
        trigger: projectsRef.current,
        start: "top 80%",
        // end: "top 50%",  
        // scrub: true,
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: {
        amount: 0.5,
      },
      ease: "back.inOut",
    });

    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
    });
  }, []);
  return (
    <Container id="projects">
      <div className="mb-14 lg:mb-40 opacity-0" ref={containerRef}>
        <div className="relative -z-10">
          <div className="absolute w-[20rem] lg:w-[40rem] h-[20rem] lg:h-[40rem] radial-gradient-blue blur-3xl opacity-10 rounded-full -top-[20%] -left-[7%]"></div>
        </div>
        <h2 className="text-3xl lg:text-5xl font-orbitron font-semibold neon-text-blue text-center" ref={titleRef}>
          Projects
        </h2>
        <div
          className="flex flex-wrap justify-center gap-10 mt-10"
          ref={projectsRef}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Projects;
