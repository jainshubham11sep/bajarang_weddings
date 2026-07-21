import Link from 'next/link';
import type { Metadata } from 'next';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Testimonials | Bajranng Weddings',
  description: 'Read what our couples say about their wedding experience with Bajranng Weddings.',
};

const testimonials = [
  {
    name: 'Priya & Arjun Mehta',
    location: 'Mumbai',
    venue: 'Taj Lake Palace, Udaipur',
    date: 'December 2023',
    rating: 5,
    text: 'Bajranng Weddings turned our dream of a palace wedding in Udaipur into the most magical reality. Every detail was immaculate — from the floral mandap to the baraat procession on decorated elephants. The team was with us every step of the way, and the day exceeded every expectation we had.',
  },
  {
    name: 'Sanya & Vikram Singhania',
    location: 'Delhi',
    venue: 'Rambagh Palace, Jaipur',
    date: 'February 2024',
    rating: 5,
    text: 'We had over 800 guests and Bajranng managed everything flawlessly. Their in-house production team is world-class. The décor was jaw-dropping and our guests still talk about it. The planning team anticipated every need before we even asked — that level of service is rare.',
  },
  {
    name: 'Ananya & Rohan Kapoor',
    location: 'Bengaluru',
    venue: 'Samode Palace, Jaipur',
    date: 'January 2024',
    rating: 5,
    text: 'Choosing Bajranng was the best decision we made. They understood our vision perfectly and delivered beyond expectations. The mandap design alone was worth every penny. A truly royal experience.',
  },
  {
    name: 'Neha & Sameer Oberoi',
    location: 'London, UK',
    venue: 'Umaid Bhawan Palace, Jodhpur',
    date: 'November 2023',
    rating: 5,
    text: 'As an NRI couple planning from London, we were nervous about coordinating everything remotely. Bajranng was incredible — regular video calls, digital planning tools, and a team that was always reachable. The wedding was even more spectacular than we imagined.',
  },
  {
    name: 'Ritu & Abhishek Gupta',
    location: 'Pune',
    venue: 'Suryagarh Palace, Jaisalmer',
    date: 'December 2022',
    rating: 5,
    text: 'Our desert wedding in Jaisalmer was pure magic. Bajranng transformed the sand dunes into a breathtaking ceremony space. The lighting, the folk musicians, the camel procession — every element was curated with such care. Our guests said it was the best wedding they had ever attended.',
  },
  {
    name: 'Kavya & Rahul Sharma',
    location: 'Hyderabad',
    venue: 'City Palace, Udaipur',
    date: 'March 2023',
    rating: 5,
    text: 'The team at Bajranng is simply exceptional. From the first consultation to the final farewell, we felt completely taken care of. The in-house production means everything looks cohesive and intentional — not pieced together from different vendors.',
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(181,66,42,0.2) 0%, transparent 70%)' }} />
        <div className="relative">
          <p className="label mb-4" style={{ color: 'var(--brand-light)' }}>Real Couples. Real Stories.</p>
          <h1>Testimonials</h1>
          <div className="section-divider" />
          <p>Hear from the couples who trusted us with their most important day</p>
        </div>
      </div>

      {/* Written Reviews */}
      <section className="py-12 md:py-24 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <p className="eyebrow mb-4" style={{ justifyContent: 'center' }}>Client Reviews</p>
              <h2 className="display-xl" style={{ fontSize: 'clamp(2rem, 4vw, 2.9rem)', color: 'var(--ink)', marginBottom: '0.75rem' }}>Straight From the Heart</h2>
            </div>
          </Reveal>
          <Stagger className="grid md:grid-cols-2 gap-6" gap={0.06}>
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <div className="modern-card p-8 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl opacity-15 leading-none" style={{ color: 'var(--brand)', fontFamily: 'var(--display-font)' }}>&ldquo;</div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.rating }, (_, i) => (
                        <span key={i} className="text-sm" style={{ color: 'var(--brand)' }}>★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed mb-6 italic" style={{ color: 'var(--text-muted)', fontFamily: 'var(--display-font)' }}>{t.text}</p>
                  <div className="border-t pt-4" style={{ borderColor: 'var(--stone)' }}>
                    <div className="font-semibold text-sm" style={{ fontFamily: 'var(--display-font)', fontStyle: 'italic', color: 'var(--charcoal)' }}>{t.name}</div>
                    <div className="text-xs mt-1 flex gap-2 flex-wrap">
                      <span style={{ color: 'var(--brand)', fontWeight: 600 }}>{t.location}</span>
                      <span style={{ color: 'var(--text-muted)' }}>·</span>
                      <span style={{ color: 'var(--text-muted)' }}>{t.venue}</span>
                      <span style={{ color: 'var(--text-muted)' }}>·</span>
                      <span style={{ color: 'var(--text-muted)' }}>{t.date}</span>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-20 px-4 text-center relative overflow-hidden" style={{ background: 'var(--brand)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 0%, rgba(255,255,255,0.1) 0%, transparent 70%)' }} />
        <Reveal>
          <div className="relative">
            <h2 className="display-xl" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'white', marginBottom: '1rem' }}>
              Be Our Next Success Story
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem' }}>Let&apos;s create memories your guests will talk about for years.</p>
            <Link href="/contact" className="btn-ghost-light" style={{ background: 'white', color: 'var(--brand-dark)', borderColor: 'white' }}><span>Plan My Wedding</span></Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
