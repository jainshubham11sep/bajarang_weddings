import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wedding Venues | Bajranng Weddings',
  description: 'Explore iconic wedding destinations — Udaipur, Jaipur, Jodhpur, Jaisalmer, Pushkar, and Ranthambhor.',
};

const venues = [
  {
    name: 'Udaipur',
    tagline: 'City of Lakes',
    desc: 'Set against shimmering lakes and Aravalli hills, Udaipur is India\'s most romantic wedding destination. Palace hotels like Taj Lake Palace offer unmatched grandeur.',
    highlight: 'Ideal for: Lakeside ceremonies, Palace weddings',
    href: '/venues/udaipur',
    bg: '#0E1A2D',
  },
  {
    name: 'Jaipur',
    tagline: 'The Pink City',
    desc: 'Jaipur\'s rich cultural heritage, vibrant bazaars, and magnificent forts make it the heart of royal Rajasthan. Perfect for grand celebrations with 500+ guests.',
    highlight: 'Ideal for: Grand celebrations, Heritage properties',
    href: '/venues/jaipur',
    bg: '#2D1A0E',
  },
  {
    name: 'Jodhpur',
    tagline: 'The Blue City',
    desc: 'The Blue City with the magnificent Mehrangarh Fort as a backdrop creates an unforgettable setting. Umaid Bhawan Palace is one of the world\'s finest wedding venues.',
    highlight: 'Ideal for: Fort weddings, Celebrity-style events',
    href: '/venues/jodhpur',
    bg: '#0E1F2D',
  },
  {
    name: 'Jaisalmer',
    tagline: 'The Golden City',
    desc: 'The golden sandstone fort rising from the Thar Desert creates a setting like no other. Desert camp weddings and fort ceremonies are truly unforgettable.',
    highlight: 'Ideal for: Desert camps, Fort ceremonies',
    href: '/venues/jaisalmer',
    bg: '#2D260E',
  },
  {
    name: 'Pushkar',
    tagline: 'Sacred Oasis',
    desc: 'Sacred Pushkar, nestled around a holy lake, offers serene beauty and spiritual significance. Perfect for intimate, meaningful celebrations.',
    highlight: 'Ideal for: Intimate weddings, Spiritual ceremonies',
    href: '/venues/pushkar',
    bg: '#1A2D0E',
  },
  {
    name: 'Ranthambhor',
    tagline: 'Wilderness Royale',
    desc: 'Celebrate amidst the wild — jungle camps, heritage lodges, and the iconic Ranthambhor Fort create a unique backdrop unlike anywhere else in India.',
    highlight: 'Ideal for: Jungle retreats, Adventure-loving couples',
    href: '/venues/ranthambhor',
    bg: '#0E2D1A',
  },
];

export default function VenuesPage() {
  return (
    <>
      <div className="page-hero">
        <p className="text-xs tracking-[0.35em] uppercase mb-3" style={{ color: 'var(--gold)' }}>Choose Your Backdrop</p>
        <h1>Wedding Destinations</h1>
        <div className="section-divider mt-4 mb-4" />
        <p>Six iconic destinations across Rajasthan — each with its own magic, culture, and grandeur</p>
      </div>

      <section className="py-20 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {venues.map((v) => (
            <Link key={v.name} href={v.href} className="group block card-hover overflow-hidden no-underline">
              <div className="h-48 flex items-center justify-center relative" style={{ background: v.bg }}>
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity"
                  style={{ background: 'var(--gold)' }} />
                <div className="relative z-10 text-center">
                  <div className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>{v.name}</div>
                  <div className="text-xs tracking-widest uppercase" style={{ color: 'var(--gold-light)' }}>{v.tagline}</div>
                </div>
              </div>
              <div className="bg-white p-5">
                <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-muted)' }}>{v.desc}</p>
                <p className="text-xs italic mb-3" style={{ color: 'var(--gold)' }}>{v.highlight}</p>
                <div className="text-xs tracking-widest uppercase" style={{ color: 'var(--charcoal)' }}>Explore {v.name} →</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
