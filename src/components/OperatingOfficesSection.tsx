import React from 'react';
import { MapPin, Globe } from 'lucide-react';
import { OPERATING_OFFICES } from '../data/profileData';

export const OperatingOfficesSection: React.FC = () => {
  return (
    <section id="offices" className="py-24 bg-[#0B1A2E] text-slate-100 relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Page 20) */}
        <div className="mb-16">
          <div className="flex items-center space-x-2 mb-3">
            <div className="bic-dots">
              <span className="dot-yellow"></span>
              <span className="dot-green"></span>
              <span className="dot-red"></span>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              OPERATING OFFICES · ACROSS MULTIPLE COUNTRIES
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Our operating offices
              </h2>
              <div className="mt-3 h-1 w-24 bg-blue-500 rounded"></div>
            </div>
            <p className="text-xs sm:text-sm text-slate-400">
              6 Strategic Locations Across Saudi Arabia, UAE, Thailand & Kyrgyzstan
            </p>
          </div>
        </div>

        {/* 6 Office Cards (2 rows x 3 columns matching PDF Page 20) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {OPERATING_OFFICES.map((office) => (
            <div
              key={office.id}
              className="bg-gradient-to-b from-[#0D1F35] to-[#081525] border border-slate-800 rounded-2xl overflow-hidden shadow-xl hover:border-blue-500/60 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Office Building Photograph from PDF */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-950">
                  <img
                    src={office.image}
                    alt={`${office.title} - ${office.address}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-[#0B1A2E]/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-blue-300 border border-slate-700/60 flex items-center space-x-1">
                    <Globe className="w-3 h-3 text-blue-400" />
                    <span>{office.country}</span>
                  </div>
                </div>

                {/* Office Details */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {office.title}
                  </h3>

                  <div className="space-y-1.5 text-xs text-slate-300">
                    <p className="leading-relaxed font-medium">
                      {office.address}
                    </p>
                    <p className="text-blue-300 font-semibold">
                      {office.floorSuite}
                    </p>
                    {office.extraInfo && (
                      <p className="text-amber-400 text-[11px] font-medium pt-1">
                        • {office.extraInfo}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom tag */}
              <div className="px-6 py-3 bg-[#07111E] border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center">
                  <MapPin className="w-3.5 h-3.5 text-blue-400 mr-1.5 shrink-0" />
                  {office.city}
                </span>
                <span className="text-slate-400 font-mono">Active Office</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
