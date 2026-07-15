'use client';

import { useEffect, useRef, useState } from 'react';
import { Reveal } from '@/components/Reveal';

const reels = [
  { src: '/videos/reels/reel-1.mp4', caption: 'Baraat Procession' },
  { src: '/videos/reels/reel-2.mp4', caption: 'Mandap Reveal' },
  { src: '/videos/reels/reel-3.mp4', caption: 'Sangeet Night' },
  { src: '/videos/reels/reel-4.mp4', caption: 'Reception Dance' },
  { src: '/videos/reels/reel-5.mp4', caption: 'Candid Celebrations' },
];

function ReelCard({ src, caption, variant }: { src: string; caption: string; variant: 'desktop' | 'mobile' }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (variant !== 'mobile') return;
    const el = wrapRef.current;
    const vid = videoRef.current;
    if (!el || !vid) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
          vid.play().catch(() => {});
          setPlaying(true);
        } else {
          vid.pause();
          setPlaying(false);
        }
      },
      { threshold: [0, 0.6, 1] }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [variant]);

  const handleDesktopEnter = () => {
    videoRef.current?.play().catch(() => {});
    setPlaying(true);
  };
  const handleDesktopLeave = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setPlaying(false);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMuted((m) => !m);
  };

  return (
    <div
      ref={wrapRef}
      className="relative overflow-hidden group"
      style={variant === 'mobile'
        ? { width: '100%', height: '100%', flexShrink: 0, scrollSnapAlign: 'start', background: '#000' }
        : { width: '260px', aspectRatio: '9/16', flexShrink: 0, scrollSnapAlign: 'start', background: '#000' }
      }
      onMouseEnter={variant === 'desktop' ? handleDesktopEnter : undefined}
      onMouseLeave={variant === 'desktop' ? handleDesktopLeave : undefined}
      onClick={variant === 'mobile' ? toggleMute : undefined}
    >
      <video
        ref={videoRef}
        src={src}
        muted={muted}
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,11,9,0.75) 0%, transparent 40%, rgba(13,11,9,0.25) 100%)', pointerEvents: 'none' }} />

      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-14 h-14 rounded-full border-2 flex items-center justify-center" style={{ borderColor: 'var(--brand-light)', background: 'rgba(181,66,42,0.2)' }}>
            <div className="w-0 h-0 ml-1" style={{ borderTop: '9px solid transparent', borderBottom: '9px solid transparent', borderLeft: '15px solid white' }} />
          </div>
        </div>
      )}

      {variant === 'mobile' && (
        <button
          onClick={toggleMute}
          className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-sm"
          style={{ background: 'rgba(0,0,0,0.45)', color: 'white' }}
          aria-label={muted ? 'Unmute' : 'Mute'}
        >
          {muted ? '🔇' : '🔊'}
        </button>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="w-6 h-6 rounded-full flex items-center justify-center text-[0.6rem] font-bold" style={{ background: 'var(--brand)', color: 'white' }}>BW</span>
          <span style={{ fontFamily: 'var(--body-font)', fontSize: '0.68rem', fontWeight: 600, color: 'white' }}>bajranngweddings</span>
        </div>
        <p style={{ fontFamily: 'var(--display-font)', fontStyle: 'italic', fontSize: variant === 'mobile' ? '1.15rem' : '0.9rem', color: 'rgba(253,250,247,0.95)' }}>{caption}</p>
      </div>
    </div>
  );
}

export default function VideoReels() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: dir * 300, behavior: 'smooth' });
  };

  return (
    <section style={{ background: 'var(--charcoal)', padding: 'clamp(3rem, 9vw, 7rem) 0' }} className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(181,66,42,0.14) 0%, transparent 70%)' }} />
      <div className="max-w-[1300px] mx-auto px-6 relative">
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p className="label mb-4" style={{ color: 'rgba(181,66,42,0.9)' }}>Watch The Magic</p>
            <h2 className="display-xl" style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', color: 'rgba(253,250,247,0.94)', marginBottom: '0.75rem' }}>
              Wedding Reels
            </h2>
            <p style={{ color: 'rgba(253,250,247,0.4)', fontSize: '0.9rem', marginTop: '1rem' }}>Cinematic moments, straight from real Bajranng celebrations</p>
          </div>
        </Reveal>

        {/* Desktop: horizontal slider */}
        <div className="hidden md:block relative">
          <div ref={scrollerRef} className="flex gap-5 overflow-x-auto pb-2 scrollbar-hide" style={{ scrollSnapType: 'x mandatory' }}>
            {reels.map((r) => (
              <ReelCard key={r.src} src={r.src} caption={r.caption} variant="desktop" />
            ))}
          </div>
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Scroll left"
            className="absolute -left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center glass-dark"
            style={{ color: 'white' }}
          >
            ‹
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Scroll right"
            className="absolute -right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center glass-dark"
            style={{ color: 'white' }}
          >
            ›
          </button>
        </div>

        {/* Mobile: full reels-style vertical snap feed */}
        <div
          className="md:hidden mx-auto flex flex-col overflow-y-auto scrollbar-hide rounded-sm"
          style={{ height: '78vh', maxWidth: '360px', scrollSnapType: 'y mandatory' }}
        >
          {reels.map((r) => (
            <ReelCard key={r.src} src={r.src} caption={r.caption} variant="mobile" />
          ))}
        </div>
        <p className="md:hidden text-center mt-4" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          ↑ Swipe for more ↑
        </p>
      </div>
    </section>
  );
}
