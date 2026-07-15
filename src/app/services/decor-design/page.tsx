import Link from 'next/link';
import type { Metadata } from 'next';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Wedding Décor & Design Services | Bajranng Weddings',
  description: 'Bespoke wedding décor and design by our in-house team — floral installations, mandap design, lighting, and themed setups.',
};

const offerings = [
  { title: 'Floral Architecture', desc: 'Custom floral installations, arches, and walls designed and built in-house.' },
  { title: 'Mandap Design', desc: 'Signature mandap creations blending traditional and contemporary aesthetics.' },
  { title: 'Lighting Design', desc: 'Atmospheric lighting transformations — fairy lights, chandeliers, and LED installations.' },
  { title: 'Thematic Décor', desc: 'Complete theme-based setups: Mughal, Rajputana, Tropical, Garden, and more.' },
  { title: 'Stage & Backdrop Design', desc: 'Dramatic reception backdrops and ceremony stages that photograph beautifully.' },
  { title: 'Table Centrepieces', desc: 'Handcrafted centrepieces and tablescapes for every function.' },
];

export default function DecorDesignPage() {
  return (
    <>
      <div className="page-hero">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(181,66,42,0.2) 0%, transparent 70%)' }} />
        <div className="relative">
          <p className="label mb-4" style={{ color: 'var(--brand-light)' }}>
            <Link href="/services" style={{ color: 'var(--brand-light)', textDecoration: 'none' }}>Services</Link> / Décor & Design
          </p>
          <h1>Wedding Décor & Design Services</h1>
          <div className="section-divider" />
          <p>Where imagination meets craftsmanship — every element designed and built by our in-house artists</p>
        </div>
      </div>

      <section className="py-24 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="leading-relaxed text-center max-w-3xl mx-auto mb-14" style={{ color: 'var(--text-muted)' }}>
              Our décor philosophy is simple: every wedding is a canvas, and we paint it with intention.
              From a single blooming centrepiece to a 5,000 sq ft mandap hall transformation, every element
              is conceived, designed, and executed by our in-house team of 30+ designers and 50+ craftsmen.
            </p>
          </Reveal>
          <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" gap={0.06}>
            {offerings.map((o) => (
              <StaggerItem key={o.title}>
                <div className="modern-card p-6 h-full" style={{ borderTop: '3px solid var(--brand)' }}>
                  <h3 className="font-semibold mb-2" style={{ fontFamily: 'var(--display-font)', fontStyle: 'italic', color: 'var(--charcoal)' }}>{o.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{o.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-14 text-center">
            <Link href="/contact" className="btn-primary"><span>Request a Design Consultation</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
