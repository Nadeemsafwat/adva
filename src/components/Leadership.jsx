import React, { useEffect, useRef, useState } from 'react';
import { Building2, Landmark, MessageSquareText, UsersRound } from 'lucide-react';

const credentials = [
  {
    icon: Landmark,
    label: 'Public Leadership',
    text: 'Member of Parliament in Egypt.',
  },
  {
    icon: Building2,
    label: 'Housing Expertise',
    text: 'Serves on the Housing, Public Utilities, and Reconstruction Committee.',
  },
  {
    icon: UsersRound,
    label: 'Community Focus',
    text: 'Actively engaged with residents, municipalities, and local service priorities.',
  },
];

export default function Leadership() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.14 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="leadership"
      ref={ref}
      style={{
        padding: '130px 0',
        background: 'linear-gradient(135deg, var(--navy-deepest) 0%, var(--navy-mid) 54%, var(--ivory) 54%, var(--gold-pale) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '76px 76px',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.92fr 1.08fr',
            gap: 'clamp(42px, 6vw, 90px)',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(34px)',
              transition: 'all 0.85s var(--ease-out)',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '24px',
                color: 'var(--gold-light)',
              }}
            >
              <span style={{ width: '34px', height: '1px', background: 'currentColor' }} />
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '11px',
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                }}
              >
                Leadership
              </span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(46px, 5.4vw, 78px)',
                fontWeight: 300,
                lineHeight: 1.02,
                color: 'var(--white)',
                letterSpacing: '0',
                marginBottom: '30px',
              }}
            >
              Ahmed El Shenawy
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                fontWeight: 300,
                lineHeight: 1.9,
                color: 'rgba(255,255,255,0.76)',
                maxWidth: '600px',
                marginBottom: '34px',
              }}
            >
              Ahmed El Shenawy brings a civic-minded approach to development. As an Egyptian Member of Parliament affiliated with the Mostaqbal Watan Party, his work connects public policy, housing priorities, and the everyday needs of growing communities.
            </p>

            <div
              style={{
                padding: '28px',
                border: '1px solid rgba(201,169,110,0.28)',
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(18px)',
              }}
            >
              <MessageSquareText size={20} color="var(--gold-light)" style={{ marginBottom: '16px' }} />
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '24px',
                  fontWeight: 300,
                  lineHeight: 1.45,
                  color: 'var(--white)',
                  fontStyle: 'italic',
                }}
              >
                Development is strongest when it listens first: to residents, city authorities, infrastructure needs, and the long-term character of a place.
              </p>
            </div>
          </div>

          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(34px)',
              transition: 'all 0.85s var(--ease-out) 0.14s',
            }}
          >
            <div
              style={{
                background: 'rgba(255,255,255,0.94)',
                border: '1px solid rgba(201,169,110,0.24)',
                boxShadow: '0 28px 80px rgba(5,13,26,0.22)',
                padding: 'clamp(28px, 4vw, 54px)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '24px',
                  alignItems: 'flex-start',
                  paddingBottom: '30px',
                  borderBottom: '1px solid rgba(5,13,26,0.1)',
                  marginBottom: '30px',
                }}
              >
                <div
                  className="ceo-photo-placeholder"
                  style={{
                    width: '168px',
                    aspectRatio: '4 / 5',
                    flex: '0 0 168px',
                    background: 'var(--navy-deepest)',
                    border: '1px solid rgba(201,169,110,0.34)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src="/Images/AS.jpeg"
                    alt="Ahmed El Shenawy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      display: 'block',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, transparent 58%, rgba(5,13,26,0.28))',
                      pointerEvents: 'none',
                    }}
                  />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '10px',
                      letterSpacing: '0.24em',
                      textTransform: 'uppercase',
                      color: 'var(--gold)',
                      fontWeight: 700,
                      marginBottom: '12px',
                    }}
                  >
                    Chairman & CEO
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(36px, 4.4vw, 58px)',
                      fontWeight: 300,
                      lineHeight: 1,
                      color: 'var(--navy-deepest)',
                    }}
                  >
                    Civic leadership with a development lens.
                  </h3>
                </div>
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '15px',
                  lineHeight: 1.85,
                  color: 'var(--ink-soft)',
                  marginBottom: '30px',
                }}
              >
                His public service includes direct engagement with municipal authorities and residents, including forums with the 6 October City Authority addressing sanitation, road development, and public services in the South Neighborhoods.
              </p>

              <div style={{ display: 'grid', gap: '12px' }}>
                {credentials.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '48px 1fr',
                        gap: '16px',
                        alignItems: 'center',
                        padding: '18px',
                        background: 'linear-gradient(90deg, rgba(245,234,216,0.72), rgba(255,255,255,0.7))',
                        border: '1px solid rgba(201,169,110,0.2)',
                      }}
                    >
                      <div
                        style={{
                          width: '48px',
                          height: '48px',
                          border: '1px solid rgba(201,169,110,0.34)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon size={19} color="var(--gold)" />
                      </div>
                      <div>
                        <div
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '10px',
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            color: 'var(--navy-accent)',
                            fontWeight: 700,
                            marginBottom: '5px',
                          }}
                        >
                          {item.label}
                        </div>
                        <p
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '13px',
                            lineHeight: 1.65,
                            color: 'var(--ink-soft)',
                          }}
                        >
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 940px) {
          #leadership {
            padding: 78px 0 !important;
            background: linear-gradient(180deg, var(--navy-deepest) 0%, var(--navy-mid) 46%, var(--gold-pale) 46%, var(--ivory) 100%) !important;
          }

          #leadership .container > div {
            grid-template-columns: 1fr !important;
            gap: 34px !important;
          }

          #leadership h2 {
            font-size: clamp(44px, 14vw, 62px) !important;
          }

          #leadership p {
            font-size: 14px !important;
            line-height: 1.72 !important;
          }

          #leadership .container > div > div:last-child > div {
            padding: 24px 18px !important;
          }

          #leadership .container > div > div:last-child > div > div:first-child {
            display: grid !important;
            grid-templateColumns: 112px 1fr !important;
            gap: 18px !important;
          }

          #leadership .ceo-photo-placeholder {
            width: 112px !important;
            flex-basis: 112px !important;
          }

          #leadership .container > div > div:last-child > div > div:first-child h3 {
            font-size: clamp(30px, 9vw, 42px) !important;
          }
        }
      `}</style>
    </section>
  );
}
