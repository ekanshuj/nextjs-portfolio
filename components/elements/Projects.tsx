import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";
import { SocialIcon } from "react-social-icons";

import lord from "../../assets/Images/lord.jpg";

type Props = {};

const Projects = (props: Props) => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="w-full px-6 py-10 mx-auto">
          <div className="flex flex-wrap w-full mb-10">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-4xl text-3xl font-semibold title-font mb-2 text-white font-shadow tracking-[7px]">
                Things I’ve Built
              </h1>
              <div className="h-1 w-28 bg-indigo-500 rounded"></div>
            </div>
          </div>

          <div className="container px-5 mx-auto text-white">
            <div className="flex items-center lg:w-[90%] mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col gap-8">
              <Tilt>
                <div className="overflow-hidden bg-cover cursor-pointer h-80 group">
                  <Image src={lord} alt={"lord"} className="max-w-xl" />
                </div>
              </Tilt>
              <div className="sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-white text-xl uppercase title-font font-semibold mb-2 font-shadow tracking-[4px]">
                  Nextjs - Sanity Portfolio
                </h2>
                <p className="leading-relaxed text-base font-shadow tracking-[3px] space-x-2">
                  <span>Next.js</span>
                  <span>Tailwind</span>
                  <span>Sanity.io</span>
                  <span>Framer</span>
                </p>
                <SocialIcon
                  url="#"
                  network="sharethis"
                  bgColor="transparent"
                  fgColor="gray"
                />
                <SocialIcon
                  url="https://github.com/ekanshuj/nextjs-portfolio"
                  bgColor="transparent"
                  fgColor="gray"
                />
              </div>
            </div>

            <div className="flex items-center lg:w-[90%] mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col gap-8">
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-white text-xl uppercase title-font font-semibold mb-2 font-shadow tracking-[4px]">
                  React Chat Application
                </h2>
                <p className="leading-relaxed text-base font-shadow tracking-[3px] space-x-2">
                  <span>React.js</span>
                  <span>Socket.io</span>
                  <span>Express</span>
                  <span>Node.js</span>
                  <span>Mongodb</span>
                  <span>Styled-Components</span>
                </p>
                <SocialIcon
                  url="https://github.com/ekanshuj/react-chat-application"
                  bgColor="transparent"
                  fgColor="gray"
                />
                <SocialIcon
                  url="#"
                  bgColor="transparent"
                  network="sharethis"
                  fgColor="gray"
                />
              </div>
              <Tilt>
                <div className="overflow-hidden bg-cover cursor-pointer h-60">
                  <Image src={lord} alt={"lord"} className="max-w-sm" />
                </div>
              </Tilt>
            </div>

            <div className="flex items-center lg:w-[90%] mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col gap-8">
              <Tilt>
                <div className="overflow-hidden bg-cover cursor-pointer h-80">
                  <Image src={lord} alt={"lord"} className="max-w-xl" />
                </div>
              </Tilt>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-white text-xl uppercase title-font font-semibold mb-2 font-shadow tracking-[4px]">
                  React Netflix Clone
                </h2>
                <p className="leading-relaxed text-base font-shadow tracking-[3px] space-x-2">
                  <span>React.js</span>
                  <span>Firebase</span>
                  <span>API</span>
                  <span>Styled-Components</span>
                </p>
                <SocialIcon
                  url="#"
                  network="sharethis"
                  bgColor="transparent"
                  fgColor="gray"
                />
                <SocialIcon
                  url="https://github.com/ekanshuj/react-netflix-clone"
                  bgColor="transparent"
                  fgColor="gray"
                />
              </div>
            </div>

            <div className="flex items-center lg:w-[90%] mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col gap-8">
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-white text-xl uppercase title-font font-semibold mb-2 font-shadow tracking-[4px]">
                  Command Line Interface - CLi
                </h2>
                <p className="leading-relaxed text-base font-shadow tracking-[3px]">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <SocialIcon
                  url="https://github.com/ekanshuj/react-cli"
                  bgColor="transparent"
                  fgColor="gray"
                />
                <SocialIcon
                  url="#"
                  bgColor="transparent"
                  network="sharethis"
                  fgColor="gray"
                />
              </div>
              <Tilt>
                <div className="overflow-hidden bg-cover cursor-pointer h-60">
                  <Image src={lord} alt={"lord"} className="max-w-[30rem]" />
                </div>
              </Tilt>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
