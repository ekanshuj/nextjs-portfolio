import framer from "../assets/icons/framer.svg";
import nextjs from "../assets/icons/nextjs.svg";
import sanity from "../assets/icons/sanity.svg";
import tailwind from "../assets/icons/tailwind.svg";

import chatter from "../assets/images/chatter.png";
import netflix from "../assets/images/netflix.png";
import portfolio from "../assets/images/portfolio.png";

import dots from "../assets/icons/dots.svg";

export const socials = [
  {
    name: "next",
    url: "https://nextjs.org/",
    icon: nextjs,
  },
  {
    name: "tailwindcss",
    url: "https://tailwindcss.com/",
    icon: tailwind,
  },
  {
    name: "sanity",
    url: "https://www.sanity.io/",
    icon: sanity,
  },
  {
    name: "framer",
    url: "https://www.framer.com/motion/",
    icon: framer,
  },
];

export const projects = [
  {
    name: "react chat application",
    img: chatter,
    technologies: [
      { name: "React.js" },
      { name: "Styled-Components" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "Mongodb" },
    ],
    url1: "https://github.com/ekanshuj/react-chat-application",
    url2: "#",
  },
  {
    name: "react netflix clone",
    img: netflix,
    technologies: [
      { name: "React.js" },
      { name: "Styled-Components" },
      { name: "Firebase" },
    ],
    url1: "https://github.com/ekanshuj/react-netflix-clone",
    url2: "#",
  },
  {
    name: "next portfolio",
    img: portfolio,
    technologies: [
      { name: "Next.js" },
      { name: "Tailwind" },
      { name: "Framer-Motion" },
      { name: "Sanity" },
    ],
    url1: "https://github.com/ekanshuj/nextjs-portfolio",
    url2: "#",
  },
  {
    name: "react cli",
    img: chatter,
    technologies: [
      { name: "React.js" },
      { name: "Styled-Components" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "Mongodb" },
    ],
    url1: "https://github.com/ekanshuj/react-chat-application",
    url2: "#",
  },
];

export const stuffs = [
  {
    icon: dots,
    name: "first-contributions",
    url: "https://github.com/ekanshuj/first-contributions",
    description: "Help beginners to contribute to open source projects",
    technologies: "Technologies Used",
  },
  {
    icon: dots,
    name: "youtube-ui-clone",
    url: "https://github.com/ekanshuj/youtube-ui-clone",
    description: "NO Framework pure HTML, SCSS, JS",
    technologies: "Technologies Used",
  },
  {
    icon: dots,
    name: "github-readme-stats",
    url: "https://github.com/ekanshuj/github-readme-stats",
    description: "Get dynamically generated GitHub stats on your READMEs!",
    technologies: "Technologies Used",
  },
  {
    icon: dots,
    name: "node-books",
    url: "https://github.com/ekanshuj/node-books",
    description:
      "simple rest-api structure to get started with your first mern project",
    technologies: "Technologies Used",
  },
  {
    icon: dots,
    name: "scrapper-api",
    url: "https://github.com/ekanshuj/scrapper-api",
    description: "Crawl web pages and search data using api proxy!",
    technologies: "Technologies Used",
  },
  {
    icon: dots,
    name: "react/stytch",
    url: "https://github.com/ekanshuj/react-passwordless-authentication",
    description:
      "Build simple onboarding and authentication experiences with Stytch’s flexible API and SDKs",
    technologies: "Technologies Used",
  },
  {
    icon: dots,
    name: "react-slider",
    url: "https://github.com/ekanshuj/react-slider",
    description:
      "A simple react-slider-animation using React Framer-Motion Library",
    technologies: "Technologies Used",
  },
];
