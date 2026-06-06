import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const slides = [
  {
    headline: 'Where Vision\nMeets Land',
    sub: 'Redefining luxury living in the Sultanate of Oman',
    location: 'Muscat · Oman',
    bg: 'linear-gradient(115deg, #fbf7ef 0%, #efe1c8 38%, #1a3358 38%, #0a1628 100%)',
    accent: 'Residential Excellence',
  },
  {
    headline: 'Built for\nGenerations',
    sub: 'Premium communities crafted with sustainability at their core',
    location: 'Al Seeb · Muscat',
    bg: 'linear-gradient(115deg, #f5ead8 0%, #eef3f8 40%, #0f2040 40%, #1e3f6e 100%)',
    accent: 'Mixed-Use Developments',
  },
  {
    headline: 'Designed\nto Endure',
    sub: 'Architectural innovation meets the Omani landscape',
    location: 'Muscat · Oman',
    bg: 'linear-gradient(115deg, #fbf7ef 0%, #e2c89a 34%, #0d1e36 34%, #162d4f 100%)',
    accent: 'Luxury Villas & Compounds',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    setLoaded(true);
    intervalRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % slides.length);
    }, 6000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const slide = slides[current];

  return (
    <section id="hero" style={{
      position: 'relative',
      minHeight: '86vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: slide.bg,
      transition: 'background 1s ease',
    }}>
      {/* Geometric Pattern Overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          repeating-linear-gradient(
            45deg,
            transparent,
            transparent 60px,
            rgba(201,169,110,0.08) 60px,
            rgba(201,169,110,0.08) 61px
          ),
          repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 60px,
            rgba(255,255,255,0.08) 60px,
            rgba(255,255,255,0.08) 61px
          )
        `,
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(90deg, rgba(251,247,239,0.96) 0%, rgba(251,247,239,0.82) 34%, rgba(5,13,26,0.38) 58%, rgba(5,13,26,0.7) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Large decorative circle */}
      <div style={{
        position: 'absolute',
        right: '-10%', top: '50%',
        transform: 'translateY(-50%)',
        width: '700px', height: '700px',
        borderRadius: '50%',
        border: '1px solid rgba(201,169,110,0.08)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        right: '-5%', top: '50%',
        transform: 'translateY(-50%)',
        width: '550px', height: '550px',
        borderRadius: '50%',
        border: '1px solid rgba(201,169,110,0.12)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        right: '0%', top: '50%',
        transform: 'translateY(-50%)',
        width: '380px', height: '380px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(30,63,110,0.4) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Vertical text right */}
      <div style={{
        position: 'absolute',
        right: '48px', top: '50%',
        transform: 'translateY(-50%) rotate(90deg)',
        transformOrigin: 'center center',
        fontFamily: 'var(--font-body)',
        fontSize: '10px',
        letterSpacing: '0.35em',
        color: 'var(--gold-light)',
        textTransform: 'uppercase',
        opacity: loaded ? 1 : 0,
        transition: 'opacity 1s ease 1.5s',
        whiteSpace: 'nowrap',
      }}>
        {slide.location}
      </div>

      {/* Slide indicator */}
      <div style={{
        position: 'absolute',
        bottom: '80px', right: '48px',
        display: 'flex', flexDirection: 'column', gap: '8px',
        alignItems: 'flex-end',
      }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: i === current ? '32px' : '16px',
              height: '2px',
              background: i === current ? 'var(--gold)' : 'var(--white-40)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '86px' }}>
        <div style={{ maxWidth: '760px' }}>
          {/* Accent tag */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '32px',
            opacity: loaded ? 1 : 0,
            animation: loaded ? 'fadeUp 0.8s var(--ease-out) 0.2s both' : 'none',
          }}>
            <div style={{ width: '32px', height: '1px', background: 'var(--gold)' }} />
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: '11px',
              letterSpacing: '0.3em',
              color: 'var(--navy-accent)',
              textTransform: 'uppercase',
              fontWeight: 500,
            }}>{slide.accent}</span>
          </div>

          {/* Main headline */}
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(64px, 9vw, 120px)',
            fontWeight: 300,
            lineHeight: 1.0,
            color: 'var(--navy-deepest)',
            letterSpacing: '0',
            marginBottom: '32px',
            whiteSpace: 'pre-line',
            opacity: loaded ? 1 : 0,
            animation: loaded ? 'fadeUp 1s var(--ease-out) 0.4s both' : 'none',
          }}>
            {slide.headline}
          </h1>

          {/* Gold divider */}
          <div style={{
            width: '60px', height: '2px',
            background: 'linear-gradient(90deg, var(--gold), var(--navy-accent), transparent)',
            marginBottom: '24px',
            opacity: loaded ? 1 : 0,
            animation: loaded ? 'fadeUp 0.8s var(--ease-out) 0.6s both' : 'none',
          }} />

          {/* Subtitle */}
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(14px, 1.5vw, 17px)',
            fontWeight: 300,
            lineHeight: 1.8,
            color: 'var(--ink-soft)',
            maxWidth: '480px',
            marginBottom: '56px',
            letterSpacing: '0.02em',
            opacity: loaded ? 1 : 0,
            animation: loaded ? 'fadeUp 0.8s var(--ease-out) 0.7s both' : 'none',
          }}>
            {slide.sub}
          </p>

          {/* CTAs */}
          <div style={{
            display: 'flex', gap: '20px', flexWrap: 'wrap',
            opacity: loaded ? 1 : 0,
            animation: loaded ? 'fadeUp 0.8s var(--ease-out) 0.9s both' : 'none',
          }}>
            <a href="#projects" style={{
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--white)',
              background: 'var(--navy-deepest)',
              padding: '16px 40px',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'all 0.3s var(--ease-out)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--gold-light)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(201,169,110,0.35)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'var(--gold)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              Explore Projects
            </a>
            <a href="#about" style={{
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--navy-deepest)',
              padding: '16px 40px',
              textDecoration: 'none',
              display: 'inline-block',
              border: '1px solid rgba(5,13,26,0.28)',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--gold)';
              e.currentTarget.style.color = 'var(--gold)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--white-40)';
              e.currentTarget.style.color = 'var(--white)';
            }}>
              Our Story
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div style={{
          position: 'absolute',
          bottom: '-120px',
          left: '48px',
          right: '48px',
          display: 'flex',
          background: 'rgba(255,255,255,0.78)',
          backdropFilter: 'blur(24px)',
          border: '1px solid rgba(201,169,110,0.24)',
          boxShadow: '0 24px 70px rgba(5,13,26,0.18)',
          opacity: loaded ? 1 : 0,
          animation: loaded ? 'fadeUp 0.8s var(--ease-out) 1.2s both' : 'none',
        }}>
          {[
            { value: 'OMR 40M+', label: 'Investment Portfolio' },
            { value: '2019', label: 'Established' },
            { value: '30+', label: 'Luxury Villas' },
            { value: '100%', label: 'Phase I Sold Out' },
          ].map((stat, i) => (
            <div key={i} style={{
              flex: 1,
              padding: '32px 28px',
              borderRight: i < 3 ? '1px solid rgba(201,169,110,0.15)' : 'none',
              textAlign: 'center',
            }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '36px',
                fontWeight: 500,
                color: 'var(--navy-deep)',
                lineHeight: 1,
                marginBottom: '6px',
              }}>{stat.value}</div>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '10px',
                letterSpacing: '0.25em',
                color: 'rgba(5,13,26,0.58)',
                textTransform: 'uppercase',
                fontWeight: 400,
              }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll down */}
      <div style={{
        position: 'absolute', bottom: '32px', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        gap: '8px', cursor: 'pointer',
        opacity: loaded ? 1 : 0,
        animation: loaded ? 'fadeIn 1s ease 2s both' : 'none',
      }} onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: '9px',
          letterSpacing: '0.3em',
          color: 'rgba(5,13,26,0.42)',
          textTransform: 'uppercase',
        }}>Scroll</span>
        <ChevronDown size={16} color="rgba(5,13,26,0.42)" style={{ animation: 'float 2s ease infinite' }} />
      </div>
      <style>{`
        @media (max-width: 760px) {
          #hero {
            min-height: auto !important;
            padding: 82px 0 48px !important;
            background: linear-gradient(180deg, var(--ivory) 0%, var(--gold-pale) 56%, var(--navy-deep) 100%) !important;
          }

          #hero > div:nth-child(2) {
            background: linear-gradient(180deg, rgba(251,247,239,0.96), rgba(251,247,239,0.84) 60%, rgba(5,13,26,0.2)) !important;
          }

          #hero .container {
            padding-top: 0 !important;
          }

          #hero h1 {
            font-size: clamp(52px, 17vw, 72px) !important;
            line-height: 0.98 !important;
            margin-bottom: 24px !important;
          }

          #hero p {
            margin-bottom: 28px !important;
          }

          #hero .container > div:last-child {
            position: static !important;
            margin-top: 32px !important;
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            left: auto !important;
            right: auto !important;
          }

          #hero .container > div:last-child > div {
            padding: 18px 14px !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(201,169,110,0.18) !important;
          }

          #hero .container > div:last-child > div div:first-child {
            font-size: 28px !important;
          }

          #hero > div[style*="rotate(90deg)"],
          #hero > div[style*="bottom: 80px"] {
            display: none !important;
          }

          #hero a {
            width: 100% !important;
            text-align: center !important;
            padding: 15px 20px !important;
          }
        }

        @media (max-width: 420px) {
          #hero .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
