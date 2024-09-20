import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import Image from "next/image";
import gitl from "@/../../images/gitl.png";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Link from "next/link";

const Hero = () => {
  const para= `I am a web developer specializing in HTML, CSS, TypeScript, and Tailwind CSS. Currently learning React and Next.js to create dynamic, responsive web applications.
`;

 
  const words2 = [
    {
      text: "Hello",
    },
    {
      text: "I",
    },
    {
      text: " am",
    },

    {
      text: "Saher Saleem ..",
    },
  ];
  

  return (
    <div className="w-full bg-[#21083e] h-[screen] overflow-x-hidden flex justify-center items-center sm:gap-5 xl:gap-48 flex-row xs:flex-col sm:flex-col xl:flex-row pl-7 pr-7 md:pb-20">
      <Spotlight className="-top-90 -left-0 " fill="purple" />
        <Spotlight className="top-20 -left-0 " fill="pink" />
        <Spotlight className="top-80 -left-0 " fill="purple" />
      <div className="flex flex-col lg:w-[700px] h-auto justify-center items-center xs:order-2 xl:order-1">
        

        <div className="mb-5 flex justify-center items-center flex-col xl:mt-40  ">
          <TypewriterEffectSmooth words={words2} className="font-mono  -ml-200" />
          {/* <TypewriterEffectSmooth words={words3} /> */}
          {/* <TypewriterEffectSmooth words={words} /> */}
         <TextGenerateEffect words={para} className="font-mono font-thin  xs:text-[16px]sm:text-lg md:text-xl lg:text-2xl -mt-9 text-wrap xs:text-center text-justify"/>
          <div className="flex gap-12  mt-10 ml-0">
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="xs:px-4 xs:py-2 md:px-8 md:py-2 bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              Hire me
            </div>
          </button>
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="xs:px-4 xs:py-2 md:px-8 md:py-2 bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            <Link href="/about" className="xs:text-sm lg:text-base">About me</Link>
            </div>
          </button>
          </div>
        </div>
      </div>
      <div className="xs:order-1 xl:order-2">
        <Image
          src="https://img.freepik.com/premium-photo/support-office-woman-generate-ai_98402-7714.jpg"
          width={350}
          height={350}
          alt="jndj"
          className="rounded-full  lg:h-[350px] lg:w-[350px] object-cover object-center shadow-purple mt-20 xs:w-[200px] xs:h-[200px] sm:w-[270px] sm:h-[270px] md:w-[300px] md:h-[300px]  "
        />
      </div>
    </div>
  );
};

export default Hero;
