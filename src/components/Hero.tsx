import React from 'react';
import { ArrowRight, Building2, ShieldCheck, Briefcase } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/profileData';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 bg-gradient-to-b from-[#07111E] via-[#0B1A2E] to-[#0D1F36] overflow-hidden border-b border-slate-800">
      {/* Background glowing effects */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-[32rem] h-[32rem] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Cover & Identity (Page 1) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Dots + Profile badge */}
            <div className="flex items-center space-x-3">
              <div className="bic-dots-lg">
                <span className="dot-yellow"></span>
                <span className="dot-green"></span>
                <span className="dot-red"></span>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-950/70 border border-blue-800/60 px-3 py-1 rounded-full">
                Company Profile 2026
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                Company <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-100 to-white">
                  Profile
                </span>{' '}
                <span className="text-blue-400">2026</span>
              </h1>
              
              <div className="pt-2 border-t-2 border-blue-500/80 w-32"></div>

              <h2 className="text-lg sm:text-xl font-bold uppercase tracking-wider text-slate-100 mt-2">
                BRIGHT INTEGRATED SUPPORT SERVICES COMPANY (BIC)
              </h2>

              <p className="text-xl sm:text-2xl italic font-light text-blue-300">
                “Your Integrated Support Services Partner in KSA”
              </p>
            </div>

            {/* Document Context / Overview */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              Complete integrated business support services designed for multinational companies, 
              potential foreign companies, and local enterprises navigating the regulatory and operational landscape 
              of the Kingdom of Saudi Arabia.
            </p>

            {/* Key Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#competencies"
                className="inline-flex items-center px-6 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all hover:translate-y-[-1px]"
              >
                <span>Explore 17 Core Competencies</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>

              <a
                href="#business-center"
                className="inline-flex items-center px-6 py-3.5 rounded-xl bg-slate-800/90 text-slate-100 font-semibold text-sm hover:bg-slate-700 border border-slate-700 transition-all"
              >
                <Building2 className="w-4 h-4 mr-2 text-blue-400" />
                <span>BIC Business Center</span>
              </a>

              <a
                href="#gov-relations"
                className="inline-flex items-center px-5 py-3.5 rounded-xl bg-slate-900/90 text-slate-300 font-medium text-sm hover:text-white hover:bg-slate-800 border border-slate-800 transition-all"
              >
                <ShieldCheck className="w-4 h-4 mr-2 text-emerald-400" />
                <span>45 Government Relations</span>
              </a>
            </div>

            {/* Mini Quick Fact Highlights (Page 2 data) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80">
              <div className="bg-[#0f233d]/70 rounded-xl p-3 border border-slate-800">
                <div className="text-2xl font-black text-white">{COMPANY_DETAILS.initiatedYear}</div>
                <div className="text-xs text-slate-400">Initiated</div>
              </div>
              <div className="bg-[#0f233d]/70 rounded-xl p-3 border border-slate-800">
                <div className="text-2xl font-black text-white">{COMPANY_DETAILS.establishedYear}</div>
                <div className="text-xs text-slate-400">Established Company</div>
              </div>
              <div className="bg-[#0f233d]/70 rounded-xl p-3 border border-slate-800">
                <div className="text-2xl font-black text-blue-400">{COMPANY_DETAILS.activeClients}</div>
                <div className="text-xs text-slate-400">Current Active Clients</div>
              </div>
              <div className="bg-[#0f233d]/70 rounded-xl p-3 border border-slate-800">
                <div className="text-2xl font-black text-emerald-400">{COMPANY_DETAILS.upcomingClients}</div>
                <div className="text-xs text-slate-400">Upcoming Clients</div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Cover Composition (from PDF Page 1) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Card Container mimicking the PDF Page 1 layout */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#0B1A2E] to-[#07111E] border border-slate-700/80 p-6 sm:p-8">
                
                {/* PDF Cover Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 rounded-xl bg-white p-1.5 shadow-lg">
                    <img 
                      src="/assets/logo.png" 
                      alt="BIC Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="bic-dots-lg">
                    <span className="dot-yellow"></span>
                    <span className="dot-green"></span>
                    <span className="dot-red"></span>
                  </div>
                </div>

                {/* Building Tower Image */}
                <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden border border-slate-700/60 mb-6 group">
                  <img 
                    src="/assets/hero-tower.png" 
                    alt="BIC Riyadh Corporate Building" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A2E] via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-xs bg-[#0B1A2E]/80 backdrop-blur-sm p-2 rounded-lg border border-slate-700/50 text-slate-200">
                    <span className="font-semibold text-white">Riyadh HQ:</span> Al Anoud Tower 2, 12th Floor, King Fahad Road
                  </div>
                </div>

                {/* Footer with QR Code & Tagline */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <div className="pr-4">
                    <p className="text-xs uppercase font-bold text-slate-200 tracking-wider">
                      Bright Integrated
                    </p>
                    <p className="text-[11px] text-blue-400 font-medium">
                      Support Services Company (BIC)
                    </p>
                    <p className="text-[10px] text-slate-400 italic mt-1">
                      “Your Integrated Support Services Partner in KSA”
                    </p>
                  </div>
                  <div className="w-16 h-16 bg-white p-1 rounded-lg shrink-0 shadow-md">
                    <img 
                      src="/assets/qr-code.png" 
                      alt="BIC QR Code" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

              </div>

              {/* Floating feature pill */}
              <div className="absolute -bottom-4 -left-4 bg-[#0F284B] border border-blue-500/50 text-white px-4 py-2 rounded-xl shadow-xl flex items-center space-x-2 text-xs font-semibold backdrop-blur-md">
                <Briefcase className="w-4 h-4 text-yellow-400" />
                <span>Operating Offices Across Multiple Countries</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
