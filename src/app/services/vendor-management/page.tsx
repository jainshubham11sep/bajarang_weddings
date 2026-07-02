import Link from 'next/link';
import type { Metadata } from 'next';

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
        <p className="text-xs tracking-[0.35em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
          <Link href="/services" style={{ color: 'var(--gold)', textDecoration: 'none' }}>Services</Link> / Vendor Management
        </p>
        <h1>Vendor Management</h1>
        <div className="section-divider mt-4 mb-4" />
        <p>A curated network of 1000+ trusted partners — vetted, experienced, and reliable</p>
      </div>

      <section className="py-20 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-5xl mx-auto">
          <p className="leading-relaxed text-center max-w-3xl mx-auto mb-12" style={{ color: 'var(--text-muted)' }}>
            Over 15 years, we have built one of India&apos;s most extensive wedding vendor networks.
            Every vendor is personally vetted by our team and has a proven track record with us.
            We handle all negotiations, contracts, and coordination — you just enjoy the result.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {vendorCategories.map((v) => (
              <div key={v.label} className="bg-white p-5 text-center card-hover">
                <div className="text-2xl font-bold mb-1" style={{ fontFamily: 'Georgia, serif', color: 'var(--gold)' }}>{v.count}</div>
                <div className="text-xs tracking-wider text-center" style={{ color: 'var(--text-muted)' }}>{v.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact" className="btn-primary">Connect With Our Network</Link>
          </div>
        </div>
      </section>
    </>
  );
}
