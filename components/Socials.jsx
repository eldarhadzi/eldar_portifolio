import IconLink from "./IconLink"
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
        const baseStyle = "w-11 h-11 rounded-full flex justify-center items-center text-xl hover:scale-110 transition-all duration-300 border border-white outline-none focus-visible:ring-2 focus-visible:ring-accent-dark focus-visible:ring-offset-4 focus-visible:ring-offset-primary";
        
        const colorStyle =
          item.type === "github"
            ? "bg-[#181717] text-white"
            : item.type === "linkedin"
            ? "bg-[#0077B5] text-white hover:bg-[#005582]"
            : item.type === "whatsapp"
            ? "bg-[#25D366] text-white hover:bg-[#128C7E]"
            : "bg-accent text-white";

            return (
              <IconLink
                key={item.type}
                href={item.href}
                label={item.label}
                className={`${baseStyle} ${colorStyle}`}
              >
                {icons[item.type]}
              </IconLink>
            );
          })}
        </div>
      );
    };
    
    export default Socials;

