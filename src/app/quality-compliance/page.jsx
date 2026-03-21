import React from 'react';
import { 
  ShieldCheck, Award, FileText, CheckCircle2, 
  Microscope, Building2, Factory, Scale 
} from 'lucide-react';

export const metadata = {
  title: "Quality & Compliance",
  description: "Learn about our uncompromising quality standards and international regulatory compliance protocols.",
};

export default function QualityCompliance() {
  const certifications = [
    { name: "WHO-GMP", desc: "Good Manufacturing Practices certification for global quality standards." },
    { name: "ISO 9001:2015", desc: "Quality Management Systems for manufacturing and distribution." },
    { name: "CEP/COS", desc: "Compliance with European Pharmacopoeia standards." },
    { name: "USFDA / EMA", desc: "Aligning with international regulatory agency guidelines." }
  ];

  const qualityPoints = [
    {
      title: "Stringent In-Process Controls",
      desc: "Our quality assurance team monitors every stage of production, from raw material sourcing to final dispatch.",
      icon: <Settings className="text-blue-600" size={24} />
    },
    {
      title: "Regulatory Documentation",
      desc: "Provision of complete USDMF, EDMF, and technical data sheets like COA and MSDS.",
      icon: <FileText className="text-blue-600" size={24} />
    },
    {
      title: "Stability Testing",
      desc: "Regular stability studies conducted in line with ICH guidelines to ensure product shelf-life and efficacy.",
      icon: <Microscope className="text-blue-600" size={24} />
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-10 -translate-y-12 translate-x-12">
          <ShieldCheck size={400} />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 px-4 py-2 rounded-full mb-6 border border-blue-400/30">
            <Award size={20} className="text-blue-400" />
            <span className="text-sm font-bold tracking-widest uppercase">Uncompromising Excellence</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Quality & Compliance</h1>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg md:text-xl">
            At our core, we prioritize pharmaceutical excellence through rigorous testing, 
            global regulatory compliance, and a commitment to patient safety.
          </p>
        </div>
      </div>

      {/* Certifications Row */}
      <div className="container mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {certifications.map((cert, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 text-center hover:translate-y-[-5px] transition-transform">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">{cert.name}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{cert.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Sections */}
      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <Factory className="text-blue-600" /> Our Quality Philosophy
            </h2>
            <div className="space-y-8">
              {qualityPoints.map((point, i) => (
                <div key={i} className="flex gap-6">
                  <div className="mt-1 w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0">
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">{point.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="bg-slate-50 rounded-[3rem] p-12 border border-slate-200 relative">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-xl">
              <Scale size={40} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Analytical Capabilities</h3>
            <ul className="space-y-4">
              {[
                "HPLC & GC Analysis",
                "Particle Size Distribution (PSD) Analysis",
                "Microbiological Testing",
                "Impurity Profiling as per ICH Q3A/B",
                "Forced Degradation Studies"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>

      {/* Bottom CTA */}
    
    </div>
  );
}

// Ensure you import 'Settings' from lucide-react at the top
import { Settings } from 'lucide-react';