import { useState } from 'react';
import { Menu, X, Calendar, Phone, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../data/modgeData';

interface NavbarProps {
  onOpenReservation: () => void;
  onOpenMenu: () => void;
  onCursorChange?: (variant: 'default' | 'view' | 'taste' | 'explore' | 'arrow', text?: string) => void;
}

export function Navbar({ onOpenReservation, onOpenMenu, onCursorChange }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'HOME', href: '#hero' },
    { label: 'MENU', href: '#desserts', onClick: onOpenMenu },
    { label: 'ABOUT', href: '#intro' },
    { label: 'CAKES', href: '#custom-cakes' },
    { label: 'REVIEWS', href: '#reviews' },
    { label: 'VISIT', href: '#location' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, onClick?: () => void) => {
    if (onClick) {
      e.preventDefault();
      onClick();
      setMobileMenuOpen(false);
      return;
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Dedicated Separate Header with Sky Blue Theme */}
      <header className="sticky top-0 left-0 right-0 z-40 bg-[#E0EFF8] border-b border-[#B5D6EE] shadow-[0_4px_16px_rgba(14,44,72,0.08)] py-3.5 transition-all">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Zone 1: Brand Zone - Clear Name: On D Go by Modge */}
          <a
            href="#hero"
            className="flex items-baseline gap-2.5 group"
            onMouseEnter={() => onCursorChange?.('explore')}
            onMouseLeave={() => onCursorChange?.('default')}
          >
            <div className="flex flex-col">
              <span className="font-editorial text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-[#0F2942] transition-colors group-hover:text-[#0284C7] leading-tight">
                On D Go <span className="font-light italic text-[#0284C7]">by Modge</span>
              </span>
              <span className="font-bengali-script text-[11px] font-bold text-[#2A5D88] leading-none mt-0.5">
                অন ডি গো বাই মধ্যে
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Bold, Sky Blue Theme) */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href, item.onClick)}
                className="text-xs font-bold tracking-widest text-[#10304D] hover:text-[#0284C7] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#0284C7] hover:after:w-full after:transition-all after:duration-300"
                onMouseEnter={() => onCursorChange?.('view')}
                onMouseLeave={() => onCursorChange?.('default')}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenReservation}
              className="px-5 py-2.5 text-xs font-bold tracking-wider text-white bg-[#0F2942] hover:bg-[#0284C7] transition-colors duration-200 cursor-pointer whitespace-nowrap shadow-sm"
              onMouseEnter={() => onCursorChange?.('arrow')}
              onMouseLeave={() => onCursorChange?.('default')}
            >
              ORDER / RESERVE
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#0F2942] hover:text-[#0284C7] transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} className="stroke-[2.5]" /> : <Menu size={22} className="stroke-[2.5]" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Styled in Sky Blue Palette) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#E0EFF8] flex flex-col justify-between p-8 pt-24 md:hidden animate-in fade-in duration-200">
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#B5D6EE]">
              <div>
                <span className="font-editorial text-2xl font-extrabold text-[#0F2942] block">
                  On D Go by Modge
                </span>
                <span className="font-bengali-script text-xs font-bold text-[#2A5D88]">
                  {BRAND_INFO.bengaliName}
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 text-[#0F2942]"
              >
                <X size={20} />
              </button>
            </div>
            
            <nav className="flex flex-col space-y-4 pt-2">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href, item.onClick)}
                  className="font-editorial text-3xl font-bold text-[#0F2942] hover:text-[#0284C7] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-8 border-t border-[#B5D6EE] space-y-4">
            <div className="flex items-center gap-3 text-xs font-bold text-[#10304D]">
              <MapPin size={16} className="text-[#0284C7]" />
              <span>Indo Japan House, Sector V, Kolkata</span>
            </div>
            <div className="flex items-center gap-3 text-xs font-bold text-[#10304D]">
              <Phone size={16} className="text-[#0284C7]" />
              <a href={`tel:${BRAND_INFO.phoneClean}`} className="hover:underline">
                {BRAND_INFO.phone}
              </a>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full py-3.5 bg-[#0F2942] text-white text-xs font-bold tracking-widest flex items-center justify-center gap-2 hover:bg-[#0284C7] transition-colors"
            >
              <Calendar size={16} />
              RESERVE A TABLE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
