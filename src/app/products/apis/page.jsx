import React from 'react';
import Link from 'next/link';
import { Users, Dog, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ApiSelectionPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Header Section */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Active Pharmaceutical <span className="text-blue-500">Ingredients</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Kontazio provides high-quality API solutions catering to both human healthcare and animal wellness across the globe.
          </p>
        </div>
      </section>

      {/* 2. Selection Cards */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            
            {/* Human API Card */}
            <Link href="/products/apis/human" className="group">
              <div className="h-full p-10 bg-slate-50 border border-slate-100 rounded-[3rem] transition-all duration-500 hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-200 group-hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-blue-600 transition-colors shadow-lg">
                  <Users size={32} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-white transition-colors">Human APIs</h2>
                <p className="text-slate-600 mb-8 group-hover:text-blue-100 transition-colors leading-relaxed">
                  Explore our portfolio of over 500+ high-purity APIs including Cardiology, Oncology, and Antibiotics.
                </p>
                <div className="flex items-center gap-2 text-blue-600 font-bold group-hover:text-white transition-colors">
                  View Portfolio <ArrowRight size={20} />
                </div>
              </div>
            </Link>

            {/* Veterinary API Card */}
            <Link href="/products/apis/veterinary" className="group">
              <div className="h-full p-10 bg-slate-50 border border-slate-100 rounded-[3rem] transition-all duration-500 hover:bg-emerald-600 hover:shadow-2xl hover:shadow-emerald-200 group-hover:-translate-y-2">
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-emerald-600 transition-colors shadow-lg">
                  <Dog size={32} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-white transition-colors">Veterinary APIs</h2>
                <p className="text-slate-600 mb-8 group-hover:text-emerald-100 transition-colors leading-relaxed">
                  Specialized formulations for animal health, poultry, and livestock with international quality compliance.
                </p>
                <div className="flex items-center gap-2 text-emerald-600 font-bold group-hover:text-white transition-colors">
                  View Portfolio <ArrowRight size={20} />
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* 3. Global Compliance Bar */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-2 font-bold text-slate-700">
              <ShieldCheck className="text-blue-600" /> WHO-GMP Certified
            </div>
            <div className="flex items-center gap-2 font-bold text-slate-700">
              <ShieldCheck className="text-blue-600" /> USFDA Compliant
            </div>
            <div className="flex items-center gap-2 font-bold text-slate-700">
              <ShieldCheck className="text-blue-600" /> CEP/EDMF Documentation
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}