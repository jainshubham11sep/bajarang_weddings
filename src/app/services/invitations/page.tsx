import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wedding Invitation & Communication Services | Bajranng Weddings',
  description: 'Bespoke wedding invitations, digital e-vites, wedding websites, and guest communication management.',
};

export default function InvitationsPage() {
  return (
    <>
      <div className="page-hero">
        <p className="text-xs tracking-[0.35em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
          <Link href="/services" style={{ color: 'var(--gold)', textDecoration: 'none' }}>Services</Link> / Invitations
        </p>
        <h1>Wedding Invitation & Communication Services</h1>
        <div className="section-divider mt-4 mb-4" />
        <p>Your wedding story begins with the invitation — let it be extraordinary</p>
      </div>

      <section className="py-20 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-5xl mx-auto">
          <p className="leading-relaxed text-center max-w-3xl mx-auto mb-12" style={{ color: 'var(--text-muted)' }}>
            Your wedding invitation sets the tone for the entire celebration. Our design team creates
            bespoke stationery that reflects your personality, wedding theme, and the grandeur of the occasion.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
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
            ].map((item) => (
              <div key={item.title} className="bg-white p-7 card-hover" style={{ borderLeft: '3px solid var(--gold)' }}>
                <h3 className="font-semibold mb-3" style={{ fontFamily: 'Georgia, serif', color: 'var(--charcoal)' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact" className="btn-primary">Design My Invitations</Link>
          </div>
        </div>
      </section>
    </>
  );
}
