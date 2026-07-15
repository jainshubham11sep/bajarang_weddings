import Link from 'next/link';
import type { Metadata } from 'next';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Transport & Logistics Management | Bajranng Weddings',
  description: 'End-to-end transport and logistics management for your wedding — guest travel, baraat conveyance, and vendor coordination.',
};

const modes = [
  { icon: '✈️', label: 'Airport Transfers' },
  { icon: '🏨', label: 'Hotel Shuttles' },
  { icon: '🐘', label: 'Baraat Procession' },
  { icon: '🚌', label: 'Guest Buses' },
  { icon: '🚗', label: 'Luxury Cars' },
  { icon: '🚁', label: 'Helicopter Service' },
  { icon: '🐪', label: 'Camel Conveyance' },
  { icon: '📦', label: 'Vendor Logistics' },
];

export default function TransportPage() {
  return (
    <>
      <div className="page-hero">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(181,66,42,0.2) 0%, transparent 70%)' }} />
        <div className="relative">
          <p className="label mb-4" style={{ color: 'var(--brand-light)' }}>
            <Link href="/services" style={{ color: 'var(--brand-light)', textDecoration: 'none' }}>Services</Link> / Transport & Logistics
          </p>
          <h1>Transport & Logistics Management</h1>
          <div className="section-divider" />
          <p>Seamless movement — from airport arrivals to grand baraat processions</p>
        </div>
      </div>

      <section className="py-24 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14">
          <Reveal direction="right">
            <div>
              <p className="eyebrow mb-4">Seamless Movement</p>
              <h2 className="display-xl" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: 'var(--ink)', marginBottom: '1.5rem' }}>Every Journey, Perfectly Planned</h2>
              <p className="leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                Logistics is the backbone of a smooth wedding experience. We coordinate every movement —
                from the first guest arrival at the airport to the last farewell — with military precision
                and genuine warmth.
              </p>
              <Link href="/contact" className="btn-primary"><span>Plan Logistics</span></Link>
            </div>
          </Reveal>
          <Stagger className="grid grid-cols-2 gap-4" gap={0.05}>
            {modes.map((t) => (
              <StaggerItem key={t.label}>
                <div className="modern-card p-5 text-center h-full">
                  <div className="text-2xl mb-2">{t.icon}</div>
                  <div className="text-xs tracking-wider uppercase" style={{ color: 'var(--charcoal)' }}>{t.label}</div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
