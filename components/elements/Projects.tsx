// https://codepen.io/katywellington91/pen/PoGVzwZ
// https://freefrontend.com/react-code-examples/

import React from "react";
import Tilt from "react-parallax-tilt";
import { SocialIcon } from "react-social-icons";

type Props = {};

const Projects = (props: Props) => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
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
              <Tilt className="lg:w-[60%]">
                <div className="overflow-hidden bg-cover cursor-pointer h-80 group border-2 border-yellow-400">
                  {/* <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                  </div> */}
                </div>
              </Tilt>
              <div className="sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-white text-xl uppercase title-font font-medium mb-2">
                  Nextjs - Sanity Portfolio
                </h2>
                <p className="leading-relaxed text-base">
                  <ul className="inline-flex gap-2">
                    <li>Next.js</li>
                    <li>Tailwind</li>
                    <li>Sanity.io</li>
                    <li>Framer</li>
                  </ul>
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
                <h2 className="text-white text-xl uppercase title-font font-medium mb-2">
                  React Chat Application
                </h2>
                <p className="leading-relaxed text-base">
                  <ul className="inline-flex gap-2">
                    <li>React.js</li>
                    <li>Styled-Components</li>
                    <li>Socket.io</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>Mongodb</li>
                  </ul>
                </p>
                <SocialIcon
                  url="#"
                  bgColor="transparent"
                  network="sharethis"
                  fgColor="gray"
                />
                <SocialIcon
                  url="https://github.com/ekanshuj/react-chat-application"
                  bgColor="transparent"
                  fgColor="gray"
                />
              </div>
              <Tilt className="lg:w-[50%]">
                <div className="overflow-hidden bg-cover cursor-pointer h-80 group border-2 border-yellow-400">
                  {/* <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                  </div> */}
                </div>
              </Tilt>
            </div>

            <div className="flex items-center lg:w-[90%] mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col gap-8">
              <Tilt className="lg:w-[60%]">
                <div className="overflow-hidden bg-cover cursor-pointer h-80 group border-2 border-yellow-400">
                  {/* <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                  </div> */}
                </div>
              </Tilt>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-white text-xl uppercase title-font font-medium mb-2">
                  React Netflix Clone
                </h2>
                <p className="leading-relaxed text-base">
                  <ul className="inline-flex gap-2">
                    <li>React.js</li>
                    <li>Styled-Components</li>
                    <li>API</li>
                    <li>Firebase</li>
                  </ul>
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
                <h2 className="text-white text-xl uppercase title-font font-medium mb-2">
                  Command Line Interface - CLi
                </h2>
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <SocialIcon
                  url="#"
                  bgColor="transparent"
                  network="sharethis"
                  fgColor="gray"
                />
                <SocialIcon
                  url="https://github.com/ekanshuj/react-cli"
                  bgColor="transparent"
                  fgColor="gray"
                />
              </div>
              <Tilt className="lg:w-[50%]">
                <div className="overflow-hidden bg-cover cursor-pointer h-60 group border-2 border-yellow-400">
                  {/* <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                  </div> */}
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
