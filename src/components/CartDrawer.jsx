import React, { useState, useEffect } from 'react';
import { X, Trash2, ShoppingBag, MapPin, Sparkles, ShieldCheck } from 'lucide-react';
import { CORRIDOR_TOWNS } from '../data/mockData';

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onRemoveFromCart,
  currentAccentHex = '#7B1E2B'
}) {
  const [customerName, setCustomerName] = useState('');
  const [customerTown, setCustomerTown] = useState('Kalapipal');
  const [customerAddress, setCustomerAddress] = useState('');
  const [validationError, setValidationError] = useState('');

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const trialFee = 49;
  const total = subtotal + trialFee;

  const handleCheckout = () => {
    if (cart.length === 0) {
      setValidationError("Trial bag khali hai. Kam se kam 1 kapda add karein.");
      return;
    }

    const name = customerName.trim() || "[Customer Name]";
    const address = customerAddress.trim() || "[Local Delivery Address]";
    const town = customerTown;

    // Build WhatsApp message using encodeURIComponent with newlines (\n)
    const itemsList = cart
      .map((item) => `- ${item.name} (₹${item.price}) — ${item.shop}, ${item.town}`)
      .join('\n');

    const rawMessage = `Namaste LocalLoom! I want to book a Doorstep Try-at-Home box.\n\nItems in Trial Bag:\n${itemsList}\n\nRider Trial Fee: ₹${trialFee}\nGarments Value: ₹${subtotal}\nPayable After Trial: ₹${total}\n\nDelivery Town: ${town}\nCustomer Name: ${name}\nAddress: ${address}\n\nPlease confirm rider dispatch timing.`;

    const encoded = encodeURIComponent(rawMessage);
    const whatsappUrl = `https://wa.me/919303076644?text=${encoded}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop with smooth blur */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#1C1719]/75 backdrop-blur-md transition-opacity duration-300"
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md h-full bg-[#FFFFFF] border-l border-[#E6DFD8] shadow-2xl flex flex-col z-10 overflow-hidden">
        
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#E6DFD8] flex items-center justify-between bg-[#F8F6F2]">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#FFFFFF] border border-[#E6DFD8] text-[#7B1E2B] shadow-2xs"
            >
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-[#241D1D] leading-tight">
                Try-at-Home Bag
              </h3>
              <p className="text-xs text-[#625B57]">
                {cart.length} of 5 kapde added (Max 5)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close cart drawer"
            className="w-9 h-9 rounded-full flex items-center justify-center bg-[#FFFFFF] border border-[#E6DFD8] text-[#625B57] hover:text-[#241D1D] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Corridor Pilot Banner */}
        <div className="px-5 py-2.5 bg-[#F0EBE5] border-b border-[#E6DFD8] flex items-center gap-2 text-xs text-[#625B57]">
          <Sparkles className="w-3.5 h-3.5 flex-shrink-0 text-[#7B1E2B]" />
          <span>90-Minute doorstep trial • Zero pressure return guarantee</span>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-3.5 divide-y divide-[#E6DFD8]">
          {cart.length === 0 ? (
            <div className="py-16 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-[#F8F6F2] border border-[#E6DFD8] flex items-center justify-center mb-3">
                <ShoppingBag className="w-7 h-7 text-[#625B57]" />
              </div>
              <p className="font-serif text-base font-bold text-[#241D1D]">
                Trial bag khali hai.
              </p>
              <p className="text-xs text-[#625B57] mt-1 max-w-xs">
                Catalogue se 5 tak kapde add karein. Rider ghar layega, pehan kar dekhein, pasand aaye toh rakhein.
              </p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="pt-3.5 first:pt-0 flex items-center gap-3.5 group">
                <div className="w-16 h-20 rounded-xl overflow-hidden bg-[#F0EBE5] flex-shrink-0 border border-[#E6DFD8]">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#7B1E2B] block truncate">
                    {item.shop} • {item.town}
                  </span>
                  <h4 className="font-serif font-bold text-sm text-[#241D1D] truncate mt-0.5">
                    {item.name}
                  </h4>
                  <div className="font-serif font-bold text-sm text-[#241D1D] mt-1">
                    ₹{item.price.toLocaleString('en-IN')}
                  </div>
                </div>

                <button
                  onClick={() => onRemoveFromCart(item.id)}
                  aria-label={`Remove ${item.name}`}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[#625B57] hover:text-[#DC2626] hover:bg-red-50 transition-colors cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Customer Address Input Section (Before Checkout) */}
        {cart.length > 0 && (
          <div className="p-5 bg-[#F8F6F2] border-t border-[#E6DFD8] space-y-3">
            <div className="text-xs font-bold text-[#241D1D] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#7B1E2B]" />
              <span>Ghar Par Trial Mangwane ka Pata</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <input
                  type="text"
                  placeholder="Aapka Naam"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full text-xs px-3 py-2 rounded-xl bg-[#FFFFFF] border border-[#E6DFD8] text-[#241D1D] placeholder-[#625B57]/60 focus:outline-none focus:border-[#7B1E2B]"
                />
              </div>

              <div>
                <select
                  value={customerTown}
                  onChange={(e) => setCustomerTown(e.target.value)}
                  className="w-full text-xs px-3 py-2 rounded-xl bg-[#FFFFFF] border border-[#E6DFD8] text-[#241D1D] focus:outline-none focus:border-[#7B1E2B]"
                >
                  {CORRIDOR_TOWNS.map((town) => (
                    <option key={town} value={town}>{town}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <input
                type="text"
                placeholder="Makaan no., Gali, Landmark (e.g. Near Mandi Chowk)"
                value={customerAddress}
                onChange={(e) => setCustomerAddress(e.target.value)}
                className="w-full text-xs px-3 py-2 rounded-xl bg-[#FFFFFF] border border-[#E6DFD8] text-[#241D1D] placeholder-[#625B57]/60 focus:outline-none focus:border-[#7B1E2B]"
              />
            </div>
          </div>
        )}

        {/* Pricing Summary & WhatsApp Checkout */}
        <div className="p-5 border-t border-[#E6DFD8] bg-[#FFFFFF]">
          <div className="space-y-1.5 text-xs text-[#625B57] mb-3">
            <div className="flex justify-between items-center">
              <span>Selected Clothes ({cart.length} items)</span>
              <span className="font-semibold text-[#241D1D]">
                ₹{subtotal.toLocaleString('en-IN')}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-1">
                <span>Rider Doorstep Trial Fee</span>
              </span>
              <span className="font-semibold text-[#241D1D]">
                ₹{trialFee}
              </span>
            </div>
            <div className="pt-2 border-t border-[#E6DFD8] flex justify-between items-center text-sm font-bold text-[#241D1D]">
              <span className="font-serif">Total (Pay After Trial)</span>
              <span className="font-serif font-bold text-base text-[#7B1E2B]">
                ₹{cart.length > 0 ? total.toLocaleString('en-IN') : 0}
              </span>
            </div>
          </div>

          {/* Checkout CTA with exact WhatsApp brand SVG */}
          <button
            onClick={handleCheckout}
            disabled={cart.length === 0}
            className={`w-full py-3.5 px-4 rounded-full font-semibold text-sm transition-all duration-200 flex items-center justify-center shadow-xs cursor-pointer active:scale-98 ${
              cart.length === 0
                ? 'bg-[#E6DFD8] text-[#625B57] cursor-not-allowed'
                : 'bg-[#15803D] hover:bg-[#166534] text-white'
            }`}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="mr-2"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            <span>Book Trial via WhatsApp</span>
          </button>

          <p className="text-[11px] text-center text-[#625B57] mt-2.5 flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#15803D]" />
            <span>Pehle pehno, phir pasand aaye toh dukaan ka bill pay karna.</span>
          </p>
        </div>

      </div>
    </div>
  );
}
