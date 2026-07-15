import Link from 'next/link';
import type { Metadata } from 'next';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

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
  { year: '2024', event: '2000+ weddings, 200+ team members, and 35 years of creating timeless memories — still counting' },
];

export default function AboutPage() {
  return (
    <>
      <div className="page-hero">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(181,66,42,0.2) 0%, transparent 70%)' }} />
        <div className="relative">
          <p className="label mb-4" style={{ color: 'var(--brand-light)' }}>Our Journey</p>
          <h1>About Bajranng Weddings</h1>
          <div className="section-divider" />
          <p>Designing Grand Weddings for 35+ Years — born in Rajasthan, trusted across India</p>
        </div>
      </div>

      {/* Our Story */}
      <section id="our-story" className="py-12 md:py-24 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <Reveal direction="right">
            <div>
              <p className="eyebrow mb-4">Our Story</p>
              <h2 className="display-xl" style={{ fontSize: 'clamp(2rem, 4vw, 2.9rem)', color: 'var(--ink)', marginBottom: '1.5rem' }}>Born from a Passion for Perfection</h2>
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
                Today, 35 years on, with over 2000 weddings executed and a team of 200+ creative professionals, we remain
                as dedicated to that original vision as ever: making every wedding a timeless masterpiece.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/contact" className="btn-primary"><span>Start Your Journey</span></Link>
                <Link href="/about/founders" className="btn-outline"><span>Founder&apos;s Note</span></Link>
              </div>
            </div>
          </Reveal>
          <Stagger className="space-y-0" gap={0.1}>
            {milestones.map((m, i) => (
              <StaggerItem key={m.year} direction="left">
                <div className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-16 text-right">
                    <span className="font-bold text-sm" style={{ color: 'var(--brand)', fontFamily: 'var(--display-font)', fontStyle: 'italic', fontSize: '1.1rem' }}>{m.year}</span>
                  </div>
                  <div className="flex-shrink-0 flex flex-col items-center pt-1">
                    <div className="w-3 h-3 rounded-full" style={{ background: 'var(--brand)' }} />
                    {i < milestones.length - 1 && <div className="w-px flex-1 mt-1" style={{ background: 'var(--stone)', minHeight: '2rem' }} />}
                  </div>
                  <p className="text-sm leading-relaxed pb-4" style={{ color: 'var(--text-muted)' }}>{m.event}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose" className="py-12 md:py-24 px-4" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <p className="eyebrow mb-4" style={{ justifyContent: 'center' }}>Why Us</p>
              <h2 className="display-xl" style={{ fontSize: 'clamp(2rem, 4vw, 2.9rem)', color: 'var(--ink)', marginBottom: '0.75rem' }}>Why Choose Bajranng Weddings</h2>
              <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>Six reasons why discerning couples trust us with their most important day</p>
            </div>
          </Reveal>
          <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" gap={0.08}>
            {whyChooseUs.map((item) => (
              <StaggerItem key={item.title}>
                <div className="modern-card h-full" style={{ padding: '2.25rem', borderTop: '3px solid var(--brand)' }}>
                  <div className="text-lg font-semibold mb-3" style={{ fontFamily: 'var(--display-font)', fontStyle: 'italic', fontWeight: 500, color: 'var(--charcoal)' }}>{item.title}</div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* In-house Production */}
      <section id="production" className="py-12 md:py-24 px-4 relative overflow-hidden" style={{ background: 'var(--charcoal)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 20%, rgba(181,66,42,0.16) 0%, transparent 70%)' }} />
        <div className="max-w-5xl mx-auto text-center text-white relative">
          <Reveal>
            <p className="eyebrow mb-4" style={{ justifyContent: 'center' }}>What Sets Us Apart</p>
            <h2 className="display-xl" style={{ fontSize: 'clamp(2rem, 4vw, 2.9rem)', color: 'white', marginBottom: '1.25rem' }}>In-house Production &amp; Execution</h2>
            <p className="leading-relaxed mb-6 max-w-3xl mx-auto" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Most wedding planners are coordinators — they hire vendors and hope for the best. We are builders.
              Our in-house team of artisans, designers, fabricators, lighting experts, and event managers ensures
              every element of your wedding is crafted to our exacting standards.
            </p>
          </Reveal>
          <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12" gap={0.08}>
            {[
              { num: '200+', label: 'Team Members' },
              { num: '50+', label: 'Artisans & Craftsmen' },
              { num: '30+', label: 'In-house Designers' },
              { num: '100%', label: 'Quality Controlled' },
            ].map((s) => (
              <StaggerItem key={s.label}>
                <div className="glass-dark p-6 h-full">
                  <div className="text-3xl font-bold mb-1" style={{ color: 'var(--brand-light)', fontFamily: 'var(--display-font)', fontStyle: 'italic', fontWeight: 400 }}>{s.num}</div>
                  <div className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.55)' }}>{s.label}</div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Luxury Expertise */}
      <section id="expertise" className="py-12 md:py-24 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <p className="eyebrow mb-4" style={{ justifyContent: 'center' }}>Our Expertise</p>
              <h2 className="display-xl" style={{ fontSize: 'clamp(2rem, 4vw, 2.9rem)', color: 'var(--ink)', marginBottom: '0.75rem' }}>Luxury &amp; Royal Wedding Expertise</h2>
              <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>Decades of experience with India&apos;s most prestigious celebrations</p>
            </div>
          </Reveal>
          <Stagger className="grid md:grid-cols-2 gap-10" gap={0.1}>
            {[
              { title: 'Palace Weddings', desc: 'We have exclusive partnerships with 50+ royal properties across Rajasthan, granting our couples access to venues unavailable through other channels.' },
              { title: 'Grand Scale Events', desc: 'From intimate 50-person ceremonies to 2000-guest celebrations — our logistics and production capabilities scale seamlessly.' },
              { title: 'Ceremonial Authenticity', desc: 'Our cultural experts ensure every ritual and tradition is honored with the reverence and grandeur it deserves.' },
              { title: 'International Standards', desc: 'We host and plan for NRI and international couples, fluent in coordinating across time zones, currencies, and cultures.' },
            ].map((e) => (
              <StaggerItem key={e.title}>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center text-white text-sm" style={{ background: 'var(--brand)' }}>✦</div>
                  <div>
                    <h3 className="font-semibold mb-2" style={{ fontFamily: 'var(--display-font)', fontStyle: 'italic', fontWeight: 500, color: 'var(--charcoal)', fontSize: '1.1rem' }}>{e.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{e.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-20 px-4 text-center relative overflow-hidden" style={{ background: 'var(--brand)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 0%, rgba(255,255,255,0.1) 0%, transparent 70%)' }} />
        <Reveal>
          <div className="relative">
            <h2 className="display-xl" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: 'white', marginBottom: '1.75rem' }}>
              Let&apos;s Create Something Extraordinary Together
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-ghost-light" style={{ background: 'white', color: 'var(--brand-dark)', borderColor: 'white' }}><span>Contact Us</span></Link>
              <Link href="/team" className="btn-ghost-light"><span>Meet Our Team</span></Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
