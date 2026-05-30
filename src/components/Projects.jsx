import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'ADVIDA',
    location: 'Sheikh Zayed City, Cairo',
    tag: 'Flagship · Sold Out',
    tagColor: '#c9a96e',
    type: 'Residential Compound',
    area: '21,000 SQM',
    units: '30 Standalone Villas',
    status: 'Delivered 2024',
    description: 'An exclusive boutique compound featuring only 30 independent villas, each designed for maximum privacy, comfort, and scenic views of lush landscaped surroundings.',
    highlight: true,
    gradient: 'linear-gradient(135deg, #ffffff 0%, #f5ead8 100%)',
    dark: false,
  },
  {
    id: 2,
    name: 'ADVA PRIME',
    location: 'Muscat, Oman',
    tag: 'Coming Soon',
    tagColor: '#e2c89a',
    type: 'Mixed-Use Development',
    area: '20 Acres',
    units: 'Villas & Commercial',
    status: 'Launching 2025',
    description: "A landmark mixed-use development set against the dramatic backdrop of Muscat's landscape — where contemporary architecture meets Omani heritage.",
    highlight: false,
    gradient: 'linear-gradient(135deg, #0f2040 0%, #1e3f6e 100%)',
    dark: true,
  },
  {
    id: 3,
    name: 'ADVA GARDENS',
    location: 'Al Seeb, Muscat',
    tag: 'Planning',
    tagColor: '#a0b8d8',
    type: 'Residential Community',
    area: '35,000 SQM',
    units: 'Villas & Townhouses',
    status: 'Announcing 2025',
    description: "A serene residential community designed around green corridors and water features — offering a tranquil escape within Muscat's fastest-growing district.",
    highlight: false,
    gradient: 'linear-gradient(135deg, #ffffff 0%, #eef3f8 100%)',
    dark: false,
  },
];

function ProjectCard({ project, index, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: project.gradient,
        border: `1px solid ${hovered ? 'rgba(201,169,110,0.5)' : 'rgba(201,169,110,0.18)'}`,
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.5s var(--ease-out)',
        transform: visible
          ? (hovered ? 'translateY(-6px)' : 'translateY(0)')
          : 'translateY(50px)',
        opacity: visible ? 1 : 0,
        transitionDelay: `${index * 0.15}s`,
        boxShadow: hovered ? '0 24px 60px rgba(5,13,26,0.18)' : '0 14px 38px rgba(5,13,26,0.06)',
      }}>
      {/* Top accent line */}
      <div style={{
        height: '2px',
        background: hovered
          ? `linear-gradient(90deg, ${project.tagColor}, transparent)`
          : 'transparent',
        transition: 'background 0.4s ease',
      }} />

      {/* Pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `repeating-linear-gradient(
          45deg, transparent, transparent 40px,
          rgba(201,169,110,0.08) 40px, rgba(201,169,110,0.08) 41px
        )`,
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.4s',
        pointerEvents: 'none',
      }} />

      <div style={{ padding: '48px 40px' }}>
        {/* Tag */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          marginBottom: '32px',
        }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: project.tagColor }} />
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '10px',
            letterSpacing: '0.25em',
            color: project.tagColor,
            textTransform: 'uppercase',
            fontWeight: 500,
          }}>{project.tag}</span>
        </div>

        {/* Name */}
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '48px',
          fontWeight: 300,
          color: project.dark ? 'var(--white)' : 'var(--navy-deepest)',
          lineHeight: 1,
          marginBottom: '8px',
          letterSpacing: '-0.01em',
        }}>{project.name}</h3>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '24px' }}>
          <MapPin size={12} color="var(--gold)" />
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '11px',
            color: 'var(--gold)',
            letterSpacing: '0.1em',
          }}>{project.location}</span>
        </div>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '14px',
          fontWeight: 300,
          lineHeight: 1.8,
          color: project.dark ? 'var(--white-70)' : 'var(--ink-soft)',
          marginBottom: '40px',
        }}>{project.description}</p>

        {/* Specs */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px',
          marginBottom: '40px',
          paddingTop: '32px',
          borderTop: `1px solid ${project.dark ? 'rgba(255,255,255,0.08)' : 'rgba(5,13,26,0.1)'}`,
        }}>
          {[
            { label: 'Type', val: project.type },
            { label: 'Total Area', val: project.area },
            { label: 'Units', val: project.units },
            { label: 'Status', val: project.status },
          ].map(spec => (
            <div key={spec.label}>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '9px', letterSpacing: '0.25em', color: project.dark ? 'rgba(255,255,255,0.35)' : 'rgba(5,13,26,0.42)', textTransform: 'uppercase', marginBottom: '4px' }}>
                {spec.label}
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 600, color: project.dark ? 'var(--white-90)' : 'var(--navy-deep)', letterSpacing: '0.02em' }}>
                {spec.val}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          color: hovered ? 'var(--gold)' : (project.dark ? 'var(--white-70)' : 'rgba(5,13,26,0.68)'),
          transition: 'color 0.3s',
        }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500 }}>
            View Details
          </span>
          <ArrowRight size={14} style={{ transform: hovered ? 'translateX(4px)' : 'none', transition: 'transform 0.3s' }} />
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
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
    <section id="projects" ref={ref} style={{
      padding: '140px 0',
      background: 'linear-gradient(180deg, var(--mist) 0%, var(--ivory) 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background number */}
      <div style={{
        position: 'absolute', right: '5%', top: '10%',
        fontFamily: 'var(--font-display)',
        fontSize: '400px',
        fontWeight: 700,
        color: 'rgba(5,13,26,0.045)',
        lineHeight: 1,
        userSelect: 'none',
        pointerEvents: 'none',
      }}>03</div>

      <div className="container">
        <div style={{ marginBottom: '80px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '12px',
            marginBottom: '24px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.7s ease',
          }}>
            <div style={{ width: '32px', height: '1px', background: 'var(--gold)' }} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.3em', color: 'var(--navy-accent)', textTransform: 'uppercase', fontWeight: 700 }}>Portfolio</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '40px', flexWrap: 'wrap' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(44px, 5vw, 72px)',
              fontWeight: 300,
              lineHeight: 1.05,
              color: 'var(--navy-deepest)',
              letterSpacing: '-0.02em',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s var(--ease-out) 0.2s',
            }}>
              Our<br /><em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Projects</em>
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              fontWeight: 300,
              lineHeight: 1.8,
              color: 'var(--ink-soft)',
              maxWidth: '400px',
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.8s ease 0.4s',
            }}>
              From our proven track record in Egypt to our expanding presence across Oman — each development is a testament to our commitment to quality.
            </p>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2px',
        }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} visible={visible} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          #projects .container > div:last-child { grid-template-columns: 1fr !important; }
        }

        @media (max-width: 720px) {
          #projects {
            padding: 72px 0 !important;
          }

          #projects .container > div:first-child {
            margin-bottom: 34px !important;
          }

          #projects .container > div:first-child > div:last-child {
            gap: 22px !important;
          }

          #projects h2 {
            font-size: clamp(42px, 14vw, 58px) !important;
          }

          #projects p {
            font-size: 14px !important;
            line-height: 1.75 !important;
          }

          #projects .container > div:last-child > div > div:last-child {
            padding: 30px 22px !important;
          }

          #projects h3 {
            font-size: clamp(38px, 13vw, 48px) !important;
          }

          #projects .container > div:last-child > div > div:last-child > div:nth-child(5) {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
            margin-bottom: 28px !important;
            padding-top: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
