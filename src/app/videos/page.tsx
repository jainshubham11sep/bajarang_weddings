import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Videos | Bajranng Weddings',
  description: 'Watch wedding highlight films, behind-the-scenes, decor transformation videos, and full wedding films by Bajranng Weddings.',
};

const categories = [
  {
    id: 'highlights',
    label: 'Wedding Highlights',
    desc: 'Cinematic short films capturing the best moments of our couples\' special days.',
    videos: 8,
  },
  {
    id: 'bts',
    label: 'Behind The Scenes',
    desc: 'Go inside our production process — see how we transform venues into magical spaces.',
    videos: 5,
  },
  {
    id: 'decor',
    label: 'Decor Transformations',
    desc: 'Time-lapse and walkthrough videos of our most spectacular décor installations.',
    videos: 6,
  },
  {
    id: 'experiences',
    label: 'Client Experiences',
    desc: 'Hear from couples who trusted Bajranng Weddings with their most important day.',
    videos: 4,
  },
  {
    id: 'films',
    label: 'Full Wedding Films',
    desc: 'Complete documentary-style wedding films for couples who want the full story told.',
    videos: 3,
  },
];

export default function VideosPage() {
  return (
    <>
      <div className="page-hero">
        <p className="text-xs tracking-[0.35em] uppercase mb-3" style={{ color: 'var(--gold)' }}>Watch & Experience</p>
        <h1>Wedding Videos</h1>
        <div className="section-divider mt-4 mb-4" />
        <p>Cinematic stories of love, celebration, and royal grandeur</p>
      </div>

      {categories.map((cat, idx) => (
        <section key={cat.id} id={cat.id} className="py-16 px-4"
          style={{ background: idx % 2 === 0 ? 'var(--cream)' : 'var(--ivory)' }}>
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <p className="text-xs tracking-[0.3em] uppercase mb-2" style={{ color: 'var(--gold)' }}>{cat.videos} Videos</p>
              <h2 className="section-title text-left mb-2">{cat.label}</h2>
              <div className="section-divider mx-0 mb-3" />
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{cat.desc}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {Array.from({ length: Math.min(cat.videos, 3) }, (_, i) => (
                <div key={i} className="card-hover cursor-pointer group"
                  style={{ background: 'var(--charcoal)', aspectRatio: '16/9', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all group-hover:scale-110"
                      style={{ borderColor: 'var(--gold)', background: 'rgba(201,168,76,0.15)' }}>
                      <div className="w-0 h-0 ml-1" style={{
                        borderTop: '8px solid transparent',
                        borderBottom: '8px solid transparent',
                        borderLeft: '14px solid var(--gold)',
                      }} />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-xs tracking-widest uppercase"
                    style={{ color: 'rgba(255,255,255,0.5)' }}>
                    {cat.label} — {String(i + 1).padStart(2, '0')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 px-4 text-center" style={{ background: 'var(--gold)' }}>
        <h2 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
          Want a Video for Your Wedding?
        </h2>
        <p className="text-white/80 mb-6">Our in-house videography team captures every precious moment with cinematic artistry.</p>
        <Link href="/contact" className="bg-white text-sm tracking-widest uppercase px-8 py-3"
          style={{ color: 'var(--gold-dark)', fontFamily: 'Georgia, serif' }}>
          Enquire Now
        </Link>
      </section>
    </>
  );
}
