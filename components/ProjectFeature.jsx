import Image from "next/image";
import ProjectLinks from "./ProjectLinks";

const label = "text-xs uppercase tracking-[2px] text-accent-dark font-semibold mb-1";

// Large, editorial entry for a Featured project. `role` is required: an entry without one does not render.
const ProjectFeature = ({ project, index, reverse = false }) => {
  const { slug, title, category, summary, role, contribution, stack, status, links, images, origin } = project;

  if (!role) {
    throw new Error(`ProjectFeature: "${slug}" is missing the required role field.`);
  }

  const image = images?.[0];

  return (
    <article aria-labelledby={`${slug}-title`} className="grid xl:grid-cols-2 gap-8 xl:gap-16 items-center">
      {/* image */}
      {image && (
        <div className={reverse ? "xl:order-2" : undefined}>
          <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden border border-black/10 bg-white">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1200px) 560px, 100vw"
              className={image.fit === "contain" ? "object-contain object-center" : "object-cover object-left-top"}
            />
          </div>
        </div>
      )}

      {/* write-up */}
      <div>
        <div className="flex items-center gap-4 mb-4">
          <span className="text-5xl leading-none font-extrabold text-transparent text-outline" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className="text-sm uppercase tracking-[2px] text-black/60 font-semibold">{category}</p>
        </div>

        <h2 id={`${slug}-title`} className="text-[32px] xl:text-[48px] leading-[1.1] font-semibold mb-4">
          {title}
        </h2>

        {origin && (
          <p className="inline-block mb-4 rounded-full border border-accent-dark px-3 py-1 text-xs uppercase tracking-[1px] text-accent-dark font-semibold">
            {origin}
          </p>
        )}

        <p className="text-base xl:text-lg leading-relaxed text-black/80 mb-6">{summary}</p>

        <dl className="grid gap-4 mb-6 border-t border-black/10 pt-6">
          <div>
            <dt className={label}>Role</dt>
            <dd className="text-black/80 leading-relaxed">{role}</dd>
          </div>
          <div>
            <dt className={label}>Status</dt>
            <dd className="text-black/80 leading-relaxed">{status}</dd>
          </div>
          <div>
            <dt className={label}>What I built</dt>
            <dd className="text-black/80 leading-relaxed">{contribution}</dd>
          </div>
        </dl>

        <ul className="flex flex-wrap gap-2 mb-6" aria-label={`${title} stack`}>
          {stack.map((item) => (
            <li key={item} className="rounded-full border border-black/10 px-3 py-1 text-sm text-black/80">
              {item}
            </li>
          ))}
        </ul>

        <ProjectLinks links={links} />
      </div>
    </article>
  );
};

export default ProjectFeature;
