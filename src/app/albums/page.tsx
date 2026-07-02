import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Albums | Bajranng Weddings',
  description: 'Explore our wedding photo albums — royal weddings, destination weddings, mandap designs, haldi, mehendi, and reception décor.',
};

const albums = [
  {
    title: 'Royal Weddings',
    desc: 'Palace ceremonies, royal processions, and regal décor from India\'s most iconic heritage properties.',
    count: '120+ Photos',
    href: '/albums/royal-weddings',
    bg: '#2D1B0E',
  },
  {
    title: 'Destination Weddings',
    desc: 'Breathtaking celebrations set against the lakes, deserts, and forts of Rajasthan.',
    count: '150+ Photos',
    href: '/albums/destination-weddings',
    bg: '#0E1B2D',
  },
  {
    title: 'Luxury Mandap Designs',
    desc: 'Our signature mandap creations — from floral masterpieces to architectural marvels.',
    count: '80+ Photos',
    href: '/albums/luxury-mandap',
    bg: '#1B2D0E',
  },
  {
    title: 'Haldi Decor',
    desc: 'Joyful and vibrant haldi ceremonies transformed into stunning visual experiences.',
    count: '60+ Photos',
    href: '/albums/haldi-decor',
    bg: '#2D2A0E',
  },
  {
    title: 'Mehendi Decor',
    desc: 'Elegant and intricate mehendi setups blending tradition with contemporary aesthetics.',
    count: '70+ Photos',
    href: '/albums/mehendi-decor',
    bg: '#2D0E1B',
  },
  {
    title: 'Reception Decor',
    desc: 'Grand reception halls, dramatic entrances, and unforgettable floral installations.',
    count: '100+ Photos',
    href: '/albums/reception-decor',
    bg: '#1B0E2D',
  },
];

export default function AlbumsPage() {
  return (
    <>
      <div className="page-hero">
        <p className="text-xs tracking-[0.35em] uppercase mb-3" style={{ color: 'var(--gold)' }}>Our Portfolio</p>
        <h1>Photo Albums</h1>
        <div className="section-divider mt-4 mb-4" />
        <p>A visual journey through the world of Bajranng Weddings</p>
      </div>

      <section className="py-20 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {albums.map((a) => (
              <Link key={a.title} href={a.href} className="group block card-hover overflow-hidden">
                <div className="relative h-56 flex items-center justify-center" style={{ background: a.bg }}>
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-35 transition-opacity"
                    style={{ background: 'var(--gold)' }} />
                  <div className="relative z-10 text-center p-6">
                    <div className="text-xs tracking-[0.25em] uppercase mb-2 text-white/60">Gallery</div>
                    <div className="text-2xl font-semibold text-white" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                      {a.title}
                    </div>
                    <div className="mt-2 text-xs" style={{ color: 'var(--gold-light)' }}>{a.count}</div>
                  </div>
                </div>
                <div className="bg-white p-5">
                  <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-muted)' }}>{a.desc}</p>
                  <div className="text-xs tracking-widest uppercase" style={{ color: 'var(--gold)' }}>View Album →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
