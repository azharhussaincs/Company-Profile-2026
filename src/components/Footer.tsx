import React from 'react';
import { Mail, Phone, MapPin, ChevronUp, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/profileData';

interface FooterProps {
  onOpenAudit: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAudit }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07111E] text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-white p-1 shadow-md">
                <img 
                  src="/assets/logo.png" 
                  alt="BIC Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight flex items-center">
                  BIC
                  <span className="bic-dots ml-2">
                    <span className="dot-yellow"></span>
                    <span className="dot-green"></span>
                    <span className="dot-red"></span>
                  </span>
                </span>
                <span className="text-xs text-slate-400 block font-medium">
                  Company Profile 2026
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 font-semibold uppercase tracking-wider">
              {COMPANY_DETAILS.name}
            </p>

            <p className="text-xs text-blue-300 italic">
              “{COMPANY_DETAILS.tagline}”
            </p>

            <p className="text-xs text-slate-400 leading-relaxed">
              Complete integrated business support services for multinational companies, potential foreign companies, and local companies operating in the Kingdom of Saudi Arabia.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenAudit}
                className="inline-flex items-center px-3 py-1.5 rounded-lg bg-blue-950 border border-blue-700/60 text-blue-300 hover:bg-blue-900 text-xs font-semibold transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-green-400" />
                View 22-Page Document Audit
              </button>
            </div>
          </div>

          {/* Col 2: Core Sections */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Company Overview
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Our Company</a></li>
              <li><a href="#vision-mission" className="hover:text-blue-400 transition-colors">Our Vision & Mission</a></li>
              <li><a href="#team" className="hover:text-blue-400 transition-colors">Management Team & Org Chart</a></li>
              <li><a href="#timeline" className="hover:text-blue-400 transition-colors">Company Timeline (2009–2026)</a></li>
              <li><a href="#advantages" className="hover:text-blue-400 transition-colors">Client Advantages</a></li>
              <li><a href="#offices" className="hover:text-blue-400 transition-colors">Operating Offices (6 Locations)</a></li>
              <li><a href="#global-clients" className="hover:text-blue-400 transition-colors">International Clients</a></li>
            </ul>
          </div>

          {/* Col 3: Competencies Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Competencies
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#competencies" className="hover:text-blue-400 transition-colors">All 17 Competencies</a></li>
              <li><a href="#competency-01" className="hover:text-blue-400 transition-colors">01 Accounting & Payroll</a></li>
              <li><a href="#competency-02" className="hover:text-blue-400 transition-colors">02 Serviced Offices</a></li>
              <li><a href="#competency-05" className="hover:text-blue-400 transition-colors">05 GM Services</a></li>
              <li><a href="#competency-06" className="hover:text-blue-400 transition-colors">06 Government Services</a></li>
              <li><a href="#gov-relations" className="hover:text-blue-400 transition-colors">45 Gov Relations Checklist</a></li>
              <li><a href="#business-center" className="hover:text-blue-400 transition-colors">BIC Business Center</a></li>
            </ul>
          </div>

          {/* Col 4: Official Contact & Headquarters */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Headquarters & Contact
            </div>
            
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  {COMPANY_DETAILS.headquarters.building}, {COMPANY_DETAILS.headquarters.floor}, {COMPANY_DETAILS.headquarters.suite}, King Fahad Road, {COMPANY_DETAILS.headquarters.city}, {COMPANY_DETAILS.headquarters.country}
                </span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-slate-200 hover:text-blue-400 transition-colors">
                  {COMPANY_DETAILS.email}
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`tel:${COMPANY_DETAILS.telephone.replace(/\s+/g, '')}`} className="text-slate-200 hover:text-blue-400 transition-colors">
                  {COMPANY_DETAILS.telephone}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <div className="w-16 h-16 bg-white p-1 rounded-lg shadow-sm">
                <img 
                  src="/assets/qr-code.png" 
                  alt="BIC QR Code" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom micro-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © 2026 Bright Integrated Support Services Company (BIC). All rights reserved.
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={onOpenAudit}
              className="text-blue-400 hover:underline"
            >
              22-Page Document Audit
            </button>
            <span>·</span>
            <span>Frontend-Only Implementation</span>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors flex items-center"
              aria-label="Scroll to top"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
