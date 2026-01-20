"use client";

import Image from "next/image";
import { Phone, Mail, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Main Footer Content with white background */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white pt-16 pb-12"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* Changed from Grid to Flexbox with justify-between */}
          <div className="flex flex-col gap-12 lg:flex-row lg:justify-between items-start">
            
            {/* Column 1: Logo & Tagline */}
            <div className="flex flex-col gap-6">
              <div className="relative w-32 h-10">
                <Image
                  src="/logo.png"
                  alt="Payroll Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="text-gray-900 font-inter text-sm sm:text-base">
                Use Payroll and save your time.
              </p>
            </div>

            {/* Column 2: Contact Info */}
            <div className="flex flex-col gap-4 text-gray-900">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 fill-current" />
                <span className="font-inter text-sm sm:text-base">+94 71 118 6028</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 " />
                <span className="font-inter text-sm sm:text-base">info@cenzios.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5" />
                <a href="https://www.cenzios.com" className="font-inter text-sm sm:text-base hover:underline">
                  www.cenzios.com
                </a>
              </div>
            </div>

            {/* Column 3: Links */}
            <div className="flex flex-col gap-3 text-gray-900 font-medium font-inter">
              <a href="#features" className="hover:text-gray-700 transition-colors">Features</a>
              <a href="#product" className="hover:text-gray-700 transition-colors">Product</a>
              <a href="#pricing" className="hover:text-gray-700 transition-colors">Pricing</a>
              <a href="#contact" className="hover:text-gray-700 transition-colors">Contact Us</a>
            </div>

          </div>
        </div>
      </motion.div>

      {/* Copyright Bar */}
      <div className="bg-white py-6 text-center text-gray-900 border-t border-gray-100">
        <p className="font-inter text-sm">
          © 2025 Cenzios. All rights reserved.
        </p>
      </div>
    </footer>
  );
}