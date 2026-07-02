import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Weddings in Jodhpur | Bajranng Weddings',
  description: 'Plan your wedding in Jodhpur — the Blue City. Umaid Bhawan Palace and Mehrangarh Fort create iconic wedding backdrops.',
};

export default function JodhpurPage() {
  return (
    <>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #0E1F2D 0%, #1A2D3D 100%)' }}>
        <p className="text-xs tracking-[0.35em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
          <Link href="/venues" style={{ color: 'var(--gold)', textDecoration: 'none' }}>Venues</Link> / Jodhpur
        </p>
        <h1>Weddings in Jodhpur</h1>
        <div className="section-divider mt-4 mb-4" />
        <p>The Blue City — dramatic forts, golden sands, and timeless royal elegance</p>
      </div>

      <section className="py-20 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="section-title text-left mb-4">Why Jodhpur?</h2>
              <div className="section-divider mx-0 mb-6" />
              <p className="leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                Jodhpur is drama personified. The massive Mehrangarh Fort rises 400 feet above the city,
                its sandstone walls glowing golden at sunset. The indigo-painted old city below creates
                a surreal contrast that makes every photograph extraordinary.
              </p>
              <p className="leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
                Umaid Bhawan Palace, still a royal residence, is considered one of the world&apos;s finest
                wedding venues — combining living heritage with five-star luxury.
              </p>
              <Link href="/contact" className="btn-primary">Plan My Jodhpur Wedding</Link>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-5" style={{ borderLeft: '3px solid var(--gold)' }}>
                <div className="font-semibold mb-1" style={{ fontFamily: 'Georgia, serif' }}>Iconic Venues</div>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Umaid Bhawan Palace, Mehrangarh Fort, Ajit Bhawan, RAAS Jodhpur</p>
              </div>
              <div className="bg-white p-5" style={{ borderLeft: '3px solid var(--gold)' }}>
                <div className="font-semibold mb-1" style={{ fontFamily: 'Georgia, serif' }}>Best Season</div>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>November to February — dramatic sunsets, cool nights</p>
              </div>
              <div className="bg-white p-5" style={{ borderLeft: '3px solid var(--gold)' }}>
                <div className="font-semibold mb-1" style={{ fontFamily: 'Georgia, serif' }}>Guest Capacity</div>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>50 to 3,000+ guests</p>
              </div>
              <div className="bg-white p-5" style={{ borderLeft: '3px solid var(--gold)' }}>
                <div className="font-semibold mb-1" style={{ fontFamily: 'Georgia, serif' }}>Signature Experience</div>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Fort-lit ceremony with folk musicians echoing off 15th-century walls</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
