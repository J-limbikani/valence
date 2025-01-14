"use client";
import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  return (
    <div className="mx-auto p-4 pt-8 lg:p-8 text-white">
      <h1 className="text-gradient text-center text-4xl font-bold mb-4">Our Services</h1>
      <p className="text-center text-lg mb-8">
        Here are some of our listed services.
      </p>
      
      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
        <ServiceCard
          title="Solar panel installation"
          description="Expert installation of solar panels for residential and commercial properties."
          image="/val4.jpg"
          href="/contact"
        />
        <ServiceCard
          title="Energy audits"
          description="Comprehensive energy audits to optimize your energy efficiency."
          image="/audit.jpg"
          href="/contact"
        />
        <ServiceCard
          title="Maintenance and Repair"
          description="Reliable solar and electrical maintenance or repair and upgrading for your business or homes."
          image="/repair.jpg"
          href="/contact"
        />
        <ServiceCard
          title="Equipment Supply"
          description="Perhaps all you need is equipment, We provide cutting edge equipment for solar an electrical solutions."
          image="/Scr.jpg"
          href="/contact"
        />
        <ServiceCard
          title="Professional Contractor"
          description="Expert installation, maintanance, and repair services for 
          solar and electrical systems, ensuring high-quality workmanship and customer satisfaction."
          image="/contract.jpg"
          href="/contact"
        />
        <ServiceCard
          title="Solar system design"
          description="Custom design of solar systems for home or industrial applications."
          image="/design.jpg"
          href="/contact"
        />
      </div>
    </div>
  );
};

export default Services;
