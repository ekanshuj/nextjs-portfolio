import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";
import "react-simple-typewriter/dist/index";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import { particles } from '../../Particles/Particles'
import coddy from "../../assets/gifs/coddy.gif";

type Props = {};

const Hero = (props: Props) => {
  const [text] = useTypewriter({
    words: ["<>", "</>"],
    loop: 0,
  });
  // const particlesInit = useCallback(async (engine) => {
  //   await loadFull(engine);
  // }, []);

  // const particlesLoaded = useCallback(async (container) => {
  //   await console.log(container);
  // }, []);

  // const [text, count] = useTypewriter({
  //   words: ["Hello", "I"],
  //   loop: true,
  //   typeSpeed: 70,
  //   deleteSpeed: 50,
  //   delaySpeed: 1000
  // });

  return (
    <section className="flex items-center justify-center flex-col h-screen">
      <div className="flex items-center justify-center flex-col">
        <motion.div>
          <Image src={coddy} width={400} height={300} alt={"coddy"} priority />
        </motion.div>

        <motion.div className="flex flex-col items-center justify-around">
          <motion.div className="flex flex-col items-center justify-center">
            <h3 className="text-xl font-shadow uppercase tracking-[9.5px] font-bold">
              {text}
            </h3>
            <h1 className="sm:text-6xl text-[3.25rem] font-aso font-medium uppercase leading-[3.5rem] sm:leading-none">
              Ekanshu
            </h1>
            <h3 className="sm:text-base text-[0.75rem] font-shadow uppercase tracking-[9.5px] font-bold sm:mt-1 mb-5">
              Front-End Engineer
            </h3>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
