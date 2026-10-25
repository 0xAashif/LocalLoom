import React from 'react';
import { IndianRupee, Shirt, ShieldCheck, Clock } from 'lucide-react';

export default function TrustStrip({ currentAccentHex = '#7B1E2B' }) {
  const trustItems = [
    {
      icon: IndianRupee,
      title: "Sirf ₹49 Home Trial Fee",
      desc: "Indore–Bhopal corridor mein direct trial rider aapke ghar par deliver karega.",
      tag: "Fixed Convenience Fee"
    },
    {
      icon: Shirt,
      title: "5 Kapde Ghar Mangwayein",
      desc: "Pehle Pehno, Phir Pasand Aaye Toh Lo — jo pasand na aaye, rider usi waqt wapas le jayega.",
      tag: "Zero Pressure Trial"
    },
    {
      icon: ShieldCheck,
      title: "Verified Local Dukaan",
      desc: "Bazaar Rate Guarantee • Ramesh Saree, Royal Menswear aur corridor ke pakke bill.",
      tag: "100% Asli Kapda"
    },
    {
      icon: Clock,
      title: "90-Min Trial Window",
      desc: "Aaram se mirror mein check karein, family ko dikhayein bina kisi jaldbazi ke.",
      tag: "No Rush Guarantee"
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {trustItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-[#FFFFFF] border border-[#E6DFD8] shadow-xs transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div
                className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center bg-[#F8F6F2] border border-[#E6DFD8] text-[#7B1E2B]"
              >
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-serif font-bold text-base text-[#241D1D] mb-0.5">
                  {item.title}
                </h3>
                <p className="text-xs text-[#625B57] leading-relaxed">
                  {item.desc}
                </p>
                <span className="mt-2 text-[10px] font-bold uppercase tracking-wider text-[#7B1E2B]">
                  {item.tag}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
