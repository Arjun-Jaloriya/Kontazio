"use client";
import React, { useState } from 'react';
import { machineryData } from '@/data/products';
import { Search, Settings, Cpu, Box, Wrench } from 'lucide-react';

export default function MachineryPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="bg-[#f8fafc] min-h-screen pb-20">
      {/* Industrial Header */}
      <div className="bg-[#1e293b] text-white py-20 border-b-8 border-blue-500">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-6 text-blue-400">
            <Settings className="animate-spin-slow" size={32} />
            <span className="font-bold tracking-[0.2em] uppercase text-sm">Industrial Solutions</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">{machineryData.title}</h1>
          <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
            {machineryData.description}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-10">
        {/* Search Bar */}
        <div className="max-w-3xl mx-auto bg-white p-3 rounded-2xl shadow-2xl border border-slate-200 mb-16">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={24} />
            <input 
              type="text" 
              placeholder="Search by Machine Type (e.g. Compression, Filling, Packing)..." 
              className="w-full pl-14 pr-6 py-5 bg-slate-50 rounded-xl outline-none focus:ring-4 focus:ring-blue-500/10 transition-all text-slate-800 font-medium"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Machinery Sections */}
        <div className="grid grid-cols-1 gap-12">
          {machineryData.categories.map((group, idx) => {
            const filteredItems = group.items.filter(item => 
              item.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (filteredItems.length === 0) return null;

            return (
              <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-200">
                    <Cpu size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">{group.group}</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredItems.map((item, i) => (
                    <div key={i} className="group p-6 bg-slate-50 rounded-2xl border border-transparent hover:border-blue-500 hover:bg-white transition-all flex flex-col justify-between">
                      <div className="mb-4 text-slate-400 group-hover:text-blue-500 transition-colors">
                        <Box size={20} />
                      </div>
                      <h3 className="text-slate-700 font-bold group-hover:text-slate-900 transition-colors">
                        {item}
                      </h3>
                     <div className="mt-4 flex items-center gap-2 text-xs font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
  VIEW SPECS <Wrench size={12} /> 
</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}