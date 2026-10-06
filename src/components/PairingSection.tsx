import { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PAIRING_RULES, SIGNATURE_DESSERTS, SPECIALTY_DRINKS } from '../data/modgeData';

interface PairingSectionProps {
  onCursorChange?: (variant: 'default' | 'view' | 'taste' | 'explore' | 'arrow', text?: string) => void;
}

export function PairingSection({ onCursorChange }: PairingSectionProps) {
  const [selectedDrinkId, setSelectedDrinkId] = useState<string>('cappuccino');

  const activePairing = PAIRING_RULES.find(p => p.drinkId === selectedDrinkId) || PAIRING_RULES[0];
  const matchedDessert = SIGNATURE_DESSERTS.find(d => d.id === activePairing.dessertId);
  const matchedDrink = SPECIALTY_DRINKS.find(d => d.id === activePairing.drinkId);

  return (
    <section id="pairings" className="py-24 md:py-32 bg-[#F0F6FB] relative overflow-hidden border-t border-[#B5D6EE]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#0284C7] uppercase mb-3">
            <span>On D Go by Modge · Tasting Dialogue</span>
            <span>·</span>
            <span className="font-bengali-script">জুটি মেলানো</span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#0F2942] font-normal tracking-tight mb-4">
            WHAT GOES WITH WHAT?
          </h2>

          <p className="text-sm sm:text-base text-[#1E3A56] leading-relaxed font-normal">
            Select a drink to discover our pastry chef's suggested dessert pairing at On D Go by Modge. Harmony between roasted acidity and rich sweetness.
          </p>
        </div>

        {/* Two-Column Interactive Pairing Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: DRINKS LIST */}
          <div className="lg:col-span-5 bg-[#E2EFF8] border-2 border-[#B5D6EE] p-6 sm:p-8 shadow-md">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#B5D6EE]">
              <span className="text-xs font-bold tracking-[0.2em] text-[#0284C7] uppercase">
                01. SELECT DRINK
              </span>
              <span className="text-[11px] text-[#2A5D88] font-bold">Click to pair</span>
            </div>

            <div className="space-y-2">
              {PAIRING_RULES.map((rule) => {
                const isSelected = rule.drinkId === selectedDrinkId;
                return (
                  <button
                    key={rule.drinkId}
                    onClick={() => setSelectedDrinkId(rule.drinkId)}
                    onMouseEnter={() => onCursorChange?.('view')}
                    onMouseLeave={() => onCursorChange?.('default')}
                    className={`w-full text-left p-4 transition-all duration-200 cursor-pointer flex items-center justify-between border ${
                      isSelected
                        ? 'bg-[#0F2942] text-white border-[#0F2942] shadow-sm'
                        : 'bg-white text-[#0F2942] border-[#B5D6EE] hover:border-[#0284C7]'
                    }`}
                  >
                    <div>
                      <p className="font-editorial text-lg font-bold">
                        {rule.drinkName}
                      </p>
                      <p className={`text-[11px] mt-0.5 ${isSelected ? 'text-[#38BDF8]' : 'text-[#2A5D88]'}`}>
                        Suggested: {rule.dessertName}
                      </p>
                    </div>
                    
                    <ArrowRight
                      size={16}
                      className={`transition-transform ${isSelected ? 'translate-x-1 text-[#38BDF8]' : 'text-[#2A5D88]/50'}`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Column 2: DESSERT PAIRING CARD & TASTING RATIONALE */}
          <div className="lg:col-span-7 bg-[#0F2942] text-white p-8 sm:p-10 border-2 border-[#0F2942] shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
              <span className="text-xs font-bold tracking-[0.2em] text-[#38BDF8] uppercase">
                02. SUGGESTED DESSERT PAIRING
              </span>
              <span className="text-[11px] text-[#B5D6EE] font-mono">
                FLAVOR HARMONY
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              {/* Matched Dessert Image */}
              <div className="sm:col-span-5 aspect-4/3 sm:aspect-1/1 overflow-hidden bg-[#0A1A2B] border border-white/20">
                {matchedDessert && (
                  <img
                    src={matchedDessert.image}
                    alt={matchedDessert.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                )}
              </div>

              {/* Rationale & Details */}
              <div className="sm:col-span-7 space-y-4">
                <div className="inline-block px-2.5 py-1 bg-white/10 text-[10px] tracking-wider font-bold uppercase text-[#38BDF8] border border-[#38BDF8]/30">
                  {matchedDrink?.name} + {matchedDessert?.name}
                </div>

                <h3 className="font-editorial text-3xl font-bold text-white">
                  {activePairing.dessertName}
                </h3>

                <p className="text-xs sm:text-sm text-[#E0EFF8]/90 leading-relaxed font-normal">
                  {activePairing.reason}
                </p>

                <div className="pt-2 text-xs text-[#B5D6EE] flex items-center gap-4">
                  <span className="font-bold text-white">Price: ₹{matchedDessert?.price}</span>
                  <span>·</span>
                  <span>{matchedDessert?.category}</span>
                </div>
              </div>
            </div>

            {/* Quiet disclaimer */}
            <p className="text-[11px] text-[#B5D6EE]/60 italic mt-8 pt-4 border-t border-white/10">
              *Tasting suggestion crafted by On D Go by Modge for dessert and coffee lovers.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
