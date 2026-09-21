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
                  Company Profile 2026
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

            <div className="pt-2">
              <button
                onClick={onOpenAudit}
                className="inline-flex items-center px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 hover:bg-emerald-900 text-xs font-semibold transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
                22-Page Document Verification Audit (100%)
              </button>
            </div>
          </div>

          {/* PDF Pages 1–8 */}
          <div className="lg:col-span-3 space-y-2 text-xs">
            <div className="font-bold uppercase tracking-wider text-white mb-3">
              Pages 1–10
            </div>
            <ul className="space-y-1.5 text-slate-400">
              <li><a href="#page-1" className="hover:text-white transition-colors">Page 01: Cover & Identity</a></li>
              <li><a href="#page-2" className="hover:text-white transition-colors">Page 02: About Our Company</a></li>
              <li><a href="#page-3" className="hover:text-white transition-colors">Page 03: Our Vision & Mission</a></li>
              <li><a href="#page-4" className="hover:text-white transition-colors">Page 04: Management Team & Org Chart</a></li>
              <li><a href="#page-5" className="hover:text-white transition-colors">Page 05: Milestones Timeline</a></li>
              <li><a href="#page-6" className="hover:text-white transition-colors">Page 06: Core Competencies Overview</a></li>
              <li><a href="#page-7" className="hover:text-white transition-colors">Page 07: 01 Accounting & Payroll</a></li>
              <li><a href="#page-8" className="hover:text-white transition-colors">Page 08: 02 Serviced Offices</a></li>
              <li><a href="#page-9" className="hover:text-white transition-colors">Page 09: BIC Business Center</a></li>
              <li><a href="#page-10" className="hover:text-white transition-colors">Page 10: 03 Chauffeur Services</a></li>
            </ul>
          </div>

          {/* PDF Pages 11–22 */}
          <div className="lg:col-span-2 space-y-2 text-xs">
            <div className="font-bold uppercase tracking-wider text-white mb-3">
              Pages 11–22
            </div>
            <ul className="space-y-1.5 text-slate-400">
              <li><a href="#page-11" className="hover:text-white transition-colors">Page 11: 04 Employee Management</a></li>
              <li><a href="#page-12" className="hover:text-white transition-colors">Page 12: 05 GM Services</a></li>
              <li><a href="#page-13" className="hover:text-white transition-colors">Page 13: 06 Government-Related</a></li>
              <li><a href="#page-14" className="hover:text-white transition-colors">Page 14: 45 Gov Relations</a></li>
              <li><a href="#page-15" className="hover:text-white transition-colors">Page 15: 07 HR & Recruitment</a></li>
              <li><a href="#page-16" className="hover:text-white transition-colors">Page 16: 08 Immigration Services</a></li>
              <li><a href="#page-17" className="hover:text-white transition-colors">Page 17: 09 Insurance Assistance</a></li>
              <li><a href="#page-18" className="hover:text-white transition-colors">Page 18: 10–17 Specialised Support</a></li>
              <li><a href="#page-19" className="hover:text-white transition-colors">Page 19: Client Advantages</a></li>
              <li><a href="#page-20" className="hover:text-white transition-colors">Page 20: Operating Offices (6)</a></li>
              <li><a href="#page-21" className="hover:text-white transition-colors">Page 21: International Clients</a></li>
              <li><a href="#page-22" className="hover:text-white transition-colors">Page 22: Get In Touch!</a></li>
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
            <button
              onClick={onOpenAudit}
              className="text-emerald-400 hover:underline"
            >
              22-Page Document Audit
            </button>
            <span>·</span>
            <span>Single Source of Truth: BIC Profile 2026 PDF</span>
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
