import React from 'react';
import { Zap, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import { CLIENT_ADVANTAGES } from '../data/profileData';

const iconList = [
  <Zap className="w-8 h-8 text-blue-400" />,
  <ShieldCheck className="w-8 h-8 text-emerald-400" />,
  <TrendingUp className="w-8 h-8 text-yellow-400" />,
  <Users className="w-8 h-8 text-indigo-400" />
];

export const ClientAdvantagesSection: React.FC = () => {
  return (
    <section id="advantages" className="py-24 bg-gradient-to-b from-[#0B1A2E] via-[#07111E] to-[#0B1A2E] text-slate-100 relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Page 19) */}
        <div className="max-w-4xl mb-16">
          <div className="flex items-center space-x-2 mb-3">
            <div className="bic-dots">
              <span className="dot-yellow"></span>
              <span className="dot-green"></span>
              <span className="dot-red"></span>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              ADVANTAGES FOR CLIENTS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            How Clients Can Benefit from the Services Offered by Bright Integrated Support Services Company
          </h2>
          <div className="mt-4 h-1 w-28 bg-blue-500 rounded"></div>
        </div>

        {/* 4 Advantage Cards (Page 19 layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLIENT_ADVANTAGES.map((adv, idx) => (
            <div
              key={adv.number}
              className="bg-gradient-to-b from-[#0E223A] to-[#091728] border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-blue-500/70 hover:translate-y-[-2px] transition-all duration-300 shadow-xl group"
            >
              <div>
                {/* Number & Icon */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-4xl lg:text-5xl font-black text-blue-400/90 font-mono tracking-tight group-hover:text-blue-300 transition-colors">
                    {adv.number}
                  </span>
                  <div className="p-3.5 bg-slate-900/90 rounded-2xl border border-slate-700/60 group-hover:scale-110 transition-transform">
                    {iconList[idx]}
                  </div>
                </div>

                <div className="w-12 h-0.5 bg-blue-500/60 mb-6"></div>

                {/* Title (Exact from PDF) */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                  {adv.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-300 leading-relaxed mt-4 pt-4 border-t border-slate-800/80">
                {adv.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
