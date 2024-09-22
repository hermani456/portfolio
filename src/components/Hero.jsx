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
        <div className="flex flex-col lg:flex-row justify-around items-center h-[calc(100vh-5rem)] relative mt-5">
          <div>
            <h1 className="text-white text-4xl lg:text-6xl font-orbitron font-semibold">
              <span className="neon-text-pink" ref={pinkTextRef}>
                Hi, I'm
              </span>{" "}
              <br />{" "}
              <span className="neon-text-blue" ref={blueTextRef}>
                Diego Campuzano
              </span>
            </h1>
            <p className="text-white mt-5 font-exo">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              lacinia, dolor in lacinia dapibus, metus purus fermentum nisi, sit
              amet fermentum orci odio id purus.
            </p>
            <div className="flex mt-5 gap-5 bg-acc/20 w-fit rounded-xl py-4 px-3">
              {socialLinks.map((item) => (
                <SocialIcon
                  key={item.id}
                  href={item.path}
                  IconSocial={item.icon}
                />
              ))}
            </div>
            <div className="my-5 relative">
              <button className="bg-sec px-3 py-2 rounded overflow-hidden">
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
              className="pointer-events-none mb-5"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero;

const Svg = ({ props }) => {
  return (
    <svg {...props} version="1.1" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="RadialGradient1">
          <stop offset="0%" stop-color="#00ECFF" />
          <stop offset="100%" stop-color="transparent" />
        </radialGradient>
      </defs>

      <rect
        x="0"
        y="0"
        rx="2"
        ry="2"
        width="150"
        height="150"
        fill="url(#RadialGradient1)"
      />
    </svg>
  );
};
