export const navMenuItems = [
  { label: "Home", path: "#home" },
  { label: "About", path: "#about" },
  { label: "Projects", path: "#projects" },
  { label: "Skills", path: "#skills" },
  { label: "Experience", path: "#experience" },
  { label: "Contact", path: "#contact" },
];

export const experiencesData = [
  {
    title: "Analyst, Frontend Developer",
    location: "Bengaluru, India",
    projectName: "Preference Center",
    description:
      "Translated wireframes and mockups into functional and visually appealing Preference Center UI using ReactJS, enabling 21 million customers to manage their communication preferences. Integrated the UI with Salesforce backend APIs, ensuring seamless data synchronization. Collaborated with Salesforce developers and QA teams to define requirements, develop features, and maintain high software quality. Delivered the project on time using Agile methodologies, reducing rework, and improving efficiency in the development lifecycle.",
    image: "/images/deloitteLogo.png",
    date: "July 2020 - Aug 2023",
    company: "Deloitte USI",
  },
  {
    title: "Analyst, Frontend Developer",
    location: "Bengaluru, India",
    projectName: "Alert Center",
    description:
      "Developed Alert Center screens using ReactJS, enabling customers to receive service and marketing alerts based on their geographical location. Integrated Alert Center UI with API endpoints exposed by the intermediary system to ensure consistent data flow and location-based alert retrieval on the portal. Facilitated client demos, achieving great client satisfaction and consistent milestone delivery.",
    image: "/images/deloitteLogo.png",
    date: "July 2021 - June 2022",
    company: "Deloitte USI",
  },
] as const;

export const projectsData = [
  {
    title: "Hive",
    description:
      "Hive is a full-stack social media platform built with Next.js, TypeScript, and PostgreSQL, offering real-time chat, notifications, and online user tracking via Socket.io and Redis. It features Clerk authentication with webhooks, automatic user creation, and an interactive post, like, and comment system. With a scalable architecture and a sleek Tailwind CSS UI, Hive delivers a seamless and engaging social experience.",
    tags: [
      "Next.js",
      "React.js",
      "Tailwind",
      "PostgreSQL",
      "Prisma",
      "Socket.io",
      "Redis",
    ],
    imageUrl: "/images/logo.png",
  },
] as const;

export const skillsData = [
  { skill: "Next.js", slug: "nextjs" },
  { skill: "React", slug: "react" },
  { skill: "Redux", slug: "redux" },
  { skill: "Tailwind", slug: "tailwind" },
  { skill: "JavaScript", slug: "js" },
  { skill: "Node.js", slug: "nodejs" },
  { skill: "Prisma", slug: "prisma" },
  { skill: "HTML", slug: "html" },
  { skill: "CSS", slug: "css" },
  { skill: "Sass", slug: "sass" },
  { skill: "Styled Components", slug: "styledcomponents" },
  { skill: "Vitest", slug: "vitest" },
  { skill: "Git", slug: "git" },
] as const;
