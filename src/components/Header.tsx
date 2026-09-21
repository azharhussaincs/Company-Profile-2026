import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, Mail, ChevronDown, CheckCircle2 
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/profileData';

interface HeaderProps {
  onOpenAudit: () => void;
  currentPage?: number;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAudit, currentPage = 1 }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pageJumpList = [
    { page: 1, label: 'Page 01: Cover & Identity', href: '#page-1' },
    { page: 2, label: 'Page 02: About Our Company', href: '#page-2' },
    { page: 3, label: 'Page 03: Vision & Mission', href: '#page-3' },
    { page: 4, label: 'Page 04: Management Team', href: '#page-4' },
    { page: 5, label: 'Page 05: Milestones Timeline', href: '#page-5' },
    { page: 6, label: 'Page 06: Core Competencies (01–17)', href: '#page-6' },
    { page: 7, label: 'Page 07: 01 Accounting & Payroll', href: '#page-7' },
    { page: 8, label: 'Page 08: 02 Serviced Offices', href: '#page-8' },
    { page: 9, label: 'Page 09: BIC Business Center', href: '#page-9' },
    { page: 10, label: 'Page 10: 03 Chauffeur Services', href: '#page-10' },
    { page: 11, label: 'Page 11: 04 Employee Management', href: '#page-11' },
    { page: 12, label: 'Page 12: 05 GM Services', href: '#page-12' },
    { page: 13, label: 'Page 13: 06 Government-Related', href: '#page-13' },
    { page: 14, label: 'Page 14: 45 Government Relations', href: '#page-14' },
    { page: 15, label: 'Page 15: 07 HR & Recruitment', href: '#page-15' },
    { page: 16, label: 'Page 16: 08 Immigration Services', href: '#page-16' },
    { page: 17, label: 'Page 17: 09 Insurance Assistance', href: '#page-17' },
    { page: 18, label: 'Page 18: 10–17 Specialised Support', href: '#page-18' },
    { page: 19, label: 'Page 19: Client Advantages', href: '#page-19' },
    { page: 20, label: 'Page 20: Operating Offices', href: '#page-20' },
    { page: 21, label: 'Page 21: International Clients', href: '#page-21' },
    { page: 22, label: 'Page 22: Get In Touch!', href: '#page-22' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      isScrolled 
        ? 'bg-[#0A1B33]/95 backdrop-blur-md shadow-2xl border-b border-slate-800' 
        : 'bg-[#0A1B33]/90 backdrop-blur-sm border-b border-slate-800/80'
    }`}>
      {/* Executive Micro-Bar */}
      <div className="hidden lg:block bg-[#061224] text-[11px] text-slate-300 border-b border-slate-800/80 py-1.5 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Left: Tagline with 3 BIC Dots */}
          <div className="flex items-center space-x-3">
            <span className="bic-dots">
              <span className="dot-yellow"></span>
              <span className="dot-green"></span>
              <span className="dot-red"></span>
            </span>
            <span className="font-semibold text-white tracking-wide">
              {COMPANY_DETAILS.tagline}
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">
              HQ: Al Anoud Tower 2, 12th Floor, Riyadh, KSA
            </span>
          </div>

          {/* Right: Quick Page Jump + Contact + Verification */}
          <div className="flex items-center space-x-5">
            {/* Quick Page Jump Selector */}
            <div className="flex items-center space-x-1.5 text-slate-400">
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">PDF Jump:</span>
              <select
                onChange={(e) => {
                  if (e.target.value) {
                    window.location.hash = e.target.value;
                  }
                }}
                className="bg-[#0A1B33] border border-slate-700/80 text-blue-300 text-[11px] rounded px-2 py-0.5 focus:outline-none focus:border-blue-500 cursor-pointer"
                defaultValue=""
              >
                <option value="" disabled>Select PDF Page (1–22)</option>
                {pageJumpList.map((item) => (
                  <option key={item.page} value={item.href}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>

            <span className="text-slate-700">|</span>

            <a href={`tel:${COMPANY_DETAILS.telephone.replace(/\s+/g, '')}`} className="flex items-center hover:text-white transition-colors text-slate-300">
              <Phone className="w-3 h-3 mr-1 text-blue-400" />
              <span>{COMPANY_DETAILS.telephone}</span>
            </a>

            <a href={`mailto:${COMPANY_DETAILS.email}`} className="flex items-center hover:text-white transition-colors text-slate-300">
              <Mail className="w-3 h-3 mr-1 text-blue-400" />
              <span>{COMPANY_DETAILS.email}</span>
            </a>

            <button
              onClick={onOpenAudit}
              className="inline-flex items-center px-2 py-0.5 rounded bg-emerald-950/70 border border-emerald-700/60 text-emerald-300 hover:bg-emerald-900 text-[11px] font-semibold transition-colors"
            >
              <CheckCircle2 className="w-3 h-3 mr-1 text-emerald-400" />
              22-Page Audit (100%)
            </button>
          </div>

        </div>
      </div>

      {/* Main Executive Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo and Brand Identity */}
          <a href="#page-1" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 rounded-xl bg-white p-1 shadow-md border border-slate-700 group-hover:scale-105 transition-transform flex items-center justify-center">
              <img 
                src="/assets/logo.png" 
                alt="BIC Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <span className="text-xl font-black tracking-tight text-white">
                  BIC
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-600/90 text-white uppercase tracking-wider">
                  Profile 2026
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-medium text-slate-300 tracking-wide uppercase">
                Bright Integrated Support Services
              </span>
            </div>
          </a>

          {/* Desktop Executive Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            
            {/* Overview Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('company')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-3 py-2 rounded-lg text-xs font-semibold text-slate-200 hover:text-white hover:bg-slate-800/80 flex items-center space-x-1 transition-colors">
                <span>Company</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {activeDropdown === 'company' && (
                <div className="absolute top-full left-0 w-64 bg-[#0A1B33] border border-slate-700 rounded-xl shadow-2xl p-2 z-50">
                  <a href="#page-2" className="block px-3 py-2 rounded-lg text-xs text-slate-200 hover:bg-slate-800 hover:text-white transition-colors">
                    <span className="text-[10px] font-bold text-blue-400 uppercase block">Page 02</span>
                    About Our Company
                  </a>
                  <a href="#page-3" className="block px-3 py-2 rounded-lg text-xs text-slate-200 hover:bg-slate-800 hover:text-white transition-colors">
                    <span className="text-[10px] font-bold text-blue-400 uppercase block">Page 03</span>
                    Our Vision & Our Mission
                  </a>
                  <a href="#page-4" className="block px-3 py-2 rounded-lg text-xs text-slate-200 hover:bg-slate-800 hover:text-white transition-colors">
                    <span className="text-[10px] font-bold text-blue-400 uppercase block">Page 04</span>
                    Management Team & Org Chart
                  </a>
                  <a href="#page-5" className="block px-3 py-2 rounded-lg text-xs text-slate-200 hover:bg-slate-800 hover:text-white transition-colors">
                    <span className="text-[10px] font-bold text-blue-400 uppercase block">Page 05</span>
                    Company Timeline (2009–2026)
                  </a>
                </div>
              )}
            </div>

            {/* Competencies Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('competencies')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-3 py-2 rounded-lg text-xs font-semibold text-slate-200 hover:text-white hover:bg-slate-800/80 flex items-center space-x-1 transition-colors">
                <span>Competencies (17)</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {activeDropdown === 'competencies' && (
                <div className="absolute top-full left-0 w-80 bg-[#0A1B33] border border-slate-700 rounded-xl shadow-2xl p-3 z-50 max-h-[80vh] overflow-y-auto">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 pb-1 mb-1 border-b border-slate-800">
                    All 17 Documented Competencies
                  </div>
                  <div className="grid grid-cols-1 gap-1 text-xs">
                    <a href="#page-6" className="px-2.5 py-1.5 rounded text-blue-300 font-semibold hover:bg-slate-800">
                      Page 06: Full 17 Competencies Index
                    </a>
                    <a href="#page-7" className="px-2.5 py-1 rounded text-slate-300 hover:bg-slate-800 hover:text-white">
                      01 Accounting, Bookkeeping & Payroll
                    </a>
                    <a href="#page-8" className="px-2.5 py-1 rounded text-slate-300 hover:bg-slate-800 hover:text-white">
                      02 Business / Serviced Office Outsourcing
                    </a>
                    <a href="#page-10" className="px-2.5 py-1 rounded text-slate-300 hover:bg-slate-800 hover:text-white">
                      03 Chauffeur Services
                    </a>
                    <a href="#page-11" className="px-2.5 py-1 rounded text-slate-300 hover:bg-slate-800 hover:text-white">
                      04 Employee Management Services
                    </a>
                    <a href="#page-12" className="px-2.5 py-1 rounded text-slate-300 hover:bg-slate-800 hover:text-white">
                      05 General Manager (GM) Services
                    </a>
                    <a href="#page-13" className="px-2.5 py-1 rounded text-slate-300 hover:bg-slate-800 hover:text-white">
                      06 Government-Related Services
                    </a>
                    <a href="#page-15" className="px-2.5 py-1 rounded text-slate-300 hover:bg-slate-800 hover:text-white">
                      07 HR & Recruitment Services
                    </a>
                    <a href="#page-16" className="px-2.5 py-1 rounded text-slate-300 hover:bg-slate-800 hover:text-white">
                      08 Immigration Services
                    </a>
                    <a href="#page-17" className="px-2.5 py-1 rounded text-slate-300 hover:bg-slate-800 hover:text-white">
                      09 Insurance Assistance
                    </a>
                    <a href="#page-18" className="px-2.5 py-1 rounded text-slate-300 hover:bg-slate-800 hover:text-white">
                      10–17 Specialised Support Services
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* 45 Government Relations Direct Link */}
            <a
              href="#page-14"
              className="px-3 py-2 rounded-lg text-xs font-semibold text-slate-200 hover:text-white hover:bg-slate-800/80 transition-colors flex items-center"
            >
              <span>Gov Relations</span>
              <span className="ml-1.5 px-1.5 py-0.2 rounded bg-rose-900/60 text-rose-300 text-[10px] font-bold border border-rose-700/50">
                45
              </span>
            </a>

            {/* Business Center */}
            <a
              href="#page-9"
              className="px-3 py-2 rounded-lg text-xs font-semibold text-slate-200 hover:text-white hover:bg-slate-800/80 transition-colors"
            >
              Business Center
            </a>

            {/* Advantages */}
            <a
              href="#page-19"
              className="px-3 py-2 rounded-lg text-xs font-semibold text-slate-200 hover:text-white hover:bg-slate-800/80 transition-colors"
            >
              Advantages
            </a>

            {/* Operating Offices */}
            <a
              href="#page-20"
              className="px-3 py-2 rounded-lg text-xs font-semibold text-slate-200 hover:text-white hover:bg-slate-800/80 transition-colors"
            >
              Offices (6)
            </a>

            {/* International Clients */}
            <a
              href="#page-21"
              className="px-3 py-2 rounded-lg text-xs font-semibold text-slate-200 hover:text-white hover:bg-slate-800/80 transition-colors"
            >
              Global Clients
            </a>

          </nav>

          {/* Right Action: Get in Touch & PDF Page Indicator */}
          <div className="flex items-center space-x-3">
            
            {/* Active PDF Page Tracker Chip */}
            <div className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-lg bg-[#061224] border border-slate-700 text-[11px] font-mono font-semibold text-blue-300">
              <span className="text-slate-500 mr-1.5 font-sans uppercase text-[10px]">PDF:</span>
              <span>PAGE {String(currentPage).padStart(2, '0')} / 22</span>
            </div>

            {/* CTA Button */}
            <a
              href="#page-22"
              className="inline-flex items-center px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-md shadow-blue-600/30 transition-all"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5" />
              <span>Get In Touch</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#061224] border-b border-slate-800 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto space-y-4 shadow-2xl">
          
          <div className="pb-3 border-b border-slate-800">
            <div className="text-xs font-bold text-white uppercase">{COMPANY_DETAILS.name}</div>
            <div className="text-[11px] text-blue-300 italic">{COMPANY_DETAILS.tagline}</div>
          </div>

          <div className="text-[11px] font-bold uppercase text-slate-400 tracking-wider">
            All 22 PDF Pages Navigation
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs">
            {pageJumpList.map(item => (
              <a
                key={item.page}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg bg-slate-900/80 text-slate-200 hover:bg-blue-600 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col space-y-2 text-xs">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAudit(); }}
              className="w-full py-2 px-3 rounded-lg bg-emerald-950 border border-emerald-700/60 text-emerald-300 font-semibold flex items-center justify-center"
            >
              <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-emerald-400" />
              View 22-Page Verification Audit
            </button>
            <div className="text-center text-slate-400 text-[11px]">
              Tel: <a href={`tel:${COMPANY_DETAILS.telephone.replace(/\s+/g, '')}`} className="text-blue-400 font-medium">{COMPANY_DETAILS.telephone}</a>
            </div>
          </div>

        </div>
      )}
    </header>
  );
};
