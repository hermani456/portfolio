import Marquee from "./Marquee";
import Container from "./Container";
import useGsapAnimation from "@/hooks/useGsapAnimation";

const Skills = () => {
  const { containerRef, titleRef, contentRef } = useGsapAnimation();
  return (
    <div className="mb-14 lg:mb-40 opacity-0" ref={containerRef}>
      <Container>
        <div className="flex justify-center items-center mb-10">
          <h2 className="text-3xl lg:text-5xl font-orbitron font-semibold neon-text-blue" ref={titleRef}>
            Skills
          </h2>
        </div>
      </Container>
      <Marquee raf={contentRef}/>
    </div>
  );
};

export default Skills;
