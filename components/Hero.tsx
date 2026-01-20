"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
  
    <section className="relative w-full bg-linear-to-b from-[#E4E8FD] via-[#F2F6FF] to-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid min-h-150 grid-cols-1 items-center gap-12 lg:grid-cols-2 pt-10 lg:pt-0"> 
          
          {/* lEFT CONTENT */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left z-10"
          >
            {/* Subbheading Label */}
            <div className="flex items-center gap-5 mb-8 top-4">
              <div className="h-0.5 w-12 bg-[#3E68FF]"></div>
              <span className="font-inter text-[#3E68FF] font-medium text-lg">
                Manage Salaries, Without Stress
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-istok font-bold leading-tight text-gray-900 text-4xl sm:text-5xl md:text-6xl lg:text-[80px]">
              Streamline Your{" "}
              <span className="text-[#42A5E8]">Payroll</span> Today
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl font-inter text-[#6D6D6D] text-base sm:text-lg lg:text-[20px] leading-relaxed">
              Automate salary calculations, generate pay-slips in one click, and manage employee records with our all-in-one payroll suite.
            </p>

            {/* Feature Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start"
            >
              {/* Button  */}
              <div className="flex items-center justify-center gap-3 rounded-full border border-[#42A5E8]/20 bg-[#42A5E8] w-54 h-14 shadow-sm hover:shadow-md transition-shadow px-6">
                <span className="font-inter lg:text-[20px] font-medium text-white">
                  Learn More
                </span>
                <ArrowRight className="h-5 w-5 text-white" />
              </div>

            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          
          <motion.div 
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full"
          >
            <Image
              src="/bgmain1.png"
              alt="Payroll dashboard preview"
              width={1024}
              height={769}
              priority
              
              className="w-full max-w-lg lg:max-w-none lg:h-full object-contain object-right" 
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}