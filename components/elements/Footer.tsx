import React from "react";
import Link from "next/link";
import Image from "next/image";
// import { socials } from "../../config/config";
import { SocialIcon } from "react-social-icons";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="max-w-[75rem] mx-auto flex items-center justify-between sm:flex-row flex-col">
      <div className="flex justify-center items-center">
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
        <div className="border-l-2 mx-2 px-2">
          <p>No © Copyright — Free to . . .</p>
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
    </footer>
  );
};

export default Footer;
