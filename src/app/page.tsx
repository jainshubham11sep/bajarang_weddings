import Link from 'next/link';

const stats = [
  { number: '500+', label: 'Weddings Executed' },
  { number: '15+', label: 'Years of Excellence' },
  { number: '6', label: 'Royal Destinations' },
  { number: '100%', label: 'In-house Production' },
];

const services = [
  {
    icon: '👑',
    title: 'Royal Wedding Planning',
    desc: 'From palace venues to ceremonial grandeur — we craft weddings fit for royalty.',
    href: '/services/destination-wedding-planner',
  },
  {
    icon: '🌸',
    title: 'Wedding Décor & Design',
    desc: 'Breathtaking floral installations, mandap designs, and themed décor by our in-house artists.',
    href: '/services/decor-design',
  },
  {
    icon: '🗺️',
    title: 'Destination Weddings',
    desc: 'End-to-end planning across Rajasthan\'s most iconic venues — Udaipur, Jaipur, Jodhpur & more.',
    href: '/services/venue-selection',
  },
  {
    icon: '🎭',
    title: 'Entertainment & Activities',
    desc: 'Folk performances, celebrity acts, and curated guest experiences that leave lasting memories.',
    href: '/services/entertainment',
  },
  {
    icon: '🚗',
    title: 'Transport & Logistics',
    desc: 'Seamless coordination of guest travel, baraat arrangements, and luxury conveyance.',
    href: '/services/transport',
  },
  {
    icon: '💌',
    title: 'Invitations & Communication',
    desc: 'Bespoke wedding stationery and digital communication managed with finesse.',
    href: '/services/invitations',
  },
];

