import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Aboutt', href: '#about' },
  { label: 'Story', href: '#story' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Projects', href: '#projects' },
  { label: 'Vision', href: '#vision' },
  { label: 'Sustainability', href: '#sustainability' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        padding: scrolled ? '16px 0' : '28px 0',
        background: scrolled
          ? 'rgba(5, 13, 26, 0.96)'
          : 'linear-gradient(to bottom, rgba(5,13,26,0.85) 0%, transparent 100%)',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,169,110,0.15)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a href="#contact" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '28px',
              fontWeight: 500,
              letterSpacing: '0.18em',
              color: 'var(--white)',
              lineHeight: 1,
            }}>ADVA</span>
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: '9px',
              fontWeight: 400,
              letterSpacing: '0.35em',
              color: 'var(--gold)',
              textTransform: 'uppercase',
            }}>DEVELOPMENTS · OMAN</span>
          </a>

          {/* Desktop Nav */}
          <ul style={{
            display: 'flex', gap: '40px', listStyle: 'none',
            alignItems: 'center',
          }} className="desktop-nav">
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href} style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--white-70)',
                  textDecoration: 'none',
                  transition: 'color 0.3s',
                  position: 'relative',
                }}
                onMouseEnter={e => {
                  e.target.style.color = 'var(--gold)';
                }}
                onMouseLeave={e => {
                  e.target.style.color = 'var(--white-70)';
                }}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" style={{
                fontFamily: 'var(--font-body)',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--navy-deep)',
                background: 'var(--gold)',
                padding: '10px 24px',
                textDecoration: 'none',
                transition: 'all 0.3s',
                display: 'inline-block',
              }}
              onMouseEnter={e => {
                e.target.style.background = 'var(--gold-light)';
                e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={e => {
                e.target.style.background = 'var(--gold)';
                e.target.style.transform = 'translateY(0)';
              }}>
                Enquire
              </a>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none', border: 'none', color: 'var(--white)',
              cursor: 'pointer', display: 'none', padding: '4px',
            }}
            className="hamburger">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'var(--navy-deepest)',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '40px',
          animation: 'fadeIn 0.3s ease',
        }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '32px',
                fontWeight: 400,
                color: 'var(--white)',
                textDecoration: 'none',
                letterSpacing: '0.1em',
              }}>
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} style={{
            marginTop: '16px',
            fontFamily: 'var(--font-body)',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--navy-deep)',
            background: 'var(--gold)',
            padding: '14px 40px',
            textDecoration: 'none',
          }}>
            Enquire Now
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }

        @media (max-width: 520px) {
          nav {
            padding: 18px 0 !important;
            background: rgba(5, 13, 26, 0.96) !important;
            backdrop-filter: blur(18px) !important;
            border-bottom: 1px solid rgba(201,169,110,0.14) !important;
          }

          nav a span:first-child {
            font-size: 24px !important;
            letter-spacing: 0.14em !important;
          }

          nav a span:last-child {
            font-size: 8px !important;
            letter-spacing: 0.24em !important;
          }
        }
      `}</style>
    </>
  );
}
