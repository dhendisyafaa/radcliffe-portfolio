import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

const SOSMED = [
  {
    title: "Instagram",
    url: "https://www.instagram.com/dhendisyafaa",
    icon: <FaInstagram className="hover:text-primary duration-300" />,
  },
  {
    title: "Linkedin",
    url: "www.linkedin.com/in/dhendisyafaa",
    icon: <FaLinkedin className="hover:text-primary duration-300" />,
  },
  {
    title: "Github",
    url: "https://github.com/dhendisyafaa",
    icon: <FaGithub className="hover:text-primary duration-300" />,
  },
];

const ListSosmedComponent = () => {
  return (
    <aside className="h-screen min-w-44 fixed top-0 left-0 md:flex hidden text-white flex-col items-center justify-center gap-5 text-xl">
      <div className="border-r border-r-white h-16"></div>
      {SOSMED.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            {item.icon}
          </Link>
        );
      })}
      <div className="border-r border-r-white h-16"></div>
    </aside>
  );
};

const ListSosmedHorizontal = () => {
  return (
    <div className="flex md:hidden text-white items-center justify-center gap-5 text-xl">
      <div className="border-b border-b-white w-16"></div>
      {SOSMED.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            {item.icon}
          </Link>
        );
      })}
      <div className="border-b border-b-white w-16"></div>
    </div>
  );
};

export { ListSosmedComponent, ListSosmedHorizontal };
