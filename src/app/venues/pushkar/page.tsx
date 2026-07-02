import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Weddings in Pushkar | Bajranng Weddings',
  description: 'Intimate and spiritual wedding celebrations in Pushkar — the sacred oasis of Rajasthan.',
};

export default function PushkarPage() {
  return (
    <>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #1A2D0E 0%, #2A3D1A 100%)' }}>
        <p className="text-xs tracking-[0.35em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
          <Link href="/venues" style={{ color: 'var(--gold)', textDecoration: 'none' }}>Venues</Link> / Pushkar
        </p>
        <h1>Weddings in Pushkar</h1>
        <div className="section-divider mt-4 mb-4" />
        <p>Sacred Oasis — where spirituality and beauty create the most meaningful celebrations</p>
      </div>

      <section className="py-20 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="section-title text-left mb-4">Why Pushkar?</h2>
              <div className="section-divider mx-0 mb-6" />
              <p className="leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                Pushkar is one of India&apos;s most sacred towns, nestled around a serene holy lake
                and ringed by gentle hills. The town&apos;s tranquil energy and spiritual significance
                make it ideal for couples seeking a meaningful, intimate celebration.
              </p>
              <p className="leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
                With boutique heritage properties and the unique backdrop of the Pushkar Lake and
                ghats, weddings here carry a timeless, soulful quality.
              </p>
              <Link href="/contact" className="btn-primary">Plan My Pushkar Wedding</Link>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-5" style={{ borderLeft: '3px solid var(--gold)' }}>
                <div className="font-semibold mb-1" style={{ fontFamily: 'Georgia, serif' }}>Iconic Venues</div>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>The Westin Pushkar, RAAS Pushkar, Ananta Spa & Resorts</p>
              </div>
              <div className="bg-white p-5" style={{ borderLeft: '3px solid var(--gold)' }}>
                <div className="font-semibold mb-1" style={{ fontFamily: 'Georgia, serif' }}>Best Season</div>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>October to March — pleasant weather, serene atmosphere</p>
              </div>
              <div className="bg-white p-5" style={{ borderLeft: '3px solid var(--gold)' }}>
                <div className="font-semibold mb-1" style={{ fontFamily: 'Georgia, serif' }}>Guest Capacity</div>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>30 to 500 guests — best for intimate celebrations</p>
              </div>
              <div className="bg-white p-5" style={{ borderLeft: '3px solid var(--gold)' }}>
                <div className="font-semibold mb-1" style={{ fontFamily: 'Georgia, serif' }}>Signature Experience</div>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Lakeside aarti ceremony at dawn — deeply moving</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
