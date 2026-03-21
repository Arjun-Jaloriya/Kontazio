"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Microscope, Beaker, Globe, Search } from 'lucide-react';

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
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-blue-600 p-1.5 rounded-lg text-white">
                <Beaker size={24} />
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">
                Kontazio Private Limited<span className="text-blue-600"></span>
              </span>
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
            
            {/* CTA Button */}
            {/* <button className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg">
              Partner With Us
            </button> */}
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
            {/* <button className="w-full mt-4 bg-blue-600 text-white px-5 py-3 rounded-lg text-base font-semibold">
              Partner With Us
            </button> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;