// Resume page content. Titles, dates, locations and employment types are from the CV
// (public/assets/resume/eldar-hadzovic-cv.pdf). Descriptions paraphrase the CV bullets without metrics.

export const summary = {
  paragraphs: [
    "I build software products across web, mobile, and backend systems. At Promet Bilgi Sistemleri I work on production Flutter mobile applications in a 10-member team, including API integration and Firebase Authentication.",
    "At Koloniyas I worked as a co-founder and full-stack developer, translating client business requirements into technical scope. GymMate and RestaurantOS are products I built on my own, from data model to interface. I also worked in business development at DAKAEi AI and Heritage Hotel Krone.",
  ],
  availability: "Currently available for freelance work.",
  languages: "English, Bosnian, Turkish",
};

export const experience = [
  {
    slug: "promet",
    company: "Promet Bilgi Sistemleri",
    position: "Mobile Application Developer",
    location: "Remote from Sarajevo",
    type: "Full-time",
    duration: "Feb 2026 - Present",
    current: true,
    description:
      "Mobile applications for a major Turkish telecom operator. Two production Flutter applications in a 10-member team: RESTful API and Firebase Authentication integration, performance work, and production issue fixes.",
  },
  {
    slug: "koloniyas",
    company: "Koloniyas D.o.o.",
    position: "Co-Founder & Full-Stack Developer",
    location: "Sarajevo, Bosnia and Herzegovina",
    type: "Self-employed",
    duration: "Jan 2025 - Feb 2026",
    // The company continues to operate; only the owner's own involvement ended (owner-stated).
    // The venture write-up lives on the Work page (Supporting and ventures), not here.
    description: "The company continues to operate. Only my own involvement ended.",
    links: [
      { type: "internal", label: "Venture on the Work page", href: "/work#koloniyas-title" },
      { type: "live", label: "Koloniyas site", href: "https://koloniyas.ba/" },
    ],
  },
  {
    slug: "dakaei",
    company: "DAKAEi AI",
    position: "Business Development Manager",
    location: "Ankara, Turkiye",
    type: "Part-time, hybrid",
    duration: "Dec 2024 - Jan 2026",
    description:
      "Business development for an AI startup: building partnerships, generating qualified leads, and presenting the platform at regional startup events.",
  },
  {
    slug: "heritage",
    company: "Heritage Hotel Krone",
    position: "Agency Relations Officer",
    location: "Sarajevo, Bosnia and Herzegovina",
    type: "Contract",
    duration: "Oct 2024 - Dec 2025",
    description: "Travel agency partnerships for the hotel: building agency relationships and securing new agency collaborations.",
  },
  {
    slug: "haydesoft",
    company: "HaydeSoft",
    position: "Frontend Developer",
    location: "Ankara, Turkiye",
    type: "Part-time, hybrid",
    duration: "Mar 2023 - Jun 2023",
    description:
      "Responsive UI components in HTML, CSS, JavaScript and React for a client project, and Figma designs translated into web interfaces.",
  },
  {
    slug: "simurg",
    company: "Simurg Media D.o.o.",
    position: "Undergraduate Technical Assistant",
    location: "Sarajevo, Bosnia and Herzegovina",
    type: "Part-time",
    duration: "Jan 2021 - Jun 2021",
    description:
      "Built and managed a WordPress site for a client, produced promotional materials and an advertisement video, and assisted with workstation maintenance and network installation.",
  },
];

export const education = [
  {
    institution: "Ostim Technical University",
    degree: "B.S. Software Engineering",
    duration: "Graduated Jun 2026",
    detail: "GPA 3.81/4.00",
  },
  {
    institution: "First Bosniak Gymnasium",
    degree: "Mathematics & Information Technology",
    duration: "Graduated Jun 2022",
    detail: "GPA 4.89/5.00",
  },
  {
    institution: "Bosnia Bank International",
    degree: "1st Place, BBI League of Negotiation",
    duration: "Mar 2021",
  },
];
