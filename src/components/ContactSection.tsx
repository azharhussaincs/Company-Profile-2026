import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/profileData';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    serviceInterest: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Pure frontend state handling
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#0B1A2E] text-slate-100 relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Official Contact Details (Page 22) */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Header */}
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <div className="bic-dots">
                  <span className="dot-yellow"></span>
                  <span className="dot-green"></span>
                  <span className="dot-red"></span>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  GET IN TOUCH!
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none mb-6">
                GET IN <br />
                <span className="text-blue-400">TOUCH!</span>
              </h2>

              {/* Exact statement from Page 22 */}
              <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed max-w-xl">
                {COMPANY_DETAILS.closingStatement}
              </p>
            </div>

            {/* Handshake & QR Code Visual Block */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-xl max-w-md">
              <div className="h-44 overflow-hidden relative">
                <img 
                  src="/assets/handshake.png" 
                  alt="BIC Partnership Handshake" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A2E] via-transparent to-transparent"></div>
              </div>
              
              <div className="p-5 flex items-center justify-between bg-[#081525]">
                <div>
                  <div className="text-xs uppercase font-bold text-slate-300">
                    Direct Corporate Connect
                  </div>
                  <div className="text-[11px] text-blue-400 mt-0.5">
                    Scan QR code to access BIC profile
                  </div>
                </div>
                <div className="w-14 h-14 bg-white p-1 rounded-lg shrink-0 shadow-md">
                  <img 
                    src="/assets/qr-code.png" 
                    alt="BIC QR Code" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
              
              {/* Email */}
              <a 
                href={`mailto:${COMPANY_DETAILS.email}`}
                className="p-5 rounded-2xl bg-[#0E223A] border border-slate-800 hover:border-blue-500 transition-all flex items-start space-x-3 group"
              >
                <div className="p-3 bg-blue-900/50 rounded-xl text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    EMAIL
                  </div>
                  <div className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors mt-0.5 break-all">
                    {COMPANY_DETAILS.email}
                  </div>
                </div>
              </a>

              {/* Telephone */}
              <a 
                href={`tel:${COMPANY_DETAILS.telephone.replace(/\s+/g, '')}`}
                className="p-5 rounded-2xl bg-[#0E223A] border border-slate-800 hover:border-blue-500 transition-all flex items-start space-x-3 group"
              >
                <div className="p-3 bg-blue-900/50 rounded-xl text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    TELEPHONE
                  </div>
                  <div className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors mt-0.5">
                    {COMPANY_DETAILS.telephone}
                  </div>
                </div>
              </a>

            </div>

          </div>

          {/* Right Column: Interactive Consultation Inquiry Form (Frontend Only) */}
          <div className="lg:col-span-6">
            <div className="bg-gradient-to-b from-[#0E223A] to-[#07111E] border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Request a Consultation
                </h3>
                <p className="text-xs text-slate-300">
                  Connect with our team in Riyadh to discuss business support services, licensing, serviced offices, and corporate operations.
                </p>
              </div>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-900/60 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    Inquiry Received
                  </h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Thank you for reaching out to Bright Integrated Support Services Company. Our team will review your inquiry and connect with you shortly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-xl bg-slate-800 text-xs font-semibold text-slate-200 hover:bg-slate-700"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={e => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Global Enterprises Ltd."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+966 ..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Service of Interest
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={e => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="General Inquiry">General Business Support Inquiry</option>
                      <option value="Accounting & Payroll">01 Accounting, Bookkeeping & Payroll</option>
                      <option value="Serviced Office">02 Business / Serviced Office Outsourcing</option>
                      <option value="Chauffeur Services">03 Chauffeur Services</option>
                      <option value="Employee Management">04 Employee Management Services</option>
                      <option value="GM Services">05 General Manager (GM) Services</option>
                      <option value="Government Relations">06 Government-Related Services & MISA</option>
                      <option value="HR & Recruitment">07 Human Resources and Recruitment</option>
                      <option value="Immigration Services">08 Immigration & Visa Services</option>
                      <option value="Insurance Assistance">09 Insurance Assistance</option>
                      <option value="Specialised Support">10–17 Specialised Support Services</option>
                      <option value="BIC Business Center">BIC Business Center Workspace</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Message / Requirements *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share your company requirements or support needs in KSA..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-lg shadow-blue-600/30 flex items-center justify-center space-x-2 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>

                  <div className="pt-2 flex items-center justify-center space-x-2 text-[11px] text-slate-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                    <span>Frontend client interaction only • Direct email: info@bic.net.sa</span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
