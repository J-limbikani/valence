"use client"
import React, { useState } from "react";
import Image from "next/image";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const [imgError, setImgError] = useState(false)

  // Define the image paths for the menu and close icons
  const menu = "/menu.svg";  // Path to your 'menu' icon
  const close = "/close.svg"; // Path to your 'close' icon

  return (
    <nav className="text-white right-0 z-50 h-14 w-full flex py-6 px-8 fixed top-0 bg-transparent backdrop-blur-sm sm:py-4 justify-between items-center navbar">
      {/* Logo Image */}
      <Image
        src={imgError ? '/logo-fallback.png' : '/Logo.png'} // Switch to fallback image if error occurs
        alt="valence"
        width={60}
        height={6}
        onError={() => setImgError(true)} // Handle image loading error
        style={{
          objectFit: 'fill', // Ensures the logo fills the circle without distortion
        }}
      />

      {/* Navigation Links */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.href}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? " " : " "
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`${nav.href}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image
          src={toggle ? close : menu} // Toggle between 'close' and 'menu' based on the state
          alt="menu"
          width={28}  // Set width for the icon
          height={28} // Set height for the icon
          className="object-contain"
          onClick={() => setToggle(!toggle)} // Toggle the state on click
        />

        {/* Mobile Sidebar */}
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.href}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? " " : " "
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`${nav.href}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
