import React from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Building2,
  CheckCircle2,
  MapPin,
  Mail,
  Zap,
  TrendingUp,
  FileCheck2,
  Clock
} from 'lucide-react';
import { STATS, COMPANY_INFO } from '../data/content';

interface HeroProps {
  onExploreServices: () => void;
  onRequestConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, onRequestConsultation }) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white overflow-hidden">
      {/* Subtle geometric pattern / architectural grid background */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      {/* Ambient glow in corner */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-600/50 text-blue-300 text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>Pune Industrial Region • Professional Enterprise Solutions</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[50px] font-extrabold tracking-tight text-white leading-[1.18]">
              Empowering Enterprises with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-200">
                Operational Excellence
              </span>{' '}
              & Scalable Industrial Solutions
            </h1>

            {/* Sub-headline */}
            <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
              Mahalaxmi Enterprises delivers structured operational management, industrial facility support, and end-to-end process execution across Pune and Maharashtra with precision, safety, and strict regulatory adherence.
            </p>

            {/* CTA Buttons */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                id="hero-primary-cta"
                type="button"
                onClick={onRequestConsultation}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-blue-700/40 hover:shadow-blue-600/50 transition-all duration-200 active:scale-98 cursor-pointer"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-secondary-cta"
                type="button"
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 text-slate-200 font-bold text-xs sm:text-sm uppercase tracking-wider hover:text-white transition-all duration-200 cursor-pointer"
              >
                <span>Explore Solutions</span>
              </button>
            </div>

            {/* Quick Micro-Trust Signals */}
            <div className="pt-4 border-t border-slate-800/80 w-full flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Stoppage Commitment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Standardized SOPs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Dedicated Key Account Leads</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Corporate Profile Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-gradient-to-b from-slate-800/90 to-slate-900/95 rounded-2xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl backdrop-blur-sm">
              <div className="flex items-center justify-between pb-5 border-b border-slate-700/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-700 flex items-center justify-center text-white">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Operational Hub Profile</h3>
                    <p className="text-xs text-slate-400">Dehugaon, Pune, Maharashtra</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Active Operations
                </span>
              </div>

              {/* Core Features list in card */}
              <div className="py-5 space-y-4">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
                  <FileCheck2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Standardized Operations</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Structured process workflows, workplace safety protocols, and quality benchmarks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
                  <Zap className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Rapid Mobilization</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Swift deployment capabilities across PCMC, Chakan, Talegaon, and Pune corridors.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
                  <TrendingUp className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Continuous KPI Auditing</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Transparent daily logs, milestone sign-offs, and service precision scorecards.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact snippet */}
              <div className="pt-4 border-t border-slate-700/80 flex flex-col gap-2">
                <a
                  id="hero-card-email-link"
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center justify-between text-xs text-slate-300 hover:text-blue-400 p-2.5 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <span>{COMPANY_INFO.email}</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-16 pt-10 border-t border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              id={`stat-card-${idx}`}
              className="bg-slate-800/50 border border-slate-700/60 rounded-xl p-5 text-center hover:border-blue-500/50 transition-colors duration-200"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-blue-200">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
