export function SocialProofMarquee() {
  const items = [
    'CHEESECAKE',
    'TIRAMISU',
    'MATILDA CAKE',
    'SPECIALTY COFFEE',
    'KOREAN CHEESE BUN',
    'FUDGY BROWNIES',
  ];

  return (
    <div className="py-8 bg-[#0B2135] text-white border-y border-[#38BDF8]/20 overflow-hidden select-none">
      {/* Row 1: Forward Marquee */}
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {[...items, ...items, ...items, ...items].map((word, i) => (
          <div key={i} className="inline-flex items-center mx-4 md:mx-8">
            <span className="font-editorial text-2xl sm:text-3xl md:text-4xl font-normal tracking-widest text-white hover:text-[#38BDF8] transition-colors">
              {word}
            </span>
            <span className="mx-6 md:mx-10 text-xs text-[#38BDF8] font-serif">
              ✦
            </span>
          </div>
        ))}
      </div>

      {/* Row 2: Reverse Marquee with Bengali and On D Go by Modge */}
      <div className="animate-marquee-reverse whitespace-nowrap flex items-center mt-3 opacity-80">
        {[
          'ON D GO BY MODGE',
          'অন ডি গো বাই মধ্যে',
          'SECTOR V · KOLKATA',
          'INDO JAPAN HOUSE',
          'SLOW ROAST COFFEE',
          'ARTISANAL PATISSERIE',
        ].concat([
          'ON D GO BY MODGE',
          'অন ডি গো বাই মধ্যে',
          'SECTOR V · KOLKATA',
          'INDO JAPAN HOUSE',
          'SLOW ROAST COFFEE',
          'ARTISANAL PATISSERIE',
        ]).map((text, i) => (
          <div key={i} className="inline-flex items-center mx-4 md:mx-8">
            <span className="font-serif italic text-sm sm:text-base tracking-widest text-[#B5D6EE]">
              {text}
            </span>
            <span className="mx-6 md:mx-10 text-[10px] text-[#38BDF8]">
              ·
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
