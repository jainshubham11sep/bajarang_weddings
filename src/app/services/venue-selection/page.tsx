import Link from 'next/link';
import type { Metadata } from 'next';

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
        <p className="text-xs tracking-[0.35em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
          <Link href="/services" style={{ color: 'var(--gold)', textDecoration: 'none' }}>Services</Link> / Venue Selection
        </p>
        <h1>Destination Wedding Planning & Venue Selection</h1>
        <div className="section-divider mt-4 mb-4" />
        <p>Exclusive access to Rajasthan&apos;s most magnificent palaces and heritage properties</p>
      </div>

      <section className="py-20 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto">
          <p className="leading-relaxed text-center max-w-3xl mx-auto mb-12" style={{ color: 'var(--text-muted)' }}>
            Choosing the right venue sets the tone for your entire wedding. Our team&apos;s deep relationships
            with Rajasthan&apos;s finest properties — built over 15 years — gives you unmatched access,
            preferred pricing, and expert guidance.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {venues.map((v) => (
              <Link key={v.city} href={`/venues/${v.city.toLowerCase()}`}
                className="bg-white p-6 card-hover block no-underline"
                style={{ borderLeft: '3px solid var(--gold)' }}>
                <div className="text-xl font-bold mb-1" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', color: 'var(--charcoal)' }}>{v.city}</div>
                <div className="text-xs tracking-widest uppercase mb-3" style={{ color: 'var(--gold)' }}>{v.mood}</div>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{v.properties}</p>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/venues" className="btn-outline mr-4">Explore All Venues</Link>
            <Link href="/contact" className="btn-primary">Get Venue Recommendations</Link>
          </div>
        </div>
      </section>
    </>
  );
}
