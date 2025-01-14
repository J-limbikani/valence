"use client";
import { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // Initialize KeenSlider
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true, // Enable looping if needed
    dragSpeed: 1.5, // Optionally adjust drag speed
  });

  // Automatically move to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current?.next();
      }
    }, 3000); // 3 seconds auto-slide

    return () => clearInterval(interval); // Clear interval when the component is unmounted or slide changes
  }, [instanceRef]); // Add instanceRef to the dependency array

  useEffect(() => {
    // Only trigger effect if instanceRef.current is valid
    if (instanceRef.current) {
      instanceRef.current.moveToIdx(currentSlide); // Navigate to the currentSlide index
    }
  }, [currentSlide, instanceRef]); // Add both currentSlide and instanceRef to the dependency array

  // Handle window resize to adjust the slider
  useEffect(() => {
    const handleResize = () => {
      if (instanceRef.current) {
        instanceRef.current.update(); // Recalculate the slider on window resize
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [instanceRef]); // Add instanceRef to the dependency array

  return (
    <div ref={sliderRef} className="keen-slider relative w-full h-full">
      {/* Map through the images and create a slide for each */}
      {images.map((image, index) => (
        <div
          key={index}
          className="keen-slider__slide w-full h-full flex items-center justify-center"
        >
          <div className="slider-image-container">
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              className="slider-image"
              width={1920}    // Define width
              height={1080}   // Define height
              priority        // Optionally load images as priority for better performance
            />
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      {loaded && instanceRef.current && (
        <div className="absolute top-1/2 left-0 right-0 z-10 flex justify-between w-full px-4">
          <button
            onClick={(e) => {
              e.stopPropagation(); // Stop event propagation
              instanceRef.current?.prev(); // Go to the previous slide
            }}
            className="arrow left text-white bg-black bg-opacity-50 hover:bg-opacity-75 p-4 rounded-full"
          >
            &lt;
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation(); // Stop event propagation
              instanceRef.current?.next(); // Go to the next slide
            }}
            className="arrow right text-white bg-black bg-opacity-50 hover:bg-opacity-75 p-4 rounded-full"
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
