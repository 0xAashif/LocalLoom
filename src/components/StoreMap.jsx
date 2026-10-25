import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, Navigation, ExternalLink, Store, Phone, Star, ShieldCheck, ChevronRight } from 'lucide-react';
import { STORES } from '../data/mockData';

// Map center for Indore-Bhopal Corridor (around Ashta/Kalapipal)
const CORRIDOR_CENTER = [23.16, 76.65];
const DEFAULT_ZOOM = 8;

function MapRecenter({ center, zoom }) {
  const map = useMap();
  React.useEffect(() => {
    if (center) {
      map.flyTo(center, zoom || 11, { duration: 1.2 });
    }
  }, [center, zoom, map]);
  return null;
}

export default function StoreMap({ currentAccentHex = '#7B1E2B' }) {
  const [selectedStore, setSelectedStore] = useState(null);

  // Generate custom HTML divIcon for Leaflet markers
  const createCustomIcon = (isSelected) => {
    return L.divIcon({
      className: 'custom-leaflet-marker',
      html: `
        <div style="position: relative; width: 34px; height: 34px; display: flex; align-items: center; justify-content: center; cursor: pointer;">
          <span style="position: absolute; width: ${isSelected ? '36px' : '28px'}; height: ${isSelected ? '36px' : '28px'}; background-color: ${currentAccentHex}; opacity: 0.25; border-radius: 9999px; transform: scale(1.1); animation: ${isSelected ? 'none' : 'pulse 2.5s infinite'};"></span>
          <div style="width: 26px; height: 26px; background-color: ${currentAccentHex}; border: 2.5px solid #FFFFFF; border-radius: 9999px; box-shadow: 0 4px 10px rgba(0,0,0,0.18); display: flex; align-items: center; justify-content: center;">
            <div style="width: 8px; height: 8px; background-color: #FFFFFF; border-radius: 9999px;"></div>
          </div>
        </div>
      `,
      iconSize: [34, 34],
      iconAnchor: [17, 17],
      popupAnchor: [0, -17],
    });
  };

  const handleSelectStore = (store) => {
    setSelectedStore(store);
  };

  const openWhatsAppShop = (store) => {
    const text = encodeURIComponent(`Namaste ${store.name}! I saw your shop on LocalLoom and want to check your latest collections.`);
    window.open(`https://wa.me/919303076644?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="verified-shops" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 content-auto">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E6DFD8] text-xs font-semibold text-[#7B1E2B] mb-2.5">
            <Store className="w-3.5 h-3.5" />
            <span>8 Verified Corridor Hubs</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#241D1D]">
            Verified Local Shops & Service Hubs
          </h2>
          <p className="text-xs sm:text-sm text-[#625B57] mt-1.5 max-w-2xl">
            Corridor ke mashhoor bazaaron ki dukaanein. Map par pin dekhein ya directory se direct dukandaar ka collection jaanch karein.
          </p>
        </div>

        {/* Town Quick Jump Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
          {STORES.map((s) => {
            const isSelected = selectedStore?.town === s.town;
            return (
              <button
                key={s.town}
                onClick={() => handleSelectStore(s)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer shadow-2xs ${
                  isSelected
                    ? 'bg-[#7B1E2B] text-white font-semibold shadow-xs'
                    : 'bg-[#FFFFFF] text-[#241D1D] border border-[#E6DFD8] hover:border-[#7B1E2B]/50 hover:bg-[#F0EBE5]'
                }`}
              >
                {s.town}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Interactive Map (lg:col-span-7) */}
        <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#E6DFD8] shadow-xs bg-[#FFFFFF]">
          <div className="p-4 border-b border-[#E6DFD8] flex items-center justify-between bg-[#F8F6F2]">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#241D1D]">
              <MapPin className="w-4 h-4 text-[#7B1E2B]" />
              <span>Indore–Bhopal Live Corridor Map</span>
            </div>
            <span className="text-[11px] font-medium text-[#15803D] bg-white px-2.5 py-0.5 rounded-full border border-[#E6DFD8]">
              Active Pilot
            </span>
          </div>

          <div className="relative w-full h-[380px] sm:h-[450px] z-0">
            <MapContainer
              center={CORRIDOR_CENTER}
              zoom={DEFAULT_ZOOM}
              scrollWheelZoom={false}
              className="w-full h-full"
              style={{ background: '#F8F6F2' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {selectedStore && (
                <MapRecenter center={[selectedStore.lat, selectedStore.lng]} zoom={12} />
              )}

              {STORES.map((store) => {
                const isSelected = selectedStore?.town === store.town;
                const gmapsUrl = `https://www.google.com/maps/search/?api=1&query=${store.lat},${store.lng}`;

                return (
                  <Marker
                    key={store.town}
                    position={[store.lat, store.lng]}
                    icon={createCustomIcon(isSelected)}
                    eventHandlers={{
                      click: () => handleSelectStore(store)
                    }}
                  >
                    <Popup className="premium-popup">
                      <div className="p-1 min-w-[210px] text-left">
                        <div className="flex items-center gap-1.5 mb-1">
                          <span 
                            className="px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide text-white bg-[#7B1E2B]"
                          >
                            {store.town}
                          </span>
                          <span className="text-[10px] text-[#625B57]">
                            Verified Hub
                          </span>
                        </div>

                        <h4 className="font-serif font-bold text-sm text-[#241D1D] leading-snug">
                          {store.name}
                        </h4>

                        <p className="text-xs text-[#625B57] mt-1 leading-relaxed">
                          {store.area}
                        </p>

                        <div className="text-[11px] text-[#7B1E2B] font-medium mt-1">
                          {store.speciality}
                        </div>

                        <div className="pt-2 mt-2 border-t border-[#E6DFD8] flex items-center justify-between">
                          <a
                            href={gmapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-semibold text-[#7B1E2B] hover:underline"
                          >
                            <span>Google Maps Directions</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </Popup>
                  </Marker>
                );
              })}
            </MapContainer>
          </div>

          <div className="p-3.5 bg-[#F8F6F2] border-t border-[#E6DFD8] flex items-center justify-between text-xs text-[#625B57]">
            <div className="flex items-center gap-1.5">
              <Navigation className="w-3.5 h-3.5 text-[#15803D]" />
              <span>Doorstep riders stationed in all 8 hubs</span>
            </div>
            <span className="text-[11px] font-medium text-[#7B1E2B]">*Ujjain excluded from route</span>
          </div>
        </div>

        {/* Right Column: Verified Shop Cards Directory (lg:col-span-5) */}
        <div className="lg:col-span-5 space-y-3.5">
          <div className="text-xs font-bold uppercase tracking-wider text-[#625B57] px-1">
            Partner Dukaanein (Click to View on Map)
          </div>

          <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
            {STORES.map((store) => {
              const isSelected = selectedStore?.town === store.town;

              return (
                <div
                  key={store.id}
                  onClick={() => handleSelectStore(store)}
                  className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#FFFFFF] border-[#7B1E2B] shadow-sm ring-1 ring-[#7B1E2B]'
                      : 'bg-[#FFFFFF] border-[#E6DFD8] hover:border-[#7B1E2B]/50 hover:shadow-2xs'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#F0EBE5] text-[#7B1E2B]">
                          {store.town}
                        </span>
                        <div className="flex items-center gap-1 text-[11px] font-semibold text-amber-600">
                          <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                          <span>{store.rating}</span>
                        </div>
                      </div>

                      <h4 className="font-serif font-bold text-base text-[#241D1D]">
                        {store.name}
                      </h4>

                      <p className="text-xs text-[#625B57] mt-0.5">
                        {store.area}
                      </p>

                      <p className="text-xs text-[#7B1E2B] font-medium mt-1">
                        {store.speciality}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-2 flex-shrink-0">
                      <span className="text-[10px] font-semibold text-[#15803D] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        {store.trialRiderHub}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openWhatsAppShop(store);
                        }}
                        className="text-xs text-[#15803D] hover:underline font-semibold flex items-center gap-1"
                      >
                        <span>WhatsApp</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </section>
  );
}
