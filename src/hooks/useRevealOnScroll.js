"use client";
import { useEffect, useRef } from "react";

/**
 * Lightweight scroll-reveal hook using IntersectionObserver.
 * Adds the "visible" class when elements enter the viewport.
 * Uses { once: true } pattern — unobserves after first intersection for zero ongoing cost.
 */
const useRevealOnScroll = ({ threshold = 0.15, rootMargin = "0px 0px -80px 0px" } = {}) => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    // Observe all refs that exist
    const elements = [containerRef, titleRef, contentRef];
    elements.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { containerRef, titleRef, contentRef };
};

export default useRevealOnScroll;
