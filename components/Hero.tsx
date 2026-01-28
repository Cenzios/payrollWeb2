"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1] as [number, number, number, number],
    },
  },
};

const imageFloat: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Hero() {
  return (
    <section className="relative w-full bg-[#E4E8FC] overflow-hidden">
      {/* Soft glowing circles for atmosphere */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl"
        animate={{
          x: [0, -25, 0],
          y: [0, -15, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* DESKTOP VIEW - Original Layout */}
        <div className="hidden lg:flex relative min-h-[700px] items-center">
          
          {/* LEFT CONTENT */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="relative z-10 flex flex-col items-start text-left max-w-2xl py-10"
          >
            {/* Subheading Label */}
            <motion.div variants={fadeUp} className="flex items-center gap-5 mb-8">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
                className="h-0.5 w-12 bg-[#3E68FF]"
              ></motion.div>
              <span className="font-inter text-[#3E68FF] font-semibold text-[16px]">
                Manage Salaries, Without Stress
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1 
              variants={fadeUp}
              className="font-istok py-8 font-bold leading-tight text-gray-900 text-[80px]"
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
              variants={fadeUp}
              className="mt-6 max-w-xl font-inter font-medium text-[#6D6D6D] text-[20px] leading-relaxed"
            >
              Automate salary calculations, generate pay-slips in one click, and manage employee records with our all-in-one payroll suite.
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={fadeUp} className="mt-10 py-8">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-3 rounded-full bg-[#42A5E8] hover:bg-[#3B94D1] w-fit px-8 h-14 shadow-lg transition-all cursor-pointer group"
              >
                <span className="font-inter text-[20px] font-medium text-white">
                  Learn More
                </span>
                <ArrowRight className="h-5 w-5 text-white group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE - Desktop Only */}
          <div className="absolute inset-y-0 right-0 w-[70%] h-full pointer-events-none">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className="relative w-full h-full min-h-[700px]"
            >
              <div className="absolute inset-0 -right-39">
                <motion.div
                  variants={imageFloat}
                  animate="animate"
                  className="w-full h-full"
                >
                  <Image
                    src="/bgmain.png"
                    alt="Payroll dashboard preview"
                    width={1023}
                    height={769}
                    priority
                    className="w-full h-full object-cover object-right" 
                  />
                </motion.div>
                
                {/* Gradient Overlay */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(88.44deg, #E4E8FC 1.19%, rgba(228, 232, 252, 0.7) 35%, rgba(11, 11, 11, 0) 70%)',
                  }}
                ></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* MOBILE/TABLET VIEW - Stacked Layout */}
        <div className="lg:hidden py-8 sm:py-12">
          
          {/* TOP CONTENT */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="relative z-10 flex flex-col items-start text-left px-2 sm:px-4"
          >
            {/* Subheading Label */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
                className="h-0.5 w-8 sm:w-10 bg-[#3E68FF]"
              ></motion.div>
              <span className="font-inter text-[#3E68FF] font-semibold text-[12px] sm:text-[14px]">
                Manage Salaries, Without Stress
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1 
              variants={fadeUp}
              className="font-istok py-6 sm:py-8 font-bold leading-tight text-gray-900 text-[40px] sm:text-[48px]"
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
              variants={fadeUp}
              className="mt-3 sm:mt-4 font-inter font-medium text-[#464646] text-[13px] sm:text-[16px] leading-snug sm:leading-relaxed"
            >
              Automate salary calculations, generate pay-slips in one click, and manage employee records with our all-in-one payroll suite.
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={fadeUp} className="mt-6 sm:mt-8 pb-6 sm:pb-8">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 sm:gap-3 rounded-full bg-[#42A5E8] hover:bg-[#3B94D1] w-fit px-5 sm:px-7 h-10 sm:h-12 shadow-lg transition-all cursor-pointer group"
              >
                <span className="font-inter text-[14px] sm:text-[16px] font-medium text-white">
                  Learn More
                </span>
                <ArrowRight className="h-4 w-4 sm:h-4.5 sm:w-4.5 text-white group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* BOTTOM IMAGE - Mobile/Tablet Only */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="relative w-full mt-6 sm:mt-8"
          >
            <div className="relative w-full max-w-2xl mx-auto">
              <motion.div
                variants={imageFloat}
                animate="animate"
              >
                <Image
                  src="/bgmain.png"
                  alt="Payroll dashboard preview"
                  width={1023}
                  height={769}
                  priority
                  className="w-full h-auto rounded-xl shadow-2xl" 
                />
              </motion.div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}