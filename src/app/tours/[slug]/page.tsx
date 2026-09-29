import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTourBySlug } from '@/lib/data-service';
import TourGallery from '@/components/TourGallery';
import ItineraryTimeline from '@/components/ItineraryTimeline';
import TourBookingWidget from '@/components/TourBookingWidget';
import ReviewList from '@/components/ReviewList';
import { MapPin, Clock, Users, Star, ArrowLeft, Check, X, Shield, Award } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function TourDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tour = await getTourBySlug(slug);

  if (!tour) {
    notFound();
  }

  return (
    <div style={{ padding: '40px 0 100px 0' }}>
      <div className="max-w-site">
        {/* Breadcrumb Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '24px' }}>
          <Link href="/tours" style={{ color: '#93c5fd', display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
            <ArrowLeft size={14} />
            <span>All Expeditions</span>
          </Link>
          <span>/</span>
          <Link href={`/destinations/${tour.destination.slug}`} style={{ color: '#94a3b8', textDecoration: 'none' }}>
            {tour.destination.name}
          </Link>
          <span>/</span>
          <span style={{ color: '#ffffff' }}>{tour.title}</span>
        </div>

        {/* Title and Badges */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap' }}>
            <span className="badge-pill badge-gold">{tour.category}</span>
            <span className="badge-pill badge-blue">{tour.difficulty}</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#f59e0b', fontSize: '0.88rem', fontWeight: 700 }}>
              <Star size={16} fill="#f59e0b" />
              <span>{tour.rating.toFixed(2)}</span>
              <span style={{ color: '#94a3b8', fontWeight: 400 }}>({tour.reviewCount} traveler reviews)</span>
            </div>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              color: '#ffffff',
              lineHeight: 1.18,
              marginBottom: '16px',
            }}
          >
            {tour.title}
          </h1>

          {/* Quick specs ribbon */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '24px',
              color: '#cbd5e1',
              fontSize: '0.92rem',
              padding: '16px 0',
              borderTop: '1px solid rgba(255,255,255,0.08)',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={18} color="#00d2ff" />
              <span>{tour.destination.name}, {tour.destination.country}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Clock size={18} color="#f59e0b" />
              <span>{tour.durationDays} Days / {tour.durationDays - 1} Nights</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Users size={18} color="#10b981" />
              <span>Max {tour.groupSize} Travelers (Small Group)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Award size={18} color="#ff5e62" />
              <span>Expert Local Guide Ratio 1:6</span>
            </div>
          </div>
        </div>

        {/* 2-Column Main Layout: Details Left, Sticky Booking Widget Right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 380px',
            gap: '48px',
            alignItems: 'start',
          }}
          className="tour-detail-grid"
        >
          {/* Left Column */}
          <div>
            {/* Image Gallery */}
            <TourGallery images={tour.images} title={tour.title} />

            {/* Highlights Section */}
            <div style={{ marginBottom: '48px' }}>
              <span className="section-tag">Expedition Highlights</span>
              <h3 style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: '20px' }}>
                Signature Moments You'll Never Forget
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                {tour.highlights.map((hl, idx) => (
                  <div
                    key={idx}
                    className="glass-panel"
                    style={{
                      padding: '20px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                    }}
                  >
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(0, 210, 255, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00d2ff', flexShrink: 0, marginTop: '2px' }}>
                      <Check size={16} />
                    </div>
                    <span style={{ color: '#e2e8f0', fontSize: '0.94rem', lineHeight: '1.5' }}>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Day-by-day Itinerary */}
            <ItineraryTimeline items={tour.itinerary} />

            {/* Inclusions & Exclusions */}
            <div style={{ marginTop: '54px' }}>
              <span className="section-tag">What's Covered</span>
              <h3 style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: '24px' }}>
                Inclusions & Transparency
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px' }} className="inclusions-grid">
                {/* Inclusions */}
                <div className="glass-panel" style={{ padding: '28px' }}>
                  <h4 style={{ color: '#10b981', fontSize: '1.1rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Check size={18} />
                    <span>Included in Expedition Fare</span>
                  </h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {tour.inclusions.map((inc, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: '#cbd5e1' }}>
                        <div style={{ color: '#10b981', marginTop: '3px' }}><Check size={14} /></div>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exclusions */}
                <div className="glass-panel" style={{ padding: '28px' }}>
                  <h4 style={{ color: '#f87171', fontSize: '1.1rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <X size={18} />
                    <span>Not Included</span>
                  </h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {tour.exclusions.map((exc, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: '#94a3b8' }}>
                        <div style={{ color: '#f87171', marginTop: '3px' }}><X size={14} /></div>
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Traveler Reviews */}
            <ReviewList tourId={tour.id} reviews={tour.reviews} />
          </div>

          {/* Right Column: Sticky Booking Calculator */}
          <div>
            <TourBookingWidget tour={tour} />
          </div>
        </div>
      </div>
    </div>
  );
}
