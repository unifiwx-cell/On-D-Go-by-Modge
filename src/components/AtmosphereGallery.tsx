import { ATMOSPHERE_MOMENTS, MODGE_IMAGES } from '../data/modgeData';

interface AtmosphereGalleryProps {
  onCursorChange?: (variant: 'default' | 'view' | 'taste' | 'explore' | 'arrow', text?: string) => void;
}

export function AtmosphereGallery({ onCursorChange }: AtmosphereGalleryProps) {
  return (
    <section className="py-28 md:py-36 bg-[#F0F6FB] relative overflow-hidden border-t border-[#B5D6EE]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#B5D6EE]">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#0284C7] uppercase mb-3">
              <span>On D Go by Modge · Indo Japan House, Sector V</span>
              <span>·</span>
              <span className="font-bengali-script">শান্ত পরিবেশ</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#0F2942] font-normal tracking-tight">
              STAY A WHILE.
            </h2>
          </div>

          <p className="text-sm text-[#1E3A56] max-w-sm font-normal">
            A gentle haven away from the IT corridor pulse. Soft jazz, warm pendant lights, and the intoxicating scent of roasted beans at On D Go by Modge.
          </p>
        </div>
      </div>

      {/* Cinematic Moments Grid with Editorial Annotations */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ATMOSPHERE_MOMENTS.map((moment, idx) => {
            // Visual association
            const images = [
              MODGE_IMAGES.coffee,
              MODGE_IMAGES.hero,
              MODGE_IMAGES.koreanBun,
              MODGE_IMAGES.cheesecake,
            ];

            return (
              <div
                key={moment.title}
                className="group relative flex flex-col justify-between bg-[#E2EFF8] border-2 border-[#B5D6EE] overflow-hidden shadow-md hover:border-[#0284C7] transition-all"
                onMouseEnter={() => onCursorChange?.('explore')}
                onMouseLeave={() => onCursorChange?.('default')}
              >
                {/* Image */}
                <div className="relative aspect-4/3 sm:aspect-1/1 overflow-hidden bg-[#0F2942]/5">
                  <img
                    src={images[idx % images.length]}
                    alt={moment.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2942]/60 via-transparent to-transparent opacity-50"></div>
                  
                  {/* Small Editorial Annotation Badge */}
                  <div className="absolute top-3 left-3 bg-[#0F2942] px-2.5 py-1 text-[10px] font-bold tracking-widest text-[#38BDF8] uppercase shadow-xs">
                    {moment.title}
                  </div>
                </div>

                {/* Narrative Details */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[10px] font-mono tracking-wider text-[#2A5D88] block mb-1 font-bold">
                      {moment.subtitle}
                    </span>
                    <h3 className="font-editorial text-xl font-bold text-[#0F2942] mb-2">
                      {moment.tag}
                    </h3>
                    <p className="text-xs text-[#1E3A56] leading-relaxed">
                      {moment.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-[#B5D6EE] flex items-center justify-between text-[11px] text-[#0284C7] font-bold">
                    <span>Dine-in · Takeaway</span>
                    <span>Floor 0</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
