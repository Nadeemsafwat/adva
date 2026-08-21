import React, { useEffect, useRef, useState } from 'react';
import { Shield, Leaf, Gem, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const pillarIcons = [Gem, Leaf, Shield, Users];

export default function Vision() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const ref = useRef();
  const pillars = t('vision.pillars');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="vision" ref={ref} style={{
      padding: '140px 0',
      background: 'linear-gradient(135deg, var(--navy-deepest) 0%, var(--navy-mid) 58%, var(--gold-pale) 58%, var(--ivory) 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Diagonal band */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 54%, rgba(201,169,110,0.16) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Grid lines */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        pointerEvents: 'none',
      }} />

      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '100px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '12px',
            marginBottom: '24px',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.8s ease',
          }}>
            <div style={{ width: '32px', height: '1px', background: 'var(--gold)' }} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 500 }}>{t('vision.kicker')}</span>
            <div style={{ width: '32px', height: '1px', background: 'var(--gold)' }} />
          </div>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(44px, 5vw, 72px)',
            fontWeight: 300,
            lineHeight: 1.05,
            color: 'var(--white)',
            letterSpacing: '-0.02em',
            marginBottom: '24px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s var(--ease-out) 0.2s',
          }}>
            {t('vision.headingPlain')}<br />
            <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>{t('vision.headingEm')}</em>
          </h2>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '16px',
            fontWeight: 300,
            lineHeight: 1.8,
            color: 'var(--white-70)',
            maxWidth: '560px',
            margin: '0 auto',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.8s ease 0.4s',
          }}>
            {t('vision.intro')}
          </p>
        </div>

        {/* Pillars grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '14px',
        }}>
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.title} pillar={pillar} Icon={pillarIcons[i]} index={i} visible={visible} />
          ))}
        </div>

        {/* Bottom feature strip */}
        <div style={{
          marginTop: '80px',
          padding: '60px',
          background: 'rgba(255,255,255,0.92)',
          border: '1px solid rgba(201,169,110,0.22)',
          boxShadow: '0 26px 80px rgba(5,13,26,0.22)',
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          gap: '60px',
          alignItems: 'center',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.9s var(--ease-out) 0.8s',
        }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '48px', fontWeight: 500, color: 'var(--gold)', lineHeight: 1, marginBottom: '8px' }}>{t('vision.stripValue')}</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.2em', color: 'rgba(5,13,26,0.58)', textTransform: 'uppercase' }}>{t('vision.stripLabel')}</div>
          </div>

          <div style={{ width: '1px', height: '80px', background: 'rgba(201,169,110,0.35)' }} />

          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 300, fontStyle: 'italic', color: 'var(--navy-deepest)', lineHeight: 1.5, marginBottom: '16px' }}>
              {t('vision.stripQuote')}
            </p>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase' }}>
              {t('vision.stripName')}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          #vision .container > div:nth-child(2) { grid-template-columns: repeat(2,1fr) !important; }
          #vision .container > div:last-child { grid-template-columns: 1fr !important; }
          #vision .container > div:last-child > div:nth-child(2) { display: none; }
        }
        @media (max-width: 600px) {
          #vision {
            padding: 72px 0 !important;
            background: linear-gradient(180deg, var(--navy-deepest) 0%, var(--navy-mid) 54%, var(--gold-pale) 54%, var(--ivory) 100%) !important;
          }

          #vision .container > div:first-child {
            margin-bottom: 36px !important;
            text-align: left !important;
          }

          #vision .container > div:first-child > div:first-child {
            justify-content: flex-start !important;
          }

          #vision h2 {
            font-size: clamp(42px, 14vw, 58px) !important;
          }

          #vision .container > div:first-child p {
            margin: 0 !important;
            font-size: 14px !important;
            line-height: 1.75 !important;
          }

          #vision .container > div:nth-child(2) { grid-template-columns: 1fr !important; }
          #vision .container > div:nth-child(2) > div {
            padding: 30px 22px !important;
          }

          #vision .container > div:last-child {
            margin-top: 34px !important;
            padding: 30px 22px !important;
          }

          #vision .container > div:last-child p {
            font-size: 20px !important;
          }
        }

        html[dir="rtl"] #vision .container > div:first-child {
          text-align: center !important;
        }

        @media (max-width: 600px) {
          html[dir="rtl"] #vision .container > div:first-child {
            text-align: right !important;
          }
        }
      `}</style>
    </section>
  );
}

function PillarCard({ pillar, Icon, index, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '56px 40px',
        background: hovered ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.94)',
        border: `1px solid ${hovered ? 'rgba(201,169,110,0.42)' : 'rgba(255,255,255,0.52)'}`,
        boxShadow: hovered ? '0 22px 50px rgba(5,13,26,0.18)' : '0 14px 35px rgba(5,13,26,0.08)',
        transition: 'all 0.4s ease',
        cursor: 'default',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${0.2 + index * 0.15}s`,
      }}>
      <div style={{
        width: '56px', height: '56px',
        border: `1px solid ${hovered ? 'var(--gold)' : 'rgba(201,169,110,0.3)'}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '32px',
        transition: 'all 0.3s ease',
        background: hovered ? 'rgba(201,169,110,0.12)' : 'rgba(5,13,26,0.04)',
      }}>
        <Icon size={22} color={hovered ? 'var(--gold)' : 'rgba(201,169,110,0.6)'} />
      </div>

      <h3 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: '20px',
        fontWeight: 500,
        color: 'var(--navy-deepest)',
        marginBottom: '16px',
        transition: 'color 0.3s',
        letterSpacing: '0.01em',
      }}>{pillar.title}</h3>

      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '14px',
        fontWeight: 300,
        lineHeight: 1.8,
        color: 'var(--ink-soft)',
      }}>{pillar.desc}</p>
    </div>
  );
}