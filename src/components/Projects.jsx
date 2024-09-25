import Container from "./Container";

const Projects = () => {
  return (
    <Container id="projects">
      <div className="relative -z-10">
        <div className="absolute w-[20rem] lg:w-[40rem] h-[20rem] lg:h-[40rem] radial-gradient-blue blur-3xl opacity-10 rounded-full -top-[20%] -left-[7%]"></div>
      </div>
      <h2 className="text-3xl lg:text-5xl font-orbitron font-semibold neon-text-blue text-center">
        Projects
      </h2>
      <div className="text-white">TODO</div>
    </Container>
  );
};

export default Projects;
