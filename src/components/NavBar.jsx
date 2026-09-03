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
import { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import dc from "@/app/img/dclogosm.png";

gsap.registerPlugin(useGSAP);

export default function NavBar() {
  const ref = useRef(null);
  const iconRef = useRef(null);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  // One-shot entrance animation — runs once on mount, doesn't affect scroll perf
  useGSAP(() => {
    gsap.fromTo(
      ref.current,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        ease: "back.inOut",
        onComplete: () => {
          gsap.set(ref.current, { clearProps: "transform" });
        },
      }
    );

    gsap.fromTo(
      iconRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "back.inOut" }
    );
  }, []);

  // Lightweight scroll direction detection
  const handleScroll = useCallback(() => {
    if (ticking.current) return;
    ticking.current = true;

    requestAnimationFrame(() => {
      const currentScrollY = window.scrollY;
      const nav = ref.current;

      if (nav) {
        if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
          nav.classList.add("nav-hidden");
        } else {
          nav.classList.remove("nav-hidden");
        }
      }

      lastScrollY.current = currentScrollY;
      ticking.current = false;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <Container>
      <header className="flex h-20 w-full shrink-0 items-center relative z-10">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              className="lg:hidden bg-mocha-surface0 text-mocha-mauve opacity-0"
              ref={iconRef}
              aria-label="Open navigation menu"
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
            <SheetDescription className="sr-only">
              Mobile navigation menu
            </SheetDescription>
            <div className="grid gap-4 py-6">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.id}>
                  <a
                    href={link.path}
                    className="flex items-center gap-4 px-4 py-3 rounded-lg text-lg text-mocha-text font-exo hover:bg-mocha-surface0/60 hover:text-mocha-sky transition-colors"
                  >
                    <link.icon className="h-5 w-5 fill-mocha-sky" />
                    <span>{link.name}</span>
                  </a>
                </SheetClose>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        <nav
          className="hidden lg:flex items-center justify-center h-16 w-fit fixed top-5 inset-x-0 mx-auto px-8 rounded-full gap-5 bg-mocha-mantle/85 backdrop-blur-md border border-mocha-surface0 shadow-lg opacity-0 nav-fixed"
          ref={ref}
          aria-label="Main Navigation"
        >
          <div className="flex justify-between gap-6 w-full font-orbitron items-center">
            <div className="flex gap-5">
              {navLinks.slice(0, 2).map((link) => (
                <a
                  key={link.id}
                  href={link.path}
                  className="text-mocha-text font-orbitron flex justify-center items-center hover:text-mocha-sky transition-colors text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a href="#home" aria-label="Go to homepage">
              <Image
                src={dc}
                alt="Diego Campuzano Logo"
                width={36}
                height={36}
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
            </a>
            <div className="flex gap-5 items-center">
              {navLinks.slice(2).map((link) => (
                <a
                  key={link.id}
                  href={link.path}
                  className="text-mocha-text font-orbitron flex justify-center items-center hover:text-mocha-sky transition-colors text-sm font-medium"
                >
                  {link.name}
                </a>
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
