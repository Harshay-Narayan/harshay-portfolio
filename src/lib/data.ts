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
    title: "Frontend Engineer",
    location: "Noida, India",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    image: "/images/wavenest.png",
    date: "2023 - Present",
    company: "Wavenest Technology",
  },
  {
    title: "Analyst, Frontend Developer",
    location: "Bangalore, India",
    description:
      "Collaborated with CTO and CIO to improve frontend of the web application. Worked with UI designer to implement design changes and improve app performance. Developed innovative solutions to complex front-end challenges. Delivered high-quality work on time and within budget. Demonstrated strong communication and collaboration skills with cross-functional teams",
    image: "/images/deloitteLogo.png",
    date: "2020 - 2023",
    company: "Deloitte USI",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: "/images/logo.png",
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: "/images/logo.png",
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: "/images/logo.png",
  },
] as const;

export const skillsData = [
  { skill: "HTML", slug: "html" },
  { skill: "CSS", slug: "css" },
  { skill: "JavaScript", slug: "js" },
  { skill: "React", slug: "react" },
  { skill: "Redux", slug: "redux" },
  { skill: "Sass", slug: "sass" },
  { skill: "Styled Components", slug: "styledcomponents" },
  { skill: "Tailwind", slug: "tailwind" },
  { skill: "Next.js", slug: "nextjs" },
  { skill: "Prisma", slug: "prisma" },
  { skill: "Node.js", slug: "nodejs" },
  { skill: "Vitest", slug: "vitest" },
  { skill: "Jest", slug: "jest" },
  { skill: "NPM", slug: "npm" },
  { skill: "Git", slug: "git" },
  { skill: "Github", slug: "github" },
] as const;
