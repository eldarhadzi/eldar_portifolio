import ProjectLinks from "./ProjectLinks";

// Stacked, chronological list of roles. Every role shows in full; nothing sits behind a scroll box or tab.
const ExperienceTimeline = ({ items }) => {
  return (
    <ol className="relative border-l border-black/10 ml-2 flex flex-col gap-10">
      {items.map((item) => (
        <li key={item.slug} className="relative pl-8">
          <span
            className={`absolute -left-[7px] top-2 w-[13px] h-[13px] rounded-full border-2 border-accent-dark ${
              item.current ? "bg-accent-dark" : "bg-primary"
            }`}
            aria-hidden="true"
          />
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
            <p className="text-sm text-accent-dark font-semibold">{item.duration}</p>
            {item.current && (
              <span className="rounded-full border border-accent-dark px-2 py-0.5 text-xs uppercase tracking-[1px] text-accent-dark">
                Current
              </span>
            )}
          </div>
          <h3 className="text-[20px] xl:text-[24px] leading-[1.2] font-semibold">{item.position}</h3>
          <p className="text-black/80">{item.company}</p>
          <p className="text-sm text-black/60 mb-3">
            {item.location} · {item.type}
          </p>
          {item.description && (
            <p className="max-w-[640px] text-sm xl:text-base leading-relaxed text-black/80">{item.description}</p>
          )}
          {item.links && (
            <div className="mt-3">
              <ProjectLinks links={item.links} />
            </div>
          )}
        </li>
      ))}
    </ol>
  );
};

export default ExperienceTimeline;
