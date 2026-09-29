'use client';

import React from 'react';
import Link from 'next/link';
import { Destination } from '@/types';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';

export default function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      style={{ textDecoration: 'none', display: 'block', height: '100%' }}
      className="group"
    >
      <div
        style={{
          position: 'relative',
          height: '420px',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: 'var(--shadow-md)',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="dest-card-container"
      >
        {/* Background Image */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${destination.heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          className="dest-card-img"
        />

        {/* Cinematic Gradient Overlays */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(6, 13, 23, 0.2) 0%, rgba(6, 13, 23, 0.5) 45%, rgba(6, 13, 23, 0.95) 100%)',
          }}
        />

        {/* Top Badges */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            right: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 2,
          }}
        >
          <div className="badge-pill badge-blue" style={{ backdropFilter: 'blur(8px)', background: 'rgba(6, 13, 23, 0.65)' }}>
            <MapPin size={13} />
            <span>{destination.continent}</span>
          </div>

          {destination.featured && (
            <div className="badge-pill badge-gold" style={{ backdropFilter: 'blur(8px)', background: 'rgba(6, 13, 23, 0.65)' }}>
              Top Rated
            </div>
          )}
        </div>

        {/* Content Bottom Area */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '24px',
            zIndex: 2,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#93c5fd', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
            <span>{destination.country}</span>
          </div>

          <h3
            style={{
              fontSize: '1.6rem',
              color: '#ffffff',
              marginBottom: '10px',
              lineHeight: '1.2',
            }}
          >
            {destination.name}
          </h3>

          <p
            style={{
              fontSize: '0.88rem',
              color: '#cbd5e1',
              lineHeight: '1.5',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              marginBottom: '16px',
            }}
          >
            {destination.description}
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '14px',
              borderTop: '1px solid rgba(255, 255, 255, 0.12)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#94a3b8', fontSize: '0.8rem' }}>
              <Calendar size={14} color="#00d2ff" />
              <span>{destination.bestTimeToVisit.split('(')[0].trim()}</span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: '#00d2ff',
                fontSize: '0.85rem',
                fontWeight: 600,
              }}
              className="view-expedition-link"
            >
              <span>Explore</span>
              <ArrowRight size={14} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
