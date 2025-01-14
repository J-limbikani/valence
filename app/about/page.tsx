"use client"
import React from 'react';
import { NextPage } from 'next';
import HeroSection from '../components/about/HeroSection';
import AboutSection from '../components/about/AboutSection';
import Footer from '../components/Footer';


const page: NextPage = () => {
  // pages/index.tsx

  return (
    <div className="relative w-full h-screen mx-auto p-2 pt-4 md:p-4 lg:p-8 text-white">
      <HeroSection/>
      <AboutSection/>
      <Footer/>
    </div>
  );
};

export default page;