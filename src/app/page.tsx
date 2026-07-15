import Link from 'next/link';
import Image from 'next/image';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';
import HeroSlider from '@/components/HeroSlider';
import WeddingGallery from '@/components/WeddingGallery';
import VideoReels from '@/components/VideoReels';

const stats = [
  { number: '2000+', label: 'Weddings Executed' },
  { number: '35+', label: 'Years of Excellence' },
  { number: '6', label: 'Royal Destinations' },
  { number: '100%', label: 'In-House Production' },
];

const services = [
  { num: '01', title: 'Royal Wedding Planning', desc: 'From palace venues to ceremonial grandeur — we craft weddings fit for royalty, managing every detail with precision.', href: '/services/destination-wedding-planner' },
  { num: '02', title: 'Wedding Décor & Design', desc: 'Breathtaking floral installations, bespoke mandap designs, and themed décor created entirely by our in-house artists.', href: '/services/decor-design' },
  { num: '03', title: 'Destination Weddings', desc: "End-to-end planning across Rajasthan's most iconic venues — Udaipur, Jaipur, Jodhpur & beyond.", href: '/services/venue-selection' },
  { num: '04', title: 'Entertainment & Activities', desc: 'Folk performances, celebrity acts, and curated guest experiences that leave an indelible mark.', href: '/services/entertainment' },
  { num: '05', title: 'Transport & Logistics', desc: 'Seamless coordination of guest travel, baraat arrangements, and luxury conveyance for every celebration.', href: '/services/transport' },
  { num: '06', title: 'Invitations & Stationery', desc: 'Bespoke wedding stationery and digital communication crafted and managed with impeccable finesse.', href: '/services/invitations' },
];

const venues = [
  { name: 'Udaipur', tagline: 'City of Lakes', href: '/venues/udaipur', img: '/images/venues/udaipur.jpg' },
  { name: 'Jaipur', tagline: 'Pink City', href: '/venues/jaipur', img: '/images/venues/jaipur.jpg' },
  { name: 'Jodhpur', tagline: 'Blue City', href: '/venues/jodhpur', img: '/images/venues/jodhpur.jpg' },
  { name: 'Jaisalmer', tagline: 'Golden City', href: '/venues/jaisalmer', img: '/images/venues/jaisalmer.jpg' },
  { name: 'Pushkar', tagline: 'Sacred Oasis', href: '/venues/pushkar', img: '/images/venues/pushkar.jpg' },
  { name: 'Ranthambhor', tagline: 'Wilderness Royale', href: '/venues/ranthambhor', img: '/images/venues/ranthambore.jpg' },
];

const testimonials = [
  { name: 'Priya & Arjun Mehta', location: 'Mumbai', text: 'Bajranng Weddings turned our dream of a palace wedding in Udaipur into the most magical reality. Every detail was immaculate — from the floral mandap to the baraat procession.' },
  { name: 'Sanya & Vikram Singhania', location: 'Delhi', text: 'We had over 800 guests and Bajranng managed everything flawlessly. Their in-house production team is world-class. The décor was jaw-dropping.' },
  { name: 'Ananya & Rohan Kapoor', location: 'Bengaluru', text: 'Choosing Bajranng was the best decision we made. They understood our vision perfectly and delivered beyond every expectation.' },
];

