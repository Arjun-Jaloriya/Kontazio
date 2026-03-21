"use client";
import React from 'react';
import { regulatoryData } from '@/data/products';
import { 
  Layout, ShieldCheck, FileCheck, Beaker, 
  Clipboard, Truck, Globe, MapPin, ExternalLink 
} from 'lucide-react';

const iconMap = {
  Layout: <Layout />,
  ShieldCheck: <ShieldCheck />,
  FileCheck: <FileCheck />,
  Beaker: <Beaker />,
  Clipboard: <Clipboard />,
  Truck: <Truck />,
  Globe: <Globe />
};

export default function RegulatoryPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Premium EU Header */}
      <div className="bg-[#003399] text-white py-24 relative overflow-hidden">
        {/* Subtle EU Flag Pattern */}
        <div className="absolute top-0 right-0 p-10 opacity-10">
          <Globe size={300} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 px-4 py-2 rounded-full mb-6 border border-blue-400/30">
            <MapPin size={18} className="text-blue-300" />
            <span className="text-sm font-bold tracking-widest uppercase">Exclusive Partnership</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            {regulatoryData.title}
          </h1>
          <p className="text-blue-100 max-w-3xl text-lg md:text-xl leading-relaxed">
            {regulatoryData.description}
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regulatoryData.services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-blue-500 transition-all group"
            >
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                {React.cloneElement(iconMap[service.icon], { size: 28 })}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-700">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.desc}
              </p>
              <div className="flex items-center gap-2 text-sm font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                ENQUIRE NOW <ExternalLink size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* EU Compliance Footer */}
      <div className="container mx-auto px-6 mt-20">
        <div className="bg-white border border-slate-200 rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Ready for theMarket?</h2>
            <p className="text-slate-500 text-lg">Our experts ensure your registration and distribution is handled with 100% compliance.</p>
          </div>
          <button className="bg-[#003399] text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-colors whitespace-nowrap">
            Contact Partner Office
          </button>
        </div>
      </div>
    </div>
  );
}