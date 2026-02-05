"use client";

import { slideInFromBottom, slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

const About = () => {
    return (
        <section
            id="about"
            className="flex flex-col md:flex-row relative items-center justify-center min-h-screen w-full h-full"
        >
            <div className="md:absolute w-auto h-auto md:top-[100px] z-[5]">
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromTop}
                            className="text-[32px] md:text-[40px] pt-[3rem] md:pt-[5rem] pb-3 md:pb-0 font-medium text-center text-gray-200 z-50"
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

            <div className="flex flex-col items-center justify-start relative  mt-6 md:mt-15 top-[120px] md:top-[170px] z-[20] w-auto h-auto">
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromLeft(0.5)}
                            className="flex flex-col items-center w-auto h-auto rounded-full overflow-hidden border-[6px] border-[#7042f88b] bg-gradient-to-r from-purple-500 to-cyan-500"
                        >
                            <img src="/AE.jpeg" alt="profile" className="w-[280px] md:w-[350px]" />
                        </motion.div>
                    )}
                </InView>

                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromRight(0.5)}
                            className="Welcome-box px-[15px] py-[8px] z-[20] brder my-[20px] md:top-[20px] border-[#7042f88b] opacity-[0.9]"
                        >
                            <h1 className="Welcome-text text-[20px] font-bold">
                                Alaa ElGhoul
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
                            variants={slideInFromBottom}
                            className="Welcome-box px-[15px] w-[90%] md:w-3/4 py-[20px] z-[20] brder mb-[20px] border-[#7042f88b] opacity-[0.9]"
                        >
                            <h1 className="Welcome-text text-[14px] w-full text-justify">
                    I’m a Computer Engineering Master’s graduate focused on gameplay programming, software engineering, and system design. 
                    I build Unity games and interactive systems with deterministic, state‑driven logic and clean, scalable architecture. 
                    I also have experience with embedded and autonomous systems involving hardware–software integration and real-time data. 
                    I enjoy projects where rules and behavior are explicit, from gameplay mechanics to control systems. 
                    I’m currently seeking Game Developer or Software Engineer roles on game-focused teams that value strong engineering fundamentals.
                            </h1>
                        </motion.div>
                    )}
                </InView>
            </div>
            <div className="absolute z-[20] mt-6 md:mt-bottom-[-2rem] md:bottom-[20px] md:top-[850px]width={280} className="md:w-[350px]"15 top-[120px] md:top-[170px]  px-[5px]">
                <div className="cursive text-[20px] font-medium text-center text-gray-300">
                    Shaping Tomorrow with Code and Creativity
                </div>
            </div>

            <div className="w-full hidden md:flex items-start justify-center absolute top-[1px]">
                <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    preload="false"
                    className="h-full"
                    src="/encryption.webm/"
                />
            </div>
        </section>
    );
};

export default About;
