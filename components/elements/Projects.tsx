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
    <>
      <section className="min-h-screen">
        <div>
          <div className="bg-gray-900 flex items-center justify-start flex-wrap border-1 border-yellow-500">
            <h1 className="sm:text-4xl text-[1.7rem] font-semibold title-font mb-2 text-white font-shadow tracking-[7px]">
              Things I’ve Built
            </h1>
          </div>
          <div className="grid items-center">
            <div className="bg-gray-900 py-5  my-3">
              <div className="container mx-auto">
                <div className="flex items-center justify-center bg-white">
                  <h2>React Chat Application</h2>
                </div>
                <div className="flex items-center justify-evenly flex-wrap">
                  {/* <Tilt> */}
                  <div className="max-w-">
                    <Image src={chatter} alt="lord" />
                  </div>
                  {/* </Tilt> */}
                </div>
              </div>
            </div>

            <div className="bg-gray-900 py-5  my-3">
              <div className="container mx-auto">
                <div className="flex items-center justify-center bg-white">
                  <h2>React Netflix Clone</h2>
                </div>
                <div className="flex items-center justify-evenly flex-wrap">
                  {/* <Tilt> */}
                  <div className="max-w-">
                    <Image src={netflix} alt="lord" />
                  </div>
                  {/* </Tilt> */}
                </div>
              </div>
            </div>

            <div className="bg-gray-900 py-5  my-3">
              <div className="container mx-auto">
                <div className="flex items-center justify-center bg-white">
                  <h2>Next Portfolio</h2>
                </div>
                <div className="flex items-center justify-evenly flex-wrap">
                  {/* <Tilt> */}
                  <div className="max-w-">
                    <Image src={portfolio} alt="lord" />
                  </div>
                  {/* </Tilt> */}
                </div>
              </div>
            </div>

            <div className="bg-gray-900 py-5  my-3">
              <div className="container mx-auto">
                <div className="flex items-center justify-center bg-white">
                  <h2>React Chat Application</h2>
                </div>
                <div className="flex items-center justify-evenly flex-wrap">
                  {/* <Tilt> */}
                  <div className="max-w-">
                    <Image src={chatter} alt="lord" />
                  </div>
                  {/* </Tilt> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;

// "text-white text-xl uppercase title-font font-semibold mb-2 font-shadow tracking-[4px]
// leading-relaxed text-base font-shadow tracking-[3px]"
{
  /* <h1 className="sm:text-4xl text-[1.5rem] font-semibold title-font mb-2 text-white font-shadow tracking-[7px]">
                Things I’ve Built
              </h1> */
}
