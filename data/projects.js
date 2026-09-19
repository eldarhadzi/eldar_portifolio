// Work page content. Every claim here traces to a source noted beside it
// (GitHub repo contents/commits, the deployed site, or the owner's direct statement).
// A link with an empty href renders nothing (see IconLink), so unset links never show as dead buttons.
//
// Featured entry shape: slug, title, category, summary, role (required), contribution,
// stack, status, links, images. Optional: origin (how the project started, shown as a badge); images[].fit ("contain" to avoid cropping).

export const featuredProjects = [
  {
    slug: "gymmate",
    title: "GymMate",
    category: "Full-stack",
    // Summary: the repo README's own description.
    summary:
      "A platform for finding and booking personal trainers in Ankara, with online fitness programs for people who are not ready to attend a gym.",
    // Role: owner stated it was built solo. All 14 commits in the repo are by the owner.
    role: "Sole developer, full-stack",
    // Contribution: repo layout (frontend, backend, admin), dependencies, commit messages.
    contribution:
      "Built the customer frontend, the Express and MongoDB backend, and a separate admin panel. Includes JWT authentication with profile updates, Stripe payments, image uploads through Cloudinary, and a contact form.",
    stack: ["React", "React Router", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Stripe", "Cloudinary"],
    status: "Deployed demo",
    links: [
      { type: "live", label: "Live site", href: "https://gymmate-frontend.vercel.app/" },
      { type: "repo", label: "Source", href: "https://github.com/eldarhadzi/gymmate" },
    ],
    images: [{ src: "/assets/work/thumb1.png", alt: "GymMate home page" }],
  },
  {
    slug: "eoned-education",
    title: "Eoned Education",
    category: "Full-stack",
    // Summary: the repo README's own description.
    summary:
      "A course platform where professors publish courses and students follow them and track their progress.",
    // Role and origin: owner stated it started from an open tutorial and was extended.
    role: "Developer. Extended an open tutorial project",
    origin: "Built on an open tutorial project",
    // Contribution: kept to what is verified. The specific custom features are not recorded anywhere yet.
    contribution:
      "Started from an open tutorial project for a course platform and extended it with custom design and additional features. It uses React with Vite, an Express and MongoDB server, Clerk for authentication, and Stripe for payments.",
    stack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Clerk", "Stripe"],
    status: "Deployed demo",
    links: [
      { type: "live", label: "Live site", href: "https://eoned-frontend.vercel.app/" },
      { type: "repo", label: "Source", href: "https://github.com/eldarhadzi/eoned_education" },
    ],
    // The screenshot contains placeholder "Trusted by" logos from the template. They are not clients.
    images: [{ src: "/assets/work/thumb2.png", alt: "Eoned Education home page" }],
  },
  {
    slug: "vertex-banking",
    title: "Vertex Banking",
    category: "Full-stack",
    summary:
      "A banking dashboard built with Next.js and TypeScript, with account sign-up and login, transaction history and transfer pages, and Plaid and Dwolla integrations for linking banks and moving money.",
    // Role: all 5 commits in the repo are by the owner.
    role: "Sole developer",
    // Contribution: commit history, repo layout, dependencies. The last commit is
    // "Implement plaid link and dwolla. Not Working.", so that is stated plainly.
    contribution:
      "Set up the Next.js and TypeScript project, built the layout and the transaction history and payment transfer pages, added a chart of account balances, and wired up authentication with Appwrite and error monitoring with Sentry. I also added the Plaid Link and Dwolla integrations, which were not working at the last commit.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Appwrite", "Plaid", "Dwolla", "Chart.js", "Sentry"],
    status: "Unfinished. Source only, no live deployment",
    links: [
      { type: "live", label: "Live site", href: "" },
      { type: "repo", label: "Source", href: "https://github.com/eldarhadzi/vertex_banking" },
    ],
    images: [{ src: "/assets/work/thumb3.png", alt: "Vertex Banking dashboard" }],
  },
  {
    slug: "restaurantos",
    title: "RestaurantOS",
    category: "Product",
    // Summary: the Eldix site's own description (in Bosnian), and its own early-stage wording.
    summary:
      "Restaurant management software from Eldix that brings reservations, tables, staff, guests and orders into one system. It is at an early stage and has no revenue yet.",
    // Role: no team-size claim. Solo versus team has not been confirmed for this project.
    role: "Developer",
    // Contribution: stack from the private repo (Angular 20 frontend, Spring Boot 3 backend on Java 21,
    // Postgres) and features as listed on the Eldix site. The repo is private, so those features are
    // described as the site describes them, not verified in the running app.
    contribution:
      "Developed with an Angular frontend, a Spring Boot backend and a Postgres database. The Eldix site lists drag-and-drop floor plans, a QR code menu that needs no login, orders sent by table to a kitchen display, role-based staff permissions, and custom branding.",
    stack: ["Angular", "TypeScript", "Java", "Spring Boot", "PostgreSQL"],
    status: "Early stage, pre-revenue. The Eldix product site is live",
    links: [
      { type: "live", label: "Eldix site", href: "https://eldix-site.vercel.app" },
      // The restaurant-os repository is private, so there is no source link.
      { type: "repo", label: "Source", href: "" },
    ],
    images: [
      {
        src: "/assets/work/eldix.jpg",
        fit: "contain", // wide screenshot: show it whole instead of cropping to 4:3
        alt: "The Eldix product site, in Bosnian, with the headline about simplified restaurant management",
      },
    ],
  },
];

// Supporting entries are compact: no images, no contribution write-up.
export const supportingProjects = [
  {
    slug: "koloniyas",
    title: "Koloniyas",
    category: "Venture",
    // Facts (role, dates) live on the Resume page, so they are not repeated here.
    summary: "A company I co-founded. What I did there, and when, is on the Resume page.",
    links: [{ type: "internal", label: "See Experience", href: "/resume" }],
  },
  {
    slug: "eldix",
    title: "Eldix",
    category: "Venture",
    summary: "The name RestaurantOS is built and presented under. Its product site is live in Bosnian and English.",
    links: [{ type: "live", label: "Eldix site", href: "https://eldix-site.vercel.app" }],
  },
  {
    slug: "this-site",
    title: "This portfolio",
    category: "How it's built",
    summary:
      "Built with Next.js (App Router), Tailwind CSS, shadcn/ui and Framer Motion. Site and project content live in data files, separate from the components.",
    links: [
      { type: "live", label: "Live site", href: "https://eldar-hadzovic-cv.vercel.app" },
      { type: "repo", label: "Source", href: "https://github.com/eldarhadzi/eldar_portifolio" },
    ],
  },
];
