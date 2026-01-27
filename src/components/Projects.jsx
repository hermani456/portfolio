"use client";

import { useState, useRef } from "react";
import Container from "./Container";
import { projects } from "@/utils";
import ProjectCard from "./ProjectCard";
import Header from "./Header";
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
        
        <div ref={titleRef} className="text-center mb-10">
          <Header>Projects</Header>
          <p className="text-mocha-subtext0 mt-4 max-w-2xl mx-auto font-exo">
            A selection of my recent work, featuring full-stack applications and complex UI implementations.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border font-exo ${
                filter === cat.value
                  ? "bg-mocha-mauve text-mocha-base border-mocha-mauve shadow-lg shadow-mocha-mauve/20"
                  : "bg-mocha-surface0 text-mocha-subtext0 border-mocha-surface1 hover:border-mocha-overlay0 hover:text-mocha-text"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          ref={projectsRef}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}

          {filteredProjects.length === 0 && (
            <div className="col-span-full text-center py-20">
              <p className="text-mocha-subtext0 text-lg">
                No projects found in this category yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Projects;
