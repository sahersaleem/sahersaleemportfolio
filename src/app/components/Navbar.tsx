"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [menu, setToggleMenu] = useState(false);

  const toggleMenu = () => {
    setToggleMenu(!menu);
  };

  return (
    <div>
    <div className="flex justify-evenly w-full overflow-x-hidden p-7 bg-[#21083e] bg-none  relative z-40">
      <nav className="flex  md:justify-evenly xs:gap-28 md:gap-64 text-xl  items-center  justify-between">
        <div>
          <Link href={"/"} className="text-white text-3xl font-bold background">
            Portfolio.
          </Link>
        </div>
        <div className="flex justify-around gap-10 xs:hidden sm:hidden md:flex">
          <Link
            href={"/"}
            className=" font-semibold text-white  md:text-xl lg:text-2xl font-mono"
          >
            Home
          </Link>
          <Link
            href={"/about"}
            className=" sm:hidden md:block      font-semibold  text-white  md:text-[18px]  lg:text-2xl font-mono"
          >
            About
          </Link>
          <Link
            href={"/projects"}
            className=" sm:hidden md:block  font-semibold text-white md:text-[18px]  lg:text-2xl font-mono"
          >
            Projects
          </Link>
          <Link
            href={"/skills"}
            className=" sm:hidden md:block  font-semibold text-white  md:text-[18px]  lg:text-2xl font-mono"
          >
            Skills
          </Link>
          <Link
            href={"/contact"}
            className=" sm:hidden md:block  font-semibold text-white md:text-[18px] lg:text-2xl font-mono"
          >
            Contact
          </Link>
        </div>

        <div className="xs:block sm:block md:hidden lg:hidden">
          <button onClick={toggleMenu}>
            <FaBars className="xs:block sm:block md:hidden lg:hidden text-purple-900 text-xl" />
          </button>
        </div>
      </nav>
      </div>
      {menu && (
        <div>
          {" "}
          <div className="flex  flex-col h-[40vh] gap-10 xs:flex sm:flex md:hidden justify-center items-center relative z-40 bg-[#21083e] transform ease">
            <Link
              href={"/"}
              className=" font-semibold text-white  md:text-xl lg:text-2xl font-mono"
            >
              Home
            </Link>
            <Link
              href={"/about"}
              className="  md:block      font-semibold  text-white  md:text-[18px]  lg:text-2xl font-mono"
            >
              About
            </Link>
            <Link
              href={"/projects"}
              className="  md:block  font-semibold text-white md:text-[18px]  lg:text-2xl font-mono"
            >
              Projects
            </Link>
            <Link
              href={"/skills"}
              className="  md:block  font-semibold text-white  md:text-[18px]  lg:text-2xl font-mono"
            >
              Skills
            </Link>
            <Link
              href={"/contact"}
              className="  md:block  font-semibold text-white md:text-[18px] lg:text-2xl font-mono"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
    
  );
};

export default Navbar;
