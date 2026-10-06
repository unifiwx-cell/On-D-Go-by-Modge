import { useState } from 'react';
import { X, Search, Filter, Plus, Check, ShoppingBag, Sparkles } from 'lucide-react';
import { ALL_MENU_ITEMS, SPECIALTY_DRINKS, DessertItem, DrinkItem } from '../data/modgeData';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReserveTable: () => void;
}

export function MenuModal({ isOpen, onClose, onReserveTable }: MenuModalProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'Vegetarian' | 'Gluten-Free' | 'Sugar-Free'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [tastingTray, setTastingTray] = useState<{ id: string; name: string; price: number }[]>([]);

  if (!isOpen) return null;

  const toggleTrayItem = (item: { id: string; name: string; price: number }) => {
    if (tastingTray.some(t => t.id === item.id)) {
      setTastingTray(tastingTray.filter(t => t.id !== item.id));
    } else {
      setTastingTray([...tastingTray, item]);
    }
  };

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'desserts', label: 'Signature Desserts' },
    { id: 'cheesecakes', label: 'Cheesecakes' },
    { id: 'coffee', label: 'Coffee & Drinks' },
    { id: 'savory', label: 'Savory & Buns' },
  ];

  // Filter items
  const filteredDesserts = ALL_MENU_ITEMS.filter(item => {
    const matchesCategory =
      activeCategory === 'all' ||
      (activeCategory === 'desserts' && item.category.includes('Signature')) ||
      (activeCategory === 'cheesecakes' && item.category.includes('Cheesecake')) ||
      (activeCategory === 'savory' && item.category.includes('Savory'));

    const matchesDietary =
      dietaryFilter === 'all' || item.dietary.includes(dietaryFilter as any);

    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesDietary && matchesSearch;
  });

  const showDrinks = activeCategory === 'all' || activeCategory === 'coffee';
  const filteredDrinks = showDrinks
    ? SPECIALTY_DRINKS.filter(
        d =>
          d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          d.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const trayTotal = tastingTray.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B1E30]/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#F0F6FB] text-[#0F2942] w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl border-2 border-[#B5D6EE] overflow-hidden">
        
        {/* Header */}
        <div className="p-6 md:p-8 bg-[#E0EFF8] border-b border-[#B5D6EE] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#0284C7] uppercase">
              <span>On D Go by Modge · Menu</span>
              <span>·</span>
              <span className="font-bengali-script">সম্পূর্ণ মেনু</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#0F2942] mt-1">
              On D Go by Modge Selection
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#0F2942]/70 hover:text-[#0284C7] hover:bg-white/50 transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-6 bg-[#EAF3FA] border-b border-[#B5D6EE] flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-bold tracking-wider transition-colors cursor-pointer border ${
                  activeCategory === cat.id
                    ? 'bg-[#0F2942] text-white border-[#0F2942]'
                    : 'bg-white text-[#10304D] border-[#B5D6EE] hover:border-[#0284C7]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input & Dietary Toggle */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-48">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#2A5D88]" />
              <input
                type="text"
                placeholder="Search cravings..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-[#B5D6EE] focus:outline-none focus:border-[#0284C7]"
              />
            </div>

            <select
              value={dietaryFilter}
              onChange={e => setDietaryFilter(e.target.value as any)}
              className="px-3 py-1.5 text-xs bg-white border border-[#B5D6EE] focus:outline-none text-[#0F2942] font-semibold"
            >
              <option value="all">All Diets</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Gluten-Free">Gluten-Free</option>
              <option value="Sugar-Free">Sugar-Free</option>
            </select>
          </div>
        </div>

        {/* Scrollable Items List */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-10 flex-1">
          {/* Desserts Grid */}
          {filteredDesserts.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-4 h-[1px] bg-[#5C1D2B]"></span>
                <h3 className="font-editorial text-2xl font-semibold text-[#241715]">
                  Crafted Desserts & Bakes
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredDesserts.map(item => {
                  const inTray = tastingTray.some(t => t.id === item.id);
                  return (
                    <div
                      key={item.id}
                      className="p-5 bg-[#F5EFEB] border border-[#241715]/10 flex flex-col justify-between group hover:border-[#5C1D2B]/40 transition-colors"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div>
                            <h4 className="font-editorial text-xl font-semibold text-[#241715]">
                              {item.name}
                            </h4>
                            <p className="font-bengali-script text-xs text-[#5C1D2B]">
                              {item.bengaliName}
                            </p>
                          </div>
                          <span className="font-mono text-sm font-semibold text-[#241715] shrink-0">
                            ₹{item.price}
                          </span>
                        </div>

                        <p className="text-xs text-[#241715]/75 leading-relaxed mb-4">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-1.5 text-[10px] text-[#241715]/60 mb-4">
                          {item.dietary.map(d => (
                            <span key={d} className="px-1.5 py-0.5 bg-[#FAF7F2] border border-[#241715]/10">
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-3 border-t border-[#241715]/10 flex items-center justify-between">
                        <span className="text-[11px] text-[#241715]/50 italic">
                          Pair with: {item.pairWith.split(' or ')[0]}
                        </span>

                        <button
                          onClick={() => toggleTrayItem({ id: item.id, name: item.name, price: item.price })}
                          className={`px-3 py-1.5 text-xs font-semibold tracking-wider flex items-center gap-1 transition-colors cursor-pointer ${
                            inTray
                              ? 'bg-emerald-700 text-white'
                              : 'bg-[#241715] text-[#FAF7F2] hover:bg-[#5C1D2B]'
                          }`}
                        >
                          {inTray ? (
                            <>
                              <Check size={12} />
                              <span>IN TRAY</span>
                            </>
                          ) : (
                            <>
                              <Plus size={12} />
                              <span>SELECT</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Coffee & Drinks Section */}
          {filteredDrinks.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-4 h-[1px] bg-[#5C1D2B]"></span>
                <h3 className="font-editorial text-2xl font-semibold text-[#241715]">
                  Specialty Coffee & Infusions
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredDrinks.map(drink => {
                  const inTray = tastingTray.some(t => t.id === drink.id);
                  return (
                    <div
                      key={drink.id}
                      className="p-5 bg-[#F5EFEB] border border-[#241715]/10 flex flex-col justify-between group hover:border-[#5C1D2B]/40 transition-colors"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div>
                            <h4 className="font-editorial text-xl font-semibold text-[#241715]">
                              {drink.name}
                            </h4>
                            <span className="text-[10px] uppercase tracking-wider text-[#5C1D2B] font-semibold">
                              {drink.temperature} · {drink.category}
                            </span>
                          </div>
                          <span className="font-mono text-sm font-semibold text-[#241715] shrink-0">
                            ₹{drink.price}
                          </span>
                        </div>

                        <p className="text-xs text-[#241715]/75 leading-relaxed mb-4">
                          {drink.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#241715]/10 flex items-center justify-between">
                        <span className="text-[11px] text-[#241715]/60 font-mono">
                          {drink.tastingNotes.join(' · ')}
                        </span>

                        <button
                          onClick={() => toggleTrayItem({ id: drink.id, name: drink.name, price: drink.price })}
                          className={`px-3 py-1.5 text-xs font-semibold tracking-wider flex items-center gap-1 transition-colors cursor-pointer ${
                            inTray
                              ? 'bg-emerald-700 text-white'
                              : 'bg-[#241715] text-[#FAF7F2] hover:bg-[#5C1D2B]'
                          }`}
                        >
                          {inTray ? (
                            <>
                              <Check size={12} />
                              <span>IN TRAY</span>
                            </>
                          ) : (
                            <>
                              <Plus size={12} />
                              <span>SELECT</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Footer Tray Action Bar */}
        <div className="p-4 sm:p-6 bg-[#FAF7F2] border-t border-[#241715]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShoppingBag size={18} className="text-[#5C1D2B]" />
            <div className="text-xs">
              <span className="font-semibold text-[#241715]">
                Tasting Tray: {tastingTray.length} item{tastingTray.length !== 1 ? 's' : ''}
              </span>
              {tastingTray.length > 0 && (
                <span className="text-[#5C1D2B] font-mono font-bold ml-2">
                  (Estimated: ₹{trayTotal})
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 border border-[#241715]/30 text-xs font-semibold hover:bg-[#241715]/5 transition-colors cursor-pointer"
            >
              CLOSE
            </button>

            <button
              onClick={() => {
                onClose();
                onReserveTable();
              }}
              className="px-6 py-2.5 bg-[#241715] text-[#FAF7F2] text-xs font-semibold tracking-wider hover:bg-[#5C1D2B] transition-colors cursor-pointer"
            >
              RESERVE TABLE TO TASTE
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
