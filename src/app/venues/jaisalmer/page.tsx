import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Weddings in Jaisalmer | Bajranng Weddings',
  description: 'Desert wedding in Jaisalmer — fort ceremonies, sand dune camps, and golden sunsets in the Thar Desert.',
};

export default function JaisalmerPage() {
  return (
    <>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #2D260E 0%, #3D350E 100%)' }}>
        <p className="text-xs tracking-[0.35em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
          <Link href="/venues" style={{ color: 'var(--gold)', textDecoration: 'none' }}>Venues</Link> / Jaisalmer
        </p>
        <h1>Weddings in Jaisalmer</h1>
        <div className="section-divider mt-4 mb-4" />
        <p>The Golden City — where the desert meets the sky and love becomes legend</p>
      </div>

      <section className="py-20 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="section-title text-left mb-4">Why Jaisalmer?</h2>
              <div className="section-divider mx-0 mb-6" />
              <p className="leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                There is no place on earth quite like Jaisalmer at dusk. As the sun descends over the
                Thar Desert, the sandstone fort glows a deep amber gold, and the endless dunes turn
                into waves of copper and crimson.
              </p>
              <p className="leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
                Jaisalmer weddings are intimate, magical, and unlike anything else — whether held
                within the fort walls or under a canopy of stars on the open desert.
              </p>
              <Link href="/contact" className="btn-primary">Plan My Jaisalmer Wedding</Link>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-5" style={{ borderLeft: '3px solid var(--gold)' }}>
                <div className="font-semibold mb-1" style={{ fontFamily: 'Georgia, serif' }}>Iconic Venues</div>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Suryagarh Palace, Fort Rajwada, Nachana Haveli, Desert camps</p>
              </div>
              <div className="bg-white p-5" style={{ borderLeft: '3px solid var(--gold)' }}>
                <div className="font-semibold mb-1" style={{ fontFamily: 'Georgia, serif' }}>Best Season</div>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>November to February — cool desert nights, star-filled skies</p>
              </div>
              <div className="bg-white p-5" style={{ borderLeft: '3px solid var(--gold)' }}>
                <div className="font-semibold mb-1" style={{ fontFamily: 'Georgia, serif' }}>Guest Capacity</div>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>30 to 1,000+ guests</p>
              </div>
              <div className="bg-white p-5" style={{ borderLeft: '3px solid var(--gold)' }}>
                <div className="font-semibold mb-1" style={{ fontFamily: 'Georgia, serif' }}>Signature Experience</div>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Ceremony on sand dunes under a million stars</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
