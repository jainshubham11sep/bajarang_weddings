import Link from 'next/link';
import type { Metadata } from 'next';

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
    text: 'Bajranng Weddings turned our dream of a palace wedding in Udaipur into the most magical reality. Every detail was immaculate — from the floral mandap to the baraat procession on decorated elephants. Rajiv and Priya were with us every step of the way, and the day exceeded every expectation we had.',
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

const videoTestimonials = [
  { name: 'The Mehta Wedding', venue: 'Udaipur', duration: '3:45' },
  { name: 'The Singhania Wedding', venue: 'Jaipur', duration: '4:12' },
  { name: 'The Kapoor Wedding', venue: 'Jodhpur', duration: '3:28' },
];

export default function TestimonialsPage() {
  return (
    <>
      <div className="page-hero">
        <p className="text-xs tracking-[0.35em] uppercase mb-3" style={{ color: 'var(--gold)' }}>Real Couples. Real Stories.</p>
        <h1>Testimonials</h1>
        <div className="section-divider mt-4 mb-4" />
        <p>Hear from the couples who trusted us with their most important day</p>
      </div>

      {/* Written Reviews */}
      <section className="py-20 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title mb-2">Client Reviews</h2>
          <div className="section-divider mb-4" />
          <p className="section-subtitle">Straight from the hearts of our couples</p>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white p-8 card-hover">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl opacity-15 leading-none" style={{ color: 'var(--gold)', fontFamily: 'Georgia, serif' }}>&ldquo;</div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }, (_, i) => (
                      <span key={i} className="text-sm" style={{ color: 'var(--gold)' }}>★</span>
                    ))}
                  </div>
                </div>
                <p className="text-sm leading-relaxed mb-6 italic" style={{ color: 'var(--text-muted)' }}>{t.text}</p>
                <div className="border-t pt-4" style={{ borderColor: 'var(--ivory)' }}>
                  <div className="font-semibold text-sm" style={{ fontFamily: 'Georgia, serif', color: 'var(--charcoal)' }}>{t.name}</div>
                  <div className="text-xs mt-1 flex gap-2 flex-wrap">
                    <span style={{ color: 'var(--gold)' }}>{t.location}</span>
                    <span style={{ color: 'var(--text-muted)' }}>·</span>
                    <span style={{ color: 'var(--text-muted)' }}>{t.venue}</span>
                    <span style={{ color: 'var(--text-muted)' }}>·</span>
                    <span style={{ color: 'var(--text-muted)' }}>{t.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 px-4" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title mb-2">Video Testimonials</h2>
          <div className="section-divider mb-4" />
          <p className="section-subtitle">Watch our couples share their experience</p>
          <div className="grid md:grid-cols-3 gap-6">
            {videoTestimonials.map((v) => (
              <div key={v.name} className="card-hover cursor-pointer group">
                <div className="relative flex items-center justify-center"
                  style={{ background: 'var(--charcoal)', aspectRatio: '16/9' }}>
                  <div className="w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all group-hover:scale-110"
                    style={{ borderColor: 'var(--gold)', background: 'rgba(201,168,76,0.15)' }}>
                    <div className="w-0 h-0 ml-1" style={{
                      borderTop: '8px solid transparent',
                      borderBottom: '8px solid transparent',
                      borderLeft: '14px solid var(--gold)',
                    }} />
                  </div>
                  <div className="absolute bottom-2 right-2 text-xs px-2 py-0.5"
                    style={{ background: 'rgba(0,0,0,0.6)', color: 'rgba(255,255,255,0.8)' }}>
                    {v.duration}
                  </div>
                </div>
                <div className="bg-white p-4">
                  <div className="font-semibold text-sm mb-0.5" style={{ fontFamily: 'Georgia, serif', color: 'var(--charcoal)' }}>{v.name}</div>
                  <div className="text-xs tracking-widest uppercase" style={{ color: 'var(--gold)' }}>{v.venue}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center" style={{ background: 'var(--gold)' }}>
        <h2 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
          Be Our Next Success Story
        </h2>
        <p className="text-white/80 mb-6">Let&apos;s create memories your guests will talk about for years.</p>
        <Link href="/contact" className="bg-white text-sm tracking-widest uppercase px-8 py-3"
          style={{ color: 'var(--gold-dark)', fontFamily: 'Georgia, serif' }}>
          Plan My Wedding
        </Link>
      </section>
    </>
  );
}
