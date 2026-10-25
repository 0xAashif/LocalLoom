import React from 'react';
import { Store, ShoppingBag, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/mockData';

export default function HowItWorks({ onExploreClick, currentAccentHex = '#7B1E2B' }) {
  const stepIcons = [Store, ShoppingBag, Clock];

  return (
    <section id="how-it-works" className="w-full bg-[#F0EBE5] py-16 sm:py-20 border-y border-[#E6DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E6DFD8] text-xs font-semibold text-[#7B1E2B] mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Doorstep Trial Experience</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#241D1D]">
              Kaise Kaam Karta Hai LocalLoom?
            </h2>
            <p className="text-sm sm:text-base text-[#625B57] mt-2">
              Dukaan par bheed aur travel ka jhanjhat khatam. Corridor ke asli kapde aapke drawing room tak sirf 3 aasan steps mein.
            </p>
          </div>

          <button
            onClick={onExploreClick}
            className="self-start md:self-auto inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#7B1E2B] hover:text-[#651823] transition-colors cursor-pointer group"
          >
            <span>Browse Available Collections</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {HOW_IT_WORKS_STEPS.map((step, index) => {
            const Icon = stepIcons[index] || Store;

            return (
              <div
                key={step.number}
                className="relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-[#FFFFFF] border border-[#E6DFD8] shadow-xs hover:shadow-md transition-all duration-300 group"
              >
                <div>
                  {/* Top Header Row with Step Number and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-extrabold text-[#7B1E2B]/20 group-hover:text-[#7B1E2B]/35 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#F8F6F2] border border-[#E6DFD8] text-[#7B1E2B] group-hover:bg-[#7B1E2B] group-hover:text-white transition-colors duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Badging */}
                  <div className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-[#F0EBE5] text-[#7B1E2B] border border-[#E6DFD8] mb-3">
                    {step.badge}
                  </div>

                  {/* Title & Hindi Heading */}
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#241D1D] mb-1">
                    {step.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#7B1E2B] mb-3">
                    {step.headingHindi}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#625B57] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E6DFD8] flex items-center justify-between text-[11px] font-medium text-[#625B57]">
                  <span>Step {step.number} of 03</span>
                  <span className="text-[#15803D] font-semibold">100% Guaranteed</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
