"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // All closed initially

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
    <section 
      className="relative py-16 sm:py-24 bg-cover bg-center bg-no-repeat min-h-screen flex items-center"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="mx-auto max-w-3xl px-6 lg:px-8 w-full z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[40px] font-bold tracking-tight text-gray-900 sm:text-5xl font-istok">
            Frequently Asked <span className="text-[#42A5E8]">Questions</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none"
              >
                <span className="text-[20px] font-semibold text-[#1E1E1E] pr-8">
                  {faq.question}
                </span>
                <span className="flex-none ml-4 text-gray-500">
                  {openIndex === index ? (
                    <Minus className="h-6 w-6" />
                  ) : (
                    <Plus className="h-6 w-6" />
                  )}
                </span>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-40 pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"
                }`}
              >
                <p className="text-[16px] font-regular text-[#6A6D9E] font-inter">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
