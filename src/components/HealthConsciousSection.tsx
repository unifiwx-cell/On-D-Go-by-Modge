import { Leaf, Sparkles, ShieldCheck } from 'lucide-react';

export function HealthConsciousSection() {
  const options = [
    {
      title: 'VEGETARIAN OPTIONS',
      subtitle: 'Eggless bakes & plant-forward creams',
      description: 'Our core dessert menu at On D Go by Modge, including signature cheesecakes and brownies, is prepared using premium vegetarian ingredients and eggless recipes.',
      icon: Leaf,
    },
    {
      title: 'SUGAR-FREE OPTIONS',
      subtitle: 'Mindfully sweetened delights',
      description: 'Select chocolate pots, parfaits, and cold brews crafted with organic monk fruit and natural stevia for delicate sweetness without sugar spikes.',
      icon: Sparkles,
    },
    {
      title: 'GLUTEN-FREE OPTIONS',
      subtitle: 'Flourless dark bakes',
      description: 'Specially crafted almond meal fudgy dark chocolate brownies and chocolate mousse cups prepared without wheat flour.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-20 bg-[#EAF3FA] border-y border-[#B5D6EE]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-bold tracking-widest text-[#0284C7] uppercase mb-2">
            On D Go by Modge · Inclusive Indulgence
          </p>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#0F2942] font-normal tracking-tight">
            SOMETHING FOR EVERY SWEET TOOTH
          </h2>
          <p className="text-xs sm:text-sm text-[#1E3A56] mt-3 font-normal">
            Everyone deserves a sweet moment. Inform our team of your dietary preferences upon arrival.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {options.map((opt) => {
            const Icon = opt.icon;
            return (
              <div
                key={opt.title}
                className="bg-white border-2 border-[#B5D6EE] p-8 flex flex-col justify-between group hover:border-[#0284C7] transition-all shadow-sm"
              >
                <div>
                  <div className="w-11 h-11 rounded-full bg-[#E0EFF8] text-[#0284C7] flex items-center justify-center mb-6">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-editorial text-xl font-bold text-[#0F2942] mb-1">
                    {opt.title}
                  </h3>
                  <p className="text-xs font-bold text-[#0284C7] uppercase tracking-wider mb-4">
                    {opt.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#1E3A56] leading-relaxed">
                    {opt.description}
                  </p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-[#B5D6EE] text-[11px] text-[#2A5D88] font-medium">
                  Ask server for daily baked selections at On D Go by Modge
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
