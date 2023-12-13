// Import statements...
import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import { FaFileDownload } from "react-icons/fa"; // Import the download icon

const Navbar = () => {
  const resumeUrl = "/Hemprasad.pdf"; // Replace with the actual path

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/hem4.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Hem prasad
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#Extraskills" className="cursor-pointer">
              Summary
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <a
              href={social.url}
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
              />
            </a>
          ))}

          {/* Download Resume Button */}
          <a
            href={resumeUrl}
            download="HemPrasad_Resume.pdf"
            className="cursor-pointer flex items-center text-gray-200 hover:text-white bg-gradient-to-r from-purple-500 to-cyan-500 p-1 rounded-md transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500"
          >
            <FaFileDownload className="mr-1" />
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
