"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
// Import Variants from framern motion
import { motion, Variants } from "framer-motion";

// Add  Variants type annotation
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

//Add Variants type annotation
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

// Add  Variants type annotation
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
    <section className="relative w-full min-h-175 bg-[#E4E8FC] overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 h-full">
        <div className="relative min-h-175 flex items-center">
          
          {/* LEFT CONTENT */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 flex flex-col items-start text-left max-w-2xl py-10"
          >
            {/* Subheading Label */}
            <motion.div variants={fadeUpVariants} className="flex items-center gap-5 mb-8">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
                className="h-0.5 bg-[#3E68FF]"
              ></motion.div>
              <span className="font-inter text-[#3E68FF] font-medium text-lg">
                Manage Salaries, Without Stress
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1 
              variants={fadeUpVariants}
              className="font-istok font-bold leading-tight text-gray-900 text-4xl sm:text-5xl md:text-6xl lg:text-[80px]"
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
              className="mt-6 max-w-xl font-inter text-[#6D6D6D] text-base sm:text-lg lg:text-[20px] leading-relaxed"
            >
              Automate salary calculations, generate pay-slips in one click, and manage employee records with our all-in-one payroll suite.
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={fadeUpVariants} className="mt-10">
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 rounded-full bg-[#42A5E8] hover:bg-[#3B94D1] w-fit px-8 h-14 shadow-lg transition-all cursor-pointer group"
              >
                <span className="font-inter text-[20px] font-medium text-white">
                  Learn More
                </span>
                <ArrowRight className="h-5 w-5 text-white group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <div className="absolute inset-y-0 right-0 w-full lg:w-[70%] h-full pointer-events-none">
            <motion.div 
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className="relative w-full h-full min-h-175"
            >
              <div className="absolute inset-0 -right-8 lg:-right-32">
                <Image
                  src="/bgmain.png"
                  alt="Payroll dashboard preview"
                  width={1023}
                  height={769}
                  priority
                  className="w-full h-full object-cover object-right" 
                />
                
                {/* Gradient Overlay */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(88.44deg, #E4E8FC 1.19%, rgba(228, 232, 252, 0.5) 25%, rgba(11, 11, 11, 0) 60%)'
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