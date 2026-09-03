import { socialLinks } from "@/utils";
import SocialIcon from "./SocialIcon";
import Container from "./Container";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-8 border-t border-mocha-surface0/60 mt-20">
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
        <div className="flex flex-col justify-center items-center mt-4 gap-2">
          <p className="text-mocha-subtext0 font-exo text-sm flex justify-center items-center gap-2">
            Made with <FaHeart className="fill-mocha-lavender" /> <span className="sr-only">love</span>
          </p>
          <p className="text-mocha-subtext0 font-exo text-sm text-center">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-mocha-green font-semibold">Diego Campuzano</span>. All
            rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
