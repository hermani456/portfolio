import { socialLinks } from "@/utils";
import SocialIcon from "./SocialIcon";
import Container from "./Container";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      <div className="flex justify-center items-center">
        <div className="flex gap-5 w-fit rounded-xl py-2 lg:py-4 px-3">
          {socialLinks.map((item) => (
            <SocialIcon
              key={item.id}
              name={item.name}
              href={item.path}
              IconSocial={item.icon}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mb-2">
        <h2 className="text-white/60 font-exo flex justify-center items-center gap-2">Made with <FaHeart className="fill-white"/></h2>
        <p className="text-white/60 font-exo text-center sm:text-left">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-sec font-semibold">Diego Campuzano</span>. All
          rights reserved.
        </p>
      </div>
    </Container>
  );
};

export default Footer;
