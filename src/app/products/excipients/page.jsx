"use client";
import React, { useState } from 'react';
import { excipientsData } from '@/data/products';
import { Search, Beaker, ChevronRight } from 'lucide-react';

export default function ExcipientsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 pt-20 pb-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-4 text-indigo-600">
            <Beaker size={28} />
            <span className="font-bold tracking-widest text-sm uppercase">Ingredients</span>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">{excipientsData.title}</h1>
          <p className="text-slate-500 max-w-2xl">{excipientsData.description}</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-10">
        {/* Search */}
        <div className="max-w-md mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search excipient name..." 
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="space-y-12">
          {excipientsData.categories.map((group, idx) => {
            // Filter items based on search
            const filteredItems = group.items.filter(item => 
              item.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (filteredItems.length === 0) return null;

            return (
              <div key={idx}>
                <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <div className="w-2 h-8 bg-indigo-600 rounded-full"></div>
                  {group.group}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredItems.map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-xl hover:shadow-md transition-all group cursor-default">
                      <span className="text-slate-600 group-hover:text-indigo-600 font-medium">{item}</span>
                      <ChevronRight size={14} className="text-slate-300 group-hover:text-indigo-400" />
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