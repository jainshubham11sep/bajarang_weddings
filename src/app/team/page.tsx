import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team | Bajranng Weddings',
  description: 'Meet the passionate people behind Bajranng Weddings — founders, designers, planners, and the dedicated execution team.',
};

const departments = [
  {
    name: 'Founders',
    desc: 'The visionaries who built Bajranng Weddings from a dream into India\'s most trusted luxury wedding company.',
    members: [
      { name: 'Rajiv Sharma', role: 'Co-Founder & Creative Director', bio: '20+ years in luxury event design. Rajiv\'s vision shapes every wedding\'s aesthetic identity.' },
      { name: 'Priya Sharma', role: 'Co-Founder & Head of Planning', bio: 'A logistics genius and client advocate, Priya ensures every wedding is flawlessly coordinated.' },
    ],
  },
  {
    name: 'Wedding Designers',
    desc: 'Our award-winning design team brings your vision to life with creativity, craftsmanship, and an eye for the extraordinary.',
    members: [
      { name: 'Anika Gupta', role: 'Lead Floral Designer', bio: 'Trained in Paris and Mumbai, Anika creates floral installations that take your breath away.' },
      { name: 'Rohan Mehra', role: 'Mandap Architecture Lead', bio: 'Rohan\'s mandap designs have been featured in Vogue India and Harper\'s Bazaar Bride.' },
      { name: 'Nisha Kapoor', role: 'Lighting & Ambiance Designer', bio: 'Nisha transforms spaces with light — turning ordinary venues into magical dreamscapes.' },
    ],
  },
  {
    name: 'Planning Team',
    desc: 'Meticulous planners who ensure every detail — from the guest list to the ceremony timing — is perfect.',
    members: [
      { name: 'Vikram Singh', role: 'Senior Wedding Planner', bio: 'With 150+ weddings executed, Vikram is the calm in any storm and a master of logistics.' },
      { name: 'Divya Joshi', role: 'Client Relations Manager', bio: 'Divya is your dedicated point of contact throughout the entire planning journey.' },
    ],
  },
  {
    name: 'Production Team',
    desc: 'The builders and craftsmen who construct the physical magic — every arch, stage, and installation.',
    members: [
      { name: 'Suresh Verma', role: 'Production Manager', bio: 'Suresh leads our 50-member production crew with 18 years of hands-on execution experience.' },
      { name: 'Amit Pandey', role: 'Technical Director', bio: 'AV systems, stage engineering, and structural builds — Amit ensures safety and spectacle.' },
    ],
  },
  {
    name: 'Hospitality Team',
    desc: 'The warm faces who ensure your guests feel welcomed, cared for, and delighted at every turn.',
    members: [
      { name: 'Meera Agarwal', role: 'Head of Guest Experience', bio: 'Meera\'s hospitality philosophy: every guest should feel like the guest of honour.' },
    ],
  },
  {
    name: 'Execution Team',
    desc: 'On-ground coordinators stationed at every corner of your venue on the wedding day.',
    members: [
      { name: 'Karan Malhotra', role: 'Lead Day-of Coordinator', bio: 'Karan\'s on-ground presence means nothing slips through the cracks — ever.' },
      { name: 'Sneha Rao', role: 'Ceremony Coordinator', bio: 'Sneha ensures every ritual flows with grace, precision, and emotional authenticity.' },
    ],
  },
];

export default function TeamPage() {
  return (
    <>
      <div className="page-hero">
        <p className="text-xs tracking-[0.35em] uppercase mb-3" style={{ color: 'var(--gold)' }}>The People Behind the Magic</p>
        <h1>Our Team</h1>
        <div className="section-divider mt-4 mb-4" />
        <p>200+ passionate professionals dedicated to making your wedding extraordinary</p>
      </div>

      {departments.map((dept, idx) => (
        <section key={dept.name} className="py-16 px-4"
          style={{ background: idx % 2 === 0 ? 'var(--cream)' : 'var(--ivory)' }}>
          <div className="max-w-6xl mx-auto">
            <p className="text-xs tracking-[0.3em] uppercase mb-2 text-center" style={{ color: 'var(--gold)' }}>
              {dept.name}
            </p>
            <h2 className="section-title mb-2">{dept.name}</h2>
            <div className="section-divider mb-4" />
            <p className="section-subtitle">{dept.desc}</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {dept.members.map((m) => (
                <div key={m.name} className="bg-white p-7 card-hover" style={{ borderTop: '3px solid var(--gold)' }}>
                  <div className="w-16 h-16 rounded-full mb-4 flex items-center justify-center text-white text-xl font-bold"
                    style={{ background: 'linear-gradient(135deg, var(--gold-dark), var(--gold))' }}>
                    {m.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="font-semibold text-base mb-1" style={{ fontFamily: 'Georgia, serif', color: 'var(--charcoal)' }}>{m.name}</div>
                  <div className="text-xs tracking-widest uppercase mb-3" style={{ color: 'var(--gold)' }}>{m.role}</div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{m.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 px-4 text-center" style={{ background: 'var(--charcoal)' }}>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', color: 'var(--gold-light)' }}>
          Join the Bajranng Family
        </h2>
        <p className="mb-6" style={{ color: 'rgba(255,255,255,0.65)' }}>
          We are always looking for passionate, talented individuals to join our growing team.
        </p>
        <Link href="/contact" className="btn-primary">Contact Us</Link>
      </section>
    </>
  );
}
