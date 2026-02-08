"use client";

import React, { useState } from "react";

interface Tool {
  name: string;
  icon: string; // path in /public or full URL
}

interface Props {
  src: string | string[];           // Single image, array of images, or GIF
  staticImage?: string;             // Optional static image to show before hover (for GIFs)
  title: string;
  description: string;
  link: string;
  tools?: Tool[];                   // Row of tool icons
}

const ProjectCard = ({
  src,
  staticImage,
  title,
  description,
  link,
  tools = [],
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const isMultipleImages = Array.isArray(src) && src.length > 1;
  const hasStaticImage = staticImage !== undefined;

  // Handle hover for image carousel
  React.useEffect(() => {
    if (isHovered && isMultipleImages) {
      const interval = setInterval(() => {
        setCurrentImageIndex(
          (prev) => (prev + 1) % (src as string[]).length
        );
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
      return isHovered ? (typeof src === "string" ? src : src[0]) : staticImage;
    } else if (isMultipleImages) {
      // Multiple images carousel
      return (src as string[])[currentImageIndex];
    } else {
      // Single image
      return typeof src === "string" ? src : src[0];
    }
  };

  return (
    <div
      className="relative flex flex-col overflow-hidden rounded-3xl bg-[#0f1014] border border-white/5 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top image / GIF / carousel */}
      <div className="w-full h-48 sm:h-56 overflow-hidden">
        <img
          src={getImageToShow()}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-1 px-5 py-5 gap-4">
        <div>
          <h1 className="text-lg md:text-xl font-semibold text-white">
            {title}
          </h1>
          <p className="mt-2 text-sm text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Bottom row: tools + View Source */}
        <div className="flex items-center justify-between pt-2">
          {/* Tools icons row */}
          <div className="flex items-center gap-2 text-gray-400">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 border border-white/10"
                title={tool.name}
              >
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="h-4 w-4 object-contain"
                />
              </div>
            ))}
          </div>

          {/* View Source button */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-gray-300 hover:text-white"
          >
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/20 text-[10px]">
              {"</>"}
            </span>
            <span className="underline-offset-2 group-hover:underline">
              View Source
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
