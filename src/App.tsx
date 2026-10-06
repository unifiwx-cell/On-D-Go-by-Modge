import { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { SpecialTransition } from './components/SpecialTransition';
import { SignatureDesserts } from './components/SignatureDesserts';
import { MatildaFeature } from './components/MatildaFeature';
import { CheesecakeSection } from './components/CheesecakeSection';
import { CustomCakeSection } from './components/CustomCakeSection';
import { CoffeeSection } from './components/CoffeeSection';
import { PairingSection } from './components/PairingSection';
import { HealthConsciousSection } from './components/HealthConsciousSection';
import { AtmosphereGallery } from './components/AtmosphereGallery';
import { ReviewsSection } from './components/ReviewsSection';
import { SocialProofMarquee } from './components/SocialProofMarquee';
import { LocationSection } from './components/LocationSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { MenuModal } from './components/MenuModal';
import { ReservationModal } from './components/ReservationModal';
import { CustomCakeModal } from './components/CustomCakeModal';
import { DessertItem } from './data/modgeData';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isCustomCakeOpen, setIsCustomCakeOpen] = useState(false);

  // Custom Cursor state
  const [cursorVariant, setCursorVariant] = useState<'default' | 'view' | 'taste' | 'explore' | 'arrow'>('default');
  const [cursorText, setCursorText] = useState<string | undefined>(undefined);

  const handleCursorChange = (
    variant: 'default' | 'view' | 'taste' | 'explore' | 'arrow',
    text?: string
  ) => {
    setCursorVariant(variant);
    setCursorText(text);
  };

  const handleScrollToVisit = () => {
    const loc = document.getElementById('location');
    if (loc) {
      loc.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectDessert = (item: DessertItem) => {
    // Open menu or reservation with focus on item
    setIsMenuOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F0F6FB] text-[#102A43] selection:bg-[#0284C7] selection:text-white">
      {/* Custom Mouse Cursor */}
      <CustomCursor cursorVariant={cursorVariant} cursorText={cursorText} />

      {/* Floating 3-Zone Navigation */}
      <Navbar
        onOpenReservation={() => setIsReservationOpen(true)}
        onOpenMenu={() => setIsMenuOpen(true)}
        onCursorChange={handleCursorChange}
      />

      <main>
        {/* Asymmetric Editorial Hero */}
        <Hero
          onOpenMenu={() => setIsMenuOpen(true)}
          onScrollToVisit={handleScrollToVisit}
          onCursorChange={handleCursorChange}
        />

        {/* Editorial Introduction */}
        <Intro onCursorChange={handleCursorChange} />

        {/* Signature Agency Transition: Screen Darkens -> SWEET */}
        <SpecialTransition />

        {/* Signature Dessert Section: Horizontal Scrolling Showcase */}
        <SignatureDesserts
          onSelectItem={handleSelectDessert}
          onCursorChange={handleCursorChange}
        />

        {/* Dramatic Matilda Cake Feature */}
        <MatildaFeature
          onOrderMatilda={() => setIsMenuOpen(true)}
          onCursorChange={handleCursorChange}
        />

        {/* Cheesecake Therapy Section */}
        <CheesecakeSection
          onOpenCustomCakes={() => setIsCustomCakeOpen(true)}
          onCursorChange={handleCursorChange}
        />

        {/* Custom Cake Experience */}
        <CustomCakeSection
          onOpenCustomModal={() => setIsCustomCakeOpen(true)}
          onCursorChange={handleCursorChange}
        />

        {/* Warm Coffee Section with Animated Rising Steam */}
        <CoffeeSection onCursorChange={handleCursorChange} />

        {/* Interactive Coffee + Dessert Pairing Console */}
        <PairingSection onCursorChange={handleCursorChange} />

        {/* Health-Conscious Dietary Options */}
        <HealthConsciousSection />

        {/* Sector V Lifestyle Atmosphere Gallery */}
        <AtmosphereGallery onCursorChange={handleCursorChange} />

        {/* 4.6★ & 241 Verified Patrons Editorial Reviews */}
        <ReviewsSection onCursorChange={handleCursorChange} />

        {/* Slow Scrolling Social Proof Marquee */}
        <SocialProofMarquee />

        {/* Location & Directions Guide */}
        <LocationSection
          onOpenReservation={() => setIsReservationOpen(true)}
          onCursorChange={handleCursorChange}
        />

        {/* Dramatic Final CTA */}
        <FinalCTA
          onOpenMenu={() => setIsMenuOpen(true)}
          onScrollToVisit={handleScrollToVisit}
          onCursorChange={handleCursorChange}
        />
      </main>

      {/* Luxury Footer */}
      <Footer
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenReservation={() => setIsReservationOpen(true)}
        onCursorChange={handleCursorChange}
      />

      {/* Interactive Modals */}
      <MenuModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onReserveTable={() => setIsReservationOpen(true)}
      />

      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      <CustomCakeModal
        isOpen={isCustomCakeOpen}
        onClose={() => setIsCustomCakeOpen(false)}
      />
    </div>
  );
}
