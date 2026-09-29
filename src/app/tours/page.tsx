'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import TourCard from '@/components/TourCard';
import { Tour } from '@/types';
import { Compass, Search, Filter, SlidersHorizontal, ArrowUpDown } from 'lucide-react';

function ToursContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('query') || '';
  const initialCategory = searchParams.get('category') || '';

  const [tours, setTours] = useState<Tour[]>([]);
  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTours() {
      try {
        const res = await fetch('/api/tours');
        const data = await res.json();
        setTours(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchTours();
  }, []);

  const categories = ['All', 'Luxury', 'Adventure', 'Cultural', 'Nature', 'Wellness'];
  const difficulties = ['All', 'Easy', 'Moderate', 'Challenging'];

  // Filtering
  const filtered = tours.filter((t) => {
    if (selectedCategory && selectedCategory !== 'All' && t.category.toLowerCase() !== selectedCategory.toLowerCase()) {
      return false;
    }
    if (selectedDifficulty && selectedDifficulty !== 'All' && t.difficulty.toLowerCase() !== selectedDifficulty.toLowerCase()) {
      return false;
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      const matchTitle = t.title.toLowerCase().includes(q);
      const matchCat = t.category.toLowerCase().includes(q);
      const matchHighlights = t.highlights.some((h) => h.toLowerCase().includes(q));
      if (!matchTitle && !matchCat && !matchHighlights) return false;
    }
    return true;
  });

  // Sorting
  const sorted = [...filtered].sort((a, b) => {
    const priceA = a.discountPrice || a.price;
    const priceB = b.discountPrice || b.price;

    if (sortBy === 'price-asc') return priceA - priceB;
    if (sortBy === 'price-desc') return priceB - priceA;
    if (sortBy === 'rating') return b.rating - a.rating;
    return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
  });

  return (
    <div style={{ padding: '60px 0 100px 0' }}>
      <div className="max-w-site">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 40px auto' }}>
          <span className="section-tag">Handpicked Itineraries</span>
          <h1 className="section-title">Curated Expeditions Catalog</h1>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Browse our complete portfolio of life-defining departures. Filter by adventure difficulty, trip vibe, or destination.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div
          className="glass-panel"
          style={{
            padding: '20px 24px',
            marginBottom: '40px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Keyword Search */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '8px 14px', minWidth: '260px' }}>
            <Search size={18} color="#00d2ff" />
            <input
              type="text"
              placeholder="Search by title, activity..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#ffffff',
                fontSize: '0.9rem',
                outline: 'none',
                width: '100%',
              }}
            />
          </div>

          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat === 'All' ? '' : cat)}
                style={{
                  padding: '7px 16px',
                  borderRadius: 'var(--radius-full)',
                  border: (selectedCategory === '' && cat === 'All') || selectedCategory === cat ? '1px solid #00d2ff' : '1px solid rgba(255,255,255,0.1)',
                  background: (selectedCategory === '' && cat === 'All') || selectedCategory === cat ? 'var(--primary-gradient)' : 'rgba(255,255,255,0.04)',
                  color: (selectedCategory === '' && cat === 'All') || selectedCategory === cat ? '#060d17' : '#cbd5e1',
                  fontWeight: 600,
                  fontSize: '0.84rem',
                  cursor: 'pointer',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Difficulty & Sort selectors */}
          <div style={{ display: 'flex', gap: '12px' }}>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: '#ffffff',
                padding: '8px 12px',
                borderRadius: '8px',
                fontSize: '0.85rem',
                cursor: 'pointer',
                outline: 'none',
              }}
            >
              <option value="" style={{ background: '#0c1829' }}>All Difficulties</option>
              <option value="Easy" style={{ background: '#0c1829' }}>Easy</option>
              <option value="Moderate" style={{ background: '#0c1829' }}>Moderate</option>
              <option value="Challenging" style={{ background: '#0c1829' }}>Challenging</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: '#ffffff',
                padding: '8px 12px',
                borderRadius: '8px',
                fontSize: '0.85rem',
                cursor: 'pointer',
                outline: 'none',
              }}
            >
              <option value="featured" style={{ background: '#0c1829' }}>Sort: Featured</option>
              <option value="rating" style={{ background: '#0c1829' }}>Highest Rated</option>
              <option value="price-asc" style={{ background: '#0c1829' }}>Price: Low to High</option>
              <option value="price-desc" style={{ background: '#0c1829' }}>Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Counter */}
        <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
            Showing <strong>{sorted.length}</strong> expeditions matching your criteria
          </span>
          {(selectedCategory || selectedDifficulty || query) && (
            <button
              onClick={() => {
                setSelectedCategory('');
                setSelectedDifficulty('');
                setQuery('');
              }}
              style={{ background: 'transparent', border: 'none', color: '#00d2ff', fontSize: '0.85rem', cursor: 'pointer', textDecoration: 'underline' }}
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Tours Grid */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '80px 0', color: '#94a3b8' }}>
            <Compass size={36} className="animate-float" style={{ margin: '0 auto 16px auto', color: '#00d2ff' }} />
            <p>Loading curated expeditions...</p>
          </div>
        ) : sorted.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 0', background: 'var(--bg-surface)', borderRadius: 'var(--radius-lg)' }}>
            <Compass size={40} style={{ color: '#64748b', margin: '0 auto 16px auto' }} />
            <h3 style={{ color: '#ffffff', marginBottom: '8px' }}>No matching expeditions found</h3>
            <p style={{ color: '#94a3b8', maxWidth: '400px', margin: '0 auto 20px auto' }}>
              Try broadening your search query or selecting a different category or difficulty level.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('');
                setSelectedDifficulty('');
                setQuery('');
              }}
              className="btn-primary"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid-cards">
            {sorted.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ToursPage() {
  return (
    <Suspense fallback={<div style={{ textAlign: 'center', padding: '80px 0', color: '#94a3b8' }}>Loading catalog...</div>}>
      <ToursContent />
    </Suspense>
  );
}
