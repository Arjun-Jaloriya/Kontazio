"use client";
import React, { useState } from 'react';
import { finishedDosagesData } from '@/data/products';
import { Search, Package, Pill } from 'lucide-react';

export default function FinishedDosagesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = finishedDosagesData.items.filter(item => 
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen">
      {/* Dynamic Header */}
      <div className="bg-emerald-900 text-white py-16">
        <div className="container mx-auto px-6 text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center gap-3 mb-4 text-emerald-400">
            <Package size={28} />
            <span className="font-bold tracking-widest text-xs uppercase">Ready Formulations</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{finishedDosagesData.title}</h1>
          <p className="text-emerald-100/70 max-w-2xl text-lg">
            {finishedDosagesData.description}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-8">
        {/* Search Bar */}
        <div className="bg-white p-2 rounded-2xl shadow-xl border border-slate-100 mb-10">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search formulations (e.g. Paracetamol, Tablet, Capsule)..." 
              className="w-full pl-12 pr-4 py-4 rounded-xl outline-none focus:bg-slate-50 transition-all text-slate-800"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-slate-500 font-medium">
          Found {filteredItems.length} Products
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-20">
          {filteredItems.map((item, index) => (
            <div key={index} className="flex items-center gap-4 p-5 bg-white border border-slate-100 rounded-2xl hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/5 transition-all group">
              <div className="bg-emerald-50 p-3 rounded-xl group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                <Pill size={20} className="text-emerald-600 group-hover:text-white" />
              </div>
              <span className="text-slate-700 font-semibold leading-tight group-hover:text-emerald-900">
                {item}
              </span>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
            <p className="text-slate-400 text-lg">No formulations found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}