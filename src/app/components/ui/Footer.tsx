import React from 'react'
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import Link from 'next/link';
const Footer = () => {
  return (
    <div className='w-full h-[40vh] bg-[#1f073a] flex sm:flex-row xs:flex-col justify-between p-11 xs:overflow-x-hidden'>
        <div className='xs:order-2 lg:order-3'>
          <Link href={"/"} className="text-gray-400 text-3xl font-bold background">Portfolio.</Link>
          <p className='background mt-11'>All right reserved | @Saher Saleem</p>
        </div>
        
 <div className='flex flex-col gap-2 md:flex xs:hidden'>
          <Link
            href={"/"}
            className=" font-light text-gray-400 hover:text-white md:text-lg lg:text-xl font-mono"
          >
            Home
          </Link>
          <Link
            href={"/about"}
            className=" sm:hidden md:block    hover:text-white   font-light  text-gray-400 md:text-lg lg:text-xl font-mono"
          >
            About
          </Link>
          <Link
            href={"/projects"}
            className=" sm:hidden md:block   hover:text-whitefont-light text-gray-400 md:text-lg lg:text-xl font-mono"
          >
            Projects
          </Link>
          <Link
            href={"/skills"}
            className=" sm:hidden md:block  hover:text-white font-light text-gray-400 md:text-lg lg:text-xl font-mono"
          >
            Skills
          </Link>
          <Link
            href={"/contact"}
            className=" sm:hidden md:block hover:text-white font-light text-gray-400 md:text-lg lg:text-xl font-mono"
          >
            Contact
          </Link>
        </div>

    <div className="flex xs:flex-col gap-4 xs:order-1 sm:order-2">
      <h1 className='text-white'>Get in touch</h1>
      <div className='flex sm:flex-row xs:flex-row xs:gap-7'>
          <FaYoutube className="xs:text-[14px] md:text-[24px] text-white"/>
          <FaLinkedin className="xs:text-[14px] md:text-[24px] text-white"/>
          <FaTwitter className="xs:text-[14px] md:text-[24px] text-white"/>
          <FaDiscord className="xs:text-[14px] md:text-[24px] text-white"/>
          </div>
 </div>



    </div>
  )
}

export default Footer
