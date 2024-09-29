"use client";
import Container from "./Container";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  const aboutRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  useGSAP(() => {
    gsap.to(aboutRef.current, {
      opacity: 1,
    });

    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
    });

    gsap.from(textRef.current, {
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
    })
  }, []);
  return (
    <Container>
      <div
        id="about"
        ref={aboutRef}
        className="flex flex-col lg:flex-row justify-around items-center mb-14 lg:mb-40 opacity-0"
      >
        <div ref={titleRef}>
          <h2 className="text-white text-3xl lg:text-5xl font-orbitron font-semibold neon-text-blue">
            About Me
          </h2>
        </div>
        <div className="mt-10 lg:mt-0" ref={textRef}>
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
