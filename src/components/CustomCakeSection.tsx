import { Gift, Calendar, Sparkles, HeartHandshake } from 'lucide-react';
import { BRAND_INFO } from '../data/modgeData';

interface CustomCakeSectionProps {
  onOpenCustomModal: () => void;
  onCursorChange?: (variant: 'default' | 'view' | 'taste' | 'explore' | 'arrow', text?: string) => void;
}

export function CustomCakeSection({ onOpenCustomModal, onCursorChange }: CustomCakeSectionProps) {
  const steps = [
    {
      num: '01',
      title: 'TELL US',
      desc: 'Share your occasion, preferred flavor palette, dietary preferences, and aesthetic vision.',
    },
    {
      num: '02',
      title: 'DESIGN IT',
      desc: 'Collaborate with our pastry kitchen on layers, finishes, berry toppings, and custom message plaques.',
    },
    {
      num: '03',
      title: 'WE BAKE',
      desc: 'Handcrafted fresh on the morning of your event using premium couverture chocolate & real fruit compotes.',
    },
    {
      num: '04',
      title: 'YOU CELEBRATE',
      desc: 'Collect from Indo Japan House or arrange pickup in Sector V for an unforgettable celebration centerpiece.',
    },
  ];

  return (
    <section id="custom-cakes" className="py-24 bg-[#EAF3FA] relative overflow-hidden border-t border-[#B5D6EE]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#0284C7] uppercase mb-3">
            <span>Bespoke Celebrations · On D Go by Modge</span>
            <span>·</span>
            <span className="font-bengali-script">কাস্টম কেক</span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#0F2942] font-normal tracking-tight mb-6">
            MAKE IT YOURS.
          </h2>

          <p className="text-base sm:text-lg text-[#1E3A56] leading-relaxed font-normal">
            Planning a birthday, celebration or simply craving something personal? Explore custom cake possibilities with the <strong className="font-bold text-[#0F2942]">On D Go by Modge</strong> team.
          </p>
        </div>

        {/* 4-Step Process Visual Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white border-2 border-[#B5D6EE] p-6 md:p-8 flex flex-col justify-between group hover:border-[#0284C7] transition-all shadow-xs"
            >
              <div>
                <span className="font-mono text-xs font-bold text-[#0284C7] tracking-widest block mb-4">
                  {step.num} — PROCESS
                </span>
                <h3 className="font-editorial text-2xl font-bold text-[#0F2942] mb-3">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#1E3A56] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="w-8 h-[2px] bg-[#B5D6EE] group-hover:bg-[#0284C7] group-hover:w-16 transition-all mt-6"></div>
            </div>
          ))}
        </div>

        {/* Customer Proof & CTA Card */}
        <div className="bg-[#E0EFF8] border-2 border-[#B5D6EE] p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-md">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2 text-xs text-[#0284C7] font-bold tracking-wider uppercase">
              <Sparkles size={14} />
              <span>Customer Favorite: Customized Blueberry Cakes at On D Go by Modge</span>
            </div>
            <p className="font-editorial text-2xl sm:text-3xl text-[#0F2942] font-bold leading-tight">
              "Ordered the customized blueberry cheesecake for our team milestone — devoured within minutes."
            </p>
            <p className="text-xs text-[#2A5D88] font-medium">
              Fresh bakes available in 0.5kg, 1kg & multi-tier celebration sizes at Indo Japan House.
            </p>
          </div>

          <button
            onClick={onOpenCustomModal}
            className="px-8 py-4 bg-[#0F2942] text-white text-xs font-bold tracking-widest hover:bg-[#0284C7] transition-colors duration-200 cursor-pointer shadow-md shrink-0 whitespace-nowrap"
            onMouseEnter={() => onCursorChange?.('arrow')}
            onMouseLeave={() => onCursorChange?.('default')}
          >
            ENQUIRE ABOUT A CUSTOM CAKE
          </button>
        </div>

      </div>
    </section>
  );
}
