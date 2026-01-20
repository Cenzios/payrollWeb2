"use client";

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
  return (
    <section 
      id="pricing" 
      className="relative py-16 sm:py-24 bg-white bg-[url('/bgprice.png')] bg-cover bg-center bg-no-repeat"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
          {/* Section Header*/}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center mb-16"
        >
          
          <h2 className="text-[32px] sm:text-[42px] font-bold tracking-tight text-gray-900 font-istok mb-8">
            <span className="text-[#42A5E8]">Transparent Pricing Plans</span> that Scale with <br className="hidden sm:block" />
            your Business
          </h2>

            {/* Notification Banner */}
            <div className="bg-[#E0F7FA] border border-[#B2EBF2] rounded-lg py-3 px-4 inline-block shadow-sm">
            <p className="text-[#0C926C] font-bold text-sm sm:text-base font-inter">
              Register Today – Pay Only the Registration Fee! Subscription charges start from next month.
            </p>
            </div>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Plan Name */}
              <h3 className="text-center text-xl font-bold tracking-widest text-black uppercase font-istok mb-4">
                {plan.name}
              </h3>

              {/* Price Area */}
              <div className="text-center mb-2">
                <span className="text-3xl font-bold text-black font-istok">Rs: </span>
                <span className="text-6xl font-bold text-black font-istok">{plan.price}</span>
                <span className="text-sm font-medium text-gray-500 ml-2 font-inter">Per employee</span>
              </div>

              {/* Registration Fee */}
              <p className="text-center text-sm text-[#9CA3AF] mb-8 font-inter">
                Rs: {plan.regFee} (one time registration fee)
              </p>

              {/* Features List */}
              <ul className="space-y-4 mb-8 flex-1">
            
                <li className="flex items-start gap-x-3">
                  <div className="flex-none rounded-full bg-[#42A5E8] p-1 mt-0.5">
                    <Check className="h-3 w-3 text-white" strokeWidth={4} />
                  </div>
                  <span className="text-[14px] text-gray-700 font-inter leading-tight">
                    {plan.range}
                  </span>
                </li>

                {/* Common Features */}
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-x-3">
                    <div className="flex-none rounded-full bg-[#42A5E8] p-1 mt-0.5">
                      <Check className="h-3 w-3 text-white" strokeWidth={4} />
                    </div>
                    <span className="text-[14px] text-gray-700 font-inter leading-tight">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Buttons */}
              <div className="space-y-3 mt-auto">
                <button className="w-full flex items-center justify-center gap-2 bg-[#42A5E8] hover:bg-[#3494D6] text-white font-semibold py-3 px-6 rounded-lg transition-colors font-inter">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <button className="w-full flex items-center justify-center gap-2 bg-[#E0F2FE] hover:bg-[#D0EBFD] text-[#42A5E8] font-semibold py-3 px-6 rounded-lg transition-colors font-inter">
                  Contact Us
                </button>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}