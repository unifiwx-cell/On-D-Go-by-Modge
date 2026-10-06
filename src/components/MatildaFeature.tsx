import { Sparkles, Flame } from 'lucide-react';
import { MODGE_IMAGES } from '../data/modgeData';

interface MatildaFeatureProps {
  onOrderMatilda: () => void;
  onCursorChange?: (variant: 'default' | 'view' | 'taste' | 'explore' | 'arrow', text?: string) => void;
}

export function MatildaFeature({ onOrderMatilda, onCursorChange }: MatildaFeatureProps) {
  return (
    <section className="relative py-28 md:py-36 bg-[#150D0C] text-[#FAF7F2] overflow-hidden select-none">
      {/* Background radial luxury dark glow */}
      <div className="absolute inset-0 bg-radial from-[#2A1714] via-[#150D0C] to-[#0D0706] opacity-90 pointer-events-none"></div>

      {/* Decorative oversized background typographic motif */}
      <div
        className="absolute -top-12 -left-12 text-[16vw] font-editorial font-bold text-[#FAF7F2]/[0.03] leading-none pointer-events-none tracking-tighter"
        aria-hidden="true"
      >
        MATILDA
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Dramatic Large Typography */}
          <div className="lg:col-span-6 z-20">
            <div className="flex items-center gap-2 text-xs font-bold tracking-[0.3em] uppercase text-[#38BDF8] mb-6">
              <span>On D Go by Modge · Signature Cake</span>
              <span>·</span>
              <span className="font-bengali-script">চকলেট মাহাত্ম্য</span>
            </div>

            <h2 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[0.92] tracking-tight mb-8 text-balance">
              CHOCOLATE<br />
              <span className="italic font-light text-[#E0EFF8]">WITHOUT</span><br />
              <span className="text-[#38BDF8]">APOLOGIES.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#E0EFF8]/85 font-normal leading-relaxed max-w-lg mb-8">
              Inspired by the legendary chocolate feast, our Matilda Cake stands tall with three dense layers of chocolate sponge drenched in fudge ganache that oozes luxuriously with every slice. 
            </p>

            <div className="space-y-4 mb-10 text-xs sm:text-sm text-[#E0EFF8]/75">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8]"></span>
                <span>Crafted with 70% single-origin Belgian dark chocolate</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8]"></span>
                <span>Served gently warmed so the ganache glistens & pours</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8]"></span>
                <span>Portioned generously — perfect for sharing (or not)</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <button
                onClick={onOrderMatilda}
                className="px-8 py-4 bg-[#38BDF8] text-[#0F2942] text-xs font-bold tracking-widest hover:bg-white hover:text-[#0F2942] transition-colors duration-200 cursor-pointer shadow-xl flex items-center gap-2"
                onMouseEnter={() => onCursorChange?.('taste', 'TASTE')}
                onMouseLeave={() => onCursorChange?.('default')}
              >
                <span>TRY THE MATILDA</span>
                <span className="font-mono text-xs opacity-75">· ₹340</span>
              </button>

              <span className="font-note text-2xl text-[#38BDF8] font-bold -rotate-2">
                "Kolkata's most decadent slice"
              </span>
            </div>
          </div>

          {/* Right: Oversized Matilda Cake Image Breaking the Grid */}
          <div className="lg:col-span-6 relative">
            <div
              className="relative lg:-mr-16 lg:scale-105 group"
              onMouseEnter={() => onCursorChange?.('taste', 'DECIPHER')}
              onMouseLeave={() => onCursorChange?.('default')}
            >
              {/* Outer decorative golden frame outline */}
              <div className="absolute -inset-4 border border-[#D4AF37]/30 pointer-events-none rounded-none translate-x-3 translate-y-3"></div>

              {/* Main Image */}
              <div className="relative aspect-4/3 sm:aspect-1/1 lg:aspect-4/3 overflow-hidden shadow-2xl bg-[#0D0706]">
                <img
                  src={MODGE_IMAGES.matilda}
                  alt="Decadent multi-layered Matilda chocolate cake at On D Go by Modge"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Bottom dark gradient fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#150D0C] via-transparent to-transparent opacity-40"></div>
              </div>

              {/* Floating Tasting Badge */}
              <div className="absolute -bottom-6 right-6 sm:right-12 bg-[#2A1714] border border-[#FAF7F2]/10 p-4 shadow-2xl">
                <p className="text-[10px] tracking-widest uppercase text-[#D4AF37] font-semibold">
                  Chef's Signature
                </p>
                <p className="font-editorial text-lg text-[#FAF7F2] font-semibold">
                  The Modge Matilda
                </p>
                <p className="text-xs text-[#DDD2C5]/60 mt-0.5">
                  Available daily by the slice & full cake
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
