"use client"
import React from 'react';

import { NextPage } from 'next';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import BackgroundImage from '../components/services/BackgroundImage';
import Services from '../components/services/Services';




const page: NextPage = () => {
  // pages/index.tsx

  return (
    <div className="relative w-full h-screen mx-auto p-2 pt-4 md:p-4 lg:p-8 text-white">
      
      <BackgroundImage />
      <Services/>
      <CTA/>
      <Footer/>
    </div>
  );
};

export default page;
