import React from 'react';
import { OPERATING_OFFICES } from '../data/profileData';

export const OperatingOfficesSection: React.FC = () => {
  return (
    <section id="page-20" className="py-20 bg-white text-[#0A1B33] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <div className="flex items-center space-x-2 mb-2">
          <div className="bic-dots">
            <span className="dot-yellow"></span>
            <span className="dot-green"></span>
            <span className="dot-red"></span>
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#0A1B33]">
            OPERATING OFFICES · ACROSS MULTIPLE COUNTRIES
          </span>
          <span className="text-xs text-slate-400 font-mono ml-2">
            (PDF Page 20)
          </span>
        </div>

        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-black text-[#0A1B33] tracking-tight mb-12">
          Our operating offices
        </h2>

        {/* 6 Office Blocks: 2 rows x 3 columns (Exact Layout from PDF Page 20) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {OPERATING_OFFICES.map((office) => (
            <div key={office.id} className="space-y-4">
              
              {/* Photo with Black Underline */}
              <div>
                <div className="h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src={office.image}
                    alt={office.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Thin Solid Underline below Image as in PDF */}
                <div className="w-full h-[2px] bg-[#0A1B33] mt-2"></div>
              </div>

              {/* Office Title & Address */}
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-[#0A1B33]">
                  {office.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {office.address} {office.floorSuite}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
