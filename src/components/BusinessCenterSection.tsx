import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { BIC_BUSINESS_CENTER } from '../data/profileData';

export const BusinessCenterSection: React.FC = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <section id="page-9" className="py-20 bg-white text-[#0A1B33] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <div className="flex items-center space-x-2 mb-2">
          <div className="bic-dots">
            <span className="dot-yellow"></span>
            <span className="dot-green"></span>
            <span className="dot-red"></span>
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#0A1B33]">
            OUR CORE COMPETENCIES · BUSINESS/SERVICE OFFICE
          </span>
          <span className="text-xs text-slate-400 font-mono ml-2">
            (PDF Page 9)
          </span>
        </div>

        {/* Heading & Location */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-10">
          <h2 className="text-4xl sm:text-5xl font-black text-[#0A1B33] tracking-tight">
            {BIC_BUSINESS_CENTER.title}
          </h2>

          <div className="sm:text-right">
            <div className="text-xl sm:text-2xl font-bold text-[#0A1B33]">
              {BIC_BUSINESS_CENTER.tower}
            </div>
            <div className="text-sm font-semibold text-[#1D70B8]">
              {BIC_BUSINESS_CENTER.floor}
            </div>
          </div>
        </div>

        {/* Top 2 Images: 3D Render & 2D Blueprint (Page 9 Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          {/* 3D Isometric Architectural Center Layout */}
          <div 
            className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm cursor-pointer group relative aspect-[16/10]"
            onClick={() => setLightboxImage(BIC_BUSINESS_CENTER.renderImage)}
          >
            <img 
              src={BIC_BUSINESS_CENTER.renderImage} 
              alt="BIC Business Center 3D Isometric Layout" 
              className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="px-3 py-1.5 rounded-lg bg-black/70 text-white text-xs font-semibold flex items-center">
                <Maximize2 className="w-3.5 h-3.5 mr-1" /> Enlarge
              </span>
            </div>
          </div>

          {/* 2D Architectural Blueprint */}
          <div 
            className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm cursor-pointer group relative aspect-[16/10]"
            onClick={() => setLightboxImage(BIC_BUSINESS_CENTER.planImage)}
          >
            <img 
              src={BIC_BUSINESS_CENTER.planImage} 
              alt="BIC Business Center 2D Blueprint Plan" 
              className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="px-3 py-1.5 rounded-lg bg-black/70 text-white text-xs font-semibold flex items-center">
                <Maximize2 className="w-3.5 h-3.5 mr-1" /> Enlarge
              </span>
            </div>
          </div>

        </div>

        {/* Bottom 3 Real Office Photos (Page 9 Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BIC_BUSINESS_CENTER.photos.map((photo, pIdx) => (
            <div
              key={pIdx}
              className="border border-slate-200 rounded-xl overflow-hidden bg-slate-100 shadow-sm cursor-pointer group relative h-56"
              onClick={() => setLightboxImage(photo.src)}
            >
              <img 
                src={photo.src} 
                alt={`BIC Business Center interior ${pIdx + 1}`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Maximize2 className="w-5 h-5 text-white" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <img 
              src={lightboxImage} 
              alt="Full preview" 
              className="max-h-[88vh] w-auto object-contain mx-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};
