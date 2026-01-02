"use client";

import { useState, useRef } from "react";
import Container from "./Container";
import { projects } from "@/utils";
import ProjectCard from "./ProjectCard";
import Header from "./Header";

// GSAP Imports
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  const categories = [
    { name: "All", value: "all" },
    { name: "Full Stack", value: "fullstack" },
    { name: "Front End", value: "frontend" },
    { name: "UI Implementations", value: "ui" },
  ];

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.category === filter;
  });

  const containerRef = useRef(null);
  const projectsRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(() => {
    gsap.to(containerRef.current, { opacity: 1 });

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

  useGSAP(() => {
    gsap.fromTo(
      projectsRef.current.children,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
      }
    );
  }, [filter]);

  return (
    <Container id="projects">
      <div className="mb-14 lg:mb-40 opacity-0" ref={containerRef}>
        <div className="relative -z-10">
          <div className="absolute w-[20rem] lg:w-[40rem] h-[20rem] lg:h-[40rem] radial-gradient-blue blur-3xl opacity-10 rounded-full -top-[20%] -left-[7%]"></div>
        </div>

        <div ref={titleRef} className="text-center mb-10">
          <Header>Projects</Header>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border font-orbitron ${
                filter === cat.value
                  ? "btno"
                  : "bg-transparent text-gray-400 border-gray-700 hover:border-gray-500 hover:text-white" // Inactive Style
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div
          className="flex flex-wrap justify-around gap-10 min-h-[500px]"
          ref={projectsRef}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}

          {filteredProjects.length === 0 && (
            <p className="text-gray-500 mt-10">
              No projects found in this category.
            </p>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Projects;
