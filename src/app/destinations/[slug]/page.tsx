import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getDestinationBySlug } from '@/lib/data-service';
import TourCard from '@/components/TourCard';
import { MapPin, Calendar, Coins, ArrowLeft, Sparkles, Compass } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function DestinationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const destination = await getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  return (
    <div>
      {/* 1. Destination Cinematic Hero */}
      <section
        style={{
          position: 'relative',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'flex-end',
          paddingBottom: '60px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${destination.heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.6)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(6, 13, 23, 0.2) 0%, rgba(6, 13, 23, 0.7) 60%, #060d17 100%)',
          }}
        />

        <div className="max-w-site" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
          <Link
            href="/destinations"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#93c5fd',
              fontSize: '0.88rem',
              marginBottom: '20px',
              textDecoration: 'none',
            }}
          >
            <ArrowLeft size={16} />
            <span>All Destinations</span>
          </Link>

          <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
            <span className="badge-pill badge-blue">{destination.continent}</span>
            <span className="badge-pill badge-gold">{destination.country}</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: '#ffffff',
              marginBottom: '16px',
              lineHeight: 1.15,
            }}
          >
            {destination.name}
          </h1>

          {/* Quick specs pill row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '24px',
              alignItems: 'center',
              paddingTop: '16px',
              borderTop: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#cbd5e1',
              fontSize: '0.9rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Calendar size={18} color="#00d2ff" />
              <span>
                <strong>Best Season:</strong> {destination.bestTimeToVisit}
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Coins size={18} color="#f59e0b" />
              <span>
                <strong>Currency:</strong> {destination.currency}
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Compass size={18} color="#10b981" />
              <span>
                <strong>Active Expeditions:</strong> {destination.tours.length}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Destination Overview & Gallery */}
      <section style={{ padding: '60px 0' }}>
        <div className="max-w-site">
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '48px', alignItems: 'start' }}>
            <div>
              <span className="section-tag">Destination Insight</span>
              <h2 style={{ fontSize: '2rem', color: '#ffffff', marginBottom: '20px' }}>
                Why We Love {destination.name}
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '24px' }}>
                {destination.description}
              </p>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.7' }}>
                Every corner of {destination.name} reveals an extraordinary dialogue between natural grandeur and human legacy. From exclusive local access to boutique clifftop stays, our private guides illuminate hidden trails rarely experienced by regular travelers.
              </p>
            </div>

            {/* Gallery Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px' }}>
              {destination.gallery.slice(0, 4).map((imgUrl, i) => (
                <div
                  key={i}
                  style={{
                    height: '160px',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <img
                    src={imgUrl}
                    alt={`${destination.name} photo ${i + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Associated Tour Packages */}
      <section style={{ padding: '60px 0 100px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-site">
          <div style={{ marginBottom: '36px' }}>
            <span className="section-tag">Departures & Itineraries</span>
            <h2 style={{ fontSize: '2.2rem', color: '#ffffff' }}>
              Featured Expeditions in {destination.name}
            </h2>
          </div>

          {destination.tours.length === 0 ? (
            <div style={{ padding: '40px', background: 'var(--bg-surface)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
              <p style={{ color: '#94a3b8' }}>Custom private departures for this destination available upon request.</p>
            </div>
          ) : (
            <div className="grid-cards">
              {destination.tours.map((t) => (
                <TourCard key={t.id} tour={t} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
