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
      answer: "We offer competitive pricing tailored to business size. Please check our pricing page or contact sales for a custom quote.",
    },
    {
      question: "What about the service period?",
      answer: "Our service periods are flexible. You can choose between monthly or annual subscriptions with the ability to cancel anytime.",
    },
    {
      question: "Are there any maintenance fees?",
      answer: "No, there are no hidden maintenance fees. All updates and standard support are included in your subscription plan.",
    },
    {
      question: "Is this software scalable as my business grows?",
      answer: "Absolutely. Our platform is built to scale with you, handling everything from a small team to a large enterprise without performance loss.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 sm:py-24 flex items-center justify-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
        
        {/* Main Box Wrapper */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white border border-[#42A5E8] rounded-[40px] shadow-[0_10px_40px_-10px_rgba(66,165,232,0.2)] p-8 sm:p-12 lg:p-20"
        >
          
          {/* Grid Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/*left Column */}
            <div className="lg:col-span-5 text-left">
              <span className="text-[#42A5E8] font-bold tracking-widest uppercase font-inter text-sm mb-4 block">
                FAQ
              </span>
              <h2 className="text-[32px] sm:text-[40px] leading-tight font-bold tracking-tight text-gray-900 font-istok mb-6">
                Frequently Asked <br />
                <span className="text-[#42A5E8]">Questions</span>
              </h2>
              <p className="text-[16px] sm:text-[18px] leading-8 text-[#525252] font-inter">
                We compiled a list of answers to address your most pressing questions regarding our System.
              </p>
            </div>

            {/*Right Column*/}
            <div className="lg:col-span-7 space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`rounded-xl border transition-all duration-300 ${
                      openIndex === index ? "border-[#42A5E8] bg-gray-50" : "border-gray-200 bg-white"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between px-5 py-4 text-left focus:outline-none"
                  >
                    <span className={`text-[16px] sm:text-[18px] font-semibold transition-colors font-istok pr-6 ${
                        openIndex === index ? "text-[#42A5E8]" : "text-[#1E1E1E]"
                    }`}>
                      {faq.question}
                    </span>
                    <span className={`flex-none ml-4 transition-colors ${
                        openIndex === index ? "text-[#42A5E8]" : "text-gray-400"
                    }`}>
                      {openIndex === index ? (
                        <Minus className="h-5 w-5" />
                      ) : (
                        <Plus className="h-5 w-5" />
                      )}
                    </span>
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-0">
                          <p className="text-[14px] sm:text-[16px] leading-6 text-[#6D6D6D] font-inter">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

          </div>

        </motion.div> 

      </div>
    </section>
  );
}