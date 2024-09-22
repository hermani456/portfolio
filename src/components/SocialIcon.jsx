import Link from "next/link";

const SocialIcon = ({ href, IconSocial }) => {
  return (
    <Link
      href={href}
      className="size-10 rounded-full border-4 border-acc flex items-center justify-center"
    >
      <IconSocial className="fill-pri" />
    </Link>
  );
};

export default SocialIcon;
