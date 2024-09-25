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
import Link from "next/link";
import { navLinks } from "@/utils";
import Container from "@/components/Container";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "lenis/react";

export default function Component() {
  const lenis = useLenis()
  const ref = useRef(null);

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
            gsap.to(ref.current, { y: 0, duration: 0.15, ease: "power1.inOut" });
          } else {
            gsap.to(ref.current, { y: -100, duration: 0.15, ease: "power1.inOut"});
          }
        },
      },
    });
  }, []);

  return (
    <Container>
      <header className="flex h-20 w-full shrink-0 items-center relative z-10">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="" size="icon" className="lg:hidden bg-acc/40">
              <MenuIcon className="h-6 w-6 text-pri" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-white/10 backdrop-blur-md border-sec/30">
            <SheetTitle className="text-white text-xl font-orbitron">
              Navigation
            </SheetTitle>
            <SheetDescription className="hidden">hola</SheetDescription>
            <div className="grid gap-2 py-6">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.id}>
                  <div className="flex items-center gap-2 px-2 rounded hover:text-red-500">
                    <link.icon className="h-6 w-6 fill-sec" />
                    <Link
                      href={link.path}
                      className="flex w-full items-center py-2 text-lg text-white font-exo"
                      prefetch={false}
                      onClick={() => lenis?.scrollTo(link.path)}
                    >
                      {link.name}
                    </Link>
                  </div>
                </SheetClose>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        <nav className="hidden lg:flex items-center justify-center w-fit fixed top-5 left-1/2 transform -translate-x-1/2 px-10 rounded-full gap-5 bg-white/10 backdrop-blur-md" ref={ref}>
          <div className="flex justify-between gap-10 w-full font-orbitron">
            <div className="flex gap-5">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  href={link.path}
                  className="text-white font-opens flex justify-center items-center hover:text-sec text-shadow transition-all"
                  key={link.id}
                  prefetch={false}
                  onClick={() => lenis?.scrollTo(link.path)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <DoggoFace className="size-16" />
            <div className="flex gap-5">
              {navLinks.slice(2).map((link) => (
                <Link
                href={link.path}
                className="text-white font-opens flex justify-center items-center hover:text-sec text-shadow transition-all"
                key={link.id}
                prefetch={false}
                onClick={() => lenis?.scrollTo(link.path)}
              >
                {link.name}
              </Link>
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

function DoggoIcon(props) {
  return (
    <svg
      {...props}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 122.88 107.32"
    >
      <defs>
        <style>
          {`
            .cls-1 { fill: #a0470d; }
            .cls-1, .cls-3, .cls-4, .cls-5, .cls-6, .cls-7 { fill-rule: evenodd; }
            .cls-2 { fill: #edc797; }
            .cls-3 { fill: #f7d7b1; }
            .cls-4 { fill: #39474a; }
            .cls-5 { fill: #fff; }
            .cls-6 { fill: #bf9e83; }
            .cls-7 { fill: #3f3d31; }
          `}
        </style>
      </defs>
      <title>dog-face-color</title>
      <path
        className="cls-1"
        d="M37.45,4c-16.74,4.38-14.14,28.52-17.6,42.3C18.76,50.66,15.46,61.22,10,61,4,60.74,4.73,42.7,4.46,38,4.28,34.83,3.8,28.85,0,27.81,7.15,2.49,19.52-5.83,37.45,4Z"
      />
      <path
        className="cls-2"
        d="M102.37,34.73c1.12,8.6,2.2,16.9,5.91,21.58a1.15,1.15,0,0,1,.22.87,46,46,0,0,1-7,18.08A36.25,36.25,0,0,1,89.26,86.4a31.3,31.3,0,0,1-2.88,3.65s0,0,0,0L86.27,90h0c-1.16,6.64-4,11.06-8.35,13.8s-9.82,3.69-16.46,3.55c-15.66-.35-21.59-6.39-23.7-11.26a14,14,0,0,1-1-3.36,10.12,10.12,0,0,1-.07-2.4l0-.16a14.54,14.54,0,0,1-1.61-1.63,9.3,9.3,0,0,1-1.36-2.12A36.37,36.37,0,0,1,21.58,75.26a45.87,45.87,0,0,1-7-18.05,1.1,1.1,0,0,1,.12-.77c4.41-7.54,5.45-16.37,6.42-24.64C22.63,19,24,7.41,37,3a1.13,1.13,0,0,1,.73,0A16.07,16.07,0,0,0,40,3.52a18.28,18.28,0,0,0,2.3.19,16,16,0,0,0,5.77-1C50.77,1.85,54,.82,61.59.88A45.84,45.84,0,0,1,75.22,2.77a18.71,18.71,0,0,0,6,1,13.16,13.16,0,0,0,2-.2,13.44,13.44,0,0,0,2-.52,1.12,1.12,0,0,1,.68,0c12.91,3.42,14.8,18,16.6,31.74Zm-16.09,55V90l.08.07c0-.12-.07-.54-.07-.25Z"
      />
      <path
        className="cls-3"
        d="M107.43,57C97.55,44.53,105.65,9.38,85.49,4a13.72,13.72,0,0,1-4.28.79C75.53,5,73.49,2.05,61.58,2,48.86,1.87,48.71,4.89,42.31,4.79A17,17,0,0,1,37.45,4C16.64,11,26.91,37.73,15.64,57c2.57,14.27,9.34,23.26,19,28.63A10.5,10.5,0,0,0,38,89.77c-.57,0-2.06,15.89,23.47,16.45,12.87.28,21.51-3.82,23.72-16.45,0,0,2.87-3.18,3.25-4.15,9.65-5.37,16.42-14.36,19-28.63Z"
      />
      <path
        className="cls-1"
        d="M85.43,4c16.74,4.38,14.14,28.52,17.6,42.3,1.09,4.32,4.39,14.88,9.83,14.65,6-.25,5.29-18.29,5.56-23,.18-3.17.66-9.15,4.46-10.19C115.72,2.49,103.36-5.83,85.43,4Z"
      />
      <path
        id="left-eye"
        className="cls-4"
        d="M40.76,37.69h0a6.92,6.92,0,0,1,6.89,6.89v3.89a6.92,6.92,0,0,1-6.89,6.89h0a6.91,6.91,0,0,1-6.89-6.89V44.58a6.91,6.91,0,0,1,6.89-6.89Z"
      />
      <path
        id="left-pupil"
        className="cls-5"
        d="M40.64,39.57a3,3,0,1,1-3,3,3,3,0,0,1,3-3Z"
      />
      <path
        id="right-eye"
        className="cls-4"
        d="M82.18,37.69h0a6.92,6.92,0,0,0-6.9,6.89V48.1A6.92,6.92,0,0,0,82.18,55h0a6.91,6.91,0,0,0,6.89-6.89V44.58a6.91,6.91,0,0,0-6.89-6.89Z"
      />
      <path
        id="right-pupil"
        className="cls-5"
        d="M82.3,39.57a3,3,0,1,0,3,3,3,3,0,0,0-3-3Z"
      />
      <path
        className="cls-6"
        d="M61.43,93.56h0c10.67,5.25,19.1,3.29,24.72-7.69,1.75-3.41,1.5-4.83-.17-8.23-.48-1-1-1.9-1.47-2.84A190.34,190.34,0,0,0,74.08,57.43c-2-2.91-3.84-6-7-7.71a12.5,12.5,0,0,0-11.18,0c-3.21,1.68-5.08,4.8-7.05,7.71A190.34,190.34,0,0,0,38.35,74.8c-.5.94-1,1.88-1.47,2.84-1.67,3.4-1.92,4.82-.17,8.23,5.62,11,14,12.94,24.72,7.69Z"
      />
      <path
        className="cls-7"
        d="M70.55,77a21.91,21.91,0,0,1-9.06,5.9,24.25,24.25,0,0,1-8.88-5.77c-1.53-1.66-2.17-2.29-1.94-4.56a6.58,6.58,0,0,1,2.1-4.32c3.83-3.51,13.12-3.58,17.09-.21a6.51,6.51,0,0,1,2.24,4c.42,2.38,0,3.21-1.55,5Z"
      />
    </svg>
  );
}

const DoggoFace = (props) => {
  return (
    <svg
      {...props}
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 122.88 107.32"
      version="1.1"
    >
      <defs>
        <style>
          {`
            .cls-1 { fill: #a0470d; }
            .cls-1, .cls-3, .cls-4, .cls-5, .cls-6, .cls-7 { fill-rule: evenodd; }
            .cls-2 { fill: #edc797; }
            .cls-3 { fill: #f7d7b1; }
            .cls-4 { fill: #39474a; }
            .cls-5 { fill: #fff; }
            .cls-6 { fill: #bf9e83; }
            .cls-7 { fill: #3f3d31; }
          `}
        </style>
      </defs>
      <title id="title1">dog-face-color</title>
      <path
        className="cls-1"
        d="M37.45,4c-16.74,4.38-14.14,28.52-17.6,42.3C18.76,50.66,15.46,61.22,10,61,4,60.74,4.73,42.7,4.46,38,4.28,34.83,3.8,28.85,0,27.81,7.15,2.49,19.52-5.83,37.45,4Z"
        id="path1"
        style={{
          stroke: "#f53fa1",
          strokeOpacity: 0.75686276,
          fill: "#f53fa1",
        }}
      />
      <path
        className="cls-2"
        d="M102.37,34.73c1.12,8.6,2.2,16.9,5.91,21.58a1.15,1.15,0,0,1,.22.87,46,46,0,0,1-7,18.08A36.25,36.25,0,0,1,89.26,86.4a31.3,31.3,0,0,1-2.88,3.65s0,0,0,0L86.27,90h0c-1.16,6.64-4,11.06-8.35,13.8s-9.82,3.69-16.46,3.55c-15.66-.35-21.59-6.39-23.7-11.26a14,14,0,0,1-1-3.36,10.12,10.12,0,0,1-.07-2.4l0-.16a14.54,14.54,0,0,1-1.61-1.63,9.3,9.3,0,0,1-1.36-2.12A36.37,36.37,0,0,1,21.58,75.26a45.87,45.87,0,0,1-7-18.05,1.1,1.1,0,0,1,.12-.77c4.41-7.54,5.45-16.37,6.42-24.64C22.63,19,24,7.41,37,3a1.13,1.13,0,0,1,.73,0A16.07,16.07,0,0,0,40,3.52a18.28,18.28,0,0,0,2.3.19,16,16,0,0,0,5.77-1C50.77,1.85,54,.82,61.59.88A45.84,45.84,0,0,1,75.22,2.77a18.71,18.71,0,0,0,6,1,13.16,13.16,0,0,0,2-.2,13.44,13.44,0,0,0,2-.52,1.12,1.12,0,0,1,.68,0c12.91,3.42,14.8,18,16.6,31.74Zm-16.09,55V90l.08.07c0-.12-.07-.54-.07-.25Z"
        id="path2"
        style={{ fill: "none" }}
      />
      <path
        className="cls-3"
        d="M107.43,57C97.55,44.53,105.65,9.38,85.49,4a13.72,13.72,0,0,1-4.28.79C75.53,5,73.49,2.05,61.58,2,48.86,1.87,48.71,4.89,42.31,4.79A17,17,0,0,1,37.45,4C16.64,11,26.91,37.73,15.64,57c2.57,14.27,9.34,23.26,19,28.63A10.5,10.5,0,0,0,38,89.77c-.57,0-2.06,15.89,23.47,16.45,12.87.28,21.51-3.82,23.72-16.45,0,0,2.87-3.18,3.25-4.15,9.65-5.37,16.42-14.36,19-28.63Z"
        id="path3"
        style={{ stroke: "#00ecff", strokeOpacity: 1, fill: "none" }}
      />
      <path
        className="cls-1"
        d="M85.43,4c16.74,4.38,14.14,28.52,17.6,42.3,1.09,4.32,4.39,14.88,9.83,14.65,6-.25,5.29-18.29,5.56-23,.18-3.17.66-9.15,4.46-10.19C115.72,2.49,103.36-5.83,85.43,4Z"
        id="path4"
        style={{ stroke: "#f53fa1", strokeOpacity: 1, fill: "#f53fa1" }}
      />
      <path
        className="cls-4"
        d="m 39.765,37.69 v 0 a 7.9293757,7.6405883 0 0 1 7.895,7.607469 v 4.295062 A 7.9293757,7.6405883 0 0 1 39.765,57.2 v 0 A 7.9179162,7.6295469 0 0 1 31.87,49.592531 V 45.297469 A 7.9179162,7.6295469 0 0 1 39.765,37.69 Z"
        id="path5"
        style={{
          strokeWidth: 1.1248,
          stroke: "#00ecff",
          strokeOpacity: 1,
          fill: "none",
          fillOpacity: 1,
        }}
      />
      <path
        className="cls-5"
        d="M40.64,39.57a3,3,0,1,1-3,3,3,3,0,0,1,3-3Z"
        id="path6"
        style={{ fill: "#f53fa1", fillOpacity: 1 }}
      />
      <path
        className="cls-4"
        d="m 83.18072,37.69 v 0 A 7.923626,7.7994918 0 0 0 75.28,45.455688 v 3.96737 A 7.923626,7.7994918 0 0 0 83.18072,57.2 v 0 A 7.912176,7.7882202 0 0 0 91.07,49.434312 V 45.455688 A 7.912176,7.7882202 0 0 0 83.18072,37.69 Z"
        id="path7"
        style={{
          strokeWidth: 1.13605,
          stroke: "#00ecff",
          strokeOpacity: 1,
          fill: "none",
          fillOpacity: 1,
        }}
      />
      <path
        className="cls-5"
        d="M82.3,39.57a3,3,0,1,0,3,3,3,3,0,0,0-3-3Z"
        id="path8"
        style={{ fill: "#f53fa1", fillOpacity: 1 }}
      />
      <path
        className="cls-6"
        d="M61.43,93.56h0c10.67,5.25,19.1,3.29,24.72-7.69,1.75-3.41,1.5-4.83-.17-8.23-.48-1-1-1.9-1.47-2.84A190.34,190.34,0,0,0,74.08,57.43c-2-2.91-3.84-6-7-7.71a12.5,12.5,0,0,0-11.18,0c-3.21,1.68-5.08,4.8-7.05,7.71A190.34,190.34,0,0,0,38.35,74.8c-.5.94-1,1.88-1.47,2.84-1.67,3.4-1.92,4.82-.17,8.23,5.62,11,14,12.94,24.72,7.69Z"
        id="path9"
        style={{ stroke: "#f53fa1", strokeOpacity: 1, fill: "#f53fa1" }}
      />
      <path
        className="cls-7"
        d="M70.55,77a21.91,21.91,0,0,1-9.06,5.9,24.25,24.25,0,0,1-8.88-5.77c-1.53-1.66-2.17-2.29-1.94-4.56a6.58,6.58,0,0,1,2.1-4.32c3.83-3.51,13.12-3.58,17.09-.21a6.51,6.51,0,0,1,2.24,4c.42,2.38,0,3.21-1.55,5Z"
        id="path10"
        style={{ stroke: "#00ecff", strokeOpacity: 1, fill: "#00ecff" }}
      />
      {/* <metadata
     id="metadata11">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:title>dog-face-color</dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata> */}
    </svg>
  );
};
