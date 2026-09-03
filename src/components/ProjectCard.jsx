import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({ name, description, techStack, live, github, img }) => {
  return (
    <div className="group relative flex flex-col w-full max-w-sm mx-auto overflow-hidden rounded-2xl glass-panel hover:border-mocha-mauve/50 hover:shadow-xl hover:shadow-mocha-mauve/10 hover:-translate-y-1.5 transition-all duration-500 ease-out h-full">
      <div className="h-48 overflow-hidden relative shrink-0">
        <Image
          src={img}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-mocha-base to-transparent opacity-60"></div>
      </div>

      <div className="p-6 flex flex-col justify-between flex-1 gap-6">
        <div>
          <h3 className="text-mocha-mauve font-orbitron text-xl font-bold mb-2">
            {name}
          </h3>
          <p className="text-mocha-text font-exo text-sm leading-relaxed line-clamp-5">
            {description}
          </p>
        </div>

        <div className="flex flex-col gap-4 mt-auto">
          <div className="flex flex-wrap gap-2">
            {techStack?.map((tech) => (
              <span
                key={tech}
                className="tag-pill text-xs px-3 py-1 bg-mocha-surface1/50 border-mocha-surface2"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-mocha-overlay0/20">
            <Link
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${name} (opens in new tab)`}
              className="flex items-center gap-2 text-mocha-blue font-semibold text-sm hover:underline hover:text-mocha-sky transition-colors"
            >
              <FaExternalLinkAlt className="size-3" />
              <span>Live Demo</span>
            </Link>

            {github && (
              <Link
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View source code of ${name} on GitHub (opens in new tab)`}
                className="flex items-center gap-2 text-mocha-subtext0 text-sm hover:text-mocha-text transition-colors"
              >
                <FaGithub className="size-4" />
                <span>Source Code</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
