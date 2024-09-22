import {
  FaLinkedinIn,
  FaGithubAlt,
  FaInstagram,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiPostgresql, SiTypescript, SiExpo } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandReactNative } from "react-icons/tb";

export const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Projects",
    path: "/projects",
  },
  {
    id: 3,
    name: "About",
    path: "/about",
  },
  {
    id: 4,
    name: "Contact",
    path: "/contact",
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
    name: "Instagram",
    path: "https://www.instagram.com/hermani456/",
    icon: FaInstagram,
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
