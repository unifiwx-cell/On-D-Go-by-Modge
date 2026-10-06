import { ArrowDown, Sparkles } from 'lucide-react';
import { BRAND_INFO, MODGE_IMAGES } from '../data/modgeData';

interface HeroProps {
  onOpenMenu: () => void;
  onScrollToVisit: () => void;
  onCursorChange?: (variant: 'default' | 'view' | 'taste' | 'explore' | 'arrow', text?: string) => void;
}

export function Hero({ onOpenMenu, onScrollToVisit, onCursorChange }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-74px)] py-12 md:py-16 flex flex-col justify-center overflow-hidden bg-[#F0F6FB] bg-grain select-none"
    >
      {/* Background Decorative Typography */}
      <div
        className="absolute top-1/4 -right-16 text-[18vw] font-editorial font-bold text-[#0F2942]/[0.03] leading-none pointer-events-none select-none tracking-tighter"
        aria-hidden="true"
      >
        MODGE
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Asymmetric Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1 pt-4 lg:pt-0">
            {/* Bengali & Brand Label: On D Go by Modge */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-[#0284C7]"></span>
              <p className="text-xs md:text-sm font-bold tracking-[0.25em] text-[#0284C7] uppercase">
                {BRAND_INFO.name}
              </p>
              <span className="text-xs font-bold text-[#2A5D88] font-bengali-script">
                ({BRAND_INFO.bengaliName})
              </span>
            </div>

            {/* Oversized Headline */}
            <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#0F2942] leading-[0.95] mb-8 text-balance">
              SWEET THINGS
              <span className="block italic font-light text-[#0284C7] mt-1">
                TAKE TIME.
              </span>
            </h1>

            {/* Sub-label */}
            <div className="flex items-center gap-3 mb-8 text-xs md:text-sm tracking-widest text-[#10304D] font-bold">
              <span>COFFEE</span>
              <span className="text-[#0284C7]">·</span>
              <span>DESSERTS</span>
              <span className="text-[#0284C7]">·</span>
              <span>GOOD MOODS</span>
            </div>

            {/* Editorial Paragraph */}
            <p className="text-sm md:text-base text-[#1E3A56] max-w-lg leading-relaxed mb-10 font-normal">
              An intimate dessert atelier nestled in Indo Japan House, Sector V. At <strong className="font-bold text-[#0F2942]">On D Go by Modge</strong>, we handcraft multi-layered Matilda chocolate cakes, velvety cheesecakes, authentic tiramisu, and slow-brewed specialty coffees.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenMenu}
                className="px-8 py-3.5 bg-[#0F2942] text-white text-xs font-bold tracking-widest hover:bg-[#0284C7] transition-colors duration-200 cursor-pointer shadow-sm"
                onMouseEnter={() => onCursorChange?.('taste')}
                onMouseLeave={() => onCursorChange?.('default')}
              >
                EXPLORE MENU
              </button>

              <button
                onClick={onScrollToVisit}
                className="px-8 py-3.5 border-2 border-[#B5D6EE] bg-white/70 text-[#0F2942] text-xs font-bold tracking-widest hover:border-[#0284C7] hover:bg-[#E0EFF8] transition-colors duration-200 cursor-pointer"
                onMouseEnter={() => onCursorChange?.('explore')}
                onMouseLeave={() => onCursorChange?.('default')}
              >
                VISIT US
              </button>
            </div>

            {/* Editorial Mini Proof */}
            <div className="mt-12 pt-8 border-t border-[#B5D6EE] flex items-center gap-6 text-xs text-[#2A5D88] font-medium">
              <div className="flex items-center gap-1.5 font-bold text-[#0F2942]">
                <span className="text-amber-600">★</span>
                <span>4.6</span>
                <span className="font-normal text-[#2A5D88]">(241 reviews)</span>
              </div>
              <span>·</span>
              <span>₹200–₹400 / person</span>
              <span>·</span>
              <span>Indo Japan House, Fl 0</span>
            </div>
          </div>

          {/* Right Column: Hero Dessert Image Breaking the Grid */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative">
            {/* Vertical Label */}
            <div className="hidden lg:block absolute -left-12 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-[10px] tracking-[0.3em] font-bold text-[#0284C7] uppercase whitespace-nowrap">
              SECTOR V · KOLKATA
            </div>

            {/* Hero Image Container */}
            <div
              className="relative lg:scale-105 xl:scale-110 lg:translate-x-4 transition-transform duration-500 group"
              onMouseEnter={() => onCursorChange?.('taste', 'TASTE')}
              onMouseLeave={() => onCursorChange?.('default')}
            >
              {/* Asymmetrical border accent */}
              <div className="absolute -inset-3 border border-[#0284C7]/30 pointer-events-none -rotate-1 rounded-sm"></div>

              <div className="relative aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 overflow-hidden bg-[#0F2942]/5 shadow-2xl">
                <img
                  src={MODGE_IMAGES.hero}
                  alt="Signature Artisanal Tiramisu and espresso at On D Go by Modge Kolkata"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2942]/50 via-transparent to-transparent opacity-60"></div>

                {/* Floating Dish Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#E0EFF8]/95 backdrop-blur-md border border-[#B5D6EE] flex items-center justify-between shadow-md">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[#0284C7] font-bold">
                      Signature Feature · On D Go by Modge
                    </p>
                    <p className="font-editorial text-base text-[#0F2942] font-bold">
                      Artisanal Tiramisu & Modge Espresso
                    </p>
                  </div>
                  <span className="font-serif italic font-bold text-sm text-[#0284C7]">
                    ₹280
                  </span>
                </div>
              </div>

              {/* Decorative Handwritten Note */}
              <div className="absolute -top-6 -right-4 bg-[#E0EFF8] border border-[#B5D6EE] py-1.5 px-3.5 shadow-md rotate-2 hidden sm:block">
                <span className="font-note text-lg text-[#0284C7] font-bold leading-none">
                  pulled fresh daily ✨
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[10px] font-bold tracking-widest text-[#2A5D88] hover:text-[#0284C7] transition-colors cursor-pointer select-none">
        <a href="#intro" className="flex flex-col items-center gap-1">
          <span>SCROLL</span>
          <ArrowDown size={14} className="animate-bounce text-[#0284C7]" />
        </a>
      </div>
    </section>
  );
}
