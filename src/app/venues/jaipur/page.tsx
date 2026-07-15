import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Weddings in Jaipur | Bajranng Weddings',
  description: 'Plan your royal wedding in Jaipur — the Pink City. Heritage palaces, vibrant culture, and expert planning by Bajranng Weddings.',
};

const facts = [
  { label: 'Iconic Venues', value: 'Rambagh Palace, Jai Mahal Palace, Samode Palace, Jal Mahal' },
  { label: 'Best Season', value: 'October to March — festive atmosphere, comfortable weather' },
  { label: 'Guest Capacity', value: '100 to 5,000+ guests across multiple properties' },
  { label: 'Signature Experience', value: 'Elephant baraat procession through heritage streets' },
];

export default function JaipurPage() {
  return (
    <>
      <div className="page-hero" style={{ background: 'var(--ink)' }}>
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <Image src="/images/venues/jaipur.jpg" alt="Jaipur" fill priority style={{ objectFit: 'cover', opacity: 0.32 }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(13,11,9,0.4) 0%, rgba(13,11,9,0.85) 100%)' }} />
        <div className="relative">
          <p className="label mb-4" style={{ color: 'var(--brand-light)' }}>
            <Link href="/venues" style={{ color: 'var(--brand-light)', textDecoration: 'none' }}>Venues</Link> / Jaipur
          </p>
          <h1>Weddings in Jaipur</h1>
          <div className="section-divider" />
          <p>The Pink City — where royal grandeur meets vibrant Rajasthani culture</p>
        </div>
      </div>

      <section className="py-24 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-start">
          <Reveal direction="right">
            <div>
              <p className="eyebrow mb-4">Why Jaipur?</p>
              <h2 className="display-xl" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: 'var(--ink)', marginBottom: '1.5rem' }}>The Pink City</h2>
              <p className="leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                Jaipur, the capital of Rajasthan, is where history, culture, and grandeur converge.
                Home to magnificent palaces, vibrant bazaars, and world-class heritage hotels, it&apos;s
                the ideal city for grand weddings with large guest lists.
              </p>
              <p className="leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
                The city&apos;s excellent connectivity, luxury accommodation options, and rich local culture
                make it India&apos;s most popular destination for celebration weddings.
              </p>
              <Link href="/contact" className="btn-primary"><span>Plan My Jaipur Wedding</span></Link>
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
