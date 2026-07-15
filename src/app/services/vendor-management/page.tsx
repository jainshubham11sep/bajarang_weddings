import Link from 'next/link';
import type { Metadata } from 'next';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Vendor Management | Bajranng Weddings',
  description: 'Access our network of 1000+ trusted wedding vendors — caterers, photographers, florists, entertainers, and more.',
};

const vendorCategories = [
  { label: 'Photography & Videography', count: '50+' },
  { label: 'Catering & F&B', count: '80+' },
  { label: 'Floral & Décor Suppliers', count: '100+' },
  { label: 'Entertainment & Performers', count: '150+' },
  { label: 'Bridal Services', count: '40+' },
  { label: 'Audio & Visual', count: '30+' },
  { label: 'Hospitality & Hotels', count: '60+' },
  { label: 'Specialty Services', count: '200+' },
];

export default function VendorManagementPage() {
  return (
    <>
      <div className="page-hero">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(181,66,42,0.2) 0%, transparent 70%)' }} />
        <div className="relative">
          <p className="label mb-4" style={{ color: 'var(--brand-light)' }}>
            <Link href="/services" style={{ color: 'var(--brand-light)', textDecoration: 'none' }}>Services</Link> / Vendor Management
          </p>
          <h1>Vendor Management</h1>
          <div className="section-divider" />
          <p>A curated network of 1000+ trusted partners — vetted, experienced, and reliable</p>
        </div>
      </div>

      <section className="py-12 md:py-24 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="leading-relaxed text-center max-w-3xl mx-auto mb-14" style={{ color: 'var(--text-muted)' }}>
              Over 35 years, we have built one of India&apos;s most extensive wedding vendor networks.
              Every vendor is personally vetted by our team and has a proven track record with us.
              We handle all negotiations, contracts, and coordination — you just enjoy the result.
            </p>
          </Reveal>
          <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-4" gap={0.05}>
            {vendorCategories.map((v) => (
              <StaggerItem key={v.label}>
                <div className="modern-card p-5 text-center h-full">
                  <div className="text-2xl font-bold mb-1" style={{ fontFamily: 'var(--display-font)', fontStyle: 'italic', color: 'var(--brand)' }}>{v.count}</div>
                  <div className="text-xs tracking-wider text-center" style={{ color: 'var(--text-muted)' }}>{v.label}</div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-14 text-center">
            <Link href="/contact" className="btn-primary"><span>Connect With Our Network</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
