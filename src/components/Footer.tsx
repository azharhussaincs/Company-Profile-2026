import React from 'react';
import { Mail, Phone, MapPin, ChevronUp } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/profileData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#061224] text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Identity */}
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
                  Corporate Profile
                </span>
              </div>
            </div>

            <p className="text-xs text-white font-bold uppercase tracking-wider">
              {COMPANY_DETAILS.name}
            </p>

            <p className="text-xs text-[#5B8CA8] italic">
              {COMPANY_DETAILS.tagline}
            </p>

            <p className="text-xs text-slate-400 leading-relaxed">
              Complete integrated business support services for multinational companies, potential foreign companies and local companies in the Kingdom of Saudi Arabia.
            </p>
          </div>

          {/* Company & Core Competencies Links */}
          <div className="lg:col-span-3 space-y-2 text-xs">
            <div className="font-bold uppercase tracking-wider text-white mb-3">
              Company
            </div>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#page-2" className="hover:text-white transition-colors">About BIC</a></li>
              <li><a href="#page-3" className="hover:text-white transition-colors">Our Vision & Mission</a></li>
              <li><a href="#page-4" className="hover:text-white transition-colors">Management Team & Leadership</a></li>
              <li><a href="#page-5" className="hover:text-white transition-colors">Company Milestones & History</a></li>
              <li><a href="#page-19" className="hover:text-white transition-colors">Client Advantages</a></li>
              <li><a href="#page-20" className="hover:text-white transition-colors">Global Operating Offices</a></li>
              <li><a href="#page-21" className="hover:text-white transition-colors">International Reach</a></li>
            </ul>
          </div>

          {/* Core Services Links */}
          <div className="lg:col-span-2 space-y-2 text-xs">
            <div className="font-bold uppercase tracking-wider text-white mb-3">
              Solutions & Services
            </div>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#page-7" className="hover:text-white transition-colors">Accounting & Payroll</a></li>
              <li><a href="#page-8" className="hover:text-white transition-colors">Serviced Offices</a></li>
              <li><a href="#page-9" className="hover:text-white transition-colors">BIC Business Center</a></li>
              <li><a href="#page-10" className="hover:text-white transition-colors">Chauffeur Services</a></li>
              <li><a href="#page-11" className="hover:text-white transition-colors">Employee Management</a></li>
              <li><a href="#page-12" className="hover:text-white transition-colors">General Manager Services</a></li>
              <li><a href="#page-14" className="hover:text-white transition-colors">Government Relations</a></li>
              <li><a href="#page-15" className="hover:text-white transition-colors">HR & Recruitment</a></li>
              <li><a href="#page-16" className="hover:text-white transition-colors">Immigration Services</a></li>
              <li><a href="#page-17" className="hover:text-white transition-colors">Insurance Assistance</a></li>
              <li><a href="#page-18" className="hover:text-white transition-colors">Specialised Services</a></li>
            </ul>
          </div>

          {/* Official Contact & Headquarter */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <div className="font-bold uppercase tracking-wider text-white mb-3">
              Official Headquarters
            </div>
            
            <div className="space-y-2 text-slate-400">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  Al Anoud Tower 2, 12th Floor, King Fahad Road, Riyadh, Kingdom of Saudi Arabia
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-white hover:text-blue-400 transition-colors">
                  {COMPANY_DETAILS.email}
                </a>
              </div>

              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`tel:${COMPANY_DETAILS.telephone.replace(/\s+/g, '')}`} className="text-white hover:text-blue-400 transition-colors">
                  {COMPANY_DETAILS.telephone}
                </a>
              </div>
            </div>

            <div className="pt-3">
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

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © 2026 BRIGHT INTEGRATED SUPPORT SERVICES COMPANY (BIC). All rights reserved.
          </div>

          <div className="flex items-center space-x-4">
            <span>Complete Integrated Support Solutions</span>
            <span>·</span>
            <a href="#page-22" className="text-slate-400 hover:text-white transition-colors">
              Contact Us
            </a>
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
