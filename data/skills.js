// Skills, grouped by category. Name and category only: no ratings, percentages, or years.
// Each item lists its evidence (not rendered). Sources:
//   CV       = Skills or Work Experience section of public/assets/resume/eldar-hadzovic-cv.pdf
//   <project> = dependencies in that project's repository (GymMate, Eoned, Vertex, RestaurantOS, Eldix site, this portfolio)
// A technology appears here only if the CV or a project stack supports it.

import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiAngular, SiTailwindcss,
  SiNodedotjs, SiExpress, SiSpringboot, SiPython, SiFirebase, SiStripe,
  SiFlutter, SiDart,
  SiPostgresql, SiMysql, SiMongodb,
  SiGit, SiPostman, SiDocker, SiAndroidstudio, SiJirasoftware, SiFigma, SiWordpress,
  SiAdobephotoshop, SiAdobeillustrator, SiAdobepremierepro, SiAdobeaftereffects, SiCplusplus,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaJava } from "react-icons/fa";
import { TbApi, TbBrandReactNative } from "react-icons/tb";

export const skillGroups = [
  {
    label: "Frontend",
    items: [
      { name: "HTML", icon: SiHtml5, evidence: "CV; HaydeSoft" },
      { name: "CSS", icon: SiCss3, evidence: "CV; HaydeSoft" },
      { name: "JavaScript", icon: SiJavascript, evidence: "CV; HaydeSoft; GymMate; Eoned" },
      { name: "TypeScript", icon: SiTypescript, evidence: "Vertex; RestaurantOS; Eldix site" },
      { name: "React", icon: SiReact, evidence: "CV; HaydeSoft; Koloniyas; GymMate; Eoned" },
      { name: "Next.js", icon: SiNextdotjs, evidence: "Vertex; Eldix site; this portfolio" },
      { name: "Angular", icon: SiAngular, evidence: "RestaurantOS" },
      { name: "Tailwind CSS", icon: SiTailwindcss, evidence: "GymMate; Eoned; Vertex; this portfolio" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, evidence: "GymMate; Eoned" },
      { name: "Express.js", icon: SiExpress, evidence: "CV; GymMate; Eoned" },
      { name: "Java", icon: FaJava, evidence: "CV; RestaurantOS" },
      { name: "Spring Boot", icon: SiSpringboot, evidence: "RestaurantOS" },
      { name: "Python", icon: SiPython, evidence: "CV" },
      { name: "REST API design", icon: TbApi, evidence: "CV; Promet" },
      { name: "Firebase", icon: SiFirebase, evidence: "CV; Promet" },
      { name: "Stripe", icon: SiStripe, evidence: "GymMate; Eoned" },
    ],
  },
  {
    label: "Mobile",
    items: [
      { name: "Flutter", icon: SiFlutter, evidence: "CV; Promet; Koloniyas" },
      { name: "React Native", icon: TbBrandReactNative, evidence: "CV" },
      { name: "Dart", icon: SiDart, evidence: "CV" },
    ],
  },
  {
    label: "Data",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, evidence: "CV; Koloniyas; RestaurantOS" },
      { name: "MySQL", icon: SiMysql, evidence: "CV" },
      { name: "MongoDB", icon: SiMongodb, evidence: "GymMate; Eoned" },
    ],
  },
  {
    label: "Tools & Engineering",
    items: [
      { name: "Git", icon: SiGit, evidence: "CV" },
      { name: "Postman", icon: SiPostman, evidence: "CV" },
      { name: "Docker", icon: SiDocker, evidence: "CV; RestaurantOS" },
      { name: "Visual Studio Code", icon: VscVscode, evidence: "CV" },
      { name: "Android Studio", icon: SiAndroidstudio, evidence: "CV" },
      { name: "Jira", icon: SiJirasoftware, evidence: "CV; Koloniyas" },
      { name: "Figma", icon: SiFigma, evidence: "CV; HaydeSoft" },
      { name: "WordPress", icon: SiWordpress, evidence: "CV; Simurg; Koloniyas" },
      { name: "Photoshop", icon: SiAdobephotoshop, evidence: "CV; Simurg" },
      { name: "Illustrator", icon: SiAdobeillustrator, evidence: "CV; Simurg" },
      { name: "Premiere Pro", icon: SiAdobepremierepro, evidence: "CV; Simurg" },
      { name: "After Effects", icon: SiAdobeaftereffects, evidence: "CV" },
      { name: "C++", icon: SiCplusplus, evidence: "CV" },
    ],
  },
];
