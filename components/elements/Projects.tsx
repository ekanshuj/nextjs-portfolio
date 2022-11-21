import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";
import { SocialIcon } from "react-social-icons";

import chatter from "../../assets/Images/chatter.png";
import netflix from "../../assets/Images/netflix.png";
import portfolio from "../../assets/Images/portfolio.png";

type Props = {};

const Projects = (props: Props) => {
  return (
    <section className="min-h-screen bg-[#FFFFFF] my-5">
      <div>
        <div className="flex items-center justify-center sm:justify-start flex-wrap py-3">
          <h1 className="sm:text-4xl text-[1.5rem] font-black text-white bg-gray-900 font-shadow tracking-[9px] px-4 sm:hidden text-center">
            Things I’ve Built
          </h1>
          <h1 className="sm:text-4xl text-[1.7rem] font-black text-white bg-gray-900 font-shadow tracking-[9px] px-4 hidden sm:block">
            &#9679;Things I’ve Built
          </h1>
        </div>
        <div className="grid items-center">
          <div className="my-3 mx-3 sm:mx-0">
            <div className="container mx-auto bg-[rgba(255, 255, 255, 0.41)] shadow-xl backdrop-blur-[6.5px]">
              <div className="flex items-center justify-center bg-white">
                <h2 className="text-black text-xl sm:text-3xl uppercase font-black my-1 font-shadow underline tracking-[2px]">
                  React Chat Application
                </h2>
              </div>
              <div className="flex items-center justify-evenly flex-wrap">
                {/* <Tilt> */}
                <div>
                  <Image src={chatter} alt="lord" />
                </div>
                {/* </Tilt> */}
              </div>
              <div className="flex items-center justify-center">
                <h2 className=" text-black leading-relaxed text-base sm:text-lg font-bold font-shadow tracking-[3px] my-1 text-center">
                  React.js | Styled-Components | Node.js | Express | Mongodb
                </h2>
              </div>
              <div className="flex items-center justify-center flex-wrap">
                <SocialIcon
                  url="https://github.com/ekanshuj/react-chat-application"
                  bgColor="transparent"
                  fgColor="gray"
                />
                <SocialIcon
                  url="#"
                  bgColor="transparent"
                  fgColor="gray"
                  network="sharethis"
                />
              </div>
            </div>
          </div>

          <div className="my-3 mx-3 sm:mx-0">
            <div className="container mx-auto bg-[rgba(255, 255, 255, 0.41)] shadow-xl backdrop-blur-[6.5px]">
              <div className="flex items-center justify-center bg-white">
                <h2 className="text-black text-xl sm:text-3xl uppercase font-black my-1 font-shadow underline tracking-[2px]">
                  React Netflix Clone
                </h2>
              </div>
              <div className="flex items-center justify-evenly flex-wrap">
                {/* <Tilt> */}
                <div className="max-w-">
                  <Image src={netflix} alt="lord" />
                </div>
                {/* </Tilt> */}
              </div>
              <div className="flex items-center justify-center bg-white">
                <h2 className=" text-black leading-relaxed text-base sm:text-lg font-bold font-shadow tracking-[3px] my-1 text-center">
                  React.js | Styled-Components | Firebase
                </h2>
              </div>
              <div className="flex items-center justify-center flex-wrap">
                <SocialIcon
                  url="https://github.com/ekanshuj/react-netflix-clone"
                  bgColor="transparent"
                  fgColor="gray"
                />
                <SocialIcon
                  url="#"
                  bgColor="transparent"
                  fgColor="gray"
                  network="sharethis"
                />
              </div>
            </div>
          </div>

          <div className="my-3 mx-3 sm:mx-0">
            <div className="container mx-auto bg-[rgba(255, 255, 255, 0.41)] shadow-xl backdrop-blur-[6.5px]">
              <div className="flex items-center justify-center bg-white">
                <h2 className="text-black text-xl sm:text-3xl uppercase font-black my-1 font-shadow underline tracking-[2px]">
                  Next Portfolio
                </h2>
              </div>
              <div className="flex items-center justify-evenly flex-wrap">
                {/* <Tilt> */}
                <div className="max-w-">
                  <Image src={portfolio} alt="lord" />
                </div>
                {/* </Tilt> */}
              </div>
              <div className="flex items-center justify-center bg-white">
                <h2 className=" text-black leading-relaxed text-base sm:text-lg font-bold font-shadow tracking-[3px] my-1 text-center">
                  Next.js | Tailwind | Framer-Motion
                </h2>
              </div>
              <div className="flex items-center justify-center flex-wrap">
                <SocialIcon
                  url="https://github.com/ekanshuj/nextjs-portfolio"
                  bgColor="transparent"
                  fgColor="gray"
                />
                <SocialIcon
                  url="#"
                  bgColor="transparent"
                  fgColor="gray"
                  network="sharethis"
                />
              </div>
            </div>
          </div>

          <div className="my-3 mx-3 sm:mx-0">
            <div className="container mx-auto bg-[rgba(255, 255, 255, 0.41)] shadow-xl backdrop-blur-[6.5px]">
              <div className="flex items-center justify-center bg-white">
                <h2 className="text-black text-xl sm:text-3xl uppercase font-black my-1 font-shadow underline tracking-[2px]">
                  React Chat Application
                </h2>
              </div>
              <div className="flex items-center justify-evenly flex-wrap">
                {/* <Tilt> */}
                <div className="max-w-">
                  <Image src={chatter} alt="lord" />
                </div>
                {/* </Tilt> */}
              </div>
              <div className="flex items-center justify-center bg-white">
                <h2 className=" text-black leading-relaxed text-base sm:text-lg font-bold font-shadow tracking-[3px] my-1 text-center">
                  Technologies
                </h2>
              </div>
              <div className="flex items-center justify-center flex-wrap">
                <SocialIcon
                  url="https://github.com/ekanshuj/react-chat-application"
                  bgColor="transparent"
                  fgColor="gray"
                />
                <SocialIcon
                  url="#"
                  bgColor="transparent"
                  fgColor="gray"
                  network="sharethis"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

// "text-white text-xl uppercase font-black mb-2 font-shadow tracking-[4px]
// leading-relaxed text-base font-shadow tracking-[3px]"
