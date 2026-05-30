import React, { useEffect, useRef, useState } from 'react';

export default function About() {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} style={{
      padding: '150px 0 120px',
      background: 'linear-gradient(180deg, var(--ivory) 0%, var(--mist) 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background word */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: 'var(--font-display)',
        fontSize: '380px',
        fontWeight: 700,
        color: 'rgba(5,13,26,0.025)',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        letterSpacing: '-0.04em',
        userSelect: 'none',
      }}>ADVA</div>

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '100px',
          alignItems: 'center',
        }}>
          {/* Left */}
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '12px',
              marginBottom: '24px',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s var(--ease-out) 0.1s',
            }}>
              <div style={{ width: '32px', height: '1px', background: 'var(--gold)' }} />
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '11px',
                letterSpacing: '0.3em',
              color: 'var(--navy-accent)',
                textTransform: 'uppercase',
                fontWeight: 500,
              }}>Who We Are</span>
            </div>

            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(44px, 5vw, 72px)',
              fontWeight: 300,
              lineHeight: 1.05,
              color: 'var(--navy-deepest)',
              marginBottom: '40px',
              letterSpacing: '-0.02em',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 0.9s var(--ease-out) 0.2s',
            }}>
              A Legacy of<br />
              <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Distinction</em>
            </h2>

            <div style={{ height: '1px', background: 'linear-gradient(90deg, var(--gold), transparent)', marginBottom: '40px', maxWidth: '80px',
              opacity: visible ? 1 : 0, transition: 'opacity 0.8s ease 0.4s',
            }} />

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              fontWeight: 300,
              lineHeight: 1.9,
              color: 'var(--ink-soft)',
              marginBottom: '24px',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s var(--ease-out) 0.4s',
            }}>
              ADVA Developments is a premium real estate developer established in 2019, with a capital of EGP 500 million and an ambitious five-year investment plan exceeding EGP 2 billion. Now bringing that same commitment to excellence to the Sultanate of Oman.
            </p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              fontWeight: 300,
              lineHeight: 1.9,
              color: 'var(--ink-soft)',
              marginBottom: '48px',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s var(--ease-out) 0.5s',
            }}>
              We integrate design, construction, and interior expertise under one roof — delivering communities that combine luxury, sustainability, and thoughtful modern architecture.
            </p>

            <div style={{
              display: 'flex', gap: '16px', flexWrap: 'wrap',
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.8s ease 0.7s',
            }}>
              {['Luxury Design', 'Sustainability', 'Innovation', 'Community'].map(tag => (
                <span key={tag} style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '10px',
                  fontWeight: 500,
                  letterSpacing: '0.2em',
                  color: 'var(--navy-deep)',
                  background: 'rgba(255,255,255,0.72)',
                  border: '1px solid rgba(201,169,110,0.34)',
                  padding: '10px 16px',
                  textTransform: 'uppercase',
                }}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Right — Visual */}
          <div style={{ position: 'relative' }}>
            {/* Main card */}
            <div style={{
              background: 'linear-gradient(135deg, var(--navy-deepest) 0%, var(--navy-light) 100%)',
              padding: '64px 48px',
              border: '1px solid rgba(201,169,110,0.28)',
              boxShadow: '0 30px 80px rgba(5,13,26,0.2)',
              position: 'relative',
              overflow: 'hidden',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(60px)',
              transition: 'all 1s var(--ease-out) 0.3s',
            }}>
              {/* Corner accent */}
              <div style={{
                position: 'absolute', top: 0, right: 0,
                width: '80px', height: '80px',
                borderLeft: '1px solid rgba(201,169,110,0.3)',
                borderBottom: '1px solid rgba(201,169,110,0.3)',
              }} />
              <div style={{
                position: 'absolute', bottom: 0, left: 0,
                width: '80px', height: '80px',
                borderRight: '1px solid rgba(201,169,110,0.3)',
                borderTop: '1px solid rgba(201,169,110,0.3)',
              }} />

              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '14px',
                fontWeight: 400,
                letterSpacing: '0.2em',
                color: 'var(--gold)',
                textTransform: 'uppercase',
                marginBottom: '24px',
              }}>Our Mission</div>

              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '28px',
                fontWeight: 300,
                lineHeight: 1.5,
                color: 'var(--white)',
                fontStyle: 'italic',
                marginBottom: '40px',
              }}>
                "To bring about positive change in the real estate sector by offering distinctive projects that combine high quality, innovative design, and environmental sustainability."
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'var(--white)',
                  letterSpacing: '0.1em',
                }}>Ahmed El-Shennawy</div>
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '11px',
                  color: 'var(--gold)',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                }}>Chairman & CEO</div>
              </div>
            </div>

            {/* Floating stat card */}
            <div style={{
              position: 'absolute',
              bottom: '-40px',
              left: '-40px',
              background: 'var(--white)',
              border: '1px solid rgba(201,169,110,0.25)',
              boxShadow: '0 22px 50px rgba(5,13,26,0.12)',
              padding: '28px 32px',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s var(--ease-out) 0.8s',
              backdropFilter: 'blur(20px)',
            }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '52px',
                fontWeight: 500,
                color: 'var(--gold)',
                lineHeight: 1,
              }}>5+</div>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '10px',
                letterSpacing: '0.25em',
                color: 'rgba(5,13,26,0.62)',
                textTransform: 'uppercase',
                marginTop: '4px',
              }}>Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about {
            padding: 72px 0 66px !important;
          }

          #about > div:first-child {
            font-size: 180px !important;
            top: 36% !important;
          }

          #about .container > div { grid-template-columns: 1fr !important; gap: 34px !important; }
          #about .container > div > div:last-child { margin-bottom: 0 !important; }
          #about h2 { font-size: clamp(42px, 13vw, 58px) !important; margin-bottom: 28px !important; }
          #about p { font-size: 14px !important; line-height: 1.7 !important; margin-bottom: 20px !important; }
          #about .container > div > div:last-child > div:first-child {
            padding: 36px 24px !important;
          }

          #about .container > div > div:last-child > div:first-child p {
            font-size: 23px !important;
            line-height: 1.4 !important;
          }

          #about .container > div > div:last-child > div:last-child {
            position: static !important;
            display: inline-block !important;
            margin-top: 14px !important;
            padding: 20px 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
