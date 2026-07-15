import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Luxury Mandap Designs | Bajranng Weddings',
  description: 'Our signature mandap designs — floral masterpieces and architectural marvels for your wedding ceremony.',
};

const photos = [
  { src: '/images/gallery/IMG_1930.jpeg', alt: 'Full mandap with floral ceiling and ornate arches' },
  { src: '/images/gallery/IMG_1932.jpeg', alt: 'Carved arch detail with floral garlands' },
  { src: '/images/gallery/IMG_1933.jpeg', alt: 'Close-up of arch floral arrangement' },
  { src: '/images/gallery/IMG_1934.jpeg', alt: 'Arch flowers and greenery' },
  { src: '/images/gallery/IMG_2021.jpeg', alt: 'Overhead view of full mandap setup' },
  { src: '/images/gallery/IMG_2022.jpeg', alt: 'Bird\'s-eye mandap with floral arch' },
  { src: '/images/gallery/IMG_2012.jpeg', alt: 'Night view of mandap with string lights' },
  { src: '/images/gallery/IMG_2008.jpeg', alt: 'Floral arch with seating area' },
  { src: '/images/gallery/IMG_1937.jpeg', alt: 'Outdoor golden mandap, daytime' },
  { src: '/images/gallery/IMG_1938.jpeg', alt: 'Golden carved mandap with florals' },
  { src: '/images/gallery/IMG_1935.jpeg', alt: 'Close-up colourful floral arrangement' },
  { src: '/images/gallery/IMG_1936.jpeg', alt: 'Full venue aisle leading to mandap' },
];

export default function LuxuryMandapPage() {
  return (
    <>
      <div className="page-hero" style={{ background: 'var(--ink)' }}>
        {/* Hero background photo */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <Image
            src="/images/gallery/IMG_1930.jpeg"
            alt="Luxury Mandap"
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.25 }}
          />
        </div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p className="label mb-4" style={{ color: 'rgba(181,66,42,0.8)' }}>
            <Link href="/albums" style={{ color: 'inherit', textDecoration: 'none' }}>Albums</Link>{' / '}Luxury Mandap Designs
          </p>
          <h1 style={{ color: 'rgba(253,250,247,0.95)' }}>Luxury Mandap Designs</h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', margin: '1.25rem auto' }}>
            <div style={{ width: '40px', height: '1px', background: 'rgba(181,66,42,0.5)' }} />
            <div style={{ width: '5px', height: '5px', background: 'var(--brand)', borderRadius: '50%' }} />
            <div style={{ width: '40px', height: '1px', background: 'rgba(181,66,42,0.5)' }} />
          </div>
          <p style={{ color: 'rgba(253,250,247,0.55)' }}>Our signature mandap creations — from floral masterpieces to architectural marvels</p>
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
            <Link href="/contact" className="btn-primary"><span>Design My Mandap</span></Link>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--ink)', padding: '5rem 1.5rem', textAlign: 'center' }}>
        <div className="max-w-[560px] mx-auto">
          <h2 style={{ fontFamily: 'var(--display-font)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 300, fontStyle: 'italic', color: 'rgba(253,250,247,0.9)', marginBottom: '2rem' }}>
            Let&rsquo;s Design Your Dream Mandap
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
