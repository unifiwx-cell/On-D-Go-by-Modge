import { useEffect, useState } from 'react';

interface CustomCursorProps {
  cursorText?: string;
  cursorVariant?: 'default' | 'view' | 'taste' | 'explore' | 'arrow';
}

export function CustomCursor({ cursorText, cursorVariant = 'default' }: CustomCursorProps) {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [visible]);

  if (isTouchDevice || !visible) return null;

  const hasLabel = Boolean(cursorText || cursorVariant !== 'default');
  const label = cursorText || (cursorVariant === 'default' ? '' : cursorVariant.toUpperCase());

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-50 transition-transform duration-75 ease-out will-change-transform"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
      }}
    >
      <div
        className={`-translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full transition-all duration-200 ${
          hasLabel
            ? 'h-16 w-16 bg-[#0F2942]/90 text-white backdrop-blur-md shadow-xl border border-[#38BDF8]/40'
            : 'h-4 w-4 bg-[#0284C7] opacity-80'
        }`}
      >
        {hasLabel && (
          <span className="text-[10px] font-semibold tracking-widest uppercase">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
