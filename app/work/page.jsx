"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "full-stack",
    title: "project 1",
    description: "",
    stack: [
      {name: "html 5"},
      {name: "css 3"},
      {name: "javascript"}
    ],
    image:"/assets/work/thumb1.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  return (
    <div className="container mx-auto">
      work page
    </div>
  )
}

export default Work
