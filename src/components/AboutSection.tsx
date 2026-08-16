import React, { useState } from 'react';
import {
  ShieldCheck,
  Target,
  Eye,
  Award,
  CheckCircle2,
  Building,
  MapPin,
  Compass,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'policy'>('mission');

  const pillars = [
    {
      icon: ShieldCheck,
      title: 'High-Standard Operational Governance',
      description: 'Strict adherence to organizational standards, workplace safety frameworks, and systematic operational protocols.',
    },
    {
      icon: Target,
      title: 'SOP-Driven Operational Consistency',
      description: 'Standardized operational procedures that minimize downtime, eradicate workflow bottlenecks, and assure repeatable precision.',
    },
    {
      icon: MapPin,
      title: 'Strategic Industrial Hub Proximity',
      description: 'Based in Dehugaon, Pune, providing prompt operational access to Chakan, Talegaon, Bhosari, PCMC, and Western Maharashtra industrial zones.',
    },
    {
      icon: Award,
      title: 'Commitment to Long-Term Value',
      description: 'We prioritize transparent communication, clear KPI tracking, and continuous process enhancements tailored to client growth goals.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-widest mb-3">
            <Building className="w-3.5 h-3.5 text-blue-700" />
            <span>About Mahalaxmi Enterprises</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
            A Trusted Partner in Enterprise Operations & Industrial Support
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Headquartered in Pune, Maharashtra, Mahalaxmi Enterprises delivers premier operational coordination, industrial plant support, and business process solutions to leading enterprises across manufacturing, supply chain, and commercial sectors.
          </p>
        </div>

        {/* Two-Column Story & Info */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left: About Text & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              Driving Operational Excellence with Precision, Safety & Integrity
            </h3>
            <p className="text-slate-600 leading-relaxed">
              At Mahalaxmi Enterprises, we understand that smooth, uninterrupted operations are the backbone of any successful industrial or corporate facility. Founded on principles of unwavering professionalism and transparency, we provide structured operational services that allow businesses to optimize their resource utilization and scale with confidence.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our comprehensive management framework integrates strict quality control protocols, real-time reporting, and dedicated account supervision to ensure that every task—from shop-floor coordination to warehouse logistics—is executed flawlessly.
            </p>

            {/* Value checklist */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800">100% On-Time Project Delivery</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800">Strict Safety & OSHA Adherence</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800">Transparent Monthly Reporting</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800">Dedicated Operations Lead</span>
              </div>
            </div>
          </div>

          {/* Right: Interactive Mission/Vision/Policy Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              {/* Tab Controls */}
              <div className="flex rounded-xl bg-slate-200/80 p-1 mb-6">
                <button
                  type="button"
                  id="tab-mission"
                  onClick={() => setActiveTab('mission')}
                  className={`flex-1 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg transition-all duration-200 cursor-pointer ${
                    activeTab === 'mission'
                      ? 'bg-blue-700 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Mission
                </button>
                <button
                  type="button"
                  id="tab-vision"
                  onClick={() => setActiveTab('vision')}
                  className={`flex-1 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg transition-all duration-200 cursor-pointer ${
                    activeTab === 'vision'
                      ? 'bg-blue-700 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Vision
                </button>
                <button
                  type="button"
                  id="tab-policy"
                  onClick={() => setActiveTab('policy')}
                  className={`flex-1 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg transition-all duration-200 cursor-pointer ${
                    activeTab === 'policy'
                      ? 'bg-blue-700 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Quality
                </button>
              </div>

              {/* Tab Content Display */}
              <div className="min-h-[200px] flex flex-col justify-between">
                {activeTab === 'mission' && (
                  <div className="space-y-4 animate-in fade-in">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                      <Target className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-blue-950">Empowering Industrial Agility</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      To empower industrial and commercial enterprises across India with structured, dependable, and fully compliant operational support that maximizes productivity and drives sustainable business growth.
                    </p>
                  </div>
                )}

                {activeTab === 'vision' && (
                  <div className="space-y-4 animate-in fade-in">
                    <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                      <Eye className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-blue-950">Leading the Operational Benchmark</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      To be recognized as Maharashtra’s foremost enterprise operations partner, renowned for technological integration, absolute regulatory discipline, and impeccable service execution.
                    </p>
                  </div>
                )}

                {activeTab === 'policy' && (
                  <div className="space-y-4 animate-in fade-in">
                    <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                      <Award className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-blue-950">Zero-Defect Standard</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Our quality assurance framework guarantees strict SOP compliance, frequent internal audits, workplace safety protocols, and proactive response times on all client engagements.
                    </p>
                  </div>
                )}

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                  <span>Registered in Pune, Maharashtra</span>
                  <span className="font-bold text-blue-700 uppercase tracking-wider">Since {COMPANY_INFO.establishedYear}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                id={`pillar-card-${idx}`}
                className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-blue-400 hover:shadow-md transition-all duration-200 flex flex-col group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-700/10 text-blue-700 flex items-center justify-center mb-4 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-200">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-blue-950 text-base mb-2">{pillar.title}</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
