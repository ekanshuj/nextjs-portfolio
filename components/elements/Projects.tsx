import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";
import { SocialIcon } from "react-social-icons";
import { projects } from "../../config/config";

type Props = {};

const Projects = (props: Props) => {
  return (
    <section className="min-h-screen dark:bg-black bg-[#FFFFFF] my-5">
      <div>
        <div className="flex items-center justify-center sm:justify-start flex-wrap py-3">
          <h1 className="text-xl sm:text-4xl font-black text-white bg-gray-900 font-shadow tracking-[9px] px-4 sm:hidden text-center">
            Things I’ve Built
          </h1>
          <h1 className="text-xl sm:text-4xl font-black text-white bg-gray-900 font-shadow tracking-[9px] px-4 hidden sm:block">
            &#9679;Things I’ve Built
          </h1>
        </div>
        <div className="flex items-center justify-center flex-col container mx-auto">
          {projects.map(({ name, img, technologies, url1, url2 }, i) => {
            return (
              <div key={i} className="my-5 mx-3 sm:mx-0">
                <div className="bg-[rgba(255, 255, 255, 0.41)] shadow-xl backdrop-blur-[6.5px]">
                  <div className="flex items-center justify-center bg-white dark:bg-black">
                    <h2 className="text-black dark:text-white text-xl sm:text-3xl uppercase font-black my-1 font-shadow underline tracking-[2px]">
                      {name}
                    </h2>
                  </div>
                  <div className="flex items-center justify-evenly flex-wrap">
                    <div>
                      <Image loading="lazy" src={img} alt="projects" />
                    </div>
                  </div>
                  <div className="flex items-center justify-center flex-wrap">
                    {technologies.map(({ name }, i) => {
                      return (
                        <p
                          className=" text-black dark:text-white leading-relaxed text-[0.85rem] sm:text-lg font-bold font-shadow tracking-[3px] my-[0.125rem] px-2"
                          key={i}
                        >
                          {name}
                        </p>
                      );
                    })}
                  </div>
                  <div className="flex items-center justify-center flex-wrap">
                    <SocialIcon
                      url={url1}
                      bgColor="transparent"
                      fgColor="gray"
                    />
                    <SocialIcon
                      target="_blank"
                      url={url2}
                      bgColor="transparent"
                      fgColor="gray"
                      network="sharethis"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
