"use client";

import { useState, useRef, useEffect, useLayoutEffect, useCallback } from "react";
import Container from "./Container";
import { projects } from "@/utils";
import ProjectCard from "./ProjectCard";
import Header from "./Header";
import gsap from "gsap";
import useRevealOnScroll from "@/hooks/useRevealOnScroll";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  // True until the grid has entered the viewport for the first time.
  // Filter animations are suppressed until then.
  const hasRevealedRef = useRef(false);

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

  const { containerRef, titleRef } = useRevealOnScroll();
  const projectsRef = useRef(null);

  // Shared stagger animation for both initial reveal and filter changes.
  const animateCards = useCallback(() => {
    const grid = projectsRef.current;
    if (!grid || !grid.children.length) return;

    gsap.killTweensOf(grid.children);
    gsap.fromTo(
      grid.children,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.45,
        stagger: 0.08,
        ease: "power2.out",
        clearProps: "opacity,transform",
      }
    );
  }, []);

  // Pre-hide cards before the first browser paint so the scroll-in animation
  // has a clean starting state. useLayoutEffect runs before paint (unlike useEffect),
  // eliminating the flash-then-snap that occurs when cards are briefly visible
  // before the IntersectionObserver fires and GSAP snaps them to opacity:0.
  useLayoutEffect(() => {
    const grid = projectsRef.current;
    if (!grid || !grid.children.length) return;
    gsap.set(grid.children, { opacity: 0, y: 20 });
  }, []);

  // Initial scroll-in: fire the stagger animation once when the grid enters
  // the viewport.
  useEffect(() => {
    const grid = projectsRef.current;
    if (!grid) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          hasRevealedRef.current = true;
          animateCards();
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(grid);
    return () => observer.disconnect();
  }, [animateCards]);

  // Filter animation — only runs after the initial viewport reveal has fired.
  useEffect(() => {
    if (!hasRevealedRef.current) return;
    animateCards();
  }, [filter, animateCards]);

  return (
    <Container id="projects">
      <div className="mb-14 lg:mb-40 reveal" ref={containerRef}>

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
