import Link from "next/link";

const SocialIcon = ({ name, href, IconSocial }) => {
  return (
    <Link
      target="_blank"
      href={href}
      aria-label={`Link to my ${name} profile`}
      className="size-10 rounded-full border-4 border-mocha-maroon flex items-center justify-center hover:bg-mocha-flamingo/40 transition-colors duration-300 ease-in-out"
    >
      <IconSocial className="fill-mocha-rosewater" />
    </Link>
  );
};

export default SocialIcon;
