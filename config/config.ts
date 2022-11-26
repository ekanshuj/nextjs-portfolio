import framer from "../assets/icons/framer.svg";
import nextjs from "../assets/icons/nextjs.svg";
import sanity from "../assets/icons/sanity.svg";
import tailwind from "../assets/icons/tailwind.svg";

import chatter from "../assets/images/chatter.png";
import netflix from "../assets/images/netflix.png";
import portfolio from "../assets/images/portfolio.png";
import lord from "../assets/images/lord.jpg";

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
      // "React.js",
      // "Styled-Components",
      // "Node.js",
      // "Express",
      // "Mongodb",
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
      // "React.js",
      //  "Styled-Components",
      //   "Firebase",
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
      //   "Next.js",
      //  "Tailwind",
      //  "Framer-Motion",
      //  "Sanity",
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
      // "React.js",
      // "Styled-Components",
      // "Node.js",
      // "Express",
      // "Mongodb",
    ],
    url1: "https://github.com/ekanshuj/react-chat-application",
    url2: "#",
  },
];

export const stuffs = [
  {
    icon: dots,
    name: "Flex Blogs",
    about:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est itaque tempora mollitia natus accusantium.",
    technologies: ["A", "B", "C", "D"],
  },
];
