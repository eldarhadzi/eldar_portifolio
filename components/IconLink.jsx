import Link from "next/link";

// Renders nothing when there is no href, so an unset link never shows as a dead button.
const IconLink = ({ href, label, className, children }) => {
  if (!href) return null;

  const external = /^https?:\/\//.test(href);

  return (
    <Link
      href={href}
      aria-label={label}
      className={className}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </Link>
  );
};

export default IconLink;
