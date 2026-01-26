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
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white bg-[url('/bgprice.png')] bg-cover bg-center bg-no-repeat overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          <h2 className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[42px] font-bold tracking-tight text-gray-900 font-istok mb-4 sm:mb-6 lg:mb-8 leading-tight px-2">
            <span className="text-[#42A5E8]">Transparent Pricing Plans</span> that Scale with <br className="hidden sm:block" />
            your Business
          </h2>

          <div className="bg-[#E0F7FA] border border-[#B2EBF2] rounded-lg py-2 sm:py-3 px-3 sm:px-4 inline-block shadow-sm mx-2 sm:mx-4 lg:mx-0">
            <p className="text-[#0C926C] font-bold text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-inter">
              Register Today – Pay Only the Registration Fee! Subscription charges start from next month.
            </p>
          </div>
        </motion.div>

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
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex-none min-w-[90%] sm:min-w-full lg:min-w-0 snap-center flex flex-col bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 p-4 sm:p-6 lg:p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-center text-[14px] sm:text-[16px] lg:text-[18px] font-bold tracking-widest text-black uppercase font-istok mb-3 sm:mb-4">
                {plan.name}
              </h3>

              <div className="text-center mb-2">
                <span className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-bold text-black font-istok">Rs: </span>
                <span className="text-[32px] sm:text-[40px] md:text-[44px] lg:text-[48px] font-bold text-black font-istok">{plan.price}</span>
                <span className="text-[10px] sm:text-[12px] lg:text-[14px] font-medium text-gray-500 ml-1 sm:ml-2 font-inter">Per employee</span>
              </div>

              <p className="text-center text-[10px] sm:text-[12px] lg:text-[14px] text-[#9CA3AF] mb-4 sm:mb-6 lg:mb-8 font-inter">
                Rs: {plan.regFee} (one time registration fee)
              </p>

              <ul className="space-y-2 sm:space-y-3 lg:space-y-4 mb-6 sm:mb-8 flex-1">
                
                <li className="flex items-start gap-x-2 sm:gap-x-3">
                  <div className="flex-none rounded-full bg-[#42A5E8] p-0.5 sm:p-1 mt-0.5">
                    <Check className="h-[8] w-[8] sm:h-[10] sm:w-[10] lg:h-[12] lg:w-[12] text-white" strokeWidth={4} />
                  </div>
                  <span className="text-[11px] sm:text-[13px] lg:text-[14px] text-gray-700 font-inter leading-tight">
                    {plan.range}
                  </span>
                </li>

                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-x-2 sm:gap-x-3">
                    <div className="flex-none rounded-full bg-[#42A5E8] p-0.5 sm:p-1 mt-0.5">
                      <Check className="h-[8] w-[8] sm:h-[10] sm:w-[10] lg:h-[12] lg:w-[12] text-white" strokeWidth={4} />
                    </div>
                    <span className="text-[11px] sm:text-[13px] lg:text-[14px] text-gray-700 font-inter leading-tight">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="space-y-2 sm:space-y-3 mt-auto">
                <button className="w-full flex items-center justify-center gap-1.5 sm:gap-2 bg-[#42A5E8] hover:bg-[#3494D6] text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors font-inter text-[12px] sm:text-[14px] lg:text-[16px]">
                  Get Started
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
                
                <button className="w-full flex items-center justify-center gap-1.5 sm:gap-2 bg-[#E0F2FE] hover:bg-[#D0EBFD] text-[#42A5E8] font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors font-inter text-[12px] sm:text-[14px] lg:text-[16px]">
                  Contact Us
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        <div className="flex lg:hidden justify-center gap-1.5 sm:gap-2 mt-3 sm:mt-4">
          {plans.map((_, i) => (
            <div 
              key={i}
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