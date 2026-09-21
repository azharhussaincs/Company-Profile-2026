import React, { useState } from 'react';
import { Building2, MapPin, Check, Maximize2, Layers, Eye } from 'lucide-react';
import { BIC_BUSINESS_CENTER } from '../data/profileData';

export const BusinessCenterSection: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section id="business-center" className="py-24 bg-[#0B1A2E] text-slate-100 relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Page 9) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <div className="bic-dots">
                <span className="dot-yellow"></span>
                <span className="dot-green"></span>
                <span className="dot-red"></span>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                OUR CORE COMPETENCIES · BUSINESS/SERVICE OFFICE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              {BIC_BUSINESS_CENTER.title}
            </h2>
            <div className="mt-3 h-1 w-24 bg-blue-500 rounded"></div>
          </div>

          <div className="bg-[#0F223A] border border-blue-600/50 px-5 py-3 rounded-2xl flex items-center space-x-3 shadow-lg">
            <MapPin className="w-5 h-5 text-blue-400 shrink-0" />
            <div>
              <div className="text-sm font-bold text-white">
                {BIC_BUSINESS_CENTER.tower}
              </div>
              <div className="text-xs text-blue-200">
                {BIC_BUSINESS_CENTER.floor}
              </div>
            </div>
          </div>
        </div>

        {/* 3D Model & Blueprint Layouts (Page 9 top images) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* 3D Floor Plan */}
          <div className="bg-gradient-to-b from-[#0F243D] to-[#091728] border border-slate-800 rounded-3xl p-5 shadow-2xl overflow-hidden group">
            <div className="flex items-center justify-between mb-3 px-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center">
                <Layers className="w-4 h-4 mr-1.5 text-blue-400" />
                3D Isometric Architectural Center Layout
              </span>
              <button 
                onClick={() => setActiveImage(BIC_BUSINESS_CENTER.renderImage)}
                className="text-xs text-blue-400 hover:text-white flex items-center"
              >
                <Maximize2 className="w-3.5 h-3.5 mr-1" /> View Full
              </button>
            </div>
            
            <div 
              className="relative rounded-2xl overflow-hidden bg-slate-950/80 cursor-pointer border border-slate-700/50 aspect-[16/10]"
              onClick={() => setActiveImage(BIC_BUSINESS_CENTER.renderImage)}
            >
              <img 
                src={BIC_BUSINESS_CENTER.renderImage} 
                alt="BIC Business Center 3D Isometric View" 
                className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-3 py-1.5 rounded-lg bg-blue-600/90 text-white text-xs font-semibold flex items-center">
                  <Eye className="w-4 h-4 mr-1.5" /> Click to Expand
                </span>
              </div>
            </div>
          </div>

          {/* 2D Architectural Blueprint */}
          <div className="bg-gradient-to-b from-[#0F243D] to-[#091728] border border-slate-800 rounded-3xl p-5 shadow-2xl overflow-hidden group">
            <div className="flex items-center justify-between mb-3 px-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center">
                <Building2 className="w-4 h-4 mr-1.5 text-indigo-400" />
                Floor Plan & Office Allocation Blueprint
              </span>
              <button 
                onClick={() => setActiveImage(BIC_BUSINESS_CENTER.planImage)}
                className="text-xs text-blue-400 hover:text-white flex items-center"
              >
                <Maximize2 className="w-3.5 h-3.5 mr-1" /> View Full
              </button>
            </div>
            
            <div 
              className="relative rounded-2xl overflow-hidden bg-slate-950/80 cursor-pointer border border-slate-700/50 aspect-[16/10]"
              onClick={() => setActiveImage(BIC_BUSINESS_CENTER.planImage)}
            >
              <img 
                src={BIC_BUSINESS_CENTER.planImage} 
                alt="BIC Business Center 2D Blueprint Plan" 
                className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-3 py-1.5 rounded-lg bg-blue-600/90 text-white text-xs font-semibold flex items-center">
                  <Eye className="w-4 h-4 mr-1.5" /> Click to Expand
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Real Interior Photography (Page 9 bottom images) */}
        <div className="mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center">
            <span>Interior Center Photography — Al Anoud Tower 2, 15th Floor</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BIC_BUSINESS_CENTER.photos.map((photo, pIdx) => (
              <div 
                key={pIdx}
                className="bg-[#0D1E33] border border-slate-800 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
                onClick={() => setActiveImage(photo.src)}
              >
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img 
                    src={photo.src} 
                    alt={photo.caption} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs font-medium text-slate-200 leading-snug">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Business Center Features Grid */}
        <div className="bg-gradient-to-r from-[#07111E] to-[#0A1A2E] rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BIC_BUSINESS_CENTER.features.map((feat, fIdx) => (
              <div key={fIdx} className="flex items-center space-x-3 bg-slate-900/50 p-3 rounded-xl border border-slate-800">
                <div className="w-5 h-5 rounded-full bg-blue-900/80 text-blue-400 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-semibold text-slate-200">
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl p-2">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black transition-colors"
            >
              ✕
            </button>
            <img 
              src={activeImage} 
              alt="Expanded preview" 
              className="max-h-[85vh] w-auto object-contain mx-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};
