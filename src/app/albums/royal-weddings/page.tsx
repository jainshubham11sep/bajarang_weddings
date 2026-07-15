import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Reveal } from '@/components/Reveal';

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
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(181,66,42,0.2) 0%, transparent 70%)' }} />
        <div className="relative">
          <p className="label mb-4" style={{ color: 'var(--brand-light)' }}>
            <Link href="/albums" style={{ color: 'var(--brand-light)', textDecoration: 'none' }}>Albums</Link> / Royal Weddings
          </p>
          <h1>Royal Weddings</h1>
          <div className="section-divider" />
          <p>Palace ceremonies, royal processions, and regal décor from India&apos;s most iconic heritage properties</p>
        </div>
      </div>

      <section className="py-10 md:py-20 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
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
          </Reveal>
          <div className="mt-12 text-center">
            <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
              Interested in a royal wedding? Let&apos;s plan yours.
            </p>
            <Link href="/contact" className="btn-primary"><span>Plan My Royal Wedding</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
