"use client";

import { useState, useRef } from "react";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "BASIC PLAN",
    price: "100",
    regFee: "2,500",
    range: "Payroll processing for 0 – 29 employees",
    features: [
      "Automatic salary & deduction calculations",
      "Monthly payslip generation (PDF / CSV / Excel)",
      "Employee profile management",
      "Manage multiple company",
      "Payroll report generations",
      "Secure dashboard for administrators",
    ],
  },
  {
    name: "PROFESSIONAL PLAN",
    price: "75",
    regFee: "5,000",
    range: "Payroll processing for 30 – 99 employees",
    features: [
      "Automatic salary & deduction calculations",
      "Monthly payslip generation (PDF / CSV / Excel)",
      "Employee profile management",
      "Manage multiple company",
      "Payroll report generations",
      "Secure dashboard for administrators",
    ],
  },
  {
    name: "ENTERPRISE PLAN",
    price: "50",
    regFee: "7,500",
    range: "Payroll processing for 100 or more employees",
    features: [
      "Automatic salary & deduction calculations",
      "Monthly payslip generation (PDF / CSV / Excel)",
      "Employee profile management",
      "Manage multiple company",
      "Payroll report generations",
      "Secure dashboard for administrators",
    ],
  },
];

export default function Pricing() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth;
      const index = Math.round(scrollLeft / width);
      setActiveIndex(index);
    }
  };

  return (
    <section 
      id="pricing" 
      //  Removed bg-[url], opacity-[20%], bg-cover
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden"
    >
    
      <div 
        className="absolute inset-0 bg-[url('/bgprice.png')] bg-cover bg-center bg-no-repeat opacity-20 pointer-events-none"
      />

      {/*  Added relative and z-10 to ensure content sits ON TOP of the background */}
      <div className="relative z-10 mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
        
        <div className="mx-auto max-w-4xl text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[42px] font-bold tracking-tight text-gray-900 font-istok mb-4 sm:mb-6 lg:mb-8 leading-tight px-2"
          >
            <span className="text-[#42A5E8]">Transparent Pricing Plans</span> that Scale with <br className="hidden sm:block" />
            your Business
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#E0F7FA] border border-[#B2EBF2] rounded-lg py-2 sm:py-3 px-3 sm:px-4 inline-block shadow-sm mx-2 sm:mx-4 lg:mx-0"
          >
            <p className="text-[#0C926C] font-bold text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-inter">
              Register Today – Pay Only the Registration Fee! Subscription charges start from next month.
            </p>
          </motion.div>
        </div>

        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex lg:grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory lg:overflow-visible pb-6 sm:pb-8 lg:pb-0 scrollbar-hide"
          style={{ scrollBehavior: 'smooth' }}
        >
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="flex-none min-w-[90%] sm:min-w-full lg:min-w-0 snap-center flex flex-col bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 p-4 sm:p-6 lg:p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                className="text-center text-[14px] sm:text-[16px] lg:text-[18px] font-bold tracking-widest text-black uppercase font-istok mb-3 sm:mb-4"
              >
                {plan.name}
              </motion.h3>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                className="text-center mb-2"
              >
                <span className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-bold text-black font-istok">Rs: </span>
                <span className="text-[32px] sm:text-[40px] md:text-[44px] lg:text-[48px] font-bold text-black font-istok">{plan.price}</span>
                <span className="text-[10px] sm:text-[12px] lg:text-[14px] font-medium text-gray-500 ml-1 sm:ml-2 font-inter">Per employee</span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                className="text-center text-[10px] sm:text-[12px] lg:text-[14px] text-[#9CA3AF] mb-4 sm:mb-6 lg:mb-8 font-inter"
              >
                Rs: {plan.regFee} (one time registration fee)
              </motion.p>

              <ul className="space-y-2 sm:space-y-3 lg:space-y-4 mb-6 sm:mb-8 flex-1">
                
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.5 }}
                  whileHover={{ 
                    x: 5,
                    transition: { duration: 0.2 }
                  }}
                  className="flex items-start gap-x-2 sm:gap-x-3 cursor-pointer group"
                >
                  <motion.div
                    className="flex-none rounded-full bg-[#42A5E8] p-0.5 sm:p-1 mt-0.5"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      backgroundColor: "#3E68FF"
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Check className="h-[8] w-[8] sm:h-[10] sm:w-[10] lg:h-[12] lg:w-[12] text-white" strokeWidth={4} />
                  </motion.div>
                  <motion.span
                    className="text-[11px] sm:text-[13px] lg:text-[14px] text-gray-700 font-inter leading-tight"
                    whileHover={{ 
                      
                      transition: { duration: 0.3 }
                    }}
                  >
                    {plan.range}
                  </motion.span>
                </motion.li>

                {plan.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.6 + i * 0.05 }}
                    whileHover={{ 
                      x: 5,
                      transition: { duration: 0.2 }
                    }}
                    className="flex items-start gap-x-2 sm:gap-x-3 cursor-pointer group"
                  >
                    <motion.div
                      className="flex-none rounded-full bg-[#42A5E8] p-0.5 sm:p-1 mt-0.5"
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 360,
                        backgroundColor: "#3E68FF"
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <Check className="h-[8] w-[8] sm:h-[10] sm:w-[10] lg:h-[12] lg:w-[12] text-white" strokeWidth={4} />
                    </motion.div>
                    <motion.span
                      className="text-[11px] sm:text-[13px] lg:text-[14px] text-gray-700 font-inter leading-tight"
                      whileHover={{ 
                        
                        transition: { duration: 0.3 }
                      }}
                    >
                      {feature}
                    </motion.span>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.9 }}
                className="space-y-2 sm:space-y-3 mt-auto"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="w-full flex items-center justify-center gap-1.5 sm:gap-2 bg-[#42A5E8] hover:bg-[#3494D6] text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors font-inter text-[12px] sm:text-[14px] lg:text-[16px]"
                >
                  Get Started
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="w-full flex items-center justify-center gap-1.5 sm:gap-2 bg-[#E0F2FE] hover:bg-[#D0EBFD] text-[#42A5E8] font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors font-inter text-[12px] sm:text-[14px] lg:text-[16px]"
                >
                  Contact Us
                </motion.button>
              </motion.div>

            </motion.div>
          ))}
        </div>

        <div className="flex lg:hidden justify-center gap-1.5 sm:gap-2 mt-3 sm:mt-4">
          {plans.map((_, i) => (
            <motion.div 
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full transition-colors duration-300 ${
                i === activeIndex ? "bg-[#374151]" : "bg-[#D1D5DB]"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}