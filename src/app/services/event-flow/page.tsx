import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Event Flow Management | Bajranng Weddings',
  description: 'Precise event flow management and real-time coordination for every ceremony and function at your wedding.',
};

export default function EventFlowPage() {
  return (
    <>
      <div className="page-hero">
        <p className="text-xs tracking-[0.35em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
          <Link href="/services" style={{ color: 'var(--gold)', textDecoration: 'none' }}>Services</Link> / Event Flow Management
        </p>
        <h1>Event Flow Management</h1>
        <div className="section-divider mt-4 mb-4" />
        <p>Precision scheduling and seamless coordination — every moment, on time</p>
      </div>

      <section className="py-20 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="section-title text-left mb-4">The Art of Perfect Timing</h2>
              <div className="section-divider mx-0 mb-6" />
              <p className="leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                A wedding is an intricate ballet of people, moments, and emotions. Our event flow management
                ensures every ritual begins on time, every vendor is in position, and every guest experience
                is seamless.
              </p>
              <p className="leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                We create detailed run-of-show documents, brief every team member, and station coordinators
                throughout the venue — so nothing is left to chance.
              </p>
              <Link href="/contact" className="btn-primary">Learn More</Link>
            </div>
            <div className="space-y-4">
              {[
                'Detailed run-of-show planning',
                'Multi-function scheduling across 3–7 days',
                'Real-time coordination via dedicated app',
                'Vendor briefing and positioning',
                'Guest flow and crowd management',
                'Backup contingency planning',
                'Post-event debrief and reporting',
              ].map((item) => (
                <div key={item} className="flex gap-3 items-center p-3 bg-white">
                  <span className="text-sm" style={{ color: 'var(--gold)' }}>✓</span>
                  <span className="text-sm" style={{ color: 'var(--charcoal)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
