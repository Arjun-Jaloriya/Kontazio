"use client";
import React, { useState } from 'react';
import { humanApis } from '@/data/products';
import { Search, ChevronRight, Activity } from 'lucide-react';

export default function HumanApisPage() {
  const [searchTerm, setSearchTerm] = useState("");

  // दवाओं को Filter और A-Z Sort करना
  const filteredProducts = humanApis
    .filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => a.localeCompare(b));

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. Header Section */}
      <section className="bg-slate-900 pt-20 pb-16 relative overflow-hidden">
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-600 p-2 rounded-lg text-white">
              <Activity size={24} />
            </div>
            <span className="text-blue-400 font-bold uppercase tracking-widest text-sm">Portfolio</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Human APIs</h1>
          <p className="text-slate-400 max-w-2xl text-lg">
            A comprehensive range of high-purity Active Pharmaceutical Ingredients (APIs) 
            manufactured under strict global quality standards for human healthcare.
          </p>
        </div>
      </section>

      {/* 2. Interactive Search & Stats */}
      <section className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-slate-100 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Search formulation (e.g. Paracetamol)..." 
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all shadow-sm"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="text-slate-500 font-medium bg-slate-100 px-4 py-2 rounded-lg text-sm">
              Total Formulations: <span className="text-blue-600 font-bold">{filteredProducts.length}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Product Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredProducts.map((name, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-xl hover:shadow-lg hover:border-blue-300 hover:bg-blue-50/30 transition-all group cursor-default"
                >
                  <span className="text-slate-700 font-semibold text-sm md:text-base group-hover:text-blue-700">
                    {name}
                  </span>
                  <ChevronRight size={16} className="text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200">
              <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">No Match Found</h3>
              <p className="text-slate-500">We couldn't find any API matching "{searchTerm}"</p>
              <button 
                onClick={() => setSearchTerm("")}
                className="mt-4 text-blue-600 font-bold hover:underline"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 4. Quality Disclaimer */}
      <section className="bg-slate-50 py-10 mt-10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-500 text-sm max-w-3xl mx-auto italic">
            * All products listed above are manufactured under GMP compliance. Please contact our sales department 
            for specific pharmacopoeia standards (IP/BP/USP/EP) and documentation availability.
          </p>
        </div>
      </section>
    </div>
  );
}