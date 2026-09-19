"use client";

import { useInitialLoad } from "@/components/InitialLoadProvider";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

// project data
const projects = [
  {
    num: "01",
    category: "full-stack",
    title: "GymMate",
    description:
      "A dynamic fitness platform that connects clients with trainers in Ankara, offering personalized training experiences and online fitness programs for individuals of all levels.",
    stack: [
      { name: "React.js" },
      { name: "Tailwind.css" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "Stripe" },
    ],
    image: "/assets/work/thumb1.png", 
    live: "https://gymmate-frontend.vercel.app/",
    github: "", // Add GitHub repository link here when available
  },
  {
    num: "02",
    category: "full-stack",
    title: "Eoned Education",
    description:
      "An educational platform connecting professors and students through secure, scalable course management, featuring Stripe payments, Clerk authentication, and a responsive UI.",
    stack: [
      { name: "React.js" },
      { name: "Vite.js" },
      { name: "Tailwind.css" },
      { name: "MongoDB" },
      { name: "Clerk" },
      { name: "Stripe" },
    ],
    image: "/assets/work/thumb2.png",
    live: "https://eoned-frontend.vercel.app/", 
    github: "",
  },
  {
    num: "03",
    category: "full-stack",
    title: "Vertex Banking",
    description:
      "A modern financial SaaS platform built with Next.js that connects to multiple bank accounts via Plaid, allows real-time transaction tracking, secure money transfers using Dwolla, and provides an intuitive dashboard for personal finance management.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript.js" },
      { name: "Tailwind.css" },
      { name: "Appwrite" },
      { name: "Plaid" },
      { name: "Dwolla" },
      { name: "Chart.js" },
      { name: "ShadCN" },
    ],
    image: "/assets/work/thumb3.png",
    live: "", 
    github: "", 
  },
];


const Work = () => {
  const initialLoad = useInitialLoad();

  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {

    // get current slide index
    const currentIndex = swiper.activeIndex;

    // update project state based on current slide index
    setProject(projects[currentIndex]);
    
  }

  return (
    <motion.section
      initial={{ opacity:0 }}
      animate={{
        opacity:1,
        transition:{ delay: initialLoad ? 2.4 : 0, duration:0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">

            {/* left side of the webpage */}
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                  {project.num}
                </div>

                <h2 className="text-[42px] font-bold leading-none text-black group-hover:text-accent transition-all duration-500 capitalize">
                  {project.category} project
                </h2>

                <p className="text-black/60">{project.description}</p>

                <ul className="flex flex-wrap gap-2 max-w-full">
                  {project.stack.map((item, index)=>{
                    return (
                      <li key={index} className="text-xl text-accent">
                        {item.name}
                        {index !== project.stack.length - 1 && ","}
                      </li>
                    );
                  })}
                </ul>

                <div className="border border-black/20"></div>

                <div className="flex items-center gap-4">
                  {/* live project button */}
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-black/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-black text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>

                  {/* github project button */}
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-black/5 flex justify-center items-center group">
                          <BsGithub className="text-black text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>

            {/* right side of the webpage */}
            <div className="w-full xl:w-[50%]">
              <Swiper 
                spaceBetween={30} 
                slidesPerView={1} 
                className="xl:h-[520px] mb-12"
                onSlideChange={handleSlideChange}
              >
                {projects.map((project, index)=>{
                  return <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] rounded-lg relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className=" border-4 border-white rounded-lg relative w-full h-full">
                        <Image src={project.image} fill className="object-left object-cover" quality={100} ></Image>
                      </div>
                    </div>
                  </SwiperSlide>
                })}
                {/* slider buttons */}
                
                <WorkSliderBtns 
                  containerStyles="flex gap-4 absolute xl:bottom-0 bottom-4 right-4 xl:right-0 z-20 xl:w-max w-full justify-end xl:justify-start"
                  btnStyles="bg-accent hover:bg-accent-hover text-black text-xl w-12 h-12 flex justify-center items-center shadow-md transition-all"
                  iconsStyles="w-5 h-5"
                />

              </Swiper>
            </div>
          </div>
        </div>
    </motion.section>
  )
}

export default Work

