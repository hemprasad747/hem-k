import React from "react";
import HeroContent from "../sub/HeroContent";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <div className="relative">
        <Image
          src="/cyber6.png"  
          alt="Cyber Image"
          layout="fill"
          objectFit="cover"
          className="rotate-0 absolute top-[-340px] left-0 z-[1]"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <HeroContent />
    </div>
  );
};

export default Hero;
