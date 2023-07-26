import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  express,
  git,
  easyname,
  webtimism,
  itsc,
  jobit,
  tripguide,
  threejs,
  mysql,
} from "../assets";

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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer - MERN Stack",
    icon: backend,
  },
  {
    title: "Backend Developer - Java",
    icon: backend,
  },
  {
    title: "Website Creator - WordPress",
    icon: backend,
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
    name: "Express JS",
    icon: express,
  },

  {
    name: "React JS",
    icon: reactjs,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },

  {
    name: "MySQL",
    icon: mysql,
  },
];

const experiences = [
  {
    title: "IT Support Agent",
    company_name: "easyname",
    icon: easyname,
    iconBg: "#E6DEDD",
    date: "April 2023 - now",
    points: [
      "Providing efficient customer support via email and telephone channels.",
      "Assisting users with various technical issues, including DNS, domains, hosting, web content, and CMS installation.",
      "Collaborating effectively with cross-functional teams, including the Development department, to resolve complex challenges.",
      "Delivering IT support services to users, ensuring prompt resolution of technical issues and maintaining seamless operations across the organization.",
    ],
  },
  {
    title: "Backoffice Assistant in IT",
    company_name: "IT-Systeme und Consulting GmbH",
    icon: itsc,
    iconBg: "#E6DEDD",
    date: "May 2020 - March 2023",
    points: [
      "Building and managing WordPress websites, ensuring their smooth functionality and up-to-date content.",
      "Establishing and taking care of the company's social media presence, overseeing regular updates and engaging with the online community.",
      "Facilitating seamless internal communications and managing back-office operations to enhance overall efficiency.",
      "Strategically planning and executing marketing initiatives, including content creation and SEO optimization, to drive brand visibility and growth.",
    ],
  },
  {
    title: "Website Creator",
    company_name: "Webtimism e.U.",
    icon: webtimism,
    iconBg: "#E6DEDD",
    date: "April 2021 - December 2023",
    points: [
      "Designing and maintaining websites using WordPress, CSS, and HTML, ensuring a seamless user experience and attractive design.",
      "Specializing in Search Engine Optimization (SEO) techniques to optimize website visibility and search engine rankings.",
      "Creating mobile-friendly websites to cater to the growing number of mobile users and enhance accessibility across devices.",
      "Implementing innovative strategies to enhance website performance and loading speed, optimizing the overall user experience and engagement.",
    ],
  },
];

const projects = [
  {
    name: "Employee Madness",
    description:
      "Web-based platform that allows you to search and manage employees and their presence. Employee data can be added, saved and edited and everything is saved in a MongoDB database.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Bootcamp API",
    description:
      "A fullstack-project with a focus on the API functionality in the backend. Bootcamps can be easily added, edited, and effectively managed for both logged-in users and the public.",
    tags: [
      {
        name: "api",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Mighty Text Adventure",
    description:
      "A fun beginner project in Java that allows the user to play a game in the console. The game is text-based and lets the user go through a map, collecting items and making decisions.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "unittesting",
        color: "green-text-gradient",
      },
      {
        name: "jvm",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
