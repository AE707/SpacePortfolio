"use client";

import { Experiences } from "@/constants";
import { slideInFromLeft } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { InView } from "react-intersection-observer";
import ExperienceText from "../sub/ExperienceText";

const Experience = () => {
    return (
        <section
            id="experience"
            className="flex flex-col items-center justify-center gap-6 md:gap-3 px-4 h-fit relative overflow-hidden py-40"
            style={{ transform: "scale(0.9)" }}
        >
            <ExperienceText />

            <div className="flex flex-col items-center justify-center w-[95%] gap-6">
                {Experiences.map((exp, index) => (
                    <InView key={index} triggerOnce={false}>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={slideInFromLeft(0.3 + index * 0.1)}
                                className="w-full rounded-md text-white py-4 px-6 border border-[#7042f88b] hover:border-[#7042f8] opacity-90 hover:opacity-100 transition-all bg-[#10132E] bg-opacity-50 backdrop-blur-sm"
                            >
                                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                                    {/* Icon */}
                                    <div className="flex-shrink-0">
                                        <Image
                                            src={exp.icon}
                                            alt={exp.name}
                                            width={80}
                                            height={80}
                                            className="rounded-lg object-contain"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-xl md:text-2xl font-bold mb-1">
                                            {exp.name}
                                        </h3>
                                        
                                        {/* Type and Period */}
                                        <div className="flex flex-wrap items-center gap-2 mb-2">
                                            <span className="text-gray-400 text-xs md:text-sm font-medium px-2 py-1 rounded bg-[#7042f8] bg-opacity-20 border border-[#7042f8] border-opacity-30">
                                                {exp.type}
                                            </span>
                                            <span className="text-gray-400 text-xs md:text-sm">
                                                •
                                            </span>
                                            <span className="text-gray-400 text-xs md:text-sm">
                                                {exp.period}
                                            </span>
                                        </div>

                                        <p className="text-gray-300 text-sm md:text-base">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </InView>
                ))}
            </div>

            {/* Background Video */}
            <div className="hidden md:block w-full h-full absolute top-24">
                <div className="w-full h-full z-[-10] opacity-60 absolute flex items-center justify-center bg-cover">
                    <video
                        className="w-full h-auto"
                        preload="false"
                        playsInline
                        loop
                        muted
                        autoPlay
                        src="/cards-video.webm"
                    />
                </div>
            </div>
        </section>
    );
};

export default Experience;
