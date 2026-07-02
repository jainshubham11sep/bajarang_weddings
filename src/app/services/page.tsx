import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Bajranng Weddings',
  description: 'Comprehensive wedding planning services — décor, event management, destination planning, entertainment, transport, and more.',
};

const services = [
  {
    icon: '👑',
    title: 'Destination Wedding Planner in India',
    desc: 'Comprehensive planning for destination weddings across India\'s most iconic locations, from concept to completion.',
    href: '/services/destination-wedding-planner',
  },
  {
    icon: '🌸',
    title: 'Wedding Décor & Design Services',
    desc: 'Bespoke floral designs, mandap architecture, lighting, and thematic décor crafted entirely by our in-house team.',
    href: '/services/decor-design',
  },
  {
    icon: '📋',
    title: 'Event Flow Management',
    desc: 'Precise scheduling, coordination, and real-time management of every ceremony and function.',
    href: '/services/event-flow',
  },
  {
    icon: '🏰',
    title: 'Destination Wedding Planning & Venue Selection',
    desc: 'Access to 50+ exclusive palace and heritage properties across Rajasthan, with expert venue curation.',
    href: '/services/venue-selection',
  },
  {
    icon: '🎭',
    title: 'Entertainment Activities for Wedding Guests',
    desc: 'Curated entertainment programs — folk artists, celebrity performances, adventure activities, and cultural experiences.',
    href: '/services/entertainment',
  },
  {
    icon: '🤝',
    title: 'Wedding Guest Management',
    desc: 'Comprehensive hospitality management for all guests — check-ins, welcome kits, concierge services, and more.',
    href: '/services/guest-management',
  },
  {
    icon: '💌',
    title: 'Wedding Invitation & Communication Services',
    desc: 'Bespoke physical invitations, digital e-vites, wedding websites, and guest communication management.',
    href: '/services/invitations',
  },
  {
    icon: '🚗',
    title: 'Transport & Logistics Management',
    desc: 'End-to-end guest transportation, baraat conveyance, vendor logistics, and airport transfers.',
    href: '/services/transport',
  },
  {
    icon: '🤝',
    title: 'Vendor Management',
    desc: 'Our network of 1000+ verified vendors — caterers, photographers, florists, entertainers — at your service.',
    href: '/services/vendor-management',
  },
];

export default function ServicesPage() {
  return (
    <>
      <div className="page-hero">
        <p className="text-xs tracking-[0.35em] uppercase mb-3" style={{ color: 'var(--gold)' }}>What We Offer</p>
        <h1>Our Services</h1>
        <div className="section-divider mt-4 mb-4" />
        <p>End-to-end wedding planning, production, and execution — all under one roof</p>
      </div>

      <section className="py-20 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link key={s.title} href={s.href}
                className="bg-white p-7 card-hover service-card block no-underline">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-base font-semibold mb-3" style={{ fontFamily: 'Georgia, serif', color: 'var(--charcoal)' }}>{s.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>{s.desc}</p>
                <div className="text-xs tracking-widest uppercase" style={{ color: 'var(--gold)' }}>Learn More →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4" style={{ background: 'var(--charcoal)' }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', color: 'var(--gold-light)' }}>
            Every Service. One Team. Zero Compromise.
          </h2>
          <p className="mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
            All our services are planned, designed, and executed by our in-house team — ensuring seamless
            coordination and consistent quality across every aspect of your wedding.
          </p>
          <Link href="/contact" className="btn-primary">Get a Custom Quote</Link>
        </div>
      </section>
    </>
  );
}
