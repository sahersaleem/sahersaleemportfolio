import React from "react";
import { TextRevealCard } from "./ui/text-reveal-card";
const About = () => {
  return (
    <div className="w-full h-[100vh] xs:h-[auto] bg-[#21083e] flex justify-center items-center xs:flex-col lg:flex-row pt-28">
    <div className="flex gap-36 p-9 items-center justify-between xs:flex-col lg:flex-row">
    <div className="xs:order-2 lg:order-1 xs:hidden sm:block">
      <TextRevealCard className="text-[100px]"
        text="I Understand Life Sciences"
        revealText="I’m Crafting Digital Experiences"
      />
      </div>
      <div className="sm:w-[500px] xs:w-[320px] h-auto xs:order-1 lg:order-2 flex justify-center items-center flex-col">
        <h1 className="text-6xl  text-center text-purple-300 font-sans mb-4 background">About me</h1>
        <p className="xs:text[0.8rem] sm:text-[1.4rem] font-mono  text-wrap text-justify ">
          Hey there! I’m Saher Saleem, an ambitious 18-year-old web developer
          from Karachi, Pakistan. After completing my studies in biology, I
          discovered my passion for technology and haven’t looked back. With
          expertise in HTML, CSS, JavaScript, TypeScript, React, and Next.js, I
          create modern, responsive websites that captivate users. I believe in
          leveraging the latest technologies to drive success. Currently, I’m
          focusing on deepening my knowledge of React and Next.js to enhance my
          ability to deliver high-quality web solutions. Let’s collaborate and
          transform your ideas into reality!
        </p>
      </div>
     
    </div>
    </div>
  );
};

export default About;
