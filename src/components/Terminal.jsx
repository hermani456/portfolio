import { FaFolderOpen, FaGithubAlt } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa6";
import { SiManjaro } from "react-icons/si";

const Terminal = () => {
  return (
    <div className="lg:flex font-exo hidden" aria-hidden="true">
      <div className=" flex h-7">
        <div className="text-[#1f5668] bg-white w-fit px-5 flex justify-center items-center rounded-full">
          <SiManjaro size={11} />
        </div>
        <div className="text-white bg-[#1f5668] px-[1.5rem] flex justify-center items-center path-middle">
          <FaFolderOpen size={13} />
          <p className="ml-2">~/Projects/portfolio</p>
        </div>
        <div className="text-white bg-[#612248] px-[1.5rem] flex justify-center items-center path gap-2">
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
