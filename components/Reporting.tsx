"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Reporting() {
  const points = [
    "Manage multiple companies from a single secure dashboard with ease.",
    "Monitor active employee slots for each company based on specific subscription plans.",
    "Display total employee's Salary paid and EPF in one screen.",
  ];

  return (
    <section id="product" className="bg-[#ECF0FF] py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-12 items-center">
          
          {/* Left Content */}
          <div className="mx-auto max-w-xl lg:mx-0">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left text-[24px] sm:text-[60px] lg:text-[60px] font-bold tracking-tight text-gray-900 font-istok"
            >
              <span className="text-[#42A5E8] block mb-2">Multi-Company</span>
              Management & Control
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-[14px] sm:text-[16px] leading-8 text-[#525252] font-inter"
            >
              Position the platform as a powerful tool for group admins or accountants who handle more than one business entity.
            </motion.p>
            
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
                  className="flex items-center gap-x-3 group cursor-pointer"
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
                      color: "#42A5E8",
                      transition: { duration: 0.3 }
                    }}
                  >
                    {point}
                  </motion.span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right Image with Labels */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            {/* Label Container positioned on the image */}
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              style={{ perspective: "1000px" }}
            >
              {/* Salary paid summary label */}
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
                className="absolute -top-6 left-[22%] sm:-top-6 sm:left-24 bg-[#ECF0FF] border-[1px] border-[#ECF0FF] rounded-[50px] px-2 py-1 sm:px-[18px] sm:py-[6px] z-10 shadow-md"
              >
                <span className="font-inter font-medium text-[10px] sm:text-[14px] text-[#3E68FF] whitespace-nowrap">
                  Salary paid summary
                </span>
              </motion.div>

              {/* Easy Navigation label */}
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
                className="absolute -top-5 left-[72%] sm:-top-5 sm:left-[70%] bg-[#ECF0FF] border-[1px] border-[#ECF0FF] rounded-[50px] px-2 py-1 sm:px-[18px] sm:py-[6px] z-10 shadow-md"
              >
                <span className="font-inter font-medium text-[10px] sm:text-[14px] text-[#3E68FF] whitespace-nowrap">
                  Easy Navigation
                </span>
              </motion.div>

              {/* Laptop Image */}
              <motion.div
                initial={{ rotateY: -5 }}
                whileInView={{ rotateY: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src="/report5.png"
                  alt="Multi-Company Management & Control Dashboard"
                  width={1000}
                  height={800}
                  className="w-full h-auto drop-shadow-2xl rounded-xl" 
                />
              </motion.div>

              {/* Decorative corner glows */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-blue-200/40 rounded-full blur-xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-indigo-200/40 rounded-full blur-xl"
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

        </div>
      </div>
    </section>
  );
}