import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Weddings in Jodhpur | Bajranng Weddings',
  description: 'Plan your wedding in Jodhpur — the Blue City. Umaid Bhawan Palace and Mehrangarh Fort create iconic wedding backdrops.',
};

const facts = [
  { label: 'Iconic Venues', value: 'Umaid Bhawan Palace, Mehrangarh Fort, Ajit Bhawan, RAAS Jodhpur' },
  { label: 'Best Season', value: 'November to February — dramatic sunsets, cool nights' },
  { label: 'Guest Capacity', value: '50 to 3,000+ guests' },
  { label: 'Signature Experience', value: 'Fort-lit ceremony with folk musicians echoing off 15th-century walls' },
];

export default function JodhpurPage() {
  return (
    <>
      <div className="page-hero" style={{ background: 'var(--ink)' }}>
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <Image src="/images/venues/jodhpur.jpg" alt="Jodhpur" fill priority style={{ objectFit: 'cover', opacity: 0.32 }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(13,11,9,0.4) 0%, rgba(13,11,9,0.85) 100%)' }} />
        <div className="relative">
          <p className="label mb-4" style={{ color: 'var(--brand-light)' }}>
            <Link href="/venues" style={{ color: 'var(--brand-light)', textDecoration: 'none' }}>Venues</Link> / Jodhpur
          </p>
          <h1>Weddings in Jodhpur</h1>
          <div className="section-divider" />
          <p>The Blue City — dramatic forts, golden sands, and timeless royal elegance</p>
        </div>
      </div>

      <section className="py-24 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-start">
          <Reveal direction="right">
            <div>
              <p className="eyebrow mb-4">Why Jodhpur?</p>
              <h2 className="display-xl" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: 'var(--ink)', marginBottom: '1.5rem' }}>The Blue City</h2>
              <p className="leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                Jodhpur is drama personified. The massive Mehrangarh Fort rises 400 feet above the city,
                its sandstone walls glowing golden at sunset. The indigo-painted old city below creates
                a surreal contrast that makes every photograph extraordinary.
              </p>
              <p className="leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
                Umaid Bhawan Palace, still a royal residence, is considered one of the world&apos;s finest
                wedding venues — combining living heritage with five-star luxury.
              </p>
              <Link href="/contact" className="btn-primary"><span>Plan My Jodhpur Wedding</span></Link>
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
