import Link from 'next/link';
import Image from 'next/image';

const stats = [
  { number: '500+', label: 'Weddings Executed' },
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

const albums = [
  { title: 'Royal Weddings', subtitle: 'Palace & Fort Ceremonies', href: '/albums/royal-weddings', img: '/images/gallery/IMG_1938.jpeg' },
  { title: 'Destination Weddings', subtitle: 'Across Rajasthan & Beyond', href: '/albums/destination-weddings', img: '/images/gallery/IMG_1937.jpeg' },
  { title: 'Luxury Mandap Designs', subtitle: 'Sacred Spaces Reimagined', href: '/albums/luxury-mandap', img: '/images/gallery/IMG_1930.jpeg' },
  { title: 'Haldi Decor', subtitle: 'Colour & Ceremony', href: '/albums/haldi-decor', img: '/images/gallery/IMG_1935.jpeg' },
  { title: 'Mehendi Decor', subtitle: 'Intimate Traditions', href: '/albums/mehendi-decor', img: '/images/gallery/IMG_2008.jpeg' },
  { title: 'Reception Decor', subtitle: 'Grand Celebrations', href: '/albums/reception-decor', img: '/images/gallery/IMG_1986.jpeg' },
];

const venues = [
  { name: 'Udaipur', tagline: 'City of Lakes', href: '/venues/udaipur' },
  { name: 'Jaipur', tagline: 'Pink City', href: '/venues/jaipur' },
  { name: 'Jodhpur', tagline: 'Blue City', href: '/venues/jodhpur' },
  { name: 'Jaisalmer', tagline: 'Golden City', href: '/venues/jaisalmer' },
  { name: 'Pushkar', tagline: 'Sacred Oasis', href: '/venues/pushkar' },
  { name: 'Ranthambhor', tagline: 'Wilderness Royale', href: '/venues/ranthambhor' },
];

const testimonials = [
  { name: 'Priya & Arjun Mehta', location: 'Mumbai', text: 'Bajranng Weddings turned our dream of a palace wedding in Udaipur into the most magical reality. Every detail was immaculate — from the floral mandap to the baraat procession. A truly once-in-a-lifetime experience.' },
  { name: 'Sanya & Vikram Singhania', location: 'Delhi', text: 'We had over 800 guests and Bajranng managed everything flawlessly. Their in-house production team is world-class. The décor was jaw-dropping and our guests still speak of it months later.' },
  { name: 'Ananya & Rohan Kapoor', location: 'Bengaluru', text: 'Choosing Bajranng was the best decision we made. They understood our vision perfectly and delivered beyond every expectation. A truly royal experience in the heart of Jaipur.' },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-white text-center overflow-hidden"
        style={{ background: 'var(--ink)' }}
      >
        {/* Background photo */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image
            src="/images/gallery/IMG_1936.jpeg"
            alt="Bajranng Weddings — Luxury Wedding Venue"
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          />
        </div>
        {/* Dark overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(13,11,9,0.55) 0%, rgba(13,11,9,0.75) 60%, rgba(13,11,9,0.88) 100%)' }} />
        {/* Radial glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 55%, rgba(181,66,42,0.18) 0%, transparent 70%)',
        }} />
        {/* Thin frame */}
        <div className="absolute inset-6 pointer-events-none" style={{ border: '1px solid rgba(255,255,255,0.06)' }} />

        <div className="relative z-10 max-w-[900px] mx-auto px-6 py-24">
          {/* Brand label */}
          <p className="label mb-3" style={{ color: 'rgba(181,66,42,0.9)', letterSpacing: '0.3em' }}>
            Bajranng Weddings
          </p>
          {/* Tagline strip */}
          <p style={{
            fontFamily: 'var(--body-font)',
            fontSize: '0.65rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.45)',
            marginBottom: '2.5rem',
          }}>
            Designing Grand Weddings for 35+ Years &nbsp;&middot;&nbsp; Wedding Planners &nbsp;&middot;&nbsp; Luxury Decor &nbsp;&middot;&nbsp; Destination Weddings &nbsp;&middot;&nbsp; Global Celebrations
          </p>

          {/* Headline */}
          <h1 style={{
            fontFamily: 'var(--display-font)',
            fontSize: 'clamp(3rem, 8vw, 6.5rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            lineHeight: 1.05,
            color: 'rgba(253,250,247,0.96)',
            marginBottom: '0.25rem',
          }}>
            Where Dreams Become
          </h1>
          <h1 style={{
            fontFamily: 'var(--display-font)',
            fontSize: 'clamp(3rem, 8vw, 6.5rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            lineHeight: 1.05,
            color: 'var(--brand-light)',
            marginBottom: '2rem',
          }}>
            Royal Celebrations
          </h1>

          {/* Ornament */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ width: '40px', height: '1px', background: 'rgba(181,66,42,0.5)' }} />
            <div style={{ width: '5px', height: '5px', background: 'var(--brand)', borderRadius: '50%' }} />
            <div style={{ width: '40px', height: '1px', background: 'rgba(181,66,42,0.5)' }} />
          </div>

          <p style={{
            fontFamily: 'var(--display-font)',
            fontSize: 'clamp(1rem, 2vw, 1.3rem)',
            fontStyle: 'italic',
            fontWeight: 300,
            color: 'rgba(253,250,247,0.65)',
            lineHeight: 1.7,
            maxWidth: '640px',
            margin: '0 auto 2.5rem',
          }}>
            Crafting unforgettable weddings across the palaces, deserts, and lakes of Rajasthan.
            Every celebration is a masterpiece — designed, produced, and executed entirely in-house.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Begin Your Journey</Link>
            <Link href="/albums" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.8)' }}>View Our Work</Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', opacity: 0.4 }}>
          <span style={{ fontFamily: 'var(--body-font)', fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>Scroll</span>
          <div style={{ width: '1px', height: '3rem', background: 'rgba(181,66,42,0.6)' }} />
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────── */}
      <section style={{ background: 'var(--cream)', padding: '3.5rem 1.5rem' }}>
        <div className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className="text-center" style={{
              padding: '1.5rem',
              borderRight: i < 3 ? '1px solid var(--stone)' : undefined,
            }}>
              <div style={{ fontFamily: 'var(--display-font)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, fontStyle: 'italic', color: 'var(--brand)', lineHeight: 1 }}>{s.number}</div>
              <div style={{ fontFamily: 'var(--body-font)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '0.5rem' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────── */}
      <section style={{ background: 'var(--ivory)', padding: '6rem 1.5rem' }}>
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="label mb-4" style={{ color: 'var(--brand)' }}>About Bajranng Weddings</p>
            <h2 style={{
              fontFamily: 'var(--display-font)',
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: 'var(--ink)',
              lineHeight: 1.15,
              marginBottom: '0.5rem',
            }}>
              Designing Grand Weddings<br />for 35+ Years
            </h2>
            <div className="hr-brand" style={{ maxWidth: '60px', marginBottom: '1.5rem' }} />
            <p style={{
              fontFamily: 'var(--body-font)',
              fontSize: '0.72rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--brand)',
              marginBottom: '1.75rem',
            }}>
              Wedding Planners &nbsp;&middot;&nbsp; Luxury Decor &nbsp;&middot;&nbsp; Destination Weddings &nbsp;&middot;&nbsp; Global Celebrations
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, fontSize: '0.9rem', marginBottom: '1.25rem' }}>
              Bajranng Weddings is India&apos;s most trusted name in luxury and destination wedding planning.
              With an entirely in-house production and execution team, we deliver unparalleled quality at every touchpoint.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, fontSize: '0.9rem', marginBottom: '2.5rem' }}>
              Our expertise spans royal palace weddings, lakeside ceremonies, desert retreats, and intimate celebrations
              across Rajasthan&apos;s most iconic destinations — and beyond.
            </p>
            <Link href="/about" className="btn-primary">Discover Our Story</Link>
          </div>

          {/* Real photo */}
          <div style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden' }}>
            <Image
              src="/images/gallery/IMG_2021.jpeg"
              alt="Bajranng Weddings — Luxury Mandap Design"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
            />
            {/* Feature card overlay at bottom */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(to top, rgba(13,11,9,0.85) 0%, transparent 100%)',
              padding: '2.5rem 2rem 2rem',
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(255,255,255,0.1)' }}>
                {['Our Story', 'Why Choose Us', 'In-house Production', 'Royal Expertise'].map((item) => (
                  <div key={item} style={{ background: 'rgba(13,11,9,0.6)', padding: '1rem 1.25rem' }}>
                    <p style={{ fontFamily: 'var(--display-font)', fontSize: '0.95rem', fontStyle: 'italic', color: 'rgba(253,250,247,0.85)' }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────── */}
      <section style={{ background: 'var(--cream)', padding: '6rem 1.5rem' }}>
        <div className="max-w-[1200px] mx-auto">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p className="label mb-4" style={{ color: 'var(--brand)' }}>What We Offer</p>
            <h2 style={{ fontFamily: 'var(--display-font)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, fontStyle: 'italic', color: 'var(--ink)', marginBottom: '0.75rem' }}>
              Our Services
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', margin: '1rem auto' }}>
              <div style={{ width: '40px', height: '1px', background: 'rgba(181,66,42,0.5)' }} />
              <div style={{ width: '5px', height: '5px', background: 'var(--brand)', borderRadius: '50%' }} />
              <div style={{ width: '40px', height: '1px', background: 'rgba(181,66,42,0.5)' }} />
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '520px', margin: '0 auto' }}>End-to-end wedding planning, production, and execution — all under one roof</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'var(--stone)' }}>
            {services.map((s) => (
              <Link key={s.title} href={s.href} style={{ background: 'var(--cream)', padding: '2.5rem', display: 'block', textDecoration: 'none' }} className="card-hover group">
                <p style={{ fontFamily: 'var(--display-font)', fontSize: '2.5rem', fontWeight: 300, color: 'rgba(181,66,42,0.2)', lineHeight: 1, marginBottom: '1.25rem' }}>{s.num}</p>
                <h3 style={{ fontFamily: 'var(--display-font)', fontSize: '1.2rem', fontStyle: 'italic', color: 'var(--ink)', marginBottom: '0.75rem', lineHeight: 1.3 }}>{s.title}</h3>
                <div style={{ width: '24px', height: '1px', background: 'var(--brand)', marginBottom: '0.75rem', opacity: 0.5 }} />
                <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.75 }}>{s.desc}</p>
                <p style={{ fontFamily: 'var(--body-font)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--brand)', marginTop: '1.25rem' }}>Learn More →</p>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/services" className="btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      {/* ── Pull Quote ───────────────────────────────────────── */}
      <section style={{ background: 'var(--brand)', padding: '5rem 1.5rem', textAlign: 'center' }}>
        <div className="max-w-[760px] mx-auto">
          <p style={{ fontFamily: 'var(--display-font)', fontSize: 'clamp(1.5rem, 4vw, 2.75rem)', fontWeight: 300, fontStyle: 'italic', color: 'rgba(253,250,247,0.95)', lineHeight: 1.4, marginBottom: '1.5rem' }}>
            &ldquo;Every detail is deliberate. Every moment, unforgettable. Every wedding, a legacy.&rdquo;
          </p>
          <p style={{ fontFamily: 'var(--body-font)', fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>
            — Manmohan Agrawal, Founder
          </p>
        </div>
      </section>

      {/* ── Albums ───────────────────────────────────────────── */}
      <section style={{ background: 'var(--ink)', padding: '6rem 1.5rem' }}>
        <div className="max-w-[1200px] mx-auto">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p className="label mb-4" style={{ color: 'rgba(181,66,42,0.8)' }}>Our Portfolio</p>
            <h2 style={{ fontFamily: 'var(--display-font)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, fontStyle: 'italic', color: 'rgba(253,250,247,0.9)', marginBottom: '0.75rem' }}>
              Photo Albums
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', margin: '1rem auto' }}>
              <div style={{ width: '40px', height: '1px', background: 'rgba(181,66,42,0.5)' }} />
              <div style={{ width: '5px', height: '5px', background: 'var(--brand)', borderRadius: '50%' }} />
              <div style={{ width: '40px', height: '1px', background: 'rgba(181,66,42,0.5)' }} />
            </div>
            <p style={{ color: 'rgba(253,250,247,0.4)', fontSize: '0.9rem' }}>A glimpse into the world of Bajranng Weddings</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-px" style={{ background: 'rgba(255,255,255,0.06)' }}>
            {albums.map((a) => (
              <Link key={a.title} href={a.href} style={{ position: 'relative', aspectRatio: '4/3', display: 'block', overflow: 'hidden', textDecoration: 'none' }} className="card-hover group">
                <Image
                  src={a.img}
                  alt={a.title}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.6s ease' }}
                  className="group-hover:scale-105"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,11,9,0.85) 0%, rgba(13,11,9,0.2) 60%, transparent 100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '1.5rem' }}>
                  <p style={{ fontFamily: 'var(--body-font)', fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(181,66,42,0.8)', marginBottom: '0.35rem' }}>Gallery</p>
                  <p style={{ fontFamily: 'var(--display-font)', fontSize: '1.1rem', fontStyle: 'italic', fontWeight: 300, color: 'rgba(253,250,247,0.9)', lineHeight: 1.2 }}>{a.title}</p>
                  <p style={{ fontFamily: 'var(--body-font)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.45)', marginTop: '0.2rem' }}>{a.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Venues ───────────────────────────────────────────── */}
      <section style={{ background: 'var(--ivory)', padding: '6rem 1.5rem' }}>
        <div className="max-w-[1200px] mx-auto">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p className="label mb-4" style={{ color: 'var(--brand)' }}>Wedding Destinations</p>
            <h2 style={{ fontFamily: 'var(--display-font)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, fontStyle: 'italic', color: 'var(--ink)', marginBottom: '0.75rem' }}>
              Iconic Venues Across Rajasthan
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', margin: '1rem auto' }}>
              <div style={{ width: '40px', height: '1px', background: 'rgba(181,66,42,0.5)' }} />
              <div style={{ width: '5px', height: '5px', background: 'var(--brand)', borderRadius: '50%' }} />
              <div style={{ width: '40px', height: '1px', background: 'rgba(181,66,42,0.5)' }} />
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>From lake palaces to desert forts — choose your dream backdrop</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px" style={{ background: 'var(--stone)' }}>
            {venues.map((v) => (
              <Link key={v.name} href={v.href} style={{ background: 'white', padding: '3rem 2rem', textAlign: 'center', display: 'block', textDecoration: 'none' }} className="card-hover venue-card-dark group">
                <p style={{ fontFamily: 'var(--display-font)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontStyle: 'italic', fontWeight: 300, color: 'var(--ink)', lineHeight: 1, marginBottom: '0.5rem' }}>{v.name}</p>
                <p style={{ fontFamily: 'var(--body-font)', fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{v.tagline}</p>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/venues" className="btn-outline">All Destinations</Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section style={{ background: 'var(--cream)', padding: '6rem 1.5rem' }}>
        <div className="max-w-[1200px] mx-auto">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p className="label mb-4" style={{ color: 'var(--brand)' }}>What Our Couples Say</p>
            <h2 style={{ fontFamily: 'var(--display-font)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, fontStyle: 'italic', color: 'var(--ink)', marginBottom: '0.75rem' }}>
              Testimonials
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', margin: '1rem auto' }}>
              <div style={{ width: '40px', height: '1px', background: 'rgba(181,66,42,0.5)' }} />
              <div style={{ width: '5px', height: '5px', background: 'var(--brand)', borderRadius: '50%' }} />
              <div style={{ width: '40px', height: '1px', background: 'rgba(181,66,42,0.5)' }} />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-px" style={{ background: 'var(--stone)' }}>
            {testimonials.map((t) => (
              <div key={t.name} style={{ background: 'white', padding: '2.5rem 2rem' }} className="card-hover">
                <p style={{ fontFamily: 'var(--display-font)', fontSize: '3rem', fontWeight: 300, color: 'rgba(181,66,42,0.15)', lineHeight: 0.8, marginBottom: '1rem' }}>&ldquo;</p>
                <p style={{ fontFamily: 'var(--display-font)', fontSize: '1rem', fontStyle: 'italic', color: 'var(--ink-soft)', lineHeight: 1.8, marginBottom: '1.75rem' }}>{t.text}</p>
                <div style={{ borderTop: '1px solid var(--stone)', paddingTop: '1.25rem' }}>
                  <p style={{ fontFamily: 'var(--display-font)', fontStyle: 'italic', fontSize: '1rem', color: 'var(--ink)' }}>{t.name}</p>
                  <p style={{ fontFamily: 'var(--body-font)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--brand)', marginTop: '0.25rem' }}>{t.location}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/testimonials" className="btn-outline">Read More Stories</Link>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section style={{ background: 'var(--ink)', padding: '6rem 1.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(181,66,42,0.15) 0%, transparent 70%)',
        }} />
        <div className="relative z-10 max-w-[600px] mx-auto">
          <p className="label mb-6" style={{ color: 'rgba(181,66,42,0.8)' }}>Begin Your Journey</p>
          <h2 style={{ fontFamily: 'var(--display-font)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 300, fontStyle: 'italic', color: 'rgba(253,250,247,0.95)', lineHeight: 1.2, marginBottom: '1.5rem' }}>
            Ready to Create Your Royal Legacy?
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', margin: '1.25rem auto 2rem' }}>
            <div style={{ width: '40px', height: '1px', background: 'rgba(181,66,42,0.5)' }} />
            <div style={{ width: '5px', height: '5px', background: 'var(--brand)', borderRadius: '50%' }} />
            <div style={{ width: '40px', height: '1px', background: 'rgba(181,66,42,0.5)' }} />
          </div>
          <p style={{ fontFamily: 'var(--display-font)', fontStyle: 'italic', fontSize: '1rem', color: 'rgba(253,250,247,0.45)', marginBottom: '3rem', lineHeight: 1.8 }}>
            Let&apos;s create a wedding that becomes a legend. Reach out for a complimentary consultation.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Plan My Wedding</Link>
            <Link href="/albums" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.7)' }}>View Portfolio</Link>
          </div>
        </div>
      </section>
    </>
  );
}
