import { FaFolderOpen, FaGithubAlt } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa6";
import { GrArchlinux } from "react-icons/gr";

const Terminal = () => {
  return (
    <div className="lg:flex font-exo hidden" aria-hidden="true">
      <div className="flex h-7">
        <div className="text-mocha-base bg-mocha-red w-fit px-5 flex justify-center items-center rounded-full">
          <GrArchlinux size={13} />
        </div>
        <div className="text-mocha-base bg-mocha-peach px-6 flex justify-center items-center path-middle">
          <FaFolderOpen size={13} />
          <p className="ml-2">~/Projects/portfolio</p>
        </div>
        <div className="text-mocha-base bg-mocha-yellow px-6 flex justify-center items-center path-middle" />
        <div className="text-mocha-base bg-mocha-green px-6 flex justify-center items-center path-middle" />
        <div className="text-mocha-base bg-mocha-blue px-6 flex justify-center items-center path-middle" />
        <div className="text-mocha-base bg-mocha-lavender px-6 flex justify-center items-center path-middle gap-2">
          <FaGithubAlt size={13} />
          <FaCodeBranch size={13} />
          <p>master</p>
        </div>
        <div className="cursor ml-4"></div>
      </div>
    </div>
  );
};

export default Terminal;
