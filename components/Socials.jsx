import Link from "next/link"
import { socialLinks } from "@/data/site"
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa"

const icons = {
  github: <FaGithub />,
  linkedin: <FaLinkedinIn />,
  whatsapp: <FaWhatsapp />,
}

const Socials = ({ containerStyles }) => {
  return (
    <div className={containerStyles}>
      {socialLinks.map((item) => {
        const baseStyle = "w-9 h-9 rounded-full flex justify-center items-center text-base hover:scale-110 transition-all duration-300 border border-white";
        
        const colorStyle =
          item.type === "github"
            ? "bg-[#181717] text-white"
            : item.type === "linkedin"
            ? "bg-[#0077B5] text-white hover:bg-[#005582]"
            : item.type === "whatsapp"
            ? "bg-[#25D366] text-white hover:bg-[#128C7E]"
            : "bg-accent text-white";

            return (
              <Link
                key={item.type}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${baseStyle} ${colorStyle}`}
              >
                {icons[item.type]}
              </Link>
            );
          })}
        </div>
      );
    };
    
    export default Socials;

