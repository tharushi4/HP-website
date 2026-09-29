'use client';

import React from 'react';
import SearchBar from './SearchBar';
import { Compass, Star, Award, ShieldCheck, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '60px',
        paddingBottom: '80px',
        overflow: 'hidden',
      }}
    >
      {/* Hero Background Image with parallax feel */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          filter: 'brightness(0.55)',
          transform: 'scale(1.03)',
        }}
      />

      {/* Radiant Gradient Overlays */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 30%, rgba(0, 210, 255, 0.12) 0%, rgba(6, 13, 23, 0.75) 60%, #060d17 100%)',
        }}
      />

      <div className="max-w-site" style={{ position: 'relative', zIndex: 10, width: '100%', textAlign: 'center' }}>
        {/* Glowing Badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(0, 210, 255, 0.12)', border: '1px solid rgba(0, 210, 255, 0.3)', padding: '6px 18px', borderRadius: 'var(--radius-full)', marginBottom: '24px', backdropFilter: 'blur(10px)' }}>
          <Sparkles size={16} color="#00d2ff" />
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#38bdf8', letterSpacing: '0.04em' }}>
            Exclusive 2026/2027 Season Expeditions Now Open
          </span>
        </div>

        {/* Primary Headline */}
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
            fontWeight: 800,
            lineHeight: 1.12,
            marginBottom: '20px',
            textShadow: '0 4px 24px rgba(0, 0, 0, 0.7)',
            maxWidth: '1000px',
            margin: '0 auto 24px auto',
          }}
        >
          Curated Expeditions to the World’s Most Extraordinary Frontiers
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
            color: '#cbd5e1',
            maxWidth: '750px',
            margin: '0 auto 40px auto',
            lineHeight: 1.6,
            textShadow: '0 2px 10px rgba(0,0,0,0.5)',
          }}
        >
          Immerse yourself in transformative journeys led by expert naturalists, master culinary artisans, and world-class local explorers.
        </p>

        {/* Search Bar Widget */}
        <div style={{ maxWidth: '960px', margin: '0 auto 48px auto' }}>
          <SearchBar />
        </div>

        {/* Live Metrics Row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '32px',
            color: '#94a3b8',
            fontSize: '0.9rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ display: 'flex', gap: '2px', color: '#f59e0b' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="#f59e0b" />
              ))}
            </div>
            <span style={{ color: '#ffffff', fontWeight: 700 }}>4.96/5.0</span>
            <span>(2,400+ Verified Travelers)</span>
          </div>

          <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'rgba(255,255,255,0.3)' }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Award size={16} color="#00d2ff" />
            <span style={{ color: '#ffffff', fontWeight: 600 }}>Small Groups</span>
            <span>(Avg. 8-12 Explorers)</span>
          </div>

          <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'rgba(255,255,255,0.3)' }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={16} color="#10b981" />
            <span style={{ color: '#ffffff', fontWeight: 600 }}>100% Guaranteed Departures</span>
          </div>
        </div>
      </div>
    </section>
  );
}
