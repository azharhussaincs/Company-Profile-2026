import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { GOVERNMENT_RELATIONS_GRID } from '../data/profileData';

export const GovernmentRelationsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <section id="page-14" className="py-20 bg-white text-[#0A1B33] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <div className="flex items-center space-x-2 mb-2">
          <div className="bic-dots">
            <span className="dot-yellow"></span>
            <span className="dot-green"></span>
            <span className="dot-red"></span>
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#0A1B33]">
            OUR CORE COMPETENCIES
          </span>
        </div>

        {/* Heading & Search */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <h2 className="text-4xl sm:text-5xl font-black text-[#0A1B33] tracking-tight">
            Government Relations
          </h2>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Filter 45 government services..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#F2F5F9] border border-slate-200 text-xs text-[#0A1B33] placeholder-slate-400 focus:outline-none focus:border-[#1D70B8]"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-[#0A1B33]"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* 4-Column Grid matching PDF Page 14 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {GOVERNMENT_RELATIONS_GRID.map((col, colIdx) => (
            <div key={colIdx} className="space-y-2.5">
              {col.map((item, itemIdx) => {
                const isMatched = !searchTerm || item.toLowerCase().includes(searchTerm.toLowerCase().trim());
                if (!isMatched) return null;

                return (
                  <div
                    key={itemIdx}
                    className="bg-[#F2F5F9] p-3.5 rounded-lg flex items-start space-x-3 text-xs font-semibold text-[#0A1B33] shadow-sm hover:bg-[#EAF1F8] transition-colors"
                  >
                    {/* Square Blue Bullet from PDF */}
                    <div className="w-2.5 h-2.5 bg-[#1D70B8] mt-1 shrink-0"></div>
                    <span className="leading-snug">{item}</span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Summary Footer */}
        <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-medium">
          <span>Comprehensive Government Relations & Licensing Checklist</span>
          <span>Complete Ministry & Regulatory Coverage</span>
        </div>

      </div>
    </section>
  );
};
