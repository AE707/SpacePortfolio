"use client";


import { HeroSkills } from "@/constants";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import { motion } from "framer-motion";
import { BsStars } from "react-icons/bs";
import { InView } from "react-intersection-observer";

const HeroContent = () => {
    return (
        <InView triggerOnce={false}>
            {({ inView, ref }) => (
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="flex md:flex-row flex-col-reverse items-center justify-center gap-10 md:gap-0 md:px-20 px-5 mt-20 w-full z-20"
                >
                    <div className="h-full w-full md:w-3/6 flex flex-col gap-5 justify-center text-start">
                        <div className="hidden md:flex flex-row items-center md:gap-5 gap-1">
                            <InView triggerOnce={false}>
                                {({ inView, ref }) => (
                                    <motion.div
                                        ref={ref}
                                        initial="hidden"
                                        animate={inView ? "visible" : "hidden"}
                                        variants={slideInFromTop}
                                        className="Welcome-box py-[8px] px-[12px] border-[1px] border-[#7042f88b] opacity-[0.9]"
                                    >
                                        <BsStars className="text-[#b49bff] mr-[10px] h-5 w-10" />
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
                                        <BsStars className="text-[#b49bff] mr-[10px] h-5 w-10" />
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
                                        <BsStars className="text-[#b49bff] mr-[10px] h-5 w-10" />
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
                                    className="flex flex-col gap-6 mt-6 md:text-5xl text-4xl font-bold text-white max-w-[600px] w-auto h-auto z-20"
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
                                    className="text-sm md:text-md text-gray-400 my-5 max-w-[650px] z-30"
                                >
                                    <li>
                                        Finalist in national engineering and coding challenges.
                                    </li>
                                    <li>
                                        Built smart prosthetics and robotics projects integrating mechanics, electronics, and software.
                                    </li>
                                    <li>
                                        Completed multiple open‑source and hackathon projects in embedded and IoT systems.
                                    </li>
                                    <li>
                                        Mentored peers on CAD, simulation, and engineering project workflows.
                                    </li>
                                </motion.div>
                            )}
                        </InView>
                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.a
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    href="#about"
                                    variants={slideInFromLeft(1)}
                                    className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] z-40"
                                >
                                    Learn More!
                                </motion.a>
                            )}
                        </InView>
                    </div>

                    <InView triggerOnce={false}>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={slideInFromRight(0.8)}
                                className="w-full md:w-3/6 h-full flex justify-center items-center z-40"
                            >
<motion.div
  ref={ref}
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
  variants={slideInFromRight(0.8)}
  className="w-full md:w-3/6 h-full flex justify-center items-center z-40"
>
  {/* Background grid lines (decorative) */}
  <div className="absolute inset-0 opacity-20">
    <svg width="100%" height="100%" className="absolute">
      {/* Horizontal lines */}
      {[0, 1, 2, 3].map((i) => (
        <line
          key={`h-${i}`}
          x1="0"
          y1={`${i * 25}%`}
          x2="100%"
          y2={`${i * 25}%`}
          stroke="rgba(120, 119, 198, 0.3)"
          strokeWidth="1"
        />
      ))}
      {/* Vertical lines */}
      {[0, 1, 2, 3].map((i) => (
        <line
          key={`v-${i}`}
          x1={`${i * 33.33}%`}
          y1="0"
          x2={`${i * 33.33}%`}
          y2="100%"
          stroke="rgba(120, 119, 198, 0.3)"
          strokeWidth="1"
        />
      ))}
    </svg>
  </div>

  {/* Icon grid - matches original 3x3 layout */}
  <div className="grid grid-cols-3 gap-8 p-10 relative z-10">
    {HeroSkills.map((skill, index) => (
      <motion.div
        key={skill.name}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          delay: 0.8 + index * 0.1,
          type: "spring",
          stiffness: 100 
        }}
        className="flex items-center justify-center bg-[#10132E] bg-opacity-50 backdrop-blur-sm rounded-lg p-4 border border-[#7042f88b] hover:border-[#7042f8] transition-all"
      >
<img
  src={skill.icon}
  alt={skill.name}
  width={65}
  height={65}
  className="object-contain"
/>

      </motion.div>
    ))}
  </div>
</motion.div>
                            </motion.div>
                        )}
                    </InView>
                </motion.div>
            )}
        </InView>
    );
};

export default HeroContent;