import Link from 'next/link';  // Import Link from Next.js
import styles from "../style";
import Image from 'next/image';

const GetStarted = () => (
  <Link href="/contact" passHref>
    <div 
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer transform transition-all duration-300 hover:scale-105`}
    >
      <div className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}>
        <div className={`${styles.flexCenter} flex-col space-y-2`}>
          <div className="flex items-center space-x-2">
            <p className="font-poppins font-semibold text-[16px] leading-[24px] text-white">
              <span className="text-gradient">Get</span>
            </p>
            
            {/* Directly reference the image from public folder */}
            <Image 
              src="/arrow-up.svg"  // Path relative to the public folder
              alt="arrow-up" 
              width={23} 
              height={23} 
              className="object-contain" 
            />
          </div>
          
          <p className="font-poppins font-semibold text-[16px] leading-[24px] text-white">
            <span className="text-gradient">Started</span>
          </p>
        </div>
      </div>
    </div>
  </Link>
);

export default GetStarted;
