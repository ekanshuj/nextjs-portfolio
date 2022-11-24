import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/css.svg";
import javascript from "../../assets/icons/javascript.svg";
import bootstrap from "../../assets/icons/bootstrap.svg";
import sass from "../../assets/icons/sass.svg";
import tailwind from "../../assets/icons/tailwind.svg";
import reactjs from "../../assets/icons/reactjs.svg";
import json from "../../assets/icons/json.svg";
import nodejs from "../../assets/icons/nodejs.svg";
import mongodb from "../../assets/icons/mongodb.svg";
import git from "../../assets/icons/git.svg";
import github from "../../assets/icons/github.svg";
import framer from "../../assets/icons/framer.svg";
import nextjs from "../../assets/icons/nextjs.svg";
import sanity from "../../assets/icons/sanity.svg";
import twilio from "../../assets/icons/twilio.svg";
import vercel from "../../assets/icons/vercel.svg";
import vscode from "../../assets/icons/vscode.svg";
import zip from "../../assets/icons/zip.svg";
import figma from "../../assets/icons/figma.svg";
css;

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
        {/* https://darkmodejs.learn.uno/ */}
        {/* https://www.tawk.to/ */}
        <div className="my-3 mx-3 sm:mx-0">
          <div className="flex items-center justify-center flex-wrap container mx-auto gap-2 xl:gap-4">
            <motion.div>
              <Image src={html} alt="html" width={100} height={100} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
