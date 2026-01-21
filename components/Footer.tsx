"use client";

import Image from "next/image";
import { Phone, Mail, Globe } from "lucide-react";
// Import Variants type
import { motion, Variants } from "framer-motion";

// Variants type annotation here
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

// Add Variants type annotation here
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
      {/* Main Footer Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="pt-16 pb-12"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* Footer Content */}
          <div className="flex flex-col gap-12 lg:flex-row lg:justify-between items-center lg:items-start text-center lg:text-left">
            
            {/* Logo & Tagline */}
            <motion.div variants={itemVariants} className="flex flex-col gap-6 items-center lg:items-start">
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                transition={{ duration: 0.2 }}
                className="relative w-32 h-10"
              >
                <Image
                  src="/logo.png"
                  alt="Payroll Logo"
                  fill
                  
                  className="object-contain"
                />
              </motion.div>
              <p className="text-gray-900 font-inter text-sm sm:text-base">
                Use Payroll and save your time.
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4 text-gray-900 items-center lg:items-start">
              {[
                { icon: Phone, text: "+94 71 118 6028", href: "tel:+94711186028" },
                { icon: Mail, text: "info@cenzios.com", href: "mailto:info@cenzios.com" },
                { icon: Globe, text: "www.cenzios.com", href: "https://www.cenzios.com" }
              ].map((item, index) => (
                <motion.a 
                  key={index}
                  href={item.href}
                  className="flex items-center gap-3 group"
                  whileHover={{ x: 5 }} 
                >
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className="p-2 bg-gray-50 rounded-full group-hover:bg-[#E4E8FD] transition-colors"
                  >
                    <item.icon className="h-5 w-5 text-gray-700 group-hover:text-[#42A5E8] transition-colors" />
                  </motion.div>
                  <span className="font-inter text-sm sm:text-base group-hover:text-[#42A5E8] transition-colors">
                    {item.text}
                  </span>
                </motion.a>
              ))}
            </motion.div>

            {/* Links */}
            <motion.div variants={itemVariants} className="flex flex-col gap-3 text-gray-900 font-medium font-inter items-center lg:items-start">
              {["Features", "Product", "Pricing", "Contact Us"].map((link, index) => (
                <motion.a 
                  key={index}
                  href={`#${link.toLowerCase().replace(" ", "")}`}
                  className="hover:text-[#42A5E8] transition-colors inline-block"
                  whileHover={{ x: 5 }} 
                >
                  {link}
                </motion.a>
              ))}
            </motion.div>

          </div>
        </div>
      </motion.div>

      {/* Copyright Bar */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="bg-white py-6 text-center text-gray-900 border-t border-gray-100"
      >
        <p className="font-inter text-sm text-gray-500">
          © 2025 Cenzios. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}