"use client";

import Image from "next/image";
import { Phone, Mail, Globe } from "lucide-react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.4,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="pt-12 sm:pt-14 md:pt-16 pb-8 sm:pb-10 md:pb-12"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:flex-row lg:justify-between items-center lg:items-start text-center lg:text-left">
            
            <motion.div variants={itemVariants} className="flex flex-col gap-4 sm:gap-5 md:gap-6 items-center lg:items-start">
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                transition={{ duration: 0.2 }}
                className="relative w-24 h-8 sm:w-28 sm:h-9 md:w-32 md:h-10"
              >
                <Image
                  src="/logo.png"
                  alt="Payroll Logo"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <p className="text-gray-900 font-inter text-[13px] sm:text-[14px] md:text-[15px] lg:text-base">
                Use Payroll and save your time.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-3 sm:gap-3.5 md:gap-4 text-gray-900 items-center lg:items-start">
              {[
                { icon: Phone, text: "+94 71 118 6028", href: "tel:+94711186028" },
                { icon: Mail, text: "info@cenzios.com", href: "mailto:info@cenzios.com" },
                { icon: Globe, text: "www.cenzios.com", href: "https://www.cenzios.com" }
              ].map((item, index) => (
                <motion.a 
                  key={index}
                  href={item.href}
                  className="flex items-center gap-2 sm:gap-2.5 md:gap-3 group"
                  whileHover={{ x: 5 }} 
                >
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className="p-1.5 sm:p-2 bg-gray-50 rounded-full group-hover:bg-[#E4E8FD] transition-colors"
                  >
                    <item.icon className="h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5 text-gray-700 group-hover:text-[#42A5E8] transition-colors" />
                  </motion.div>
                  <span className="font-inter text-[12px] sm:text-[13px] md:text-[14px] lg:text-base group-hover:text-[#42A5E8] transition-colors">
                    {item.text}
                  </span>
                </motion.a>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-2.5 sm:gap-3 text-gray-900 font-medium font-inter items-center lg:items-start">
              {["Features", "Product", "Pricing", "Contact Us"].map((link, index) => (
                <motion.a 
                  key={index}
                  href={`#${link.toLowerCase().replace(" ", "")}`}
                  className="hover:text-[#42A5E8] transition-colors inline-block text-[13px] sm:text-[14px] md:text-[15px] lg:text-base"
                  whileHover={{ x: 5 }} 
                >
                  {link}
                </motion.a>
              ))}
            </motion.div>

          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="bg-white py-4 sm:py-5 md:py-6 text-center text-gray-900 border-t border-gray-100"
      >
        <p className="font-inter text-[11px] sm:text-[12px] md:text-[13px] lg:text-sm text-gray-500">
          © 2025 Cenzios. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}