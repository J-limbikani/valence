import React from 'react';
import styles from '../style';
import Image from 'next/image';
import Link from 'next/link';
import { NextPage } from 'next';
import ImageSlider from './ImageSlider';
import GetStarted from './GetStarted';

const Hero: NextPage = () => {
  const images = [
    '/solas.png',
    '/sola.png',
    '/solarc.png',
    '/lightt.png',
    '/upd.png',
    '/solarr.png',
    '/solarss.png',
    '/lights.png',
    '/qefqe.png',
    '/sollar.png',
    '/vall.png',
    '/pvbox.png',
    '/portablesolar.png',
    '/light.png',
    '/3kva-combo-1.png',
    '/inverter.png',
    '/inveter.png',
    '/valc.png',
  ];

  return (
    <section id="home" className="relative flex flex-col md:flex-row justify-between items-center pt-[80px] md:pt-[100px] pb-10 px-6 md:px-16 bg-primary">
      {/* Left Side Content */}
      <div className="flex-1 flex flex-col justify-center space-y-6 md:space-y-8">
        
        {/* Discount Banner */}
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-6">
          <Image
            src="/Discount.svg"  // Path to your SVG image in the public folder
            alt="discount"
            width={32}            // Set width for the image
            height={32}           // Set height for the image
            className="object-contain"
          />
          <p className={`${styles.paragraph} ml-2 text-white`}>
            <span className="font-semibold">Get</span> it done right, {" "}
            <span className="font-semibold">the first </span> time .
          </p>
        </div>

        {/* Main Heading */}
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="font-poppins font-semibold text-2xl sm:text-5xl md:text-6xl text-gradient leading-tight">
            Valence Energy <br className=" sm:block hidden" />
            <span className="text-gradient"> Solutions</span>
          </h1>
          <div className="ss:flex hidden md:mr-20 mr-0 mt-8">
            <GetStarted />
          </div>
        </div>

        {/* Subheading */}
        <h2 className="font-poppins font-semibold text-xl sm:text-3xl md:text-4xl text-white mb-4">
          Your partner in solar & electrical energy solutions.
        </h2>

        {/* Description */}
        <p className={`${styles.paragraph} max-w-[470px]`}>
        At Valence we base our services on proffesionalism and kindness with every project 
        we begin from start to finish, we’re dedicated to you and your home or business, 
        making sure that the process is smooth and never deviates from the task at hand.
        </p>

        {/* Buttons */}
        <div className="space-x-5 mt-6">
          {/* Learn More Button */}
          <Link href="/about" passHref>
            <button
              className="py-3 px-5 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none transition-all duration-300 hover:bg-blue-600"
              aria-label="Learn More"
            >
              Learn More
            </button>
          </Link>

          {/* Reach Us Button */}
          <Link href="/contact" passHref>
            <button
              className="py-3 px-5 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none transition-all duration-300 hover:bg-blue-600"
              aria-label="Reach Us"
            >
              Reach Us
            </button>
          </Link>
        </div>
      </div>

      {/* Right Side (Image Slider) */}
      <div className="flex-1 flex justify-center items-center mt-10 md:mt-0 relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] xl:h-[900px]">
        <ImageSlider images={images} />
      </div>
    </section>
  );
};

export default Hero;
