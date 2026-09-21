import React from 'react';
import { Eye, Target, Compass, Award } from 'lucide-react';
import { VISION_MISSION } from '../data/profileData';

export const VisionMissionSection: React.FC = () => {
  return (
    <section id="vision-mission" className="py-24 bg-gradient-to-b from-[#0B1A2E] to-[#07111E] text-slate-100 relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Vision Card (Page 3 Left) */}
          <div className="relative rounded-3xl bg-gradient-to-br from-[#0B1A2E] to-[#091524] border border-blue-900/60 p-8 sm:p-12 shadow-2xl flex flex-col justify-between overflow-hidden group hover:border-blue-500/50 transition-all duration-300">
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-600/15 transition-all"></div>
            
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2">
                  <div className="bic-dots">
                    <span className="dot-yellow"></span>
                    <span className="dot-green"></span>
                    <span className="dot-red"></span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
                    OUR VISION
                  </span>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-blue-900/40 border border-blue-700/50 flex items-center justify-center text-blue-400">
                  <Eye className="w-6 h-6" />
                </div>
              </div>

              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-6">
                {VISION_MISSION.vision.title}
              </h3>

              {/* Exact Document Content */}
              <p className="text-xl sm:text-2xl text-slate-200 font-light leading-relaxed">
                {VISION_MISSION.vision.statement}
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-800/80 flex items-center text-xs text-blue-300 font-medium">
              <Compass className="w-4 h-4 mr-2 text-blue-400" />
              Empowering corporate success from scratch to creation
            </div>
          </div>

          {/* Mission Card (Page 3 Right) */}
          <div className="relative rounded-3xl bg-gradient-to-br from-[#0F223A] to-[#0B1A2E] border border-slate-700/70 p-8 sm:p-12 shadow-2xl flex flex-col justify-between overflow-hidden group hover:border-blue-400/60 transition-all duration-300">
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-600/15 transition-all"></div>

            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2">
                  <div className="bic-dots">
                    <span className="dot-yellow"></span>
                    <span className="dot-green"></span>
                    <span className="dot-red"></span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                    OUR MISSION
                  </span>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-900/40 border border-emerald-700/50 flex items-center justify-center text-emerald-400">
                  <Target className="w-6 h-6" />
                </div>
              </div>

              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-6">
                {VISION_MISSION.mission.title}
              </h3>

              {/* Exact Document Content */}
              <p className="text-xl sm:text-2xl text-slate-200 font-light leading-relaxed">
                {VISION_MISSION.mission.statement}
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-800/80 flex items-center text-xs text-emerald-300 font-medium">
              <Award className="w-4 h-4 mr-2 text-emerald-400" />
              Effective management accuracy, compliance & professionalism
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
