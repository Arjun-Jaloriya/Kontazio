import React from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Kontazio Private Limited for inquiries, partnerships, and expert regulatory support.",
};

export default function ContactPage() {

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Header Section */}
      <section className="bg-slate-900 py-16 md:py-24 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Connect with **Kontazio** for medical inquiries, business partnerships, or global distribution.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
            
            {/* 2. Office Information */}
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Reach Out</h2>
                <p className="text-slate-600">
                  Our dedicated team is available to assist you with pharmaceutical solutions and services.
                </p>
              </div>

              <div className="space-y-8">
                {/* Location */}
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Registered Office</h4>
                    <p className="text-slate-600 text-sm leading-relaxed mt-1">
                      A-4, Satyam Industries Estate, Moraiya, Changodar, Ahmedabad-382 213, India
                      
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Direct Contact</h4>
                    <p className="text-slate-600 text-sm mt-1">+91 9913701668</p>
                    {/* <p className="text-slate-600 text-sm">1800-KONTAZIO (Toll-Free)</p> */}
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Email Address</h4>
                    <p className="text-slate-600 text-sm mt-1">kontazio.exports@gmail.com</p>
                    
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden">
                
                {/* Success Message */}
                {/* {submitted && (
                  <div className="absolute inset-0 bg-blue-600 z-20 flex flex-col items-center justify-center text-white p-8 transition-all duration-500">
                    <CheckCircle size={60} className="mb-4 animate-bounce" />
                    <h3 className="text-2xl font-bold">Message Sent Successfully!</h3>
                    <p className="text-blue-100 mt-2 text-center">
                      Our team will get back to you within 24-48 business hours.
                    </p>
                  </div>
                )} */}

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-500 uppercase">Full Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-500 uppercase">Email</label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-xs font-bold text-slate-500 uppercase">Inquiry Type</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all appearance-none bg-white">
                      <option>Bulk Supply / Distribution</option>
                      <option>Research Collaboration</option>
                      <option>Career / Human Resources</option>
                      <option>Side Effect Reporting</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-xs font-bold text-slate-500 uppercase">Your Message</label>
                    <textarea 
                      required
                      rows="4"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                      placeholder="Describe your requirement..."
                    ></textarea>
                  </div>

                  <div className="md:col-span-2 pt-2">
                    <button 
                      type="submit" 
                      className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-xl flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1"
                    >
                      Send Message <Send size={18} />
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}