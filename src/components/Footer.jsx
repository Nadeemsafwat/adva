import React from 'react';
import { Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, var(--navy-deepest) 0%, var(--navy-deep) 62%, #10264a 100%)',
      borderTop: '1px solid rgba(201,169,110,0.28)',
      padding: '80px 0 40px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
        backgroundSize: '72px 72px',
        pointerEvents: 'none',
      }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '60px',
          marginBottom: '64px',
        }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: '24px' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: 500, color: 'var(--white)', letterSpacing: '0.15em', display: 'block', lineHeight: 1 }}>ADVA</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '9px', fontWeight: 400, letterSpacing: '0.35em', color: 'var(--gold)', textTransform: 'uppercase' }}>DEVELOPMENTS · OMAN</span>
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 300, lineHeight: 1.8, color: 'var(--white-70)', maxWidth: '280px', marginBottom: '32px' }}>
              Premium real estate development redefining luxury living in the Sultanate of Oman. Built on five years of excellence in Egypt.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {[Instagram, Linkedin, Facebook, Twitter].map((Icon, i) => (
                <button key={i} style={{
                  width: '36px', height: '36px',
                  border: '1px solid rgba(201,169,110,0.2)',
                  background: 'transparent',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', transition: 'all 0.3s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.background = 'rgba(201,169,110,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(201,169,110,0.2)'; e.currentTarget.style.background = 'transparent'; }}>
                  <Icon size={14} color="rgba(201,169,110,0.7)" />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            {
              title: 'Company', links: ['About ADVA', 'Our Vision', 'Leadership', 'Partnerships', 'Careers']
            },
            {
              title: 'Projects', links: ['ADVIDA (Egypt)', 'ADVA Prime (Oman)', 'ADVA Gardens', 'Commercial', 'Upcoming']
            },
            {
              title: 'Contact', links: ['Muscat Office', 'Cairo HQ', 'Media Enquiries', 'Investor Relations', 'Privacy Policy']
            },
          ].map(col => (
            <div key={col.title}>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '24px' }}>
                {col.title}
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {col.links.map(link => (
                  <li key={link}>
                    <a href="#" style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '13px',
                      fontWeight: 300,
                      color: 'var(--white-70)',
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                      letterSpacing: '0.02em',
                    }}
                    onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                    onMouseLeave={e => e.target.style.color = 'var(--white-70)'}
                    >{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: '32px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 300, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.05em' }}>
            © 2025 ADVA Developments Oman. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)', animation: 'pulse-ring 2s infinite' }} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 300, color: 'var(--gold)', letterSpacing: '0.2em' }}>
              OMAN - EGYPT - MENA REGION
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer .container > div:first-child { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          footer .container > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
