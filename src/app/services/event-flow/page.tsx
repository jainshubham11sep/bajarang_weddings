import Link from 'next/link';
import type { Metadata } from 'next';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Event Flow Management | Bajranng Weddings',
  description: 'Precise event flow management and real-time coordination for every ceremony and function at your wedding.',
};

const items = [
  'Detailed run-of-show planning',
  'Multi-function scheduling across 3–7 days',
  'Real-time coordination via dedicated app',
  'Vendor briefing and positioning',
  'Guest flow and crowd management',
  'Backup contingency planning',
  'Post-event debrief and reporting',
];

export default function EventFlowPage() {
  return (
    <>
      <div className="page-hero">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(181,66,42,0.2) 0%, transparent 70%)' }} />
        <div className="relative">
          <p className="label mb-4" style={{ color: 'var(--brand-light)' }}>
            <Link href="/services" style={{ color: 'var(--brand-light)', textDecoration: 'none' }}>Services</Link> / Event Flow Management
          </p>
          <h1>Event Flow Management</h1>
          <div className="section-divider" />
          <p>Precision scheduling and seamless coordination — every moment, on time</p>
        </div>
      </div>

      <section className="py-12 md:py-24 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-start">
          <Reveal direction="right">
            <div>
              <p className="eyebrow mb-4">Precision Planning</p>
              <h2 className="display-xl" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: 'var(--ink)', marginBottom: '1.5rem' }}>The Art of Perfect Timing</h2>
              <p className="leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                A wedding is an intricate ballet of people, moments, and emotions. Our event flow management
                ensures every ritual begins on time, every vendor is in position, and every guest experience
                is seamless.
              </p>
              <p className="leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                We create detailed run-of-show documents, brief every team member, and station coordinators
                throughout the venue — so nothing is left to chance.
              </p>
              <Link href="/contact" className="btn-primary"><span>Learn More</span></Link>
            </div>
          </Reveal>
          <Stagger className="space-y-3" gap={0.06}>
            {items.map((item) => (
              <StaggerItem key={item} direction="left">
                <div className="flex gap-3 items-center p-4 modern-card">
                  <span className="text-sm" style={{ color: 'var(--brand)' }}>✓</span>
                  <span className="text-sm" style={{ color: 'var(--charcoal)' }}>{item}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
