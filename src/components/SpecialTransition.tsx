import { useEffect, useRef, useState } from 'react';
import { MODGE_IMAGES } from '../data/modgeData';

export function SpecialTransition() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress through this transition block
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const total = windowHeight + rect.height;
        const current = windowHeight - rect.top;
        const calculated = Math.min(Math.max(current / total, 0), 1);
        setProgress(calculated);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scale down from 1.3 to 0.95 as progress moves
  const scale = 1.3 - progress * 0.35;
  const imageOpacity = Math.min(progress * 1.4, 0.85);

  return (
    <div
      ref={containerRef}
      className="relative min-h-[60vh] md:min-h-[75vh] bg-[#150D0C] text-[#FAF7F2] flex items-center justify-center overflow-hidden py-24 select-none"
    >
      {/* Background Subtle Grain */}
      <div className="absolute inset-0 bg-grain-dark opacity-40 pointer-events-none"></div>

      {/* Emerging Dessert Silhouette / Glow */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300"
        style={{ opacity: imageOpacity }}
      >
        <div className="w-[320px] sm:w-[480px] md:w-[600px] aspect-square rounded-full overflow-hidden blur-[1px] opacity-40 mix-blend-screen scale-110">
          <img
            src={MODGE_IMAGES.matilda}
            alt="Modge dessert emerging"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Atmospheric Vignette */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#150D0C]/70 to-[#150D0C] pointer-events-none"></div>

      {/* Center Cinematic Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p className="text-xs sm:text-sm font-semibold tracking-[0.4em] uppercase text-[#DDD2C5]/70 mb-4">
          CHAPTER 01 · THE SWEET SIDE
        </p>

        {/* Giant Dynamic Word "SWEET" */}
        <h2
          className="font-editorial text-[18vw] sm:text-[15vw] md:text-[13vw] font-bold text-[#FAF7F2] tracking-tighter leading-none transition-transform duration-100 ease-out will-change-transform drop-shadow-2xl"
          style={{ transform: `scale(${scale})` }}
        >
          SWEET
        </h2>

        <p className="font-bengali-script text-lg sm:text-xl text-[#DDD2C5]/80 mt-2 tracking-widest">
          মিষ্টি মুহূর্তের খোঁজে
        </p>

        <p className="text-xs sm:text-sm text-[#DDD2C5]/60 max-w-md mx-auto mt-6 tracking-wider font-light uppercase">
          SLOW-CRAFTED CAKES, VELVET CHEESECAKES & INDULGENT BAKES
        </p>
      </div>
    </div>
  );
}
