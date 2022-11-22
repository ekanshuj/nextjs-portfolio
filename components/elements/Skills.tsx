import React from "react";

type Props = {};

const Skills = (props: Props) => {
  return (
    <section className="min-h-screen bg-[#FFFFFF] my-5">
      <div>
        <div className="flex items-center justify-center sm:justify-start flex-wrap py-3">
          <h1 className="sm:text-4xl text-[1.5rem] font-black text-white bg-gray-900 font-shadow tracking-[9px] px-4 sm:hidden text-center">
            Things I’ve Been Around
          </h1>
          <h1 className="sm:text-4xl text-[1.7rem] font-black text-white bg-gray-900 font-shadow tracking-[9px] px-4 hidden sm:block">
            &#9679;Things I’ve Been Around
          </h1>
        </div>
        <div className="grid items-center">
          <div className="my-3 mx-3 sm:mx-0">
            <div className="container mx-auto">
              <div className="flex items-center justify-center">
                <p className="text-xl font-black uppercase">Skills</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
