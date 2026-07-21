import type { Metadata } from 'next';
import Link from 'next/link';
import VideoReels from '@/components/VideoReels';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Wedding Reels | Bajranng Weddings',
  description: 'Watch real wedding reels from Bajranng Weddings — baraat processions, mandap reveals, sangeet nights, and more.',
};

export default function VideosPage() {
  return (
    <>
      <div className="page-hero">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(181,66,42,0.2) 0%, transparent 70%)' }} />
        <div className="relative">
          <p className="label mb-4" style={{ color: 'var(--brand-light)' }}>Watch & Experience</p>
          <h1>Wedding Reels</h1>
          <div className="section-divider" />
          <p>Cinematic moments, straight from real Bajranng celebrations</p>
        </div>
      </div>

      <VideoReels />

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
