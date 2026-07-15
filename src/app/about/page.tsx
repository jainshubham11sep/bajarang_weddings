import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Bajranng Weddings',
  description: 'Learn about Bajranng Weddings — our story, our team, and why we are India\'s most trusted luxury wedding planners.',
};

const whyChooseUs = [
  {
    title: 'In-house Production Team',
    desc: 'Unlike most planners who outsource execution, we have our own 200+ member production team. This means complete quality control, faster turnarounds, and zero compromise.',
  },
  {
    title: '35 Years of Royal Expertise',
    desc: 'Since 1991, we have been crafting luxury weddings across Rajasthan\'s most iconic venues. We know every palace, every fort, every lake — and how to make them extraordinary.',
  },
  {
    title: 'Bespoke Every Time',
    desc: 'No two Bajranng weddings look alike. Every design, every detail, every moment is conceived specifically for your love story.',
  },
  {
    title: 'Transparent Pricing',
    desc: 'Luxury without hidden surprises. Our pricing is fully transparent with detailed breakdowns, so you always know exactly what you\'re investing in.',
  },
  {
    title: 'Pan-India Network',
    desc: 'Over 1,000 trusted vendor relationships built across 35 years — from master craftsmen to celebrity performers.',
  },
  {
    title: 'Award-Winning Designs',
    desc: 'Recognized by leading wedding publications and industry bodies for innovation and excellence in wedding design.',
  },
];

const milestones = [
  { year: '1991', event: 'Founded in Kota, Rajasthan by Manmohan Agrawal — with a singular vision to craft extraordinary celebrations' },
  { year: '1997', event: 'Expanded to Jaipur; first major palace wedding at Jai Mahal Palace — the beginning of royal legacy' },
  { year: '2003', event: 'Crossed 100-wedding milestone; launched dedicated in-house decor & production division' },
  { year: '2010', event: 'Pan-Rajasthan presence across 6 destinations; first international destination wedding' },
  { year: '2017', event: 'Global celebrations launched for NRI & international couples; reach extended worldwide' },
  { year: '2024', event: '500+ weddings, 200+ team members, and 35 years of creating timeless memories — still counting' },
];

