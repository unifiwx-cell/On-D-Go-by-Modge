import { useState } from 'react';
import { SPECIALTY_DRINKS, DrinkItem, MODGE_IMAGES } from '../data/modgeData';

interface CoffeeSectionProps {
  onSelectDrink?: (drink: DrinkItem) => void;
  onCursorChange?: (variant: 'default' | 'view' | 'taste' | 'explore' | 'arrow', text?: string) => void;
}

export function CoffeeSection({ onSelectDrink, onCursorChange }: CoffeeSectionProps) {
  const [activeDrinkId, setActiveDrinkId] = useState<string>('cappuccino');

  const selectedDrink = SPECIALTY_DRINKS.find(d => d.id === activeDrinkId) || SPECIALTY_DRINKS[0];

  return (
    <section className="relative py-28 md:py-36 bg-[#241715] text-[#FAF7F2] overflow-hidden select-none">
      {/* Background warm coffee ambient overlay */}
      <div className="absolute inset-0 bg-radial from-[#382522] via-[#241715] to-[#180F0E] opacity-95 pointer-events-none"></div>

      {/* Decorative oversized background typographic motif */}
      <div
        className="absolute top-1/2 -right-12 -translate-y-1/2 text-[17vw] font-editorial font-bold text-[#FAF7F2]/[0.03] leading-none pointer-events-none tracking-tighter"
        aria-hidden="true"
      >
        SLOW
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Atmospheric Steam Photography */}
          <div className="lg:col-span-6 relative">
            <div
              className="relative aspect-4/3 sm:aspect-1/1 lg:aspect-4/3 overflow-hidden shadow-2xl bg-[#180F0E] group"
              onMouseEnter={() => onCursorChange?.('explore')}
              onMouseLeave={() => onCursorChange?.('default')}
            >
              <img
                src={MODGE_IMAGES.coffee}
                alt="Slow specialty pour and velvet cappuccino at On D Go by Modge"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Realistic Animated Steam Overlay Effect */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                {/* Steam plumes */}
                <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-16 h-36 flex justify-center">
                  <div className="w-6 h-28 bg-gradient-to-t from-white/30 via-white/15 to-transparent rounded-full blur-md animate-steam-1"></div>
                  <div className="w-8 h-32 bg-gradient-to-t from-white/20 via-white/10 to-transparent rounded-full blur-lg animate-steam-2"></div>
                  <div className="w-5 h-24 bg-gradient-to-t from-white/25 via-white/10 to-transparent rounded-full blur-md animate-steam-3"></div>
                </div>
              </div>

              {/* Dark rim scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#241715]/70 via-transparent to-transparent opacity-60"></div>

              {/* Floating label */}
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#180F0E]/90 backdrop-blur-md border border-[#FAF7F2]/10 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-semibold">
                    Brew Bar
                  </p>
                  <p className="font-editorial text-base text-[#FAF7F2] font-semibold">
                    100% Arabica · Hand-Crafted
                  </p>
                </div>
                <span className="font-serif italic text-xs text-[#FAF7F2]/60">
                  Sector V, Kolkata
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Typography & Menu */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.3em] uppercase text-[#D4AF37] mb-6">
              <span>Specialty Coffee & Infusions</span>
              <span>·</span>
              <span className="font-bengali-script">ধীর কফি</span>
            </div>

            <h2 className="font-editorial text-5xl sm:text-6xl md:text-7xl font-normal leading-[0.95] tracking-tight mb-6 text-balance">
              COFFEE,<br />
              <span className="italic font-light text-[#E8DFD6]">BUT MAKE IT</span><br />
              <span className="text-[#D4AF37]">SLOW.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#DDD2C5]/80 leading-relaxed font-normal mb-8 max-w-lg">
              We treat extraction as an art. From balanced espresso pulls dialed in each morning to patient single-origin pour-overs, organic Uji matcha, and fragrant Makaibari Darjeeling tea.
            </p>

            {/* Drink Selection Tabs */}
            <div className="space-y-3 mb-8">
              {SPECIALTY_DRINKS.slice(0, 4).map((drink) => {
                const isSelected = drink.id === activeDrinkId;
                return (
                  <div
                    key={drink.id}
                    onClick={() => {
                      setActiveDrinkId(drink.id);
                      onSelectDrink?.(drink);
                    }}
                    className={`p-4 border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#382522] border-[#D4AF37]/60 translate-x-2'
                        : 'bg-[#180F0E]/50 border-[#FAF7F2]/10 hover:border-[#FAF7F2]/30'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#D4AF37]' : 'bg-[#FAF7F2]/30'}`}></span>
                        <h4 className="font-editorial text-xl font-medium text-[#FAF7F2]">
                          {drink.name}
                        </h4>
                      </div>
                      <span className="font-mono text-xs text-[#D4AF37]">
                        ₹{drink.price}
                      </span>
                    </div>

                    {isSelected && (
                      <div className="mt-2 pl-5 text-xs text-[#DDD2C5]/70 animate-in fade-in duration-200">
                        <p>{drink.description}</p>
                        <div className="flex items-center gap-2 mt-2 text-[11px] text-[#D4AF37]">
                          <span>Notes:</span>
                          <span>{drink.tastingNotes.join(' · ')}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Small Text requirement */}
            <div className="pt-4 border-t border-[#FAF7F2]/10 flex items-center justify-between">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#DDD2C5]/80">
                PAIR IT WITH SOMETHING SWEET.
              </span>
              <a
                href="#pairings"
                className="text-xs text-[#D4AF37] hover:underline uppercase tracking-wider font-medium"
              >
                View Pairings ↓
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
