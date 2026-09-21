import React, { useState } from 'react';
import { 
  Calculator, Building2, Car, Users, Briefcase, Landmark, UserCheck, 
  Plane, Shield, FileText, Wrench, Wifi, TrendingUp, Home, Navigation, 
  Languages, KeyRound, Search, CheckCircle2, ChevronDown, ChevronUp, ExternalLink 
} from 'lucide-react';
import { CORE_COMPETENCIES } from '../data/profileData';

const iconMap: Record<string, React.ReactNode> = {
  '01': <Calculator className="w-6 h-6 text-blue-400" />,
  '02': <Building2 className="w-6 h-6 text-indigo-400" />,
  '03': <Car className="w-6 h-6 text-amber-400" />,
  '04': <Users className="w-6 h-6 text-emerald-400" />,
  '05': <Briefcase className="w-6 h-6 text-purple-400" />,
  '06': <Landmark className="w-6 h-6 text-rose-400" />,
  '07': <UserCheck className="w-6 h-6 text-cyan-400" />,
  '08': <Plane className="w-6 h-6 text-sky-400" />,
  '09': <Shield className="w-6 h-6 text-green-400" />,
  '10': <FileText className="w-6 h-6 text-blue-300" />,
  '11': <Wrench className="w-6 h-6 text-orange-400" />,
  '12': <Wifi className="w-6 h-6 text-teal-400" />,
  '13': <TrendingUp className="w-6 h-6 text-yellow-400" />,
  '14': <Home className="w-6 h-6 text-pink-400" />,
  '15': <Navigation className="w-6 h-6 text-violet-400" />,
  '16': <Languages className="w-6 h-6 text-emerald-300" />,
  '17': <KeyRound className="w-6 h-6 text-fuchsia-400" />,
};

export const CoreCompetenciesSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'core' | 'specialised'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({
    '01': true,
    '02': true,
    '05': true,
    '06': true,
  });

  const toggleExpand = (id: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const all: Record<string, boolean> = {};
    CORE_COMPETENCIES.forEach(c => all[c.id] = true);
    setExpandedCards(all);
  };

  const collapseAll = () => {
    setExpandedCards({});
  };

  const filteredCompetencies = CORE_COMPETENCIES.filter(item => {
    const matchesFilter = activeFilter === 'all' || item.category === activeFilter;
    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesFilter;

    const matchesTitle = item.title.toLowerCase().includes(query);
    const matchesNumber = item.number.includes(query);
    const matchesDesc = item.description?.toLowerCase().includes(query);
    const matchesServices = item.services.some(s => s.toLowerCase().includes(query));

    return matchesFilter && (matchesTitle || matchesNumber || matchesDesc || matchesServices);
  });

  return (
    <section id="competencies" className="py-24 bg-[#0B1A2E] text-slate-100 relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Page 6) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <div className="bic-dots">
                <span className="dot-yellow"></span>
                <span className="dot-green"></span>
                <span className="dot-red"></span>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                OUR CORE COMPETENCIES
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Our core competencies
            </h2>
            <div className="mt-3 h-1 w-24 bg-blue-500 rounded"></div>
          </div>

          <div className="max-w-xl">
            <p className="text-lg text-blue-200 font-light leading-relaxed">
              We provide complete integrated support solutions for clients' businesses by providing them with a wide range of consulting services.
            </p>
          </div>
        </div>

        {/* Filter and Search Controls */}
        <div className="bg-[#07111E] rounded-2xl p-4 sm:p-6 border border-slate-800 mb-12 shadow-xl">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeFilter === 'all'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                All 17 Competencies
              </button>
              <button
                onClick={() => setActiveFilter('core')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeFilter === 'core'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                Core Competencies (01–09)
              </button>
              <button
                onClick={() => setActiveFilter('specialised')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeFilter === 'specialised'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                Specialised Support (10–17)
              </button>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search services, ministries..."
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Expand / Collapse All */}
            <div className="flex items-center space-x-2 text-xs text-slate-400">
              <button 
                onClick={expandAll}
                className="hover:text-white underline underline-offset-4"
              >
                Expand All
              </button>
              <span>·</span>
              <button 
                onClick={collapseAll}
                className="hover:text-white underline underline-offset-4"
              >
                Collapse All
              </button>
            </div>

          </div>
        </div>

        {/* Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompetencies.map((comp) => {
            const isExpanded = !!expandedCards[comp.id];
            const hasManyServices = comp.services.length > 4;

            return (
              <div
                key={comp.id}
                id={`competency-${comp.id}`}
                className="bg-gradient-to-b from-[#0e223a] to-[#091626] border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-blue-600/60 transition-all duration-200 shadow-xl group"
              >
                <div>
                  {/* Card Top: Number & Icon */}
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl font-black text-blue-400 tracking-tight font-mono">
                      {comp.number}
                    </span>
                    <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700/60 group-hover:scale-110 transition-transform">
                      {iconMap[comp.id] || <FileText className="w-6 h-6 text-blue-400" />}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                    {comp.title}
                  </h3>

                  {/* Description if present */}
                  {comp.description && (
                    <p className="text-xs text-slate-300 italic mb-4 leading-relaxed bg-slate-900/40 p-3 rounded-lg border border-slate-800">
                      {comp.description}
                    </p>
                  )}

                  {/* Note if present */}
                  {comp.note && (
                    <div className="text-[11px] text-blue-300 bg-blue-950/60 border border-blue-800/60 p-2.5 rounded-lg mb-4 flex items-center justify-between">
                      <span>{comp.note}</span>
                      <a href="#business-center" className="text-blue-400 hover:text-white shrink-0 ml-2">
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}

                  {/* Special Link for Competency 06 to the Detailed Government Relations list */}
                  {comp.id === '06' && (
                    <div className="mb-4">
                      <a
                        href="#gov-relations"
                        className="inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-lg bg-rose-950/70 border border-rose-800/70 text-rose-300 hover:bg-rose-900 transition-colors"
                      >
                        <Landmark className="w-3.5 h-3.5 mr-1.5" />
                        View Complete 45 Government Relations List →
                      </a>
                    </div>
                  )}

                  {/* Services List */}
                  <div className="space-y-2 mt-3">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between pb-1 border-b border-slate-800">
                      <span>Documented Services ({comp.services.length})</span>
                    </div>

                    <ul className="space-y-1.5 pt-1">
                      {(isExpanded ? comp.services : comp.services.slice(0, 4)).map((srv, sIdx) => (
                        <li key={sIdx} className="text-xs text-slate-200 flex items-start leading-snug">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 mr-2 shrink-0 mt-0.5" />
                          <span>{srv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Bottom: Toggle if more than 4 services */}
                {hasManyServices && (
                  <div className="pt-4 mt-4 border-t border-slate-800/80">
                    <button
                      onClick={() => toggleExpand(comp.id)}
                      className="w-full py-1.5 px-3 rounded-lg bg-slate-900/60 hover:bg-slate-800 text-xs text-blue-300 font-medium flex items-center justify-center space-x-1 transition-colors border border-slate-800"
                    >
                      {isExpanded ? (
                        <>
                          <span>Show Less</span>
                          <ChevronUp className="w-3.5 h-3.5" />
                        </>
                      ) : (
                        <>
                          <span>Show All {comp.services.length} Services (+{comp.services.length - 4})</span>
                          <ChevronDown className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredCompetencies.length === 0 && (
          <div className="text-center py-12 bg-slate-900/40 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">No services matched "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveFilter('all'); }}
              className="mt-3 text-xs text-blue-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
