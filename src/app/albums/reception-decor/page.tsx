import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Reception Decor Album | Bajranng Weddings',
  description: 'Grand reception halls and unforgettable floral installations by Bajranng Weddings.',
};

const photos = [
  { src: '/images/gallery/IMG_1986.jpeg', alt: 'Reception dining setup with elegant seating' },
  { src: '/images/gallery/IMG_2009.jpeg', alt: 'Floral arrangements with reception seating' },
  { src: '/images/gallery/IMG_2010.jpeg', alt: 'Detailed floral bouquet arrangement' },
  { src: '/images/gallery/IMG_2011.jpeg', alt: 'Night view of mandap with string lights' },
  { src: '/images/gallery/IMG_1972.jpeg', alt: 'Crystal chandelier with floral strands' },
  { src: '/images/gallery/IMG_1973.jpeg', alt: 'Gold butterfly chandelier, evening ambience' },
  { src: '/images/gallery/IMG_1974.jpeg', alt: 'Chandelier and floral ceiling installation' },
  { src: '/images/gallery/IMG_1939.jpeg', alt: 'Elaborate floral and greenery installation' },
];

export default function ReceptionDecorPage() {
  return (
    <>
      <div className="page-hero" style={{ background: 'var(--ink)' }}>
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <Image
            src="/images/gallery/IMG_1986.jpeg"
            alt="Reception Decor"
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.25 }}
          />
        </div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p className="label mb-4" style={{ color: 'rgba(181,66,42,0.8)' }}>
            <Link href="/albums" style={{ color: 'inherit', textDecoration: 'none' }}>Albums</Link>{' / '}Reception Decor
          </p>
          <h1 style={{ color: 'rgba(253,250,247,0.95)' }}>Reception Decor</h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', margin: '1.25rem auto' }}>
            <div style={{ width: '40px', height: '1px', background: 'rgba(181,66,42,0.5)' }} />
            <div style={{ width: '5px', height: '5px', background: 'var(--brand)', borderRadius: '50%' }} />
            <div style={{ width: '40px', height: '1px', background: 'rgba(181,66,42,0.5)' }} />
          </div>
          <p style={{ color: 'rgba(253,250,247,0.55)' }}>Grand reception halls, dramatic entrances, and unforgettable floral installations</p>
        </div>
      </div>

      <section style={{ background: 'var(--cream)', padding: '5rem 1.5rem' }}>
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="gallery-grid">
              {photos.map((photo, i) => (
                <div key={i} className="gallery-item card-hover group cursor-pointer">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.6s ease' }}
                    className="group-hover:scale-105"
                  />
                  <div className="gallery-overlay">
                    <span style={{
                      fontFamily: 'var(--body-font)',
                      fontSize: '0.6rem',
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                      color: 'rgba(253,250,247,0.9)',
                    }}>View Photo</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link href="/contact" className="btn-primary"><span>Plan My Reception</span></Link>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--ink)', padding: '5rem 1.5rem', textAlign: 'center' }}>
        <div className="max-w-[560px] mx-auto">
          <h2 style={{ fontFamily: 'var(--display-font)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 300, fontStyle: 'italic', color: 'rgba(253,250,247,0.9)', marginBottom: '2rem' }}>
            Let&rsquo;s Plan Your Grand Reception
          </h2>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary"><span>Start Planning</span></Link>
            <Link href="/albums" className="btn-ghost-light"><span>All Albums</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
