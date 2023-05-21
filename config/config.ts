import chatter from "../assts/images/chatter.png";
import netflix from "../assts/images/netflix.png";
import ecom from "../assts/images/ecom.png";

import dots from "../assts/icons/dots.svg";

export const projects = [
  {
    name: "chatter",
    img: chatter,
    technologies: [
      { name: "ReactJs" },
      { name: "Styled-Components" },
      { name: "NodeJs" },
      { name: "Express" },
      { name: "Mongodb" },
    ],
    url1: "https://github.com/ekanshuj/react-chat-application",
    url2: "https://chatter-ekanshuj.netlify.app/",
  },
  {
    name: "react netflix",
    img: netflix,
    technologies: [
      { name: "ReactJs" },
      { name: "Styled-Components" },
      { name: "Firebase" },
    ],
    url1: "https://github.com/ekanshuj/react-netflix-clone",
    url2: "https://react-netflix-ekanshuj.web.app",
  },
  {
    name: "ecom",
    img: ecom,
    technologies: [
      { name: "NextJs" },
      { name: "TailwindCSS" },
      { name: "Stripe" },
    ],
    url1: "https://github.com/ekanshuj/ecom",
    url2: "https://ecom-ekanshuj.vercel.app/",
  },
];

export const stuffs = [
  {
    icon: dots,
    name: "first-contributions",
    url: "https://github.com/ekanshuj/first-contributions",
    description:
      "First Contributions is a beginner-friendly GitHub repository that provides a step-by-step guide for making your first contribution to an open-source project and can be used to showcase your involvement in the open-source community on your portfolio website.cd",
  },
  {
    icon: dots,
    name: "url-shortener",
    url: "https://github.com/ekanshuj/url-shortener",
    description:
      "A React.js application that allows users to shorten long URLs into shorter, more manageable links and uses a API serviceto do so, allowing users to copy them to their clipboard.",
  },
  {
    icon: dots,
    name: "oaiig",
    url: "https://github.com/ekanshuj/oaiig",
    description:
      "Open AI Image Generator is a web application that leverages the OpenAI DALL-E 2 API to generate images based on user-defined prompts using AI.",
  },
  {
    icon: dots,
    name: "scrapper-api",
    url: "https://github.com/ekanshuj/scrapper-api",
    description:
      "A web server Proxy API to crawl web pages over the internet with a simple API call for a variety of purposes, such as data mining, data analysis, or data visualization.",
  },
  {
    icon: dots,
    name: "react-stytch",
    url: "https://github.com/ekanshuj/react-passwordless-authentication",
    description:
      "Passwordless Authentication in react. Stytch's API and SDKs help you deliver secure, intuitive auth your customers will love, with tools your team will thank you for.",
  },
];
