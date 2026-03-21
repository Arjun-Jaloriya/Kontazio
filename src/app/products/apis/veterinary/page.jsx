"use client";
import React, { useState } from 'react';
import { vetApis } from '@/data/products';
import { Search, Dog, ChevronRight } from 'lucide-react';

export default function VeterinaryApisPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = vetApis
    .filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort();

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Page Header */}
      <div className="bg-emerald-50 py-16 border-b border-emerald-100">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-emerald-600 p-2 rounded-lg text-white">
               <Dog size={24} />
            </div>
            <h1 className="text-3xl font-bold text-slate-900">Veterinary APIs</h1>
          </div>
          <p className="text-slate-600 max-w-2xl">
            High-potency active ingredients specifically formulated for animal health, 
            livestock, and veterinary medicine.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-10">
        {/* Search Bar */}
        <div className="relative max-w-xl mb-12">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="Search Veterinary API..." 
            className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* List Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((api, index) => (
            <div 
              key={index} 
              className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-xl hover:shadow-md hover:border-emerald-200 transition-all group"
            >
              <span className="text-slate-800 font-medium group-hover:text-emerald-600">
                {api}
              </span>
              <ChevronRight size={16} className="text-slate-300 group-hover:text-emerald-600" />
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg font-medium">No results found.</p>
          </div>
        )}
      </div>
    </div>
  );
}