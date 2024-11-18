import Marquee from "./Marquee";
import Container from "./Container";
import useGsapAnimation from "@/hooks/useGsapAnimation";
import Header from "./Header";

const Skills = () => {
  const { containerRef, titleRef, contentRef } = useGsapAnimation();
  return (
    <div className="mb-14 lg:mb-40 opacity-0" ref={containerRef}>
      <Container>
        <div className="flex justify-center items-center mb-10">
          <div ref={titleRef}>
            <Header>Skills</Header>
          </div>
        </div>
      </Container>
      <div className="max-w-[1920px] mx-auto">
        <Marquee raf={contentRef} />
      </div>
    </div>
  );
};

export default Skills;
