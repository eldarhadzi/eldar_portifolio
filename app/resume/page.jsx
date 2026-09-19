"use client";

import { motion } from "framer-motion";

import { useInitialLoad } from "@/components/InitialLoadProvider";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillGroup from "@/components/SkillGroup";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { summary, experience, education } from "@/data/experience";
import { skillGroups } from "@/data/skills";

import { FiDownload } from "react-icons/fi";

const focusRing = "outline-none focus-visible:ring-2 focus-visible:ring-accent-dark focus-visible:ring-offset-4 focus-visible:ring-offset-primary";

const sectionHeading = "text-[28px] xl:text-[36px] leading-[1.1] font-semibold mb-8";

const Resume = () => {
  const initialLoad = useInitialLoad();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: initialLoad ? 2.4 : 0, duration: 0.4, ease: "easeIn" },
      }}
      className="py-12 xl:pb-24"
    >
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
            {education.map((item) => (
              <li key={item.institution} className="rounded-lg border border-black/10 bg-surface p-6 flex flex-col gap-1">
                <p className="text-sm text-accent-dark font-semibold">{item.duration}</p>
                <h3 className="text-[20px] leading-[1.2] font-semibold">{item.degree}</h3>
                <p className="text-black/80">{item.institution}</p>
                {item.detail && <p className="text-sm text-black/60">{item.detail}</p>}
              </li>
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
    </motion.div>
  );
};

export default Resume;
