'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, MapPin, Compass, DollarSign, Calendar } from 'lucide-react';

export default function SearchBar({ initialQuery = '', initialCategory = '' }: { initialQuery?: string; initialCategory?: string }) {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory);
  const [duration, setDuration] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set('query', query.trim());
    if (category) params.set('category', category);
    if (duration) params.set('duration', duration);

    router.push(`/tours?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="glass-panel search-form-grid"
      style={{
        padding: '16px 20px',
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr 1fr auto',
        gap: '16px',
        alignItems: 'center',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.45), 0 0 25px rgba(0, 210, 255, 0.15)',
      }}
    >
      {/* Search Input */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 12px', background: 'rgba(255,255,255,0.04)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
        <MapPin size={20} color="#00d2ff" style={{ flexShrink: 0 }} />
        <div style={{ width: '100%' }}>
          <label style={{ display: 'block', fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
            Where to?
          </label>
          <input
            type="text"
            placeholder="e.g. Amalfi, Switzerland, Serengeti..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              width: '100%',
              background: 'transparent',
              border: 'none',
              color: '#ffffff',
              fontSize: '0.95rem',
              fontWeight: 500,
              outline: 'none',
            }}
          />
        </div>
      </div>

      {/* Category Dropdown */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 12px', background: 'rgba(255,255,255,0.04)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
        <Compass size={20} color="#f59e0b" style={{ flexShrink: 0 }} />
        <div style={{ width: '100%' }}>
          <label style={{ display: 'block', fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
            Trip Style
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{
              width: '100%',
              background: 'transparent',
              border: 'none',
              color: '#ffffff',
              fontSize: '0.95rem',
              fontWeight: 500,
              outline: 'none',
              cursor: 'pointer',
            }}
          >
            <option value="" style={{ background: '#0c1829', color: '#fff' }}>All Experiences</option>
            <option value="Luxury" style={{ background: '#0c1829', color: '#fff' }}>Luxury & Wellness</option>
            <option value="Adventure" style={{ background: '#0c1829', color: '#fff' }}>Epic Adventure</option>
            <option value="Cultural" style={{ background: '#0c1829', color: '#fff' }}>Cultural Immersion</option>
            <option value="Nature" style={{ background: '#0c1829', color: '#fff' }}>Wildlife & Nature</option>
            <option value="Wellness" style={{ background: '#0c1829', color: '#fff' }}>Holistic Retreats</option>
          </select>
        </div>
      </div>

      {/* Duration */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 12px', background: 'rgba(255,255,255,0.04)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
        <Calendar size={20} color="#10b981" style={{ flexShrink: 0 }} />
        <div style={{ width: '100%' }}>
          <label style={{ display: 'block', fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
            Duration
          </label>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            style={{
              width: '100%',
              background: 'transparent',
              border: 'none',
              color: '#ffffff',
              fontSize: '0.95rem',
              fontWeight: 500,
              outline: 'none',
              cursor: 'pointer',
            }}
          >
            <option value="" style={{ background: '#0c1829', color: '#fff' }}>Any Duration</option>
            <option value="short" style={{ background: '#0c1829', color: '#fff' }}>1 - 7 Days</option>
            <option value="medium" style={{ background: '#0c1829', color: '#fff' }}>8 - 14 Days</option>
            <option value="long" style={{ background: '#0c1829', color: '#fff' }}>15+ Days</option>
          </select>
        </div>
      </div>

      {/* Search Button */}
      <button
        type="submit"
        className="btn-primary"
        style={{
          height: '100%',
          padding: '14px 28px',
          whiteSpace: 'nowrap',
          borderRadius: '12px',
        }}
      >
        <Search size={18} />
        <span>Search</span>
      </button>
    </form>
  );
}
