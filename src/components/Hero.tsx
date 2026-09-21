import React from 'react';
import { COMPANY_DETAILS } from '../data/profileData';

export const Hero: React.FC = () => {
  return (
    <section id="page-1" className="relative min-h-[92vh] flex items-center pt-24 pb-16 bg-[#0A1B33] text-white overflow-hidden border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Cover Text (Exact Layout from PDF Page 1) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Logo & 3 Brand Dots */}
            <div className="flex items-center justify-between max-w-lg mb-8">
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

            {/* Title: Company Profile 2026 */}
            <div className="space-y-1">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-none">
                Company <br />
                Profile
              </h1>
              <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#5B8CA8] tracking-tight">
                2026
              </div>
            </div>

            {/* Thin Cyan/Blue Divider Line */}
            <div className="pt-4 pb-2">
              <div className="w-48 h-[2px] bg-[#386690]"></div>
            </div>

            {/* Subtitle: BRIGHT INTEGRATED SUPPORT SERVICES COMPANY (BIC) */}
            <div className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold uppercase tracking-wider text-white">
                {COMPANY_DETAILS.name}
              </h2>

              {/* Tagline: “Your Integrated Support Services Partner in KSA” */}
              <p className="text-lg sm:text-xl italic font-light text-[#94A3B8]">
                {COMPANY_DETAILS.tagline}
              </p>
            </div>

            {/* QR Code and Quick Anchor */}
            <div className="pt-6 flex items-center space-x-4">
              <div className="w-20 h-20 bg-white p-1.5 rounded-lg shadow-md shrink-0">
                <img 
                  src="/assets/qr-code.png" 
                  alt="BIC QR Code" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-xs text-slate-400">
                <span className="text-white font-semibold block uppercase">Official Company Profile</span>
                <span>Al Anoud Tower 2, 12th Floor, Riyadh, KSA</span>
              </div>
            </div>

          </div>

          {/* Right Column: Skyscraper Cover Image (from PDF Page 1) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/60 bg-slate-900">
              <img 
                src="/assets/hero-tower.png" 
                alt="BIC Riyadh Headquarters Tower" 
                className="w-full h-auto object-cover max-h-[620px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B33]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-xs bg-[#0A1B33]/90 backdrop-blur-sm p-3 rounded-xl border border-slate-700 text-slate-200 flex items-center justify-between">
                <span>Riyadh HQ · Al Anoud Tower 2, 12th Floor</span>
                <span className="text-blue-400 font-bold uppercase text-[10px]">Page 01</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
