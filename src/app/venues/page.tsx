import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

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
    img: '/images/venues/udaipur.jpg',
  },
  {
    name: 'Jaipur',
    tagline: 'The Pink City',
    desc: 'Jaipur\'s rich cultural heritage, vibrant bazaars, and magnificent forts make it the heart of royal Rajasthan. Perfect for grand celebrations with 500+ guests.',
    highlight: 'Ideal for: Grand celebrations, Heritage properties',
    href: '/venues/jaipur',
    img: '/images/venues/jaipur.jpg',
  },
  {
    name: 'Jodhpur',
    tagline: 'The Blue City',
    desc: 'The Blue City with the magnificent Mehrangarh Fort as a backdrop creates an unforgettable setting. Umaid Bhawan Palace is one of the world\'s finest wedding venues.',
    highlight: 'Ideal for: Fort weddings, Celebrity-style events',
    href: '/venues/jodhpur',
    img: '/images/venues/jodhpur.jpg',
  },
  {
    name: 'Jaisalmer',
    tagline: 'The Golden City',
    desc: 'The golden sandstone fort rising from the Thar Desert creates a setting like no other. Desert camp weddings and fort ceremonies are truly unforgettable.',
    highlight: 'Ideal for: Desert camps, Fort ceremonies',
    href: '/venues/jaisalmer',
    img: '/images/venues/jaisalmer.jpg',
  },
  {
    name: 'Pushkar',
    tagline: 'Sacred Oasis',
    desc: 'Sacred Pushkar, nestled around a holy lake, offers serene beauty and spiritual significance. Perfect for intimate, meaningful celebrations.',
    highlight: 'Ideal for: Intimate weddings, Spiritual ceremonies',
    href: '/venues/pushkar',
    img: '/images/venues/pushkar.jpg',
  },
  {
    name: 'Ranthambhor',
    tagline: 'Wilderness Royale',
    desc: 'Celebrate amidst the wild — jungle camps, heritage lodges, and the iconic Ranthambhor Fort create a unique backdrop unlike anywhere else in India.',
    highlight: 'Ideal for: Jungle retreats, Adventure-loving couples',
    href: '/venues/ranthambhor',
    img: '/images/venues/ranthambore.jpg',
  },
];

export default function VenuesPage() {
  return (
    <>
      <div className="page-hero">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(181,66,42,0.2) 0%, transparent 70%)' }} />
        <div className="relative">
          <p className="label mb-4" style={{ color: 'var(--brand-light)' }}>Choose Your Backdrop</p>
          <h1>Wedding Destinations</h1>
          <div className="section-divider" />
          <p>Six iconic destinations across Rajasthan — each with its own magic, culture, and grandeur</p>
        </div>
      </div>

      <section className="py-12 md:py-24 px-4" style={{ background: 'var(--cream)' }}>
        <Stagger className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6" gap={0.08}>
          {venues.map((v) => (
            <StaggerItem key={v.name}>
              <Link href={v.href} className="modern-card group block overflow-hidden no-underline h-full">
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={v.img}
                    alt={`${v.name} wedding venue`}
                    fill
                    style={{ objectFit: 'cover', transition: 'transform 0.7s var(--ease-out)' }}
                    className="group-hover:scale-110"
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,11,9,0.85) 0%, rgba(13,11,9,0.1) 60%, transparent 100%)' }} />
                  <div className="absolute bottom-0 left-0 p-5">
                    <div className="text-2xl font-bold text-white mb-0.5" style={{ fontFamily: 'var(--display-font)', fontStyle: 'italic', fontWeight: 500 }}>{v.name}</div>
                    <div className="text-xs tracking-widest uppercase" style={{ color: 'var(--brand-light)', fontWeight: 600 }}>{v.tagline}</div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-muted)' }}>{v.desc}</p>
                  <p className="text-xs italic mb-3" style={{ color: 'var(--brand)', fontFamily: 'var(--display-font)' }}>{v.highlight}</p>
                  <div className="text-xs tracking-widest uppercase font-semibold" style={{ color: 'var(--charcoal)' }}>Explore {v.name} →</div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </>
  );
}
