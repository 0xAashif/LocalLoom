import React from 'react';
import { Quote, CheckCircle2, Heart } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export default function Testimonials({ currentAccentHex = '#7B1E2B' }) {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 content-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E6DFD8] text-xs font-semibold text-[#7B1E2B] mb-2.5">
          <Heart className="w-3.5 h-3.5 fill-[#7B1E2B]" />
          <span>Asli Grahak, Asli Tajurba</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#241D1D]">
          Corridor Ke Parivaar Kya Kehte Hain
        </h2>
        <p className="text-xs sm:text-sm text-[#625B57] mt-2">
          Bina bheed, bina travel ki thakaan — sidha corridor ke mashhoor bazaar se aapke drawing room tak.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {TESTIMONIALS.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-between p-7 rounded-3xl bg-[#FFFFFF] border border-[#E6DFD8] shadow-xs hover:shadow-md transition-all duration-300 relative group"
          >
            <div>
              {/* Elegant quote icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-[#7B1E2B]/40 rotate-180" />
              </div>

              {/* Hinglish Quote */}
              <p className="font-serif text-base sm:text-lg text-[#241D1D] leading-relaxed italic mb-6">
                "{item.quote}"
              </p>
            </div>

            {/* Author info */}
            <div className="pt-4 border-t border-[#E6DFD8] flex items-center justify-between">
              <div>
                <h4 className="font-serif font-bold text-sm text-[#241D1D]">
                  {item.author}
                </h4>
                <p className="text-xs text-[#625B57]">
                  {item.town} • <span className="text-[#7B1E2B] font-medium">{item.tag}</span>
                </p>
              </div>

              <div className="flex items-center gap-1 text-[11px] font-semibold text-[#15803D] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Trial</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
