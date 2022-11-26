import React from "react";
import Link from "next/link";
import Image from "next/image";
// import { socials } from "../../config/config";
import { SocialIcon } from "react-social-icons";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="flex justify-center items-center flex-col px-2 sm:max-w-[75rem] mx-auto">
      <div className="flex justify-between items-center flex-col sm:flex-row w-full">
        <div className="flex justify-center items-center flex-wrap">
          <div>
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
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
            </a>
          </div>
          <div className="border-l-2 mx-2 px-0 my-2 sm:my-0 sm:px-2">
            <p className="font-shadow text-base tracking-[2px] font-semibold">
              No © Copyright — Free to . . .
            </p>
          </div>
        </div>
        <div>
          <SocialIcon
            url="#"
            bgColor="transparent"
            fgColor="gray"
            network="rss"
          />
        </div>
      </div>
      <div>
        <p className="font-shadow text-base tracking-[2px] font-semibold">
          Made with ❤️ in India 🇮🇳
        </p>
      </div>
    </footer>
  );
};

export default Footer;
