import React, { useState } from 'react';
import { Search, ShieldCheck, FileCheck } from 'lucide-react';
import { GOVERNMENT_RELATIONS_DETAILED_SERVICES } from '../data/profileData';

export const GovernmentRelationsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Categorize services for enhanced usability while keeping all exact titles
  const categorize = (service: string) => {
    const s = service.toLowerCase();
    if (s.includes('visa') || s.includes('re-entry') || s.includes('exit') || s.includes('invitation') || s.includes('istiqdam')) return 'Visas & Immigration';
    if (s.includes('iqama') || s.includes('work permit') || s.includes('employee') || s.includes('occupation') || s.includes('transfer')) return 'Workforce & Iqama';
    if (s.includes('coc') || s.includes('misa') || s.includes('sbc') || s.includes('cr &') || s.includes('po box') || s.includes('spl') || s.includes('address')) return 'Entity & Licensing';
    if (s.includes('mol') || s.includes('qiwa') || s.includes('muqeem') || s.includes('mudad') || s.includes('absher') || s.includes('tamm') || s.includes('gaca')) return 'Portals & Systems';
    return 'Attestations & Legal';
  };

  const categories = ['all', 'Visas & Immigration', 'Workforce & Iqama', 'Entity & Licensing', 'Portals & Systems', 'Attestations & Legal'];

  const filteredServices = GOVERNMENT_RELATIONS_DETAILED_SERVICES.filter(item => {
    const matchesSearch = item.toLowerCase().includes(searchTerm.toLowerCase().trim());
    const matchesCat = activeCategory === 'all' || categorize(item) === activeCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <section id="gov-relations" className="py-24 bg-gradient-to-b from-[#07111E] via-[#0A1A2E] to-[#07111E] text-slate-100 relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Page 14) */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 mb-3">
            <div className="bic-dots">
              <span className="dot-yellow"></span>
              <span className="dot-green"></span>
              <span className="dot-red"></span>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              OUR CORE COMPETENCIES · PAGE 14
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Government Relations
              </h2>
              <div className="mt-3 h-1 w-24 bg-blue-500 rounded"></div>
              <p className="mt-3 text-sm sm:text-base text-blue-200">
                Detailed Ministry and Government Liaison Service Checklist (All 45 Documented Items)
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <div className="px-4 py-2 rounded-xl bg-blue-950/80 border border-blue-700/60 text-xs font-bold text-blue-300 flex items-center">
                <FileCheck className="w-4 h-4 mr-2 text-green-400" />
                <span>45 Official Services Documented</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-[#0B1A2E] rounded-2xl p-4 sm:p-6 border border-slate-800 mb-8 shadow-xl">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            
            {/* Category pills */}
            <div className="flex flex-wrap gap-2 w-full lg:w-auto">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    activeCategory === cat
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-800/70 text-slate-300 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  {cat === 'all' ? 'All (45)' : cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Search Iqama, MISA, Qiwa, Visa..."
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

          </div>
        </div>

        {/* 4-Column Service Grid matching the exact layout of PDF Page 14 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {filteredServices.map((service, idx) => {
            return (
              <div
                key={idx}
                className="bg-[#0E2034] hover:bg-[#122A46] border border-slate-800 hover:border-blue-500/60 rounded-xl p-3.5 flex items-start space-x-3 transition-all duration-200 group shadow-md"
              >
                {/* PDF-styled square indicator */}
                <div className="w-3.5 h-3.5 rounded-sm bg-blue-500 group-hover:bg-blue-400 mt-0.5 shrink-0 transition-colors shadow-sm shadow-blue-500/50"></div>
                
                <div className="flex-1">
                  <span className="text-xs font-semibold text-slate-100 group-hover:text-white transition-colors leading-snug block">
                    {service}
                  </span>
                  <span className="text-[10px] text-slate-400 mt-1 block">
                    {categorize(service)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12 bg-slate-900/40 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">No government services found matching "{searchTerm}".</p>
            <button
              onClick={() => { setSearchTerm(''); setActiveCategory('all'); }}
              className="mt-2 text-xs text-blue-400 hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Summary note below grid */}
        <div className="mt-8 bg-slate-900/50 rounded-xl p-4 border border-slate-800 text-xs text-slate-300 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
            <span>
              All 45 government liaison procedures are executed in strict alignment with Saudi ministries and official government portals.
            </span>
          </div>
          <span className="text-[11px] text-slate-400 font-mono">
            Showing {filteredServices.length} of 45 items
          </span>
        </div>

      </div>
    </section>
  );
};
