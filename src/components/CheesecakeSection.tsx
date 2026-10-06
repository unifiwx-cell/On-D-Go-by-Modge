import { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { MODGE_IMAGES } from '../data/modgeData';

interface CheesecakeSectionProps {
  onOpenCustomCakes: () => void;
  onCursorChange?: (variant: 'default' | 'view' | 'taste' | 'explore' | 'arrow', text?: string) => void;
}

export function CheesecakeSection({ onOpenCustomCakes, onCursorChange }: CheesecakeSectionProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'blueberry' | 'nutella' | 'classic' | 'custom'>('all');

  const categories = [
    { id: 'all', label: 'ALL CHEESECAKES' },
    { id: 'blueberry', label: 'BLUEBERRY' },
    { id: 'nutella', label: 'NUTELLA' },
    { id: 'classic', label: 'CLASSIC' },
    { id: 'custom', label: 'CUSTOM' },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F0F6FB] relative overflow-hidden border-t border-[#B5D6EE]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading & Floating Labels */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-[#0284C7] uppercase mb-4">
            <span>On D Go by Modge · Patisserie</span>
            <span>·</span>
            <span className="font-bengali-script">চিজকেক থেরাপি</span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#0F2942] font-normal tracking-tight mb-6">
            CHEESECAKE
            <span className="block italic text-[#0284C7]">THERAPY</span>
          </h2>

          <p className="text-sm sm:text-base text-[#1E3A56] leading-relaxed max-w-xl mx-auto mb-8 font-normal">
            Creamy, velvety textures slow-baked to silky perfection. From wild mountain blueberries to roasted hazelnut Nutella swirls and bespoke celebration slabs.
          </p>

          {/* Clean Functional Filter Controls */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 text-xs font-bold tracking-wider transition-colors cursor-pointer border ${
                  activeCategory === cat.id
                    ? 'bg-[#0F2942] text-white border-[#0F2942]'
                    : 'bg-white text-[#10304D] border-[#B5D6EE] hover:border-[#0284C7]'
                }`}
                onMouseEnter={() => onCursorChange?.('taste')}
                onMouseLeave={() => onCursorChange?.('default')}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Feature Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Main Visual */}
          <div className="lg:col-span-7">
            <div
              className="relative aspect-16/10 sm:aspect-16/9 overflow-hidden bg-[#0F2942]/5 shadow-xl group border border-[#B5D6EE]"
              onMouseEnter={() => onCursorChange?.('explore')}
              onMouseLeave={() => onCursorChange?.('default')}
            >
              <img
                src={MODGE_IMAGES.cheesecake}
                alt="Artisanal blueberry and Nutella cheesecake slices at On D Go by Modge"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Floating tags */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="bg-[#E0EFF8]/95 backdrop-blur-xs px-3 py-1 text-[11px] font-bold tracking-wider text-[#0F2942] border border-[#B5D6EE]">
                  PHILADELPHIA CREAM CHEESE
                </span>
              </div>
            </div>
          </div>

          {/* Right Narrative Card */}
          <div className="lg:col-span-5 bg-[#E2EFF8] border-2 border-[#B5D6EE] p-8 sm:p-10 flex flex-col justify-between h-full shadow-md">
            <div className="space-y-6">
              <span className="text-[11px] font-mono tracking-widest text-[#0284C7] font-bold">
                CURATED VARIETIES · ON D GO BY MODGE
              </span>

              <h3 className="font-editorial text-3xl font-bold text-[#0F2942]">
                Balanced sweetness, no gelatin shortcuts.
              </h3>

              <div className="space-y-4 pt-2 text-xs sm:text-sm text-[#1E3A56]">
                <div className="pb-3 border-b border-[#B5D6EE]">
                  <p className="font-bold text-[#0F2942]">Wild Blueberry Compote</p>
                  <p className="text-[#2A5D88] text-xs mt-0.5">Slow-simmered whole mountain berries with gentle citrus aroma.</p>
                </div>
                <div className="pb-3 border-b border-[#B5D6EE]">
                  <p className="font-bold text-[#0F2942]">Rich Nutella Hazelnut</p>
                  <p className="text-[#2A5D88] text-xs mt-0.5">Roasted Piedmont-style hazelnut character with smooth chocolate.</p>
                </div>
                <div className="pb-3 border-b border-[#B5D6EE]">
                  <p className="font-bold text-[#0F2942]">Lotus Biscoff Speculoos</p>
                  <p className="text-[#2A5D88] text-xs mt-0.5">Caramelized spiced cookie crust with warm speculoos cream.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#B5D6EE] flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#0284C7] font-bold">
                  CUSTOM CAKES AVAILABLE
                </p>
                <p className="text-[11px] text-[#2A5D88] mt-0.5 font-medium">
                  Pre-order for birthdays & gatherings
                </p>
              </div>

              <button
                onClick={onOpenCustomCakes}
                className="px-5 py-2.5 bg-[#0F2942] text-white text-xs font-bold tracking-wider hover:bg-[#0284C7] transition-colors cursor-pointer flex items-center gap-1.5 shadow-sm"
                onMouseEnter={() => onCursorChange?.('arrow')}
                onMouseLeave={() => onCursorChange?.('default')}
              >
                <span>CREATE YOUR CAKE</span>
                <ArrowRight size={14} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
