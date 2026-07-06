import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Founder's Note | Bajranng Weddings",
  description:
    "Meet Manmohan Agrawal and Ashutosh Agrawal — the visionary founders behind Bajranng Weddings, India's premier luxury wedding planning company.",
};

export default function FoundersPage() {
  return (
    <>
      {/* Hero */}
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #2D2520 100%)' }}>
        <p className="text-xs tracking-[0.35em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
          <Link href="/about" style={{ color: 'var(--gold)', textDecoration: 'none' }}>About</Link> / Founder&apos;s Note
        </p>
        <h1>Founder&apos;s Note</h1>
        <div className="section-divider mt-4 mb-4" />
        <p>Three decades of passion, perfection, and the art of extraordinary celebrations</p>
      </div>

      {/* Instagram CTA */}
      <section className="py-16 px-4" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: 'var(--gold)' }}>Follow Our Journey</p>
          <h2 className="section-title mb-2">See Our Work on Instagram</h2>
          <div className="section-divider mb-8" />
          <p className="mb-8 leading-relaxed" style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            From behind-the-scenes moments to breathtaking wedding highlights — follow us for a glimpse into the world of Bajranng Weddings.
          </p>
          <a
            href="https://www.instagram.com/bajranngweddings"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ display: 'inline-block' }}
          >
            @bajranngweddings
          </a>
        </div>
      </section>

      {/* Manmohan Agrawal */}
      <section className="py-20 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            {/* Identity card */}
            <div className="md:col-span-2">
              <div className="sticky top-24">
                <div
                  className="w-full aspect-square flex items-center justify-center mb-6 relative overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #2D2520, #1A1A1A)' }}
                >
                  {/* Gold monogram */}
                  <div className="text-center">
                    <div
                      className="text-7xl font-bold leading-none"
                      style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', color: 'var(--gold)' }}
                    >
                      MA
                    </div>
                    <div className="mt-3 text-xs tracking-[0.3em] uppercase" style={{ color: 'rgba(255,255,255,0.4)' }}>
                      Founder
                    </div>
                  </div>
                  {/* Corner ornament */}
                  <div
                    className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2"
                    style={{ borderColor: 'var(--gold)' }}
                  />
                  <div
                    className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2"
                    style={{ borderColor: 'var(--gold)' }}
                  />
                </div>

                <div className="p-6 bg-white" style={{ borderLeft: '3px solid var(--gold)' }}>
                  <h3
                    className="text-xl font-bold mb-1 leading-tight"
                    style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', color: 'var(--charcoal)' }}
                  >
                    Manmohan Agrawal
                  </h3>
                  <p className="text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--gold)' }}>
                    Founder &amp; Visionary
                  </p>
                  <div className="space-y-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                    <p>✦ &nbsp;35+ Years in Events</p>
                    <p>✦ &nbsp;500+ Weddings Curated</p>
                    <p>✦ &nbsp;Pan-India Presence</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-3">
              <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
                Founder &amp; Visionary, Bajranng Weddings
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold mb-2 leading-tight"
                style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', color: 'var(--charcoal)' }}
              >
                Manmohan Agrawal
              </h2>
              <div className="section-divider mx-0 mb-8" />

              <div className="space-y-5 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                <p>
                  For over three decades, Manmohan Agrawal has been at the forefront of India&apos;s
                  wedding and event industry, shaping celebrations that are timeless, grand, and deeply
                  memorable. Founded on his passion for creating extraordinary experiences, Bajranng
                  Weddings has evolved into a distinguished name synonymous with luxury, elegance, and
                  impeccable craftsmanship.
                </p>
                <p>
                  With an exceptional eye for detail and an innate understanding of design, culture,
                  and hospitality, Mr. Agrawal has curated and executed some of the most remarkable
                  weddings and celebrations over the past 35 years. His ability to transform a vision
                  into an immersive experience has earned the trust of families, renowned venues, and
                  industry partners alike.
                </p>
                <p>
                  A true perfectionist at heart, he believes that every celebration should be a
                  reflection of individuality, emotion, and excellence. His dedication to quality,
                  innovation, and personalized service continues to define the philosophy of Bajranng
                  Weddings, inspiring a legacy of creating unforgettable moments and iconic celebrations.
                </p>
              </div>

              {/* Pull quote */}
              <div className="mt-10 p-7 relative" style={{ background: 'var(--ivory)', borderLeft: '4px solid var(--gold)' }}>
                <div
                  className="absolute -top-4 left-6 text-6xl leading-none opacity-20"
                  style={{ color: 'var(--gold)', fontFamily: 'Georgia, serif' }}
                >
                  &ldquo;
                </div>
                <p
                  className="text-lg italic leading-relaxed"
                  style={{ fontFamily: 'Georgia, serif', color: 'var(--charcoal)' }}
                >
                  Every celebration should be a reflection of individuality, emotion, and excellence.
                </p>
                <p className="mt-3 text-xs tracking-widest uppercase" style={{ color: 'var(--gold)' }}>
                  — Manmohan Agrawal
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="py-4 px-4" style={{ background: 'var(--gold)' }}>
        <div className="max-w-5xl mx-auto flex items-center gap-4">
          <div className="flex-1 h-px bg-white/30" />
          <span className="text-white text-sm tracking-[0.3em] uppercase">The Next Generation</span>
          <div className="flex-1 h-px bg-white/30" />
        </div>
      </div>

      {/* Ashutosh Agrawal */}
      <section className="py-20 px-4" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            {/* Bio first on desktop */}
            <div className="md:col-span-3 md:order-1 order-2">
              <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
                Co-Founder, Bajranng Weddings
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold mb-2 leading-tight"
                style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', color: 'var(--charcoal)' }}
              >
                Ashutosh Agrawal
              </h2>
              <div className="section-divider mx-0 mb-8" />

              <div className="space-y-5 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                <p>
                  Having joined Bajranng Weddings over a decade ago, Ashutosh Agrawal has been
                  instrumental in shaping the brand&apos;s evolution into a distinguished name in the
                  luxury wedding industry. Combining a deep understanding of client aspirations with an
                  exceptional eye for creativity and design, he has a unique ability to transform ideas
                  into extraordinary celebrations that are both elegant and deeply personal.
                </p>
                <p>
                  Known for his innovative approach, attention to detail, and keen sense of emerging
                  trends, Ashutosh seamlessly blends timeless traditions with contemporary aesthetics
                  to create unforgettable wedding experiences.
                </p>
                <p>
                  His passion for excellence, commitment to personalized service, and dedication to
                  delivering flawless execution have earned him the trust of clients seeking
                  celebrations that are not only visually stunning but also meaningful and memorable.
                  Today, he continues to lead the creative vision of Bajranng Weddings, ensuring that
                  every event reflects sophistication, artistry, and the highest standards of luxury
                  hospitality.
                </p>
              </div>

              {/* Pull quote */}
              <div className="mt-10 p-7 relative" style={{ background: 'white', borderLeft: '4px solid var(--gold)' }}>
                <div
                  className="absolute -top-4 left-6 text-6xl leading-none opacity-20"
                  style={{ color: 'var(--gold)', fontFamily: 'Georgia, serif' }}
                >
                  &ldquo;
                </div>
                <p
                  className="text-lg italic leading-relaxed"
                  style={{ fontFamily: 'Georgia, serif', color: 'var(--charcoal)' }}
                >
                  Timeless traditions, contemporary aesthetics — creating celebrations that are
                  visually stunning, meaningful, and memorable.
                </p>
                <p className="mt-3 text-xs tracking-widest uppercase" style={{ color: 'var(--gold)' }}>
                  — Ashutosh Agrawal
                </p>
              </div>
            </div>

            {/* Identity card */}
            <div className="md:col-span-2 md:order-2 order-1">
              <div className="sticky top-24">
                <div
                  className="w-full aspect-square flex items-center justify-center mb-6 relative overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #1A2D3D, #0E1A2D)' }}
                >
                  <div className="text-center">
                    <div
                      className="text-7xl font-bold leading-none"
                      style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', color: 'var(--gold)' }}
                    >
                      AA
                    </div>
                    <div className="mt-3 text-xs tracking-[0.3em] uppercase" style={{ color: 'rgba(255,255,255,0.4)' }}>
                      Co-Founder
                    </div>
                  </div>
                  <div
                    className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2"
                    style={{ borderColor: 'var(--gold)' }}
                  />
                  <div
                    className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2"
                    style={{ borderColor: 'var(--gold)' }}
                  />
                </div>

                <div className="p-6 bg-white" style={{ borderLeft: '3px solid var(--gold)' }}>
                  <h3
                    className="text-xl font-bold mb-1 leading-tight"
                    style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', color: 'var(--charcoal)' }}
                  >
                    Ashutosh Agrawal
                  </h3>
                  <p className="text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--gold)' }}>
                    Co-Founder &amp; Creative Lead
                  </p>
                  <div className="space-y-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                    <p>✦ &nbsp;10+ Years at Bajranng</p>
                    <p>✦ &nbsp;Creative Vision &amp; Design</p>
                    <p>✦ &nbsp;Luxury Wedding Specialist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy section */}
      <section
        className="py-16 px-4 text-center text-white"
        style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #2D2520 100%)' }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-4xl mb-6" style={{ color: 'var(--gold)' }}>✦</div>
          <p
            className="text-xl md:text-2xl italic leading-relaxed mb-6"
            style={{ fontFamily: 'Georgia, serif', color: 'rgba(255,255,255,0.85)' }}
          >
            Together, Manmohan and Ashutosh Agrawal have built more than a wedding company —
            they have created a legacy of love, artistry, and extraordinary moments that families
            will cherish for generations.
          </p>
          <div className="section-divider mb-8" />
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-sm tracking-widest uppercase px-8 py-3 transition-all hover:bg-gray-100"
              style={{ color: 'var(--gold-dark)', fontFamily: 'Georgia, serif' }}
            >
              Begin Your Journey
            </Link>
            <Link
              href="/about"
              className="border border-white text-white text-sm tracking-widest uppercase px-8 py-3 transition-all hover:bg-white/10"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              About Bajranng Weddings
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
