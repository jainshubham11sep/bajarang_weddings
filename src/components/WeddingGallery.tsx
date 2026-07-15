'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { weddingGalleryPhotos } from '@/data/weddingGallery';

const [big, topRight, bottomRight] = weddingGalleryPhotos;
const totalCount = weddingGalleryPhotos.length;

export default function WeddingGallery() {
  return (
    <section style={{ background: 'var(--ink)', padding: '7rem 1.5rem' }}>
      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p className="label mb-4" style={{ color: 'rgba(181,66,42,0.9)' }}>Moments We&apos;ve Crafted</p>
            <h2 className="display-xl" style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', color: 'rgba(253,250,247,0.94)', marginBottom: '0.75rem' }}>
              Wedding Gallery
            </h2>
            <p style={{ color: 'rgba(253,250,247,0.4)', fontSize: '0.9rem', marginTop: '1rem' }}>Real weddings, real emotions — step inside the Bajranng experience</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Link
            href="/albums"
            className="group grid grid-cols-2 gap-3 mx-auto"
            style={{ maxWidth: '820px', height: 'clamp(360px, 55vw, 520px)' }}
          >
            {/* Large featured photo */}
            <div className="relative overflow-hidden row-span-2">
              <Image
                src={big.src}
                alt={big.caption}
                fill
                sizes="(max-width: 768px) 50vw, 410px"
                style={{ objectFit: 'cover', transition: 'transform 0.8s var(--ease-out)' }}
                className="group-hover:scale-105"
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,11,9,0.7) 0%, transparent 45%)' }} />
              <p style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem', fontFamily: 'var(--display-font)', fontStyle: 'italic', color: 'white', fontSize: '1.05rem' }}>{big.caption}</p>
            </div>

            {/* Top-right photo */}
            <div className="relative overflow-hidden">
              <Image
                src={topRight.src}
                alt={topRight.caption}
                fill
                sizes="(max-width: 768px) 50vw, 400px"
                style={{ objectFit: 'cover', transition: 'transform 0.8s var(--ease-out)' }}
                className="group-hover:scale-105"
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,11,9,0.55) 0%, transparent 55%)' }} />
            </div>

            {/* Bottom-right photo with "view full gallery" overlay */}
            <div className="relative overflow-hidden">
              <Image
                src={bottomRight.src}
                alt={bottomRight.caption}
                fill
                sizes="(max-width: 768px) 50vw, 400px"
                style={{ objectFit: 'cover', transition: 'transform 0.8s var(--ease-out)' }}
                className="group-hover:scale-105"
              />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(13,11,9,0.55)', transition: 'background 0.4s ease' }} className="group-hover:bg-black/70" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-3">
                <span style={{ fontFamily: 'var(--display-font)', fontStyle: 'italic', fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'white', lineHeight: 1 }}>+{totalCount - 2}</span>
                <span style={{ fontFamily: 'var(--body-font)', fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)', marginTop: '0.5rem' }}>More Photos</span>
                <span
                  className="mt-3 inline-flex items-center gap-1 transition-transform group-hover:translate-x-1"
                  style={{ fontFamily: 'var(--body-font)', fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--brand-light)', fontWeight: 600 }}
                >
                  View Full Gallery →
                </span>
              </div>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
