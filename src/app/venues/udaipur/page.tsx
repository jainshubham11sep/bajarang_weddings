import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Weddings in Udaipur | Bajranng Weddings',
  description: 'Plan your dream wedding in Udaipur — the City of Lakes. Palace hotels, lakeside venues, and expert local coordination by Bajranng Weddings.',
};

export default function UdaipurPage() {
  return (
    <>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #0E1A2D 0%, #1A2D3D 100%)' }}>
        <p className="text-xs tracking-[0.35em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
          <Link href="/venues" style={{ color: 'var(--gold)', textDecoration: 'none' }}>Venues</Link> / Udaipur
        </p>
        <h1>Weddings in Udaipur</h1>
        <div className="section-divider mt-4 mb-4" />
        <p>The City of Lakes — India&apos;s most romantic destination for royal weddings</p>
      </div>

      <section className="py-20 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="section-title text-left mb-4">Why Udaipur?</h2>
              <div className="section-divider mx-0 mb-6" />
              <p className="leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                Nestled in the Aravalli hills, Udaipur is the most romantic city in Rajasthan.
                Shimmering lakes, baroque palaces, and a royal heritage that spans centuries create
                the perfect backdrop for a fairy-tale wedding.
              </p>
              <p className="leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
                From the ethereal Taj Lake Palace — appearing to float on Lake Pichola — to the
                grand City Palace complex, Udaipur offers a range of venues for intimate gatherings
                and grand celebrations alike.
              </p>
              <Link href="/contact" className="btn-primary">Plan My Udaipur Wedding</Link>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-5" style={{ borderLeft: '3px solid var(--gold)' }}>
                <div className="font-semibold mb-1" style={{ fontFamily: 'Georgia, serif' }}>Iconic Venues</div>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Taj Lake Palace, City Palace, Oberoi Udaivilas, Jagmandir Island Palace</p>
              </div>
              <div className="bg-white p-5" style={{ borderLeft: '3px solid var(--gold)' }}>
                <div className="font-semibold mb-1" style={{ fontFamily: 'Georgia, serif' }}>Best Season</div>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>October to March — cool evenings, perfect skies</p>
              </div>
              <div className="bg-white p-5" style={{ borderLeft: '3px solid var(--gold)' }}>
                <div className="font-semibold mb-1" style={{ fontFamily: 'Georgia, serif' }}>Guest Capacity</div>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>50 to 2,000+ guests across various properties</p>
              </div>
              <div className="bg-white p-5" style={{ borderLeft: '3px solid var(--gold)' }}>
                <div className="font-semibold mb-1" style={{ fontFamily: 'Georgia, serif' }}>Signature Experience</div>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Boat arrival ceremony on Lake Pichola at sunset</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
