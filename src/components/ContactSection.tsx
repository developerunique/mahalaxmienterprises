import React, { useState, useEffect } from 'react';
import {
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck,
  PhoneCall,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/content';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService = '' }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceCategory: preselectedService || 'Industrial & Plant Operations Support',
    message: '',
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, serviceCategory: preselectedService }));
    }
  }, [preselectedService]);

  const handleCopy = (text: string, type: 'email' | 'address') => {
    navigator.clipboard.writeText(text);
    setCopiedField(type);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage('Please fill in your name, official email, and phone number.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable form processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      serviceCategory: 'Industrial & Plant Operations Support',
      message: '',
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900/60 border border-blue-600/50 text-blue-300 text-xs font-bold uppercase tracking-widest mb-3">
            <Mail className="w-3.5 h-3.5 text-blue-400" />
            <span>Connect with Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Initiate Your Enterprise Operations Engagement
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Reach out to our executive operations team in Pune to schedule a site audit, request a structured service proposal, or discuss custom facility solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Official Contact Cards & Location Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Email Card */}
            <div className="bg-slate-800/90 rounded-2xl p-6 sm:p-7 border border-slate-700/80 shadow-xl backdrop-blur-sm">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                      Official Inquiries & Proposals
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-white mt-0.5">
                      Direct Email Contact
                    </h4>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/60 flex items-center justify-between gap-3">
                <span className="text-sm sm:text-base font-semibold text-blue-300 select-all truncate">
                  {COMPANY_INFO.email}
                </span>
                <button
                  id="copy-email-btn"
                  type="button"
                  onClick={() => handleCopy(COMPANY_INFO.email, 'email')}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0 cursor-pointer"
                  title="Copy email address"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <a
                  id="mail-to-button"
                  href={`mailto:${COMPANY_INFO.email}?subject=Enterprise%20Operations%20Inquiry%20-%20Mahalaxmi%20Enterprises`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm shadow-md transition-colors cursor-pointer"
                >
                  <span>Send Direct Email</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Official Registered Address Card */}
            <div className="bg-slate-800/90 rounded-2xl p-6 sm:p-7 border border-slate-700/80 shadow-xl backdrop-blur-sm">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                      Headquarters & Operational Hub
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-white mt-0.5">
                      Registered Address
                    </h4>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/60 flex items-start justify-between gap-3">
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed select-all">
                  {COMPANY_INFO.address}
                </p>
                <button
                  id="copy-address-btn"
                  type="button"
                  onClick={() => handleCopy(COMPANY_INFO.address, 'address')}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0 cursor-pointer"
                  title="Copy full address"
                >
                  {copiedField === 'address' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  <span>{COMPANY_INFO.workingHours}</span>
                </span>
                <span className="text-emerald-400 font-medium">Pune, Maharashtra</span>
              </div>
            </div>

            {/* Quick SLA Assurance */}
            <div className="p-4 rounded-2xl bg-blue-950/60 border border-blue-800/60 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0" />
              <p className="text-xs text-blue-200 leading-snug">
                <strong>Executive Response Guarantee:</strong> Inquiries received via email or form are reviewed with an official response within 2 business hours.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-800/95 rounded-3xl p-7 sm:p-10 border border-slate-700 shadow-2xl backdrop-blur-md">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-5 animate-in fade-in zoom-in-95">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">
                    Thank You! Inquiry Received
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                    Our operations management desk has received your request. An executive representative from Mahalaxmi Enterprises will connect with you shortly at{' '}
                    <span className="text-blue-400 font-semibold">{formData.email}</span>.
                  </p>
                  <div className="pt-4">
                    <button
                      id="reset-form-btn"
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-700/80 pb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Request an Operational Consultation
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      Fill out the form below to receive a customized service scope and commercial proposal.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-semibold text-slate-300 mb-1.5"
                      >
                        Your Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Ramesh Patil"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      />
                    </div>

                    {/* Company / Plant Name */}
                    <div>
                      <label
                        htmlFor="companyName"
                        className="block text-xs font-semibold text-slate-300 mb-1.5"
                      >
                        Company / Plant Name
                      </label>
                      <input
                        id="companyName"
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Pune Engineering Works Ltd."
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Official Email */}
                    <div>
                      <label
                        htmlFor="contactEmail"
                        className="block text-xs font-semibold text-slate-300 mb-1.5"
                      >
                        Corporate Email *
                      </label>
                      <input
                        id="contactEmail"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. ops@yourcompany.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label
                        htmlFor="contactPhone"
                        className="block text-xs font-semibold text-slate-300 mb-1.5"
                      >
                        Contact Phone *
                      </label>
                      <input
                        id="contactPhone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98000 00000"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      />
                    </div>
                  </div>

                  {/* Required Service Solution */}
                  <div>
                    <label
                      htmlFor="serviceCategory"
                      className="block text-xs font-semibold text-slate-300 mb-1.5"
                    >
                      Primary Service Requirement
                    </label>
                    <select
                      id="serviceCategory"
                      value={formData.serviceCategory}
                      onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title} className="bg-slate-900 text-white">
                          {s.title}
                        </option>
                      ))}
                      <option value="Multi-Service Turnkey Package" className="bg-slate-900 text-white">
                        Multi-Service Turnkey Operational Package
                      </option>
                    </select>
                  </div>

                  {/* Operational Notes / Message */}
                  <div>
                    <label
                      htmlFor="contactMessage"
                      className="block text-xs font-semibold text-slate-300 mb-1.5"
                    >
                      Facility Details & Specific Requirements
                    </label>
                    <textarea
                      id="contactMessage"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your plant location, shift structure, or specific operational requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="submit-inquiry-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-blue-700/40 transition-all duration-200 active:scale-98 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Processing Request...</span>
                    ) : (
                      <>
                        <span>Submit Consultation Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="text-center text-[11px] text-slate-400">
                    Your details are strictly confidential and governed under our corporate privacy policy.
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
