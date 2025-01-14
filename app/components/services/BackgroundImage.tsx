// components/BackgroundImage.tsx
import React from 'react';

const BackgroundImage: React.FC = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url(/Slar.webp)',  // Path to the image in the public folder
        backgroundPosition: 'center',
        backgroundSize: 'cover', // Ensure the image fully covers the background
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
        <div className="text-center text-gradient">
          <h1 className="text-2xl font-bold">The possibilities are beyond your imaginations</h1>
          <p className="text-xl mt-4">Harness the power of solar energy.</p>
        </div>
      </div>
    </div>
  );
};

export default BackgroundImage;
