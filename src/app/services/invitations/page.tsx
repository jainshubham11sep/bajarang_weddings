import Link from 'next/link';
import type { Metadata } from 'next';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Wedding Invitation & Communication Services | Bajranng Weddings',
  description: 'Bespoke wedding invitations, digital e-vites, wedding websites, and guest communication management.',
};

const items = [
  {
    title: 'Bespoke Physical Invitations',
    desc: 'Hand-crafted invitation suites — from embossed cards to boxed invitations with silk ribbons, wax seals, and fragrant petals.',
  },
  {
    title: 'Digital E-vites & Wedding Website',
    desc: 'Custom wedding websites with RSVP management, event schedules, travel information, and gift registries.',
  },
  {
    title: 'Guest Communication Management',
    desc: 'Automated reminders, event-wise updates, and WhatsApp broadcast management — keeping guests informed effortlessly.',
  },
  {
    title: 'On-site Stationery',
    desc: 'Menu cards, table numbers, welcome signage, seating charts, and ceremony programs — all cohesively designed.',
  },
];

export default function InvitationsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(181,66,42,0.2) 0%, transparent 70%)' }} />
        <div className="relative">
          <p className="label mb-4" style={{ color: 'var(--brand-light)' }}>
            <Link href="/services" style={{ color: 'var(--brand-light)', textDecoration: 'none' }}>Services</Link> / Invitations
          </p>
          <h1>Wedding Invitation & Communication Services</h1>
          <div className="section-divider" />
          <p>Your wedding story begins with the invitation — let it be extraordinary</p>
        </div>
      </div>

      <section className="py-12 md:py-24 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="leading-relaxed text-center max-w-3xl mx-auto mb-14" style={{ color: 'var(--text-muted)' }}>
              Your wedding invitation sets the tone for the entire celebration. Our design team creates
              bespoke stationery that reflects your personality, wedding theme, and the grandeur of the occasion.
            </p>
          </Reveal>
          <Stagger className="grid md:grid-cols-2 gap-6" gap={0.08}>
            {items.map((item) => (
              <StaggerItem key={item.title}>
                <div className="modern-card p-7 h-full" style={{ borderLeft: '3px solid var(--brand)' }}>
                  <h3 className="font-semibold mb-3" style={{ fontFamily: 'var(--display-font)', fontStyle: 'italic', color: 'var(--charcoal)' }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-14 text-center">
            <Link href="/contact" className="btn-primary"><span>Design My Invitations</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
