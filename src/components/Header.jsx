import React, { useState } from 'react';
import { MapPin, ShoppingBag, Search, Menu, X, ChevronDown } from 'lucide-react';
import { WovenThreadIcon } from './Logos';
import { CORRIDOR_TOWNS } from '../data/mockData';

export default function Header({
  cartCount,
  onOpenCart,
  selectedLocality,
  onSelectLocality,
  searchQuery,
  onSearchChange,
  currentAccentHex = '#7B1E2B'
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLocalityDropdownOpen, setIsLocalityDropdownOpen] = useState(false);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F8F6F2]/95 backdrop-blur-md border-b border-[#E6DFD8] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between gap-4">
          
          {/* Left: Brand Identity */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 cursor-pointer group select-none flex-shrink-0"
          >
            <div 
              className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 duration-200 shadow-xs border border-[#E6DFD8] bg-[#FFFFFF]"
            >
              <WovenThreadIcon className="w-6 h-6" color={currentAccentHex} />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#241D1D]">
                Local<span style={{ color: currentAccentHex }}>Loom</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest font-semibold text-[#625B57] -mt-0.5">
                Malwa Corridor • Doorstep Trial
              </span>
            </div>
          </div>

          {/* Center-Left: Locality Selector Dropdown */}
          <div className="relative hidden lg:block">
            <button
              onClick={() => setIsLocalityDropdownOpen(!isLocalityDropdownOpen)}
              className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#FFFFFF] border border-[#E6DFD8] text-xs font-medium text-[#241D1D] hover:border-[#7B1E2B]/40 transition-colors shadow-2xs cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-[#7B1E2B]" />
              <span className="font-semibold">{selectedLocality || "All Corridor Hubs"}</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#625B57]" />
            </button>

            {isLocalityDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 rounded-2xl bg-[#FFFFFF] border border-[#E6DFD8] shadow-lg p-2 z-50">
                <div className="px-3 py-1.5 text-[11px] font-bold text-[#625B57] uppercase tracking-wider">
                  Service Area
                </div>
                <button
                  onClick={() => {
                    onSelectLocality("");
                    setIsLocalityDropdownOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                    !selectedLocality ? 'bg-[#F0EBE5] text-[#7B1E2B] font-bold' : 'text-[#241D1D] hover:bg-[#F8F6F2]'
                  }`}
                >
                  All Corridor Hubs (8 Towns)
                </button>
                {CORRIDOR_TOWNS.map((town) => (
                  <button
                    key={town}
                    onClick={() => {
                      onSelectLocality(town);
                      setIsLocalityDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                      selectedLocality === town ? 'bg-[#F0EBE5] text-[#7B1E2B] font-bold' : 'text-[#241D1D] hover:bg-[#F8F6F2]'
                    }`}
                  >
                    {town}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Center: Search Bar (Desktop) */}
          <div className="hidden md:flex items-center flex-1 max-w-xs xl:max-w-md mx-2">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-[#625B57] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search sarees, kurtas, suits or shops..."
                className="w-full text-xs pl-9 pr-4 py-2.5 rounded-full bg-[#FFFFFF] border border-[#E6DFD8] text-[#241D1D] placeholder-[#625B57]/60 focus:outline-none focus:border-[#7B1E2B] focus:ring-1 focus:ring-[#7B1E2B] transition-all shadow-2xs"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#625B57] hover:text-[#241D1D]"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden xl:flex items-center gap-6 text-xs font-semibold text-[#625B57]">
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="hover:text-[#7B1E2B] transition-colors cursor-pointer"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('products-section')} 
              className="hover:text-[#7B1E2B] transition-colors cursor-pointer"
            >
              Collections
            </button>
            <button 
              onClick={() => scrollToSection('verified-shops')} 
              className="hover:text-[#7B1E2B] transition-colors cursor-pointer"
            >
              Dukaanein
            </button>
            <button 
              onClick={() => scrollToSection('store-map-section')} 
              className="hover:text-[#7B1E2B] transition-colors cursor-pointer"
            >
              Service Map
            </button>
            <button 
              onClick={() => scrollToSection('faqs-section')} 
              className="hover:text-[#7B1E2B] transition-colors cursor-pointer"
            >
              FAQs
            </button>
          </nav>

          {/* Right: Trial Bag CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Trial Bag Action Button */}
            <button
              onClick={onOpenCart}
              aria-label="View doorstep trial bag"
              className="relative flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full font-medium text-xs sm:text-sm transition-all duration-200 cursor-pointer text-white shadow-sm hover:opacity-95 active:scale-95 bg-[#7B1E2B]"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="font-semibold tracking-wide">Trial Bag</span>
              <span className="inline-flex items-center justify-center min-w-5 h-5 px-1.5 text-xs font-bold rounded-full bg-[#FFFFFF] text-[#7B1E2B]">
                {cartCount}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden w-10 h-10 rounded-full flex items-center justify-center bg-[#FFFFFF] border border-[#E6DFD8] text-[#241D1D] hover:bg-[#F0EBE5] transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-3">
          <div className="relative w-full">
            <Search className="w-4 h-4 text-[#625B57] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search sarees, kurtas, suits..."
              className="w-full text-xs pl-9 pr-4 py-2.5 rounded-full bg-[#FFFFFF] border border-[#E6DFD8] text-[#241D1D] placeholder-[#625B57]/60 focus:outline-none focus:border-[#7B1E2B]"
            />
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="xl:hidden border-t border-[#E6DFD8] bg-[#F8F6F2] px-4 py-4 space-y-3 shadow-md">
          {/* Locality Selector in Mobile Drawer */}
          <div className="pb-3 border-b border-[#E6DFD8]">
            <div className="text-xs font-bold text-[#625B57] mb-2 uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#7B1E2B]" />
              <span>Select Service Area</span>
            </div>
            <select
              value={selectedLocality}
              onChange={(e) => onSelectLocality(e.target.value)}
              className="w-full text-xs px-3 py-2 rounded-xl bg-[#FFFFFF] border border-[#E6DFD8] text-[#241D1D]"
            >
              <option value="">All Corridor Hubs (8 Towns)</option>
              {CORRIDOR_TOWNS.map((town) => (
                <option key={town} value={town}>{town}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col space-y-2 text-sm font-semibold text-[#241D1D]">
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="text-left py-2 px-3 rounded-lg hover:bg-[#F0EBE5]"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('products-section')} 
              className="text-left py-2 px-3 rounded-lg hover:bg-[#F0EBE5]"
            >
              Explore Local Collections
            </button>
            <button 
              onClick={() => scrollToSection('verified-shops')} 
              className="text-left py-2 px-3 rounded-lg hover:bg-[#F0EBE5]"
            >
              Verified Local Shops
            </button>
            <button 
              onClick={() => scrollToSection('store-map-section')} 
              className="text-left py-2 px-3 rounded-lg hover:bg-[#F0EBE5]"
            >
              Service Coverage Map
            </button>
            <button 
              onClick={() => scrollToSection('faqs-section')} 
              className="text-left py-2 px-3 rounded-lg hover:bg-[#F0EBE5]"
            >
              Frequently Asked Questions
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
