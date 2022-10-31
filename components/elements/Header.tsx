import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Switch from "react-switch";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex items-center justify-between py-[0.8rem] px-[0.5rem] max-w-[75rem] mx-auto fixed top-0 left-0 right-0">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.1 }}
        className="flex justify-center items-center"
      >
        <SocialIcon
          url="https://linkedin.com/in/ekanshuj"
          bgColor="transparent"
          fgColor="gray"
        />
        <SocialIcon
          url="https://github.com/ekanshuj"
          bgColor="transparent"
          fgColor="gray"
        />
        <SocialIcon
          url="https://hashnode.com/@ekanshuj"
          bgColor="transparent"
          fgColor="gray"
          network="hashnode"
        />
        <SocialIcon
          url="https://showwcase.com/ekanshuj"
          bgColor="transparent"
          fgColor="gray"
          network="showwcase"
        />
        <SocialIcon
          url="#"
          bgColor="transparent"
          fgColor="gray"
          network="rss"
        />
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.1 }}
        className="flex justify-center items-center cursor-pointer"
      >
        <SocialIcon
          url="#"
          bgColor="transparent"
          fgColor="gray"
          network="mailto"
        />
        {/* <p className='uppercase hidden md:inline-flex text-sm '>Send a Hi /\</p> */}
        {/* <span className='md:hidden'>
          <ReactNavbar />
        </span> */}
        <Switch className="mx-2" onChange={() => {}} checked />
      </motion.div>
    </header>
  );
};

export default Header;
