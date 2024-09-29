import { useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const useGsapAnimations = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    gsap.to(containerRef.current, {
      opacity: 1,
    });

    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'back.inOut',
    });

    gsap.from(contentRef.current, {
      scrollTrigger: {
        trigger: contentRef.current,
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: {
        amount: 0.5,
      },
      ease: 'back.inOut',
    });
  }, []);

  return { containerRef, titleRef, contentRef };
};

export default useGsapAnimations;