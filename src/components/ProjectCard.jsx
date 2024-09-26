import Image from "next/image";
import yme from "@/app/img/yme.png";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ name, description, techStack, live, img }) => {
  return (
    <div className="w-[25rem] h-[33rem] flex flex-col justify-between bg-back rounded-md overflow-hidden border-gradient-neon border-gradient">
      <Image
        src={img}
        alt={name}
        width={400}
        height={200}
        className="pointer-events-none filter grayscale-[70%] object-contain"
      />
      {/* <div className="flex flex-col p-2 justify-between"> */}
      <div className="px-2">
        <h3 className="text-sec font-orbitron text-xl sm:text-2xl font-semibold">
          {name}
        </h3>
        <p className="text-white font-exo text-sm lg:text-md">{description}</p>
      </div>
      <div className="flex gap-2 flex-wrap px-2">
        {techStack?.map((tech) => (
          <span
            key={tech}
            className="text-white bg-acc/50 px-2 py-1 rounded-md text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="p-2">
        <Link href={live} target="_blank" className="btn font-orbitron">
          <div className="flex justify-center items-center gap-2">
            <FaExternalLinkAlt />
            <span>Visit Site</span>
          </div>
        </Link>
      </div>
      {/* </div> */}
    </div>
  );
};

export default ProjectCard;
