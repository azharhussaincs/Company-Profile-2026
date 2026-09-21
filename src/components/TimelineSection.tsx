import React from 'react';
import { MapPin } from 'lucide-react';
import { COMPANY_TIMELINE } from '../data/profileData';

export const TimelineSection: React.FC = () => {
  return (
    <section id="timeline" className="py-24 bg-gradient-to-b from-[#07111E] via-[#0B1A2E] to-[#07111E] text-slate-100 relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Page 5) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <div className="bic-dots">
              <span className="dot-yellow"></span>
              <span className="dot-green"></span>
              <span className="dot-red"></span>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              MILESTONES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Company Timeline
          </h2>
          <div className="mt-3 h-1 w-20 bg-blue-500 rounded mx-auto"></div>
        </div>

        {/* Timeline Grid / Journey (Page 5 layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          
          {COMPANY_TIMELINE.map((item) => {
            return (
              <div 
                key={item.year}
                className="relative bg-gradient-to-b from-[#0F2238] to-[#081525] border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-blue-500/60 transition-all duration-300 group shadow-lg"
              >
                {/* Year Header */}
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-700/80">
                    <span className="text-2xl sm:text-3xl font-black text-white tracking-tight group-hover:text-blue-400 transition-colors">
                      {item.year}
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500 group-hover:scale-150 transition-transform"></span>
                  </div>

                  {/* Title & Location */}
                  <h3 className="text-base font-bold text-slate-100 mb-1 leading-snug">
                    {item.title}
                  </h3>

                  {item.location && (
                    <div className="flex items-center text-xs font-semibold text-blue-300 mb-3">
                      <MapPin className="w-3.5 h-3.5 mr-1 shrink-0" />
                      <span>{item.location}</span>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>

                {/* Tags if any (e.g. 2024-2026: KAFD, Thailand, Kyrgyzstan) */}
                {item.tags && (
                  <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap gap-1.5">
                    {item.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="inline-flex items-center text-[11px] font-semibold px-2.5 py-1 rounded-md bg-blue-900/50 border border-blue-700/50 text-blue-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
