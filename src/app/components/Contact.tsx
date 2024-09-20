"use client";

import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
const Contact = () => {
  return (
    <div className="h-screen w-full pt-28 bg-[#21083e]">
      <h1 className="text-5xl  text-center text-purple-300 font-sans mb-10 background">
        Contact me
      </h1>

      <div className="flex items-center justify-center flex-shrink">
        <BackgroundGradient>
          <div className=" xs:w-[300px]  xs:h-[350px] sm:w-[400px] sm:h-[500px] bg-[#4d0170] flex items-center justify-center flex-col p-6 rounded-2xl gap-4 xs:pr-6 xs:pl-6 lg:p-6">
            <input
              type="text"
              placeholder="Enter your username"
              required
              className="w-full p-2 rounded-lg text-black"
            />
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full p-2 rounded-lg text-black"
            />
            <textarea
              cols={34}
              rows={8}
              placeholder="Enter text here"
              className="w-full p-2 rounded-lg text-black"
            />
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                Submit
              </div>
            </button>
          </div>
        </BackgroundGradient>
      </div>
    </div>
  );
};

export default Contact;
