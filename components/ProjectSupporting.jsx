import ProjectLinks from "./ProjectLinks";

// Compact entry for Supporting and Ventures: no image, no write-up, smaller type.
const ProjectSupporting = ({ project }) => {
  const { slug, title, category, summary, links } = project;

  return (
    <article
      aria-labelledby={`${slug}-title`}
      className="flex flex-col gap-3 rounded-lg border border-black/10 bg-surface p-6"
    >
      <p className="text-xs uppercase tracking-[2px] text-black/60 font-semibold">{category}</p>
      <h3 id={`${slug}-title`} className="text-[20px] xl:text-[24px] leading-[1.1] font-semibold">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-black/80 flex-1">{summary}</p>
      <ProjectLinks links={links} />
    </article>
  );
};

export default ProjectSupporting;
