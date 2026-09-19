"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaPython  } from "react-icons/fa"
import { SiTailwindcss ,SiExpress, SiNextdotjs, SiMongodb, SiPostgresql, SiJirasoftware, SiWordpress, SiC, SiDocker, SiAdobephotoshop  } from "react-icons/si"

// about data
const about = {
  title: 'About me',
  description: "I'm a software engineer with a B.S. in Software Engineering from Ostim Technical University. I work across web, mobile, and backend systems: React and Next.js on the front end, Node.js and Express APIs with MongoDB, and mobile application development. I've built full-stack applications from Figma mockup to deployed product, and I've co-founded a company where I worked as a full-stack developer.",
  info: [ 
  {
    fieldName: "Name",
    fieldValue: "Eldar Hadzovic"
  },
  {
    fieldName: "Phone",
    fieldValue: "+387 61 880 853"
  },
  {
    fieldName: "Email",
    fieldValue: "eldarhadzovic03@gmail.com"
  },
  {
    fieldName: "Freelance",
    fieldValue: "Available"
  },
  {
    fieldName: "Languages",
    fieldValue: "English, Bosnian, Turkish"
  },
]
};

//experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "I'm a Mobile Application Developer at Promet Bilgi Sistemleri, building mobile applications for a major Turkish telecom operator. Before that I co-founded Koloniyas D.o.o. and worked there as a full-stack developer. I've also done business development work at DAKAEi AI (B2B pitches and sales) and Heritage Hotel Krone (travel agency partnerships).",
  items:[
    {
      company: "Promet Bilgi Sistemleri",
      position: "Mobile Application Developer",
      duration: "Feb 2026 - Present",
    },
    {
      company: "Koloniyas D.o.o.",
      position: "Co-Founder & Full-Stack Developer",
      location: "Bosnia and Herzegovina, Sarajevo",
      duration: "Jan 2025 - Feb 2026",
    },
    {
      company: "DAKAEi AI",
      position: "Business Development Manager",
      location: "Turkiye, Ankara",
      duration: "Dec 2024 - Jan 2026",
    },
    {
      company: "Heritage Hotel Krone",
      position: "Agency Relations Officer",
      location: "Bosnia and Herzegovina, Sarajevo",
      duration: "Oct 2024 - Dec 2025",
    },
    {
      company: "HaydeSoft",
      position: "Frontend Developer",
      location: "Turkiye, Ankara",
      duration: "Mar 2023 - Jun 2023",
    },
    {
      company: "Simurg Media D.o.o.",
      position: "Undergraduate Technical Assistant",
      location: "Bosnia and Herzegovina, Sarajevo",
      duration: "Jan 2021 - Jun 2021",
    },
  ]
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "B.S. in Software Engineering, with a secondary education in mathematics and information technologies. Also includes a first-place result in the BBI League of Negotiation.",
  items:[
    {
      institution: "Ostim Technical University",
      degree: "B.S. Software Engineering",
      duration: "Graduated Jun 2026 | GPA 3.81/4.00"
    },
    {
      institution: "First Bosniak Gymnasium",
      degree: "Mathematics & Information Technology",
      duration: "Graduated Jun 2022 | GPA 4.89/5.00",
    },
    {
      institution: "Bosnia Bank International",
      degree: "1st Place, BBI League of Negotiation",
      duration: "Mar 2021",
    },
  ]
}

// diploma data
const certificates = {
  title: "My Certificates",
  items: [
    {
      diploma: "Bosnia Bank International League of Negotiation",
      achivement: "1st Place"
    }
  ]
}

// skills data
const skills = {
  title: "My skills",
  description: "A versatile set of development, design, and DevOps skills gained through academic training and real-world experience.",
  skillList: [
    // Programming Languages
    {
      icon: <FaHtml5 /> ,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
    {
      icon: <SiC />,
      name: "c",
    },

    // Frameworks & Libraries
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <SiExpress />,
      name: "express.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },

    // Databases & Backend
    {
      icon: <SiMongodb />,
      name: "mongodb",
    },
    {
      icon: <SiPostgresql />,
      name: "postgresql",
    },

    // Design Tools
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <SiAdobephotoshop />,
      name: "photoshop",
    },

    // Programs & Tools
    {
      icon: <SiWordpress />,
      name: "wordpress",
    },
    {
      icon: <SiJirasoftware />,
      name: "jira",
    },
    {
      icon: <SiDocker />,
      name: "docker",
    },
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div 
      initial={{ opacity:0 }}
      animate={{
        opacity:1,
        transition:{ delay:2.4, duration:0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-5"
    >
      <div className="container mx-auto">
        <Tabs 
          defaultValue="experience" 
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">

            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px] overflow-auto">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index)=>{
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/80">{item.company}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index)=>{
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[300px] min-h-[70px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent mt-3"></span>
                          <p className="text-white/80 mt-3">{item.institution}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index)=>{
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[710px] mx-auto xl:mx-0">
                  {about.info.map((item, index)=>{
                    return <li 
                              key={index}
                              className="flex items-center justify-center xl:justify-start gap-4"
                            >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-white">{item.fieldValue}</span>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>

          </div>
        </Tabs>
      </div>

    </motion.div>
  )
}

export default Resume
