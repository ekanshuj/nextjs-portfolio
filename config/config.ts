import framer from "../assets/icons/framer.svg";
import nextjs from "../assets/icons/nextjs.svg";
import sanity from "../assets/icons/sanity.svg";
import tailwind from "../assets/icons/tailwind.svg";

import chatter from "../assets/images/chatter.png";
import netflix from "../assets/images/netflix.png";
import portfolio from "../assets/images/portfolio.png";
import lord from "../assets/images/lord.png";

import dots from "../assets/icons/dots.svg";
import { SocialIcon } from "react-social-icons";

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
    tech: ["React.js", "Styled-Components", "Node.js", "Express", "Mongodb"],
  },
  {
    name: "react netflix clone",
    img: netflix,
    tech: ["React.js", "Styled-Components", "Firebase"],
  },
  {
    name: "next portfolio",
    img: portfolio,
    tech: ["Next.js", "Tailwind", "Framer-Motion", "Sanity"],
  },
  {
    name: "react cli",
    img: lord,
    tech: ["React.js", "Styled-Components", "Node.js", "Express", "Mongodb"],
  },
];

export const stuffs = [
  {
    icon: dots,
    name: "Flex Blogs",
    about:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est itaque tempora mollitia natus accusantium.",
    tech: ["A", "B", "C", "D"],
  },
];
