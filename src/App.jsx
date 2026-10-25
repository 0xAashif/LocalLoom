import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import TrustStrip from './components/TrustStrip';
import HowItWorks from './components/HowItWorks';
import CategoryFilter from './components/CategoryFilter';
import ProductGrid from './components/ProductGrid';
import StoreMap from './components/StoreMap';
import Testimonials from './components/Testimonials';
import FaqSection from './components/FaqSection';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';

import { PRODUCTS } from './data/mockData';

// Locked primary burgundy accent: #7B1E2B
const PRIMARY_BURGUNDY = '#7B1E2B';

export default function App() {
  // Global State 1: cart (max 5 items, immutable updates only)
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('localloom_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Global State 2: isCartOpen
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Global State 3: activeSlide (0–2 or total hero slides)
  const [activeSlide, setActiveSlide] = useState(0);

  // Filtering states
  const [selectedCategory, setSelectedCategory] = useState("Sab");
  const [selectedLocality, setSelectedLocality] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Persist cart in localStorage
  useEffect(() => {
    try {
      localStorage.setItem('localloom_cart', JSON.stringify(cart));
    } catch (e) {
      console.warn("Could not save cart to localStorage", e);
    }
  }, [cart]);

  // Set CSS primary color variable
  useEffect(() => {
    document.documentElement.style.setProperty('--primary-burgundy', PRIMARY_BURGUNDY);
    document.documentElement.style.setProperty('--accent', PRIMARY_BURGUNDY);
  }, []);

  // Cart operations (immutable updates, max 5 items enforced)
  const handleAddToCart = (product) => {
    if (cart.length >= 5) {
      setIsCartOpen(true);
      return;
    }
    // Prevent duplicate entry
    if (cart.some((item) => item.id === product.id)) {
      return;
    }
    setCart((prev) => [
      ...prev,
      {
        id: product.id,
        name: product.name,
        price: product.price,
        shop: product.shop,
        town: product.town,
        image: product.image
      }
    ]);
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResetFilters = () => {
    setSelectedCategory("Sab");
    setSelectedLocality("");
    setSearchQuery("");
  };

  // Category counts
  const itemCounts = useMemo(() => {
    const counts = { Sab: PRODUCTS.length };
    PRODUCTS.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Multi-facet filtering: Category, Locality, and Search Query
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Category filter
      if (selectedCategory !== "Sab" && p.category !== selectedCategory) {
        return false;
      }
      // Locality filter
      if (selectedLocality && p.town.toLowerCase() !== selectedLocality.toLowerCase()) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesShop = p.shop.toLowerCase().includes(query);
        const matchesTown = p.town.toLowerCase().includes(query);
        const matchesCategory = p.category.toLowerCase().includes(query);
        const matchesFabric = p.fabric ? p.fabric.toLowerCase().includes(query) : false;
        if (!matchesName && !matchesShop && !matchesTown && !matchesCategory && !matchesFabric) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, selectedLocality, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F6F2] text-[#241D1D] antialiased">
      
      {/* 1. RESPONSIVE HEADER */}
      <Header
        cartCount={cart.length}
        onOpenCart={() => setIsCartOpen(true)}
        selectedLocality={selectedLocality}
        onSelectLocality={setSelectedLocality}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        currentAccentHex={PRIMARY_BURGUNDY}
      />

      <main className="flex-grow">
        {/* 2. HERO SHOWCASE WITH VALUE PROPOSITION */}
        <HeroCarousel
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
          onExploreClick={() => handleScrollToSection('products-section')}
          onHowItWorksClick={() => handleScrollToSection('how-it-works')}
          currentAccentHex={PRIMARY_BURGUNDY}
        />

        {/* TRUST STRIP (4 VALUE PROPOSITIONS) */}
        <TrustStrip currentAccentHex={PRIMARY_BURGUNDY} />

        {/* 3. THREE-STEP HOW IT WORKS */}
        <HowItWorks
          onExploreClick={() => handleScrollToSection('products-section')}
          currentAccentHex={PRIMARY_BURGUNDY}
        />

        {/* 4. SHOP BY CATEGORY */}
        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          currentAccentHex={PRIMARY_BURGUNDY}
          itemCounts={itemCounts}
        />

        {/* 5. FEATURED LOCAL COLLECTIONS (PRODUCT GRID) */}
        <ProductGrid
          products={filteredProducts}
          cart={cart}
          onAddToCart={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}
          currentAccentHex={PRIMARY_BURGUNDY}
          selectedLocality={selectedLocality}
          searchQuery={searchQuery}
          onResetFilters={handleResetFilters}
        />

        {/* 6. VERIFIED LOCAL SHOPS & HUBS (LEAFLET MAP & DIRECTORY) */}
        <StoreMap
          currentAccentHex={PRIMARY_BURGUNDY}
        />

        {/* 7. AUTHENTIC CORRIDOR REVIEWS & TESTIMONIALS */}
        <Testimonials
          currentAccentHex={PRIMARY_BURGUNDY}
        />

        {/* 8. FREQUENTLY ASKED QUESTIONS */}
        <FaqSection
          currentAccentHex={PRIMARY_BURGUNDY}
        />
      </main>

      {/* 9. ANCHORED FOOTER */}
      <Footer currentAccentHex={PRIMARY_BURGUNDY} />

      {/* 10. INTERACTIVE TRIAL BAG DRAWER */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onRemoveFromCart={handleRemoveFromCart}
        currentAccentHex={PRIMARY_BURGUNDY}
      />

    </div>
  );
}
