import Link from "next/link";

const SocialIcon = ({ name, href, IconSocial }) => {
  return (
    <Link
      target="_blank"
      href={href}
      aria-label={`Link to my ${name} profile`}
      className="size-10 rounded-full border-4 border-acc flex items-center justify-center hover:bg-pri hover:bg-opacity-20 transition-colors duration-300 ease-in-out"
    >
      <IconSocial className="fill-pri" />
    </Link>
  );
};

export default SocialIcon;