const marqueeItems = ['2000+ Weddings', '35+ Years of Legacy', '6 Royal Destinations', '100% In-House Production', '200+ Creative Professionals'];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <HeroSlider />

      {/* ── Marquee strip ────────────────────────────────────── */}
      <section style={{ background: 'var(--charcoal)', padding: '1.5rem 0', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} style={{
              fontFamily: 'var(--display-font)',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              color: 'rgba(253,250,247,0.35)',
              whiteSpace: 'nowrap',
              padding: '0 2.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '2.5rem',
            }}>
              {item}
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--brand)', display: 'inline-block' }} />
            </span>
          ))}
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────── */}
      <section style={{ background: 'var(--cream)', padding: '5rem 1.5rem' }}>
        <Stagger className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-px" gap={0.12}>
          {stats.map((s) => (
            <StaggerItem key={s.label}>
              <div className="modern-card text-center h-full flex flex-col items-center justify-center" style={{ padding: '2.5rem 1.5rem' }}>
                <div style={{ fontFamily: 'var(--display-font)', fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)', fontWeight: 300, fontStyle: 'italic', color: 'var(--brand)', lineHeight: 1 }}>{s.number}</div>
                <div style={{ fontFamily: 'var(--body-font)', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '0.65rem', fontWeight: 600 }}>{s.label}</div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ── About — asymmetric bento ────────────────────────── */}
      <section style={{ background: 'var(--ivory)', padding: '7rem 1.5rem' }}>
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-[1fr_1.1fr] gap-16 items-center">
          <Reveal direction="right">
            <div>
              <p className="eyebrow mb-5">About Bajranng Weddings</p>
              <h2 className="display-xl" style={{
                fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
                color: 'var(--ink)',
                marginBottom: '1.75rem',
              }}>
                Designing Grand Weddings<br />for 35+ Years
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.9, fontSize: '0.95rem', marginBottom: '1.4rem' }}>
                Bajranng Weddings is India&apos;s most trusted name in luxury and destination wedding planning.
                With an entirely in-house production and execution team, we deliver unparalleled quality at every touchpoint.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.9, fontSize: '0.95rem', marginBottom: '2.75rem' }}>
                Our expertise spans royal palace weddings, lakeside ceremonies, desert retreats, and intimate celebrations
                across Rajasthan&apos;s most iconic destinations — and beyond.
              </p>
              <Link href="/about" className="btn-primary"><span>Discover Our Story</span></Link>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                <Image
                  src="/images/wedding-gallery/wg-4.jpg"
                  alt="Bajranng Weddings — Royal Baraat Celebration"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
                />
              </div>
              {/* Floating stat card */}
              <div className="glass-light" style={{
                position: 'absolute', bottom: '-1.75rem', left: '-1.75rem',
                padding: '1.5rem 2rem',
                background: 'white',
                boxShadow: '0 30px 60px -20px rgba(28,21,18,0.25)',
              }}>
                <div style={{ fontFamily: 'var(--display-font)', fontSize: '2.25rem', fontStyle: 'italic', fontWeight: 300, color: 'var(--brand)', lineHeight: 1 }}>1991</div>
                <div style={{ fontFamily: 'var(--body-font)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '0.4rem' }}>Founded in Kota, Rajasthan</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────── */}
      <section style={{ background: 'var(--cream)', padding: '7rem 1.5rem' }}>
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
              <p className="eyebrow mb-4" style={{ justifyContent: 'center' }}><span style={{ display: 'none' }} /></p>
              <p className="label mb-4" style={{ color: 'var(--brand)' }}>What We Offer</p>
              <h2 className="display-xl" style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', color: 'var(--ink)', marginBottom: '0.75rem' }}>
                Our Services
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '520px', margin: '1rem auto 0' }}>End-to-end wedding planning, production, and execution — all under one roof</p>
            </div>
          </Reveal>

          <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" gap={0.08}>
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <Link href={s.href} className="modern-card group h-full" style={{ padding: '2.75rem', display: 'block', textDecoration: 'none' }}>
                  <p style={{ fontFamily: 'var(--display-font)', fontSize: '2.5rem', fontWeight: 300, color: 'rgba(181,66,42,0.2)', lineHeight: 1, marginBottom: '1.25rem' }}>{s.num}</p>
                  <h3 style={{ fontFamily: 'var(--display-font)', fontSize: '1.25rem', fontStyle: 'italic', fontWeight: 400, color: 'var(--ink)', marginBottom: '0.75rem', lineHeight: 1.3 }}>{s.title}</h3>
                  <div style={{ width: '24px', height: '1px', background: 'var(--brand)', marginBottom: '0.75rem', opacity: 0.5 }} />
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.84rem', lineHeight: 1.75 }}>{s.desc}</p>
                  <p style={{ fontFamily: 'var(--body-font)', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--brand)', marginTop: '1.4rem', fontWeight: 600 }} className="group-hover:translate-x-1 transition-transform inline-block">Learn More →</p>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link href="/services" className="btn-outline"><span>View All Services</span></Link>
          </div>
        </div>
      </section>

      {/* ── Pull Quote ───────────────────────────────────────── */}
      <section style={{ background: 'var(--brand)', padding: '6rem 1.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 0%, rgba(255,255,255,0.1) 0%, transparent 70%)' }} />
        <Reveal>
          <div className="max-w-[780px] mx-auto relative">
            <p style={{ fontFamily: 'var(--display-font)', fontSize: '4rem', fontWeight: 300, color: 'rgba(255,255,255,0.25)', lineHeight: 0.5, marginBottom: '1.5rem' }}>&ldquo;</p>
            <p style={{ fontFamily: 'var(--display-font)', fontSize: 'clamp(1.6rem, 4vw, 2.85rem)', fontWeight: 300, fontStyle: 'italic', color: 'rgba(253,250,247,0.97)', lineHeight: 1.4, marginBottom: '1.75rem' }}>
              Every detail is deliberate. Every moment, unforgettable. Every wedding, a legacy.
            </p>
            <p style={{ fontFamily: 'var(--body-font)', fontSize: '0.65rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', fontWeight: 600 }}>
              — Manmohan Agrawal, Founder
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── Wedding Gallery ──────────────────────────────────── */}
      <WeddingGallery />

      {/* ── Video Reels ──────────────────────────────────────── */}
      <VideoReels />

      {/* ── Venues ───────────────────────────────────────────── */}
      <section style={{ background: 'var(--ivory)', padding: '7rem 1.5rem' }}>
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
              <p className="label mb-4" style={{ color: 'var(--brand)' }}>Wedding Destinations</p>
              <h2 className="display-xl" style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', color: 'var(--ink)', marginBottom: '0.75rem' }}>
                Iconic Venues Across Rajasthan
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '1rem' }}>From lake palaces to desert forts — choose your dream backdrop</p>
            </div>
          </Reveal>
          <Stagger className="grid grid-cols-2 md:grid-cols-3 gap-px" gap={0.06}>
            {venues.map((v) => (
              <StaggerItem key={v.name}>
                <Link
                  href={v.href}
                  style={{ position: 'relative', aspectRatio: '4/3', display: 'block', overflow: 'hidden', textDecoration: 'none' }}
                  className="group"
                >
                  <Image
                    src={v.img}
                    alt={`${v.name} wedding venue`}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.7s var(--ease-out)' }}
                    className="group-hover:scale-110"
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,11,9,0.88) 0%, rgba(13,11,9,0.3) 55%, rgba(13,11,9,0.08) 100%)' }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'var(--brand)', transform: 'scaleX(0)', transition: 'transform 0.4s var(--ease-out)', transformOrigin: 'left' }} className="group-hover:scale-x-100" />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem 1.75rem' }}>
                    <p style={{ fontFamily: 'var(--display-font)', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontStyle: 'italic', fontWeight: 400, color: 'rgba(253,250,247,0.96)', lineHeight: 1, marginBottom: '0.4rem' }}>{v.name}</p>
                    <p style={{ fontFamily: 'var(--body-font)', fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(212,105,74,0.9)', fontWeight: 600 }}>{v.tagline}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link href="/venues" className="btn-outline"><span>All Destinations</span></Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section style={{ background: 'var(--cream)', padding: '7rem 1.5rem' }}>
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
              <p className="label mb-4" style={{ color: 'var(--brand)' }}>What Our Couples Say</p>
              <h2 className="display-xl" style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', color: 'var(--ink)' }}>
                Testimonials
              </h2>
            </div>
          </Reveal>
          <Stagger className="grid md:grid-cols-3 gap-px" gap={0.1}>
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <div className="modern-card h-full" style={{ background: 'white', padding: '2.75rem 2.25rem' }}>
                  <p style={{ fontFamily: 'var(--display-font)', fontSize: '3rem', fontWeight: 300, color: 'rgba(181,66,42,0.15)', lineHeight: 0.8, marginBottom: '1rem' }}>&ldquo;</p>
                  <p style={{ fontFamily: 'var(--display-font)', fontSize: '1rem', fontStyle: 'italic', color: 'var(--ink-soft)', lineHeight: 1.85, marginBottom: '1.85rem' }}>{t.text}</p>
                  <div style={{ borderTop: '1px solid var(--stone)', paddingTop: '1.25rem' }}>
                    <p style={{ fontFamily: 'var(--display-font)', fontStyle: 'italic', fontSize: '1rem', color: 'var(--ink)' }}>{t.name}</p>
                    <p style={{ fontFamily: 'var(--body-font)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--brand)', marginTop: '0.3rem', fontWeight: 600 }}>{t.location}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link href="/testimonials" className="btn-outline"><span>Read More Stories</span></Link>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section style={{ background: 'var(--ink)', padding: '7rem 1.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(181,66,42,0.18) 0%, transparent 70%)',
        }} />
        <Reveal>
          <div className="relative z-10 max-w-[620px] mx-auto">
            <p className="label mb-6" style={{ color: 'rgba(181,66,42,0.9)' }}>Begin Your Journey</p>
            <h2 className="display-xl" style={{ fontSize: 'clamp(2.25rem, 5.5vw, 3.75rem)', color: 'rgba(253,250,247,0.96)', marginBottom: '1.5rem' }}>
              Ready to Create Your Royal Legacy?
            </h2>
            <p style={{ fontFamily: 'var(--display-font)', fontStyle: 'italic', fontSize: '1.05rem', color: 'rgba(253,250,247,0.45)', marginBottom: '3rem', lineHeight: 1.8 }}>
              Let&apos;s create a wedding that becomes a legend. Reach out for a complimentary consultation.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary"><span>Plan My Wedding</span></Link>
              <Link href="/albums" className="btn-ghost-light"><span>View Portfolio</span></Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
