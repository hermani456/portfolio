"use client";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/utils";
import Container from "@/components/Container";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "lenis/react";
import Image from "next/image";
import dc from "@/app/img/dclogosm.png";

export default function Component() {
  const lenis = useLenis();
  const ref = useRef(null);
  const iconRef = useRef(null);

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(ref.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (e) => {
          if (e.direction === -1) {
            gsap.to(ref.current, {
              y: 0,
              duration: 0.15,
              ease: "power1.inOut",
            });
          } else {
            gsap.to(ref.current, {
              y: -100,
              duration: 0.15,
              ease: "power1.inOut",
            });
          }
        },
      },
    });

    gsap.to(ref.current, {
      opacity: 1,
    });

    gsap.from(ref.current, {
      y: -100,
      duration: 1,
      delay: 0.5,
      ease: "back.inOut",
    });

    gsap.to(iconRef.current, {
      opacity: 1,
    });

    gsap.from(iconRef.current, {
      y: -60,
      duration: 1,
      delay: 0.5,
      ease: "back.inOut",
    });
  }, []);

  return (
    <Container>
      <header className="flex h-20 w-full shrink-0 items-center relative z-10">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              className="lg:hidden bg-mocha-surface0 text-mocha-mauve opacity-0"
              ref={iconRef}
            >
              <MenuIcon className="h-6 w-6 text-mocha-mauve" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="bg-mocha-base/95 backdrop-blur-md border-mocha-surface0"
          >
            <SheetTitle className="text-mocha-text text-xl font-orbitron text-left mb-4">
              Navigation
            </SheetTitle>
            <SheetDescription className="hidden">
              Mobile navigation menu
            </SheetDescription>
            <div className="grid gap-4 py-6">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.id}>
                  <div className="flex items-center gap-4 px-4 py-3 rounded-lg">
                    <link.icon className="h-5 w-5 fill-mocha-sky" />
                    <button
                      className="flex w-full items-center text-lg text-mocha-text font-exo text-left"
                      onClick={() => lenis?.scrollTo(link.path)}
                    >
                      {link.name}
                    </button>
                  </div>
                </SheetClose>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        <nav
          className="hidden lg:flex items-center justify-center h-16 w-fit fixed top-5 left-1/2 transform -translate-x-1/2 px-10 rounded-full gap-5 bg-mocha-mantle/80 backdrop-blur-md border border-mocha-surface0 shadow-lg opacity-0"
          ref={ref}
        >
          <div className="flex justify-between gap-10 w-full font-orbitron items-center">
            <div className="flex gap-5">
              {navLinks.slice(0, 2).map((link) => (
                <button
                  className="text-mocha-text font-opens flex justify-center items-center hover:text-mocha-sky transition-all text-sm font-medium"
                  key={link.id}
                  onClick={() => lenis?.scrollTo(link.path)}
                >
                  {link.name}
                </button>
              ))}
            </div>
            {/* <DoggoFace className="size-16" /> */}
            <Image
              src={dc}
              alt="dc"
              width={40}
              height={40}
              className="pointer-events-none opacity-80 hover:opacity-100 transition-opacity"
            />
            <div className="flex gap-5">
              {navLinks.slice(2).map((link) => (
                <button
                  className="text-mocha-text font-opens flex justify-center items-center hover:text-mocha-sky transition-all text-sm font-medium"
                  key={link.id}
                  onClick={() => lenis?.scrollTo(link.path)}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </Container>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 110.68 121.77"
      width="40"
      height="40"
      className="drop-shadow-sm"
    >
      <defs>
        <style>
          {`
            .cls-1 { fill: #a0470d; }
            .cls-1, .cls-3, .cls-4, .cls-6, .cls-7 { fill-rule: evenodd; }
            .cls-3 { fill: #f7d7b1; }
            .cls-4 { fill: #39474a; }
            .cls-6 { fill: #bf9e83; }
            .cls-7 { fill: #3f3d31; }
          `}
        </style>
      </defs>
      <path
        className="cls-1"
        d="M37.45,4c-16.74,4.38-14.14,28.52-17.6,42.3C18.76,50.66,15.46,61.22,10,61,4,60.74,4.73,42.7,4.46,38,4.28,34.83,3.8,28.85,0,27.81,7.15,2.49,19.52-5.83,37.45,4Z"
        id="path1"
        style={{
          stroke: "var(--mocha-pink)",
          strokeOpacity: 0.8,
          fill: "var(--mocha-pink)",
        }}
      />
      <path
        className="cls-3"
        d="M107.43,57C97.55,44.53,105.65,9.38,85.49,4a13.72,13.72,0,0,1-4.28.79C75.53,5,73.49,2.05,61.58,2,48.86,1.87,48.71,4.89,42.31,4.79A17,17,0,0,1,37.45,4C16.64,11,26.91,37.73,15.64,57c2.57,14.27,9.34,23.26,19,28.63A10.5,10.5,0,0,0,38,89.77c-.57,0-2.06,15.89,23.47,16.45,12.87.28,21.51-3.82,23.72-16.45,0,0,2.87-3.18,3.25-4.15,9.65-5.37,16.42-14.36,19-28.63Z"
        id="path3"
        style={{ stroke: "var(--mocha-sky)", strokeOpacity: 1, fill: "none" }}
      />
      <path
        className="cls-1"
        d="M62.09,61.53c4.15-5.12,12.59-3.79,15.11-2.92a21.43,21.43,0,0,1,7.09,4.42c7.63,7.1,5.26,19.28.18,24.36-9.15,9.15-20.94.89-22.38-2.92C60,82,60.19,63.88,62.09,61.53Z"
        id="path4"
        style={{
          stroke: "var(--mocha-pink)",
          strokeOpacity: 1,
          fill: "var(--mocha-pink)",
        }}
      />
      <path
        className="cls-4"
        d="M37.64,39.57a6,6,0,1,1-6,6,6,6,0,0,1,6-6Z"
        id="path5"
        style={{
          strokeWidth: 1.2,
          stroke: "var(--mocha-sky)",
          strokeOpacity: 1,
          fill: "none",
        }}
      />
      <circle
        cx="37.64"
        cy="42.57"
        r="3"
        id="path6"
        style={{ fill: "var(--mocha-pink)", fillOpacity: 1 }}
      />
      <path
        className="cls-4"
        d="M85.3,39.57a6,6,0,1,0,6,6,6,6,0,0,0-6-6Z"
        id="path7"
        style={{
          strokeWidth: 1.2,
          stroke: "var(--mocha-sky)",
          strokeOpacity: 1,
          fill: "none",
        }}
      />
      <circle
        cx="85.3"
        cy="42.57"
        r="3"
        id="path8"
        style={{ fill: "var(--mocha-pink)", fillOpacity: 1 }}
      />
      <path
        className="cls-6"
        d="M51,69.57s3.83,6.17,11.33,6.17,10.17-5.5,10.17-5.5"
        id="path9"
        style={{
          stroke: "var(--mocha-pink)",
          strokeOpacity: 1,
          fill: "var(--mocha-pink)",
        }}
      />
      <path
        className="cls-7"
        d="M61.34,103.52c-1.39-4.83,5.6-14.9,5.6-14.9-1.93-9.11-10.74-6.44-11,2a26.23,26.23,0,0,0,.6,5.32c.74,3.31,2.07,7.09,4.8,7.57Z"
        id="path10"
        style={{
          stroke: "var(--mocha-sky)",
          strokeOpacity: 1,
          fill: "var(--mocha-sky)",
        }}
      />
    </svg>
  );
};
