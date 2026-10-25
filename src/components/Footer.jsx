import React from 'react';
import { MapPin, Heart, ShieldCheck } from 'lucide-react';
import { WovenThreadIcon } from './Logos';

export default function Footer({ currentAccentHex }) {
  const openSupportWhatsApp = () => {
    const text = encodeURIComponent("Namaste LocalLoom! I have an inquiry about trial box delivery.");
    window.open(`https://wa.me/919303076644?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="w-full bg-[#1C1719] text-white/90 border-t border-white/10 mt-20 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-14">
          
          {/* Col 1 & 2: Brand & Overview */}
          <div className="md:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div 
                className="w-11 h-11 rounded-xl flex items-center justify-center shadow-md bg-white/15 border border-white/20"
              >
                <WovenThreadIcon className="w-6 h-6" color="#FFFFFF" />
              </div>
              <span className="font-serif text-3xl font-bold tracking-tight text-white">
                LocalLoom
              </span>
            </div>

            <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-lg">
              LocalLoom connects verified local textile shops in the Indore–Bhopal corridor with customers who want to try before they buy. Dukaan ka asli daam, ghar par trial, WhatsApp par order.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-sm font-semibold text-white border border-white/15 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-[#15803D]" />
                <span>Verified Dukaan Guarantee</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-sm font-semibold text-white border border-white/15 shadow-xs">
                <span>₹49 Fixed Trial Fee</span>
              </div>
            </div>
          </div>

          {/* Col 3: Corridor Locations */}
          <div className="space-y-4">
            <h4 className="font-serif text-xl font-bold tracking-wide text-white uppercase">
              Corridor Hubs
            </h4>
            <ul className="space-y-2.5 text-base text-white/90">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: currentAccentHex }} />
                <span>Kalapipal • Shujalpur</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: currentAccentHex }} />
                <span>Shajapur • Ashta</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: currentAccentHex }} />
                <span>Sehore • Dewas</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: currentAccentHex }} />
                <span>Indore • Bhopal</span>
              </li>
            </ul>
          </div>

          {/* Col 4: WhatsApp Contact & Support */}
          <div className="space-y-4">
            <h4 className="font-serif text-xl font-bold tracking-wide text-white uppercase">
              Direct Helpline
            </h4>
            
            <p className="text-base text-white/90 leading-relaxed">
              Koi sawaal ya dukaan onboarding ke liye sidha WhatsApp karein:
            </p>

            <button
              onClick={openSupportWhatsApp}
              className="w-full py-3 px-5 rounded-full bg-[#15803D] hover:bg-[#166534] text-white text-sm font-semibold flex items-center justify-center shadow-md cursor-pointer active:scale-95 transition-all"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="mr-2"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              <span>+91 93030 76644</span>
            </button>

            <div className="text-sm text-white/70 pt-1">
              Timing: 9:00 AM – 9:00 PM (Daily)
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/80">
          <div className="font-serif italic text-base font-medium text-white">
            "Asli Dukaan. Asli Kapda. Ghar Par Trial."
          </div>

          <div className="flex items-center gap-2">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-[#DC2626] fill-[#DC2626]" />
            <span className="font-semibold text-white">for Malwa</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
