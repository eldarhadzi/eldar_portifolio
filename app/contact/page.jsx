"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

// contact info data
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+387 61 880 853"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "eldarhadzovic03@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Sarajevo, Bosnia and Herzegovina"
  },
]

import { motion } from "framer-motion";

const Contact = () => {

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    if (res.ok) {
      alert("Message sent successfully!");
      setFormData({
        firstname: "", lastname: "", email: "", phone: "", message: ""
      });
    } else {
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <motion.section
      initial={{ opacity:0 }}
      animate={{
        opacity:1,
        transition:{ delay:2.4, duration:0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[53%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's Work Together</h3>
              <p className="text-white/60">Have a project in mind or just want to say hello? Drop me a message and I'll get back to you soon.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="firstname" type="firstname" value={formData.firstname} onChange={handleChange} placeholder="Firstname" />
                <Input name="lastname" type="lastname" value={formData.lastname} onChange={handleChange} placeholder="Lastname" />
                <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email address" />
                <Input name="phone" type="phone" value={formData.phone} onChange={handleChange} placeholder="Phone number" />
              </div>

              <Textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="h-[200px]" 
                placeholder="Type your message here."
              />

              <Button type="submit" size="md" className="max-w-40">
                Send message
              </Button>

            </form>

          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index)=>{
                return <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>

    </motion.section>
  )
}

export default Contact
