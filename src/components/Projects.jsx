import Container from "./Container";
import { projects } from "@/utils";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <Container id="projects">
      <div className="mb-14 lg:mb-40">
        <div className="relative -z-10">
          <div className="absolute w-[20rem] lg:w-[40rem] h-[20rem] lg:h-[40rem] radial-gradient-blue blur-3xl opacity-10 rounded-full -top-[20%] -left-[7%]"></div>
        </div>
        <h2 className="text-3xl lg:text-5xl font-orbitron font-semibold neon-text-blue text-center">
          Projects
        </h2>
        <div className="flex flex-wrap justify-center gap-10 mt-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Projects;
