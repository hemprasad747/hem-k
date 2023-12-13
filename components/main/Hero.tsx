// components/main/Hero.tsx
import React from "react";
import HeroContent from "../sub/HeroContent";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      {/* Replace the video with the Image component */}
      <Image
        src="/cyber6.png"  // Replace with the correct path to your image
        alt="Cyber Image"
        layout="fill"
        objectFit="cover"
        style={{ opacity: 0.5 }}  {/* Set opacity to half */}
        className="rotate-0 absolute top-[-340px] left-0 z-[1]"
      />
      <HeroContent />
    </div>
  );
};

export default Hero;
