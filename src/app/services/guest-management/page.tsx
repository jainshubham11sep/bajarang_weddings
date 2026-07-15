import Link from 'next/link';
import type { Metadata } from 'next';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Wedding Guest Management | Bajranng Weddings',
  description: 'Comprehensive hospitality and guest management services for your wedding — from check-in to concierge.',
};

const items = [
  'Hotel room blocking and allocation',
  'Airport and railway station transfers',
  'Welcome kits and gifting',
  'Dedicated guest helpdesk',
  'Event-wise RSVP management',
  'Senior guest care and assistance',
  'International guest coordination',
  'Dietary and special requirement management',
];

export default function GuestManagementPage() {
  return (
    <>
      <div className="page-hero">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(181,66,42,0.2) 0%, transparent 70%)' }} />
        <div className="relative">
          <p className="label mb-4" style={{ color: 'var(--brand-light)' }}>
            <Link href="/services" style={{ color: 'var(--brand-light)', textDecoration: 'none' }}>Services</Link> / Guest Management
          </p>
          <h1>Wedding Guest Management</h1>
          <div className="section-divider" />
          <p>Making every guest feel like royalty — from arrival to farewell</p>
        </div>
      </div>

      <section className="py-24 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14">
          <Reveal direction="right">
            <div>
              <p className="eyebrow mb-4">Hospitality First</p>
              <h2 className="display-xl" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: 'var(--ink)', marginBottom: '1.5rem' }}>Hospitality That Leaves an Impression</h2>
              <p className="leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                Your guests are the heartbeat of your wedding. Our dedicated hospitality team ensures
                every single guest — whether local or travelling from abroad — experiences warmth,
                efficiency, and the hallmark Bajranng level of care.
              </p>
              <Link href="/contact" className="btn-primary"><span>Discuss Guest Management</span></Link>
            </div>
          </Reveal>
          <Stagger className="space-y-3" gap={0.05}>
            {items.map((item) => (
              <StaggerItem key={item} direction="left">
                <div className="flex gap-3 items-center p-4 modern-card">
                  <span style={{ color: 'var(--brand)' }}>✓</span>
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
