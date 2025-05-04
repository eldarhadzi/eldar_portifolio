import Link from "next/link"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

const socials = [
  { icon: <FaGithub />, path: "https://github.com/eldarhadzi", type: "github" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/eldar-had%C5%BEovi%C4%87-1375a925b/", type: "linkedin" }
]

const Socials = ({ containerStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        const baseStyle = "w-9 h-9 rounded-full flex justify-center items-center text-base hover:scale-110 transition-all duration-300 border border-white";
        
        const colorStyle =
          item.type === "github"
            ? "bg-[#181717] text-white"
            : item.type === "linkedin"
            ? "bg-[#0077B5] text-white hover:bg-[#005582]"
            : "bg-accent text-white";

            return (
              <Link
                key={index}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className={`${baseStyle} ${colorStyle}`}
              >
                {item.icon}
              </Link>
            );
          })}
        </div>
      );
    };
    
    export default Socials;

