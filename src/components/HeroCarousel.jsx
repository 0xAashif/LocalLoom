import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, HelpCircle } from 'lucide-react';
import { HERO_SLIDES } from '../data/mockData';

export default function HeroCarousel({
  activeSlide,
  setActiveSlide,
  onExploreClick,
  onHowItWorksClick,
  currentAccentHex = '#7B1E2B'
}) {
  const [isPaused, setIsPaused] = useState(false);
  const totalSlides = HERO_SLIDES.length;
  const timerRef = useRef(null);

  // Auto-advance every 5 seconds unless hovered
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, totalSlides, setActiveSlide]);

  const goToPrev = () => {
    setActiveSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  const openPartnerWhatsApp = () => {
    const text = encodeURIComponent(
      "Namaste LocalLoom! Humari dukaan bhi LocalLoom par jodna chahte hain. Please share onboarding details."
    );
    window.open(`https://wa.me/919303076644?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const currentSlide = HERO_SLIDES[activeSlide] || HERO_SLIDES[0];

  return (
    <section 
      aria-label="LocalLoom Hero Showcase"
      className="relative w-full max-w-none px-0 mx-0 overflow-hidden bg-[#241D1D]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Viewport container with balanced height */}
      <div className="relative w-full h-[52vh] sm:h-[58vh] lg:h-[62vh] min-h-[440px] max-h-[640px] overflow-hidden">
        
        {/* Slides Track */}
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === activeSlide;

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                referrerPolicy="no-referrer"
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                onError={(e) => {
                  if (slide.fallbackImage && e.currentTarget.src !== slide.fallbackImage) {
                    e.currentTarget.src = slide.fallbackImage;
                  } else if (e.currentTarget.src !== '/products/product-1.jpg') {
                    e.currentTarget.src = '/products/product-1.jpg';
                  }
                }}
                className="w-full h-full object-cover object-center"
              />

              {/* Restrained image overlay to preserve fabric texture while ensuring text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1719]/90 via-[#1C1719]/45 to-[#1C1719]/20" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1C1719]/80 via-[#1C1719]/30 to-transparent hidden md:block" />
            </div>
          );
        })}

        {/* Content Overlay */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14 lg:pb-16 text-left">
            <div className="max-w-2xl sm:max-w-3xl">
              
              {/* Campaign category tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF]/95 backdrop-blur-xs text-xs font-semibold tracking-wide text-[#241D1D] mb-3.5 shadow-xs border border-[#E6DFD8]">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: currentAccentHex }} />
                <span>{currentSlide.tag}</span>
                <span className="text-[#625B57] text-[11px] hidden sm:inline">• {currentSlide.shopFeature}</span>
              </div>

              {/* Editorial Heading */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFFFFF] tracking-tight leading-[1.18] mb-3">
                {currentSlide.title}
              </h1>

              {/* Value proposition subtext */}
              <p className="text-sm sm:text-base lg:text-lg text-[#F0EBE5] font-normal leading-relaxed mb-6 max-w-2xl">
                {currentSlide.subtitle}
              </p>

              {/* Dual clear actions */}
              <div className="flex flex-wrap items-center gap-3.5">
                <button
                  onClick={onExploreClick}
                  className="px-6 py-3 rounded-full text-sm font-semibold text-white shadow-md transition-all duration-200 cursor-pointer active:scale-95 hover:opacity-95 flex items-center gap-2 bg-[#7B1E2B]"
                >
                  <span>Explore Local Collections</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onHowItWorksClick}
                  className="px-5 py-3 rounded-full text-sm font-semibold bg-[#FFFFFF]/90 hover:bg-[#FFFFFF] text-[#241D1D] border border-[#E6DFD8] shadow-xs transition-all duration-200 cursor-pointer active:scale-95 flex items-center gap-2"
                >
                  <HelpCircle className="w-4 h-4 text-[#7B1E2B]" />
                  <span>How Doorstep Trial Works</span>
                </button>

                <button
                  onClick={openPartnerWhatsApp}
                  className="hidden sm:inline-flex items-center gap-1.5 px-4 py-3 text-xs font-medium text-[#F0EBE5] hover:text-white underline underline-offset-4 cursor-pointer"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="#15803D" className="mr-1"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  <span>Dukaan Jodein (Merchant Onboarding)</span>
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Previous / Next Arrow Controls */}
        <button
          onClick={goToPrev}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center bg-[#1C1719]/60 hover:bg-[#1C1719]/90 text-white border border-white/20 backdrop-blur-xs transition-all duration-200 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={goToNext}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center bg-[#1C1719]/60 hover:bg-[#1C1719]/90 text-white border border-white/20 backdrop-blur-xs transition-all duration-200 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Carousel Dots */}
        <div className="absolute bottom-4 right-4 sm:right-8 z-20 flex items-center gap-1.5 p-1.5 rounded-full bg-[#1C1719]/60 backdrop-blur-sm border border-white/20">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === activeSlide ? 'w-6 bg-[#FFFFFF]' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
