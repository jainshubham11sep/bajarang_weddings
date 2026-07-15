import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Weddings in Udaipur | Bajranng Weddings',
  description: 'Plan your dream wedding in Udaipur — the City of Lakes. Palace hotels, lakeside venues, and expert local coordination by Bajranng Weddings.',
};

const facts = [
  { label: 'Iconic Venues', value: 'Taj Lake Palace, City Palace, Oberoi Udaivilas, Jagmandir Island Palace' },
  { label: 'Best Season', value: 'October to March — cool evenings, perfect skies' },
  { label: 'Guest Capacity', value: '50 to 2,000+ guests across various properties' },
  { label: 'Signature Experience', value: 'Boat arrival ceremony on Lake Pichola at sunset' },
];

export default function UdaipurPage() {
  return (
    <>
      <div className="page-hero" style={{ background: 'var(--ink)' }}>
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <Image src="/images/venues/udaipur.jpg" alt="Udaipur" fill priority style={{ objectFit: 'cover', opacity: 0.32 }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(13,11,9,0.4) 0%, rgba(13,11,9,0.85) 100%)' }} />
        <div className="relative">
          <p className="label mb-4" style={{ color: 'var(--brand-light)' }}>
            <Link href="/venues" style={{ color: 'var(--brand-light)', textDecoration: 'none' }}>Venues</Link> / Udaipur
          </p>
          <h1>Weddings in Udaipur</h1>
          <div className="section-divider" />
          <p>The City of Lakes — India&apos;s most romantic destination for royal weddings</p>
        </div>
      </div>

      <section className="py-12 md:py-24 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-start">
          <Reveal direction="right">
            <div>
              <p className="eyebrow mb-4">Why Udaipur?</p>
              <h2 className="display-xl" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: 'var(--ink)', marginBottom: '1.5rem' }}>The City of Lakes</h2>
              <p className="leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                Nestled in the Aravalli hills, Udaipur is the most romantic city in Rajasthan.
                Shimmering lakes, baroque palaces, and a royal heritage that spans centuries create
                the perfect backdrop for a fairy-tale wedding.
              </p>
              <p className="leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
                From the ethereal Taj Lake Palace — appearing to float on Lake Pichola — to the
                grand City Palace complex, Udaipur offers a range of venues for intimate gatherings
                and grand celebrations alike.
              </p>
              <Link href="/contact" className="btn-primary"><span>Plan My Udaipur Wedding</span></Link>
            </div>
          </Reveal>
          <Stagger className="space-y-4" gap={0.08}>
            {facts.map((f) => (
              <StaggerItem key={f.label} direction="left">
                <div className="modern-card p-5" style={{ borderLeft: '3px solid var(--brand)' }}>
                  <div className="font-semibold mb-1" style={{ fontFamily: 'var(--display-font)', fontStyle: 'italic', color: 'var(--charcoal)' }}>{f.label}</div>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{f.value}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
