import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Mehendi Decor Album | Bajranng Weddings',
  description: 'Elegant and intricate mehendi ceremony setups by Bajranng Weddings.',
};

const photos = [
  '/images/gallery/IMG_2008.jpeg',
  '/images/gallery/IMG_2009.jpeg',
  '/images/gallery/IMG_2010.jpeg',
  '/images/gallery/IMG_1935.jpeg',
  '/images/gallery/IMG_1934.jpeg',
  '/images/gallery/IMG_1972.jpeg',
  '/images/gallery/IMG_1973.jpeg',
  '/images/gallery/IMG_1974.jpeg',
  '/images/gallery/IMG_2021.jpeg',
  '/images/gallery/IMG_1938.jpeg',
  '/images/gallery/IMG_1939.jpeg',
  '/images/gallery/IMG_1986.jpeg',
];

export default function MehendiDecorPage() {
  return (
    <>
      <div className="page-hero">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(181,66,42,0.2) 0%, transparent 70%)' }} />
        <div className="relative">
          <p className="label mb-4" style={{ color: 'var(--brand-light)' }}>
            <Link href="/albums" style={{ color: 'var(--brand-light)', textDecoration: 'none' }}>Albums</Link> / Mehendi Decor
          </p>
          <h1>Mehendi Decor</h1>
          <div className="section-divider" />
          <p>Elegant and intricate mehendi setups blending tradition with contemporary aesthetics</p>
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
                    alt={`Mehendi Setup ${i + 1}`}
                    fill
                    style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
                    className="group-hover:scale-105"
                  />
                  <div className="gallery-overlay">
                    <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--gold-light)' }}>View Photo</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <div className="mt-12 text-center">
            <Link href="/contact" className="btn-primary"><span>Plan My Mehendi</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
