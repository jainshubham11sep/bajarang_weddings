import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Weddings in Pushkar | Bajranng Weddings',
  description: 'Intimate and spiritual wedding celebrations in Pushkar — the sacred oasis of Rajasthan.',
};

const facts = [
  { label: 'Iconic Venues', value: 'The Westin Pushkar, RAAS Pushkar, Ananta Spa & Resorts' },
  { label: 'Best Season', value: 'October to March — pleasant weather, serene atmosphere' },
  { label: 'Guest Capacity', value: '30 to 500 guests — best for intimate celebrations' },
  { label: 'Signature Experience', value: 'Lakeside aarti ceremony at dawn — deeply moving' },
];

export default function PushkarPage() {
  return (
    <>
      <div className="page-hero" style={{ background: 'var(--ink)' }}>
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <Image src="/images/venues/pushkar.jpg" alt="Pushkar" fill priority style={{ objectFit: 'cover', opacity: 0.32 }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(13,11,9,0.4) 0%, rgba(13,11,9,0.85) 100%)' }} />
        <div className="relative">
          <p className="label mb-4" style={{ color: 'var(--brand-light)' }}>
            <Link href="/venues" style={{ color: 'var(--brand-light)', textDecoration: 'none' }}>Venues</Link> / Pushkar
          </p>
          <h1>Weddings in Pushkar</h1>
          <div className="section-divider" />
          <p>Sacred Oasis — where spirituality and beauty create the most meaningful celebrations</p>
        </div>
      </div>

      <section className="py-12 md:py-24 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-start">
          <Reveal direction="right">
            <div>
              <p className="eyebrow mb-4">Why Pushkar?</p>
              <h2 className="display-xl" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: 'var(--ink)', marginBottom: '1.5rem' }}>Sacred Oasis</h2>
              <p className="leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                Pushkar is one of India&apos;s most sacred towns, nestled around a serene holy lake
                and ringed by gentle hills. The town&apos;s tranquil energy and spiritual significance
                make it ideal for couples seeking a meaningful, intimate celebration.
              </p>
              <p className="leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
                With boutique heritage properties and the unique backdrop of the Pushkar Lake and
                ghats, weddings here carry a timeless, soulful quality.
              </p>
              <Link href="/contact" className="btn-primary"><span>Plan My Pushkar Wedding</span></Link>
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
