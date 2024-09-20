import React from "react";
import { Progress } from "@nextui-org/progress";
import Image from "next/image";
import about from "@/../../images/about.webp"
const Skills = () => {
  return (
    <div className="w-full h-auto xs:pb-5 bg-[#21083e] flex xs:flex-col lg:flex-row gap-32 lg:pt-32 xs:pt-52 justify-center items-center xs:overflow-hidden">
        <div className="w-[800px]">
      <h1 className="text-7xl text-center text-purple-300 background md:pb-5 xs:pb-7">Skills</h1>

      <div className="flex items-center justify-center flex-col gap-10">
        <Progress
        label="HTML"
          aria-label="Loading..."
          value={100}
          color="secondary"
          className="lg:max-w-md xs:w-[200px] sm:w-[300px]"
        />
        <Progress
        label="CSS"
          aria-label="Loading..."
          value={90}
          color="secondary"
          className="lg:max-w-md xs:w-[200px] sm:w-[300px]"
        />
        <Progress
        label="JAVASCRIPT"
          aria-label="Loading..."
          value={50}
          color="secondary"
         className="lg:max-w-md xs:w-[200px] sm:w-[300px]"
        />
        <Progress
        label="TYPESCRIPT"
          aria-label="Loading..."
          value={20}
          color="secondary"
          className="lg:max-w-md xs:w-[200px] sm:w-[300px]"
        />
        <Progress
        label="Reactjs"
          aria-label="Loading..."
          value={70}
          color="secondary"
         className="lg:max-w-md xs:w-[200px] sm:w-[300px]"
        />
        <Progress
        label="NextJS"
          aria-label="Loading..."
          value={100}
          color="secondary"
       className="lg:max-w-md xs:w-[200px] sm:w-[300px]"
        />
        <Progress
        label="TailwindCss"
          aria-label="Loading..."
          value={90}
          color="secondary"
          className="lg:max-w-md xs:w-[200px] sm:w-[300px]"
        />
      </div>
      </div>
      <div className="flex justify-center items-center"><Image src={about} alt="skills" className="md:w-[400px] md:h-[400px] xs:w-[200px] xs:h-[200px] rounded-full object-cover ovj"/></div>
    </div>
  );
};

export default Skills;
