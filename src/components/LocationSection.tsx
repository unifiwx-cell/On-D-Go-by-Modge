import { MapPin, Phone, Clock, Navigation, Calendar, ExternalLink } from 'lucide-react';
import { BRAND_INFO } from '../data/modgeData';

interface LocationSectionProps {
  onOpenReservation: () => void;
  onCursorChange?: (variant: 'default' | 'view' | 'taste' | 'explore' | 'arrow', text?: string) => void;
}

export function LocationSection({ onOpenReservation, onCursorChange }: LocationSectionProps) {
  const handleCall = () => {
    window.location.href = `tel:${BRAND_INFO.phoneClean}`;
  };

  const handleDirections = () => {
    window.open(BRAND_INFO.location.mapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="location" className="py-24 md:py-32 bg-[#EAF3FA] relative overflow-hidden border-t border-[#B5D6EE]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#0284C7] uppercase mb-3">
            <span>Find On D Go by Modge</span>
            <span>·</span>
            <span className="font-bengali-script">ঠিকানা ও যোগাযোগ</span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#0F2942] font-normal tracking-tight mb-4">
            COME FIND US.
          </h2>

          <p className="text-sm sm:text-base text-[#1E3A56] leading-relaxed font-normal">
            Located on Floor 0 of Indo Japan House in the heart of Sector V, Bidhannagar. A quiet sanctuary for serious desserts and slow coffee at <strong className="font-bold text-[#0F2942]">On D Go by Modge</strong>.
          </p>
        </div>

        {/* Location Grid: Details & Stylized Map Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Details Panel */}
          <div className="lg:col-span-6 bg-white border-2 border-[#B5D6EE] p-8 sm:p-12 flex flex-col justify-between shadow-md">
            <div className="space-y-8">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-[#E0EFF8] text-[#0284C7] flex items-center justify-center shrink-0 mt-1">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-editorial text-2xl font-bold text-[#0F2942]">
                    {BRAND_INFO.location.building}
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-[#0284C7] font-bold mt-1">
                    {BRAND_INFO.location.floor}
                  </p>
                  <p className="text-sm text-[#1E3A56] mt-1 font-medium">
                    {BRAND_INFO.location.area}
                  </p>
                  <p className="text-sm text-[#1E3A56] font-medium">
                    {BRAND_INFO.location.city}
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-[#E0EFF8] text-[#0284C7] flex items-center justify-center shrink-0 mt-1">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-editorial text-xl font-bold text-[#0F2942]">
                    Opening Hours
                  </h4>
                  <p className="text-sm font-bold text-[#0F2942] mt-1 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Open Daily · Closes 10:00 PM</span>
                  </p>
                  <p className="text-xs text-[#2A5D88] mt-1 font-medium">
                    Services: Dine-in · Takeaway · Table Reservation
                  </p>
                </div>
              </div>

              {/* Phone & Price */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-[#E0EFF8] text-[#0284C7] flex items-center justify-center shrink-0 mt-1">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-editorial text-xl font-bold text-[#0F2942]">
                    Contact & Spend
                  </h4>
                  <a
                    href={`tel:${BRAND_INFO.phoneClean}`}
                    className="text-sm font-bold text-[#0284C7] hover:underline block mt-1"
                  >
                    {BRAND_INFO.phone}
                  </a>
                  <p className="text-xs text-[#2A5D88] mt-1 font-medium">
                    Typical spend: {BRAND_INFO.priceRange}
                  </p>
                </div>
              </div>

            </div>

            {/* Direct Action Buttons */}
            <div className="pt-8 mt-8 border-t border-[#B5D6EE] flex flex-wrap gap-3">
              <button
                onClick={handleDirections}
                className="px-5 py-3 bg-[#0F2942] text-white text-xs font-bold tracking-wider hover:bg-[#0284C7] transition-colors cursor-pointer flex items-center gap-2 shadow-sm"
                onMouseEnter={() => onCursorChange?.('arrow')}
                onMouseLeave={() => onCursorChange?.('default')}
              >
                <Navigation size={14} />
                <span>GET DIRECTIONS</span>
              </button>

              <button
                onClick={handleCall}
                className="px-5 py-3 border-2 border-[#B5D6EE] bg-white text-[#0F2942] text-xs font-bold tracking-wider hover:border-[#0284C7] hover:bg-[#E0EFF8] transition-colors cursor-pointer flex items-center gap-2"
              >
                <Phone size={14} />
                <span>CALL US</span>
              </button>

              <button
                onClick={onOpenReservation}
                className="px-5 py-3 bg-[#0284C7] text-white text-xs font-bold tracking-wider hover:bg-[#0369A1] transition-colors cursor-pointer flex items-center gap-2 shadow-sm"
                onMouseEnter={() => onCursorChange?.('arrow')}
                onMouseLeave={() => onCursorChange?.('default')}
              >
                <Calendar size={14} />
                <span>RESERVE A TABLE</span>
              </button>
            </div>

          </div>

          {/* Right Visually Integrated Map Preview */}
          <div className="lg:col-span-6 bg-[#0F2942] text-white p-8 sm:p-10 flex flex-col justify-between border-2 border-[#0F2942] shadow-xl relative overflow-hidden">
            {/* Background Map Graphic Styling */}
            <div className="absolute inset-0 opacity-15 pointer-events-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E0EFF8" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between text-xs text-[#B5D6EE] font-mono">
                <span>ON D GO BY MODGE · SECTOR V</span>
                <span>22.5765° N, 88.4326° E</span>
              </div>

              <h4 className="font-editorial text-3xl font-bold text-white">
                Sector V Landmark Guide
              </h4>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-[#E0EFF8]/90">
                <div className="p-3 bg-white/10 border border-white/15">
                  <p className="font-bold text-white">📍 Landmark Address</p>
                  <p className="text-xs text-[#B5D6EE] mt-0.5">
                    Indo Japan Horological Pvt Ltd ground floor, EP Block, Sector V.
                  </p>
                </div>

                <div className="p-3 bg-white/10 border border-white/15">
                  <p className="font-bold text-white">🚇 Nearest Transit</p>
                  <p className="text-xs text-[#B5D6EE] mt-0.5">
                    Salt Lake Sector V Metro & Karunamoyee Hub (~5 mins ride).
                  </p>
                </div>

                <div className="p-3 bg-white/10 border border-white/15">
                  <p className="font-bold text-white">🚗 Parking & Access</p>
                  <p className="text-xs text-[#B5D6EE] mt-0.5">
                    Dedicated visitor bay access and hassle-free pickup counter on Floor 0.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-8 mt-6 border-t border-white/10 flex items-center justify-between">
              <span className="font-editorial italic text-base text-[#B5D6EE]">
                "Follow the scent of chocolate and espresso"
              </span>

              <button
                onClick={handleDirections}
                className="text-xs text-[#38BDF8] hover:underline flex items-center gap-1 font-bold tracking-wider cursor-pointer"
              >
                <span>OPEN GOOGLE MAPS</span>
                <ExternalLink size={12} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
