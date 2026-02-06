"use client";
import React, { useState } from "react";

interface Props {
  src: string | string[]; // Single image, array of images, or GIF
  staticImage?: string; // Optional static image to show before hover (for GIFs)
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ src, staticImage, title, description, link }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const isMultipleImages = Array.isArray(src) && src.length > 1;
  const hasStaticImage = staticImage !== undefined;
  
  // Handle hover for image carousel
  React.useEffect(() => {
    if (isHovered && isMultipleImages) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % (src as string[]).length);
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

  // Determine which image to show
  const getImageToShow = () => {
    if (hasStaticImage) {
      // If has static image and GIF, swap on hover
      return isHovered ? (typeof src === 'string' ? src : src[0]) : staticImage;
    } else if (isMultipleImages) {
      // Multiple images carousel
      return (src as string[])[currentImageIndex];
    } else {
      // Single image
      return typeof src === 'string' ? src : src[0];
    }
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] cursor-pointer hover:scale-105 transition-transform duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={getImageToShow()}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-cover"
      />

      <div className="relative p-4">
        <h1 className="text-xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-sm text-gray-300">{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
