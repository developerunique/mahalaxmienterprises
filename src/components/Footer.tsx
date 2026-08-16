import React from 'react';
import { Mail, MapPin, Clock, ShieldCheck, ArrowUp, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Corporate Overview */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-700 flex items-center justify-center text-white font-extrabold text-lg shadow-sm">
                M
              </div>
              <div>
                <span className="font-extrabold text-white text-base sm:text-lg tracking-tight uppercase block">
                  Mahalaxmi Enterprises
                </span>
                <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest block">
                  Enterprise Operations & Industrial Solutions
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Providing premier operational management, plant floor coordination, logistics workflow solutions, and corporate infrastructure support across Pune and Maharashtra.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-xs tracking-widest uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#hero" className="hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-blue-400 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-blue-400 transition-colors">
                  Industries We Serve
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services Portfolio */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-xs tracking-widest uppercase">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-blue-400 transition-colors line-clamp-1">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Information */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs tracking-widest uppercase">
              Contact Desk
            </h4>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-500 block">Corporate Email:</span>
                  <a
                    id="footer-email-link"
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-slate-200 hover:text-blue-400 transition-colors font-medium break-all"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-500 block">Registered Location:</span>
                  <p className="text-slate-300">{COMPANY_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-500 block">Operating Hours:</span>
                  <p className="text-slate-300">{COMPANY_INFO.workingHours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright & Scroll to Top */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved. Registered in Pune, Maharashtra.
          </p>

          <div className="flex items-center gap-4">
            <button
              id="scroll-to-top-btn"
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