const albums = [
  { title: 'Royal Weddings', href: '/albums/royal-weddings', bg: '#2D1B0E' },
  { title: 'Destination Weddings', href: '/albums/destination-weddings', bg: '#0E1B2D' },
  { title: 'Luxury Mandap Designs', href: '/albums/luxury-mandap', bg: '#1B2D0E' },
  { title: 'Haldi Decor', href: '/albums/haldi-decor', bg: '#2D2A0E' },
  { title: 'Mehendi Decor', href: '/albums/mehendi-decor', bg: '#2D0E1B' },
  { title: 'Reception Decor', href: '/albums/reception-decor', bg: '#1B0E2D' },
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
  {
    name: 'Priya & Arjun Mehta',
    location: 'Mumbai',
    text: 'Bajranng Weddings turned our dream of a palace wedding in Udaipur into the most magical reality. Every detail was immaculate — from the floral mandap to the baraat procession.',
  },
  {
    name: 'Sanya & Vikram Singhania',
    location: 'Delhi',
    text: 'We had over 800 guests and Bajranng managed everything flawlessly. Their in-house production team is world-class. The décor was jaw-dropping and our guests still talk about it.',
  },
  {
    name: 'Ananya & Rohan Kapoor',
    location: 'Bengaluru',
    text: 'Choosing Bajranng was the best decision we made. They understood our vision perfectly and delivered beyond expectations. A truly royal experience in Jaipur.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center text-white text-center"
        style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #2D2520 50%, #1A1A1A 100%)' }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-5"
            style={{ background: 'var(--gold)', filter: 'blur(80px)' }} />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-5"
            style={{ background: 'var(--gold)', filter: 'blur(80px)' }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <p className="text-xs tracking-[0.4em] uppercase mb-6" style={{ color: 'var(--gold)' }}>
            India&apos;s Premier Luxury Wedding Planners
          </p>
          <h1
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
            style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
          >
            Where Dreams Become{' '}
            <span style={{ color: 'var(--gold-light)' }}>Royal Legacy</span>
          </h1>
          <div className="section-divider mb-6" />
          <p className="text-lg md:text-xl mb-10 leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Crafting unforgettable weddings across the palaces, deserts, and lakes of Rajasthan.
            Every celebration is a masterpiece — designed, produced, and executed in-house.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Begin Your Journey</Link>
            <Link href="/albums" className="btn-outline">View Our Work</Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--gold)' }}>Scroll</span>
          <div className="w-px h-12 animate-pulse" style={{ background: 'var(--gold)' }} />
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: 'var(--gold)' }} className="py-10">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center text-white">
              <div className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>{s.number}</div>
              <div className="text-xs tracking-widest uppercase mt-1 opacity-80">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-20 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: 'var(--gold)' }}>About Bajranng Weddings</p>
            <h2 className="section-title text-left mb-4">Crafting Royal Celebrations Since a Decade</h2>
            <div className="section-divider mx-0 mb-6" />
            <p className="leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
              Bajranng Weddings is India&apos;s most trusted name in luxury and destination wedding planning.
              With an entirely in-house production and execution team, we deliver unparalleled quality at every touchpoint.
            </p>
            <p className="leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
              Our expertise spans royal palace weddings, lakeside ceremonies, desert retreats, and intimate jungle
              celebrations across Rajasthan&apos;s most iconic destinations.
            </p>
            <Link href="/about" className="btn-primary">Discover Our Story</Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {['Our Story', 'Why Choose Us', 'In-house Production', 'Royal Expertise'].map((item, i) => (
              <div key={item} className="p-6 card-hover"
                style={{ background: i % 2 === 0 ? 'white' : 'var(--ivory)', borderLeft: '3px solid var(--gold)' }}>
                <div className="text-2xl mb-2" style={{ color: 'var(--gold)' }}>✦</div>
                <p className="text-sm font-medium" style={{ fontFamily: 'Georgia, serif', color: 'var(--charcoal)' }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-center mb-3" style={{ color: 'var(--gold)' }}>What We Offer</p>
          <h2 className="section-title mb-2">Our Services</h2>
          <div className="section-divider mb-4" />
          <p className="section-subtitle">End-to-end wedding planning, production, and execution — all under one roof</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link key={s.title} href={s.href}
                className="bg-white p-7 card-hover album-card-bottom block no-underline">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-base font-semibold mb-3" style={{ fontFamily: 'Georgia, serif', color: 'var(--charcoal)' }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{s.desc}</p>
                <div className="mt-4 text-xs tracking-widest uppercase" style={{ color: 'var(--gold)' }}>Learn More →</div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Albums */}
      <section className="py-20 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-center mb-3" style={{ color: 'var(--gold)' }}>Our Portfolio</p>
          <h2 className="section-title mb-2">Photo Albums</h2>
          <div className="section-divider mb-4" />
          <p className="section-subtitle">A glimpse into the world of Bajranng Weddings</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {albums.map((a) => (
              <Link key={a.title} href={a.href}
                className="relative aspect-square flex items-center justify-center text-white text-center p-6 card-hover group overflow-hidden"
                style={{ background: a.bg }}>
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity" style={{ background: 'var(--gold)' }} />
                <div className="relative z-10">
                  <div className="text-xs tracking-[0.15em] uppercase mb-2 opacity-70">Gallery</div>
                  <div className="text-lg font-semibold" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>{a.title}</div>
                  <div className="mt-3 text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--gold-light)' }}>
                    View Album →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Venues */}
      <section className="py-20 px-4" style={{ background: 'var(--charcoal)' }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-center mb-3" style={{ color: 'var(--gold)' }}>Wedding Destinations</p>
          <h2 className="section-title mb-2" style={{ color: 'white' }}>Iconic Venues Across Rajasthan</h2>
          <div className="section-divider mb-4" />
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.55)' }}>From lake palaces to desert forts — choose your dream backdrop</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {venues.map((v) => (
              <Link key={v.name} href={v.href}
                className="p-8 text-center card-hover venue-card-dark group">
                <div className="text-2xl mb-1 font-semibold" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', color: 'var(--gold-light)' }}>{v.name}</div>
                <div className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.45)' }}>{v.tagline}</div>
                <div className="mt-3 text-xs opacity-0 group-hover:opacity-100 transition-opacity tracking-widest" style={{ color: 'var(--gold)' }}>Explore →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-center mb-3" style={{ color: 'var(--gold)' }}>What Our Couples Say</p>
          <h2 className="section-title mb-2">Testimonials</h2>
          <div className="section-divider mb-4" />
          <p className="section-subtitle">Love stories told by those who lived them</p>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white p-8 card-hover">
                <div className="text-5xl leading-none mb-4 opacity-20" style={{ color: 'var(--gold)', fontFamily: 'Georgia, serif' }}>&ldquo;</div>
                <p className="text-sm leading-relaxed mb-6 italic" style={{ color: 'var(--text-muted)' }}>{t.text}</p>
                <div className="border-t pt-4" style={{ borderColor: 'var(--ivory)' }}>
                  <div className="font-semibold text-sm" style={{ fontFamily: 'Georgia, serif', color: 'var(--charcoal)' }}>{t.name}</div>
                  <div className="text-xs tracking-wider mt-0.5" style={{ color: 'var(--gold)' }}>{t.location}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/testimonials" className="btn-outline">Read More Stories</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center text-white"
        style={{ background: 'linear-gradient(135deg, var(--gold-dark), var(--gold))' }}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
          Ready to Begin Your Royal Story?
        </h2>
        <p className="mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.85)' }}>
          Let&apos;s create a wedding that becomes a legend. Reach out to our team today for a complimentary consultation.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact" className="bg-white text-sm tracking-widest uppercase px-8 py-3 transition-all hover:bg-gray-100"
            style={{ color: 'var(--gold-dark)', fontFamily: 'Georgia, serif' }}>
            Plan My Wedding
          </Link>
          <Link href="/albums" className="border border-white text-white text-sm tracking-widest uppercase px-8 py-3 transition-all hover:bg-white/10"
            style={{ fontFamily: 'Georgia, serif' }}>
            View Portfolio
          </Link>
        </div>
      </section>
    </>
  );
}
