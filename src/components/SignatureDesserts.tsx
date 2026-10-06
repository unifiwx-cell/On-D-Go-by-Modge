import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Plus } from 'lucide-react';
import { SIGNATURE_DESSERTS, DessertItem } from '../data/modgeData';

interface SignatureDessertsProps {
  onSelectItem: (item: DessertItem) => void;
  onCursorChange?: (variant: 'default' | 'view' | 'taste' | 'explore' | 'arrow', text?: string) => void;
}

export function SignatureDesserts({ onSelectItem, onCursorChange }: SignatureDessertsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    const validIndex = Math.max(0, Math.min(index, SIGNATURE_DESSERTS.length - 1));
    setActiveIndex(validIndex);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const child = container.children[validIndex] as HTMLElement;
      if (child) {
        container.scrollTo({
          left: child.offsetLeft - container.offsetLeft,
          behavior: 'smooth',
        });
      }
    }
  };

  const handlePrev = () => scrollToIndex(activeIndex - 1);
  const handleNext = () => scrollToIndex(activeIndex + 1);

  return (
    <section id="desserts" className="py-24 bg-[#F0F6FB] relative overflow-hidden border-t border-[#B5D6EE]">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#B5D6EE]">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#0284C7] uppercase mb-2">
              <span>On D Go by Modge · Crafted Atelier</span>
              <span>·</span>
              <span className="font-bengali-script">সিগনেচার মিষ্টান্ন</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#0F2942] font-normal tracking-tight">
              THE SWEET SIDE
            </h2>
          </div>

          {/* Gallery Stepper & Navigation Buttons */}
          <div className="flex items-center gap-6">
            <div className="text-sm font-mono tracking-widest text-[#2A5D88] tabular-nums">
              <span className="text-[#0F2942] font-bold text-base">
                {String(activeIndex + 1).padStart(2, '0')}
              </span>
              <span className="mx-1 text-[#2A5D88]/50">/</span>
              <span>{String(SIGNATURE_DESSERTS.length).padStart(2, '0')}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                disabled={activeIndex === 0}
                className="w-11 h-11 border-2 border-[#B5D6EE] bg-white flex items-center justify-center text-[#0F2942] hover:bg-[#0284C7] hover:border-[#0284C7] hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors duration-200 cursor-pointer shadow-xs"
                aria-label="Previous dessert"
                onMouseEnter={() => onCursorChange?.('arrow')}
                onMouseLeave={() => onCursorChange?.('default')}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                disabled={activeIndex === SIGNATURE_DESSERTS.length - 1}
                className="w-11 h-11 border-2 border-[#B5D6EE] bg-white flex items-center justify-center text-[#0F2942] hover:bg-[#0284C7] hover:border-[#0284C7] hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors duration-200 cursor-pointer shadow-xs"
                aria-label="Next dessert"
                onMouseEnter={() => onCursorChange?.('arrow')}
                onMouseLeave={() => onCursorChange?.('default')}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Scrolling Gallery */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none px-6 md:px-12 gap-8 md:gap-12 pb-8 max-w-[100vw]"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {SIGNATURE_DESSERTS.map((dessert, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={dessert.id}
              className={`snap-center shrink-0 w-[85vw] sm:w-[70vw] md:w-[60vw] lg:w-[48vw] transition-opacity duration-300 ${
                isActive ? 'opacity-100' : 'opacity-70 hover:opacity-95'
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div
                className="bg-[#E2EFF8] border-2 border-[#B5D6EE] p-6 md:p-8 flex flex-col justify-between h-full group shadow-md hover:border-[#0284C7] transition-all"
                onMouseEnter={() => onCursorChange?.('taste', 'TASTE')}
                onMouseLeave={() => onCursorChange?.('default')}
              >
                {/* Top Meta: Number & Category */}
                <div className="flex items-center justify-between text-xs text-[#2A5D88] mb-6">
                  <span className="font-mono tracking-widest text-[#0284C7] font-bold">
                    {dessert.number}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="tracking-wider uppercase text-[11px] font-bold">
                      {dessert.category}
                    </span>
                    <span>·</span>
                    <span className="font-bengali-script font-bold">{dessert.bengaliName}</span>
                  </div>
                </div>

                {/* Hero Dish Image */}
                <div className="relative aspect-16/10 sm:aspect-16/9 overflow-hidden bg-[#0F2942]/5 mb-6 shadow-sm border border-[#B5D6EE]">
                  <img
                    src={dessert.image}
                    alt={dessert.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 bg-[#E0EFF8]/95 backdrop-blur-xs px-2.5 py-1 text-xs font-mono font-bold text-[#0F2942] border border-[#B5D6EE]">
                    ₹{dessert.price}
                  </div>
                </div>

                {/* Dish Title & Description */}
                <div className="space-y-3">
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#0F2942] group-hover:text-[#0284C7] transition-colors">
                    {dessert.name}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#0284C7]">
                    {dessert.subtitle}
                  </p>
                  <p className="text-sm text-[#1E3A56] leading-relaxed line-clamp-3">
                    {dessert.description}
                  </p>
                </div>

                {/* Tasting Notes & Action */}
                <div className="mt-6 pt-4 border-t border-[#B5D6EE] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-[11px] text-[#2A5D88] font-medium">
                    <span className="text-[#0284C7] font-bold">Notes: </span>
                    <span>{dessert.notes}</span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectItem(dessert);
                    }}
                    className="px-4 py-2 bg-[#0F2942] text-white text-xs font-bold tracking-wider hover:bg-[#0284C7] transition-colors duration-200 cursor-pointer shrink-0 self-start sm:self-auto flex items-center gap-1.5 shadow-xs"
                  >
                    <Plus size={14} />
                    <span>TASTE / INQUIRE</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick category jump pills */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8 flex flex-wrap items-center justify-center gap-2">
        {SIGNATURE_DESSERTS.map((d, i) => (
          <button
            key={d.id}
            onClick={() => scrollToIndex(i)}
            className={`px-3 py-1.5 text-xs font-bold transition-all cursor-pointer border ${
              i === activeIndex
                ? 'bg-[#0F2942] text-white border-[#0F2942]'
                : 'bg-white/80 text-[#10304D] border-[#B5D6EE] hover:border-[#0284C7]'
            }`}
          >
            {d.name.split(' ')[0]}
          </button>
        ))}
      </div>
    </section>
  );
}
