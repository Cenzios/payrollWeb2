"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Reporting() {
  const points = [
    "Manage multiple companies from a single secure dashboard with ease.",
    "Monitor active employee slots for each company based on specific subscription plans.",
    "Display total employee’s Salary paid and EPF in one screen.",
  ];

  return (
    <section id="product" className="bg-[#E4E8FC] py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-xl lg:mx-0"
          >
            <h2 className="text-[40px] font-bold tracking-tight text-gray-900 sm:text-5xl font-istok">
              <span className="text-[#42A5E8] block mb-2">Multi-Company</span>
              Management & Control
            </h2>
            <p className="mt-6 text-[16px] leading-8 text-[#525252] font-inter">
              Position the platform as a powerful tool for group admins or accountants who handle more than one business entity.
            </p>
            
            <ul className="mt-10 space-y-4">
              {points.map((point, index) => (
                <motion.li 
                  key={index} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-x-3"
                >
                  <div className="flex-none rounded-full bg-[#42A5E8] p-1">
                    <Check className="h-4 w-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[16px] font-regular text-[#000000] font-inter">
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <Image
              src="/report4.png"
              alt="Multi-Company Management & Control Dashboard"
              width={1000}
              height={800}
              className="w-full h-auto drop-shadow-2xl rounded-xl" 
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
