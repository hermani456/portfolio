"use client";
import Container from "./Container";
import Image from "next/image";
import img from "@/app/img/ardroid.png";
import doggy from "@/app/img/doggy.webp";
import doggo from "@/app/img/doggo.webp";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { socialLinks } from "@/utils";
import SocialIcon from "./SocialIcon";
import { SiManjaro } from "react-icons/si";
import { FaFolderOpen, FaGithubAlt } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa6";

const Hero = () => {
  gsap.registerPlugin(useGSAP);
  const blueTextRef = useRef();
  const pinkTextRef = useRef();

  useGSAP(() => {
    const createNeonEffect = (element) => {
      gsap.to(element, {
        textShadow:
          "0 0 5px #f53fa1, 0 0 10px #f53fa1, 0 0 20px #f53fa1, 0 0 40px #f53fa1, 0 0 80px #f53fa1",
        opacity: 1,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        repeatDelay: 0.5,
      });
    };

    if (blueTextRef.current) {
      createNeonEffect(blueTextRef.current);
    }

    if (pinkTextRef.current) {
      createNeonEffect(pinkTextRef.current);
    }
  }, []);
  return (
    <>
      <div className="-z-10">
        <div className="absolute w-[20rem] lg:w-[40rem] h-[20rem] lg:h-[40rem] radial-gradient rounded-full -top-[20%] -left-[7%]"></div>
        <div className="absolute w-[8rem] h-screen bg-acc/20 blur-xl top-0 right-[10%]"></div>
        <div className="absolute w-[4rem] h-screen bg-acc/20 blur-xl top-0 right-[30%]"></div>
        <div className="absolute w-[4rem] h-screen bg-acc/20 blur-xl top-0 right-[40%]"></div>
        <div></div>
      </div>
      <Container>
        <div className="flex flex-col lg:flex-row justify-around items-center min-h-[calc(100dvh-5rem)] relative mt-10">
          <div>
            <div className="lg:flex font-exo hidden">
              <div className=" flex h-7">
                <div className="text-[#1f5668] bg-white w-fit px-5 flex justify-center items-center">
                  <SiManjaro size={11} />
                </div>
                <div className="text-white bg-[#1f5668] px-[1.5rem] flex justify-center items-center path-middle">
                  <FaFolderOpen size={13} />
                  <p className="ml-2">~/Projects/portfolio</p>
                </div>
                <div className="text-white bg-[#612248] px-[1.5rem] flex justify-center items-center path gap-2">
                  <FaGithubAlt size={13} />
                  <FaCodeBranch size={13} />
                  <p>master</p>
                </div>
                {/* blinking cursor */}
                <div className="cursor ml-4"></div>
              </div>
            </div>
            <h1 className="text-white text-4xl lg:text-6xl font-orbitron font-semibold mt-5">
              <span className="neon-text-pink flicker" ref={pinkTextRef}>
                Hi, I&apos;m
              </span>{" "}
              <br />{" "}
              <span className="neon-text-blue" ref={blueTextRef}>
                Diego Campuzano
              </span>
            </h1>
            <p className="text-white mt-5 font-exo">
              I&apos;m a web developer passionate about designing sleek,
              intuitive interfaces and building robust, full-stack applications.
              Let&apos;s turn ideas into reality.
            </p>
            <div className="flex mt-5 gap-5 bg-acc/30 w-fit rounded-xl py-2 lg:py-4 px-3">
              {socialLinks.map((item) => (
                <SocialIcon
                  key={item.id}
                  href={item.path}
                  IconSocial={item.icon}
                />
              ))}
            </div>
            <div className="my-5 relative">
              <button className="btn font-orbitron">
                Contact Me
                <div className="absolute w-20 h-20 bg-sec/30 blur-3xl pointer-events-none"></div>
              </button>
            </div>
          </div>
          <div>
            <Image
              src={doggy}
              alt="perrujo"
              width={500}
              height={500}
              className="pointer-events-none mb-10"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero;
