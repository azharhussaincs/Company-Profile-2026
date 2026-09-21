import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/profileData';

interface HeaderProps {
  onOpenAudit: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAudit }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Vision & Mission', href: '#vision-mission' },
    { name: 'Team', href: '#team' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Competencies', href: '#competencies' },
    { name: 'Gov Relations', href: '#gov-relations' },
    { name: 'Business Center', href: '#business-center' },
    { name: 'Advantages', href: '#advantages' },
    { name: 'Offices', href: '#offices' },
    { name: 'Global Clients', href: '#global-clients' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0B1A2E]/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-slate-800' 
        : 'bg-[#0B1A2E]/80 backdrop-blur-sm border-b border-slate-800/60'
    }`}>
      {/* Top micro-bar for quick contact */}
      <div className="hidden lg:block bg-[#07111E] text-xs text-slate-400 border-b border-slate-800/80 py-1.5 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-slate-300 font-medium">
              <span className="bic-dots mr-2">
                <span className="dot-yellow"></span>
                <span className="dot-green"></span>
                <span className="dot-red"></span>
              </span>
              {COMPANY_DETAILS.tagline}
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">HQ: Riyadh, Al Anoud Tower 2, 12th Floor</span>
          </div>
          <div className="flex items-center space-x-5">
            <a href={`tel:${COMPANY_DETAILS.telephone.replace(/\s+/g, '')}`} className="flex items-center hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 mr-1.5 text-blue-400" />
              {COMPANY_DETAILS.telephone}
            </a>
            <a href={`mailto:${COMPANY_DETAILS.email}`} className="flex items-center hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 mr-1.5 text-blue-400" />
              {COMPANY_DETAILS.email}
            </a>
            <button 
              onClick={onOpenAudit}
              className="inline-flex items-center px-2 py-0.5 rounded bg-blue-900/60 text-blue-300 hover:bg-blue-800 text-[11px] font-medium transition-colors border border-blue-700/50"
              title="View 22-page document-to-website audit"
            >
              <CheckCircle2 className="w-3 h-3 mr-1 text-green-400" />
              22-Page PDF Audit
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-200 bg-white p-1">
              <img 
                src="/assets/logo.png" 
                alt="BIC Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white flex items-center">
                BIC
                <span className="ml-2 text-xs font-semibold px-2 py-0.5 rounded bg-blue-600 text-white uppercase tracking-wider">
                  2026 Profile
                </span>
              </span>
              <span className="text-[11px] text-slate-300 font-medium tracking-wide uppercase">
                Bright Integrated Support Services
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 rounded-md text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/70 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="#contact"
              className="inline-flex items-center px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-500 shadow-md hover:shadow-blue-500/20 transition-all"
            >
              Get in Touch
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={onOpenAudit}
              className="p-1.5 rounded-lg bg-blue-900/50 text-blue-300 text-xs font-medium flex items-center border border-blue-700/50"
            >
              <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-green-400" />
              Audit
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#07111E] border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 shadow-2xl">
          <div className="pb-3 border-b border-slate-800 text-xs text-slate-400">
            <p className="font-semibold text-slate-200">{COMPANY_DETAILS.name}</p>
            <p className="text-[11px] text-slate-400 mt-0.5">{COMPANY_DETAILS.tagline}</p>
          </div>
          <div className="grid grid-cols-2 gap-1 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 mt-2 border-t border-slate-800 flex flex-col space-y-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 px-4 rounded-lg bg-blue-600 text-white font-medium text-sm hover:bg-blue-500"
            >
              Contact BIC
            </a>
            <div className="text-center text-xs text-slate-400 pt-1">
              Tel: <a href={`tel:${COMPANY_DETAILS.telephone.replace(/\s+/g, '')}`} className="text-blue-400">{COMPANY_DETAILS.telephone}</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
