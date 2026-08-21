import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2, Compass, DraftingCompass, Gem, Handshake, Leaf, Sparkles, TimerReset } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const reasonIcons = [TimerReset, DraftingCompass, Gem, Leaf, Sparkles, Handshake];

export default function CompanyStory() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  const timeline = t('story.timeline');
  const reasons = t('story.reasons');
  const values = t('story.values');
  const visionMission = t('story.visionMission');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.12 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="story"
      ref={ref}
      style={{
        padding: '130px 0',
        background: 'linear-gradient(180deg, var(--mist) 0%, var(--ivory) 46%, var(--gold-pale) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          right: '-8%',
          top: '8%',
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(160px, 28vw, 420px)',
          color: 'rgba(5,13,26,0.035)',
          lineHeight: 0.8,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        2006
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.85fr 1.15fr',
            gap: 'clamp(44px, 7vw, 110px)',
            alignItems: 'start',
            marginBottom: '88px',
          }}
          className="story-intro-grid"
        >
          <div
            style={{
              position: 'sticky',
              top: '120px',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.85s var(--ease-out)',
            }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <span style={{ width: '34px', height: '1px', background: 'var(--gold)' }} />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.28em', color: 'var(--navy-accent)', textTransform: 'uppercase', fontWeight: 700 }}>
                {t('story.kicker')}
              </span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(48px, 6vw, 86px)',
                fontWeight: 300,
                lineHeight: 1,
                color: 'var(--navy-deepest)',
                letterSpacing: '0',
                marginBottom: '28px',
              }}
            >
              {t('story.heading')}
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                lineHeight: 1.85,
                color: 'var(--ink-soft)',
                maxWidth: '520px',
              }}
            >
              {t('story.intro')}
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gap: '16px',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.85s var(--ease-out) 0.12s',
            }}
          >
            <div
              style={{
                background: 'var(--white)',
                border: '1px solid rgba(201,169,110,0.24)',
                boxShadow: '0 22px 60px rgba(5,13,26,0.08)',
                padding: 'clamp(28px, 4vw, 52px)',
              }}
            >
              <Compass size={24} color="var(--gold)" style={{ marginBottom: '18px' }} />
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '38px', fontWeight: 300, color: 'var(--navy-deepest)', lineHeight: 1.05, marginBottom: '18px' }}>
                {t('story.ecosystemTitle')}
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: 1.85, color: 'var(--ink-soft)' }}>
                {t('story.ecosystemText')}
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="story-vision-grid">
              {visionMission.map((item) => (
                <div
                  key={item.label}
                  style={{
                    padding: '30px',
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.88), rgba(245,234,216,0.72))',
                    border: '1px solid rgba(201,169,110,0.22)',
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.24em', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '12px' }}>
                    {item.label}
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', color: 'var(--navy-deepest)', marginBottom: '12px', fontWeight: 500 }}>
                    {item.title}
                  </h4>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', lineHeight: 1.75, color: 'var(--ink-soft)' }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px',
            marginBottom: '88px',
            background: 'rgba(201,169,110,0.24)',
            border: '1px solid rgba(201,169,110,0.24)',
          }}
          className="story-timeline"
        >
          {timeline.map((item, index) => (
            <div
              key={item.year}
              style={{
                padding: '34px 28px',
                background: index === 2 ? 'var(--navy-deepest)' : 'rgba(255,255,255,0.92)',
                color: index === 2 ? 'var(--white)' : 'var(--navy-deepest)',
              }}
            >
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '46px', color: index === 2 ? 'var(--gold-light)' : 'var(--gold)', lineHeight: 1, marginBottom: '18px' }}>
                {item.year}
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '19px', marginBottom: '12px', fontWeight: 500 }}>
                {item.title}
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', lineHeight: 1.7, color: index === 2 ? 'rgba(255,255,255,0.72)' : 'var(--ink-soft)' }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '24px',
            alignItems: 'stretch',
          }}
          className="story-bottom-grid"
        >
          <div
            style={{
              background: 'var(--navy-deepest)',
              padding: 'clamp(30px, 4vw, 54px)',
              border: '1px solid rgba(201,169,110,0.28)',
              boxShadow: '0 28px 80px rgba(5,13,26,0.18)',
            }}
          >
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.24em', color: 'var(--gold-light)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '24px' }}>
              {t('story.whyChoose')}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }} className="story-reasons-grid">
              {reasons.map((item, i) => {
                const Icon = reasonIcons[i];
                return (
                  <div key={item.title} style={{ display: 'grid', gridTemplateColumns: '42px 1fr', gap: '14px' }}>
                    <div style={{ width: '42px', height: '42px', border: '1px solid rgba(201,169,110,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={18} color="var(--gold-light)" />
                    </div>
                    <div>
                      <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--white)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>
                        {item.title}
                      </h4>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', lineHeight: 1.65, color: 'rgba(255,255,255,0.68)' }}>
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            style={{
              background: 'rgba(255,255,255,0.92)',
              border: '1px solid rgba(201,169,110,0.24)',
              padding: 'clamp(30px, 4vw, 48px)',
            }}
          >
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.24em', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '22px' }}>
              {t('story.coreValues')}
            </div>
            <div style={{ display: 'grid', gap: '12px' }}>
              {values.map((value) => (
                <div key={value} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <CheckCircle2 size={16} color="var(--gold)" />
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--navy-deepest)', fontWeight: 500 }}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1040px) {
          #story .story-intro-grid,
          #story .story-bottom-grid {
            grid-template-columns: 1fr !important;
          }

          #story .story-intro-grid > div:first-child {
            position: static !important;
          }

          #story .story-timeline {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 720px) {
          #story {
            padding: 76px 0 !important;
          }

          #story .story-intro-grid {
            margin-bottom: 46px !important;
          }

          #story h2 {
            font-size: clamp(42px, 14vw, 60px) !important;
          }

          #story .story-vision-grid,
          #story .story-timeline,
          #story .story-reasons-grid {
            grid-template-columns: 1fr !important;
          }

          #story .story-timeline {
            margin-bottom: 46px !important;
          }

          #story .story-timeline > div,
          #story .story-reasons-grid > div {
            padding: 26px 22px !important;
          }

          #story p {
            font-size: 14px !important;
            line-height: 1.72 !important;
          }
        }
      `}</style>
    </section>
  );
}
