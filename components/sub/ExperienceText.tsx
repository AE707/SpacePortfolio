"use client";
import {
    slideInFromLeft,
    slideInFromTop
} from "@/utils/motion";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";


const ExperienceText = () => {
    return (
        <div className="w-full h-auto pt-20 flex flex-col items-center justify-center">
            <InView triggerOnce={false}>
                {({ inView, ref }) => (
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={slideInFromTop}
                        className="text-[28px] sm:text-[36px] md:text-[40px] pt-16 md:pt-[5rem] pb-3 md:pb-4 font-medium text-center text-gray-200 z-50"
                    >
                        My
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            {" "}
                            Experience{" "}
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
                        variants={slideInFromLeft(0.5)}
                        className="cursive text-base md:text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
                    >
                        Building the future with hands-on expertise
                    </motion.div>
                )}
            </InView>
        </div>
    );
};


export default ExperienceText;
