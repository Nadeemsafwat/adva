import React, { useEffect, useRef, useState } from 'react';
import { Droplets, TreePine, Wind, Zap } from 'lucide-react';

const features = [
  {
    icon: Zap,
    label: 'Smart Energy Systems',
    color: '#d69a22',
    bg: 'rgba(214,154,34,0.12)',
    border: 'rgba(214,154,34,0.32)',
    desc: 'Solar integration and intelligent energy management to minimize consumption across all developments.',
  },
  {
    icon: Droplets,
    label: 'Water Conservation',
    color: '#1f8fd5',
    bg: 'rgba(31,143,213,0.12)',
    border: 'rgba(31,143,213,0.32)',
    desc: "Advanced irrigation and recycling systems that preserve Oman's precious water resources.",
  },
  {
    icon: Wind,
    label: 'Climate-Responsive Design',
    color: '#20a6a0',
    bg: 'rgba(32,166,160,0.12)',
    border: 'rgba(32,166,160,0.32)',
    desc: 'Architecture that works with the natural environment - passive cooling, natural light, cross ventilation.',
  },
  {
    icon: TreePine,
    label: 'Green Corridors',
    color: '#2f9b5f',
    bg: 'rgba(47,155,95,0.12)',
    border: 'rgba(47,155,95,0.32)',
    desc: 'Extensive landscaping with native flora creating biodiversity and natural cooling across all communities.',
  },
];

export default function Sustainability() {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sustainability" ref={ref} style={{
      padding: '140px 0',
      background: 'linear-gradient(180deg, var(--ivory) 0%, var(--gold-pale) 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        left: '-200px', top: '50%',
        transform: 'translateY(-50%)',
        width: '600px', height: '600px',
        borderRadius: '50%',
        border: '1px solid rgba(201,169,110,0.2)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        left: '-100px', top: '50%',
        transform: 'translateY(-50%)',
        width: '400px', height: '400px',
        borderRadius: '50%',
        border: '1px solid rgba(201,169,110,0.24)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '100px',
          alignItems: 'center',
        }}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '12px',
              marginBottom: '24px',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.7s ease',
            }}>
              <div style={{ width: '32px', height: '1px', background: 'var(--gold)' }} />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 500 }}>Sustainability</span>
            </div>

            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(44px, 5vw, 72px)',
              fontWeight: 300,
              lineHeight: 1.05,
              color: 'var(--navy-deepest)',
              letterSpacing: '0',
              marginBottom: '32px',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s var(--ease-out) 0.2s',
            }}>
              Building for<br />
              <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Tomorrow</em>
            </h2>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              fontWeight: 300,
              lineHeight: 1.9,
              color: 'var(--ink-soft)',
              marginBottom: '48px',
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.8s ease 0.4s',
            }}>
              Sustainability is not a checkbox at ADVA - it is the foundation of every decision we make. From land selection to material sourcing to smart infrastructure, we design with the future in mind.
            </p>

            {[
              { label: 'Green Space Allocation', pct: 68 },
              { label: 'Energy Efficiency Rating', pct: 85 },
              { label: 'Sustainable Materials', pct: 72 },
            ].map((item, i) => (
              <div key={item.label} style={{
                marginBottom: '24px',
                opacity: visible ? 1 : 0,
                transition: `opacity 0.8s ease ${0.5 + i * 0.15}s`,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', letterSpacing: '0.1em', color: 'rgba(5,13,26,0.66)' }}>{item.label}</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--gold)', fontWeight: 500 }}>{item.pct}%</span>
                </div>
                <div style={{ height: '3px', background: 'rgba(5,13,26,0.1)' }}>
                  <div style={{
                    height: '100%',
                    width: visible ? `${item.pct}%` : '0%',
                    background: 'linear-gradient(90deg, var(--gold), var(--gold-light))',
                    transition: `width 1.2s var(--ease-out) ${0.7 + i * 0.15}s`,
                  }} />
                </div>
              </div>
            ))}
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2px',
          }}>
            {features.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div key={feat.label} style={{
                  padding: '40px 32px',
                  background: 'rgba(255,255,255,0.9)',
                  border: '1px solid rgba(201,169,110,0.2)',
                  boxShadow: '0 18px 42px rgba(5,13,26,0.07)',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.8s var(--ease-out) ${0.3 + i * 0.1}s`,
                }}>
                  <div style={{
                    width: '46px', height: '46px',
                    border: `1px solid ${feat.border}`,
                    background: feat.bg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '24px',
                    boxShadow: `0 12px 28px ${feat.bg}`,
                  }}>
                    <Icon size={20} color={feat.color} strokeWidth={2.2} />
                  </div>
                  <h4 style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--navy-deepest)',
                    letterSpacing: '0.05em',
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                  }}>{feat.label}</h4>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    fontWeight: 300,
                    lineHeight: 1.7,
                    color: 'var(--ink-soft)',
                  }}>{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #sustainability .container > div { grid-template-columns: 1fr !important; gap: 60px !important; }
        }

        @media (max-width: 720px) {
          #sustainability {
            padding: 72px 0 !important;
          }

          #sustainability h2 {
            font-size: clamp(42px, 14vw, 58px) !important;
          }

          #sustainability p {
            font-size: 14px !important;
            line-height: 1.75 !important;
          }

          #sustainability .container > div {
            gap: 34px !important;
          }

          #sustainability .container > div > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }

          #sustainability .container > div > div:last-child > div {
            padding: 28px 22px !important;
          }
        }
      `}</style>
    </section>
  );
}
