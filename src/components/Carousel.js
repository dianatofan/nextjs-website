// src/components/Carousel.js
import React, { useState } from 'react';

const images = [
  '/images/about/art.png',
  '/images/about/me.jpg',
  '/images/about/me2.png',
  '/images/about/mountain.png',
  '/images/about/museum.png',
  '/images/about/nature.jpeg',
  '/images/about/photo.png',
  '/images/about/ride.jpg',
  '/images/about/running.png',
  '/images/about/sunset.jpg',
];

const Carousel = () => {
  const [hoveredIndex, setHoveredIndex] = useState(false);
  return (
    <div className="flex overflow-hidden w-full h-72">
      {images.map((src, index) => (
        <div
          key={index}
          className={`flex-shrink-0 transition-all duration-300 ease-in-out mx-1 ${hoveredIndex === index ? 'w-320' : 'w-24'}`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img
            src={src}
            alt={`Image ${index + 1}`}
            className="w-full h-full rounded-full hover:rounded-lg object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
