import React from 'react';
import { INTERNATIONAL_CLIENTS } from '../data/profileData';

export const InternationalClientsSection: React.FC = () => {
  return (
    <section id="page-21" className="py-24 bg-[#0A1B33] text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <div className="flex items-center space-x-2 mb-4">
          <div className="bic-dots">
            <span className="dot-yellow"></span>
            <span className="dot-green"></span>
            <span className="dot-red"></span>
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
            INTERNATIONAL CLIENTS
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase max-w-2xl mb-12">
          {INTERNATIONAL_CLIENTS.title}
        </h2>

        {/* World Map Container with Region Labels (Exact Page 21 Presentation) */}
        <div className="relative w-full max-w-5xl mx-auto py-6">
          <img 
            src={INTERNATIONAL_CLIENTS.mapImage} 
            alt="BIC Clients from All Over the World Map" 
            className="w-full h-auto object-contain"
          />

          {/* 6 Region Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-8">
            {INTERNATIONAL_CLIENTS.regions.map((region) => (
              <div
                key={region}
                className="bg-[#1D70B8] text-white text-center py-2.5 px-3 rounded-lg text-xs sm:text-sm font-bold shadow-md"
              >
                {region}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
