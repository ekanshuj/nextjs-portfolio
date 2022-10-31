import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";
import "react-simple-typewriter/dist/index";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import { particles } from '../../Particles/Particles'
import yup from "../../assets/gifs/yup.gif";

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
      <motion.div
        className="gif"
        initial={{ y: -1000, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Image src={yup} width={300} height={300} />
      </motion.div>
      {/* <canvas id='canvas' className='bg-[#2c343f] w-full h-max'></canvas> */}
      {/* <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particles}
        /> */}
      <motion.div className="flex flex-col items-center justify-around">
        <motion.div className="flex flex-col items-center justify-center">
          <h3 className="text-xl font-shadow uppercase tracking-[9.5px] font-bold mt-1 mb-5">
            {text}
          </h3>
          <h1 className="text-6xl mx-3 font-aso font-medium uppercase">
            Ekanshu
          </h1>
          <h3 className="text-base font-shadow uppercase tracking-[9.5px] font-bold mt-1 mb-5">
            Front-End Engineer
          </h3>
          <motion.div
            className="w-full"
            initial={{ y: 500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <button className="w-full bg-[#09363F] border-2 border-black text-white px-5 py-[0.6rem] text-[1.35rem] tracking-[0.7rem] duration-[0.2s] ">
              RESUME
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
