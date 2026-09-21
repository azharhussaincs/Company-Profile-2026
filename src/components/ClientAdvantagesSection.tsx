import React from 'react';
import { CLIENT_ADVANTAGES } from '../data/profileData';

export const ClientAdvantagesSection: React.FC = () => {
  return (
    <section id="page-19" className="py-24 bg-[#0A1B33] text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <div className="flex items-center space-x-2 mb-4">
          <div className="bic-dots">
            <span className="dot-yellow"></span>
            <span className="dot-green"></span>
            <span className="dot-red"></span>
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
            ADVANTAGES FOR CLIENTS
          </span>
          <span className="text-xs text-slate-400 font-mono ml-2">
            (PDF Page 19)
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-5xl mb-20">
          How Clients Can Benefit from the Services Offered by Bright Integrated Support Services Company
        </h2>

        {/* 4 Columns (Exact Layout and Colors from PDF Page 19) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {CLIENT_ADVANTAGES.map((adv) => (
            <div key={adv.number} className="space-y-4">
              
              {/* Large Number */}
              <div className="text-5xl sm:text-6xl font-black text-[#5B8CA8] font-mono leading-none">
                {adv.number}
              </div>

              {/* Horizontal Line under Number */}
              <div className="w-full h-[2px] bg-[#386690]"></div>

              {/* Exact Title from PDF */}
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug pt-2">
                {adv.title}
              </h3>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
