import PageFade from "@/components/PageFade";
import ProjectFeature from "@/components/ProjectFeature";
import ProjectSupporting from "@/components/ProjectSupporting";
import { featuredProjects, supportingProjects } from "@/data/projects";

export const metadata = { title: "Work" };

const Work = () => {
  return (
    <PageFade className="py-12 xl:pb-24">
      <div className="container mx-auto">
        <header className="mb-12 xl:mb-16 max-w-[640px]">
          <h1 className="text-[44px] xl:text-[64px] leading-[1.05] font-semibold mb-4">
            Selected <span className="text-accent-dark">work</span>
          </h1>
          <p className="text-base xl:text-lg leading-relaxed text-black/80">
            Four projects with what I built and where each one stands, followed by the ventures and the site behind them.
          </p>
        </header>

        {/* featured */}
        <div className="flex flex-col gap-16 xl:gap-24 mb-16 xl:mb-24">
          {featuredProjects.map((project, index) => (
            <ProjectFeature key={project.slug} project={project} index={index} reverse={index % 2 === 1} />
          ))}
        </div>

        {/* supporting */}
        <section aria-labelledby="supporting-title" className="border-t border-black/10 pt-12">
          <h2 id="supporting-title" className="text-[28px] xl:text-[36px] leading-[1.1] font-semibold mb-8">
            Supporting and ventures
          </h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {supportingProjects.map((project) => (
              <ProjectSupporting key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </div>
    </PageFade>
  );
};

export default Work;
