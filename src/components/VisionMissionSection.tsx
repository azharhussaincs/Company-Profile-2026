import React from 'react';
import { VISION_MISSION } from '../data/profileData';

export const VisionMissionSection: React.FC = () => {
  return (
    <section id="page-3" className="grid grid-cols-1 lg:grid-cols-2 border-b border-slate-200">
      
      {/* Left Column: Our Vision (Dark Navy #0A1B33 from PDF Page 3) */}
      <div className="bg-[#0A1B33] text-white p-8 sm:p-14 lg:p-20 flex flex-col justify-between">
        <div>
          {/* Eyebrow */}
          <div className="flex items-center space-x-2 mb-4">
            <div className="bic-dots">
              <span className="dot-yellow"></span>
              <span className="dot-green"></span>
              <span className="dot-red"></span>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
              {VISION_MISSION.vision.eyebrow}
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-8">
            {VISION_MISSION.vision.title}
          </h2>

          {/* Exact Text from PDF Page 3 */}
          <p className="text-xl sm:text-2xl text-slate-100 font-light leading-relaxed">
            {VISION_MISSION.vision.text}
          </p>
        </div>

        {/* Bottom Line */}
        <div className="mt-12 pt-6 border-b border-slate-700/80 w-full"></div>
      </div>

      {/* Right Column: Our Mission (Pure White #FFFFFF from PDF Page 3) */}
      <div className="bg-white text-[#0A1B33] p-8 sm:p-14 lg:p-20 flex flex-col justify-between">
        <div>
          {/* Eyebrow */}
          <div className="flex items-center space-x-2 mb-4">
            <div className="bic-dots">
              <span className="dot-yellow"></span>
              <span className="dot-green"></span>
              <span className="dot-red"></span>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0A1B33]">
              {VISION_MISSION.mission.eyebrow}
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-black text-[#0A1B33] tracking-tight mb-8">
            {VISION_MISSION.mission.title}
          </h2>

          {/* Exact Text from PDF Page 3 */}
          <p className="text-xl sm:text-2xl text-[#0A1B33] font-light leading-relaxed">
            {VISION_MISSION.mission.text}
          </p>
        </div>

        {/* Bottom Line */}
        <div className="mt-12 pt-6 border-b border-slate-300 w-full"></div>
      </div>

    </section>
  );
};
