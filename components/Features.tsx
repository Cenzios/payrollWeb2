"use client";

import { CircleDollarSign, MousePointerClick, Users, FileText } from "lucide-react";
import { motion } from "framer-motion";

//challenge data
const challenges = [
  {
    challengeTitle: "Manual Calculations",
    solutionTitle: "Automated System",
    solutionDescription: "Automated salary calculation based on worked days, daily rates, and predefined deduction rules.",
  },
  {
    challengeTitle: "Delayed Payments",
    solutionTitle: "On time payment",
    solutionDescription: "Calculate employee salaries instantly without delays or manual processing.",
  },
  {
    challengeTitle: "Slow Reporting",
    solutionTitle: "Analytics Dashboards",
    solutionDescription: "Centralized analytics dashboard providing real-time graphs and instant report generation for any date range.",
  },
];

//feature data
const features = [
  {
    title: "Auto Salary",
    description: "Automated calculation of basic pay, overtime, and deductions with 100% accuracy.",
    icon: <CircleDollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-[#42A5E8]" />,
    iconBg: "bg-[#B3D7FF]",
    cardBg: "bg-[#DFEEFF]",
  },
  {
    title: "One-Click Payslips",
    description: "Generate and distribute professional professional payslips to your entire staff in seconds.",
    icon: <MousePointerClick className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF6B6B]" />,
    iconBg: "bg-[#FFCaca]",
    cardBg: "bg-[#FFECEC]",
  },
  {
    title: "Multiple Companies",
    description: "Admin can add multiple companies and manage employee's salary details in one system.",
    icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#4CAF50]" />, 
    iconBg: "bg-[#C8E6C9]",
    cardBg: "bg-[#E8F5E9]",
  },
  {
    title: "Insightful Reports",
    description: "Get instant and accurate analytics data on salaries, EPF, ETF and salary trends.",
    icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-[#9C27B0]" />,
    iconBg: "bg-[#E1BEE7]",
    cardBg: "bg-[#F3E5F5]",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">   
        
        {/*challanges and solutions section */}
        <div className="mb-24"> 
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center mb-12 sm:mb-16"
          >
            <h2 className="text-[32px] sm:text-[40px] font-bold tracking-tight text-gray-900 lg:text-5xl font-istok leading-tight">
              Common <span className="text-[#27A7FE]">Payroll</span> challenges <br /> & Our Solutions
            </h2>
          </motion.div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {challenges.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                // Reduced padding on mobile (p-6) vs desktop (sm:p-8)
                className="flex flex-col rounded-2xl bg-white p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="mb-4 sm:mb-6">
                 
                  <span className="block text-[10px] sm:text-[12px] font-bold text-[#A3A3A3] tracking-wider uppercase mb-2 font-inter">
                    THE CHALLENGE
                  </span>
                 
                  <h3 className="text-[18px] sm:text-[22px] font-bold text-[#393939] font-istok">
                    {item.challengeTitle}
                  </h3>
                </div>    
                
                <div className="w-16 h-0.5 bg-[#393939] mb-4 sm:mb-6"></div>
   
                <div>
                  
                  <span className="block text-[10px] sm:text-[12px] font-bold text-[#5D74F1] tracking-wider uppercase mb-2 font-inter">
                    OUR SOLUTION
                  </span>
                  
                  <h3 className="text-[18px] sm:text-[22px] font-bold text-gray-900 font-istok mb-2 sm:mb-3">
                    {item.solutionTitle}
                  </h3>
                  
                  <p className="text-[13px] sm:text-[15px] leading-6 sm:leading-7 text-[#6D6D6D] font-inter">
                    {item.solutionDescription}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        
        {/* FEATURES SECTION*/}
       
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center mb-12 sm:mb-16"
          >
            <h2 className="text-[32px] sm:text-[40px] font-bold tracking-tight text-gray-900 lg:text-5xl font-istok">
              Powerful Features of <span className="text-[#27A7FE]">Payroll</span>
            </h2>
            <p className="mt-4 text-[16px] sm:text-[20px] leading-8 text-[#525252] font-inter">
              Everything you need to handle payroll effortlessly without the manual spreadsheets.
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-2xl grid-cols-2 gap-4 sm:gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col rounded-2xl p-5 sm:p-8 transition-all hover:shadow-lg border border-transparent hover:border-gray-100 ${feature.cardBg}`}
              >
                <div className={`mb-4 sm:mb-6 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl ${feature.iconBg}`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-[16px] sm:text-[18px] font-bold text-gray-900 leading-tight sm:leading-7 font-istok">
                  {feature.title}
                </h3>
                
                <p className="mt-2 sm:mt-3 text-[12px] sm:text-[14px] leading-5 sm:leading-6 text-[#525252] font-inter">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}