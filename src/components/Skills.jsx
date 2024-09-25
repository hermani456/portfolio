import Marquee from "./Marquee";
import Container from "./Container";

const Skills = () => {
  return (
    <div className="mb-14 lg:mb-40">
      <Container>
        <div className="flex justify-center items-center mb-10">
          <h2 className="text-3xl lg:text-5xl font-orbitron font-semibold neon-text-blue">
            Skills
          </h2>
        </div>
      </Container>
      <Marquee />
    </div>
  );
};

export default Skills;
