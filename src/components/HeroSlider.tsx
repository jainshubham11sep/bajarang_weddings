'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const slides = [
  { img: '/images/wedding-gallery/wg-4.jpg', tag: 'Royal Mandap Ceremonies', pos: 'center 30%' },
  { img: '/images/wedding-gallery/wg-2.jpg', tag: 'Destination Celebrations', pos: 'center 20%' },
  { img: '/images/wedding-gallery/wg-9.jpg', tag: 'Golden Hour Romance', pos: 'center 25%' },
  { img: '/images/wedding-gallery/wg-6.jpg', tag: 'Timeless Rajasthani Traditions', pos: 'center 22%' },
  { img: '/images/wedding-gallery/wg-13.jpg', tag: 'Grand Royal Receptions', pos: 'center 25%' },
];

const AUTO_MS = 6000;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [progressKey, setProgressKey] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((next: number) => {
    setDir(next > index || (index === slides.length - 1 && next === 0) ? 1 : -1);
    setIndex(((next % slides.length) + slides.length) % slides.length);
    setProgressKey((k) => k + 1);
  }, [index]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setDir(1);
      setIndex((i) => (i + 1) % slides.length);
      setProgressKey((k) => k + 1);
    }, AUTO_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x, y });
  };

  const slide = slides[index];

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="relative min-h-screen flex flex-col items-center justify-center text-white text-center overflow-hidden"
      style={{ background: 'var(--ink)', perspective: '1400px' }}
    >
      {/* Slides */}
      <AnimatePresence mode="sync" initial={false} custom={dir}>
        <motion.div
          key={index}
          custom={dir}
          initial={{ opacity: 0, scale: 1.12 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'absolute', inset: 0 }}
        >
          <motion.div
            animate={{ scale: 1.12 }}
            initial={{ scale: 1 }}
            transition={{ duration: AUTO_MS / 1000 + 1.4, ease: 'linear' }}
            style={{ position: 'absolute', inset: 0 }}
          >
            <Image
              src={slide.img}
              alt={slide.tag}
              fill
              priority={index === 0}
              style={{ objectFit: 'cover', objectPosition: slide.pos }}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(13,11,9,0.5) 0%, rgba(13,11,9,0.72) 55%, rgba(13,11,9,0.92) 100%)' }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 40% at 50% 45%, rgba(181,66,42,0.22) 0%, transparent 70%)',
      }} />
      <div className="absolute inset-6 pointer-events-none hidden md:block" style={{ border: '1px solid rgba(255,255,255,0.08)' }} />

      {/* Main content, subtly tilts with the cursor for a premium 3D feel */}
      <motion.div
        className="relative z-10 max-w-[960px] mx-auto px-6 py-24"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: tilt.x * 4, rotateX: -tilt.y * 4 }}
        transition={{ type: 'spring', stiffness: 60, damping: 15 }}
      >
        <p className="label mb-5" style={{ color: 'var(--brand-light)', letterSpacing: '0.4em', fontSize: '0.72rem' }}>
          Bajranng Weddings &nbsp;·&nbsp; Est. 1991
        </p>

        <h1 className="display-xl" style={{ fontSize: 'clamp(3.2rem, 9vw, 7.5rem)', color: 'rgba(253,250,247,0.97)', marginBottom: '0.1em' }}>
          Where Dreams Become
        </h1>
        <h1 className="display-xl" style={{ fontSize: 'clamp(3.2rem, 9vw, 7.5rem)', color: 'var(--brand-light)', marginBottom: '1.75rem' }}>
          Royal Celebrations
        </h1>

        {/* Sliding caption per slide */}
        <div className="h-8 flex items-center justify-center overflow-hidden mb-8">
          <AnimatePresence mode="wait">
            <motion.p
              key={slide.tag}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: 'var(--display-font)',
                fontStyle: 'italic',
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                color: 'rgba(253,250,247,0.7)',
              }}
            >
              {slide.tag}
            </motion.p>
          </AnimatePresence>
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" className="btn-primary"><span>Begin Your Journey</span></Link>
          <Link href="/albums" className="btn-ghost-light"><span>View Our Work</span></Link>
        </div>
      </motion.div>

      {/* Floating glass badge — tilts opposite for parallax depth */}
      <motion.div
        className="hidden lg:flex absolute glass-dark"
        style={{
          top: '22%',
          right: '7%',
          padding: '1.1rem 1.5rem',
          flexDirection: 'column',
          alignItems: 'flex-start',
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateY: tilt.x * -10,
          rotateX: tilt.y * 10,
          x: tilt.x * -14,
          y: tilt.y * -14,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 12 }}
      >
        <span style={{ fontFamily: 'var(--display-font)', fontStyle: 'italic', fontSize: '1.75rem', color: 'var(--brand-light)', lineHeight: 1 }}>2000+</span>
        <span style={{ fontFamily: 'var(--body-font)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginTop: '0.35rem' }}>Weddings Crafted</span>
      </motion.div>

      <motion.div
        className="hidden lg:flex absolute glass-dark"
        style={{
          bottom: '20%',
          left: '6%',
          padding: '1.1rem 1.5rem',
          flexDirection: 'column',
          alignItems: 'flex-start',
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateY: tilt.x * -10,
          rotateX: tilt.y * 10,
          x: tilt.x * 10,
          y: tilt.y * 10,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 12 }}
      >
        <span style={{ fontFamily: 'var(--display-font)', fontStyle: 'italic', fontSize: '1.75rem', color: 'var(--brand-light)', lineHeight: 1 }}>35+</span>
        <span style={{ fontFamily: 'var(--body-font)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginTop: '0.35rem' }}>Years of Legacy</span>
      </motion.div>

      {/* Slide controls */}
      <div className="absolute z-20 flex items-center gap-5" style={{ bottom: '2.25rem', right: '2rem' }}>
        <button
          aria-label="Previous slide"
          onClick={() => goTo(index - 1)}
          className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full border transition-all hover:bg-white/10"
          style={{ borderColor: 'rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.8)' }}
        >
          ‹
        </button>
        <div className="flex items-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.tag}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className="relative overflow-hidden"
              style={{ width: i === index ? '28px' : '8px', height: '4px', background: 'rgba(255,255,255,0.25)', transition: 'width 0.4s var(--ease-out)' }}
            >
              {i === index && (
                <motion.span
                  key={progressKey}
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: AUTO_MS / 1000, ease: 'linear' }}
                  style={{ position: 'absolute', inset: 0, background: 'var(--brand-light)' }}
                />
              )}
            </button>
          ))}
        </div>
        <button
          aria-label="Next slide"
          onClick={() => goTo(index + 1)}
          className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full border transition-all hover:bg-white/10"
          style={{ borderColor: 'rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.8)' }}
        >
          ›
        </button>
      </div>

      {/* Slide counter */}
      <div className="absolute z-20 hidden md:flex items-center gap-2" style={{ bottom: '2.25rem', left: '2rem', fontFamily: 'var(--display-font)', fontStyle: 'italic' }}>
        <span style={{ fontSize: '1.1rem', color: 'var(--brand-light)' }}>{String(index + 1).padStart(2, '0')}</span>
        <span style={{ width: '20px', height: '1px', background: 'rgba(255,255,255,0.3)' }} />
        <span style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.4)' }}>{String(slides.length).padStart(2, '0')}</span>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', opacity: 0.4 }} className="hidden sm:flex">
        <span style={{ fontFamily: 'var(--body-font)', fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>Scroll</span>
        <div style={{ width: '1px', height: '2rem', background: 'rgba(181,66,42,0.6)' }} />
      </div>
    </section>
  );
}
