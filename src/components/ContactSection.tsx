import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/profileData';

export const ContactSection: React.FC = () => {
  const [inquirySent, setInquirySent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
  };

  return (
    <section id="page-22" className="py-24 bg-[#0A1B33] text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Exact Text and Layout from PDF Page 22 */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Eyebrow & Brand Dots */}
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 rounded-xl bg-white p-1 shadow-md">
                <img 
                  src="/assets/logo.png" 
                  alt="BIC Logo" 
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="bic-dots-lg">
                <span className="dot-yellow"></span>
                <span className="dot-green"></span>
                <span className="dot-red"></span>
              </div>
            </div>

            {/* Title: GET IN TOUCH! */}
            <div className="space-y-1">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-none">
                GET IN <br />
                <span className="text-[#5B8CA8]">TOUCH!</span>
              </h2>
            </div>

            {/* Statement from Page 22 */}
            <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed max-w-xl">
              {COMPANY_DETAILS.getInTouchText}
            </p>

            {/* Email & Telephone with Blue Accent Underlines (Page 22 Layout) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              
              {/* EMAIL */}
              <div className="space-y-2">
                <div className="w-full h-[2px] bg-[#386690]"></div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400 pt-1">
                  EMAIL
                </div>
                <a 
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="text-lg sm:text-xl font-bold text-white hover:text-[#5B8CA8] transition-colors block"
                >
                  {COMPANY_DETAILS.email}
                </a>
              </div>

              {/* TELEPHONE */}
              <div className="space-y-2">
                <div className="w-full h-[2px] bg-[#386690]"></div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400 pt-1">
                  TELEPHONE
                </div>
                <a 
                  href={`tel:${COMPANY_DETAILS.telephone.replace(/\s+/g, '')}`}
                  className="text-lg sm:text-xl font-bold text-white hover:text-[#5B8CA8] transition-colors block"
                >
                  {COMPANY_DETAILS.telephone}
                </a>
              </div>

            </div>

            {/* QR Code */}
            <div className="pt-2">
              <div className="w-20 h-20 bg-white p-1.5 rounded-xl shadow-md">
                <img 
                  src="/assets/qr-code.png" 
                  alt="BIC QR Code" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Handshake Image from PDF Page 22 */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/60 bg-slate-900">
              <img 
                src="/assets/handshake.png" 
                alt="BIC Partnership Handshake" 
                className="w-full h-auto object-cover max-h-[480px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B33]/60 via-transparent to-transparent"></div>
            </div>

            {/* Interactive Frontend Consultation Box */}
            <div className="bg-[#0D1F35] border border-slate-700/70 rounded-2xl p-6 shadow-xl">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-2">
                Direct Client Inquiry
              </h3>
              
              {inquirySent ? (
                <div className="py-4 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-green-400 mx-auto" />
                  <p className="text-xs text-slate-200">
                    Thank you. Your message has been received. Our team will contact you at {COMPANY_DETAILS.email}.
                  </p>
                  <button
                    onClick={() => setInquirySent(false)}
                    className="text-[11px] text-blue-400 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSend} className="space-y-3">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Name / Company"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-[#0A1B33] border border-slate-700 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Corporate Email"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-[#0A1B33] border border-slate-700 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={2}
                      required
                      placeholder="Requirements / Inquiries"
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-[#0A1B33] border border-slate-700 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 rounded-lg bg-[#1D70B8] hover:bg-blue-600 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center space-x-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Inquiry to BIC</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
