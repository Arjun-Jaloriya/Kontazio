import React from 'react';
import { Target, Eye, Award, Users, FlaskConical, Globe } from 'lucide-react';


export const metadata = {
  title: "About Us", 
  description: "Learn more about Kontazio Private Limited, our mission, vision, and our legacy in the pharmaceutical industry.",
};


export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. Hero Section - The Story */}
      <section className="relative py-20 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Our Legacy</h2>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Driven by Science, <br /> 
              <span className="text-blue-600">Inspired by Life.</span>
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Founded in 2020, **Kontazio** started with a single mission: to make high-quality healthcare accessible to everyone. Over the last two decades, we have evolved Raw Material, API from into a global pharmaceutical powerhouse.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Today, we specialize in a wide range of therapeutic areas including Cardiology, Oncology, and Rare Diseases, impacting millions of lives across 40+ countries.
            </p>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-blue-100 rounded-[3rem] overflow-hidden relative">
               {/* Replace with your actual office or lab image */}
               <div className="absolute inset-0 flex items-center justify-center text-blue-200">
                  <FlaskConical size={200} strokeWidth={1} />
               </div>
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
              <span className="block text-4xl font-bold text-blue-600">5+</span>
              <span className="text-slate-500 font-medium">Years of Innovation</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-10 bg-blue-600 rounded-[2rem] text-white">
              <Target size={40} className="mb-6 opacity-80" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-blue-100 leading-relaxed italic">
                "To discover, develop and deliver innovative medicines that help patients prevail over serious diseases."
              </p>
            </div>
            <div className="p-10 bg-slate-900 rounded-[2rem] text-white">
              <Eye size={40} className="mb-6 opacity-80" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-slate-400 leading-relaxed italic">
                "To be the most trusted global healthcare partner, recognized for our commitment to quality and patient-centric research."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Values That Guide Us</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Award />, title: "Uncompromising Quality", desc: "Every product undergoes 200+ quality checks before reaching the pharmacy." },
            { icon: <Users />, title: "Patient First", desc: "Our research is driven by real patient needs and community health challenges." },
            { icon: <Globe />, title: "Global Integrity", desc: "We adhere to international ethical standards and transparency in all operations." }
          ].map((val, i) => (
            <div key={i} className="p-8 border border-slate-100 rounded-2xl hover:border-blue-200 hover:shadow-lg transition-all text-center">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                {val.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900">{val.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Infrastructure Stats */}
      {/* <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">04</div>
              <div className="text-slate-400 text-sm uppercase tracking-widest">R&D Centers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">12k+</div>
              <div className="text-slate-400 text-sm uppercase tracking-widest">Scientists</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">90%</div>
              <div className="text-slate-400 text-sm uppercase tracking-widest">Efficiency Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">300+</div>
              <div className="text-slate-400 text-sm uppercase tracking-widest">SKUs Globally</div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}