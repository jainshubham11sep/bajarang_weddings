import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Weddings in Ranthambhor | Bajranng Weddings',
  description: 'Jungle luxury weddings in Ranthambhor — wild, romantic, and utterly unforgettable.',
};

const facts = [
  { label: 'Iconic Venues', value: 'Aman-i-Khas, SUJÁN Sher Bagh, Sherpur Kalan, Ranthambhore Regency' },
  { label: 'Best Season', value: 'October to June — park open, wildlife active' },
  { label: 'Guest Capacity', value: '20 to 300 guests — ideal for exclusive, intimate gatherings' },
  { label: 'Signature Experience', value: 'Candlelit ceremony in a luxury tented camp under the Milky Way' },
];

export default function RanthambhorPage() {
  return (
    <>
      <div className="page-hero" style={{ background: 'var(--ink)' }}>
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <Image src="/images/venues/ranthambore.jpg" alt="Ranthambhor" fill priority style={{ objectFit: 'cover', opacity: 0.32 }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(13,11,9,0.4) 0%, rgba(13,11,9,0.85) 100%)' }} />
        <div className="relative">
          <p className="label mb-4" style={{ color: 'var(--brand-light)' }}>
            <Link href="/venues" style={{ color: 'var(--brand-light)', textDecoration: 'none' }}>Venues</Link> / Ranthambhor
          </p>
          <h1>Weddings in Ranthambhor</h1>
          <div className="section-divider" />
          <p>Wilderness Royale — celebrate love in the heart of India&apos;s most legendary jungle</p>
        </div>
      </div>

      <section className="py-24 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-start">
          <Reveal direction="right">
            <div>
              <p className="eyebrow mb-4">Why Ranthambhor?</p>
              <h2 className="display-xl" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: 'var(--ink)', marginBottom: '1.5rem' }}>Wilderness Royale</h2>
              <p className="leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                For the adventurous couple seeking something truly extraordinary, Ranthambhor offers
                a wedding experience found nowhere else — luxury tented camps, the haunting silhouette
                of a 10th-century fort, and the possibility of a tiger sighting at dawn.
              </p>
              <p className="leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
                Ultra-luxury properties like Aman-i-Khas and SUJÁN Sher Bagh combine wild nature
                with impeccable five-star hospitality — the ultimate expression of exclusive celebrations.
              </p>
              <Link href="/contact" className="btn-primary"><span>Plan My Ranthambhor Wedding</span></Link>
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
