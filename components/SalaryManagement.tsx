"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function SalaryManagement() {
  const points = [
    "Quickly onboard and store employee information.",
    "View, update, and organize employee details efficiently from a single dashboard",
    "Instantly view complete employee profiles, including contact and role information.",
  ];

  return (
    <section className="bg-[#FFFF] py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-12 items-center">
          
          {/* Left Image with Labels */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none order-last lg:order-first"
          >
            {/* Label Container positioned above the laptop */}
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              style={{ perspective: "1000px" }}
            >
              {/* Employee Details button */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.1 }}
                className="absolute -top-7 left-[42%] sm:-top-10 sm:left-[40%] bg-[#ECF0FF] border-[1px] border-[#ECF0FF] rounded-[50px] px-2 py-1 sm:px-[18px] sm:py-[6px] z-10 shadow-md"
              >
                <span className="font-inter font-medium text-[10px] sm:text-[14px] leading-[100%] text-[#3E68FF] text-center whitespace-nowrap">
                  Employee Details
                </span>
              </motion.div>

              {/* Add Employees button */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.65,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.1 }}
                className="absolute -top-7 left-[80%] sm:-top-11 sm:left-[78%] bg-[#ECF0FF] border-[1px] border-[#ECF0FF] rounded-[50px] px-2 py-1 sm:px-[18px] sm:py-[6px] z-10 shadow-md"
              >
                <span className="font-inter font-medium text-[10px] sm:text-[14px] leading-[100%] text-[#3E68FF] text-center whitespace-nowrap">
                  Add Employees
                </span>
              </motion.div>

              {/* Laptop Image */}
              <motion.div
                initial={{ rotateY: 5 }}
                whileInView={{ rotateY: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src="/salary2.png"
                  alt="Employee Salary Management Dashboard"
                  width={1000}
                  height={800}
                  className="w-full h-auto drop-shadow-2xl rounded-xl" 
                />
              </motion.div>

              {/* Decorative corner glows */}
              <motion.div
                className="absolute -top-4 -left-4 w-20 h-20 bg-blue-200/40 rounded-full blur-xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-indigo-200/40 rounded-full blur-xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <div className="mx-auto max-w-xl lg:mx-0">
            {/* Mobile text-[32px], Tablet/Web restores to text-5xl */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left text-[32px] sm:text-[42px] leading-tight font-bold tracking-tight text-gray-900 font-istok"
            >
              <span className="text-[#42A5E8]">Effortless</span> Employee Profile Management
            </motion.h2>
                  
            <ul className="mt-10 space-y-4">
              {points.map((point, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{ 
                    x: 10,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="flex items-start gap-x-3 group cursor-pointer"
                >
                  <motion.div 
                    className="flex-none rounded-full bg-[#42A5E8] p-1 mt-0.5 sm:mt-1"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      backgroundColor: "#3E68FF"
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <Check className="h-2 w-2 sm:h-4 sm:w-4 text-white" strokeWidth={3} />
                  </motion.div>
                  
                  <motion.span 
                    className="text-[14px] sm:text-[16px] font-regular text-[#000000] font-inter"
                    whileHover={{ 
                      
                      transition: { duration: 0.3 }
                    }}
                  >
                    {point}
                  </motion.span>
                </motion.li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}