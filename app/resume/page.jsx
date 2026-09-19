import PageFade from "@/components/PageFade";
import { pageMetadata } from "@/lib/seo";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import EducationCard from "@/components/EducationCard";
import AchievementCard from "@/components/AchievementCard";
import SkillGroup from "@/components/SkillGroup";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { summary, experience } from "@/data/experience";
import { education, achievements } from "@/data/education";
import { skillGroups } from "@/data/skills";

import { FiDownload } from "react-icons/fi";

const focusRing = "outline-none focus-visible:ring-2 focus-visible:ring-accent-dark focus-visible:ring-offset-4 focus-visible:ring-offset-primary";

const sectionHeading = "text-[28px] xl:text-[36px] leading-[1.1] font-semibold mb-8";

export const metadata = pageMetadata({
  title: "Resume",
  description: "Experience and education of Eldar Hadžović: mobile development at Promet Bilgi Sistemleri, earlier full-stack work, and a B.S. in Software Engineering.",
  path: "/resume",
});

const Resume = () => {
  return (
    <PageFade className="py-12 xl:pb-24">
      <div className="container mx-auto flex flex-col gap-16 xl:gap-20">
        <h1 className="text-[44px] xl:text-[64px] leading-[1.05] font-semibold -mb-6">
          <span className="text-accent-dark">Resume</span>
        </h1>

        {/* summary */}
        <section aria-labelledby="summary-title" className="max-w-[720px]">
          <h2 id="summary-title" className={sectionHeading}>Summary</h2>
          <div className="flex flex-col gap-4 text-base xl:text-lg leading-relaxed text-black/80">
            {summary.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
          <p className="mt-6 text-base text-black/80">{summary.availability}</p>
          <p className="mt-3 text-sm text-black/60">
            <span className="uppercase tracking-[2px] text-accent-dark font-semibold mr-3">Languages</span>
            {summary.languages}
          </p>
        </section>

        {/* experience */}
        <section aria-labelledby="experience-title">
          <h2 id="experience-title" className={sectionHeading}>Experience</h2>
          <ExperienceTimeline items={experience} />
        </section>

        {/* education */}
        <section aria-labelledby="education-title">
          <h2 id="education-title" className={sectionHeading}>Education</h2>
          <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {education.map(({ slug, ...item }) => (
              <EducationCard key={slug} {...item} />
            ))}
            {achievements.map(({ slug, ...item }) => (
              <AchievementCard key={slug} {...item} />
            ))}
          </ul>
        </section>

        {/* skills */}
        <section aria-labelledby="skills-title">
          <h2 id="skills-title" className={sectionHeading}>Skills</h2>
          <div className="flex flex-col gap-10">
            {skillGroups.map((group) => (
              <SkillGroup key={group.label} label={group.label} items={group.items} />
            ))}
          </div>
        </section>

        {/* download cv */}
        <section aria-labelledby="cv-title" className="border-t border-black/10 pt-12">
          <h2 id="cv-title" className={sectionHeading}>CV</h2>
          <Button asChild variant="outline" size="lg" className={focusRing}>
            <a href={site.cvHref} download>
              <span>Download CV</span>
              <FiDownload className="ml-2 text-xl" aria-hidden="true" />
            </a>
          </Button>
        </section>
      </div>
    </PageFade>
  );
};

export default Resume;
