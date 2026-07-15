import Link from 'next/link';
import type { Metadata } from 'next';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

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
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(181,66,42,0.2) 0%, transparent 70%)' }} />
        <div className="relative">
          <p className="label mb-4" style={{ color: 'var(--brand-light)' }}>
            <Link href="/services" style={{ color: 'var(--brand-light)', textDecoration: 'none' }}>Services</Link> / Entertainment
          </p>
          <h1>Entertainment Activities for Wedding Guests</h1>
          <div className="section-divider" />
          <p>Curated experiences that delight guests of all ages — from folk performances to adventure activities</p>
        </div>
      </div>

      <section className="py-24 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="leading-relaxed text-center max-w-3xl mx-auto mb-14" style={{ color: 'var(--text-muted)' }}>
              A great wedding keeps guests engaged, entertained, and talking for years. We curate
              entertainment programs that reflect the spirit of Rajasthan&apos;s rich cultural heritage
              while catering to modern sensibilities.
            </p>
          </Reveal>
          <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" gap={0.07}>
            {entertainmentOptions.map((e) => (
              <StaggerItem key={e.title}>
                <div className="modern-card p-7 h-full" style={{ borderBottom: '3px solid var(--brand)' }}>
                  <h3 className="font-semibold mb-3" style={{ fontFamily: 'var(--display-font)', fontStyle: 'italic', color: 'var(--charcoal)' }}>{e.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{e.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-14 text-center">
            <Link href="/contact" className="btn-primary"><span>Plan Entertainment</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
