import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Videos | Bajranng Weddings',
  description: 'Watch wedding highlight films, behind-the-scenes, decor transformation videos, and full wedding films by Bajranng Weddings.',
};

const galleryPool = [
  '/images/gallery/IMG_1936.jpeg',
  '/images/gallery/IMG_1937.jpeg',
  '/images/gallery/IMG_1938.jpeg',
  '/images/gallery/IMG_2021.jpeg',
  '/images/gallery/IMG_1986.jpeg',
  '/images/gallery/IMG_2008.jpeg',
];

const categories = [
  {
    id: 'highlights',
    label: 'Wedding Highlights',
    desc: 'Cinematic short films capturing the best moments of our couples\' special days.',
    videos: 8,
  },
  {
    id: 'bts',
    label: 'Behind The Scenes',
    desc: 'Go inside our production process — see how we transform venues into magical spaces.',
    videos: 5,
  },
  {
    id: 'decor',
    label: 'Decor Transformations',
    desc: 'Time-lapse and walkthrough videos of our most spectacular décor installations.',
    videos: 6,
  },
  {
    id: 'experiences',
    label: 'Client Experiences',
    desc: 'Hear from couples who trusted Bajranng Weddings with their most important day.',
    videos: 4,
  },
  {
    id: 'films',
    label: 'Full Wedding Films',
    desc: 'Complete documentary-style wedding films for couples who want the full story told.',
    videos: 3,
  },
];

export default function VideosPage() {
  return (
    <>
      <div className="page-hero">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(181,66,42,0.2) 0%, transparent 70%)' }} />
        <div className="relative">
          <p className="label mb-4" style={{ color: 'var(--brand-light)' }}>Watch & Experience</p>
          <h1>Wedding Videos</h1>
          <div className="section-divider" />
          <p>Cinematic stories of love, celebration, and royal grandeur</p>
        </div>
      </div>

      {categories.map((cat, idx) => (
        <section key={cat.id} id={cat.id} className="py-10 md:py-20 px-4"
          style={{ background: idx % 2 === 0 ? 'var(--cream)' : 'var(--ivory)' }}>
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <div className="mb-10">
                <p className="eyebrow mb-3">{cat.videos} Videos</p>
                <h2 className="display-xl" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: 'var(--ink)', marginBottom: '0.5rem' }}>{cat.label}</h2>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{cat.desc}</p>
              </div>
            </Reveal>
            <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" gap={0.06}>
              {Array.from({ length: Math.min(cat.videos, 3) }, (_, i) => (
                <StaggerItem key={i}>
                  <div className="modern-card cursor-pointer group overflow-hidden"
                    style={{ aspectRatio: '16/9', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                      src={galleryPool[(idx + i) % galleryPool.length]}
                      alt={`${cat.label} ${i + 1}`}
                      fill
                      style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
                      className="group-hover:scale-105"
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(13,11,9,0.4)' }} />
                    <div className="relative w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all group-hover:scale-110"
                      style={{ borderColor: 'var(--brand-light)', background: 'rgba(181,66,42,0.2)' }}>
                      <div className="w-0 h-0 ml-1" style={{
                        borderTop: '8px solid transparent',
                        borderBottom: '8px solid transparent',
                        borderLeft: '14px solid white',
                      }} />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 text-xs tracking-widest uppercase"
                      style={{ color: 'rgba(255,255,255,0.85)' }}>
                      {cat.label} — {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      ))}

      <section className="py-10 md:py-20 px-4 text-center relative overflow-hidden" style={{ background: 'var(--brand)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 0%, rgba(255,255,255,0.1) 0%, transparent 70%)' }} />
        <Reveal>
          <div className="relative">
            <h2 className="display-xl" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'white', marginBottom: '1rem' }}>
              Want a Video for Your Wedding?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem' }}>Our in-house videography team captures every precious moment with cinematic artistry.</p>
            <Link href="/contact" className="btn-ghost-light" style={{ background: 'white', color: 'var(--brand-dark)', borderColor: 'white' }}><span>Enquire Now</span></Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
