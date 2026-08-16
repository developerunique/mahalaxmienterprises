import React from 'react';
import { SERVICES } from '../data/content';
import { ServiceItem } from '../types';
import { DynamicIcon } from './DynamicIcon';
import { ArrowRight, CheckCircle2, Layers } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onSelectServiceForContact: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onSelectServiceForContact,
}) => {
  return (
    <section id="services" className="py-16 sm:py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-widest mb-3">
            <Layers className="w-3.5 h-3.5 text-blue-700" />
            <span>Our Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
            Specialized Enterprise & Industrial Solutions
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed">
            Structured operational workflows and management frameworks engineered for maximum output, zero downtime, and seamless industrial execution.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Tag & Icon Row */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 flex items-center justify-center group-hover:bg-blue-700 group-hover:text-white transition-colors duration-200">
                    <DynamicIcon name={service.iconName} className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200/80">
                    {service.tag}
                  </span>
                </div>

                {/* Title & Short Description */}
                <h3 className="text-lg font-bold text-blue-950 mb-2 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Highlights preview */}
                <div className="space-y-2 pt-2 border-t border-slate-100 mb-6">
                  {service.highlights.slice(0, 3).map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  type="button"
                  id={`view-details-${service.id}`}
                  onClick={() => onSelectService(service)}
                  className="text-xs font-bold uppercase tracking-wider text-blue-700 hover:text-blue-900 flex items-center gap-1.5 py-1.5 transition-colors cursor-pointer"
                >
                  <span>View Scope</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <button
                  type="button"
                  id={`inquire-btn-${service.id}`}
                  onClick={() => onSelectServiceForContact(service.title)}
                  className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 transition-colors cursor-pointer"
                >
                  Inquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
