import { 
  web, 
  mobile, 
  backend, 
  creator, 
  sinno, 
  viettel, 
  html, 
  css, 
  javascript, 
  typescript, 
  reactjs, 
  nodejs, 
  nextjs, 
  tailwind, 
  mongodb, 
  postgre, 
  threejs, 
  docker, 
  git,
  gym,
  scic,
  chat,
} from "../assets";

const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "project", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "SOICT Innovation Club",
    icon: sinno,
    iconBg: "#383E56",
    date: "October 2024 - Now",
    points: [
      "Member of the technical team at SOICT Innovation Club (SINNO), contributing to various web development projects.",
      "Organized IT-related events, competitions, and workshops.",
      "Deployed real-world projects and developed new technologies.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Viettel Digital Talent 2025",
    icon: viettel,
    iconBg: "#FF0000",
    date: "March 2025 - July 2025",
    points: [
      "Learned foundational programming principles and techniques.",
      "Studied software development.",
      "Developed real-world projects.",
    ],
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: postgre,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const projects = [
  {
    name: "Gym Management",
    description:
      "Web-based platform designed to streamline gym operations, including equipment, staff, and membership management, while enhancing overall efficiency and user experience.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: ".net",
        color: "green-text-gradient",
      },
      {
        name: "sqlserver",
        color: "orange-text-gradient",
      },
    ],
    image: gym,
    source_code_link: "https://github.com/PhucAnh0502/IT4549-2024.2-Group29",
  },
  {
    name: "SCIC Landing Page",
    description:
      "Web application that enables users to get information about SCIC, submit a project, find team members, admin can manage teams and projects submitted.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
    ],
    image: scic,
    source_code_link: "https://scic-landing-page-fe.vercel.app/",
  },
  {
    name: "Chatting App",
    description:
      "A comprehensive travel chatting platform that allows users to communicate in real-time, add friends, create groups, and share messages seamlessly.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: ".net",
        color: "green-text-gradient",
      },
      {
        name: "sqlserver",
        color: "orange-text-gradient",
      },
    ],
    image: chat,
    source_code_link: "https://github.com/PhucAnh0502/IT4409-FE",
  },
];

export { services, navLinks, experiences, technologies, projects };