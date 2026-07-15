import Link from 'next/link';
import type { Metadata } from 'next';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Destination Wedding Planning & Venue Selection | Bajranng Weddings',
  description: 'Exclusive access to 50+ palace and heritage properties across Rajasthan for your dream destination wedding.',
};

const venues = [
  { city: 'Udaipur', properties: 'City Palace, Taj Lake Palace, Oberoi Udaivilas', mood: 'Lakeside Romance' },
  { city: 'Jaipur', properties: 'Rambagh Palace, Jai Mahal, Samode Palace', mood: 'Royal Grandeur' },
  { city: 'Jodhpur', properties: 'Umaid Bhawan, Ajit Bhawan, Raas Jodhpur', mood: 'Desert Elegance' },
  { city: 'Jaisalmer', properties: 'Suryagarh, Hotel Nachana, Fort Rajwada', mood: 'Golden Desert Magic' },
  { city: 'Pushkar', properties: 'The Westin, Ananta, RAAS Pushkar', mood: 'Sacred & Serene' },
  { city: 'Ranthambhor', properties: 'Aman-i-Khas, SUJÁN Sher Bagh, Sherpur Kalan', mood: 'Wilderness Luxury' },
];

export default function VenueSelectionPage() {
  return (
    <>
      <div className="page-hero">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(181,66,42,0.2) 0%, transparent 70%)' }} />
        <div className="relative">
          <p className="label mb-4" style={{ color: 'var(--brand-light)' }}>
            <Link href="/services" style={{ color: 'var(--brand-light)', textDecoration: 'none' }}>Services</Link> / Venue Selection
          </p>
          <h1>Destination Wedding Planning & Venue Selection</h1>
          <div className="section-divider" />
          <p>Exclusive access to Rajasthan&apos;s most magnificent palaces and heritage properties</p>
        </div>
      </div>

      <section className="py-24 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="leading-relaxed text-center max-w-3xl mx-auto mb-14" style={{ color: 'var(--text-muted)' }}>
              Choosing the right venue sets the tone for your entire wedding. Our team&apos;s deep relationships
              with Rajasthan&apos;s finest properties — built over 35 years — gives you unmatched access,
              preferred pricing, and expert guidance.
            </p>
          </Reveal>
          <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" gap={0.07}>
            {venues.map((v) => (
              <StaggerItem key={v.city}>
                <Link href={`/venues/${v.city.toLowerCase()}`}
                  className="modern-card p-6 block no-underline h-full"
                  style={{ borderLeft: '3px solid var(--brand)' }}>
                  <div className="text-xl font-bold mb-1" style={{ fontFamily: 'var(--display-font)', fontStyle: 'italic', fontWeight: 500, color: 'var(--charcoal)' }}>{v.city}</div>
                  <div className="text-xs tracking-widest uppercase mb-3" style={{ color: 'var(--brand)', fontWeight: 600 }}>{v.mood}</div>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{v.properties}</p>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-14 text-center flex gap-4 justify-center flex-wrap">
            <Link href="/venues" className="btn-outline"><span>Explore All Venues</span></Link>
            <Link href="/contact" className="btn-primary"><span>Get Venue Recommendations</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
