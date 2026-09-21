import React from 'react';
import { COMPANY_DETAILS } from '../data/profileData';

export const AboutSection: React.FC = () => {
  return (
    <section id="page-2" className="py-20 bg-white text-[#0A1B33] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page 2 Eyebrow */}
        <div className="flex items-center space-x-2 mb-2">
          <div className="bic-dots">
            <span className="dot-yellow"></span>
            <span className="dot-green"></span>
            <span className="dot-red"></span>
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#0A1B33]">
            ABOUT
          </span>
        </div>

        {/* Page 2 Header & Subtitle */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200 mb-10">
          <h2 className="text-4xl sm:text-5xl font-black text-[#0A1B33] tracking-tight">
            About Our Company
          </h2>

          <p className="text-lg sm:text-xl text-[#0A1B33] font-normal max-w-xl lg:text-right">
            {COMPANY_DETAILS.aboutLead}
          </p>
        </div>

        {/* 4 Stat Boxes (Exact Colors from PDF Page 2) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {COMPANY_DETAILS.stats.map((stat, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 shadow-sm flex flex-col justify-between min-h-[160px] ${
                stat.isNavy 
                  ? 'bg-[#0A1B33] text-white' 
                  : 'bg-[#1D70B8] text-white'
              }`}
            >
              <div className="text-5xl sm:text-6xl font-black tracking-tight leading-none">
                {stat.number}
              </div>
              <div className="text-base font-semibold mt-4 text-slate-100">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* 3 Bullet Boxes (Exact Text and Background from PDF Page 2) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COMPANY_DETAILS.aboutBullets.map((bulletText, bIdx) => (
            <div
              key={bIdx}
              className="bg-[#F2F5F9] rounded-2xl p-6 sm:p-8 flex items-start space-x-4 border border-slate-100 shadow-sm"
            >
              {/* Square Blue Bullet from PDF */}
              <div className="w-3 h-3 bg-[#1D70B8] mt-1 shrink-0"></div>
              <p className="text-sm sm:text-base font-medium text-[#0A1B33] leading-relaxed">
                {bulletText}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
