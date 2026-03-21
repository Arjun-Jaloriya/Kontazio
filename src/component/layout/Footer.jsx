import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, ShieldCheck, Linkedin, Twitter, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & Certification */}
          <div className="space-y-4">
            <h2 className="text-white text-2xl font-bold tracking-tight">
              Kontazio<span className="text-blue-500"> Private Limited</span>
            </h2>
            <p className="text-sm leading-relaxed">
              Leading the way in pharmaceutical excellence. We specialize in research, 
              development, and distribution of life-saving medications worldwide.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium border border-emerald-400/20 bg-emerald-400/5 px-3 py-2 rounded-md w-fit">
              <ShieldCheck size={18} />
              <span>WHO-GMP & ISO Certified</span>
            </div>
          </div>

          
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase text-xs tracking-widest">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link href="/aboutus" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/products" className="hover:text-blue-400 transition-colors">Products</Link></li>
              <li><Link href="/contactus" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
              <li><Link href="/products/regulatory" className="hover:text-blue-400 transition-colors font-medium text-blue-400">Regulatory Services</Link></li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase text-xs tracking-widest">Compliance</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/quality-compliance" className="hover:text-blue-400 transition-colors">Quality & Compliance</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="/pharmacovigilance" className="hover:text-blue-400 transition-colors">Pharmacovigilance</Link></li>
              
            </ul>
          </div>
          

          
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase text-xs tracking-widest">Global Support</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="text-blue-500 shrink-0 mt-1" size={18} />
                <span className="leading-relaxed">
                  A-4, Satyam Industries Estate, Moraiya, Changodar, Ahmedabad-382 213, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-blue-500 shrink-0" size={18} />
                <a href="tel:+919913701668" className="hover:text-white transition-colors">+91 9913701668</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-blue-500 shrink-0" size={18} />
                <a href="mailto:info@kontaziochem.com" className="hover:text-white transition-colors">info@kontaziochem.com</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-slate-800 my-8" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-slate-500 text-center md:text-left">
            <p>© {new Date().getFullYear()} Kontazio Private Limited. All rights reserved.</p>
          </div>
          
          <div className="flex gap-4">
            <Link href="https://linkedin.com" target="_blank" className="p-2.5 bg-slate-800 rounded-full hover:bg-[#0077b5] transition-all group">
              <Linkedin size={18} className="text-slate-400 group-hover:text-white" />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="p-2.5 bg-slate-800 rounded-full hover:bg-black transition-all group">
              <Twitter size={18} className="text-slate-400 group-hover:text-white" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;