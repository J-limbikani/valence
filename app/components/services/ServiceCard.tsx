import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// Define the interface for the props
interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image, href }) => {
  return (
    <div className="flex flex-col items-center px-4 py-6 rounded-[20px] bg-black-gradient-2 max-w-[370px] mx-auto mb-6">
      <Image src={image} alt={title} width={300} height={200} className="rounded-md" />
      <h2 className="font-poppins font-normal text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[32px] text-dimWhite text-center mt-4">
        {title}
      </h2>
      <p className="font-poppins font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[24px] sm:leading-[28px] md:leading-[32px] text-white mt-4 text-center">
        {description}
      </p>
      <Link href={href}>
        <h3 className="text-blue-500 hover:text-blue-700 text-[14px] sm:text-[16px] md:text-[18px] text-center mt-4">
          Learn More
        </h3>
      </Link>
    </div>
  );
};

export default ServiceCard;
