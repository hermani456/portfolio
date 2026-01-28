import {
  FaLinkedinIn,
  FaGithubAlt,
  FaInstagram,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNode,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiFrontendmentor,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { SiPostgresql, SiTypescript } from "react-icons/si";
import { IoMdHome } from "react-icons/io";
import { FaProjectDiagram } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import wedding from "@/app/img/wedding.webp";
import wilko from "@/app/img/wilko.webp";
import yme from "@/app/img/yme.webp";
import liquidapp from "@/app/img/liquidapp.png";
import converter from "@/app/img/converter.webp";
import trafalgar from "@/app/img/trafalgar.webp";
import familyTask from "@/app/img/familytask.webp";

export const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "#home",
    icon: IoMdHome,
  },
  {
    id: 2,
    name: "About",
    path: "#about",
    icon: FaInfoCircle,
  },
  {
    id: 3,
    name: "Projects",
    path: "#projects",
    icon: FaProjectDiagram,
  },
  {
    id: 4,
    name: "Contact",
    path: "#contact",
    icon: FaPhoneAlt,
  },
];

export const socialLinks = [
  {
    id: 1,
    name: "LinkedIn",
    path: "https://www.linkedin.com/in/diegocampuzano/",
    icon: FaLinkedinIn,
  },
  {
    id: 2,
    name: "GitHub",
    path: "https://github.com/hermani456",
    icon: FaGithubAlt,
  },
  {
    id: 3,
    name: "Frontend Mentor",
    path: "https://www.frontendmentor.io/profile/hermani456",
    icon: SiFrontendmentor,
  },
];

// technogy, tools, and libraries i know
export const skillData = [
  {
    name: "React",
    icon: FaReact,
    color: "text-mocha-blue",
    border: "border-mocha-blue",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-mocha-text",
    border: "border-mocha-text",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-mocha-blue",
    border: "border-mocha-blue",
  },
  {
    name: "JavaScript",
    icon: FaJs,
    color: "text-mocha-yellow",
    border: "border-mocha-yellow",
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    color: "text-mocha-sky",
    border: "border-mocha-sky",
  },
  {
    name: "Node.js",
    icon: FaNode,
    color: "text-mocha-green",
    border: "border-mocha-green",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "text-mocha-sapphire",
    border: "border-mocha-sapphire",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-mocha-green",
    border: "border-mocha-green",
  },
  {
    name: "HTML5",
    icon: FaHtml5,
    color: "text-mocha-peach",
    border: "border-mocha-peach",
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    color: "text-mocha-blue",
    border: "border-mocha-blue",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "text-mocha-red",
    border: "border-mocha-red",
  },
];

// projects
export const projects = [
  {
    id: 7,
    name: "FamilyTask",
    category: "fullstack",
    description:
      "A gamified household management platform where children earn points by completing tasks to redeem rewards. Built as monorepo featuring role-based authentication, secure API communication, and automated Docker deployments.",
    techStack: [
      "ReactJS",
      "Node.js",
      "TypeScript",
      "Drizzle ORM",
      "PostgreSQL",
      "Docker",
      "TailwindCSS",
    ],
    github: "https://github.com/hermani456/family-task",
    live: "https://familytask.diegocampuzano.dev/",
    img: familyTask,
  },
  {
    id: 5,
    name: "Media Forge",
    category: "frontend",
    description:
      "A serverless media converter running entirely in the browser. Powered by WebAssembly and multi-threaded Web Workers to process video, audio, and images offline with zero server latency.",
    techStack: [
      "ReactJS",
      "TypeScript",
      "Vite",
      "FFmpeg.wasm",
      "Web Workers",
      "TailwindCSS",
    ],
    github: "https://github.com/hermani456/wasm-media-converter",
    live: "https://mediaforge.diegocampuzano.dev/",
    img: converter,
  },
  {
    id: 1,
    name: "Liquid App",
    category: "fullstack",
    description:
      "A web app that allows users to create and manage payrolls, including the ability to create companies, employees, and payrolls. It also includes a feature to send payslips via email.",
    techStack: [
      "NextJS",
      "TailwindCSS",
      "Shadcn UI",
      "PostgreSQL",
      "ReactJS",
      "Resend",
      "React Email",
    ],
    github: "https://github.com/hermani456/liquidapp",
    live: "https://liquidapp.diegocampuzano.dev/",
    img: liquidapp,
  },
  {
    id: 2,
    name: "Wedding RSVP",
    category: "fullstack",
    description:
      "A wedding RSVP app that allows guests to respond to wedding invitations. Upon successful RSVP, guests receive both an email and a PDF invitation.",
    techStack: [
      "NextJS",
      "TailwindCSS",
      "PostgreSQL",
      "ReactJS",
      "Resend",
      "React Email",
      "React PDF",
    ],
    github: "https://github.com/hermani456/wedding",
    live: "https://weddingrsvp.diegocampuzano.dev/",
    img: wedding,
  },
  {
    id: 3,
    name: "A Company Services Web Page",
    category: "frontend",
    description:
      "A web page highlighting the diverse range of services offered by the company.",
    techStack: ["NextJS", "TailwindCSS", "ReactJS", "EmailJS", "Frame Motion"],
    github: "https://github.com/hermani456/willka-next",
    live: "https://willko.diegocampuzano.dev",
    img: wilko,
  },
  {
    id: 4,
    name: "Web Page for a Recruitment Agency",
    category: "frontend",
    description:
      "A web page for a recruitment agency that enables users to upload their CVs easily.",
    techStack: ["NextJS", "TailwindCSS", "ReactJS", "Resend", "GSAP"],
    github: "https://github.com/hermani456/yme",
    live: "https://yme.diegocampuzano.dev/",
    img: yme,
  },
  {
    id: 6,
    name: "Trafalgar Landing Page",
    category: "ui",
    description:
      "A implementation of a Figma design for a digital healthcare platform. Focuses on responsive layout strategies, clean component structure, and faithful reproduction of the original UI typography and spacing.",
    techStack: ["ReactJS", "TailwindCSS", "Figma", "Vite"],
    github:
      "https://github.com/hermani456/figma-to-code/tree/master/trafalgar-landing-page",
    live: "https://figma-to-code-seven.vercel.app/",
    img: trafalgar,
  },
];
