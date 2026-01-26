"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    }
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 1.5, 
      ease: "easeOut" 
    }
  },
};

export default function Hero() {
  return (
    <section className="relative w-full min-h-[500] sm:min-h-[600] lg:min-h-[700] bg-[#E4E8FC] overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
        <div className="relative min-h-[500] sm:min-h-[600] lg:min-h-[700] flex items-center">
          
          {/* LEFT CONTENT */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 flex flex-col items-start text-left max-w-full sm:max-w-xl lg:max-w-2xl py-6 sm:py-8 lg:py-10"
          >
            {/* Subheading Label */}
            <motion.div variants={fadeUpVariants} className="flex items-center gap-3 sm:gap-4 lg:gap-5 mb-4 sm:mb-6 lg:mb-8   ">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
                className="h-0.5 w-8 sm:w-10 lg:w-12 bg-[#3E68FF]"
              ></motion.div>
              <span className="font-inter text-[#3E68FF] font-semibold text-[12px] sm:text-[14px] lg:text-[16px]">
                Manage Salaries, Without Stress
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1 
              variants={fadeUpVariants}
              className="font-istok py-8 font-bold leading-tight text-gray-900 text-[40px] sm:text-[48px] md:text-[60px] lg:text-[80px]"
            >
              Streamline Your{" "}
              <motion.span 
                initial={{ color: "#1F2937" }} 
                animate={{ color: "#42A5E8" }}
                transition={{ duration: 1.5, delay: 0.8 }}
                className="inline-block"
              >
                Payroll
              </motion.span>{" "}
              Today
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={fadeUpVariants}
              className="mt-3 sm:mt-4 lg:mt-6 max-w-full sm:max-w-md lg:max-w-xl font-inter font-medium text-[#464646] lg:text-[#6D6D6D] text-[13px] sm:text-[16px] lg:text-[20px] leading-snug sm:leading-relaxed"
            >
              Automate salary calculations, generate pay-slips in one click, and manage employee records with our all-in-one payroll suite.
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={fadeUpVariants} className="mt-6 sm:mt-8 lg:mt-10  py-8" >
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 sm:gap-3 rounded-full bg-[#42A5E8] hover:bg-[#3B94D1] w-fit px-5 sm:px-7 lg:px-8 h-10 sm:h-12 lg:h-14 shadow-lg transition-all cursor-pointer group"
              >
                <span className="font-inter text-[14px] sm:text-[16px] lg:text-[20px] font-medium text-white">
                  Learn More
                </span>
                <ArrowRight className="h-4 w-4 sm:h-4.5 sm:w-4.5 lg:h-5 lg:w-5 text-white group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE - Responsive sizing */}
          <div className="absolute inset-y-0 right-0 w-[85%] sm:w-[75%] lg:w-[70%] h-full pointer-events-none">
            <motion.div 
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className="relative w-full h-full min-h-[500] sm:min-h-[600] lg:min-h-[700]"
            >
              <div className="absolute inset-0 -right-25 sm:-right-6 lg:-right-32">
                <Image
                  src="/bgmain.png"
                  alt="Payroll dashboard preview"
                  width={1023}
                  height={769}
                  priority
                  className="w-full h-full object-cover object-right" 
                />
                
                {/* Gradient Overlay - Stronger on mobile */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(88.44deg, #E4E8FC 1.19%, rgba(228, 232, 252, 0.7) 35%, rgba(11, 11, 11, 0) 70%)',
                  }}
                ></div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}