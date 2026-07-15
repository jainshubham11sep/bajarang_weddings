import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Royal Weddings Album | Bajranng Weddings',
  description: 'Explore our royal wedding photography — palace ceremonies, baraat processions, and regal décor from Rajasthan\'s heritage properties.',
};

const photos = [
  '/images/gallery/IMG_1938.jpeg',
  '/images/gallery/IMG_1937.jpeg',
  '/images/gallery/IMG_1936.jpeg',
  '/images/gallery/IMG_1939.jpeg',
  '/images/gallery/IMG_1972.jpeg',
  '/images/gallery/IMG_1973.jpeg',
  '/images/gallery/IMG_1974.jpeg',
  '/images/gallery/IMG_1932.jpeg',
  '/images/gallery/IMG_1933.jpeg',
  '/images/gallery/IMG_1934.jpeg',
  '/images/gallery/IMG_1935.jpeg',
  '/images/gallery/IMG_1986.jpeg',
];

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
            {photos.map((src, i) => (
              <div key={i} className="gallery-item card-hover group cursor-pointer">
                <Image
                  src={src}
                  alt={`Royal Wedding ${i + 1}`}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.6s ease' }}
                  className="group-hover:scale-105"
                />
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
