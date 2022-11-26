import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";
import { SocialIcon } from "react-social-icons";
import { projects } from "../../config/config";

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
        {/* BLUR OVER OBJECT ON RESPONSIVE <ERROR></ERROR> */}
        <div className="flex items-center justify-center flex-col container mx-auto">
          {/* DEMO STARTS <HERE></HERE> */}

          {projects.map((project, i) => {
            console.log(project.technologies);
            return (
              <div key={i} className="my-5 mx-3 sm:mx-0">
                <div className="bg-[rgba(255, 255, 255, 0.41)] shadow-xl backdrop-blur-[6.5px]">
                  <div className="flex items-center justify-center bg-white">
                    <h2 className="text-black text-xl sm:text-3xl uppercase font-black my-1 font-shadow underline tracking-[2px]">
                      {project.name}
                    </h2>
                  </div>
                  <div className="flex items-center justify-evenly flex-wrap">
                    <div>
                      <Image src={project.img} alt="lord" />
                    </div>
                  </div>
                  <div className="flex items-center justify-center flex-wrap">
                    {project.technologies.map((tech, i) => {
                      return (
                        <p
                          className=" text-black leading-relaxed text-base sm:text-lg font-bold font-shadow tracking-[3px] my-1 mx-2"
                          key={i}
                        >
                          {tech.name}
                        </p>
                      );
                    })}
                  </div>
                  <div className="flex items-center justify-center flex-wrap">
                    <SocialIcon
                      url={project.url1}
                      bgColor="transparent"
                      fgColor="gray"
                    />
                    <SocialIcon
                      url={project.url2}
                      bgColor="transparent"
                      fgColor="gray"
                      network="sharethis"
                    />
                  </div>
                </div>
              </div>
            );
          })}

          {/* DEMO ENDS <HERE></HERE> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;

// "text-white text-xl uppercase font-black mb-2 font-shadow tracking-[4px]
// leading-relaxed text-base font-shadow tracking-[3px]"
