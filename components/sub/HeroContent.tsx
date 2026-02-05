"use client";
import Image from "next/image";


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
                    className="flex md:flex-row flex-col-reverse items-center justify-center gap-5 md:gap-10 px-4 md:px-20 mt-10 md:mt-20 w-full z-20"
                >
                    <div className="h-full w-full md:w-3/6 flex flex-col gap-3 md:gap-5 justify-center text-center md:text-start">
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
                                    className="flex flex-col gap-4 md:gap-6 mt-4 md:mt-6 text-3xl md:text-5xl font-bold text-white max-w-full md:max-w-[600px] w-auto h-auto z-20"
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
                                    className="text-xs md:text-sm lg:text-md text-gray-400 my-3 md:my-5 max-w-full md:max-w-[650px] px-2 z-30"
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
                                <Image
                                    src="/mainIconsdark.svg"
                                    alt="work icons"
                                    height={650}
                                    width={650}
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
