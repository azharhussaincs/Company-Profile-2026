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
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-5xl mb-16">
          How Clients Can Benefit from the Services Offered by Bright Integrated Support Services Company
        </h2>

        {/* 4 Columns without raw count numbers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {CLIENT_ADVANTAGES.map((adv) => (
            <div key={adv.title} className="space-y-4">
              
              {/* Accent Line */}
              <div className="w-12 h-[3px] bg-[#5B8CA8]"></div>

              {/* Title from PDF */}
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug pt-1">
                {adv.title}
              </h3>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
