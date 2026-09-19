"use client";

import PageFade from "@/components/PageFade";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { validateContact, LIMITS } from "@/lib/contactValidation";


import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

// contact info data
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: contact.phone
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: contact.email
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: contact.location
  },
]

import { contact } from "@/data/site";

const Contact = () => {
  const emptyForm = { firstname: "", lastname: "", email: "", phone: "", message: "", website: "" };

  const [formData, setFormData] = useState(emptyForm);
  const [fieldErrors, setFieldErrors] = useState({});
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const loading = status.state === "loading";

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
    if (fieldErrors[e.target.name]) {
      setFieldErrors({...fieldErrors, [e.target.name]: undefined});
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const { errors } = validateContact(formData);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      setStatus({ state: "error", message: "Please fix the highlighted fields." });
      return;
    }

    setStatus({ state: "loading", message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setFormData(emptyForm);
        setFieldErrors({});
        setStatus({ state: "success", message: "Message sent. I'll get back to you soon." });
      } else {
        setFieldErrors(data.errors || {});
        setStatus({ state: "error", message: data.error || "Something went wrong. Please try again." });
      }
    } catch {
      setStatus({ state: "error", message: "Could not reach the server. Check your connection and try again." });
    }
  };

  return (
    <PageFade className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[53%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6 p-10 bg-surface border border-black/10 rounded-xl">
              <h1 className="text-4xl text-accent-dark">Let's Work Together</h1>
              <p className="text-black/60">Have a project in mind or just want to say hello? Drop me a message and I'll get back to you soon.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input name="firstname" type="text" autoComplete="given-name" maxLength={LIMITS.name.max} value={formData.firstname} onChange={handleChange} placeholder="Firstname" aria-label="Firstname" aria-invalid={!!fieldErrors.firstname} aria-describedby={fieldErrors.firstname ? "firstname-error" : undefined} className="w-full" />
                  {fieldErrors.firstname && <p id="firstname-error" className="text-red-700 text-sm mt-2">{fieldErrors.firstname}</p>}
                </div>
                <div>
                  <Input name="lastname" type="text" autoComplete="family-name" maxLength={LIMITS.name.max} value={formData.lastname} onChange={handleChange} placeholder="Lastname" aria-label="Lastname" aria-invalid={!!fieldErrors.lastname} aria-describedby={fieldErrors.lastname ? "lastname-error" : undefined} className="w-full" />
                  {fieldErrors.lastname && <p id="lastname-error" className="text-red-700 text-sm mt-2">{fieldErrors.lastname}</p>}
                </div>
                <div>
                  <Input name="email" type="email" autoComplete="email" maxLength={LIMITS.email.max} value={formData.email} onChange={handleChange} placeholder="Email address" aria-label="Email address" aria-invalid={!!fieldErrors.email} aria-describedby={fieldErrors.email ? "email-error" : undefined} className="w-full" />
                  {fieldErrors.email && <p id="email-error" className="text-red-700 text-sm mt-2">{fieldErrors.email}</p>}
                </div>
                <div>
                  <Input name="phone" type="tel" autoComplete="tel" maxLength={LIMITS.phone.max} value={formData.phone} onChange={handleChange} placeholder="Phone number (optional)" aria-label="Phone number (optional)" aria-invalid={!!fieldErrors.phone} aria-describedby={fieldErrors.phone ? "phone-error" : undefined} className="w-full" />
                  {fieldErrors.phone && <p id="phone-error" className="text-red-700 text-sm mt-2">{fieldErrors.phone}</p>}
                </div>
              </div>

              {/* honeypot: hidden from visitors, bots tend to fill it */}
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
              />

              <div>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  maxLength={LIMITS.message.max}
                  aria-label="Message" aria-invalid={!!fieldErrors.message} aria-describedby={fieldErrors.message ? "message-error" : undefined}
                  className="h-[200px]"
                  placeholder="Type your message here."
                />
                {fieldErrors.message && <p id="message-error" className="text-red-700 text-sm mt-2">{fieldErrors.message}</p>}
              </div>

              <div className="flex flex-col gap-4">
                <Button type="submit" size="md" className="max-w-40" disabled={loading}>
                  {loading ? "Sending..." : "Send message"}
                </Button>
                <p
                  role="status"
                  aria-live="polite"
                  className={status.state === "success" ? "text-accent-dark" : "text-red-700"}
                >
                  {status.message}
                </p>
              </div>

            </form>

          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index)=>{
                return <li key={index} className="flex items-center gap-6">
                  <div className="shrink-0 w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-surface border border-black/10 text-accent-dark rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-black/60">{item.title}</p>
                    <p className="text-base sm:text-xl [overflow-wrap:anywhere]">{item.description}</p>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>

    </PageFade>
  )
}

export default Contact
