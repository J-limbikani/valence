// components/HeroSection.js
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'auto', // Remove the full viewport height and allow the content to take natural space
        minHeight: '50vh', // Ensure a minimum height of 50% of the viewport height
        backgroundColor: 'inherit', // Inherit background color from root
        margin: '0', // Remove any margin for seamless transition
        color: '#fff', // Set text color to white (for any text within the section)
        padding: '20px', // Add padding to make sure the content doesn't stick to the edges
      }}
    >
      {/* Circle-cropped logo with inherited background */}
      <div
        style={{
          borderRadius: '50%', // Makes the image a circle
          overflow: 'hidden', // Ensures content is confined to the circle
          width: '250px', // Adjust the logo size to make it smaller
          height: '250px', // Maintain a perfect circle
        }}
      >
        <Image
          src="/Valence_Logo_2.png"
          alt="Logo"
          width={250} // Adjust width and height to fit the circle
          height={250}
          layout="intrinsic" // Automatically sizes based on aspect ratio
          style={{
            objectFit: 'cover', // Ensures the logo fills the circle without distortion
          }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
