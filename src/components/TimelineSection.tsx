import React from 'react';
import { COMPANY_TIMELINE } from '../data/profileData';

export const TimelineSection: React.FC = () => {
  return (
    <section id="page-5" className="py-20 bg-[#0A1B33] text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <div className="flex items-center space-x-2 mb-2">
          <div className="bic-dots">
            <span className="dot-yellow"></span>
            <span className="dot-green"></span>
            <span className="dot-red"></span>
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
            MILESTONES
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-14">
          Company Timeline
        </h2>

        {/* 5 Columns (Exact Layout from PDF Page 5) */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {COMPANY_TIMELINE.map((item) => (
            <div key={item.year} className="space-y-4">
              
              {/* Year */}
              <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {item.year}
              </div>

              {/* Square Marker & Horizontal Accent Line */}
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#5B8CA8] shrink-0"></div>
                <div className="h-[1px] bg-[#386690] w-full"></div>
              </div>

              {/* Title */}
              <div className="text-base font-bold text-white leading-snug">
                {item.title}
              </div>

              {/* Location if present */}
              {item.location && (
                <div className="text-sm font-semibold text-[#5B8CA8]">
                  {item.location}
                </div>
              )}

              {/* Description */}
              {item.description && (
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              )}

              {/* Sub-locations (KAFD, Thailand, Kyrgyzstan for 2024-2026) */}
              {item.subLocations && (
                <div className="space-y-2 pt-1">
                  {item.subLocations.map((loc) => (
                    <div key={loc} className="text-sm font-bold text-white pb-1 border-b border-slate-700/80">
                      {loc}
                    </div>
                  ))}
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
