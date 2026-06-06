import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Building2, CalendarDays, Check, Mail, MapPin, Phone, Send } from 'lucide-react';

const contactDetails = [
  { icon: MapPin, label: 'Oman Office', value: 'Muscat, Sultanate of Oman' },
  { icon: Phone, label: 'Priority Line', value: '+968 XX XXX XXXX' },
  { icon: Mail, label: 'Enquiries', value: 'info@adva-oman.com' },
];

const interests = [
  'Luxury residential villas',
  'Mixed-use development',
  'Investment opportunities',
  'Landowner partnership',
  'Commercial units',
];

  const inputBase = {
    width: '100%',
  minHeight: '52px',
  border: '1px solid rgba(10,22,40,0.12)',
  background: 'rgba(255,255,255,0.86)',
  color: 'var(--navy-deepest)',
  fontFamily: 'var(--font-body)',
  fontSize: '13px',
  fontWeight: 500,
  letterSpacing: '0.03em',
  padding: '15px 18px',
  outline: 'none',
  transition: 'border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease',
};

function Field({ as: Component = 'input', style, ...props }) {
  return (
    <Component
      {...props}
      style={{ ...inputBase, ...style }}
      onFocus={(event) => {
        event.currentTarget.style.borderColor = 'rgba(201,169,110,0.9)';
        event.currentTarget.style.boxShadow = '0 0 0 4px rgba(201,169,110,0.14)';
        event.currentTarget.style.background = 'var(--white)';
      }}
      onBlur={(event) => {
        event.currentTarget.style.borderColor = 'rgba(10,22,40,0.12)';
        event.currentTarget.style.boxShadow = 'none';
        event.currentTarget.style.background = 'rgba(255,255,255,0.86)';
      }}
    />
  );
}

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    budget: '',
    message: '',
  });
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.08 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const formShell = {
    background: 'linear-gradient(180deg, rgba(255,255,255,0.96), rgba(245,234,216,0.9))',
    border: '1px solid rgba(255,255,255,0.72)',
    boxShadow: '0 34px 90px rgba(5,13,26,0.36)',
    padding: 'clamp(24px, 3.4vw, 46px)',
    position: 'relative',
    overflow: 'hidden',
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        minHeight: '100vh',
        padding: '132px 0 72px',
        position: 'relative',
        overflow: 'hidden',
        background: `
          linear-gradient(120deg, rgba(5,13,26,0.9) 0%, rgba(10,22,40,0.82) 44%, rgba(245,234,216,0.7) 100%),
          linear-gradient(135deg, var(--navy-deepest) 0%, var(--navy-mid) 52%, var(--gold-pale) 100%)
        `,
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(0deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
          maskImage: 'linear-gradient(90deg, rgba(0,0,0,0.72), transparent)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 'auto 0 0 0',
          height: '32%',
          background: 'linear-gradient(180deg, transparent, rgba(5,13,26,0.92))',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          className="contact-hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(420px, 0.78fr) minmax(0, 0.92fr)',
            gap: 'clamp(36px, 6vw, 92px)',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              order: 2,
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
                marginBottom: '28px',
                color: 'var(--gold-light)',
              }}
            >
              <span style={{ width: '34px', height: '1px', background: 'var(--gold)' }} />
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '11px',
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}
              >
                Private Client Desk
              </span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(56px, 8vw, 112px)',
                fontWeight: 300,
                lineHeight: 0.98,
                letterSpacing: '0',
                color: 'var(--white)',
                maxWidth: '860px',
                marginBottom: '30px',
              }}
            >
              Secure your place in Oman's next landmark address.
            </h1>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(15px, 1.35vw, 18px)',
                fontWeight: 300,
                lineHeight: 1.85,
                color: 'rgba(255,255,255,0.78)',
                maxWidth: '620px',
                marginBottom: '42px',
              }}
            >
              Speak with ADVA's development team about residences, investor allocations, and partnership opportunities across Muscat's emerging premium communities.
            </p>

            <div className="contact-proof-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', maxWidth: '720px', marginBottom: '44px' }}>
              {[
                { value: '24h', label: 'Response window' },
                { value: 'Oman', label: 'Focused expansion' },
                { value: 'OMR 40M+', label: 'Planned portfolio' },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    padding: '22px 20px',
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    backdropFilter: 'blur(18px)',
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '34px', color: 'var(--gold-light)', lineHeight: 1, marginBottom: '8px' }}>{item.value}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '10px', color: 'rgba(255,255,255,0.64)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>{item.label}</div>
                </div>
              ))}
            </div>

            <div className="contact-details-row" style={{ display: 'flex', gap: '18px', flexWrap: 'wrap' }}>
              {contactDetails.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: '210px' }}>
                    <span
                      style={{
                        width: '42px',
                        height: '42px',
                        border: '1px solid rgba(201,169,110,0.38)',
                        background: 'rgba(255,255,255,0.07)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon size={16} color="var(--gold-light)" />
                    </span>
                    <span>
                      <span style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.44)', marginBottom: '4px' }}>{item.label}</span>
                      <span style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(255,255,255,0.82)' }}>{item.value}</span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            style={{
              order: 1,
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(34px)',
              transition: 'all 0.85s var(--ease-out) 0.14s',
            }}
          >
            {submitted ? (
              <div style={{ ...formShell, textAlign: 'center', minHeight: '560px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div
                  style={{
                    width: '74px',
                    height: '74px',
                    border: '1px solid rgba(201,169,110,0.42)',
                    background: 'rgba(201,169,110,0.14)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '28px',
                  }}
                >
                  <Check size={28} color="var(--gold)" />
                </div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '44px', fontWeight: 300, color: 'var(--navy-deepest)', marginBottom: '14px' }}>
                  Enquiry Received
                </h2>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.8, color: 'rgba(5,13,26,0.68)', maxWidth: '360px' }}>
                  Thank you. ADVA's client desk will review your request and respond within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={formShell}>
                <div
                  style={{
                    position: 'absolute',
                    inset: '0 0 auto 0',
                    height: '5px',
                    background: 'linear-gradient(90deg, var(--gold), var(--gold-light), var(--navy-accent))',
                  }}
                />

                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '18px', marginBottom: '30px' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 700, marginBottom: '12px' }}>
                      Start Here
                    </div>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(34px, 4vw, 52px)', fontWeight: 300, lineHeight: 1.02, color: 'var(--navy-deepest)', letterSpacing: '0' }}>
                      Request a private consultation
                    </h2>
                  </div>
                  <div
                    style={{
                      width: '54px',
                      height: '54px',
                      flex: '0 0 54px',
                      background: 'var(--navy-deepest)',
                      color: 'var(--gold-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Building2 size={22} />
                  </div>
                </div>

                <div className="contact-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                  <Field
                    type="text"
                    placeholder="Full name"
                    required
                    value={form.name}
                    onChange={(event) => setForm({ ...form, name: event.target.value })}
                  />
                  <Field
                    type="email"
                    placeholder="Email address"
                    required
                    value={form.email}
                    onChange={(event) => setForm({ ...form, email: event.target.value })}
                  />
                </div>

                <div className="contact-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                  <Field
                    type="tel"
                    placeholder="Phone / WhatsApp"
                    value={form.phone}
                    onChange={(event) => setForm({ ...form, phone: event.target.value })}
                  />
                  <Field
                    as="select"
                    required
                    value={form.interest}
                    onChange={(event) => setForm({ ...form, interest: event.target.value })}
                    style={{ appearance: 'none', cursor: 'pointer' }}
                  >
                    <option value="" disabled>Interest</option>
                    {interests.map((interest) => (
                      <option key={interest} value={interest}>{interest}</option>
                    ))}
                  </Field>
                </div>

                <Field
                  as="select"
                  value={form.budget}
                  onChange={(event) => setForm({ ...form, budget: event.target.value })}
                  style={{ appearance: 'none', cursor: 'pointer', marginBottom: '12px' }}
                >
                  <option value="">Preferred investment range</option>
                  <option value="exploring">Exploring options</option>
                  <option value="250-500">OMR 250k - 500k</option>
                  <option value="500-1m">OMR 500k - 1m</option>
                  <option value="1m+">OMR 1m+</option>
                </Field>

                <Field
                  as="textarea"
                  rows={5}
                  placeholder="Tell us what you are looking for"
                  value={form.message}
                  onChange={(event) => setForm({ ...form, message: event.target.value })}
                  style={{ resize: 'vertical', minHeight: '126px', marginBottom: '16px', lineHeight: 1.65 }}
                />

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    minHeight: '60px',
                    border: 'none',
                    background: 'linear-gradient(90deg, var(--navy-deepest), var(--navy-accent))',
                    color: 'var(--white)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    cursor: 'pointer',
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  }}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.transform = 'translateY(-2px)';
                    event.currentTarget.style.boxShadow = '0 16px 36px rgba(10,22,40,0.28)';
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.transform = 'translateY(0)';
                    event.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Send size={15} />
                  Send Enquiry
                </button>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', marginTop: '22px', flexWrap: 'wrap' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-body)', fontSize: '11px', color: 'rgba(5,13,26,0.58)', lineHeight: 1.6 }}>
                    <CalendarDays size={14} color="var(--gold)" />
                    Priority callback within 24 hours
                  </span>
                  <a
                    href="#projects"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: 'var(--navy-deep)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                    }}
                  >
                    View portfolio
                    <ArrowRight size={14} />
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1080px) {
          #contact .contact-hero-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 720px) {
          #contact {
            min-height: auto !important;
            padding-top: 96px !important;
            padding-bottom: 56px !important;
          }

          #contact .contact-form-grid,
          #contact .contact-proof-row {
            grid-template-columns: 1fr !important;
          }

          #contact .contact-details-row {
            flex-direction: column !important;
          }

          #contact form {
            padding: 22px 18px !important;
            box-shadow: 0 18px 50px rgba(5,13,26,0.26) !important;
          }

          #contact form > div:nth-child(2) {
            gap: 12px !important;
            margin-bottom: 20px !important;
          }

          #contact form h2 {
            font-size: 32px !important;
            line-height: 1.04 !important;
          }

          #contact form input,
          #contact form select {
            min-height: 48px !important;
            padding: 13px 14px !important;
            font-size: 12px !important;
          }

          #contact form textarea {
            min-height: 98px !important;
            padding: 13px 14px !important;
            font-size: 12px !important;
          }

          #contact form button {
            min-height: 54px !important;
            letter-spacing: 0.14em !important;
          }

          #contact h1 {
            font-size: clamp(40px, 14vw, 58px) !important;
            line-height: 1.02 !important;
          }

          #contact .contact-proof-row {
            display: none !important;
          }

          #contact .contact-hero-grid > div:first-child {
            margin-top: 28px !important;
          }

          #contact .contact-hero-grid > div:first-child > div:first-child {
            margin-bottom: 18px !important;
          }

          #contact .contact-hero-grid > div:first-child p {
            margin-bottom: 24px !important;
            font-size: 14px !important;
            line-height: 1.7 !important;
          }

          #contact .contact-details-row {
            gap: 14px !important;
          }

          #contact .contact-details-row > div {
            min-width: 0 !important;
          }
        }

        @media (max-width: 420px) {
          #contact form > div:nth-child(2) > div:last-child {
            display: none !important;
          }

          #contact form h2 {
            font-size: 30px !important;
          }
        }
      `}</style>
    </section>
  );
}
