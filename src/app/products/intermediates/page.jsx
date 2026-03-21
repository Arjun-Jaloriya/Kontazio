"use client";
import React, { useState } from 'react';
import { intermediatesData } from '@/data/products';
import { Search, FlaskConical, Database } from 'lucide-react';

export default function IntermediatesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = intermediatesData.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.use.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.cas.includes(searchTerm)
  );

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#0f172a] text-white py-20 border-b-4 border-blue-600">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 p-3 rounded-2xl shadow-lg shadow-blue-500/20">
              <FlaskConical size={32} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Drug Intermediates</h1>
          </div>
          <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
            High-purity chemical building blocks for pharmaceutical synthesis, 
            mapped with global CAS registry standards.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-8">
        {/* Search Box */}
        <div className="bg-white p-4 rounded-3xl shadow-xl border border-slate-100 mb-12">
          <div className="relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={24} />
            <input 
              type="text" 
              placeholder="Search by Product Name, CAS Number or API End Use..." 
              className="w-full pl-14 pr-6 py-5 bg-slate-50 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:bg-white outline-none transition-all text-slate-800 text-lg"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Info Bar */}
        <div className="flex items-center justify-between mb-6 px-2">
          <div className="flex items-center gap-2 text-slate-500 font-medium">
            <Database size={18} />
            <span>Showing {filteredData.length} records</span>
          </div>
        </div>

        {/* Professional Table */}
        <div className="bg-white border border-slate-200 rounded-[2rem] overflow-hidden shadow-sm overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-8 py-5 text-sm font-bold text-slate-600 uppercase tracking-wider">Product Name</th>
                <th className="px-8 py-5 text-sm font-bold text-slate-600 uppercase tracking-wider">CAS Number</th>
                <th className="px-8 py-5 text-sm font-bold text-slate-600 uppercase tracking-wider">Application (End Use)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredData.map((item, index) => (
                <tr key={index} className="hover:bg-blue-50/40 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="text-slate-900 font-semibold group-hover:text-blue-700 transition-colors">
                      {item.name}
                    </div>
                  </td>
                  <td className="px-4 py-6">
                    <span className="font-mono text-sm bg-blue-50 text-blue-700  py-1 rounded-lg border border-blue-100">
                      {item.cas}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                      <span className="text-slate-600 font-medium">{item.use}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {filteredData.length === 0 && (
            <div className="py-20 text-center">
              <div className="text-slate-300 mb-4 flex justify-center">
                <Search size={48} />
              </div>
              <p className="text-slate-500 text-lg">No intermediate found for your search.</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Footer Note */}
      <div className="container mx-auto px-6 py-12 text-center">
        <p className="text-slate-400 text-sm italic">
          * For COA, MSDS, and commercial inquiries, please contact our technical team.
        </p>
      </div>
    </div>
  );
}