import Image from "next/image";
import React from "react";
import css from "@/../../images/css.png";
import { BackgroundGradient } from "./ui/background-gradient";
import student from "@/../../images/student.png";
import countdown from "@/../../images/countdown.jpg";
import Ticketing from "@/../../images/Ticketing.png";
import typing from "@/../../images/typing.jpg";
import currency from "@/../../images/currency.jpg";

const Card = ({text, imageUrl , href}:{text:string,imageUrl:any,href:string}) => {
  return (
    <div className="transform hover:scale-105 transition-transform duration-300100">
    <BackgroundGradient>
    <div className="  md:w-[350px] md:h-[400px]  bg-[#4d0170] flex items-center justify-center flex-col p-6 rounded-2xl gap-4 z-10  flex-shrink">
      <div className="flex justify-center items-center flex-col gap-5 ">
        <h2 className="font-mono text-xl font-bold">
          {text}
        </h2>
        <Image
          src={imageUrl}
          alt={text}
          className="w-[300px] h-auto"
        />

        <button className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            <a href={href}>
            Click here
            </a>
          </div>
        </button>
      </div>
    </div>
    </BackgroundGradient>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="w-full auto bg-[#21083e] flex lg:pt-28  sm:pt-40 flex-col items-center  justify-center pb-32 xs:overflow-x-hidden">
      <div>
        <h1 className="text-7xl text-center text-purple-300 mt-9 mb-14 background">
          My Projects
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 xs:pl-6 xs:pr-6 ">
          
          <Card text="Student Mangement System" imageUrl={student} href="https://github.com/sahersaleem/studentManagementSystem.git"/>
          <Card text="Typing Speed Tester" imageUrl={typing} href="https://github.com/sahersaleem/typingspeedchecker.git"/>
          <Card text="Ticketing application" imageUrl={Ticketing} href="https://github.com/sahersaleem/OnlineTicketingApplicationj.git"/>
          <Card text="Countdown Timer" imageUrl={countdown} href="https://github.com/sahersaleem/CountDownTimer.git"/>
          <Card text="Currency Convertor" imageUrl={currency} href="https://github.com/sahersaleem/project4_currencyexchangeCLIproject.git"/>
          <Card text="Student Mangement System" imageUrl={student} href="https://github.com/sahersaleem/studentManagementSystem.git"/>
       
        </div>
      </div>
    </div>
  );
};

export default Projects;
