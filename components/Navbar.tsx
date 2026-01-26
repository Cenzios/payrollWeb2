"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; 
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  
  const [activeTab, setActiveTab] = useState("Features");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <header className="bg-white sticky top-0 z-50 border-b border-gray-200">
      
      {/* desktop/Closed Navbar */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto flex max-w-7xl items-center justify-between p-4 sm:p-5 md:p-6 lg:px-8 bg-white z-40" 
        aria-label="Global"
      >
        
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center">
            <span className="sr-only">Payroll</span>
            <div className="relative w-24 h-8 sm:w-28 sm:h-9 md:w-32 md:h-10">
               <Image
                 src="/logo.png"
                 alt="Payroll Logo"
                 fill
                 className="object-contain object-left"
                 priority
               />
            </div>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2 sm:p-2.5 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
          </button>
        </div>

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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={() => setMobileMenuOpen(false)}
               className="fixed inset-0 bg-black/20 z-40 lg:hidden"
            />

            <motion.div 
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-0 left-0 w-full bg-white z-50 shadow-xl border-b border-gray-200 lg:hidden"
            >
              
            
              <div className="mx-auto max-w-7xl pt-5 sm:pt-6">
                
                {/*  Added padding here */}
                <div className="flex items-center justify-between px-4 sm:px-6 mb-5 sm:mb-6">
                  <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                    <div className="relative w-24 h-8 sm:w-28 sm:h-9 md:w-32 md:h-10">
                        <Image
                          src="/logo.png"
                          alt="Payroll Logo"
                          fill
                          className="object-contain object-left"
                          priority
                        />
                    </div>
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-m-2.5 rounded-md p-2 sm:p-2.5 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* THE NEW DIVIDER LINE  */}
                <div className="w-full h-px bg-gray-300" />

                {/*  Added padding here */}
                <div className="flex flex-col items-center space-y-4 sm:space-y-6 py-6 px-4 sm:px-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        setMobileMenuOpen(false); 
                        const element = document.querySelector(link.href) as HTMLElement | null;
                        if (element) {
                          const offsetTop = element.offsetTop - 80; 
                          window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                          });
                        }
                      }}
                      className="text-base sm:text-lg font-semibold text-gray-900 hover:text-[#42A5E8] transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      
    </header>
  );
}