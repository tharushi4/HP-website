'use client';

import React from 'react';
import Link from 'next/link';
import { Tour } from '@/types';
import { Clock, Users, Star, ArrowRight, Check } from 'lucide-react';

export default function TourCard({ tour }: { tour: Tour }) {
  const getDifficultyBadge = (diff: string) => {
    switch (diff.toLowerCase()) {
      case 'easy':
        return <span className="badge-pill badge-emerald">Easy</span>;
      case 'moderate':
        return <span className="badge-pill badge-blue">Moderate</span>;
      case 'challenging':
      case 'strenuous':
        return <span className="badge-pill badge-coral">Challenging</span>;
      default:
        return <span className="badge-pill badge-gold">{diff}</span>;
    }
  };

  return (
    <div
      style={{
        background: 'var(--bg-surface)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-glass)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'var(--shadow-md)',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className="tour-card"
    >
      {/* Media Header */}
      <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${tour.images[0]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'transform 0.6s ease',
          }}
          className="tour-card-bg"
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(6, 13, 23, 0.3) 0%, rgba(6, 13, 23, 0.7) 100%)',
          }}
        />

        {/* Top Badges */}
        <div
          style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            right: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 2,
          }}
        >
          <span className="badge-pill badge-gold" style={{ backdropFilter: 'blur(8px)', background: 'rgba(6,13,23,0.7)' }}>
            {tour.category}
          </span>
          {getDifficultyBadge(tour.difficulty)}
        </div>

        {/* Duration & Group info pill */}
        <div
          style={{
            position: 'absolute',
            bottom: '14px',
            left: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            zIndex: 2,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.8rem', color: '#ffffff', background: 'rgba(6,13,23,0.75)', backdropFilter: 'blur(6px)', padding: '4px 10px', borderRadius: '12px' }}>
            <Clock size={13} color="#00d2ff" />
            <span>{tour.durationDays} Days</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.8rem', color: '#ffffff', background: 'rgba(6,13,23,0.75)', backdropFilter: 'blur(6px)', padding: '4px 10px', borderRadius: '12px' }}>
            <Users size={13} color="#00d2ff" />
            <span>Max {tour.groupSize} Guests</span>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Rating and Reviews */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
          <Star size={15} color="#f59e0b" fill="#f59e0b" />
          <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff' }}>{tour.rating.toFixed(2)}</span>
          <span style={{ fontSize: '0.82rem', color: '#94a3b8' }}>({tour.reviewCount} reviews)</span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: '1.25rem',
            color: '#ffffff',
            lineHeight: '1.35',
            marginBottom: '12px',
          }}
        >
          <Link href={`/tours/${tour.slug}`} style={{ color: 'inherit' }} className="tour-title-link">
            {tour.title}
          </Link>
        </h3>

        {/* Highlights List */}
        <div style={{ marginBottom: '20px', flex: 1 }}>
          {tour.highlights.slice(0, 2).map((hl, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.84rem', color: '#94a3b8', marginBottom: '6px' }}>
              <div style={{ color: '#00d2ff', marginTop: '3px', flexShrink: 0 }}>
                <Check size={13} />
              </div>
              <span style={{ lineHeight: '1.4' }}>{hl}</span>
            </div>
          ))}
        </div>

        {/* Pricing and Action Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '16px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <div>
            <span style={{ display: 'block', fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Starting From
            </span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              {tour.discountPrice ? (
                <>
                  <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>
                    ${tour.discountPrice.toLocaleString()}
                  </span>
                  <span style={{ fontSize: '0.9rem', color: '#64748b', textDecoration: 'line-through' }}>
                    ${tour.price.toLocaleString()}
                  </span>
                </>
              ) : (
                <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>
                  ${tour.price.toLocaleString()}
                </span>
              )}
              <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>/ person</span>
            </div>
          </div>

          <Link
            href={`/tours/${tour.slug}`}
            className="btn-secondary"
            style={{
              padding: '8px 18px',
              fontSize: '0.85rem',
              textDecoration: 'none',
              gap: '6px',
            }}
          >
            <span>Details</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
