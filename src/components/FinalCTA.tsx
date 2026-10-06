import { BRAND_INFO } from '../data/modgeData';

interface FinalCTAProps {
  onOpenMenu: () => void;
  onScrollToVisit: () => void;
  onCursorChange?: (variant: 'default' | 'view' | 'taste' | 'explore' | 'arrow', text?: string) => void;
}

export function FinalCTA({ onOpenMenu, onScrollToVisit, onCursorChange }: FinalCTAProps) {
  return (
    <section className="relative min-h-[85vh] py-32 bg-[#0B1E30] text-white flex items-center justify-center overflow-hidden bg-grain-dark select-none border-t border-[#38BDF8]/20">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-radial from-[#10304D] via-[#0B1E30] to-[#06121E] opacity-90 pointer-events-none"></div>

      {/* Floating oversized typography in background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-editorial font-bold text-white/[0.025] pointer-events-none tracking-tighter whitespace-nowrap"
        aria-hidden="true"
      >
        ON D GO
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <p className="text-xs md:text-sm font-bold tracking-[0.4em] uppercase text-[#38BDF8] mb-6">
          {BRAND_INFO.name}
        </p>

        <h2 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white leading-[0.95] tracking-tight mb-6 text-balance">
          LIFE IS SHORT.<br />
          <span className="italic font-light text-[#38BDF8]">ORDER THE DESSERT.</span>
        </h2>

        <p className="font-bengali-script text-xl sm:text-2xl text-[#B5D6EE] mb-10 tracking-widest font-bold">
          {BRAND_INFO.bengaliName}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5">
          <button
            onClick={onOpenMenu}
            className="px-9 py-4 bg-[#38BDF8] text-[#0F2942] text-xs font-bold tracking-widest hover:bg-white transition-colors duration-200 cursor-pointer shadow-2xl"
            onMouseEnter={() => onCursorChange?.('taste')}
            onMouseLeave={() => onCursorChange?.('default')}
          >
            EXPLORE MENU
          </button>

          <button
            onClick={onScrollToVisit}
            className="px-9 py-4 border-2 border-[#38BDF8]/40 text-white text-xs font-bold tracking-widest hover:border-[#38BDF8] hover:bg-white/10 transition-colors duration-200 cursor-pointer"
            onMouseEnter={() => onCursorChange?.('explore')}
            onMouseLeave={() => onCursorChange?.('default')}
          >
            VISIT US
          </button>
        </div>

        <p className="text-xs text-[#B5D6EE]/70 mt-12 tracking-widest uppercase font-semibold">
          Indo Japan House, Sector V · Floor 0 · Closes 10 PM
        </p>
      </div>
    </section>
  );
}
