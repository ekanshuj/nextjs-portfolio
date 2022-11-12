import React from "react";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Switch from "react-switch";
import { MdDarkMode } from "react-icons/md";
import { HiLightningBolt } from "react-icons/hi";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex items-center justify-between py-[0.8rem] px-[0.5rem] w-full sm:max-w-[75rem] mx-auto">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.1 }}
        className="flex justify-center items-center"
      >
        <div className="flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-black rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          {/* <Image src={shiva} alt={"Lord Shiva"} /> */}
        </div>
        <div className="border-l-2 mx-2">
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
          {/* <SocialIcon
            url="https://hashnode.com/@ekanshuj"
            bgColor="transparent"
            fgColor="gray"
            network="hashnode"
          /> */}
          {/* <SocialIcon
            url="https://showwcase.com/ekanshuj"
            bgColor="transparent"
            fgColor="gray"
            network="showwcase"
          /> */}
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.1 }}
        className="flex justify-center items-center cursor-pointer"
      >
        {/* <p className='uppercase hidden md:inline-flex text-sm '>Send a Hi /\</p> */}
        {/* <span className='md:hidden'>
          <ReactNavbar />
        </span> */}
        <Switch
          className="mx-2"
          onChange={() => {}}
          checked={false}
          // checked
          uncheckedIcon={
            <HiLightningBolt
              color="#ffff00"
              className="absolute top-[4px] right-[8px]"
            />
          }
          checkedIcon={
            <MdDarkMode
              className="invert absolute top-[4px] left-[7px]"
              size={"1.1rem"}
            />
          }
          onColor="#000000"
          offColor="#C8E7FF"
          height={26}
          width={52}
        />
      </motion.div>
    </header>
  );
};

export default Header;
