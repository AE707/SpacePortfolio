"use client";
import Image from "next/image";

import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import { motion } from "framer-motion";
import { useState } from "react";
import { BsStars } from "react-icons/bs";
import { InView } from "react-intersection-observer";



const HeroContent = () => {
    const [isResumeOpen, setIsResumeOpen] = useState(false);
    return (
        
        <InView triggerOnce={false}>
            {({ inView, ref }) => (
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
className="
flex md:flex-row flex-col-reverse items-center justify-center
gap-5 md:gap-10 px-4 md:px-20 w-full z-20

pt-[32vh]      /* mobile only */
sm:pt-[38vh]   /* big phones */

md:pt-0 md:mt-20   /* keep desktop EXACTLY the same */
"


                >
                    <div className="h-full w-full md:w-3/6 flex flex-col gap-3 md:gap-5 justify-center text-center md:text-start">
                        {/* On mobile: heading first (order-1), then badges (order-2). On md: badges first (order-1), heading second (order-2) */}
                        <div className="flex flex-row flex-wrap items-center justify-center md:justify-start gap-2 md:gap-5 order-2 md:order-1">
                            <InView triggerOnce={false}>
                                {({ inView, ref }) => (
                                    <motion.div
                                        ref={ref}
                                        initial="hidden"
                                        animate={inView ? "visible" : "hidden"}
                                        variants={slideInFromTop}
                                        className="Welcome-box py-[8px] px-[12px] border-[1px] border-[#7042f88b] opacity-[0.9]"
                                    >
                                        <BsStars className="text-[#b49bff] mr-[0px] h-5 w-10" />
                                        <h1 className="Welcome-text text-[13px]">
                                            Game Developer
                                        </h1>
                                    </motion.div>
                                )}
                            </InView>

                            <InView triggerOnce={false}>
                                {({ inView, ref }) => (
                                    <motion.div
                                        ref={ref}
                                        initial="hidden"
                                        animate={inView ? "visible" : "hidden"}
                                        variants={slideInFromTop}
                                        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                                    >
                                        <BsStars className="text-[#b49bff] mr-[0px] h-5 w-10" />
                                        <h1 className="Welcome-text text-[13px]">
                                            Software Engineer
                                        </h1>
                                    </motion.div>
                                )}
                            </InView>
                            <InView triggerOnce={false}>
                                {({ inView, ref }) => (
                                    <motion.div
                                        ref={ref}
                                        initial="hidden"
                                        animate={inView ? "visible" : "hidden"}
                                        variants={slideInFromTop}
                                        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                                    >
                                        <BsStars className="text-[#b49bff] mr-[0px] h-5 w-10" />
                                        <h1 className="Welcome-text text-[13px]">
                                            Embedded Systems & IoT Development
                                        </h1>
                                    </motion.div>
                                )}
                            </InView>
                        </div>

                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromLeft(0.5)}
                                    className="flex flex-col gap-4 md:gap-6 text-3xl md:text-5xl font-bold text-white max-w-full md:max-w-[600px] w-auto h-auto z-20 order-1 md:order-2"

                                >
                                    <span>
                                        Coding
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                            {" "}
                                            Dreams{" "}
                                        </span>
                                        into
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                            {" "}
                                            Reality{" "}
                                        </span>
                                        one line at a time
                                    </span>
                                </motion.div>
                            )}
                        </InView>

                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromLeft(0.8)}
                                    className="text-xs md:text-sm lg:text-base text-gray-400 my-3 md:my-5 max-w-full md:max-w-[650px] px-2 z-30 list-disc list-inside order-3"
                                >
                                    <ul className="space-y-1">
                                        <li>Finalist in national engineering and coding challenges.</li>
                                        <li>Built smart prosthetics and robotics projects integrating mechanics, electronics, and software.</li>
                                        <li>Completed multiple open‑source and hackathon projects in embedded and IoT systems.</li>
                                        <li>Mentored peers on CAD, simulation, and engineering project workflows.</li>
                                    </ul>
                                </motion.div>
                            )}
                        </InView>
                        <div className="flex flex-col sm:flex-row gap-4 mt-4 items-center sm:items-start order-4">
                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.a
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    href="#about"
                                    variants={slideInFromLeft(1)}
                                    className="py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] z-40"
                                >
                                    Learn More !
                                </motion.a>
                            )}
                        </InView>
                         {/* View Résumé (open in new tab) */}
  <InView triggerOnce={false}>
    {({ inView, ref }) => (
      <motion.button
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={slideInFromLeft(0.8)}
onClick={() => setIsResumeOpen(true)}
        className="py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] z-40"
      >
        View Resume
      </motion.button>
    )}
  </InView>

  {/* Download Résumé */}
  <InView triggerOnce={false}>
    {({ inView, ref }) => (
      <motion.a
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={slideInFromLeft(1)}
        href="/AE_Resume26.pdf"
        download="Alaa_ElGhoul_Resume.pdf"
        className="py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] z-40"
      >
        Download Resume
      </motion.a>
    )}
  </InView>
  {isResumeOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    {/* Dark blurred background */}
    <div
      className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      onClick={() => setIsResumeOpen(false)}
    />

    {/* Modal content */}
    <div className="relative z-60 w-[90%] max-w-3xl h-[80vh] bg-[#050816] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
        <h2 className="text-sm md:text-base font-semibold text-white">
          Résumé
        </h2>
        <button
          onClick={() => setIsResumeOpen(false)}
          className="text-gray-400 hover:text-white text-sm px-2 py-1 rounded-md hover:bg-white/10"
        >
          Close
        </button>
      </div>

      {/* PDF viewer with scroll */}
      <div className="flex-1 overflow-auto bg-black/40">
        <iframe
          src="/AE_Resume26.pdf"
          className="w-full h-full"
          title="Resume"
        />
      </div>
    </div>
  </div>
)}

                        </div>
                        
                    </div>
                    

                    <InView triggerOnce={false}>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={slideInFromRight(0.8)}
                                className="w-full md:w-3/6 h-full hidden md:flex justify-center items-center z-40"
                            >
                                <Image
                                    src="/mainIconsdark.svg"
                                    alt="work icons"
                                    width={650}
                                    height={650}
                                    className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[550px] h-auto object-contain"
                                />
                            </motion.div>
                        )}
                    </InView>
                </motion.div>
            )}
        </InView>
        
    );
};

export default HeroContent;
