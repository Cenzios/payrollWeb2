"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Calculations() {
  const points = [
    "Enter daily rates and working days; the system calculates everything automatically.", 
    "Generate instant and accurate monthly salary calculations.",
    "Automatically create digital pay slips.",
    "Built-in EPF and ETF calculations for full compliance.",
  ];

  const pointsReporting = [
    "Generate summary reports instantly",
    "Export reports in CSV, PDF, and Excel formats",
    "Securely track & analyze historical payroll data",
  ];

  return (
    <>
    <section className="bg-[#E4E8FC] py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-12 items-center">
          
          {/* Left Content */}
          <div className="mx-auto max-w-xl lg:mx-0">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left text-[32px] sm:text-[42px] leading-tight font-bold tracking-tight text-gray-900 sm:text-5xl font-istok"
            >
              <span className="text-[#42A5E8]">Automate</span> <br/>
              Employee salaries
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
            {/* Label Container positioned above the laptop */}
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              style={{ perspective: "1000px" }}
            >
              {/* ETF Print button */}
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
                className="absolute -top-6 left-[28%] sm:-top-9 sm:left-[32%] bg-[#ECF0FF] border-[1px] border-[#ECF0FF] rounded-[50px] px-2 py-1 sm:px-[18px] sm:py-[6px] z-10 shadow-md"
              >
                <span className="font-inter font-medium text-[10px] sm:text-[14px]  text-[#3E68FF] text-center whitespace-nowrap">
                  ETF Print
                </span>
              </motion.div>

              {/* EPF/ETF Print button */}
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
                className="absolute -top-6 left-[50%] sm:-top-9 sm:left-[50%] bg-[#ECF0FF] border-[1px] border-[#ECF0FF] rounded-[50px] px-2 py-1 sm:px-[18px] sm:py-[6px] z-10 shadow-md"
              >
                <span className="font-inter font-medium text-[10px] sm:text-[14px]  text-[#3E68FF] text-center whitespace-nowrap">
                  EPF/ETF Print
                </span>
              </motion.div>

              {/* Download Pay slip button */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.8,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.1 }}
                className="absolute -top-6 left-[77%]  sm:-top-8 lg:left-[78%] sm:left-[76%] bg-[#ECF0FF] border-[1px] border-[#ECF0FF] rounded-[50px] px-2 py-1 sm:px-[18px] sm:py-[6px] z-10 shadow-md"
              >
                <span className="font-inter font-medium text-[10px] sm:text-[14px]  text-[#3E68FF] text-center whitespace-nowrap">
                  Download Pay slip
                </span>
              </motion.div>

              {/* Laptop Image */}
              <motion.div
                initial={{ rotateY: -5 }}
                whileInView={{ rotateY: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src="/calculate3.png"
                  alt="Automate Salary Calculation Interface"
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

    <section className="bg-white py-16 sm:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-12 items-center">
            
            {/* Left Content */}
            <div className="mx-auto max-w-xl lg:mx-0">
              {/* Updated Heading to match image */}
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center lg:text-left text-[32px] font-bold tracking-tight leading-tight text-gray-900 sm:text-5xl font-istok"
              >
                <span className="text-[#42A5E8]">Advanced</span> <br/>
                Payroll Reporting
              </motion.h2>
              
              {/* Description Text - desktop version */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-6 hidden sm:block sm:text-[18px] leading-8 text-[#525252] font-inter"
              >
                Visualize your company's payroll data with real-time reports. 
                Drill down into specific departments, employee groups, or time periods with ease.
              </motion.p>

              {/* description text - mobile version */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-6 text-[14px] sm:hidden leading-7 text-[#525252] font-inter text-center"
              >
                Visualize your company's payroll data with real-time reports.
              </motion.p>
              
              <ul className="mt-8 space-y-4">
                {pointsReporting.map((point, index) => (
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
                        
                        transition: { duration: 0.3 }
                      }}
                    >
                      {point}
                    </motion.span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right Image */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto w-full max-w-md lg:max-w-none"
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{ perspective: "1000px" }}
              >
                {/* Image with 3D effect */}
                <motion.div
                  initial={{ rotateY: -5 }}
                  whileInView={{ rotateY: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <Image
                    src="/report2.png"
                    alt="Advanced Payroll Reporting Dashboard"
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
    </>
  );
}