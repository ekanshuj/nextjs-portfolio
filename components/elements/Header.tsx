import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Switch from "react-switch";
import { MdDarkMode } from "react-icons/md";
import { HiLightningBolt } from "react-icons/hi";

import { useTheme } from "next-themes";

type Props = {};

const Header = (props: Props) => {
  const { theme, setTheme } = useTheme();
  return (
    <header className="flex justify-between items-center px-2 py-2 sm:py-4 sm:px-2 sm:max-w-[75rem] mx-auto absolute inset-x-0 top-0">
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
          onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
          checked={theme === "dark"}
          uncheckedIcon={
            <MdDarkMode
              color="#000000"
              className="absolute top-[4px] right-[8px]"
            />
          }
          checkedIcon={
            <HiLightningBolt
              className="invert absolute top-[4px] left-[7px]"
              size={"1.1rem"}
            />
          }
          onColor="#FFE87C"
          offColor="#C8E7FF"
          height={26}
          width={52}
        />
      </motion.div>
    </header>
  );
};

export default Header;
