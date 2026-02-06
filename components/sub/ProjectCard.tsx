"use client";
import React, { useState, useRef } from "react";

interface Props {
  src: string | string[]; // Single GIF or array of images
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Check if src is a GIF
  const isGif = typeof src === 'string' && src.endsWith('.gif');
  const isMultipleImages = Array.isArray(src);
  
  // Handle hover for image carousel
  React.useEffect(() => {
    if (isHovered && isMultipleImages && src.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % src.length);
      }, 1500); // Change image every 1.5 seconds
      return () => clearInterval(interval);
    }
  }, [isHovered, isMultipleImages, src]);
  
  // Reset image index when hover ends
  React.useEffect(() => {
    if (!isHovered) {
      setCurrentImageIndex(0);
    }
  }, [isHovered]);

    // Control video playback on hover
    React.useEffect(() => {
          if (isGif && videoRef.current) {
                  if (isHovered) {
                            videoRef.current.play();
                          } else {
                            videoRef.current.pause();
                            videoRef.current.currentTime = 0;
                          }
                }
        }, [isHovered, isGif]);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] cursor-pointer hover:scale-105 transition-transform duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isGif && typeof src === 'string' ? (
        // For GIFs: Show static image on default, play GIF on hover using video tag
        <>
          {!isHovered ? (
            <img
              src={src}
              alt={title}
              width={1000}
              height={1000}
              className="w-full object-cover"
            />
          ) : (
            <video
              ref={videoRef}
              src={src}
              loop
              muted
              playsInline
              className="w-full object-cover"
              width={1000}
              height={1000}
            />
          )}
        </>
      ) : isMultipleImages && Array.isArray(src) ? (
        // For multiple images: Carousel effect on hover
        <div className="relative w-full h-full">
          {src.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${title} ${index + 1}`}
              width={1000}
              height={1000}
              className={`w-full object-cover transition-opacity duration-500 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
              }`}
            />
          ))}
        </div>
      ) : (
        // For single image
        <img
          src={typeof src === 'string' ? src : src[0]}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-cover"
        />
      )}

      <div className="relative p-4">
        <h1 className="text-xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-sm text-gray-300">{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
