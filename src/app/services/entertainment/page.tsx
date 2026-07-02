import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Entertainment Activities for Wedding Guests | Bajranng Weddings',
  description: 'Curated entertainment programs — folk artists, celebrity performances, adventure activities, and cultural experiences for wedding guests.',
};

const entertainmentOptions = [
  { title: 'Folk Performances', desc: 'Kalbelia dancers, Bhopa puppeteers, Kalbeliya fire dancers, and Manganiyar musicians.' },
  { title: 'Celebrity Acts', desc: 'Bollywood performers, stand-up comedians, live bands, and DJ nights.' },
  { title: 'Cultural Experiences', desc: 'Turban tying, pottery workshops, block printing, and traditional cooking sessions.' },
  { title: 'Adventure Activities', desc: 'Camel rides, hot air balloons, desert safaris, and zip-lining experiences.' },
  { title: 'Sports & Games', desc: 'Cricket tournaments, kabaddi, polo, and traditional Indian board games.' },
  { title: 'Wellness Activities', desc: 'Yoga sessions, Ayurvedic spa treatments, and meditation in heritage settings.' },
];

export default function EntertainmentPage() {
  return (
    <>
      <div className="page-hero">
        <p className="text-xs tracking-[0.35em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
          <Link href="/services" style={{ color: 'var(--gold)', textDecoration: 'none' }}>Services</Link> / Entertainment
        </p>
        <h1>Entertainment Activities for Wedding Guests</h1>
        <div className="section-divider mt-4 mb-4" />
        <p>Curated experiences that delight guests of all ages — from folk performances to adventure activities</p>
      </div>

      <section className="py-20 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto">
          <p className="leading-relaxed text-center max-w-3xl mx-auto mb-12" style={{ color: 'var(--text-muted)' }}>
            A great wedding keeps guests engaged, entertained, and talking for years. We curate
            entertainment programs that reflect the spirit of Rajasthan&apos;s rich cultural heritage
            while catering to modern sensibilities.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {entertainmentOptions.map((e) => (
              <div key={e.title} className="bg-white p-7 card-hover" style={{ borderBottom: '3px solid var(--gold)' }}>
                <h3 className="font-semibold mb-3" style={{ fontFamily: 'Georgia, serif', color: 'var(--charcoal)' }}>{e.title}</h3>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{e.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact" className="btn-primary">Plan Entertainment</Link>
          </div>
        </div>
      </section>
    </>
  );
}
