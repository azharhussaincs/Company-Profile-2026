import React from 'react';
import { MANAGEMENT_TEAM } from '../data/profileData';

export const ManagementTeamSection: React.FC = () => {
  return (
    <section id="page-4" className="py-20 bg-white text-[#0A1B33] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <div className="flex items-center space-x-2 mb-2">
          <div className="bic-dots">
            <span className="dot-yellow"></span>
            <span className="dot-green"></span>
            <span className="dot-red"></span>
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#0A1B33]">
            CORPORATE TEAM
          </span>
        </div>

        {/* Header & Subtitle */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-14">
          <h2 className="text-4xl sm:text-5xl font-black text-[#0A1B33] tracking-tight">
            Our Management Team
          </h2>
          <span className="text-xs font-bold tracking-widest text-[#1D70B8] uppercase">
            ORGANIZATIONAL CHART
          </span>
        </div>

        {/* Organizational Chart (Exact Layout and Colors from PDF Page 4) */}
        <div className="max-w-5xl mx-auto">
          
          {/* Level 1: PRESIDENT */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-sm bg-[#0A1B33] text-white p-5 text-center rounded-none shadow-md">
              <div className="text-[11px] font-bold tracking-widest uppercase text-slate-300 mb-1">
                {MANAGEMENT_TEAM.president.role}
              </div>
              <div className="text-2xl font-bold tracking-wide">
                {MANAGEMENT_TEAM.president.name}
              </div>
            </div>

            {/* Vertical stem */}
            <div className="w-[2px] h-8 bg-slate-300"></div>
          </div>

          {/* Level 2: DIRECTOR OF BUSINESS DEVELOPMENT */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-sm bg-[#1D70B8] text-white p-5 text-center rounded-none shadow-md">
              <div className="text-[11px] font-bold tracking-widest uppercase text-blue-100 mb-1">
                {MANAGEMENT_TEAM.directorBD.role}
              </div>
              <div className="text-2xl font-bold tracking-wide">
                {MANAGEMENT_TEAM.directorBD.name}
              </div>
            </div>

            {/* Vertical stem down to horizontal branch */}
            <div className="w-[2px] h-8 bg-slate-300"></div>
          </div>

          {/* Horizontal branching connector */}
          <div className="relative hidden md:block w-full max-w-4xl mx-auto h-8">
            <div className="absolute top-0 left-[12%] right-[12%] h-[2px] bg-slate-300"></div>
            <div className="absolute top-0 left-[12.5%] w-[2px] h-8 bg-slate-300"></div>
            <div className="absolute top-0 left-[37.5%] w-[2px] h-8 bg-slate-300"></div>
            <div className="absolute top-0 left-[62.5%] w-[2px] h-8 bg-slate-300"></div>
            <div className="absolute top-0 left-[87.5%] w-[2px] h-8 bg-slate-300"></div>
          </div>

          {/* Level 3: 4 Columns (Finance, HR, Gov Relations, Project Management) */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Col 1: FINANCE MANAGER */}
            <div className="flex flex-col">
              <div className="bg-[#1D70B8] text-white p-5 text-center shadow-md">
                <div className="text-[10px] font-bold tracking-widest uppercase text-blue-100 mb-1">
                  {MANAGEMENT_TEAM.managers[0].role}
                </div>
                <div className="text-lg font-bold">
                  {MANAGEMENT_TEAM.managers[0].name}
                </div>
              </div>
              <div className="bg-[#EAF1F8] text-[#0A1B33] p-2 text-center text-xs font-semibold">
                {MANAGEMENT_TEAM.managers[0].teamLabel}
              </div>
            </div>

            {/* Col 2: HR MANAGER */}
            <div className="flex flex-col">
              <div className="bg-[#1D70B8] text-white p-5 text-center shadow-md">
                <div className="text-[10px] font-bold tracking-widest uppercase text-blue-100 mb-1">
                  {MANAGEMENT_TEAM.managers[1].role}
                </div>
                <div className="text-lg font-bold">
                  {MANAGEMENT_TEAM.managers[1].name}
                </div>
              </div>
              <div className="bg-[#EAF1F8] text-[#0A1B33] p-2 text-center text-xs font-semibold">
                {MANAGEMENT_TEAM.managers[1].teamLabel}
              </div>
            </div>

            {/* Col 3: GOVERNMENT RELATIONS MANAGER */}
            <div className="flex flex-col">
              <div className="bg-[#1D70B8] text-white p-5 text-center shadow-md">
                <div className="text-[10px] font-bold tracking-widest uppercase text-blue-100 mb-1">
                  {MANAGEMENT_TEAM.managers[2].role}
                </div>
                <div className="text-lg font-bold">
                  {MANAGEMENT_TEAM.managers[2].name}
                </div>
              </div>
              <div className="bg-[#EAF1F8] text-[#0A1B33] p-2 text-center text-xs font-semibold">
                {MANAGEMENT_TEAM.managers[2].teamLabel}
              </div>
            </div>

            {/* Col 4: Project Management, Client Account Management, Operational Services */}
            <div className="flex flex-col space-y-2">
              <div>
                <div className="bg-[#1D70B8] text-white p-4 text-center shadow-md">
                  <div className="text-sm font-bold">
                    {MANAGEMENT_TEAM.projectManagement.title}
                  </div>
                </div>
                <div className="bg-[#0A1B33] text-white p-2 text-center text-xs font-semibold">
                  {MANAGEMENT_TEAM.projectManagement.teamLabel}
                </div>
              </div>

              <div className="bg-[#0A1B33] text-white p-3 text-center text-xs font-semibold shadow-md">
                {MANAGEMENT_TEAM.clientAccountManagement.title}
              </div>

              <div className="bg-[#0A1B33] text-white p-3 text-center text-xs font-semibold shadow-md">
                {MANAGEMENT_TEAM.operationalServices.title}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
