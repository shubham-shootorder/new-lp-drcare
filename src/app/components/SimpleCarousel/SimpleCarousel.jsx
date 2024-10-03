"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";

const SimpleCarousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3 seconds interval

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  return (
    <div className="carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-slide ${
            index === currentIndex ? "active" : ""
          }`}
        >
          {index === 1 ? (
            <div className="carousel-content-right">
              <Image
                src={slide.imageSrc}
                alt={slide.altText}
                width={300}
                height={300}
                objectFit="contain"
              />
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          ) : (
            <div className="carousel-content">
              <h1>{slide.title}</h1>
              <h2>{slide.subtitle}</h2>
              <p>{slide.description}</p>
            </div>
          )}
          <Image
            src={slide.backgroundImage}
            alt={slide.altText}
            layout="fill"
            objectFit="cover"
            className="carousel-image"
          />
        </div>
      ))}
    </div>
  );
};

export default SimpleCarousel;