export default function AboutPage() {
  return (
    <>
      <div className="page-hero">
        <p className="label mb-4" style={{ color: 'rgba(181,66,42,0.8)' }}>Our Journey</p>
        <h1>About Bajranng Weddings</h1>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', margin: '1.25rem auto' }}>
          <div style={{ width: '40px', height: '1px', background: 'rgba(181,66,42,0.5)' }} />
          <div style={{ width: '5px', height: '5px', background: 'var(--brand)', borderRadius: '50%' }} />
          <div style={{ width: '40px', height: '1px', background: 'rgba(181,66,42,0.5)' }} />
        </div>
        <p>Designing Grand Weddings for 35+ Years — born in Rajasthan, trusted across India</p>
        <p style={{ fontFamily: 'var(--body-font)', fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(181,66,42,0.6)', marginTop: '1rem' }}>
          Wedding Planners &nbsp;&middot;&nbsp; Luxury Decor &nbsp;&middot;&nbsp; Destination Weddings &nbsp;&middot;&nbsp; Global Celebrations
        </p>
      </div>

      {/* Our Story */}
      <section id="our-story" className="py-20 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: 'var(--gold)' }}>Our Story</p>
            <h2 className="section-title text-left mb-4">Born from a Passion for Perfection</h2>
            <div className="section-divider mx-0 mb-6" />
            <p className="leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
              Bajranng Weddings was founded in 1991 by Manmohan Agrawal in the heart of Kota, Rajasthan — driven by
              one unwavering belief: every Indian wedding deserves to be a royal celebration. What began as a passionate
              one-man vision has grown into one of India&apos;s most respected luxury wedding companies.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
              Drawing deeply from Rajasthan&apos;s rich royal heritage — its magnificent palaces, vibrant culture, and
              traditions of grand hospitality — we built a company that doesn&apos;t just plan weddings, but crafts
              immersive experiences that families treasure for generations.
            </p>
            <p className="leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
              Today, 35 years on, with over 500 weddings executed and a team of 200+ creative professionals, we remain
              as dedicated to that original vision as ever: making every wedding a timeless masterpiece.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/contact" className="btn-primary">Start Your Journey</Link>
              <Link href="/about/founders" className="btn-outline">Founder&apos;s Note</Link>
            </div>
          </div>
          <div className="space-y-4">
            {milestones.map((m) => (
              <div key={m.year} className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-16 text-right">
                  <span className="font-bold text-sm" style={{ color: 'var(--gold)', fontFamily: 'var(--display-font)' }}>{m.year}</span>
                </div>
                <div className="flex-shrink-0 flex flex-col items-center pt-1">
                  <div className="w-3 h-3 rounded-full" style={{ background: 'var(--gold)' }} />
                  <div className="w-px flex-1 mt-1" style={{ background: 'rgba(201,168,76,0.3)', minHeight: '2rem' }} />
                </div>
                <p className="text-sm leading-relaxed pb-4" style={{ color: 'var(--text-muted)' }}>{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose" className="py-20 px-4" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-center mb-3" style={{ color: 'var(--gold)' }}>Why Us</p>
          <h2 className="section-title mb-2">Why Choose Bajranng Weddings</h2>
          <div className="section-divider mb-4" />
          <p className="section-subtitle">Six reasons why discerning couples trust us with their most important day</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="bg-white p-7 card-hover" style={{ borderTop: '3px solid var(--gold)' }}>
                <div className="text-lg font-semibold mb-3" style={{ fontFamily: 'var(--display-font)', color: 'var(--charcoal)' }}>{item.title}</div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In-house Production */}
      <section id="production" className="py-20 px-4" style={{ background: 'var(--charcoal)' }}>
        <div className="max-w-5xl mx-auto text-center text-white">
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: 'var(--gold)' }}>What Sets Us Apart</p>
          <h2 className="section-title mb-2 text-white">In-house Production & Execution</h2>
          <div className="section-divider mb-6" />
          <p className="leading-relaxed mb-6 max-w-3xl mx-auto" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Most wedding planners are coordinators — they hire vendors and hope for the best. We are builders.
            Our in-house team of artisans, designers, fabricators, lighting experts, and event managers ensures
            every element of your wedding is crafted to our exacting standards.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {[
              { num: '200+', label: 'Team Members' },
              { num: '50+', label: 'Artisans & Craftsmen' },
              { num: '30+', label: 'In-house Designers' },
              { num: '100%', label: 'Quality Controlled' },
            ].map((s) => (
              <div key={s.label} className="p-5 border" style={{ borderColor: 'rgba(201,168,76,0.4)' }}>
                <div className="text-3xl font-bold mb-1" style={{ color: 'var(--gold-light)', fontFamily: 'var(--display-font)' }}>{s.num}</div>
                <div className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.55)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Expertise */}
      <section id="expertise" className="py-20 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-center mb-3" style={{ color: 'var(--gold)' }}>Our Expertise</p>
          <h2 className="section-title mb-2">Luxury & Royal Wedding Expertise</h2>
          <div className="section-divider mb-4" />
          <p className="section-subtitle">Decades of experience with India&apos;s most prestigious celebrations</p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Palace Weddings',
                desc: 'We have exclusive partnerships with 50+ royal properties across Rajasthan, granting our couples access to venues unavailable through other channels.',
              },
              {
                title: 'Grand Scale Events',
                desc: 'From intimate 50-person ceremonies to 2000-guest celebrations — our logistics and production capabilities scale seamlessly.',
              },
              {
                title: 'Ceremonial Authenticity',
                desc: 'Our cultural experts ensure every ritual and tradition is honored with the reverence and grandeur it deserves.',
              },
              {
                title: 'International Standards',
                desc: 'We host and plan for NRI and international couples, fluent in coordinating across time zones, currencies, and cultures.',
              },
            ].map((e) => (
              <div key={e.title} className="flex gap-5">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full text-white text-sm"
                  style={{ background: 'var(--gold)' }}>✦</div>
                <div>
                  <h3 className="font-semibold mb-2" style={{ fontFamily: 'var(--display-font)', color: 'var(--charcoal)' }}>{e.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center" style={{ background: 'var(--gold)' }}>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white" style={{ fontFamily: 'var(--display-font)', fontStyle: 'italic' }}>
          Let&apos;s Create Something Extraordinary Together
        </h2>
        <div className="flex flex-wrap gap-4 justify-center mt-6">
          <Link href="/contact" className="bg-white text-sm tracking-widest uppercase px-8 py-3 transition-all hover:bg-gray-100"
            style={{ color: 'var(--gold-dark)', fontFamily: 'var(--display-font)' }}>
            Contact Us
          </Link>
          <Link href="/team" className="border border-white text-white text-sm tracking-widest uppercase px-8 py-3 transition-all hover:bg-white/10"
            style={{ fontFamily: 'var(--display-font)' }}>
            Meet Our Team
          </Link>
        </div>
      </section>
    </>
  );
}
