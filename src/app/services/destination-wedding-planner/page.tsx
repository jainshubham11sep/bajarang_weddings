import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Destination Wedding Planner in India | Bajranng Weddings',
  description: 'India\'s premier destination wedding planner — comprehensive planning for royal and luxury weddings across Rajasthan and beyond.',
};

export default function DestinationWeddingPlannerPage() {
  return (
    <>
      <div className="page-hero">
        <p className="text-xs tracking-[0.35em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
          <Link href="/services" style={{ color: 'var(--gold)', textDecoration: 'none' }}>Services</Link> / Destination Wedding Planner
        </p>
        <h1>Destination Wedding Planner in India</h1>
        <div className="section-divider mt-4 mb-4" />
        <p>Comprehensive planning for the most iconic destination weddings across India</p>
      </div>

      <section className="py-20 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="section-title text-left mb-4">Your Dream Destination. Our Expertise.</h2>
              <div className="section-divider mx-0 mb-6" />
              <p className="leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                Planning a destination wedding is a complex undertaking — navigating unfamiliar venues, logistics,
                local vendors, and cultural nuances while trying to create the wedding of your dreams. That&apos;s
                exactly where Bajranng Weddings excels.
              </p>
              <p className="leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                With over 15 years of experience planning weddings across Rajasthan&apos;s most iconic destinations,
                we bring unmatched local knowledge, established vendor relationships, and a proven process
                to every celebration.
              </p>
              <Link href="/contact" className="btn-primary">Start Planning</Link>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Venue Scouting & Booking', desc: 'Exclusive access to 50+ palace and heritage properties.' },
                { title: 'Full Guest Coordination', desc: 'Travel, accommodation, and hospitality for all guests.' },
                { title: 'Multi-Function Management', desc: 'From haldi to reception — every ceremony planned perfectly.' },
                { title: 'Local Vendor Network', desc: '1000+ verified vendors across all destination cities.' },
                { title: 'On-Ground Team', desc: 'Our crew is at every destination, ensuring zero surprises.' },
                { title: 'Budget Management', desc: 'Transparent pricing with detailed breakdowns.' },
              ].map((f) => (
                <div key={f.title} className="flex gap-4 p-4 bg-white card-hover">
                  <div className="flex-shrink-0 text-lg" style={{ color: 'var(--gold)' }}>✦</div>
                  <div>
                    <div className="font-semibold text-sm mb-1" style={{ fontFamily: 'Georgia, serif', color: 'var(--charcoal)' }}>{f.title}</div>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 text-center" style={{ background: 'var(--gold)' }}>
        <h2 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
          Let&apos;s Plan Your Dream Destination Wedding
        </h2>
        <Link href="/contact" className="bg-white text-sm tracking-widest uppercase px-8 py-3"
          style={{ color: 'var(--gold-dark)', fontFamily: 'Georgia, serif' }}>
          Get Started Today
        </Link>
      </section>
    </>
  );
}
