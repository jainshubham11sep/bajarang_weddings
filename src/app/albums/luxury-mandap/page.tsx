import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Luxury Mandap Designs | Bajranng Weddings',
  description: 'Our signature mandap designs — floral masterpieces and architectural marvels for your wedding ceremony.',
};

const placeholders = Array.from({ length: 12 }, (_, i) => ({ id: i + 1 }));

export default function LuxuryMandapPage() {
  return (
    <>
      <div className="page-hero">
        <p className="text-xs tracking-[0.35em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
          <Link href="/albums" style={{ color: 'var(--gold)', textDecoration: 'none' }}>Albums</Link> / Luxury Mandap Designs
        </p>
        <h1>Luxury Mandap Designs</h1>
        <div className="section-divider mt-4 mb-4" />
        <p>Our signature mandap creations — from floral masterpieces to architectural marvels</p>
      </div>
      <section className="py-16 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="gallery-grid">
            {placeholders.map((p) => (
              <div key={p.id} className="gallery-item card-hover group cursor-pointer">
                <div className="w-full h-full flex items-center justify-center"
                  style={{ background: `hsl(${100 + p.id * 5}, 35%, ${10 + p.id * 2}%)` }}>
                  <div className="text-center text-white/60">
                    <div className="text-3xl mb-2" style={{ color: 'var(--gold)' }}>✦</div>
                    <div className="text-xs tracking-widest uppercase">Mandap Design {p.id}</div>
                  </div>
                </div>
                <div className="gallery-overlay">
                  <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--gold-light)' }}>View Photo</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact" className="btn-primary">Design My Mandap</Link>
          </div>
        </div>
      </section>
    </>
  );
}
