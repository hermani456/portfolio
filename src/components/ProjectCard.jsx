import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ name, description, techStack, live, img }) => {
  return (
    <div className="card-border">
      <div className="w-[25rem] h-[33rem] flex flex-col justify-between rounded-[1rem] overflow-hidden bg-back">
        <Image
          src={img}
          alt={name}
          width={400}
          height={200}
          className="pointer-events-none filter grayscale-[70%] object-contain"
        />
        <div className="px-2">
          <h3 className="text-sec font-orbitron text-xl sm:text-2xl font-semibold">
            {name}
          </h3>
          <p className="text-white font-exo text-sm lg:text-md">
            {description}
          </p>
        </div>
        <div className="flex gap-2 flex-wrap px-2">
          <span className="sr-only">Tech stack for this project</span>
          {techStack?.map((tech) => (
            <span
              key={tech}
              className="text-white/80 bg-acc/50 px-2 py-1 rounded-md text-xs md:text-sm font-exo"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="px-2 pb-5">
          <Link href={live} target="_blank" className="btn font-orbitron">
            <div className="flex justify-center items-center gap-2">
              <FaExternalLinkAlt className="w-3 lg:w-5" />
              <span className="text-sm lg:text-md">Visit Site</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
