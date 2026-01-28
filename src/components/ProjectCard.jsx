import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({ name, description, techStack, live, github, img }) => {
  return (
    <div className="group relative flex flex-col justify-between w-full max-w-sm mx-auto overflow-hidden rounded-2xl glass-panel">
      <div className="h-48 overflow-hidden relative">
        <Image
          src={img}
          alt={name}
          fill
          className="object-fit transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-linear-to-t from-mocha-base to-transparent opacity-60"></div>
      </div>

      <div className="p-6 flex flex-col gap-4">
        <div>
          <h3 className="text-mocha-mauve font-orbitron text-xl font-bold mb-2">
            {name}
          </h3>
          <p className="text-mocha-text font-exo text-sm leading-relaxed line-clamp-5">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 my-2">
          {techStack?.map((tech) => (
            <span
              key={tech}
              className="tag-pill text-xs px-3 py-1 bg-mocha-surface1/50 border-mocha-surface2"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 mt-auto border-t border-mocha-overlay0/20">
          <Link 
            href={live} 
            target="_blank" 
            className="flex items-center gap-2 text-mocha-blue font-semibold text-sm hover:underline hover:text-mocha-blue transition-colors"
          >
            <FaExternalLinkAlt className="size-3" />
            Live Demo
          </Link>

          {github && (
            <Link 
              href={github} 
              target="_blank" 
              className="flex items-center gap-2 text-mocha-subtext0 text-sm hover:text-mocha-text transition-colors"
            >
              <FaGithub className="size-4" />
              Source Code
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
