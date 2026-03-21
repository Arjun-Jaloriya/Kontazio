"use client";
import React, { useState } from 'react';
import { herbalData } from '@/data/products';
import { Search, Leaf, Wind, Droplets } from 'lucide-react';

export default function HerbalPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="bg-[#fcfdfa] min-h-screen pb-20">
      {/* Nature Header */}
      <div className="bg-[#163020] text-white py-20 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 opacity-10">
          <Leaf size={300} />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-4 text-[#91C08E]">
            <Leaf size={28} />
            <span className="font-bold tracking-widest text-sm uppercase">100% Natural</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{herbalData.title}</h1>
          <p className="text-[#EEF0E5]/80 max-w-2xl text-lg">
            {herbalData.description}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-4">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto bg-white p-2 rounded-2xl shadow-xl border border-emerald-100 mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-300" size={20} />
            <input 
              type="text" 
              placeholder="Search herbal extracts, essential oils, or mint..." 
              className="w-full pl-12 pr-4 py-4 rounded-xl outline-none focus:bg-emerald-50 transition-all text-slate-800"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="space-y-16">
          {herbalData.categories.map((group, idx) => {
            const filteredItems = group.items.filter(item => 
              item.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (filteredItems.length === 0) return null;

            return (
              <div key={idx} className="scroll-mt-20">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg">
                    {group.group === "Essential Oils" ? <Droplets size={24}/> : <Wind size={24}/>}
                  </div>
                  <h2 className="text-2xl font-bold text-[#163020]">{group.group}</h2>
                  <div className="flex-1 h-[1px] bg-emerald-100"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredItems.map((item, i) => (
                    <div key={i} className="p-4 bg-white border border-emerald-50 rounded-xl hover:bg-emerald-50 hover:border-emerald-200 transition-all cursor-default group">
                      <span className="text-slate-600 group-hover:text-emerald-800 font-medium">
                        {item}
                      </span>
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