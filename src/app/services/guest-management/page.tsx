import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wedding Guest Management | Bajranng Weddings',
  description: 'Comprehensive hospitality and guest management services for your wedding — from check-in to concierge.',
};

export default function GuestManagementPage() {
  return (
    <>
      <div className="page-hero">
        <p className="text-xs tracking-[0.35em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
          <Link href="/services" style={{ color: 'var(--gold)', textDecoration: 'none' }}>Services</Link> / Guest Management
        </p>
        <h1>Wedding Guest Management</h1>
        <div className="section-divider mt-4 mb-4" />
        <p>Making every guest feel like royalty — from arrival to farewell</p>
      </div>

      <section className="py-20 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title text-left mb-4">Hospitality That Leaves an Impression</h2>
              <div className="section-divider mx-0 mb-6" />
              <p className="leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                Your guests are the heartbeat of your wedding. Our dedicated hospitality team ensures
                every single guest — whether local or travelling from abroad — experiences warmth,
                efficiency, and the hallmark Bajranng level of care.
              </p>
              <Link href="/contact" className="btn-primary">Discuss Guest Management</Link>
            </div>
            <div className="space-y-4">
              {[
                'Hotel room blocking and allocation',
                'Airport and railway station transfers',
                'Welcome kits and gifting',
                'Dedicated guest helpdesk',
                'Event-wise RSVP management',
                'Senior guest care and assistance',
                'International guest coordination',
                'Dietary and special requirement management',
              ].map((item) => (
                <div key={item} className="flex gap-3 items-center p-3 bg-white">
                  <span style={{ color: 'var(--gold)' }}>✓</span>
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
