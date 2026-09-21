import React, { useState } from 'react';
import { Globe2, MapPin, Users } from 'lucide-react';
import { INTERNATIONAL_REGIONS, COMPANY_DETAILS } from '../data/profileData';

export const InternationalClientsSection: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  return (
    <section id="global-clients" className="py-24 bg-gradient-to-b from-[#0B1A2E] to-[#07111E] text-slate-100 relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Page 21) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <div className="bic-dots">
              <span className="dot-yellow"></span>
              <span className="dot-green"></span>
              <span className="dot-red"></span>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              INTERNATIONAL CLIENTS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            OUR CLIENTS FROM ALL OVER THE WORLD
          </h2>
          <div className="mt-3 h-1 w-24 bg-blue-500 rounded mx-auto"></div>

          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            Trusted by multinational and regional enterprises across 6 global continents and regions entering and operating in Saudi Arabia.
          </p>
        </div>

        {/* World Map Container (Page 21 visual) */}
        <div className="relative rounded-3xl bg-[#07111E] border border-slate-800 p-6 sm:p-10 shadow-2xl overflow-hidden mb-12">
          
          {/* World map image from the PDF */}
          <div className="relative w-full max-w-5xl mx-auto py-6">
            <img 
              src="/assets/world-map.png" 
              alt="BIC Clients from All Over the World Map" 
              className="w-full h-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>

          {/* Region Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-6 border-t border-slate-800">
            {INTERNATIONAL_REGIONS.map((region) => {
              const isSelected = selectedRegion === region.name;
              return (
                <button
                  key={region.name}
                  onClick={() => setSelectedRegion(isSelected ? null : region.name)}
                  className={`p-3 rounded-xl text-center border transition-all ${
                    isSelected
                      ? 'bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-600/40'
                      : 'bg-[#0B1A2E] border-slate-800 text-slate-300 hover:border-blue-500/50 hover:text-white'
                  }`}
                >
                  <div className="text-xs font-bold">{region.name}</div>
                  <div className="text-[10px] text-blue-300/80 mt-0.5">International Client Hub</div>
                </button>
              );
            })}
          </div>

        </div>

        {/* Supporting Statistics Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[#0D1F35] border border-slate-800 rounded-2xl p-6 flex items-center space-x-4">
            <div className="p-3.5 bg-blue-900/50 rounded-xl text-blue-400">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-white">{COMPANY_DETAILS.activeClients} Active Clients</div>
              <div className="text-xs text-slate-400">Ongoing comprehensive support</div>
            </div>
          </div>

          <div className="bg-[#0D1F35] border border-slate-800 rounded-2xl p-6 flex items-center space-x-4">
            <div className="p-3.5 bg-emerald-900/50 rounded-xl text-emerald-400">
              <Globe2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-white">{COMPANY_DETAILS.upcomingClients} Upcoming Clients</div>
              <div className="text-xs text-slate-400">Pipeline in onboarding & setup</div>
            </div>
          </div>

          <div className="bg-[#0D1F35] border border-slate-800 rounded-2xl p-6 flex items-center space-x-4">
            <div className="p-3.5 bg-indigo-900/50 rounded-xl text-indigo-400">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-white">6 Global Regions</div>
              <div className="text-xs text-slate-400">North & South America, Europe, ME, Asia, Africa, AU</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
