import { useState } from 'react';
import { Star, MessageSquare } from 'lucide-react';
import { REVIEWS_LIST, BRAND_INFO } from '../data/modgeData';

interface ReviewsSectionProps {
  onCursorChange?: (variant: 'default' | 'view' | 'taste' | 'explore' | 'arrow', text?: string) => void;
}

export function ReviewsSection({ onCursorChange }: ReviewsSectionProps) {
  const [activeTheme, setActiveTheme] = useState<string>('All');

  const themes = [
    'All',
    'Cheesecakes',
    'Tiramisu',
    'Matilda Cake',
    'Korean Cheese Bun',
    'Cozy Atmosphere',
  ];

  const filteredReviews = activeTheme === 'All'
    ? REVIEWS_LIST
    : REVIEWS_LIST.filter(r => 
        r.theme.toLowerCase().includes(activeTheme.toLowerCase()) || 
        r.highlightDish.toLowerCase().includes(activeTheme.toLowerCase())
      );

  return (
    <section id="reviews" className="py-24 md:py-32 bg-[#F0F6FB] relative overflow-hidden border-t border-[#B5D6EE]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top Header & Big Score Callout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-12 mb-12 border-b border-[#B5D6EE]">
          
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#0284C7] uppercase mb-4">
              <span>Customer Sentiments · On D Go by Modge</span>
              <span>·</span>
              <span className="font-bengali-script">গ্রাহকের ভালোবাসা</span>
            </div>

            <div className="flex items-baseline gap-4 mb-2">
              <span className="font-editorial text-6xl sm:text-7xl md:text-8xl font-normal text-[#0F2942] tracking-tight">
                {BRAND_INFO.rating}
              </span>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-[#0284C7]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="#0284C7" stroke="#0284C7" />
                  ))}
                </div>
                <span className="text-xs uppercase tracking-widest text-[#2A5D88] mt-1 font-mono font-bold">
                  VERIFIED PATRONS
                </span>
              </div>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#0F2942] font-normal tracking-tight">
              {BRAND_INFO.reviewsCount} PEOPLE HAVE SOMETHING TO SAY
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <p className="text-sm text-[#1E3A56] leading-relaxed font-normal">
              Based on authentic feedback across Sector V food lovers, tech professionals, and celebration seekers visiting <strong className="font-bold text-[#0F2942]">On D Go by Modge</strong>.
            </p>

            {/* Filter by Recurring Review Themes */}
            <div className="flex flex-wrap gap-2 pt-2">
              {themes.map((theme) => (
                <button
                  key={theme}
                  onClick={() => setActiveTheme(theme)}
                  className={`px-3 py-1.5 text-xs font-bold transition-colors cursor-pointer border ${
                    activeTheme === theme
                      ? 'bg-[#0F2942] text-white border-[#0F2942]'
                      : 'bg-white text-[#10304D] border-[#B5D6EE] hover:border-[#0284C7]'
                  }`}
                  onMouseEnter={() => onCursorChange?.('view')}
                  onMouseLeave={() => onCursorChange?.('default')}
                >
                  {theme}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Vertically Stacked Editorial Review Cards */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {filteredReviews.map((rev, index) => (
            <div
              key={rev.id}
              className="bg-[#E2EFF8] border-2 border-[#B5D6EE] p-8 sm:p-10 transition-all duration-300 hover:border-[#0284C7] hover:bg-white group shadow-sm"
              onMouseEnter={() => onCursorChange?.('view')}
              onMouseLeave={() => onCursorChange?.('default')}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#0284C7] font-bold">
                    0{index + 1} — THEME: {rev.theme}
                  </span>
                  <div className="flex items-center gap-1.5 mt-1 text-[#0284C7]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill={i < Math.floor(rev.rating) ? "#0284C7" : "none"} stroke="#0284C7" />
                    ))}
                  </div>
                </div>

                <div className="text-xs text-[#2A5D88] flex items-center gap-2">
                  <span className="font-bold text-[#0F2942]">{rev.author}</span>
                  <span>·</span>
                  <span>{rev.timeAgo}</span>
                </div>
              </div>

              <blockquote className="font-editorial text-xl sm:text-2xl text-[#0F2942] leading-relaxed font-normal mb-6">
                "{rev.quote}"
              </blockquote>

              <div className="flex items-center justify-between pt-4 border-t border-[#B5D6EE] text-xs">
                <div className="flex items-center gap-2 text-[#1E3A56]">
                  <span className="text-[#0284C7] font-bold uppercase tracking-wider text-[10px]">
                    Featured Delight:
                  </span>
                  <span className="font-bold">{rev.highlightDish}</span>
                </div>

                <span className="text-[11px] text-[#2A5D88] italic">
                  Indo Japan House, Kolkata
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
