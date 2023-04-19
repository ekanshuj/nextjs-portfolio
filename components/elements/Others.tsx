import React from "react";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { stuffs } from "../../config/config";

type Props = {};

const Others = (props: Props) => {
  return (
    <section className="min-h-screen dark:bg-black bg-[#FFFFFF] my-5">
      <div className="flex items-center justify-center sm:justify-start flex-wrap py-3">
        <h1 className="sm:text-4xl text-[1.5rem] font-black text-white bg-gray-900 font-shadow tracking-[9px] px-4 sm:hidden text-center">
          Other Stuffs
        </h1>
        <h1 className="sm:text-4xl text-[1.7rem] font-black text-white bg-gray-900 font-shadow tracking-[9px] px-4 hidden sm:block">
          &#9679;Other Stuffs
        </h1>
      </div>
      <div className="py-5 mx-3 sm:mx-0">
        <div className="flex items-center justify-center gap-2 xl:gap-4 flex-wrap container mx-auto">
          {stuffs.map(({ icon, name, url, description }, i) => {
            return (
              <div
                key={i}
                className="border-[2.5px] rounded-xl dark:border-white border-black flex-[1_1_25.275rem] p-1"
              >
                <header className="flex items-center justify-start border-b-2 border-black dark:border-white">
                  <Image src={icon} alt="icon" className="pl-1" />
                </header>
                <article className="flex items-center justify-center flex-col flex-wrap">
                  <div className="flex items-center justify-between w-full px-1 my-3">
                    <div>
                      <h1 className="font-shadow text-2xl tracking-[2px] font-black underline">
                        {name}
                      </h1>
                    </div>
                    <div>
                      <SocialIcon
                        url={url}
                        bgColor="transparent"
                        fgColor="gray"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h1 className="text-lg px-1">{description}</h1>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Others;
