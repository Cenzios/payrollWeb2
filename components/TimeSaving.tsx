"use client";

import { motion } from "framer-motion";

export default function TimeSaving() {
  return (
    <section id="contact" className="bg-white py-20 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Single Centered Column Wrapper */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl flex flex-col items-center text-center"
        >
         
          <h2 className="text-[40px] font-bold tracking-tight text-gray-900 sm:text-5xl font-istok">
            Ready to save your <span className="text-[#42A5E8]">Time ?</span>
          </h2>

         
          <p className="mt-6 text-[20px] leading-8 text-gray-600 font-inter max-w-xl">
            Don&apos;t think any longer get now this system for your business
          </p>
          
          {/* Centered Button */}
          <div className="mt-10 flex items-center justify-center w-full">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#42A5E8] hover:bg-[#3494D6] text-white text-[18px] sm:text-[20px] font-bold py-3 px-12 rounded-lg shadow-md transition-all transform font-inter"
            >
              Contact Us
            </motion.button>
          </div>

        </motion.div>

      </div>
    </section>
  );
}