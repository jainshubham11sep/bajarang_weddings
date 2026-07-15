import Link from 'next/link';
import type { Metadata } from 'next';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Destination Wedding Planner in India | Bajranng Weddings',
  description: 'India\'s premier destination wedding planner — comprehensive planning for royal and luxury weddings across Rajasthan and beyond.',
};

const features = [
  { title: 'Venue Scouting & Booking', desc: 'Exclusive access to 50+ palace and heritage properties.' },
  { title: 'Full Guest Coordination', desc: 'Travel, accommodation, and hospitality for all guests.' },
  { title: 'Multi-Function Management', desc: 'From haldi to reception — every ceremony planned perfectly.' },
  { title: 'Local Vendor Network', desc: '1000+ verified vendors across all destination cities.' },
  { title: 'On-Ground Team', desc: 'Our crew is at every destination, ensuring zero surprises.' },
  { title: 'Budget Management', desc: 'Transparent pricing with detailed breakdowns.' },
];

export default function DestinationWeddingPlannerPage() {
  return (
    <>
      <div className="page-hero">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(181,66,42,0.2) 0%, transparent 70%)' }} />
        <div className="relative">
          <p className="label mb-4" style={{ color: 'var(--brand-light)' }}>
            <Link href="/services" style={{ color: 'var(--brand-light)', textDecoration: 'none' }}>Services</Link> / Destination Wedding Planner
          </p>
          <h1>Destination Wedding Planner in India</h1>
          <div className="section-divider" />
          <p>Comprehensive planning for the most iconic destination weddings across India</p>
        </div>
      </div>

      <section className="py-12 md:py-24 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-start">
          <Reveal direction="right">
            <div>
              <p className="eyebrow mb-4">Our Approach</p>
              <h2 className="display-xl" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: 'var(--ink)', marginBottom: '1.5rem' }}>Your Dream Destination. Our Expertise.</h2>
              <p className="leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                Planning a destination wedding is a complex undertaking — navigating unfamiliar venues, logistics,
                local vendors, and cultural nuances while trying to create the wedding of your dreams. That&apos;s
                exactly where Bajranng Weddings excels.
              </p>
              <p className="leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                With over 35 years of experience planning weddings across Rajasthan&apos;s most iconic destinations,
                we bring unmatched local knowledge, established vendor relationships, and a proven process
                to every celebration.
              </p>
              <Link href="/contact" className="btn-primary"><span>Start Planning</span></Link>
            </div>
          </Reveal>
          <Stagger className="space-y-4" gap={0.06}>
            {features.map((f) => (
              <StaggerItem key={f.title} direction="left">
                <div className="flex gap-4 p-4 modern-card">
                  <div className="flex-shrink-0 text-lg" style={{ color: 'var(--brand)' }}>✦</div>
                  <div>
                    <div className="font-semibold text-sm mb-1" style={{ fontFamily: 'var(--display-font)', fontStyle: 'italic', color: 'var(--charcoal)' }}>{f.title}</div>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{f.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-10 md:py-20 px-4 text-center relative overflow-hidden" style={{ background: 'var(--brand)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 0%, rgba(255,255,255,0.1) 0%, transparent 70%)' }} />
        <Reveal>
          <div className="relative">
            <h2 className="display-xl" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'white', marginBottom: '1.75rem' }}>
              Let&apos;s Plan Your Dream Destination Wedding
            </h2>
            <Link href="/contact" className="btn-ghost-light" style={{ background: 'white', color: 'var(--brand-dark)', borderColor: 'white' }}><span>Get Started Today</span></Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
