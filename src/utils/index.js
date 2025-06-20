import {
  FaLinkedinIn,
  FaGithubAlt,
  FaInstagram,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiPostgresql, SiTypescript, SiExpo } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandReactNative } from "react-icons/tb";
import { IoMdHome } from "react-icons/io";
import { FaProjectDiagram } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import wedding from "@/app/img/wedding.webp";
import wilko from "@/app/img/wilko.webp";
import yme from "@/app/img/yme.webp";
import liquidapp from "@/app/img/liquidapp.png";

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
export const stackList = [
  {
    id: 1,
    name: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    id: 2,
    name: "ReactJS",
    icon: FaReact,
  },
  {
    id: 3,
    name: "NextJS",
    icon: RiNextjsFill,
  },
  {
    id: 4,
    name: "NodeJS",
    icon: FaNodeJs,
  },
  {
    id: 9,
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    id: 10,
    name: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    id: 11,
    name: "HTML5",
    icon: FaHtml5,
  },
  {
    id: 12,
    name: "CSS3",
    icon: FaCss3Alt,
  },
  {
    id: 14,
    name: "PostgreSQL",
    icon: SiPostgresql,
  },
  {
    id: 15,
    name: "React Native",
    icon: TbBrandReactNative,
  },
  {
    id: 16,
    name: "Expo",
    icon: SiExpo,
  },
];

// projects
export const projects = [
  {
    id: 1,
    name: "Liquid App",
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
    live: "https://liquidapp.diegocampuzano.me/",
    img: liquidapp,
  },
  {
    id: 2,
    name: "Wedding RSVP",
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
    live: "https://weddingrsvp.diegocampuzano.me/",
    img: wedding,
  },
  {
    id: 3,
    name: "A Company Services Web Page",
    description:
      "A web page highlighting the diverse range of services offered by the company.",
    techStack: ["NextJS", "TailwindCSS", "ReactJS", "EmailJS", "Frame Motion"],
    github: "https://github.com/hermani456/willka-next",
    live: "https://willko.diegocampuzano.me",
    img: wilko,
  },
  {
    id: 4,
    name: "Web Page for a Recruitment Agency",
    description:
      "A web page for a recruitment agency that enables users to upload their CVs easily.",
    techStack: ["NextJS", "TailwindCSS", "ReactJS", "Resend", "GSAP"],
    github: "https://github.com/hermani456/yme",
    live: "https://yme.diegocampuzano.me/",
    img: yme,
  },
];
