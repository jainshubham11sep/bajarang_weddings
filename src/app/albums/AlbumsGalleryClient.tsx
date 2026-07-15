'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';
import { weddingGalleryPhotos } from '@/data/weddingGallery';

export default function AlbumsGalleryClient() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <div className="page-hero">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(181,66,42,0.2) 0%, transparent 70%)' }} />
        <div className="relative">
          <p className="label mb-4" style={{ color: 'var(--brand-light)' }}>Moments We&apos;ve Crafted</p>
          <h1>Wedding Gallery</h1>
          <div className="section-divider" />
          <p>Real weddings, real emotions — a visual journey through the Bajranng experience</p>
        </div>
      </div>

      <section className="py-24 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto">
          <Stagger className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" gap={0.06}>
            {weddingGalleryPhotos.map((p, i) => (
              <StaggerItem key={p.src}>
                <button
                  onClick={() => setLightbox(i)}
                  className="modern-card group relative block w-full overflow-hidden"
                  style={{ aspectRatio: '3/4', cursor: 'zoom-in' }}
                >
                  <Image
                    src={p.src}
                    alt={p.caption}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    style={{ objectFit: 'cover', transition: 'transform 0.7s var(--ease-out)' }}
                    className="group-hover:scale-105"
                  />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(13,11,9,0.75) 0%, transparent 45%)',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                  }} className="group-hover:opacity-100" />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1rem', opacity: 0, transform: 'translateY(8px)', transition: 'all 0.4s ease' }} className="group-hover:opacity-100 group-hover:translate-y-0">
                    <p style={{ fontFamily: 'var(--display-font)', fontStyle: 'italic', fontSize: '0.95rem', color: 'white' }}>{p.caption}</p>
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: 'rgba(181,66,42,0.85)', color: 'white', fontSize: '1rem' }}>
                    ⤢
                  </div>
                </button>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal>
            <div className="mt-14 text-center">
              <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
                Loved what you saw? Let&apos;s create your own story.
              </p>
              <Link href="/contact" className="btn-primary"><span>Plan My Wedding</span></Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6"
            style={{ background: 'rgba(8,6,5,0.94)' }}
          >
            <button
              aria-label="Close"
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full border flex items-center justify-center"
              style={{ borderColor: 'rgba(255,255,255,0.25)', color: 'white' }}
            >
              ✕
            </button>
            {lightbox > 0 && (
              <button
                aria-label="Previous"
                onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + weddingGalleryPhotos.length) % weddingGalleryPhotos.length); }}
                className="hidden sm:flex absolute left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border items-center justify-center"
                style={{ borderColor: 'rgba(255,255,255,0.25)', color: 'white' }}
              >
                ‹
              </button>
            )}
            <button
              aria-label="Next"
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % weddingGalleryPhotos.length); }}
              className="hidden sm:flex absolute right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border items-center justify-center"
              style={{ borderColor: 'rgba(255,255,255,0.25)', color: 'white' }}
            >
              ›
            </button>
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              style={{ position: 'relative', maxWidth: '90vw', maxHeight: '86vh' }}
            >
              <Image
                src={weddingGalleryPhotos[lightbox].src}
                alt={weddingGalleryPhotos[lightbox].caption}
                width={weddingGalleryPhotos[lightbox].w}
                height={weddingGalleryPhotos[lightbox].h}
                style={{ width: 'auto', height: 'auto', maxWidth: '90vw', maxHeight: '86vh', objectFit: 'contain' }}
              />
              <p className="text-center mt-4" style={{ fontFamily: 'var(--display-font)', fontStyle: 'italic', color: 'rgba(255,255,255,0.8)' }}>{weddingGalleryPhotos[lightbox].caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
