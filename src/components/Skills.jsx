import Container from "./Container";
import useGsapAnimation from "@/hooks/useGsapAnimation";
import Header from "./Header";
import { skillData } from "@/utils";

const Skills = () => {
  const { containerRef, titleRef, contentRef } = useGsapAnimation();
  return (
    <div className="mb-14 lg:mb-40 opacity-0" ref={containerRef}>
      <Container>
        <div ref={titleRef} className="flex flex-col items-center mb-10">
          <Header>Skills</Header>
          <p className="text-mocha-subtext0 mt-4 text-center max-w-lg font-exo">
            Technologies I work with to build robust applications.
          </p>
        </div>

        <div
          ref={contentRef}
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          {skillData.map((skill) => (
            <div
              key={skill.name}
              className={`group flex items-center gap-2 px-4 py-2 rounded-full border bg-mocha-surface0/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-mocha-surface1 ${skill.border} hover:border-opacity-100 border-opacity-40`}
            >
              <skill.icon className={`h-5 w-5 ${skill.color}`} />
              <span className="text-mocha-text font-medium text-sm">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Skills;
