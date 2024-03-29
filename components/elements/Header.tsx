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
    <header className="flex justify-between items-center px-2 sm:px-2 max-w-6xl mx-auto h-[10dvh]">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.3 }}
        className="flex justify-center items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className={`w-11 h-11 ${
            theme === "dark" ? "text-gray-400" : "text-black"
          } p-2`}
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <SocialIcon
          url="https://linkedin.com/in/ekanshuj"
          bgColor="transparent"
          fgColor={theme === "dark" ? "gray" : "#111827"}
          className={`border-l-2 ${
            theme === "dark" ? "border-white" : "border-black"
          }`}
          style={{ height: "3rem", width: "3rem" }}
        />
        <SocialIcon
          url="https://github.com/ekanshuj"
          bgColor="transparent"
          fgColor={theme === "dark" ? "gray" : "#111827"}
          style={{ height: "3rem", width: "3rem" }}
        />
        <SocialIcon
          url="mailto:contact@ekanshuin.tech"
          bgColor="transparent"
          network="mailto"
          fgColor={theme === "dark" ? "gray" : "#111827"}
          style={{ height: "3.5rem", width: "3.5rem" }}
        />
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.1 }}
        className="flex justify-center items-center cursor-pointer"
      >
        <Switch
          className="mx-2"
          onChange={() => setTheme(theme === "light" ? "dark" : "light")}
          checked={theme === "dark" ? true : false}
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
