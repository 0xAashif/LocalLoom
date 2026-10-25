import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/mockData';

export default function FaqSection({ currentAccentHex = '#7B1E2B' }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const openHelpline = () => {
    const text = encodeURIComponent("Namaste LocalLoom! Mujhe doorstep trial aur service ke baare mein sawaal poochna hai.");
    window.open(`https://wa.me/919303076644?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="faqs-section" className="w-full bg-[#F0EBE5] py-16 sm:py-20 border-t border-[#E6DFD8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E6DFD8] text-xs font-semibold text-[#7B1E2B] mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Sawaal & Jawaab</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#241D1D]">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#625B57] mt-2">
            Doorstep trial, delivery time, return policy aur bazaar ke rates ke baare mein sabhi zaroori baatein.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#FFFFFF] border border-[#E6DFD8] overflow-hidden transition-all duration-200 shadow-2xs hover:border-[#7B1E2B]/40"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-sm sm:text-base text-[#241D1D] pr-4">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-[#F8F6F2] border border-[#E6DFD8] text-[#7B1E2B] transition-transform duration-200 flex-shrink-0 ${
                    isOpen ? 'rotate-180 bg-[#7B1E2B] text-white border-transparent' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#625B57] leading-relaxed border-t border-[#E6DFD8]/60 bg-[#F8F6F2]/40">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Callout */}
        <div className="mt-10 p-6 rounded-2xl bg-[#FFFFFF] border border-[#E6DFD8] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif font-bold text-base text-[#241D1D]">
              Koi aur sawaal hai?
            </h4>
            <p className="text-xs text-[#625B57] mt-0.5">
              Humari Malwa support team subah 9 baje se raat 9 baje tak WhatsApp par uplabdh hai.
            </p>
          </div>

          <button
            onClick={openHelpline}
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#15803D] hover:bg-[#166534] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            <span>WhatsApp Helpline</span>
          </button>
        </div>

      </div>
    </section>
  );
}
