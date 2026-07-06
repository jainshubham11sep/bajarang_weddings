'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Footer() {
  const [logoError, setLogoError] = useState(false);
  return (
    <footer style={{ background: 'var(--charcoal)', color: 'rgba(255,255,255,0.75)' }}>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="mb-5">
              {!logoError ? (
                <Image
                  src="/logo.png"
                  alt="Bajranng Weddings"
                  width={160}
                  height={56}
                  className="object-contain brightness-0 invert opacity-90"
                  style={{ height: '48px', width: 'auto' }}
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="leading-none">
                  <span style={{ color: 'var(--brand-light)', fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '1.6rem', fontWeight: 700, display: 'block' }}>
                    Bajranng
                  </span>
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Georgia, serif', fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase' }}>
                    Weddings
                  </span>
                </div>
              )}
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.6)' }}>
              India&apos;s premier luxury wedding planners, crafting unforgettable royal celebrations
              across Rajasthan and beyond.
            </p>
            <div className="flex gap-3">
              {[
                { label: 'Instagram', icon: 'I', href: 'https://www.instagram.com/bajranngweddings' },
                { label: 'Facebook', icon: 'F', href: '#' },
                { label: 'YouTube', icon: 'Y', href: '#' },
                { label: 'Pinterest', icon: 'P', href: '#' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href !== '#' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border flex items-center justify-center text-xs transition-all"
                  style={{ borderColor: 'rgba(255,255,255,0.2)' }}
                  title={s.label}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--brand-light)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--brand-light)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)';
                    (e.currentTarget as HTMLElement).style.color = '';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-xs tracking-[0.2em] uppercase mb-5 pb-2 border-b"
              style={{ borderColor: 'var(--brand)', color: 'var(--brand-light)' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'About Us', href: '/about' },
                { label: "Founder's Note", href: '/about/founders' },
                { label: 'Our Services', href: '/services' },
                { label: 'Photo Albums', href: '/albums' },
                { label: 'Wedding Videos', href: '/videos' },
                { label: 'Our Team', href: '/team' },
                { label: 'Testimonials', href: '/testimonials' },
                { label: 'Contact Us', href: '/contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm transition-colors"
                    style={{ color: 'rgba(255,255,255,0.65)' }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--brand-light)')}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.65)')}
                  >
                    → {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Venues */}
          <div>
            <h4
              className="text-xs tracking-[0.2em] uppercase mb-5 pb-2 border-b"
              style={{ borderColor: 'var(--brand)', color: 'var(--brand-light)' }}
            >
              Wedding Destinations
            </h4>
            <ul className="space-y-2.5">
              {['Udaipur', 'Jaipur', 'Jodhpur', 'Jaisalmer', 'Pushkar', 'Ranthambhor'].map((v) => (
                <li key={v}>
                  <Link
                    href={`/venues/${v.toLowerCase()}`}
                    className="text-sm transition-colors"
                    style={{ color: 'rgba(255,255,255,0.65)' }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--brand-light)')}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.65)')}
                  >
                    → {v}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs tracking-[0.2em] uppercase mb-5 pb-2 border-b"
              style={{ borderColor: 'var(--brand)', color: 'var(--brand-light)' }}
            >
              Get In Touch
            </h4>
            <div className="space-y-3 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
              <p className="flex gap-2 items-start leading-snug">
                <span>📍</span>
                <span>414, near Hadoti Hospital, Special, Rajiv Gandhi Nagar, Kota, Rajasthan 324005</span>
              </p>
              <p>
                📞{' '}
                <a href="tel:+919829037466" className="transition-colors hover:text-white">
                  +91 98290 37466
                </a>
              </p>
              <p>
                📞{' '}
                <a href="tel:+919636548645" className="transition-colors hover:text-white">
                  +91 96365 48645
                </a>
              </p>
              <p>
                ✉️{' '}
                <a href="mailto:eventsbajranng@gmail.com" className="transition-colors hover:text-white">
                  eventsbajranng@gmail.com
                </a>
              </p>
              <div className="pt-3">
                <Link
                  href="/contact"
                  className="btn-outline text-xs"
                  style={{ color: 'var(--brand-light)', borderColor: 'var(--brand-light)' }}
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t py-5 text-center text-xs"
        style={{ borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.4)' }}
      >
        <p>
          © {new Date().getFullYear()} Bajranng Weddings. All rights reserved. | Luxury Wedding
          Planners in India | Kota, Rajasthan
        </p>
      </div>
    </footer>
  );
}
