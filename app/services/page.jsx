"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: '01',
    title: 'Web Development',
    description: 'Building responsive, dynamic, and high-performance websites using modern technologies.',
    href: ""
  },
  {
    num: '02',
    title: 'UI/UX Design',
    description: 'Designing user-centered interfaces that ensure a seamless and engaging user experience.',
    href: ""
  },
  {
    num: '03',
    title: 'Negotiation',
    description: 'Skilled in client and stakeholder negotiation to align project goals and secure successful outcomes.',
    href: ""
  },
  {
    num: '04',
    title: 'Project Management',
    description: 'Planning, executing, and delivering projects efficiently while meeting timelines and budgets.',
    href: ""
  },
  {
    num: '05',
    title: 'Logo Design',
    description: 'Creating visually striking and memorable brand identities tailored to your business.',
    href: ""
  },
  {
    num: '06',
    title: 'SEO Optimization',
    description: 'Enhancing website visibility and search engine rankings through strategic content and structure.',
    href: ""
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-5">
      <div className="container mx-auto">
        <div className="mb-8 text-center xl:text-left">
          <span className="text-accent text-xl">Looking to build something together?</span>
        </div>
        <motion.div
          initial={{ opacity:0 }}
          animate={{
            opacity:1,
            transition:{ delay:2.4, duration:0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">

            {services.map((service, index)=>{
              return <div 
                        key={index} 
                        className="flex-1 flex flex-col justify-center gap-6 group"
                      >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link 
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 ">
                    <BsArrowDownRight className=" text-3xl text-primary" />
                  </Link>
                </div>

                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>

                <p className="text-white/80">
                  {service.description}
                </p>

                <div className="border-b border-white/20 w-full"></div>
              </div>
            })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
