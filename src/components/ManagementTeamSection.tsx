import React from 'react';
import { Users, Network } from 'lucide-react';
import { MANAGEMENT_TEAM, ORGANIZATIONAL_UNITS } from '../data/profileData';

export const ManagementTeamSection: React.FC = () => {
  const president = MANAGEMENT_TEAM.find(m => m.role === 'PRESIDENT');
  const bdDirector = MANAGEMENT_TEAM.find(m => m.role === 'DIRECTOR OF BUSINESS DEVELOPMENT');

  return (
    <section id="team" className="py-24 bg-[#0B1A2E] text-slate-100 relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Page 4) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <div className="bic-dots">
              <span className="dot-yellow"></span>
              <span className="dot-green"></span>
              <span className="dot-red"></span>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              CORPORATE TEAM
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Our Management Team
          </h2>
          
          <div className="mt-3 inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-xs font-semibold tracking-wider uppercase text-blue-300">
            <Network className="w-3.5 h-3.5 mr-1" />
            ORGANIZATIONAL CHART
          </div>
        </div>

        {/* Organizational Chart Representation (Page 4) */}
        <div className="max-w-5xl mx-auto">
          
          {/* Level 1: President */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-sm rounded-2xl bg-gradient-to-b from-[#07111E] to-[#0A1A2E] border-2 border-blue-500/80 p-6 shadow-2xl text-center relative group hover:border-blue-400 transition-all">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-blue-400 block mb-1">
                {president?.role}
              </span>
              <h3 className="text-2xl font-black text-white tracking-wide">
                {president?.name}
              </h3>
            </div>

            {/* Connecting line */}
            <div className="h-8 w-0.5 bg-blue-500/70"></div>
            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
            <div className="h-4 w-0.5 bg-blue-500/70"></div>
          </div>

          {/* Level 2: Director of Business Development */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-sm rounded-2xl bg-gradient-to-b from-[#133E6E] to-[#0E2E52] border border-blue-400/80 p-5 shadow-xl text-center relative group hover:border-blue-300 transition-all">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-blue-200 block mb-1">
                {bdDirector?.role}
              </span>
              <h4 className="text-xl font-bold text-white tracking-wide">
                {bdDirector?.name}
              </h4>
            </div>

            {/* Connecting stem down to horizontal branch */}
            <div className="h-8 w-0.5 bg-slate-600"></div>
          </div>

          {/* Horizontal branching connector */}
          <div className="relative hidden md:block w-full max-w-4xl mx-auto h-6">
            <div className="absolute top-0 left-[12%] right-[12%] h-0.5 bg-slate-600"></div>
            <div className="absolute top-0 left-[16.6%] w-0.5 h-6 bg-slate-600"></div>
            <div className="absolute top-0 left-[38.8%] w-0.5 h-6 bg-slate-600"></div>
            <div className="absolute top-0 left-[61.1%] w-0.5 h-6 bg-slate-600"></div>
            <div className="absolute top-0 left-[83.3%] w-0.5 h-6 bg-slate-600"></div>
          </div>

          {/* Level 3: Department Managers + Project Management Cluster */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4 md:mt-0">
            
            {/* Finance Manager */}
            <div className="flex flex-col items-center">
              <div className="w-full rounded-xl bg-gradient-to-b from-[#102B4C] to-[#0C2038] border border-slate-700/80 p-5 text-center shadow-lg hover:border-blue-400 transition-all">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-300 block mb-1">
                  FINANCE MANAGER
                </span>
                <h5 className="text-lg font-bold text-white">
                  Gemary Larosa
                </h5>
                <div className="mt-3 pt-2 border-t border-slate-700/60 text-xs text-slate-300 font-medium flex items-center justify-center">
                  <Users className="w-3.5 h-3.5 mr-1 text-blue-400" />
                  Team
                </div>
              </div>
            </div>

            {/* HR Manager */}
            <div className="flex flex-col items-center">
              <div className="w-full rounded-xl bg-gradient-to-b from-[#102B4C] to-[#0C2038] border border-slate-700/80 p-5 text-center shadow-lg hover:border-blue-400 transition-all">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-300 block mb-1">
                  HR MANAGER
                </span>
                <h5 className="text-lg font-bold text-white">
                  Sara Almashari
                </h5>
                <div className="mt-3 pt-2 border-t border-slate-700/60 text-xs text-slate-300 font-medium flex items-center justify-center">
                  <Users className="w-3.5 h-3.5 mr-1 text-blue-400" />
                  Team
                </div>
              </div>
            </div>

            {/* Government Relations Manager */}
            <div className="flex flex-col items-center">
              <div className="w-full rounded-xl bg-gradient-to-b from-[#102B4C] to-[#0C2038] border border-slate-700/80 p-5 text-center shadow-lg hover:border-blue-400 transition-all">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-300 block mb-1">
                  GOVERNMENT RELATIONS MANAGER
                </span>
                <h5 className="text-lg font-bold text-white">
                  Yazeed Alotaibi
                </h5>
                <div className="mt-3 pt-2 border-t border-slate-700/60 text-xs text-slate-300 font-medium flex items-center justify-center">
                  <Users className="w-3.5 h-3.5 mr-1 text-blue-400" />
                  Team
                </div>
              </div>
            </div>

            {/* Project Management & Operational Services Block */}
            <div className="flex flex-col items-center space-y-2">
              <div className="w-full rounded-xl bg-gradient-to-b from-[#1A3E6D] to-[#122F53] border border-blue-500/60 p-4 text-center shadow-lg">
                <span className="text-xs font-bold text-white block">
                  Project Management
                </span>
                <span className="text-[11px] text-blue-200 font-medium block mt-0.5">
                  Abdur Rahman Team
                </span>
              </div>
              
              <div className="w-full rounded-xl bg-[#081525] border border-slate-800 p-2.5 text-center">
                <span className="text-xs font-semibold text-slate-300">
                  Client Account Management (Team)
                </span>
              </div>

              <div className="w-full rounded-xl bg-[#081525] border border-slate-800 p-2.5 text-center">
                <span className="text-xs font-semibold text-slate-300">
                  Operational Services (Team)
                </span>
              </div>
            </div>

          </div>

          {/* Organizational Units Detailed Descriptions */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-slate-800">
            {ORGANIZATIONAL_UNITS.map((unit, idx) => (
              <div key={idx} className="bg-slate-900/40 rounded-xl p-5 border border-slate-800/80">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">
                  {unit.lead}
                </div>
                <h6 className="text-base font-bold text-white mb-2">
                  {unit.title}
                </h6>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {unit.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
