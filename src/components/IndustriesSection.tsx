import React, { useState } from 'react';
import { INDUSTRIES } from '../data/content';
import { DynamicIcon } from './DynamicIcon';
import { Factory, CheckCircle2, Award, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export const IndustriesSection: React.FC = () => {
  const [activeIndustryId, setActiveIndustryId] = useState<string>(INDUSTRIES[0].id);

  const activeIndustry = INDUSTRIES.find((ind) => ind.id === activeIndustryId) || INDUSTRIES[0];

  return (
    <section id="industries" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-widest mb-3">
            <Factory className="w-3.5 h-3.5 text-blue-700" />
            <span>Sector Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
            Industries We Serve with Customized Operational Support
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            From precision automotive shop floors to high-velocity logistics hubs and sterile pharmaceutical environments, we adapt our management frameworks to specialized sector demands.
          </p>
        </div>

        {/* Dynamic Industry Tabs & Showcase */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left: Industry Selector List */}
          <div className="lg:col-span-5 space-y-3">
            {INDUSTRIES.map((industry) => {
              const isActive = industry.id === activeIndustryId;
              return (
                <button
                  key={industry.id}
                  id={`ind-btn-${industry.id}`}
                  type="button"
                  onClick={() => setActiveIndustryId(industry.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                    isActive
                      ? 'bg-white border-blue-600 shadow-md ring-1 ring-blue-600/20'
                      : 'bg-white/80 border-slate-200 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                        isActive
                          ? 'bg-blue-700 text-white'
                          : 'bg-slate-100 text-slate-600 group-hover:text-blue-700 group-hover:bg-blue-50'
                      }`}
                    >
                      <DynamicIcon name={industry.iconName} className="w-5 h-5" />
                    </div>
                    <div>
                      <h4
                        className={`text-base font-bold transition-colors ${
                          isActive ? 'text-blue-900' : 'text-slate-800 group-hover:text-slate-900'
                        }`}
                      >
                        {industry.name}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                        {industry.focusAreas[0]} & more
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? 'text-blue-700 translate-x-1' : 'text-slate-400 opacity-0 group-hover:opacity-100'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Selected Industry Detail Panel */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 p-7 sm:p-9 shadow-sm relative overflow-hidden animate-in fade-in duration-300">
              <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 flex items-center justify-center">
                    <DynamicIcon name={activeIndustry.iconName} className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-700">
                      Sector Focus
                    </span>
                    <h3 className="text-2xl font-extrabold text-blue-950">
                      {activeIndustry.name}
                    </h3>
                  </div>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Standardized
                </span>
              </div>

              {/* Sector description */}
              <p className="text-slate-700 text-base leading-relaxed mb-6">
                {activeIndustry.description}
              </p>

              {/* Key Focus Areas Checklist */}
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-700" />
                  <span>Key Operational Domains</span>
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {activeIndustry.focusAreas.map((area, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-semibold bg-white p-2.5 rounded-lg border border-slate-200/80"
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-700 shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Operational Case Highlight */}
              <div className="p-4 rounded-xl bg-slate-900 text-white flex items-start gap-3 border border-slate-800">
                <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-300">
                    Demonstrated Track Record
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200 mt-0.5 leading-relaxed">
                    {activeIndustry.caseStudyHighlight}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
