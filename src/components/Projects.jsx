"use client";

import { useState, useRef, useEffect } from "react";
import Container from "./Container";
import { projects } from "@/utils";
import ProjectCard from "./ProjectCard";
import Header from "./Header";
import useRevealOnScroll from "@/hooks/useRevealOnScroll";

const categories = [
  { name: "All", value: "all" },
  { name: "Full Stack", value: "fullstack" },
  { name: "Front End", value: "frontend" },
  { name: "UI Implementations", value: "ui" },
];

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [hasEntered, setHasEntered] = useState(false);
  const { titleRef } = useRevealOnScroll();
  const gridRef = useRef(null);

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.category === filter;
  });

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <Container id="projects">
      <div className="mb-14 lg:mb-40">
        <div ref={titleRef} className="text-center mb-10 reveal">
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
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-400 ease-out border font-exo cursor-pointer ${
                filter === cat.value
                  ? "bg-mocha-mauve text-mocha-base border-mocha-mauve shadow-lg shadow-mocha-mauve/25 scale-105"
                  : "bg-mocha-surface0 text-mocha-subtext0 border-mocha-surface1 hover:border-mocha-overlay0 hover:text-mocha-text hover:bg-mocha-surface1/50"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[300px] ${
            !hasEntered ? "opacity-0" : ""
          }`}
        >
          {filteredProjects.map((project, index) => (
            <div
              key={`${filter}-${project.id}`}
              className={hasEntered ? "card-enter" : ""}
              style={
                hasEntered
                  ? { animationDelay: `${Math.min(index * 75, 450)}ms` }
                  : undefined
              }
            >
              <ProjectCard {...project} />
            </div>
          ))}

          {filteredProjects.length === 0 && (
            <div className="col-span-full text-center py-20">
              <p className="text-mocha-subtext0 text-lg font-exo">
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
