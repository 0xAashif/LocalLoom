import React, { useState } from 'react';
import { MapPin, Plus, Check, AlertCircle, Eye, X, ShieldCheck } from 'lucide-react';

export default function ProductCard({
  product,
  isInCart,
  isCartFull,
  onAddToCart,
  onRemoveFromCart,
  currentAccentHex = '#7B1E2B'
}) {
  const [showDetailModal, setShowDetailModal] = useState(false);

  const handleAction = (e) => {
    e?.stopPropagation?.();
    if (isInCart) {
      onRemoveFromCart(product.id);
    } else if (!isCartFull) {
      onAddToCart(product);
    }
  };

  return (
    <>
      <article 
        className="group flex flex-col rounded-3xl bg-[#FFFFFF] border border-[#E6DFD8] shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden"
      >
        {/* Arch-top image container: rounded-t-[2.2rem] rounded-b-xl */}
        <div className="relative p-2.5 pb-0 cursor-pointer" onClick={() => setShowDetailModal(true)}>
          <div className="relative w-full aspect-[4/5] rounded-t-[2.2rem] rounded-b-xl overflow-hidden bg-[#F0EBE5]">
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                if (product.fallbackImage && e.currentTarget.src !== product.fallbackImage) {
                  e.currentTarget.src = product.fallbackImage;
                } else if (e.currentTarget.src !== '/products/product-1.jpg') {
                  e.currentTarget.src = '/products/product-1.jpg';
                }
              }}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />

            {/* Gradient shadow overlay for badge legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1719]/80 via-transparent to-transparent opacity-85" />

            {/* Ticket style badge with slight rotation */}
            {product.badge && (
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#1C1719]/90 text-[#FFFFFF] -rotate-1 shadow-xs border border-white/10">
                {product.badge}
              </div>
            )}

            {/* Quick View Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowDetailModal(true);
              }}
              aria-label="View garment details"
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#FFFFFF]/90 hover:bg-[#FFFFFF] text-[#241D1D] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-xs cursor-pointer"
            >
              <Eye className="w-4 h-4" />
            </button>

            {/* Distance and Town Pill */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FFFFFF]/95 backdrop-blur-xs text-[11px] font-semibold text-[#241D1D] shadow-xs">
                <MapPin className="w-3 h-3 text-[#7B1E2B]" />
                {product.town} • {product.distance}
              </span>
              <span className="text-[10px] font-semibold text-[#FFFFFF] bg-[#1C1719]/80 px-2 py-0.5 rounded-full">
                {product.category}
              </span>
            </div>
          </div>
        </div>

        {/* Card Info */}
        <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between gap-3">
          <div>
            {/* Shop Name */}
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#625B57] mb-1">
              {product.shop}
            </div>

            {/* Product Name */}
            <h3 
              onClick={() => setShowDetailModal(true)}
              className="font-serif text-lg font-bold text-[#241D1D] leading-snug line-clamp-1 group-hover:text-[#7B1E2B] transition-colors cursor-pointer"
            >
              {product.name}
            </h3>

            {/* Fabric description */}
            <p className="text-xs text-[#625B57] line-clamp-1 mt-1">
              {product.fabric || "Malwa artisan quality fabric"}
            </p>
          </div>

          {/* Pricing & Add to Trial Bag Button */}
          <div className="pt-3 border-t border-[#E6DFD8] flex items-center justify-between gap-3">
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-xl font-bold text-[#241D1D]">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.mrp && (
                  <span className="text-xs line-through text-[#625B57]/70">
                    ₹{product.mrp}
                  </span>
                )}
              </div>
              <span className="text-[10px] font-semibold text-[#15803D]">
                Dukaan Cash-Counter Rate
              </span>
            </div>

            {/* Add to Bag Button with Tooltip for Cart Full */}
            <div className="relative group/btn">
              <button
                onClick={handleAction}
                disabled={!isInCart && isCartFull}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer shadow-xs ${
                  isInCart
                    ? 'bg-[#15803D] text-white hover:bg-[#166534]'
                    : isCartFull
                    ? 'bg-[#E6DFD8] text-[#625B57] cursor-not-allowed'
                    : 'bg-[#7B1E2B] text-white hover:bg-[#651823] active:scale-95'
                }`}
              >
                {isInCart ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>In Bag</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-3.5 h-3.5" />
                    <span>Try at Home</span>
                  </>
                )}
              </button>

              {/* Disabled tooltip if bag is full */}
              {!isInCart && isCartFull && (
                <div className="absolute bottom-full right-0 mb-2 w-48 p-2 bg-[#1C1719] text-[#FFFFFF] text-[11px] rounded-xl shadow-lg opacity-0 pointer-events-none group-hover/btn:opacity-100 transition-opacity z-20 text-center">
                  <div className="flex items-center justify-center gap-1 font-semibold mb-0.5 text-amber-300">
                    <AlertCircle className="w-3 h-3" />
                    <span>Trial Bag Full</span>
                  </div>
                  <span>Max 5 kapde allowed per trial box</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>

      {/* Quick View / Fabric Specs Modal */}
      {showDetailModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            onClick={() => setShowDetailModal(false)} 
            className="fixed inset-0 bg-[#1C1719]/70 backdrop-blur-xs" 
          />
          <div className="relative w-full max-w-lg bg-[#FFFFFF] rounded-3xl border border-[#E6DFD8] shadow-2xl p-6 z-10 overflow-hidden max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setShowDetailModal(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#F0EBE5] text-[#241D1D] hover:bg-[#E6DFD8] flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex flex-col sm:flex-row gap-5">
              <div className="w-full sm:w-1/2 aspect-[4/5] rounded-2xl overflow-hidden bg-[#F0EBE5]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    if (product.fallbackImage) e.currentTarget.src = product.fallbackImage;
                  }}
                />
              </div>

              <div className="w-full sm:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1 text-[11px] font-bold text-[#7B1E2B] uppercase tracking-wider mb-1">
                    <MapPin className="w-3 h-3" />
                    <span>{product.shop} • {product.town}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#241D1D] leading-tight mb-2">
                    {product.name}
                  </h3>

                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="font-serif text-2xl font-bold text-[#241D1D]">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    {product.mrp && (
                      <span className="text-sm line-through text-[#625B57]">
                        ₹{product.mrp}
                      </span>
                    )}
                  </div>

                  <div className="space-y-2 text-xs text-[#625B57] bg-[#F8F6F2] p-3 rounded-xl border border-[#E6DFD8] mb-4">
                    <div>
                      <span className="font-bold text-[#241D1D]">Fabric / Detail:</span> {product.fabric}
                    </div>
                    {product.length && (
                      <div>
                        <span className="font-bold text-[#241D1D]">Measurement / Spec:</span> {product.length}
                      </div>
                    )}
                    <div>
                      <span className="font-bold text-[#241D1D]">Trial Policy:</span> 90-min doorstep trial box
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <button
                    onClick={handleAction}
                    disabled={!isInCart && isCartFull}
                    className={`w-full py-3 rounded-full text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isInCart
                        ? 'bg-[#15803D] text-white hover:bg-[#166534]'
                        : isCartFull
                        ? 'bg-[#E6DFD8] text-[#625B57] cursor-not-allowed'
                        : 'bg-[#7B1E2B] text-white hover:bg-[#651823]'
                    }`}
                  >
                    {isInCart ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Remove from Trial Bag</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        <span>Add to Trial Bag (Max 5)</span>
                      </>
                    )}
                  </button>

                  <div className="text-[11px] text-center text-[#625B57] flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#15803D]" />
                    <span>Flat ₹49 rider fee • No advance garment payment</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
