import { Heart, Sparkles, Clock, Compass } from 'lucide-react';
import { BRAND_INFO, MODGE_IMAGES } from '../data/modgeData';

interface IntroProps {
  onCursorChange?: (variant: 'default' | 'view' | 'taste' | 'explore' | 'arrow', text?: string) => void;
}

export function Intro({ onCursorChange }: IntroProps) {
  return (
    <section id="intro" className="py-24 md:py-32 bg-[#EAF3FA] relative overflow-hidden border-t border-[#B5D6EE]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Story */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#0284C7] uppercase mb-6">
              <span>Philosophy</span>
              <span>·</span>
              <span className="font-bengali-script lowercase">আমাদের গল্প</span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#0F2942] font-normal leading-[1.05] tracking-tight mb-8 text-balance">
              A LITTLE PLACE<br />
              <span className="italic text-[#0284C7]">FOR VERY GOOD</span><br />
              THINGS.
            </h2>

            <div className="relative pl-6 border-l-2 border-[#0284C7]/40 mb-8">
              <p className="text-base sm:text-lg text-[#1E3A56] leading-relaxed font-normal max-w-xl">
                A cozy coffee and dessert destination in Sector V, Kolkata. At <strong className="font-bold text-[#0F2942]">On D Go by Modge</strong>, we serve indulgent cakes, cheesecakes, tiramisu, coffee, and thoughtfully crafted treats.
              </p>

              {/* Decorative Handwritten Note Beside It */}
              <div className="mt-4 inline-block">
                <span className="font-note text-2xl text-[#0284C7] font-bold block -rotate-1">
                  ~ made for sweet cravings ~
                </span>
              </div>
            </div>

            {/* Quiet Craft Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-[#B5D6EE]">
              <div>
                <p className="text-[11px] font-bold tracking-widest uppercase text-[#0284C7]">Baking Craft</p>
                <p className="text-sm text-[#0F2942] font-semibold mt-1">Small-batch daily fresh</p>
              </div>
              <div>
                <p className="text-[11px] font-bold tracking-widest uppercase text-[#0284C7]">Specialty Brews</p>
                <p className="text-sm text-[#0F2942] font-semibold mt-1">Single-origin Indian beans</p>
              </div>
              <div>
                <p className="text-[11px] font-bold tracking-widest uppercase text-[#0284C7]">Custom Cakes</p>
                <p className="text-sm text-[#0F2942] font-semibold mt-1">Celebrations & birthdays</p>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Aesthetic Still-Life Collage */}
          <div className="lg:col-span-5 relative">
            <div
              className="relative p-3 bg-white shadow-xl border border-[#B5D6EE] max-w-md mx-auto group"
              onMouseEnter={() => onCursorChange?.('explore')}
              onMouseLeave={() => onCursorChange?.('default')}
            >
              <div className="aspect-4/3 overflow-hidden bg-[#0F2942]/5">
                <img
                  src={MODGE_IMAGES.koreanBun}
                  alt="Warm pastries and bakery craft at On D Go by Modge"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-4 flex items-center justify-between text-xs text-[#2A5D88] border-t border-[#B5D6EE]/50 mt-2">
                <span className="font-editorial text-sm font-bold text-[#0F2942]">
                  Indo Japan House, Kolkata
                </span>
                <span className="tracking-widest uppercase text-[10px] text-[#0284C7] font-bold">
                  Floor 0 · On D Go by Modge
                </span>
              </div>
            </div>

            {/* Overlapping Mini Card in Sky Blue Navy */}
            <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-[#0F2942] text-white p-4 shadow-2xl max-w-[210px] border border-[#38BDF8]/20 hidden sm:block">
              <span className="text-[10px] uppercase tracking-widest text-[#38BDF8] block mb-1 font-bold">
                Warm Welcome
              </span>
              <p className="font-editorial text-lg leading-snug">
                "Not just desserts, a comforting pause."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
