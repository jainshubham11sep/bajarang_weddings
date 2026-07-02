import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Transport & Logistics Management | Bajranng Weddings',
  description: 'End-to-end transport and logistics management for your wedding — guest travel, baraat conveyance, and vendor coordination.',
};

export default function TransportPage() {
  return (
    <>
      <div className="page-hero">
        <p className="text-xs tracking-[0.35em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
          <Link href="/services" style={{ color: 'var(--gold)', textDecoration: 'none' }}>Services</Link> / Transport & Logistics
        </p>
        <h1>Transport & Logistics Management</h1>
        <div className="section-divider mt-4 mb-4" />
        <p>Seamless movement — from airport arrivals to grand baraat processions</p>
      </div>

      <section className="py-20 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title text-left mb-4">Every Journey, Perfectly Planned</h2>
              <div className="section-divider mx-0 mb-6" />
              <p className="leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                Logistics is the backbone of a smooth wedding experience. We coordinate every movement —
                from the first guest arrival at the airport to the last farewell — with military precision
                and genuine warmth.
              </p>
              <Link href="/contact" className="btn-primary">Plan Logistics</Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '✈️', label: 'Airport Transfers' },
                { icon: '🏨', label: 'Hotel Shuttles' },
                { icon: '🐘', label: 'Baraat Procession' },
                { icon: '🚌', label: 'Guest Buses' },
                { icon: '🚗', label: 'Luxury Cars' },
                { icon: '🚁', label: 'Helicopter Service' },
                { icon: '🐪', label: 'Camel Conveyance' },
                { icon: '📦', label: 'Vendor Logistics' },
              ].map((t) => (
                <div key={t.label} className="bg-white p-5 text-center card-hover">
                  <div className="text-2xl mb-2">{t.icon}</div>
                  <div className="text-xs tracking-wider uppercase" style={{ color: 'var(--charcoal)' }}>{t.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
