import {

  // icons for - about me 
  mobile,
  backend,
  creator,
  web,

  // icons for - tech
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  figma,
  python,
  tensorflow,

  // icons for - experience
  fdm,
  technine,
  imbee,
  wmc,
  hkstp,

  // icons for - projects
  project_floor_plan,
  bicycle,
  tripguide,
  pytorch,
} from "../assets";


// Add Navigation links here
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

// Add Cards details here
const services = [
  {
    title: "AI Application \n (LLM, Gen-AI)",
    icon: web,
  },
  {
    title: "Full-Stack \n Development",
    icon: mobile,
  },
  {
    title: "Software Engineering",
    icon: backend,
  },

  {
    title: "Innovator",
    icon: creator,
  },
];

// Add Technology ball details here
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

// Add Experience details here
const experiences = [
  {
    title: "Software Engineer - IT Consultant",
    company_name: "FDM GROUP",
    icon: fdm,
    iconBg: "#383E56",
    date: "July 2024 - now",
    points: [

    ],
  },
  {
    title: "Programmer",
    company_name: "Technine  Limited",
    icon: technine,
    iconBg: "#383E56",
    date: "Dec 2023 - Feb 2024",
    points: [


    ],
  },
  {
    title: "Frontend Engineer",
    company_name: "imBee Limited",
    icon: imbee,
    iconBg: "#E6DEDD",
    date: "Jul 2023 - Aug 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "IT Developer",
    company_name: "Wealth Management Cube Limited",
    icon: wmc,
    iconBg: "#383E56",
    date: "Dec 2022 - Feb 2023",
    points: [
      "Developed an end-to-end funds search engine, web-based application,",
      "for searching complex fund combinations which reduced 80% of the clients' investment procedures",
      "Utilized HTML, Bootstrap, JavaScript, MySQL, and WordPress",
      "Developed web scrapers and pipelines with database operations to automate the fund data collection streamline, utilized Python and Selenium"
    ],
  },
  {
    title: "Junior Software Developer",
    company_name: "Hong Kong Science and Technology Parks",
    icon: hkstp,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Aug 2021",
    points: [
      "Constructed an end-to-end AI application, floor plan recognizer to automate the process of floor plan modeling.",
      "Simplified 90% of manual floor plan modeling for the smart office system with 89% prediction accuracy",
      "Utilized Python, TensorFlow, OpenCV, Pandas, and Scikit-Learn"

    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

// Add Project details here
const projects = [
  {
    name: "HKSTP - 2D Floor Plan Recognizor",
    description:
      "2D-floor-plan-Recognizor is a web-based application that allows users to import a 2D floor plan image and automatically generate a 3D model of the floor plan.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "green-text-gradient",
      },
      {
        name: "Image Segmentation",
        color: "pink-text-gradient",
      },
    ],
    image: project_floor_plan,
    source_code_link: "https://github.com/tommyNg0530/2D-floor-plan-Recognition-2021",
  },
  {
    name: "I-Bike",
    description:
      "",
    tags: [
      {
        name: "C Programming",
        color: "blue-text-gradient",
      },
      {
        name: "Arduino",
        color: "green-text-gradient",
      },
      {
        name: "IoT",
        color: "orange-text-gradient",
      },
      {
        name: "Embedded Systems",
        color: "pink-text-gradient",
      },
    ],
    image: bicycle,
    source_code_link: "https://github.com/tommyNg0530/I-Bike",
  },
];

export { services, technologies, experiences, testimonials, projects };
