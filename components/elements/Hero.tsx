import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";
import "react-simple-typewriter/dist/index";
import coddy from "../../assts/gifs/coddy.gif";

type Props = {};

const Hero = (props: Props) => {
  const [text] = useTypewriter({
    words: ["<>", "</>"],
    loop: 0,
  });
  return (
    <section className="flex items-center justify-center flex-col h-[90dvh]">
      <div className="flex items-center justify-center">
        <Image
          loading="lazy"
          src={coddy}
          width={400}
          height={300}
          alt="coddy"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-xl font-shadow uppercase tracking-[9.5px] font-bold">
          {text}
        </h3>
        <h1 className="sm:text-6xl text-[3.25rem] font-aso font-medium uppercase leading-[3.5rem] sm:leading-none">
          Ekanshu
        </h1>
        <h3 className="sm:text-base text-[0.75rem] font-shadow uppercase tracking-[9.5px] font-bold sm:mt-1 mb-5">
          Front-End Engineer
        </h3>
      </div>
    </section>
  );
};

export default Hero;
