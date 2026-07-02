import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Royal Weddings Album | Bajranng Weddings',
  description: 'Explore our royal wedding photography — palace ceremonies, baraat processions, and regal décor from Rajasthan\'s heritage properties.',
};

const placeholders = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  label: `Royal Wedding ${i + 1}`,
}));

export default function RoyalWeddingsPage() {
  return (
    <>
      <div className="page-hero">
        <p className="text-xs tracking-[0.35em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
          <Link href="/albums" style={{ color: 'var(--gold)', textDecoration: 'none' }}>Albums</Link> / Royal Weddings
        </p>
        <h1>Royal Weddings</h1>
        <div className="section-divider mt-4 mb-4" />
        <p>Palace ceremonies, royal processions, and regal décor from India&apos;s most iconic heritage properties</p>
      </div>

      <section className="py-16 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="gallery-grid">
            {placeholders.map((p) => (
              <div key={p.id} className="gallery-item card-hover group cursor-pointer">
                <div className="w-full h-full flex items-center justify-center"
                  style={{ background: `hsl(${20 + p.id * 8}, 30%, ${15 + p.id * 2}%)` }}>
                  <div className="text-center text-white/60">
                    <div className="text-3xl mb-2" style={{ color: 'var(--gold)' }}>✦</div>
                    <div className="text-xs tracking-widest uppercase">{p.label}</div>
                  </div>
                </div>
                <div className="gallery-overlay">
                  <span className="text-white text-xs tracking-widest uppercase" style={{ color: 'var(--gold-light)' }}>View Photo</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
              Interested in a royal wedding? Let&apos;s plan yours.
            </p>
            <Link href="/contact" className="btn-primary">Plan My Royal Wedding</Link>
          </div>
        </div>
      </section>
    </>
  );
}
