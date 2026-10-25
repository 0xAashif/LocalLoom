import React from 'react';
import ProductCard from './ProductCard';
import { Sparkles, RefreshCw } from 'lucide-react';

export default function ProductGrid({
  products,
  cart,
  onAddToCart,
  onRemoveFromCart,
  currentAccentHex = '#7B1E2B',
  selectedLocality,
  searchQuery,
  onResetFilters
}) {
  const isCartFull = cart.length >= 5;
  const cartIds = new Set(cart.map((item) => item.id));

  return (
    <section id="products-section" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E6DFD8] text-xs font-semibold text-[#7B1E2B] mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Dukaan Showcase</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#241D1D]">
            Featured Local Collections
          </h2>
          <p className="text-xs sm:text-sm text-[#625B57] mt-1 max-w-xl">
            Har kapda corridor ki verified dukaano se direct pack hokar aapke ghar trial ke liye aayega.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E6DFD8] text-[#241D1D]">
            Showing <strong className="text-[#7B1E2B]">{products.length}</strong> items
          </span>
          {(selectedLocality || searchQuery) && (
            <button
              onClick={onResetFilters}
              className="inline-flex items-center gap-1 text-xs font-medium text-[#7B1E2B] hover:underline cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Grid of Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isInCart={cartIds.has(product.id)}
            isCartFull={isCartFull}
            onAddToCart={onAddToCart}
            onRemoveFromCart={onRemoveFromCart}
            currentAccentHex={currentAccentHex}
          />
        ))}
      </div>

      {/* Empty State */}
      {products.length === 0 && (
        <div className="text-center py-16 px-4 rounded-3xl bg-[#FFFFFF] border border-[#E6DFD8] shadow-xs max-w-lg mx-auto">
          <p className="font-serif text-lg font-bold text-[#241D1D]">
            Is filter ke hisaab se koi kapda nahi mila.
          </p>
          <p className="text-xs sm:text-sm text-[#625B57] mt-2 mb-6">
            Category ya service area badal kar dekhein ya search query clear karein.
          </p>
          <button
            onClick={onResetFilters}
            className="px-5 py-2.5 rounded-full bg-[#7B1E2B] text-white text-xs font-semibold shadow-xs hover:bg-[#651823] transition-colors cursor-pointer"
          >
            Clear All Filters & Show Sab
          </button>
        </div>
      )}
    </section>
  );
}
