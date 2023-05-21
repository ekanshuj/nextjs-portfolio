import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { useTheme } from "next-themes";

type Props = {};

const Footer = (props: Props) => {
  const { theme } = useTheme();
  return (
    <footer className="flex justify-center items-center flex-col px-2 sm:max-w-[75rem] mx-auto">
      {/* <div
        className={`flex justify-between items-center flex-col sm:flex-row flex-wrap w-full border-x-2 ${
          theme === "dark" ? "border-white" : "border-black"
        }`}
      >
        <div className=" px-0 sm:my-0 sm:px-2">
          <p className="font-shadow text-base sm:text-[1.1rem] tracking-[2px] font-semibold text-center">
            No © Copyright — Free to . . .
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className={`w-11 h-11 ${
            theme === "dark" ? "text-white" : "text-black"
          } p-2`}
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
      </div> */}
      <div className="pt-4 sm:pt-2">
        <p className="font-shadow text-base sm:text-xl tracking-[2px] font-semibold">
          Made with ❤️ in India 🇮🇳
        </p>
      </div>
    </footer>
  );
};

export default Footer;
