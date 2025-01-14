import React from 'react';
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import Image from 'next/image';

interface FeatureCardProps {
  icon: string;       // Path to the icon image (could be a string or StaticImageData if using Next.js Image)
  title: string;      // Title of the feature
  content: string;    // Content description of the feature
  index: number;      // Index to differentiate between feature cards
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[44px] h-[44px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      {/* Add width and height here */}
      <Image 
        src={icon} 
        alt="icon" 
        width={24}      // Set the width you need
        height={24}     // Set the height you need
        className="object-contain"
      />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} text-center sm:text-left`}>
        You do the business, <br className="sm:block hidden" /> we’ll handle
        all your energy needs.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Whether its for residential, commercial/industrial, agricultural or 
        transportation and infrastructure. Valence got you covered, 
        We offer a wide range of packages, that have been crafted and designed to bootstrap 
        you, giving you light of what exactly you need.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
