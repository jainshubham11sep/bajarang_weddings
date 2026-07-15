import Link from 'next/link';
import type { Metadata } from 'next';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Our Founders | Bajranng Weddings',
  description: 'Meet Manmohan Agrawal and Ashutosh Agrawal — the visionaries behind Bajranng Weddings, India\'s premier luxury wedding planning company.',
};

export default function TeamPage() {
  return (
    <>
      <div className="page-hero">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(181,66,42,0.2) 0%, transparent 70%)' }} />
        <div className="relative">
          <p className="label mb-4" style={{ color: 'var(--brand-light)' }}>The Visionaries</p>
          <h1>Our Founders</h1>
          <div className="section-divider" />
          <p>35+ years of crafting India&apos;s most extraordinary weddings</p>
        </div>
      </div>

      {/* Manmohan Agrawal */}
      <section className="py-24 px-4" style={{ background: 'var(--cream)' }}>
        <Reveal>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div className="flex flex-col items-center md:items-start">
            <div className="w-40 h-40 rounded-full flex items-center justify-center text-white text-4xl font-bold mb-6"
              style={{ background: 'linear-gradient(135deg, var(--brand-dark), var(--brand))' }}>
              MA
            </div>
            <p className="text-xs tracking-[0.3em] uppercase mb-2 text-center md:text-left" style={{ color: 'var(--brand)' }}>Founder & Chairman</p>
            <h2 style={{ fontFamily: 'var(--display-font)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 400, color: 'var(--charcoal)', lineHeight: 1.2, marginBottom: '1rem', textAlign: 'left' }}>
              Manmohan Agrawal
            </h2>
            <div style={{ width: '48px', height: '2px', background: 'var(--brand)', marginBottom: '1.5rem' }} />
          </div>
          <div>
            <p className="leading-relaxed mb-4" style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Manmohan Agrawal founded Bajranng Weddings in 1991 in Kota, Rajasthan, with a singular belief: that every Indian
              wedding deserves to be a celebration of royal magnificence. What began as one man&apos;s passionate vision has
              grown into one of India&apos;s most respected luxury wedding companies.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Drawing deeply from Rajasthan&apos;s rich royal heritage — its majestic palaces, vibrant culture, and traditions of
              grand hospitality — he built a company that doesn&apos;t just plan weddings but crafts immersive experiences that
              families treasure for generations.
            </p>
            <blockquote style={{
              borderLeft: '3px solid var(--brand)',
              paddingLeft: '1.25rem',
              fontFamily: 'var(--display-font)',
              fontStyle: 'italic',
              fontSize: '1.1rem',
              color: 'var(--charcoal)',
              lineHeight: 1.6,
              margin: '1.5rem 0',
            }}>
              &ldquo;Every wedding is a once-in-a-lifetime moment. We treat it with that gravity — and that joy.&rdquo;
            </blockquote>
          </div>
        </div>
        </Reveal>
      </section>

      {/* Ashutosh Agrawal */}
      <section className="py-24 px-4" style={{ background: 'var(--ivory)' }}>
        <Reveal>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div className="order-2 md:order-1">
            <p className="leading-relaxed mb-4" style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Ashutosh Agrawal carries the Bajranng legacy into a new era. With deep expertise in contemporary luxury design
              and destination wedding logistics, he has expanded the company&apos;s reach across India and internationally —
              bringing Rajasthan&apos;s royal wedding tradition to NRI and global couples.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Ashutosh oversees the creative direction and production teams, ensuring that every wedding executed under the
              Bajranng name reflects the same unwavering standard of excellence and beauty that has defined the company
              for over three decades.
            </p>
            <blockquote style={{
              borderLeft: '3px solid var(--brand)',
              paddingLeft: '1.25rem',
              fontFamily: 'var(--display-font)',
              fontStyle: 'italic',
              fontSize: '1.1rem',
              color: 'var(--charcoal)',
              lineHeight: 1.6,
              margin: '1.5rem 0',
            }}>
              &ldquo;We inherit 35 years of trust. Our job is to honour it — and raise the bar every single time.&rdquo;
            </blockquote>
          </div>
          <div className="flex flex-col items-center md:items-end order-1 md:order-2">
            <div className="w-40 h-40 rounded-full flex items-center justify-center text-white text-4xl font-bold mb-6"
              style={{ background: 'linear-gradient(135deg, var(--brand-dark), var(--brand))' }}>
              AA
            </div>
            <p className="text-xs tracking-[0.3em] uppercase mb-2 text-center md:text-right" style={{ color: 'var(--brand)' }}>Director & Creative Head</p>
            <h2 style={{ fontFamily: 'var(--display-font)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 400, color: 'var(--charcoal)', lineHeight: 1.2, marginBottom: '1rem', textAlign: 'right' }}>
              Ashutosh Agrawal
            </h2>
            <div style={{ width: '48px', height: '2px', background: 'var(--brand)', marginBottom: '1.5rem', alignSelf: 'flex-end' }} />
          </div>
        </div>
        </Reveal>
      </section>

      {/* In-house team mention */}
      <section className="py-20 px-4 text-center relative overflow-hidden" style={{ background: 'var(--charcoal)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 20%, rgba(181,66,42,0.16) 0%, transparent 70%)' }} />
        <Reveal>
        <div className="max-w-2xl mx-auto relative">
          <p className="eyebrow mb-4" style={{ justifyContent: 'center' }}>Behind Every Wedding</p>
          <h2 className="display-xl" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', color: 'rgba(253,250,247,0.94)', marginBottom: '1.25rem' }}>
            200+ In-house Professionals
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '2.25rem' }}>
            Behind our founders is a 200+ member team of designers, artisans, planners, and production specialists — all
            in-house, all passionate, all dedicated to making your wedding extraordinary.
          </p>
          <Link href="/contact" className="btn-primary"><span>Plan My Wedding</span></Link>
        </div>
        </Reveal>
      </section>
    </>
  );
}
