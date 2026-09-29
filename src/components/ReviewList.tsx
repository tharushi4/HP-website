'use client';

import React, { useState } from 'react';
import { Review } from '@/types';
import { Star, MessageSquarePlus, User, CheckCircle2 } from 'lucide-react';

export default function ReviewList({ tourId, reviews: initialReviews }: { tourId: string; reviews: Review[] }) {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState(5);
  const [author, setAuthor] = useState('');
  const [location, setLocation] = useState('');
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tourId, author, rating, comment, location }),
      });
      if (res.ok) {
        const newRev = await res.json();
        setReviews([newRev, ...reviews]);
        setSuccess(true);
        setTimeout(() => {
          setIsModalOpen(false);
          setSuccess(false);
          setAuthor('');
          setLocation('');
          setComment('');
          setRating(5);
        }, 1500);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ marginTop: '48px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <span className="section-tag">Traveler Voices</span>
          <h3 style={{ fontSize: '1.8rem', color: '#ffffff' }}>Verified Expedition Reviews ({reviews.length})</h3>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn-secondary"
          style={{ padding: '10px 20px', fontSize: '0.88rem' }}
        >
          <MessageSquarePlus size={16} />
          <span>Write a Review</span>
        </button>
      </div>

      {reviews.length === 0 ? (
        <div style={{ padding: '36px', textAlign: 'center', background: 'var(--bg-surface)', borderRadius: 'var(--radius-md)' }}>
          <p style={{ color: '#94a3b8' }}>Be the first verified traveler to share an expedition review.</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
          {reviews.map((rev) => (
            <div
              key={rev.id}
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-glass)',
                borderRadius: 'var(--radius-md)',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', gap: '2px', color: '#f59e0b' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={15}
                        fill={i < rev.rating ? '#f59e0b' : 'none'}
                        color={i < rev.rating ? '#f59e0b' : '#64748b'}
                      />
                    ))}
                  </div>
                  <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                    {new Date(rev.createdAt).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })}
                  </span>
                </div>

                <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: '1.6', fontStyle: 'italic', marginBottom: '16px' }}>
                  "{rev.comment}"
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '12px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(0,210,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00d2ff' }}>
                  <User size={16} />
                </div>
                <div>
                  <h5 style={{ fontSize: '0.9rem', color: '#ffffff', margin: 0 }}>{rev.author}</h5>
                  {rev.location && <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{rev.location}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Review Submission Modal */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(6, 13, 23, 0.85)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px',
          }}
        >
          <div
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-glass-hover)',
              borderRadius: 'var(--radius-lg)',
              maxWidth: '500px',
              width: '100%',
              padding: '32px',
              position: 'relative',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            {success ? (
              <div style={{ textAlign: 'center', padding: '30px 0' }}>
                <CheckCircle2 size={48} color="#10b981" style={{ margin: '0 auto 16px auto' }} />
                <h3 style={{ color: '#ffffff', marginBottom: '8px' }}>Thank You For Your Review!</h3>
                <p style={{ color: '#94a3b8' }}>Your feedback inspires future explorers worldwide.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '8px' }}>Share Your Experience</h3>
                <p style={{ color: '#94a3b8', fontSize: '0.88rem', marginBottom: '20px' }}>
                  Tell us about your trip memories, guides, and highlights.
                </p>

                {/* Star rating selector */}
                <div style={{ marginBottom: '16px' }}>
                  <label className="form-label">Rating</label>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {[1, 2, 3, 4, 5].map((s) => (
                      <button
                        type="button"
                        key={s}
                        onClick={() => setRating(s)}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          cursor: 'pointer',
                          padding: '4px',
                        }}
                      >
                        <Star
                          size={24}
                          fill={s <= rating ? '#f59e0b' : 'none'}
                          color={s <= rating ? '#f59e0b' : '#64748b'}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '14px' }}>
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="e.g. Captain Laura Croft"
                    className="form-input"
                  />
                </div>

                <div style={{ marginBottom: '14px' }}>
                  <label className="form-label">Your Origin / City (optional)</label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Vancouver, Canada"
                    className="form-input"
                  />
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label className="form-label">Review Commentary</label>
                  <textarea
                    required
                    rows={4}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="What made this expedition memorable? How were the local guides and accommodations?"
                    className="form-input"
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    style={{
                      background: 'transparent',
                      border: '1px solid rgba(255,255,255,0.15)',
                      color: '#94a3b8',
                      padding: '10px 20px',
                      borderRadius: 'var(--radius-full)',
                      cursor: 'pointer',
                    }}
                  >
                    Cancel
                  </button>
                  <button type="submit" disabled={submitting} className="btn-primary" style={{ padding: '10px 24px' }}>
                    {submitting ? 'Submitting...' : 'Post Review'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
