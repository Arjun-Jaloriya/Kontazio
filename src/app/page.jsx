import React from 'react';
import { ArrowRight, Microscope, ShieldCheck, Activity, Beaker, Globe, Award } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 lg:py-32 overflow-hidden">
        {/* Abstract Background Design */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full scale-150">
            <path fill="#FFFFFF" d="M44.7,-76.4C58.1,-69.2,69.5,-57.4,77.3,-43.7C85.1,-30.1,89.2,-15,88.1,-0.6C87,13.8,80.7,27.6,71.8,39.3C62.9,51,51.4,60.6,38.5,68.4C25.6,76.1,12.8,82.1,-0.9,83.7C-14.7,85.3,-29.3,82.5,-42.6,75.1C-55.8,67.7,-67.7,55.7,-75.3,41.6C-82.9,27.5,-86.2,11.2,-84.3,-4.2C-82.5,-19.6,-75.5,-34.1,-65.4,-45.8C-55.3,-57.4,-42.1,-66.2,-28.5,-73.3C-14.9,-80.4,0.1,-85.8,15.6,-84.9C31.1,-84,46.2,-76.7,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-6">
              <ShieldCheck size={16} /> 
              <span>Global Standards. Reliable Healthcare.</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
              Innovating for a <span className="text-blue-400">Healthier</span> Tomorrow.
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              <strong className="text-white">Kontazio</strong> is a global pharmaceutical leader dedicated to high-quality medicine, cutting-edge R&D, and accessible healthcare solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href={"/products"} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-600/30">
                View Formulations <ArrowRight size={20} />
              </Link>
              {/* <Link href={"/contactus"} className="border border-slate-600 hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-full font-bold transition-all">
                Our R&D Center
              </Link> */}
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE FOCUS AREAS */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">What We Do</h2>
              <p className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Empowering lives through pharmaceutical excellence.
              </p>
            </div>
            <p className="text-slate-500 max-w-sm">
              From generic drugs to specialized life-saving formulations, Kontazio covers a wide spectrum of therapeutic areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group p-10 bg-slate-50 rounded-3xl hover:bg-blue-600 transition-all duration-500">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-8 shadow-sm group-hover:scale-110 transition-transform">
                <Beaker size={30} />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">Advanced R&D</h3>
              <p className="text-slate-600 group-hover:text-blue-100 transition-colors">
                Our world-class laboratories focus on molecular research to develop better therapeutic outcomes.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group p-10 bg-slate-50 rounded-3xl hover:bg-blue-600 transition-all duration-500">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-8 shadow-sm group-hover:scale-110 transition-transform">
                <Microscope size={30} />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">Quality Control</h3>
              <p className="text-slate-600 group-hover:text-blue-100 transition-colors">
                Strict adherence to WHO-GMP standards ensures that every tablet from Kontazio is safe and effective.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group p-10 bg-slate-50 rounded-3xl hover:bg-blue-600 transition-all duration-500">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-8 shadow-sm group-hover:scale-110 transition-transform">
                <Globe size={30} />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">Global Export</h3>
              <p className="text-slate-600 group-hover:text-blue-100 transition-colors">
                Supplying essential medicines to over 40+ countries with a robust cold-chain supply network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRUST & STATS */}
      <section className="bg-slate-900 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div className="space-y-2">
              <div className="text-5xl font-extrabold text-white">5+</div>
              <div className="text-blue-400 font-medium">Years of Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-extrabold text-white">100+</div>
              <div className="text-blue-400 font-medium">Excipients & API</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-extrabold text-white">100%</div>
              <div className="text-blue-400 font-medium">GMP Compliance</div>
            </div>
            {/* <div className="space-y-2">
              <div className="text-5xl font-extrabold text-white">10+</div>
              <div className="text-blue-400 font-medium">Employees</div>
            </div> */}
          </div>
        </div>
      </section>

      {/* 4. MISSION CALLOUT */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
             {/* Decorative Circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-20 -mb-20"></div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 relative z-10">
              Dedicated to Improving the <br /> Quality of Human Life.
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
              At Kontazio, we believe healthcare is a right, not a privilege. Join us in our journey to make medicines affordable and accessible.
            </p>
            <div className="flex justify-center gap-4 relative z-10">
              <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors">
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}