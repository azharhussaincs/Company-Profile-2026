import React from 'react';
import { 
  CORE_COMPETENCIES_LIST, 
  COMPETENCY_01, 
  COMPETENCY_02, 
  COMPETENCY_03, 
  COMPETENCY_04, 
  COMPETENCY_05, 
  COMPETENCY_06, 
  COMPETENCY_07, 
  COMPETENCY_08, 
  COMPETENCY_09, 
  SPECIALISED_SERVICES 
} from '../data/profileData';

export const CoreCompetenciesSection: React.FC = () => {
  const individualCompetencies = [
    COMPETENCY_01,
    COMPETENCY_02,
    COMPETENCY_03,
    COMPETENCY_04,
    COMPETENCY_05,
    COMPETENCY_06,
    COMPETENCY_07,
    COMPETENCY_08,
    COMPETENCY_09
  ];

  return (
    <div className="bg-white text-[#0A1B33]">
      
      {/* ================= PAGE 6: Core Competencies Overview ================= */}
      <section id="page-6" className="py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Eyebrow */}
          <div className="flex items-center space-x-2 mb-2">
            <div className="bic-dots">
              <span className="dot-yellow"></span>
              <span className="dot-green"></span>
              <span className="dot-red"></span>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0A1B33]">
              OUR CORE COMPETENCIES
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-12">
            
            {/* Left Column: Heading & Description */}
            <div className="lg:col-span-4 space-y-4">
              <h2 className="text-4xl sm:text-5xl font-black text-[#0A1B33] tracking-tight leading-tight">
                Our core <br />
                competencies
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We provide complete integrated support solutions for clients' businesses by providing them with a wide range of consulting services.
              </p>
            </div>

            {/* Right Column: 2-Column Grid of 17 Items (Exact Page 6 Layout) */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {CORE_COMPETENCIES_LIST.map((item) => (
                  <a
                    key={item.number}
                    href={`#page-${parseInt(item.number) < 10 ? (parseInt(item.number) >= 3 ? parseInt(item.number) + 7 : (parseInt(item.number) === 1 ? 7 : 8)) : 18}`}
                    className="bg-[#F2F5F9] hover:bg-[#E2EAF4] transition-colors p-4 rounded-xl flex items-center space-x-4 group"
                  >
                    <span className="text-lg font-bold text-[#1D70B8] w-7 shrink-0 font-mono">
                      {item.number}
                    </span>
                    <span className="text-sm font-semibold text-[#0A1B33] group-hover:text-[#1D70B8] transition-colors leading-snug">
                      {item.title}
                    </span>
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= PAGES 7, 8, 10, 11, 12, 13, 15, 16, 17: Individual Competencies 01 to 09 ================= */}
      {individualCompetencies.map((comp) => {
        // Map competency number to actual PDF page number
        const pageNumberMap: Record<string, number> = {
          '01': 7,
          '02': 8,
          '03': 10,
          '04': 11,
          '05': 12,
          '06': 13,
          '07': 15,
          '08': 16,
          '09': 17,
        };
        const pageNum = pageNumberMap[comp.number];

        return (
          <section 
            key={comp.number} 
            id={`page-${pageNum}`} 
            className="py-16 border-b border-slate-200"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              {/* Eyebrow */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="bic-dots">
                  <span className="dot-yellow"></span>
                  <span className="dot-green"></span>
                  <span className="dot-red"></span>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#0A1B33]">
                  OUR CORE COMPETENCIES
                </span>
                <span className="text-xs text-slate-400 font-mono ml-2">
                  (PDF Page {pageNum})
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                
                {/* Left Column: Number, Title, Description */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="text-5xl font-black text-[#1D70B8] font-mono leading-none">
                    {comp.number}
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-black text-[#0A1B33] tracking-tight leading-tight">
                    {comp.title}
                  </h3>

                  {'description' in comp && typeof (comp as { description?: string }).description === 'string' && (
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-2">
                      {(comp as { description?: string }).description}
                    </p>
                  )}

                  {/* Quick link for 06 Government-Related Services to Page 14 list */}
                  {comp.number === '06' && (
                    <div className="pt-3">
                      <a
                        href="#page-14"
                        className="inline-flex items-center text-xs font-bold text-white bg-[#1D70B8] hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors"
                      >
                        <span>View 45 Government Relations Checklist (Page 14) →</span>
                      </a>
                    </div>
                  )}

                  {/* Quick link for 02 Serviced Offices to Page 9 Business Center */}
                  {comp.number === '02' && (
                    <div className="pt-3">
                      <a
                        href="#page-9"
                        className="inline-flex items-center text-xs font-bold text-white bg-[#0A1B33] hover:bg-slate-800 px-4 py-2 rounded-lg transition-colors"
                      >
                        <span>View BIC Business Center (Page 09) →</span>
                      </a>
                    </div>
                  )}
                </div>

                {/* Right Column: Service Bars (Exact Ice-Blue Bars from PDF) */}
                <div className="lg:col-span-7 space-y-2.5">
                  {comp.services.map((service, sIdx) => (
                    <div
                      key={sIdx}
                      className="bg-[#F2F5F9] px-6 py-4 rounded-xl text-sm sm:text-base font-semibold text-[#0A1B33] shadow-sm flex items-center"
                    >
                      {service}
                    </div>
                  ))}
                </div>

              </div>

            </div>
          </section>
        );
      })}

      {/* ================= PAGE 18: Specialised Support Services (10 to 17) ================= */}
      <section id="page-18" className="py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Eyebrow */}
          <div className="flex items-center space-x-2 mb-2">
            <div className="bic-dots">
              <span className="dot-yellow"></span>
              <span className="dot-green"></span>
              <span className="dot-red"></span>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0A1B33]">
              OUR CORE COMPETENCIES
            </span>
          </div>

          <div className="flex items-baseline justify-between mb-12">
            <h2 className="text-4xl sm:text-5xl font-black text-[#0A1B33] tracking-tight">
              Specialised Support Services
            </h2>
            <span className="text-xs font-bold text-slate-400 font-mono">
              PDF Page 18 (10–17)
            </span>
          </div>

          {/* 8 Cards in 4-Column x 2-Row Grid (Exact Layout from PDF Page 18) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SPECIALISED_SERVICES.map((srv) => (
              <div 
                key={srv.number}
                className="flex flex-col justify-between space-y-4"
              >
                {/* Header: Number & Title with Blue Accent Bar */}
                <div>
                  <div className="pb-3 border-b-2 border-[#1D70B8] mb-3">
                    <span className="text-2xl font-black text-[#5B8CA8] font-mono mr-2">
                      {srv.number}
                    </span>
                    <span className="text-base font-bold text-[#0A1B33]">
                      {srv.title}
                    </span>
                  </div>

                  {/* Content: Either Paragraph or List Items */}
                  {srv.type === 'paragraph' ? (
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {srv.content}
                    </p>
                  ) : (
                    <div className="space-y-2">
                      {srv.items?.map((item, iIdx) => (
                        <div 
                          key={iIdx}
                          className="bg-[#F2F5F9] p-3 rounded-lg text-xs font-semibold text-[#0A1B33] flex items-start space-x-2"
                        >
                          <div className="w-1.5 h-1.5 bg-[#1D70B8] mt-1.5 shrink-0"></div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
