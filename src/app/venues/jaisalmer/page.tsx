import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Weddings in Jaisalmer | Bajranng Weddings',
  description: 'Desert wedding in Jaisalmer — fort ceremonies, sand dune camps, and golden sunsets in the Thar Desert.',
};

const facts = [
  { label: 'Iconic Venues', value: 'Suryagarh Palace, Fort Rajwada, Nachana Haveli, Desert camps' },
  { label: 'Best Season', value: 'November to February — cool desert nights, star-filled skies' },
  { label: 'Guest Capacity', value: '30 to 1,000+ guests' },
  { label: 'Signature Experience', value: 'Ceremony on sand dunes under a million stars' },
];

export default function JaisalmerPage() {
  return (
    <>
      <div className="page-hero" style={{ background: 'var(--ink)' }}>
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <Image src="/images/venues/jaisalmer.jpg" alt="Jaisalmer" fill priority style={{ objectFit: 'cover', opacity: 0.32 }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(13,11,9,0.4) 0%, rgba(13,11,9,0.85) 100%)' }} />
        <div className="relative">
          <p className="label mb-4" style={{ color: 'var(--brand-light)' }}>
            <Link href="/venues" style={{ color: 'var(--brand-light)', textDecoration: 'none' }}>Venues</Link> / Jaisalmer
          </p>
          <h1>Weddings in Jaisalmer</h1>
          <div className="section-divider" />
          <p>The Golden City — where the desert meets the sky and love becomes legend</p>
        </div>
      </div>

      <section className="py-12 md:py-24 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-start">
          <Reveal direction="right">
            <div>
              <p className="eyebrow mb-4">Why Jaisalmer?</p>
              <h2 className="display-xl" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: 'var(--ink)', marginBottom: '1.5rem' }}>The Golden City</h2>
              <p className="leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                There is no place on earth quite like Jaisalmer at dusk. As the sun descends over the
                Thar Desert, the sandstone fort glows a deep amber gold, and the endless dunes turn
                into waves of copper and crimson.
              </p>
              <p className="leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
                Jaisalmer weddings are intimate, magical, and unlike anything else — whether held
                within the fort walls or under a canopy of stars on the open desert.
              </p>
              <Link href="/contact" className="btn-primary"><span>Plan My Jaisalmer Wedding</span></Link>
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
