"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  
  const [activeTab, setActiveTab] = useState("Features");

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Product", href: "#product" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact Us", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => {
        const element = document.querySelector(link.href) as HTMLElement | null;
        return {
          name: link.name,
          element: element,
          top: element ? element.offsetTop : 0,
          bottom: element ? element.offsetTop + element.offsetHeight : 0
        };
      }).filter(section => section.element !== null);

      const scrollPos = window.scrollY + 100;

      if (window.scrollY < 50) {
        setActiveTab("Features");
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (scrollPos >= section.top) {
          setActiveTab(section.name);
          return;
        }
      }
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
   
    <header className="bg-white sticky top-0 z-50 border-b border-gray-100">
      
      {/* Moved animation to the <nav>  */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" 
        aria-label="Global"
      >
        
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center">
            <span className="sr-only">Payroll</span>
            <div className="relative w-32 h-10">
               <Image
                 src="/logo.png"
                 alt="Payroll Logo"
                 width={128} 
                 height={40}
                 className="object-contain object-left"
                 priority
               />
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex lg:gap-x-2 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(link.name);
                const element = document.querySelector(link.href) as HTMLElement | null;
                if (element) {
                  const offsetTop = element.offsetTop - 80; 
                  window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                  });
                }
              }} 
              className={`text-sm font-medium transition-all px-6 py-2.5 rounded-full ${
                activeTab === link.name 
                  ? "bg-black text-white" 
                  : "text-gray-900 hover:bg-gray-100" 
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

      </motion.nav>
    </header>
  );
}