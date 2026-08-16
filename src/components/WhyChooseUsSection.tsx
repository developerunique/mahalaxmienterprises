import React from 'react';
import { WHY_CHOOSE_US } from '../data/content';
import { DynamicIcon } from './DynamicIcon';
import { ShieldCheck, CheckCircle2, Award, Zap, Clock, Users2, ArrowRight } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Facility & Workflow Audit',
      description: 'Comprehensive evaluation of your plant floor, warehouse velocity, and operational SLA requirements.',
    },
    {
      step: '02',
      title: 'Custom SOP Formulation',
      description: 'Formulation of tailored standard operating procedures and statutory compliance blueprints.',
    },
    {
      step: '03',
      title: 'Structured Deployment',
      description: 'Rapid activation of structured operational systems under direct on-site management supervision.',
    },
    {
      step: '04',
      title: 'Real-Time KPI Auditing',
      description: 'Continuous performance tracking, shift transition audits, and monthly statutory reconciliation.',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5 text-blue-700" />
            <span>Value & Reliability</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
            Why Enterprise Leaders Partner with Mahalaxmi Enterprises
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Our systematic approach combines robust regulatory compliance, local operational agility in the Pune industrial belt, and unwavering quality standards.
          </p>
        </div>

        {/* 6 Grid Differentiator Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              id={`why-card-${item.id}`}
              className="relative bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 flex items-center justify-center group-hover:bg-blue-700 group-hover:text-white transition-colors duration-200">
                    <DynamicIcon name={item.iconName} className="w-6 h-6" />
                  </div>
                  {item.stat && (
                    <div className="text-right">
                      <div className="text-xl font-extrabold text-blue-700">{item.stat}</div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{item.statLabel}</div>
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-bold text-blue-950 mb-2 group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-700" />
                <span>Verified Quality Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Operational Methodology / 4-Step Process */}
        <div className="bg-slate-900 rounded-2xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl border border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
              Our Structured Methodology
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              From Consultation to High-Precision Execution
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-2">
              A transparent, 4-stage operational roadmap designed for rapid onboarding and zero operational disruption.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, idx) => (
              <div
                key={idx}
                id={`methodology-step-${idx}`}
                className="bg-slate-800/90 rounded-xl p-6 border border-slate-700/80 hover:border-blue-500/50 transition-colors flex flex-col justify-between relative"
              >
                <div>
                  <div className="text-3xl font-black text-blue-400/60 mb-3 tracking-wider">
                    {st.step}
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{st.title}</h4>
                  <p className="text-slate-300 text-xs leading-relaxed">{st.description}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center text-[11px] text-blue-300 font-bold uppercase tracking-wider">
                  <span>Phase {idx + 1} Protocol</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
