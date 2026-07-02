import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Haldi Decor Album | Bajranng Weddings',
  description: 'Vibrant and joyful haldi ceremony decor photographs by Bajranng Weddings.',
};

const placeholders = Array.from({ length: 12 }, (_, i) => ({ id: i + 1 }));

export default function HaldiDecorPage() {
  return (
    <>
      <div className="page-hero">
        <p className="text-xs tracking-[0.35em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
          <Link href="/albums" style={{ color: 'var(--gold)', textDecoration: 'none' }}>Albums</Link> / Haldi Decor
        </p>
        <h1>Haldi Decor</h1>
        <div className="section-divider mt-4 mb-4" />
        <p>Joyful and vibrant haldi ceremonies transformed into stunning visual experiences</p>
      </div>
      <section className="py-16 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="gallery-grid">
            {placeholders.map((p) => (
              <div key={p.id} className="gallery-item card-hover group cursor-pointer">
                <div className="w-full h-full flex items-center justify-center"
                  style={{ background: `hsl(${40 + p.id * 3}, 50%, ${10 + p.id * 2}%)` }}>
                  <div className="text-center text-white/60">
                    <div className="text-3xl mb-2" style={{ color: 'var(--gold)' }}>✦</div>
                    <div className="text-xs tracking-widest uppercase">Haldi Setup {p.id}</div>
                  </div>
                </div>
                <div className="gallery-overlay">
                  <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--gold-light)' }}>View Photo</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact" className="btn-primary">Plan My Haldi</Link>
          </div>
        </div>
      </section>
    </>
  );
}
