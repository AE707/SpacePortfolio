"use client";


import {
    slideInFromLeft
} from "@/utils/motion";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

const ResumeActions = () => {
  const RESUME_PATH = "/AE_Resume26.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = RESUME_PATH;
    link.setAttribute("download", "Alaa-Elghoul-Resume.pdf");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    /* Resume buttons */
<div className="flex flex-col sm:flex-row gap-4 mt-4">
  {/* View Résumé (open in new tab) */}
  <InView triggerOnce={false}>
    {({ inView, ref }) => (
      <motion.a
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={slideInFromLeft(0.8)}
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] z-40"
      >
        View Résumé
      </motion.a>
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
        href="/resume.pdf"
        download="Alaa-Elghoul-Resume.pdf"
        className="py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] z-40"
      >
        Download Résumé
      </motion.a>
    )}
  </InView>
</div>
  );
};

export default ResumeActions;
