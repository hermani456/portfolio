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
          <p className="text-mocha-subtext1 lg:text-lg font-exo selection:bg-pri/70">
            I&apos;m a{" "}
            <span className="text-mocha-peach text-xl font-semibold">
              web developer
            </span>{" "}
            who enjoys turning ideas into functional, user-friendly applications. In 2021, I completed an intensive 6-month{" "}
            <span className="text-mocha-peach text-xl font-semibold">
              full-stack development
            </span>{" "}
            bootcamp, where I built real projects and developed a solid foundation in both front-end and back-end technologies. 
            I also hold a degree in{" "}
            <span className="text-mocha-peach text-xl font-semibold">
              Programming Analyst
            </span>
            , which gave me a structured understanding of how software works under the hood. 
            Currently, I&apos;m studying{" "}
            <span className="text-mocha-peach text-xl font-semibold">
              Computer Science
            </span>{" "}
            to strengthen that foundation and expand my skills. I like building things that not only work well but are also{" "}
            <span className="text-mocha-peach text-xl font-semibold">
              easy to use and visually clear
            </span>
            . Whether I&apos;m designing an interface or working on the backend logic, I care about making the experience smooth and practical for real users.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default About;
