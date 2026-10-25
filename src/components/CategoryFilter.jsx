import React from 'react';
import { CATEGORIES } from '../data/mockData';
import { Layers } from 'lucide-react';

export default function CategoryFilter({
  selectedCategory,
  onSelectCategory,
  currentAccentHex = '#7B1E2B',
  itemCounts
}) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-3">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#7B1E2B] flex items-center gap-1.5 mb-1">
            <Layers className="w-3.5 h-3.5" />
            <span>Shop By Category</span>
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#241D1D]">
            Corridor Textile Categories
          </h3>
        </div>
        <p className="text-xs text-[#625B57]">
          Select category to filter available garments
        </p>
      </div>

      {/* Horizontal Scrollable Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none no-scrollbar">
        {CATEGORIES.map((catItem) => {
          const catId = typeof catItem === 'string' ? catItem : catItem.id;
          const catName = typeof catItem === 'string' ? catItem : catItem.name;
          const isActive = selectedCategory === catId;
          const count = itemCounts ? itemCounts[catId] : null;

          return (
            <button
              key={catId}
              onClick={() => onSelectCategory(catId)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer active:scale-95 shadow-2xs flex items-center gap-2 ${
                isActive
                  ? 'bg-[#7B1E2B] text-white shadow-xs'
                  : 'bg-[#FFFFFF] text-[#241D1D] border border-[#E6DFD8] hover:border-[#7B1E2B]/50 hover:bg-[#F0EBE5]'
              }`}
            >
              <span>{catName}</span>
              {count !== undefined && count !== null && (
                <span
                  className={`px-1.5 py-0.5 text-[10px] rounded-full font-mono ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-[#F0EBE5] text-[#625B57]'
                  }`}
                >
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
