
import React from 'react';
import { ShieldAlert, Activity, HeartPulse, ClipboardCheck, PhoneCall, Mail } from 'lucide-react';


export const metadata = {
  title: "Pharmacovigilance",
  description: "Our commitment to patient safety. Report adverse events and learn about our drug safety monitoring protocols.",
};
export default function Pharmacovigilance() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-emerald-900 text-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 px-4 py-2 rounded-full mb-6 border border-emerald-400/30">
            <ShieldAlert size={20} className="text-emerald-400" />
            <span className="text-sm font-bold tracking-widest uppercase">Patient Safety First</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Pharmacovigilance</h1>
          <p className="text-emerald-100 max-w-3xl text-lg md:text-xl leading-relaxed">
            Ensuring the ongoing safety and efficacy of our pharmaceutical products through 
            rigorous monitoring and adverse event reporting systems.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Commitment to Safety</h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              At **Kontazio Private Limited**, we are committed to the highest standards of drug safety. 
              Our pharmacovigilance system is designed to detect, assess, understand, and prevent 
              adverse effects or any other medicine-related problems.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Continuous Monitoring", desc: "Real-time tracking of product safety profiles post-market launch.", icon: <Activity className="text-emerald-600" /> },
                { title: "Global Compliance", desc: "Adhering to ICH and local regulatory guidelines for safety reporting.", icon: <ClipboardCheck className="text-emerald-600" /> },
                { title: "Patient Well-being", desc: "Prioritizing risk management to minimize side effects and optimize benefits.", icon: <HeartPulse className="text-emerald-600" /> }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-slate-800">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reporting Form / Contact Box */}
          <div className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Report an Adverse Event</h3>
            <p className="text-slate-500 mb-8">
              If you are a healthcare professional or a patient and wish to report a side effect or 
              quality complaint related to our products, please contact us immediately.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center">
                  <PhoneCall size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-widest">24/7 Helpline</p>
                  <p className="text-lg font-bold text-slate-800">+91 9913701668</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-widest">Email for Reporting</p>
                  <p className="text-lg font-bold text-slate-800">info@kontaziochem.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-amber-50 border border-amber-100 rounded-xl">
              <p className="text-xs text-amber-800 leading-relaxed italic">
                * Note: This contact is specifically for safety reporting. For general inquiries, 
                please visit our Contact Us page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}