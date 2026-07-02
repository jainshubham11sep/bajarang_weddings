import Link from 'next/link';
import type { Metadata } from 'next';

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
        <p className="text-xs tracking-[0.35em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
          <Link href="/services" style={{ color: 'var(--gold)', textDecoration: 'none' }}>Services</Link> / Décor & Design
        </p>
        <h1>Wedding Décor & Design Services</h1>
        <div className="section-divider mt-4 mb-4" />
        <p>Where imagination meets craftsmanship — every element designed and built by our in-house artists</p>
      </div>

      <section className="py-20 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-5xl mx-auto">
          <p className="leading-relaxed text-center max-w-3xl mx-auto mb-12" style={{ color: 'var(--text-muted)' }}>
            Our décor philosophy is simple: every wedding is a canvas, and we paint it with intention.
            From a single blooming centrepiece to a 5,000 sq ft mandap hall transformation, every element
            is conceived, designed, and executed by our in-house team of 30+ designers and 50+ craftsmen.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {offerings.map((o) => (
              <div key={o.title} className="bg-white p-6 card-hover" style={{ borderTop: '3px solid var(--gold)' }}>
                <h3 className="font-semibold mb-2" style={{ fontFamily: 'Georgia, serif', color: 'var(--charcoal)' }}>{o.title}</h3>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{o.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact" className="btn-primary">Request a Design Consultation</Link>
          </div>
        </div>
      </section>
    </>
  );
}
