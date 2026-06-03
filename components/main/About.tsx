"use client";

import { slideInFromBottom, slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

const About = () => {
    return (
        <section
            id="about"
            className="flex flex-col relative items-center justify-start w-full py-20 md:py-32 px-4"

        >
            {/* Title - in flow */}
            <div className="w-full flex justify-center z-[5]">
                <InView triggerOnce={true}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromTop}
                            className="text-[28px] sm:text-[32px] md:text-[40px] pt-8 md:pt-12 pb-4 md:pb-6 font-medium text-center text-gray-200 z-50"
                        >
                            About
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                {" "}
                                Me{" "}
                            </span>
                        </motion.div>
                    )}
                </InView>
            </div>

            {/* Content - flow-based, no fixed top */}
            <div className="flex flex-col items-center w-full max-w-2xl mt-4 md:mt-8 gap-4 md:gap-6 z-[20]">
                <InView triggerOnce={true}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromLeft(0.5)}
                            className="relative flex flex-col items-center w-auto h-auto rounded-full overflow-visible"
                        >
{/* RESPONSIVE AVATAR + VIDEO WRAPPER */}
<div className="relative flex items-center justify-center 
                w-[clamp(260px,75vw,750px)] 
">

   
{/* VIDEO HALO */}
<div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden rounded-full">
    <video
        loop
        muted
        autoPlay
        playsInline
        preload="auto"
        src="/encryption.webm"
        className="
            w-full h-full object-contain opacity-70
            scale-[1.7]      /* mobile */
            sm:scale-[1.5]   /* tablet */
            md:scale-[4]   /* desktop */
            lg:scale-[2.4]   /* large screens */
        "
    />
</div>


    {/* AVATAR */}
    <div className="relative z-10 rounded-full overflow-hidden 
                    border-[5px] sm:border-[6px] 
                    border-[#7042f88b] 
                    bg-gradient-to-r from-purple-500 to-cyan-500">
        <img
            src="/AE.jpeg"
            alt="profile"
            className="
                w-[120px] 
                sm:w-[160px] 
                md:w-[210px] 
                lg:w-[250px]
            "
        />
    </div>

</div>


                        </motion.div>
                    )}
                </InView>

                <InView triggerOnce={true}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromRight(0.5)}
                            className="Welcome-box px-[15px] py-[8px] z-[20] my-2 border border-[#7042f88b] opacity-[0.9]"
                        >
                            <h1 className="Welcome-text text-base sm:text-lg md:text-[20px] font-bold">
                                Alaa ElGhoul
                            </h1>
                        </motion.div>
                    )}
                </InView>

                <InView triggerOnce={true}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromBottom}
                            className="Welcome-box px-4 sm:px-[15px] w-[90%] md:w-3/4 py-4 md:py-[20px] z-[20] mb-4 border border-[#7042f88b] opacity-[0.9]"
                        >
                            <h1 className="Welcome-text text-sm sm:text-base w-full text-justify">
AI Specialist and automation engineer with hands-on experience building LLM-powered applications, n8n automation
pipelines, and Claude/OpenAI API-integrated products. My work spans prompt engineering, AI-driven UI development
in React, and end-to-end workflow automation with a consistent focus on output quality and clean architecture.
Background: Computer Engineer. System Architect. Clean architecture, deterministic systems, production-ready code.
If it ships, it has to work well
                            </h1>
                        </motion.div>
                    )}
                </InView>
            </div>

            {/* Footer tagline - in flow */}
            <div className="mt-8 md:mt-12 px-2 z-[20]">
                <div className="cursive text-base sm:text-lg md:text-[20px] font-medium text-center text-gray-300">
                    Shaping Tomorrow with Code and Creativity
                </div>
            </div>

        </section>
    );
};

export default About;
