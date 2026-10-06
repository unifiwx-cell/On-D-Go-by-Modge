import { BRAND_INFO } from '../data/modgeData';

interface FooterProps {
  onOpenMenu: () => void;
  onOpenReservation: () => void;
  onCursorChange?: (variant: 'default' | 'view' | 'taste' | 'explore' | 'arrow', text?: string) => void;
}

export function Footer({ onOpenMenu, onOpenReservation, onCursorChange }: FooterProps) {
  return (
    <footer className="bg-[#071624] text-white pt-20 pb-12 border-t border-[#38BDF8]/20 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Column - Clearly Highlighted: On D Go by Modge */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="font-editorial text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              On D Go <span className="font-light italic text-[#38BDF8]">by Modge</span>
            </h3>
            <p className="font-bengali-script text-base font-bold text-[#7DD3FC]">
              {BRAND_INFO.bengaliName}
            </p>
            <p className="text-xs text-[#B5D6EE]/80 max-w-sm leading-relaxed mt-4 font-normal">
              Modern dessert atelier & slow-roast coffee boutique in Indo Japan House, Sector V, Kolkata. Celebrating authentic craft, creamy cheesecakes, and sweet moments.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-[11px] font-mono tracking-widest uppercase text-[#38BDF8] mb-4 font-bold">
              NAVIGATION
            </p>
            <ul className="space-y-2 text-xs font-bold tracking-wider text-[#B5D6EE]">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">HOME</a>
              </li>
              <li>
                <button onClick={onOpenMenu} className="hover:text-white transition-colors cursor-pointer text-left">
                  MENU
                </button>
              </li>
              <li>
                <a href="#custom-cakes" className="hover:text-white transition-colors">CAKES</a>
              </li>
              <li>
                <a href="#intro" className="hover:text-white transition-colors">ABOUT</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">REVIEWS</a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">VISIT</a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours Column */}
          <div className="lg:col-span-4 space-y-3 text-xs text-[#B5D6EE]">
            <p className="text-[11px] font-mono tracking-widest uppercase text-[#38BDF8] mb-4 font-bold">
              VISIT ON D GO BY MODGE
            </p>
            <p className="leading-relaxed">
              {BRAND_INFO.location.building},<br />
              {BRAND_INFO.location.area},<br />
              {BRAND_INFO.location.city}
            </p>
            <p className="text-white font-bold pt-2">
              Phone: <a href={`tel:${BRAND_INFO.phoneClean}`} className="hover:underline text-[#38BDF8]">{BRAND_INFO.phone}</a>
            </p>
            <p className="text-[11px] text-[#B5D6EE]/70 font-medium">
              {BRAND_INFO.hours}
            </p>
            
            <div className="pt-3">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-xs uppercase tracking-widest text-[#38BDF8] hover:underline font-bold"
              >
                INSTAGRAM ↗
              </a>
            </div>
          </div>

        </div>

        {/* Final Statement & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B5D6EE]/60">
          <p className="font-editorial text-lg text-white/90 italic">
            SWEET DAYS START HERE AT ON D GO BY MODGE.
          </p>

          <p className="tracking-wider">
            © {new Date().getFullYear()} {BRAND_INFO.name}. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
