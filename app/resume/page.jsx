"use client";

import { motion } from "framer-motion";

import { useInitialLoad } from "@/components/InitialLoadProvider";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import EducationCard from "@/components/EducationCard";
import AchievementCard from "@/components/AchievementCard";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { site } from "@/data/site";
import { summary, experience } from "@/data/experience";
import { education, achievements } from "@/data/education";

import { FiDownload } from "react-icons/fi";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiNextdotjs, SiMongodb, SiPostgresql, SiJirasoftware, SiWordpress, SiC, SiDocker, SiAdobephotoshop } from "react-icons/si";

const focusRing = "outline-none focus-visible:ring-2 focus-visible:ring-accent-dark focus-visible:ring-offset-4 focus-visible:ring-offset-primary";

// skills data
const skills = [
  // Programming languages
  { icon: <FaHtml5 />, name: "html 5" },
  { icon: <FaCss3 />, name: "css 3" },
  { icon: <FaJs />, name: "javascript" },
  { icon: <FaPython />, name: "python" },
  { icon: <SiC />, name: "c" },

  // Frameworks & libraries
  { icon: <FaReact />, name: "react.js" },
  { icon: <FaNodeJs />, name: "node.js" },
  { icon: <SiTailwindcss />, name: "tailwind.css" },
  { icon: <SiExpress />, name: "express.js" },
  { icon: <SiNextdotjs />, name: "next.js" },

  // Databases & backend
  { icon: <SiMongodb />, name: "mongodb" },
  { icon: <SiPostgresql />, name: "postgresql" },

  // Design tools
  { icon: <FaFigma />, name: "figma" },
  { icon: <SiAdobephotoshop />, name: "photoshop" },

  // Programs & tools
  { icon: <SiWordpress />, name: "wordpress" },
  { icon: <SiJirasoftware />, name: "jira" },
  { icon: <SiDocker />, name: "docker" },
];

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
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
            {skills.map((skill) => (
              <li key={skill.name}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger
                      aria-label={skill.name}
                      className="w-full h-[150px] bg-surface border border-black/10 rounded-xl flex justify-center items-center group"
                    >
                      <div className="text-6xl group-hover:text-accent-dark transition-all duration-300">{skill.icon}</div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="capitalize">{skill.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
            ))}
          </ul>
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
