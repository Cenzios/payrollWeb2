"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Can I customize this software according to my business?",
      answer: "Yes, our software is fully customizable to meet the specific needs of your business. We work with you to tailor the solution to your exact requirements.",
    },
    {
      question: "What are the prices of Plans",
      answer: "We offer flexible subscription plans designed to suit businesses of different sizes. Pricing is based on selected features and the number of employee slots.We offer competitive pricing tailored to business size. Please check our pricing page or contact sales for a custom quote.",
    },
    {
      question: "What about the service period?",
      answer: "Our service is provided on a subscription basis. You can choose a plan, and services remain active as long as your subscription is valid.",
    },
    {
      question: "Are there any maintenance fees?",
      answer: "No hidden maintenance fees apply. System maintenance, updates, and improvements are included in your subscription, ensuring you always have access to the latest features and security updates.",
    },
    {
      question: "Is this software scalable as my business grows?",
      answer: "Absolutely. Our system is built to scale with your business. You can easily upgrade your plan, add more employee slots, and access advanced features as your organization expands.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 flex items-center justify-center overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white border border-[#42A5E8] rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] shadow-[0_10px_40px_-10px_rgba(66,165,232,0.2)] p-6 sm:p-8 md:p-12 lg:p-20 relative"
        >
          {/* Decorative corner glows */}
          <motion.div
            className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200/30 rounded-full blur-2xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-200/30 rounded-full blur-2xl"
            animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start lg:items-center relative z-10">
            
            <div className="lg:col-span-5 text-left">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-[#42A5E8] font-bold tracking-widest uppercase font-inter text-[11px] sm:text-[12px] lg:text-[14px] mb-3 sm:mb-4 block"
              >
                FAQ
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-tight font-bold tracking-tight text-gray-900 font-istok mb-4 sm:mb-5 lg:mb-6"
              >
                Frequently Asked <br />
                <span className="text-[#42A5E8]">Questions</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] leading-relaxed sm:leading-7 lg:leading-8 text-[#525252] font-inter"
              >
                We compiled a list of answers to address your most pressing questions regarding our System.
              </motion.p>
            </div>

            <div className="lg:col-span-7 space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.5 + index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    x: 5,
                    transition: { duration: 0.2 }
                  }}
                  className={`rounded-lg sm:rounded-xl border transition-all duration-300 cursor-pointer ${
                      openIndex === index ? "border-[#42A5E8] bg-gray-50" : "border-gray-200 bg-white"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between px-4 sm:px-5 py-3 sm:py-4 text-left focus:outline-none"
                  >
                    <span className={`text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-semibold transition-colors font-istok pr-4 sm:pr-6 ${
                        openIndex === index ? "text-[#42A5E8]" : "text-[#1E1E1E]"
                    }`}>
                      {faq.question}
                    </span>
                    <motion.span 
                      className={`flex-none ml-2 sm:ml-4 transition-colors ${
                          openIndex === index ? "text-[#42A5E8]" : "text-gray-400"
                      }`}
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: openIndex === index ? 90 : -90,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {openIndex === index ? (
                        <Minus className="h-4 w-4 sm:h-5 sm:w-5" />
                      ) : (
                        <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
                      )}
                    </motion.span>
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <motion.div 
                          initial={{ y: -10 }}
                          animate={{ y: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0"
                        >
                          <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-relaxed sm:leading-6 text-[#6D6D6D] font-inter">
                            {faq.answer}
                          </p>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

          </div>

        </motion.div> 

      </div>
    </section>
  );
}