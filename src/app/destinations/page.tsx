'use client';

import React, { useState, useEffect } from 'react';
import DestinationCard from '@/components/DestinationCard';
import { Destination } from '@/types';
import { MapPin, Compass, Sparkles } from 'lucide-react';

export default function DestinationsCatalogPage() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [selectedContinent, setSelectedContinent] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/api/destinations');
        const data = await res.json();
        setDestinations(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const continents = ['All', 'Europe', 'Asia', 'Africa'];

  const filtered = selectedContinent === 'All'
    ? destinations
    : destinations.filter((d) => d.continent.toLowerCase() === selectedContinent.toLowerCase());

  return (
    <div style={{ padding: '60px 0 100px 0' }}>
      <div className="max-w-site">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px auto' }}>
          <span className="section-tag">Global Portfolios</span>
          <h1 className="section-title">Explore Iconic Destinations</h1>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Discover sublime sanctuaries, ancient cultures, and dramatic geography across the world's most compelling continents.
          </p>

          {/* Continent Filter Pills */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '30px', flexWrap: 'wrap' }}>
            {continents.map((cont) => (
              <button
                key={cont}
                onClick={() => setSelectedContinent(cont)}
                style={{
                  padding: '10px 22px',
                  borderRadius: 'var(--radius-full)',
                  border: selectedContinent === cont ? '1px solid #00d2ff' : '1px solid rgba(255,255,255,0.12)',
                  background: selectedContinent === cont ? 'var(--primary-gradient)' : 'rgba(255,255,255,0.05)',
                  color: selectedContinent === cont ? '#060d17' : '#cbd5e1',
                  fontWeight: selectedContinent === cont ? 700 : 500,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {cont === 'All' ? 'All Continents' : cont}
              </button>
            ))}
          </div>
        </div>

        {/* Results Grid */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '80px 0', color: '#94a3b8' }}>
            <Compass size={36} className="animate-float" style={{ margin: '0 auto 16px auto', color: '#00d2ff' }} />
            <p>Gathering destinations from our worldwide database...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: '#94a3b8' }}>
            <p>No destinations found for this region.</p>
          </div>
        ) : (
          <div className="grid-cards">
            {filtered.map((dest) => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
