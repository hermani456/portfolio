"use client";
import Container from "./Container";
import Image from "next/image";
import doggy from "@/app/img/doggy_mocha_transparent.webp";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { socialLinks } from "@/utils";
import SocialIcon from "./SocialIcon";
import Terminal from "./Terminal";
import { useLenis } from "lenis/react";

const Hero = () => {
  const lenis = useLenis();
  gsap.registerPlugin(useGSAP);
  const blueTextRef = useRef();
  const pinkTextRef = useRef();
  const titleRef = useRef();
  const imgRef = useRef();

  useGSAP(() => {
    gsap.to(titleRef.current, {
      opacity: 1,
    });

    gsap.from(titleRef.current.children, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      stagger: {
        amount: 0.3,
      },
      ease: "power2.out",
    });

    gsap.to(imgRef.current, {
      opacity: 1,
    });

    gsap.from(imgRef.current.children, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      ease: "power2.out",
    });
  }, []);
  return (
    <>
      <div className="-z-10">
        <div className="absolute w-[20rem] lg:w-160 h-80 lg:h-160 radial-gradient rounded-full -top-[20%] -left-[7%] opacity-20"></div>
      </div>
      <Container id="home">
        <div className="flex flex-col lg:flex-row justify-around items-center min-h-[calc(100dvh-5rem)] relative ">
          <div ref={titleRef} className="opacity-0">
            <Terminal />
            <h1 className="text-mocha-text text-4xl lg:text-6xl font-orbitron font-semibold mt-8 leading-tight">
              <span className="text-mocha-lavender" ref={pinkTextRef}>
                Hi, I&apos;m{" "}
              </span>{" "}
              <br />{" "}
              <span className="text-mocha-green" ref={blueTextRef}>
                Diego Campuzano
              </span>
            </h1>
            <p className="text-mocha-subtext0 mt-5 font-exo text-lg leading-relaxed max-w-xl">
              A web developer who enjoys building interfaces that feel natural
              to use and applications that work reliably behind the scenes. I
              like taking an idea and figuring out how to make it real—both
              visually and technically.
            </p>
            <div className="flex mt-8 gap-5 w-fit">
              {socialLinks.map((item) => (
                <SocialIcon
                  key={item.id}
                  name={item.name}
                  href={item.path}
                  IconSocial={item.icon}
                />
              ))}
            </div>
            <div className="my-8">
              <button
                className="btn font-orbitron text-mocha-text hover:text-mocha-base"
                onClick={() => lenis?.scrollTo("#contact")}
              >
                Let&apos;s Talk
              </button>
            </div>
          </div>
          <div ref={imgRef} className="opacity-0">
            <Image
              src={doggy}
              alt="An image of a guy coding with his dog beside him"
              width={500}
              height={500}
              className="pointer-events-none mb-10 drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero;
