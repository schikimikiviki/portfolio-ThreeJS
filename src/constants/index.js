import {
  backend,
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
  employeeMadness,
  threejs,
  spring,
  wordpress,
  tomcat,
  postgre,
  phpmyadmin,
  devcamperBootcamp,
  coolNote
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
    name: "spring", 
    icon: spring
  }, 
  {
    name:"wordpress", 
    icon: wordpress
  },
  // {
  //   name:"tomcat",
  //   icon: tomcat
  // },
  // {
  //   name: "postgresql", 
  //   icon: postgre
  // },
  //   {
  //   name: "phpmyadmin", 
  //   icon: phpmyadmin
  // }


];



const experiences = [
  {
    title: "IT Support Agent",
    company_name: "easyname",
    icon: easyname,
    iconBg: "#E6DEDD",
    date: "April 2023 - now",
    points: [
      "Providing customer support via email and telephone channels.",
      "Assisting users with various technical issues, including DNS, domains, hosting, e-mails, and CMS installation.",
      "Collaborating with cross-functional teams, including the development department to resolve complex challenges.",
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
      "Planning and executing marketing initiatives, including content creation and SEO optimization, to drive brand visibility and growth.",
    ],
  },
  {
    title: "Website Creator",
    company_name: "Webtimism e.U.",
    icon: webtimism,
    iconBg: "#E6DEDD",
    date: "April 2021 - December 2023",
    points: [
      "Designing and maintaining websites using WordPress, CSS, HTML and JS, ensuring a seamless user experience and attractive design.",
      "Specializing in Search Engine Optimization (SEO) techniques to optimize website visibility and search engine rankings.",
      "Creating mobile-friendly websites for the growing number of mobile users and enhance accessibility across devices.",
      
    ],
  },
];

const projects = [
  {
    name: "Employee Madness",
    description:
      "Web app that allows you to search and manage employees and their presence. Employee data can be added, saved and edited and everything is saved in a MongoDB database.",
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
    image: employeeMadness,
    source_code_link: "https://github.com/schikimikiviki/Employee-fullstack",
  },
  {
    name: "Bootcamp API",
    description:
      "A Express.js project deployed on a Linux VPS with a focus on the API functionality in the backend. Bootcamps can be managed for logged-in users and the public.",
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
    image: devcamperBootcamp,
    source_code_link: "https://github.com/schikimikiviki/Bootcamp-API",
  },
  {
    name: "Coolnote",
    description:
      "A CRUD fullstack project that allows the user to manage notes. The frontend is made with React, the backend is Java and Spring Boot. The notes get saved into a PostgreSQL database.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: coolNote,
    source_code_link:
      "https://github.com/schikimikiviki/cool-note-application",
  },
];

export { services, technologies, experiences, projects };
