import { useState } from 'react';
import { X, Calendar, Clock, Users, CheckCircle2, Phone, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../data/modgeData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [step, setStep] = useState<'form' | 'confirmed'>('form');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2 Guests',
    date: new Date().toISOString().split('T')[0],
    time: '4:30 PM',
    seating: 'Cozy Window Atelier',
    specialNotes: '',
  });

  const [bookingCode, setBookingCode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    const randomCode = 'MDG-' + Math.floor(1000 + Math.random() * 9000);
    setBookingCode(randomCode);
    setStep('confirmed');
  };

  const handleReset = () => {
    setStep('form');
    onClose();
  };

  const timeSlots = [
    '11:30 AM', '1:00 PM', '2:30 PM', '4:00 PM', '5:30 PM', '7:00 PM', '8:30 PM'
  ];

  const seatingOptions = [
    { id: 'Cozy Window Atelier', desc: 'Soft daylight, perfect for relaxed conversation' },
    { id: 'Velvet Dessert Booth', desc: 'Intimate corner for dessert tasting & dates' },
    { id: 'Slow Coffee Bar', desc: 'Watch manual brews & espresso extractions' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B1E30]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#F0F6FB] text-[#0F2942] w-full max-w-xl max-h-[92vh] flex flex-col shadow-2xl border-2 border-[#B5D6EE] overflow-hidden">
        
        {/* Header */}
        <div className="p-6 md:p-8 bg-[#E0EFF8] border-b border-[#B5D6EE] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#0284C7] uppercase">
              <span>On D Go by Modge · Table Booking</span>
              <span>·</span>
              <span className="font-bengali-script">টেবিল বুকিং</span>
            </div>
            <h2 className="font-editorial text-3xl font-bold text-[#0F2942] mt-1">
              Join Us at On D Go by Modge
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

        {/* Modal Body */}
        <div className="p-6 md:p-8 overflow-y-auto">
          {step === 'form' ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#241715]/80 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ananya Sen"
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#241715]/20 focus:outline-none focus:border-[#5C1D2B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#241715]/80 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 98300 XXXXX"
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#241715]/20 focus:outline-none focus:border-[#5C1D2B]"
                  />
                </div>
              </div>

              {/* Date & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#241715]/80 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={e => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#241715]/20 focus:outline-none focus:border-[#5C1D2B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#241715]/80 mb-2">
                    Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={e => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#241715]/20 focus:outline-none text-[#241715]"
                  >
                    <option value="1 Guest">1 Guest (Solo Coffee / Reading)</option>
                    <option value="2 Guests">2 Guests (Dessert Date)</option>
                    <option value="3 Guests">3 Guests</option>
                    <option value="4 Guests">4 Guests (Group Table)</option>
                    <option value="5-6 Guests">5–6 Guests</option>
                    <option value="7-8 Guests">7–8 Guests (Celebration)</option>
                  </select>
                </div>
              </div>

              {/* Time Slots */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#241715]/80 mb-2">
                  Select Preferred Time Slot
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {timeSlots.map(time => (
                    <button
                      type="button"
                      key={time}
                      onClick={() => setFormData({ ...formData, time })}
                      className={`py-2 text-xs font-medium border transition-colors cursor-pointer ${
                        formData.time === time
                          ? 'bg-[#241715] text-[#FAF7F2] border-[#241715]'
                          : 'bg-white text-[#241715]/80 border-[#241715]/15 hover:border-[#5C1D2B]'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Seating Preference */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#241715]/80 mb-2">
                  Seating Experience
                </label>
                <div className="space-y-2">
                  {seatingOptions.map(opt => (
                    <label
                      key={opt.id}
                      className={`flex items-start gap-3 p-3 border cursor-pointer transition-colors ${
                        formData.seating === opt.id
                          ? 'bg-[#F5EFEB] border-[#5C1D2B]'
                          : 'bg-white border-[#241715]/15 hover:border-[#241715]/30'
                      }`}
                    >
                      <input
                        type="radio"
                        name="seating"
                        checked={formData.seating === opt.id}
                        onChange={() => setFormData({ ...formData, seating: opt.id })}
                        className="mt-0.5 accent-[#5C1D2B]"
                      />
                      <div>
                        <p className="text-xs font-semibold text-[#241715]">{opt.id}</p>
                        <p className="text-[11px] text-[#241715]/60">{opt.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Special Notes */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#241715]/80 mb-2">
                  Special Notes or Dietary Requests (Optional)
                </label>
                <input
                  type="text"
                  value={formData.specialNotes}
                  onChange={e => setFormData({ ...formData, specialNotes: e.target.value })}
                  placeholder="e.g. Birthday candle on Matilda cake, quiet corner for meeting"
                  className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#241715]/20 focus:outline-none focus:border-[#5C1D2B]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#0F2942] text-white text-xs font-bold tracking-widest hover:bg-[#0284C7] transition-colors cursor-pointer shadow-md"
                >
                  CONFIRM RESERVATION
                </button>
                <p className="text-[11px] text-[#2A5D88] text-center mt-2.5 font-medium">
                  No advance booking fee · Table held for 15 minutes past reserved time
                </p>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#E0EFF8] text-[#0284C7] flex items-center justify-center mx-auto">
                <CheckCircle2 size={36} />
              </div>

              <div>
                <span className="text-[11px] font-mono tracking-widest text-[#0284C7] font-bold uppercase">
                  CONFIRMATION CODE: {bookingCode}
                </span>
                <h3 className="font-editorial text-3xl font-bold text-[#0F2942] mt-2">
                  We look forward to hosting you at On D Go by Modge, {formData.name}.
                </h3>
              </div>

              <div className="p-6 bg-[#E2EFF8] border-2 border-[#B5D6EE] max-w-md mx-auto text-left space-y-2 text-xs">
                <p><span className="font-bold text-[#0F2942]">Location:</span> Indo Japan House, Floor 0, Sector V (On D Go by Modge)</p>
                <p><span className="font-bold text-[#0F2942]">Date & Time:</span> {formData.date} at {formData.time}</p>
                <p><span className="font-bold text-[#0F2942]">Party:</span> {formData.guests} ({formData.seating})</p>
                {formData.specialNotes && (
                  <p><span className="font-bold text-[#0F2942]">Note:</span> {formData.specialNotes}</p>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#0F2942] text-white text-xs font-bold tracking-wider hover:bg-[#0284C7] transition-colors cursor-pointer"
                >
                  DONE
                </button>
                <a
                  href={`tel:${BRAND_INFO.phoneClean}`}
                  className="px-6 py-2.5 border-2 border-[#B5D6EE] bg-white text-[#0F2942] text-xs font-bold hover:bg-[#E0EFF8] transition-colors"
                >
                  CALL CAFE (090739 56262)
                </a>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
