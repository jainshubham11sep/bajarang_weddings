'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/about',
    children: [
      { label: 'Our Story', href: '/about#our-story' },
      { label: "Founder's Note", href: '/about/founders' },
      { label: 'Why Choose Us', href: '/about#why-choose' },
      { label: 'In-house Production', href: '/about#production' },
      { label: 'Luxury & Royal Expertise', href: '/about#expertise' },
    ],
  },
  {
    label: 'Albums',
    href: '/albums',
    children: [
      { label: 'Royal Weddings', href: '/albums/royal-weddings' },
      { label: 'Destination Weddings', href: '/albums/destination-weddings' },
      { label: 'Luxury Mandap Designs', href: '/albums/luxury-mandap' },
      { label: 'Haldi Decor', href: '/albums/haldi-decor' },
      { label: 'Mehendi Decor', href: '/albums/mehendi-decor' },
      { label: 'Reception Decor', href: '/albums/reception-decor' },
    ],
  },
  { label: 'Wedding Reels', href: '/videos' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Destination Wedding Planner', href: '/services/destination-wedding-planner' },
      { label: 'Wedding Décor & Design', href: '/services/decor-design' },
      { label: 'Event Flow Management', href: '/services/event-flow' },
      { label: 'Venue Selection', href: '/services/venue-selection' },
      { label: 'Entertainment Activities', href: '/services/entertainment' },
      { label: 'Guest Management', href: '/services/guest-management' },
      { label: 'Invitations & Communication', href: '/services/invitations' },
      { label: 'Transport & Logistics', href: '/services/transport' },
      { label: 'Vendor Management', href: '/services/vendor-management' },
    ],
  },
  {
    label: 'Venues',
    href: '/venues',
    children: [
      { label: 'Udaipur', href: '/venues/udaipur' },
      { label: 'Jaipur', href: '/venues/jaipur' },
      { label: 'Jodhpur', href: '/venues/jodhpur' },
      { label: 'Jaisalmer', href: '/venues/jaisalmer' },
      { label: 'Pushkar', href: '/venues/pushkar' },
      { label: 'Ranthambhor', href: '/venues/ranthambhor' },
    ],
  },
  { label: 'Our Team', href: '/team' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
];

function DropLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="dropdown-item block px-4 py-2.5 text-xs tracking-wider uppercase transition-all duration-150"
      style={{ fontFamily: 'var(--body-font)', color: 'var(--charcoal)', fontWeight: 500 }}
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <style>{`
        .dropdown-item:hover {
          color: var(--brand) !important;
          padding-left: 1.4rem !important;
          background: var(--cream) !important;
        }
      `}</style>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-3'}`}
        style={{
          background: 'rgba(245,240,236,0.88)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: scrolled ? '1px solid var(--stone)' : '1px solid rgba(221,216,209,0.5)',
          boxShadow: scrolled ? '0 8px 30px rgba(28,21,18,0.06)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between gap-4">

          <Link href="/" className="flex-shrink-0 relative z-10">
            {!logoError ? (
              <Image
                src="/logo.png"
                alt="Bajranng Weddings"
                width={690}
                height={308}
                className="object-contain"
                style={{ height: scrolled ? '40px' : '48px', width: 'auto', transition: 'height 0.4s var(--ease-out)' }}
                onError={() => setLogoError(true)}
                priority
              />
            ) : (
              <div className="flex flex-col items-start leading-none">
                <span style={{ color: 'var(--brand)', fontFamily: 'var(--display-font)', fontStyle: 'italic', fontSize: '1.6rem', fontWeight: 500 }}>
                  Bajranng
                </span>
                <span style={{ color: 'var(--charcoal)', fontFamily: 'var(--body-font)', fontSize: '0.58rem', letterSpacing: '0.32em', textTransform: 'uppercase' }}>
                  Weddings
                </span>
              </div>
            )}
          </Link>

          <nav className="hidden xl:flex items-center gap-6">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group">
                  <Link href={item.href} className="nav-link py-2 flex items-center gap-1">
                    {item.label}
                    <span className="text-[0.6rem]" style={{ color: 'var(--brand)' }}>▾</span>
                  </Link>
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white min-w-[220px] shadow-2xl z-50 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-250 py-2"
                    style={{ borderTop: '2px solid var(--brand)' }}
                  >
                    {item.children.map((child) => (
                      <DropLink key={child.href} href={child.href} label={child.label} />
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={item.label} href={item.href} className="nav-link py-2">
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className="hidden lg:inline-flex btn-primary text-white no-underline"
              style={{ fontSize: '0.68rem', padding: '0.65rem 1.4rem' }}
            >
              Plan Your Wedding
            </Link>
            <button
              className="xl:hidden flex flex-col gap-1.5 p-2 relative z-10"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}
                style={{ background: 'var(--charcoal)' }}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}
                style={{ background: 'var(--charcoal)' }}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}
                style={{ background: 'var(--charcoal)' }}
              />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="xl:hidden bg-white border-t shadow-lg max-h-[80vh] overflow-y-auto"
              style={{ borderColor: 'var(--ivory)' }}
            >
              {navItems.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between px-5 py-3 border-b" style={{ borderColor: 'var(--ivory)' }}>
                    <Link href={item.href} className="nav-link" onClick={() => setMobileOpen(false)}>
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        className="text-sm p-1 ml-2"
                        style={{ color: 'var(--brand)' }}
                      >
                        {openDropdown === item.label ? '▲' : '▾'}
                      </button>
                    )}
                  </div>
                  {item.children && openDropdown === item.label && (
                    <div style={{ background: 'var(--cream)' }}>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-9 py-2.5 text-xs tracking-wider uppercase"
                          style={{ color: 'var(--text-muted)', fontFamily: 'var(--body-font)' }}
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="p-5">
                <Link href="/contact" className="btn-primary w-full justify-center" onClick={() => setMobileOpen(false)}>
                  Plan Your Wedding
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
