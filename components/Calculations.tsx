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
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-xl lg:mx-0"
          >
            <h2 className="text-[40px] font-bold tracking-tight text-gray-900 sm:text-5xl font-istok">
              <span className="text-[#42A5E8]">Automate</span> <br/>
              Employee salaries
            </h2>
            
            
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
              src="/calculate2.png"
              alt="Automate Salary Calculation Interface"
              width={1000}
              height={800}
              className="w-full h-auto drop-shadow-2xl rounded-xl" 
            />
          </motion.div>

        </div>
      </div>
    </section>

    <section className="bg-white py-16 sm:py-24 overflow-hidden">
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
              {/* Updated Heading to match image */}
              <h2 className="text-[40px] font-bold tracking-tight text-gray-900 sm:text-5xl font-istok">
                <span className="text-[#42A5E8]">Advanced</span> <br/>
                Payroll Reporting
              </h2>
              
              {/* Description Text */}
              <p className="mt-6 text-[18px] leading-8 text-[#525252] font-inter">
                Visualize your company's payroll data with real-time reports. 
                Drill down into specific departments, employee groups, or time periods with ease.
              </p>
              
              <ul className="mt-8 space-y-4">
                {pointsReporting.map((point, index) => (
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
                src="/report2.png"
                alt="Advanced Payroll Reporting Dashboard"
                width={1000}
                height={800}
                className="w-full h-auto drop-shadow-2xl rounded-xl" 
              />
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}

