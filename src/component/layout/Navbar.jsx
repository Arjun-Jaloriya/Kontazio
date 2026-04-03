"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Image કમ્પોનન્ટ ઈમ્પોર્ટ કરો
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Quality', href: '/quality-compliance' },
    { name: 'About Us', href: '/aboutus' },
    { name: 'Contact', href: '/contactus' },
  ];

  return (
    <nav className="bg-white border-b border-slate-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex items-center">
           <Link href="/" className="flex items-center">
  {/* અહીં નવો કોડ છે */}
  <Image 
    src="/Kontaziologo1.png" // તમારી ટ્રાન્સપરન્ટ PNG ફાઈલ
    alt="Kontazio Logo"
    width={160} // લોગોની પિક્સલ width (આને તમે વધારે-ઓછી કરી શકો છો)
    height={100} // લોગોની પિક્સલ height
    className="object-contain h-auto w-auto" // આનાથી રેશિયો જળવાઈ રહેશે
    priority 
  />
  
  {/* જો તમે બાજુમાં લખાણ પણ રાખવા માંગતા હોવ (જેમ પહેલા હતું), તો આને એક્ટિવ કરો, નહીંતર તેને કાઢી નાખો */}
  {/* <span className="ml-3 text-xl font-bold text-slate-900 tracking-tight">
    Kontazio <span className="text-blue-600">Private Limited</span>
  </span> */}
</Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-50">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;