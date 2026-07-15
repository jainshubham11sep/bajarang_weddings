'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import { Reveal } from '@/components/Reveal';

const offices = [
  {
    city: 'Head Office — Kota',
    address: '414, near Hadoti Hospital, Special, Rajiv Gandhi Nagar, Kota, Rajasthan 324005',
    phone: '+91 82248 94743',
    phone2: '+91 96365 48645',
    email: 'eventsbajranng@gmail.com',
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    weddingDate: '',
    venue: '',
    guests: '',
    budget: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <div className="page-hero">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(181,66,42,0.2) 0%, transparent 70%)' }} />
        <div className="relative">
          <p className="label mb-4" style={{ color: 'var(--brand-light)' }}>Let&apos;s Begin</p>
          <h1>Contact Us</h1>
          <div className="section-divider" />
          <p>Reach out to start planning the wedding of your dreams</p>
        </div>
      </div>

      <section className="py-12 md:py-24 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14">
          {/* Inquiry Form */}
          <Reveal direction="right">
          <div>
            <p className="eyebrow mb-4">Get In Touch</p>
            <h2 className="display-xl" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: 'var(--ink)', marginBottom: '1.75rem' }}>Send Us an Inquiry</h2>

            {submitted ? (
              <div className="bg-white p-10 text-center">
                <div className="text-4xl mb-4" style={{ color: 'var(--gold)' }}>✦</div>
                <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'Georgia, serif', color: 'var(--charcoal)' }}>
                  Thank You, {form.name}!
                </h3>
                <p style={{ color: 'var(--text-muted)' }}>
                  We have received your inquiry and will be in touch within 24 hours. We look forward
                  to crafting your perfect wedding.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs tracking-widest uppercase mb-1.5" style={{ color: 'var(--charcoal)' }}>Your Name *</label>
                    <input
                      type="text" required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border px-4 py-3 text-sm bg-white outline-none focus:border-yellow-600 transition-colors"
                      style={{ borderColor: 'var(--ivory)', fontFamily: 'Georgia, serif' }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase mb-1.5" style={{ color: 'var(--charcoal)' }}>Email Address *</label>
                    <input
                      type="email" required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border px-4 py-3 text-sm bg-white outline-none focus:border-yellow-600 transition-colors"
                      style={{ borderColor: 'var(--ivory)', fontFamily: 'Georgia, serif' }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs tracking-widest uppercase mb-1.5" style={{ color: 'var(--charcoal)' }}>Phone Number</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border px-4 py-3 text-sm bg-white outline-none focus:border-yellow-600 transition-colors"
                      style={{ borderColor: 'var(--ivory)', fontFamily: 'Georgia, serif' }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase mb-1.5" style={{ color: 'var(--charcoal)' }}>Tentative Wedding Date</label>
                    <input
                      type="date"
                      value={form.weddingDate}
                      onChange={(e) => setForm({ ...form, weddingDate: e.target.value })}
                      className="w-full border px-4 py-3 text-sm bg-white outline-none focus:border-yellow-600 transition-colors"
                      style={{ borderColor: 'var(--ivory)', fontFamily: 'Georgia, serif' }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs tracking-widest uppercase mb-1.5" style={{ color: 'var(--charcoal)' }}>Preferred Venue / City</label>
                    <select
                      value={form.venue}
                      onChange={(e) => setForm({ ...form, venue: e.target.value })}
                      className="w-full border px-4 py-3 text-sm bg-white outline-none focus:border-yellow-600 transition-colors"
                      style={{ borderColor: 'var(--ivory)', fontFamily: 'Georgia, serif', color: 'var(--charcoal)' }}
                    >
                      <option value="">Select a destination</option>
                      {['Udaipur', 'Jaipur', 'Jodhpur', 'Jaisalmer', 'Pushkar', 'Ranthambhor', 'Other'].map(v => (
                        <option key={v} value={v}>{v}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase mb-1.5" style={{ color: 'var(--charcoal)' }}>Estimated Guest Count</label>
                    <select
                      value={form.guests}
                      onChange={(e) => setForm({ ...form, guests: e.target.value })}
                      className="w-full border px-4 py-3 text-sm bg-white outline-none focus:border-yellow-600 transition-colors"
                      style={{ borderColor: 'var(--ivory)', fontFamily: 'Georgia, serif', color: 'var(--charcoal)' }}
                    >
                      <option value="">Select range</option>
                      {['Under 100', '100–300', '300–500', '500–1000', '1000+'].map(g => (
                        <option key={g} value={g}>{g}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase mb-1.5" style={{ color: 'var(--charcoal)' }}>Budget Range</label>
                  <select
                    value={form.budget}
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    className="w-full border px-4 py-3 text-sm bg-white outline-none focus:border-yellow-600 transition-colors"
                    style={{ borderColor: 'var(--ivory)', fontFamily: 'Georgia, serif', color: 'var(--charcoal)' }}
                  >
                    <option value="">Select budget range</option>
                    {['₹25L – ₹50L', '₹50L – ₹1Cr', '₹1Cr – ₹2Cr', '₹2Cr – ₹5Cr', 'Above ₹5Cr'].map(b => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase mb-1.5" style={{ color: 'var(--charcoal)' }}>Tell Us About Your Dream Wedding</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Share your vision, themes, specific requirements, or any questions..."
                    className="w-full border px-4 py-3 text-sm bg-white outline-none focus:border-yellow-600 transition-colors resize-none"
                    style={{ borderColor: 'var(--ivory)', fontFamily: 'Georgia, serif' }}
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center text-white">
                  <span>Send Inquiry</span>
                </button>
              </form>
            )}
          </div>
          </Reveal>

          {/* Contact Info */}
          <Reveal direction="left" delay={0.1}>
          <div>
            <p className="eyebrow mb-4">Reach Us</p>
            <h2 className="display-xl" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: 'var(--ink)', marginBottom: '1.75rem' }}>Get In Touch</h2>

            {/* Quick contact */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <a href="tel:+918224894743"
                className="modern-card p-5 text-center block no-underline">
                <div className="text-2xl mb-2">📞</div>
                <div className="text-xs tracking-widest uppercase mb-1" style={{ color: 'var(--brand)' }}>Call Us</div>
                <div className="text-xs font-medium" style={{ color: 'var(--charcoal)' }}>+91 82248 94743</div>
                <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>+91 96365 48645</div>
              </a>
              <a href="https://wa.me/918224894743"
                target="_blank" rel="noopener noreferrer"
                className="modern-card p-5 text-center block no-underline">
                <div className="text-2xl mb-2">💬</div>
                <div className="text-xs tracking-widest uppercase mb-1" style={{ color: '#25D366' }}>WhatsApp</div>
                <div className="text-xs" style={{ color: 'var(--charcoal)' }}>Chat with us now</div>
              </a>
              <a href="mailto:eventsbajranng@gmail.com"
                className="modern-card p-5 text-center block no-underline">
                <div className="text-2xl mb-2">✉️</div>
                <div className="text-xs tracking-widest uppercase mb-1" style={{ color: 'var(--brand)' }}>Email</div>
                <div className="text-xs" style={{ color: 'var(--charcoal)' }}>eventsbajranng@gmail.com</div>
              </a>
              <div className="modern-card p-5 text-center">
                <div className="text-2xl mb-2">📅</div>
                <div className="text-xs tracking-widest uppercase mb-1" style={{ color: 'var(--brand)' }}>Consultation</div>
                <div className="text-xs" style={{ color: 'var(--charcoal)' }}>Mon–Sat, 10am–7pm IST</div>
              </div>
            </div>

            {/* Office Locations */}
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ fontFamily: 'var(--body-font)', color: 'var(--charcoal)' }}>
              Our Office
            </h3>
            <div className="space-y-4">
              {offices.map((o) => (
                <div key={o.city} className="modern-card p-5" style={{ borderLeft: '3px solid var(--brand)' }}>
                  <div className="font-semibold mb-2" style={{ fontFamily: 'Georgia, serif', color: 'var(--charcoal)' }}>{o.city}</div>
                  <p className="text-xs leading-relaxed mb-2" style={{ color: 'var(--text-muted)' }}>{o.address}</p>
                  <div className="space-y-0.5">
                    <p className="text-xs">
                      <a href={`tel:${o.phone.replace(/\s/g, '')}`} style={{ color: 'var(--brand)' }}>{o.phone}</a>
                    </p>
                    {o.phone2 && (
                      <p className="text-xs">
                        <a href={`tel:${o.phone2.replace(/\s/g, '')}`} style={{ color: 'var(--brand)' }}>{o.phone2}</a>
                      </p>
                    )}
                    <p className="text-xs">
                      <a href={`mailto:${o.email}`} style={{ color: 'var(--text-muted)' }}>{o.email}</a>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map embed */}
            <div className="mt-4 overflow-hidden" style={{ border: '1px solid var(--ivory)' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.123456789!2d75.8652!3d25.1486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962f5ec0b4e3b4b%3A0x8b2c5f8a5c5e5c5e!2sRajiv%20Gandhi%20Nagar%2C%20Kota%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bajranng Weddings Office Location"
              />
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ fontFamily: 'var(--body-font)', color: 'var(--charcoal)' }}>
                Follow Us
              </h3>
              <div className="flex gap-3">
                {[
                  { name: 'Instagram', icon: '📸', href: 'https://www.instagram.com/bajranngweddings' },
                  { name: 'Facebook', icon: '👍', href: '#' },
                  { name: 'YouTube', icon: '▶️', href: '#' },
                  { name: 'Pinterest', icon: '📌', href: '#' },
                ].map((s) => (
                  <a key={s.name} href={s.href}
                    target={s.href !== '#' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    title={s.name}
                    className="w-12 h-12 modern-card flex items-center justify-center text-sm">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
