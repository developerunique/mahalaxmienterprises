import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Clock, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['hero', 'about', 'services', 'why-us', 'industries', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Our Services', href: '#services', id: 'services' },
    { name: 'Why Choose Us', href: '#why-us', id: 'why-us' },
    { name: 'Industries', href: '#industries', id: 'industries' },
    { name: 'Contact Us', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top utility contact ribbon */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 hidden sm:block">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <a
              id="top-bar-email"
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <div className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Dehu, Pune, Maharashtra 412109</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              <span>{COMPANY_INFO.workingHours}</span>
            </div>
            <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded bg-blue-900/60 text-blue-300 border border-blue-700/50 font-medium">
              <ShieldCheck className="w-3 h-3 text-blue-400" />
              100% Statutory Compliant
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200'
            : 'bg-white/90 backdrop-blur-sm py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            id="brand-logo"
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-lg bg-blue-700 flex items-center justify-center text-white font-extrabold text-lg shadow-sm group-hover:bg-blue-800 transition-colors">
              <span>M</span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-blue-950 text-base sm:text-lg leading-tight tracking-tight uppercase group-hover:text-blue-700 transition-colors">
                Mahalaxmi Enterprises
              </span>
              <span className="text-[10px] font-bold text-blue-700 tracking-wider uppercase">
                Enterprise Operations & Industrial Solutions
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'text-blue-700 bg-blue-50 font-extrabold border-b-2 border-blue-700 rounded-b-none'
                      : 'text-slate-600 hover:text-blue-700 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              id="nav-cta-btn"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow transition-all duration-200 active:scale-95"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    id={`mobile-nav-${link.id}`}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-600 font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-3">
              <a
                id="mobile-cta-btn"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="w-full text-center px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-sm transition-colors"
              >
                Request Enterprise Consultation
              </a>
              <div className="text-xs text-slate-500 flex flex-col gap-1 px-1">
                <span className="font-medium text-slate-700">Email: {COMPANY_INFO.email}</span>
                <span>Location: Dehu, Pune, Maharashtra 412109</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
