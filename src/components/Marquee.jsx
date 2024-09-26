"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { stackList } from "@/utils";
import StackCard from "./StackCard";
import { useGSAP } from "@gsap/react";

export default function Marquee() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    requestAnimationFrame(animation);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-=300px",
    });
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    xPercent += 0.05 * direction;
    requestAnimationFrame(animation);
  };

  return (
    <section className="relative flex min-h-[8rem] lg:min-h-[12rem] overflow-hidden my-5">
      <div className="absolute">
        <div ref={slider} className="relative whitespace-nowrap">
          <div ref={firstText} className="relative flex">
            {stackList.map((stack) => (
              <StackCard key={stack.id} name={stack.name} Icon={stack.icon} />
            ))}
          </div>
          <div ref={secondText} className="absolute left-full top-0 flex">
            {stackList.map((stack) => (
              <StackCard key={stack.id} name={stack.name} Icon={stack.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
