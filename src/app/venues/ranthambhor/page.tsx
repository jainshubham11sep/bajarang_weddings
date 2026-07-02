import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Weddings in Ranthambhor | Bajranng Weddings',
  description: 'Jungle luxury weddings in Ranthambhor — wild, romantic, and utterly unforgettable.',
};

export default function RanthambhorPage() {
  return (
    <>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #0E2D1A 0%, #1A3D2A 100%)' }}>
        <p className="text-xs tracking-[0.35em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
          <Link href="/venues" style={{ color: 'var(--gold)', textDecoration: 'none' }}>Venues</Link> / Ranthambhor
        </p>
        <h1>Weddings in Ranthambhor</h1>
        <div className="section-divider mt-4 mb-4" />
        <p>Wilderness Royale — celebrate love in the heart of India&apos;s most legendary jungle</p>
      </div>

      <section className="py-20 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="section-title text-left mb-4">Why Ranthambhor?</h2>
              <div className="section-divider mx-0 mb-6" />
              <p className="leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                For the adventurous couple seeking something truly extraordinary, Ranthambhor offers
                a wedding experience found nowhere else — luxury tented camps, the haunting silhouette
                of a 10th-century fort, and the possibility of a tiger sighting at dawn.
              </p>
              <p className="leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
                Ultra-luxury properties like Aman-i-Khas and SUJÁN Sher Bagh combine wild nature
                with impeccable five-star hospitality — the ultimate expression of exclusive celebrations.
              </p>
              <Link href="/contact" className="btn-primary">Plan My Ranthambhor Wedding</Link>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-5" style={{ borderLeft: '3px solid var(--gold)' }}>
                <div className="font-semibold mb-1" style={{ fontFamily: 'Georgia, serif' }}>Iconic Venues</div>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Aman-i-Khas, SUJÁN Sher Bagh, Sherpur Kalan, Ranthambhore Regency</p>
              </div>
              <div className="bg-white p-5" style={{ borderLeft: '3px solid var(--gold)' }}>
                <div className="font-semibold mb-1" style={{ fontFamily: 'Georgia, serif' }}>Best Season</div>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>October to June — park open, wildlife active</p>
              </div>
              <div className="bg-white p-5" style={{ borderLeft: '3px solid var(--gold)' }}>
                <div className="font-semibold mb-1" style={{ fontFamily: 'Georgia, serif' }}>Guest Capacity</div>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>20 to 300 guests — ideal for exclusive, intimate gatherings</p>
              </div>
              <div className="bg-white p-5" style={{ borderLeft: '3px solid var(--gold)' }}>
                <div className="font-semibold mb-1" style={{ fontFamily: 'Georgia, serif' }}>Signature Experience</div>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Candlelit ceremony in a luxury tented camp under the Milky Way</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
