import Head from "next/head";
import Container from "./Container";
import useGsapAnimations from "@/hooks/useGsapAnimation";
import Header from "./Header";

const About = () => {
  const { containerRef, titleRef, contentRef } = useGsapAnimations();

  return (
    <Container>
      <div
        id="about"
        ref={containerRef}
        className="flex flex-col lg:flex-row justify-around items-center mb-14 lg:mb-40 opacity-0"
      >
        <div ref={titleRef}>
          <Header>About Me</Header>
        </div>
        <div className="mt-10 lg:mt-0" ref={contentRef}>
          <p className="text-white lg:text-lg font-exo">
            I&apos;m a passionate{" "}
            <span className="text-sec text-xl font-semibold">
              web developer
            </span>{" "}
            with a strong focus on both{" "}
            <span className="text-sec text-xl font-semibold">front-end</span>{" "}
            and full-stack development. In 2021, I completed a 6-month bootcamp
            for full-stack development, where I honed my skills in building
            dynamic and responsive applications. Currently, I am studying
            Computer Science, further deepening my understanding of software
            development. I enjoy creating beautiful and intuitive interfaces, as
            well as building functional,{" "}
            <span className="text-sec text-xl font-semibold">
              full-stack applications
            </span>{" "}
            that solve real-world problems. With a keen eye for design and a
            love for efficient code, I strive to create seamless user
            experiences.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default About;
