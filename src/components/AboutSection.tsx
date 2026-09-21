import React from 'react';
import { MapPin, Users, Building, CheckCircle } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/profileData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0B1A2E] text-slate-100 relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Page 2) */}
        <div className="mb-14">
          <div className="flex items-center space-x-2 mb-3">
            <div className="bic-dots">
              <span className="dot-yellow"></span>
              <span className="dot-green"></span>
              <span className="dot-red"></span>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              About
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                About Our Company
              </h2>
              <div className="mt-3 h-1 w-24 bg-blue-500 rounded"></div>
            </div>
            
            <p className="text-lg sm:text-xl text-blue-200 font-light max-w-2xl">
              {COMPANY_DETAILS.summary}
            </p>
          </div>
        </div>

        {/* 4 Stat Boxes (Page 2 layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Card 1: 2006 */}
          <div className="bg-gradient-to-br from-[#07111E] to-[#0D1F35] border border-slate-800 rounded-2xl p-8 shadow-lg hover:border-blue-700/60 transition-all group">
            <div className="text-5xl lg:text-6xl font-black text-white tracking-tight group-hover:text-blue-400 transition-colors">
              {COMPANY_DETAILS.initiatedYear}
            </div>
            <div className="mt-4 text-base font-semibold text-slate-300">
              Initiated
            </div>
            <div className="mt-2 text-xs text-slate-400">
              Early roots and inception of integrated corporate services in Saudi Arabia.
            </div>
          </div>

          {/* Card 2: 2009 */}
          <div className="bg-gradient-to-br from-[#07111E] to-[#0D1F35] border border-slate-800 rounded-2xl p-8 shadow-lg hover:border-blue-700/60 transition-all group">
            <div className="text-5xl lg:text-6xl font-black text-white tracking-tight group-hover:text-blue-400 transition-colors">
              {COMPANY_DETAILS.establishedYear}
            </div>
            <div className="mt-4 text-base font-semibold text-slate-300">
              Established as a company
            </div>
            <div className="mt-2 text-xs text-slate-400">
              Formal incorporation in Riyadh as Bright Integrated Support Services Company.
            </div>
          </div>

          {/* Card 3: 70 */}
          <div className="bg-gradient-to-br from-[#124277] to-[#0E2D52] border border-blue-600/40 rounded-2xl p-8 shadow-lg hover:border-blue-400 transition-all group">
            <div className="text-5xl lg:text-6xl font-black text-white tracking-tight group-hover:scale-105 transition-transform origin-left">
              {COMPANY_DETAILS.activeClients}
            </div>
            <div className="mt-4 text-base font-bold text-white">
              Current active clients
            </div>
            <div className="mt-2 text-xs text-blue-100">
              Multinational and regional companies actively supported in KSA operations.
            </div>
          </div>

          {/* Card 4: 60 */}
          <div className="bg-gradient-to-br from-[#0D5C75] to-[#0B4052] border border-teal-500/40 rounded-2xl p-8 shadow-lg hover:border-teal-400 transition-all group">
            <div className="text-5xl lg:text-6xl font-black text-white tracking-tight group-hover:scale-105 transition-transform origin-left">
              {COMPANY_DETAILS.upcomingClients}
            </div>
            <div className="mt-4 text-base font-bold text-white">
              Upcoming clients
            </div>
            <div className="mt-2 text-xs text-teal-100">
              New international enterprises currently in onboarding & incorporation pipeline.
            </div>
          </div>

        </div>

        {/* 3 Core Highlights (Page 2 bottom blocks) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Highlight 1: Headquarters */}
          <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-900/40 rounded-xl text-blue-400 shrink-0 border border-blue-800/50">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                  Corporate Headquarters
                </span>
                <p className="mt-2 text-base font-medium text-slate-200 leading-relaxed">
                  Headquartered in <strong className="text-white">Riyadh, Kingdom of Saudi Arabia</strong>, 
                  Al Anoud Tower 2, 12th Floor.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-400 flex items-center">
              <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
              Prime location on King Fahad Road
            </div>
          </div>

          {/* Highlight 2: Target Audience */}
          <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-emerald-900/40 rounded-xl text-emerald-400 shrink-0 border border-emerald-800/50">
                <Building className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                  Target Clients
                </span>
                <p className="mt-2 text-base font-medium text-slate-200 leading-relaxed">
                  Designed for <strong className="text-white">multinational companies</strong>, 
                  <strong className="text-white"> potential foreign companies</strong> and 
                  <strong className="text-white"> local companies</strong>.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-400 flex items-center">
              <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
              Tailored solutions for local & global scale
            </div>
          </div>

          {/* Highlight 3: Dedicated Professional Team */}
          <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-indigo-900/40 rounded-xl text-indigo-400 shrink-0 border border-indigo-800/50">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                  Industry Expertise
                </span>
                <p className="mt-2 text-base font-medium text-slate-200 leading-relaxed">
                  {COMPANY_DETAILS.experienceText}
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-400 flex items-center">
              <CheckCircle className="w-4 h-4 text-indigo-400 mr-2" />
              Bilingual & certified corporate practitioners
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
