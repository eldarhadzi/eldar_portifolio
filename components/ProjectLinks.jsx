import IconLink from "./IconLink";
import { BsArrowUpRight, BsGithub, BsArrowRight } from "react-icons/bs";

const icons = {
  live: <BsArrowUpRight aria-hidden="true" />,
  repo: <BsGithub aria-hidden="true" />,
  internal: <BsArrowRight aria-hidden="true" />,
};

const linkStyle =
  "inline-flex items-center gap-2 min-h-[44px] px-5 rounded-full border border-accent-dark text-accent-dark text-sm font-semibold transition-colors hover:bg-accent hover:text-black outline-none focus-visible:ring-2 focus-visible:ring-accent-dark focus-visible:ring-offset-4 focus-visible:ring-offset-primary";

// IconLink renders nothing for an empty href, so a missing live or repo link never shows as a dead button.
const ProjectLinks = ({ links = [] }) => {
  if (!links.some((link) => link.href)) return null;

  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => (
        <IconLink key={link.type + link.label} href={link.href} label={link.label} className={linkStyle}>
          <span>{link.label}</span>
          {icons[link.type]}
        </IconLink>
      ))}
    </div>
  );
};

export default ProjectLinks;
