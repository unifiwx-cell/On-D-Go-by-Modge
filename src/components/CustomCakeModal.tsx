import { useState } from 'react';
import { X, Sparkles, Check, CheckCircle2, Gift } from 'lucide-react';
import { BRAND_INFO } from '../data/modgeData';

interface CustomCakeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CustomCakeModal({ isOpen, onClose }: CustomCakeModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [flavor, setFlavor] = useState('Wild Blueberry Cheesecake');
  const [weight, setWeight] = useState('1.0 kg (Serves 8–10)');
  const [dietary, setDietary] = useState('Vegetarian (Eggless)');
  const [messageOnCake, setMessageOnCake] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');

  if (!isOpen) return null;

  const flavors = [
    { name: 'Wild Blueberry Cheesecake', priceBase: 1200, desc: 'House blueberry compote & rich cream cheese' },
    { name: 'The Matilda Chocolate Ganache', priceBase: 1350, desc: 'Towering chocolate sponge & 70% dark ganache pour' },
    { name: 'Lotus Biscoff Speculoos', priceBase: 1250, desc: 'Speculoos crust with cookie butter swirl' },
    { name: 'Nutella Roasted Hazelnut', priceBase: 1300, desc: 'Pure Piedmont hazelnut with velvety chocolate' },
    { name: 'Basque Burnt Cheesecake', priceBase: 1100, desc: 'Caramelized top with creamy molten center' },
  ];

  const currentFlavor = flavors.find(f => f.name === flavor) || flavors[0];
  const multiplier = weight.startsWith('0.5') ? 0.65 : weight.startsWith('1.5') ? 1.45 : weight.startsWith('2.0') ? 1.9 : 1.0;
  const estimatedPrice = Math.round(currentFlavor.priceBase * multiplier);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B1E30]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#F0F6FB] text-[#0F2942] w-full max-w-2xl max-h-[92vh] flex flex-col shadow-2xl border-2 border-[#B5D6EE] overflow-hidden">
        
        {/* Header */}
        <div className="p-6 md:p-8 bg-[#E0EFF8] border-b border-[#B5D6EE] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#0284C7] uppercase">
              <span>On D Go by Modge · Custom Bakery</span>
              <span>·</span>
              <span className="font-bengali-script">কাস্টম কেক অর্ডার</span>
            </div>
            <h2 className="font-editorial text-3xl font-bold text-[#0F2942] mt-1">
              Design Your Celebration Cake
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#0F2942]/70 hover:text-[#0284C7] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X size={22} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 overflow-y-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Flavor Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0F2942] mb-2">
                  01. Choose Signature Base & Flavor
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {flavors.map(f => (
                    <div
                      key={f.name}
                      onClick={() => setFlavor(f.name)}
                      className={`p-3.5 border-2 transition-all cursor-pointer ${
                        flavor === f.name
                          ? 'bg-[#0F2942] text-white border-[#0F2942]'
                          : 'bg-white text-[#0F2942] border-[#B5D6EE] hover:border-[#0284C7]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-editorial text-base font-bold">{f.name}</span>
                        {flavor === f.name && <Check size={14} className="text-[#38BDF8]" />}
                      </div>
                      <p className={`text-[11px] mt-1 ${flavor === f.name ? 'text-[#B5D6EE]' : 'text-[#2A5D88]'}`}>
                        {f.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weight & Dietary */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0F2942] mb-2">
                    02. Cake Size / Weight
                  </label>
                  <select
                    value={weight}
                    onChange={e => setWeight(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#B5D6EE] focus:outline-none text-[#0F2942] font-semibold"
                  >
                    <option value="0.5 kg (Serves 4–6)">0.5 kg (Small gathering · 4–6 persons)</option>
                    <option value="1.0 kg (Serves 8–10)">1.0 kg (Standard celebration · 8–10 persons)</option>
                    <option value="1.5 kg (Serves 12–15)">1.5 kg (Party size · 12–15 persons)</option>
                    <option value="2.0 kg (Tier / Large)">2.0 kg (Grand celebration · 16+ persons)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0F2942] mb-2">
                    03. Dietary Preference
                  </label>
                  <select
                    value={dietary}
                    onChange={e => setDietary(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#B5D6EE] focus:outline-none text-[#0F2942] font-semibold"
                  >
                    <option value="Vegetarian (Eggless)">Vegetarian / Eggless (Default)</option>
                    <option value="Gluten-Free Flourless">Gluten-Free Base</option>
                    <option value="Sugar-Free Monk Fruit">Sugar-Free Monk Fruit Infusion</option>
                  </select>
                </div>
              </div>

              {/* Message Plaque */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0F2942] mb-2">
                  04. Custom Message for Chocolate Plaque (Optional)
                </label>
                <input
                  type="text"
                  value={messageOnCake}
                  onChange={e => setMessageOnCake(e.target.value)}
                  placeholder="e.g. Happy 28th Birthday Rhea!"
                  maxLength={50}
                  className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#B5D6EE] focus:outline-none focus:border-[#0284C7]"
                />
              </div>

              {/* Contact Details & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0F2942] mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Full name"
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#B5D6EE] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0F2942] mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="98300 XXXXX"
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#B5D6EE] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0F2942] mb-2">
                    Pickup Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#B5D6EE] focus:outline-none"
                  />
                </div>
              </div>

              {/* Estimated Quote Card */}
              <div className="p-4 bg-[#E0EFF8] border-2 border-[#B5D6EE] flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#0284C7] font-bold">
                    ESTIMATED CHEF QUOTE · ON D GO BY MODGE
                  </span>
                  <p className="font-editorial text-2xl font-bold text-[#0F2942]">
                    ₹{estimatedPrice}
                  </p>
                  <p className="text-[11px] text-[#2A5D88] font-medium">
                    Includes custom packaging, message plaque & fresh morning bake.
                  </p>
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 bg-[#0F2942] text-white text-xs font-bold tracking-widest hover:bg-[#0284C7] transition-colors cursor-pointer shadow-sm"
                >
                  SEND CAKE ENQUIRY
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#E0EFF8] text-[#0284C7] flex items-center justify-center mx-auto">
                <CheckCircle2 size={36} />
              </div>

              <div>
                <span className="text-[11px] font-mono tracking-widest text-[#0284C7] font-bold uppercase">
                  CUSTOM ORDER RECEIVED
                </span>
                <h3 className="font-editorial text-3xl font-bold text-[#0F2942] mt-2">
                  Thank you, {name}!
                </h3>
                <p className="text-xs text-[#1E3A56] max-w-md mx-auto mt-2 font-medium">
                  Our head pastry chef at On D Go by Modge (Indo Japan House) will contact you on {phone} within 2 hours to finalize the presentation details.
                </p>
              </div>

              <div className="p-5 bg-[#E2EFF8] border-2 border-[#B5D6EE] max-w-md mx-auto text-left text-xs space-y-1.5">
                <p><span className="font-bold text-[#0F2942]">Cafe:</span> On D Go by Modge, Sector V Kolkata</p>
                <p><span className="font-bold text-[#0F2942]">Cake:</span> {flavor} ({weight})</p>
                <p><span className="font-bold text-[#0F2942]">Dietary:</span> {dietary}</p>
                {messageOnCake && (
                  <p><span className="font-bold text-[#0F2942]">Plaque Message:</span> "{messageOnCake}"</p>
                )}
                <p><span className="font-bold text-[#0F2942]">Pickup Date:</span> {date || 'As discussed'}</p>
                <p><span className="font-bold text-[#0F2942]">Estimated:</span> ₹{estimatedPrice}</p>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-8 py-3 bg-[#0F2942] text-white text-xs font-bold tracking-wider hover:bg-[#0284C7] transition-colors cursor-pointer"
                >
                  RETURN TO ATELIER
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
