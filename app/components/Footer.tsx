"use client";
import React from "react";
import styles from "../style";
import {  socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright © Valence. All Rights Reserved
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <a
            key={social.id}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-white text-[24px] cursor-pointer hover:text-secondary ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
          >
            {social.icon} {/* Render the icon directly */}
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
