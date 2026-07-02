import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Weddings in Jaipur | Bajranng Weddings',
  description: 'Plan your royal wedding in Jaipur — the Pink City. Heritage palaces, vibrant culture, and expert planning by Bajranng Weddings.',
};

export default function JaipurPage() {
  return (
    <>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #2D1A0E 0%, #3D2A1A 100%)' }}>
        <p className="text-xs tracking-[0.35em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
          <Link href="/venues" style={{ color: 'var(--gold)', textDecoration: 'none' }}>Venues</Link> / Jaipur
        </p>
        <h1>Weddings in Jaipur</h1>
        <div className="section-divider mt-4 mb-4" />
        <p>The Pink City — where royal grandeur meets vibrant Rajasthani culture</p>
      </div>

      <section className="py-20 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="section-title text-left mb-4">Why Jaipur?</h2>
              <div className="section-divider mx-0 mb-6" />
              <p className="leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                Jaipur, the capital of Rajasthan, is where history, culture, and grandeur converge.
                Home to magnificent palaces, vibrant bazaars, and world-class heritage hotels, it&apos;s
                the ideal city for grand weddings with large guest lists.
              </p>
              <p className="leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
                The city&apos;s excellent connectivity, luxury accommodation options, and rich local culture
                make it India&apos;s most popular destination for celebration weddings.
              </p>
              <Link href="/contact" className="btn-primary">Plan My Jaipur Wedding</Link>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-5" style={{ borderLeft: '3px solid var(--gold)' }}>
                <div className="font-semibold mb-1" style={{ fontFamily: 'Georgia, serif' }}>Iconic Venues</div>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Rambagh Palace, Jai Mahal Palace, Samode Palace, Jal Mahal</p>
              </div>
              <div className="bg-white p-5" style={{ borderLeft: '3px solid var(--gold)' }}>
                <div className="font-semibold mb-1" style={{ fontFamily: 'Georgia, serif' }}>Best Season</div>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>October to March — festive atmosphere, comfortable weather</p>
              </div>
              <div className="bg-white p-5" style={{ borderLeft: '3px solid var(--gold)' }}>
                <div className="font-semibold mb-1" style={{ fontFamily: 'Georgia, serif' }}>Guest Capacity</div>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>100 to 5,000+ guests across multiple properties</p>
              </div>
              <div className="bg-white p-5" style={{ borderLeft: '3px solid var(--gold)' }}>
                <div className="font-semibold mb-1" style={{ fontFamily: 'Georgia, serif' }}>Signature Experience</div>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Elephant baraat procession through heritage streets</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
