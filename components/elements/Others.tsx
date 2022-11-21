import React from "react";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";

import dots from "../../assets/icons/dots.svg";

type Props = {};

const Others = (props: Props) => {
  return (
    <section className="min-h-screen bg-[#FFFFFF] my-5">
      <div className="flex items-center justify-center sm:justify-start flex-wrap py-3">
        <h1 className="sm:text-4xl text-[1.5rem] font-black text-white bg-gray-900 font-shadow tracking-[9px] px-4 sm:hidden text-center">
          Other Stuffs
        </h1>
        <h1 className="sm:text-4xl text-[1.7rem] font-black text-white bg-gray-900 font-shadow tracking-[9px] px-4 hidden sm:block">
          &#9679;Other Stuffs
        </h1>
      </div>
      <div className="my-3 mx-3 sm:mx-0">
        <div className="flex items-center justify-center gap-2 flex-wrap container mx-auto">
          <div className="border-[2.5px] rounded-2xl border-black w-[25.625rem] p-1">
            <header className="flex items-center justify-start border-b-2 border-black">
              <Image src={dots} alt="icon" />
            </header>
            <article className="flex items-center justify-center flex-col">
              <div className="flex items-center justify-between w-full px-1 my-3">
                <div>
                  <h1 className="font-shadow text-lg tracking-[2px] font-semibold">
                    Flex Blogs
                  </h1>
                </div>
                <div>
                  <SocialIcon
                    url="https://github.com/ekanshuj/flex-blogs"
                    bgColor="transparent"
                    fgColor="gray"
                  />
                </div>
              </div>
              <div>
                <h1>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
                  itaque tempora mollitia natus accusantium.
                </h1>
              </div>
            </article>
            <footer>
              <p>Technologies Used</p>
            </footer>
          </div>

          <div className="border-[2.5px] rounded-2xl border-black w-[25.625rem] p-1">
            <header className="flex items-center justify-start border-b-2 border-black">
              <Image src={dots} alt="icon" />
            </header>
            <article className="flex items-center justify-center flex-col">
              <div className="flex items-center justify-between w-full px-1 my-3">
                <div>
                  <h1 className="font-shadow text-lg tracking-[2px] font-semibold">
                    Flex Blogs
                  </h1>
                </div>
                <div>
                  <SocialIcon
                    url="https://github.com/ekanshuj/flex-blogs"
                    bgColor="transparent"
                    fgColor="gray"
                  />
                </div>
              </div>
              <div>
                <h1>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
                  itaque tempora mollitia natus accusantium.
                </h1>
              </div>
            </article>
            <footer>
              <p>Technologies Used</p>
            </footer>
          </div>

          <div className="border-[2.5px] rounded-2xl border-black w-[25.625rem] p-1">
            <header className="flex items-center justify-start border-b-2 border-black">
              <Image src={dots} alt="icon" />
            </header>
            <article className="flex items-center justify-center flex-col">
              <div className="flex items-center justify-between w-full px-1 my-3">
                <div>
                  <h1 className="font-shadow text-lg tracking-[2px] font-semibold">
                    Flex Blogs
                  </h1>
                </div>
                <div>
                  <SocialIcon
                    url="https://github.com/ekanshuj/flex-blogs"
                    bgColor="transparent"
                    fgColor="gray"
                  />
                </div>
              </div>
              <div>
                <h1>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
                  itaque tempora mollitia natus accusantium.
                </h1>
              </div>
            </article>
            <footer>
              <p>Technologies Used</p>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Others;
