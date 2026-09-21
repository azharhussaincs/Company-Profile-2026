import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/profileData';

export const Header: React.FC = () => {
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

  const companyLinks = [
    { label: 'About BIC', href: '#page-2' },
    { label: 'Our Vision & Mission', href: '#page-3' },
    { label: 'Management Team & Leadership', href: '#page-4' },
    { label: 'Company Milestones & History', href: '#page-5' },
  ];

  const competencyLinks = [
    { label: 'Accounting, Bookkeeping & Payroll', href: '#page-7' },
    { label: 'Business / Serviced Office Outsourcing', href: '#page-8' },
    { label: 'Chauffeur Services', href: '#page-10' },
    { label: 'Employee Management Services', href: '#page-11' },
    { label: 'General Manager (GM) Services', href: '#page-12' },
    { label: 'Government-Related Services', href: '#page-13' },
    { label: 'HR & Recruitment Services', href: '#page-15' },
    { label: 'Immigration Services', href: '#page-16' },
    { label: 'Insurance Assistance', href: '#page-17' },
    { label: 'Specialised Support Services', href: '#page-18' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      isScrolled 
        ? 'bg-[#0A1B33]/98 backdrop-blur-md shadow-2xl border-b border-slate-800' 
        : 'bg-[#0A1B33]/90 backdrop-blur-sm border-b border-slate-800/80'
    }`}>
      {/* Executive Micro-Bar */}
      <div className="hidden lg:block bg-[#061224] text-[11px] text-slate-300 border-b border-slate-800/80 py-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Left: Region */}
          <div className="flex items-center space-x-3">
            <span className="bic-dots">
              <span className="dot-yellow"></span>
              <span className="dot-green"></span>
              <span className="dot-red"></span>
            </span>
            <span className="font-semibold text-white tracking-wide">
              Saudi Arabia & UAE
            </span>
          </div>

          {/* Right: Riyadh, Dubai, Email */}
          <div className="flex items-center space-x-4">
            <a 
              href="tel:+966114646006" 
              className="flex items-center hover:text-white transition-colors text-slate-300 font-medium"
            >
              <Phone className="w-3 h-3 mr-1 text-blue-400" />
              <span>Riyadh: +966 11 464 6006</span>
            </a>

            <span className="text-slate-600">•</span>

            <a 
              href="tel:+97143827772" 
              className="flex items-center hover:text-white transition-colors text-slate-300 font-medium"
            >
              <Phone className="w-3 h-3 mr-1 text-blue-400" />
              <span>Dubai: +971 4 3827 772</span>
            </a>

            <span className="text-slate-600">•</span>

            <a 
              href="mailto:info@bic.net.sa" 
              className="flex items-center hover:text-white transition-colors text-slate-300 font-medium"
            >
              <Mail className="w-3 h-3 mr-1 text-blue-400" />
              <span>info@bic.net.sa</span>
            </a>
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
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#1D70B8] text-white uppercase tracking-wider">
                  Corporate
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-medium text-slate-300 tracking-wide uppercase">
                Bright Integrated Support Services
              </span>
            </div>
          </a>

          {/* Desktop Executive Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            
            {/* Company Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('company')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => setActiveDropdown(activeDropdown === 'company' ? null : 'company')}
                className="px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-200 hover:text-white hover:bg-slate-800/80 flex items-center space-x-1.5 transition-colors"
              >
                <span>Company</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {activeDropdown === 'company' && (
                <div className="absolute top-full left-0 w-64 bg-[#0A1B33] border border-slate-700 rounded-xl shadow-2xl p-2 z-50 animate-in fade-in duration-150">
                  {companyLinks.map((link) => (
                    <a 
                      key={link.label}
                      href={link.href}
                      onClick={() => setActiveDropdown(null)}
                      className="block px-3 py-2.5 rounded-lg text-xs font-medium text-slate-200 hover:bg-[#1D70B8] hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Core Competencies Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('competencies')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => setActiveDropdown(activeDropdown === 'competencies' ? null : 'competencies')}
                className="px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-200 hover:text-white hover:bg-slate-800/80 flex items-center space-x-1.5 transition-colors"
              >
                <span>Core Competencies</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {activeDropdown === 'competencies' && (
                <div className="absolute top-full left-0 w-80 bg-[#0A1B33] border border-slate-700 rounded-xl shadow-2xl p-3 z-50 max-h-[75vh] overflow-y-auto animate-in fade-in duration-150">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 pb-2 mb-1.5 border-b border-slate-800">
                    Integrated Support Services
                  </div>
                  <div className="grid grid-cols-1 gap-1 text-xs">
                    <a 
                      href="#page-6" 
                      onClick={() => setActiveDropdown(null)}
                      className="px-3 py-2 rounded text-blue-300 font-semibold hover:bg-slate-800 transition-colors"
                    >
                      Overview: All Competencies
                    </a>
                    {competencyLinks.map((link) => (
                      <a 
                        key={link.label}
                        href={link.href}
                        onClick={() => setActiveDropdown(null)}
                        className="px-3 py-2 rounded text-slate-200 hover:bg-[#1D70B8] hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Government Relations Direct Link */}
            <a
              href="#page-14"
              className="px-3 py-2 rounded-lg text-xs font-semibold text-slate-200 hover:text-white hover:bg-slate-800/80 transition-colors"
            >
              Government Relations
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
              Client Advantages
            </a>

            {/* Operating Offices */}
            <a
              href="#page-20"
              className="px-3 py-2 rounded-lg text-xs font-semibold text-slate-200 hover:text-white hover:bg-slate-800/80 transition-colors"
            >
              Global Offices
            </a>

            {/* International Clients */}
            <a
              href="#page-21"
              className="px-3 py-2 rounded-lg text-xs font-semibold text-slate-200 hover:text-white hover:bg-slate-800/80 transition-colors"
            >
              International Reach
            </a>

          </nav>

          {/* Right Action: Get in Touch CTA */}
          <div className="flex items-center space-x-3">
            <a
              href="#page-22"
              className="inline-flex items-center px-4 py-2 rounded-xl bg-[#1D70B8] hover:bg-blue-600 text-white text-xs font-bold shadow-md shadow-blue-600/30 transition-all"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5" />
              <span>Contact Us</span>
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
        <div className="lg:hidden bg-[#061224] border-b border-slate-800 px-4 pt-4 pb-6 max-h-[85vh] overflow-y-auto space-y-4 shadow-2xl">
          
          <div className="pb-3 border-b border-slate-800">
            <div className="text-xs font-bold text-white uppercase">{COMPANY_DETAILS.name}</div>
            <div className="text-[11px] text-blue-300 italic">{COMPANY_DETAILS.tagline}</div>
          </div>

          <div className="text-[11px] font-bold uppercase text-slate-400 tracking-wider">
            Company
          </div>

          <div className="grid grid-cols-1 gap-1 text-xs">
            {companyLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg bg-slate-900/80 text-slate-200 hover:bg-[#1D70B8] hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="text-[11px] font-bold uppercase text-slate-400 tracking-wider pt-2">
            Core Competencies
          </div>

          <div className="grid grid-cols-1 gap-1 text-xs">
            {competencyLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg bg-slate-900/80 text-slate-200 hover:bg-[#1D70B8] hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="text-[11px] font-bold uppercase text-slate-400 tracking-wider pt-2">
            Key Solutions
          </div>

          <div className="grid grid-cols-1 gap-1 text-xs">
            <a
              href="#page-14"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg bg-slate-900/80 text-slate-200 hover:bg-[#1D70B8] hover:text-white transition-colors"
            >
              Government Relations
            </a>
            <a
              href="#page-9"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg bg-slate-900/80 text-slate-200 hover:bg-[#1D70B8] hover:text-white transition-colors"
            >
              Business Center
            </a>
            <a
              href="#page-19"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg bg-slate-900/80 text-slate-200 hover:bg-[#1D70B8] hover:text-white transition-colors"
            >
              Client Advantages
            </a>
            <a
              href="#page-20"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg bg-slate-900/80 text-slate-200 hover:bg-[#1D70B8] hover:text-white transition-colors"
            >
              Global Operating Offices
            </a>
            <a
              href="#page-21"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg bg-slate-900/80 text-slate-200 hover:bg-[#1D70B8] hover:text-white transition-colors"
            >
              International Reach
            </a>
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col space-y-2 text-xs">
            <a
              href="#page-22"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-3 rounded-lg bg-[#1D70B8] text-white font-bold text-center hover:bg-blue-600 transition-colors"
            >
              Contact BIC
            </a>
            <div className="text-center text-slate-400 text-[11px] pt-1 space-y-1">
              <div className="text-white font-semibold">Saudi Arabia & UAE</div>
              <div>Riyadh: <a href="tel:+966114646006" className="text-blue-400 font-medium">+966 11 464 6006</a></div>
              <div>Dubai: <a href="tel:+97143827772" className="text-blue-400 font-medium">+971 4 3827 772</a></div>
              <div><a href="mailto:info@bic.net.sa" className="text-blue-400 font-medium">info@bic.net.sa</a></div>
            </div>
          </div>

        </div>
      )}
    </header>
  );
};
