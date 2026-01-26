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
          
          {/* Left Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative mx-auto w-full max-w-md lg:max-w-none order-last lg:order-first"
          >
            <Image
              src="/salary1.png"
              alt="Employee Salary Management Dashboard"
              width={1000}
              height={800}
              className="w-full h-auto drop-shadow-2xl rounded-xl" 
            />
          </motion.div>

          {/* Right Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-xl lg:mx-0"
          >
            {/*Mobile text-[32px], Tablet/Web restores to text-5xl  */}
            <h2 className=" text-center lg:text-left text-[32px] sm:text-[42px] leading-tight font-bold tracking-tight text-gray-900 font-istok">
              <span className="text-[#42A5E8]">Effortless</span> Employee Profile Management
            </h2>
                  
            <ul className="mt-10 space-y-4">
              {points.map((point, index) => (
                <motion.li 
                  key={index} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-x-3"
                >
                  {/* 
                       mt-0.5 for mobile aligns with 14px, mt-1 for web
                      Icon size h-3 w-3 for mobile, h-4 w-4 for web 
                  */}
                  <div className="flex-none rounded-full bg-[#42A5E8] p-1 mt-0.5 sm:mt-1">
                    <Check className="h-2 w-2 sm:h-4 sm:w-4 text-white" strokeWidth={3} />
                  </div>
                  
                 
                  <span className="text-[14px] sm:text-[16px] font-regular text-[#000000] font-inter">
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}