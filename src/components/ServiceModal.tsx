import React from 'react';
import { X, CheckCircle2, Award, FileText, ArrowRight, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../types';
import { DynamicIcon } from './DynamicIcon';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectServiceForContact: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onSelectServiceForContact,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 z-10 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-6 sm:p-8 relative border-b border-slate-800">
          <button
            id="close-service-modal-btn"
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-blue-900/60 text-blue-300 border border-blue-600/50">
              {service.tag}
            </span>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-700 text-white flex items-center justify-center shrink-0 shadow-sm">
              <DynamicIcon name={service.iconName} className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                {service.title}
              </h3>
              <p className="text-slate-300 text-xs mt-1">
                Mahalaxmi Enterprises Operational Framework
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto space-y-6">
          {/* Full description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-2">
              Operational Scope Overview
            </h4>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Core Highlights */}
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-700" />
              <span>Core Operational Highlights</span>
            </h4>
            <ul className="grid sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
              {service.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-700 mt-2 shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Benefits */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-600" />
              <span>Key Business & Output Advantages</span>
            </h4>
            <div className="space-y-2">
              {service.keyBenefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-2.5 rounded-lg bg-emerald-50/60 border border-emerald-200/60 text-xs sm:text-sm text-emerald-950 font-semibold"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-700" />
              <span>Standard Deliverables & Documentation</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.deliverables.map((item, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 font-semibold"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-500 text-center sm:text-left">
            Custom operational plans available for single or multi-shift deployments.
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-initial px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              id="modal-request-consultation-btn"
              type="button"
              onClick={() => {
                onSelectServiceForContact(service.title);
                onClose();
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-lg bg-blue-700 hover:bg-blue-800 text-white shadow-sm transition-colors cursor-pointer"
            >
              <span>Inquire Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
