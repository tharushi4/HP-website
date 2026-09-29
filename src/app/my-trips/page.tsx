'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Booking } from '@/types';
import { Search, Compass, Calendar, Users, MapPin, CheckCircle, Clock, XCircle, ArrowRight } from 'lucide-react';

export default function MyTripsPage() {
  const [code, setCode] = useState('');
  const [booking, setBooking] = useState<Booking | null>(null);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (lookupCode: string) => {
    const target = lookupCode.trim().toUpperCase();
    if (!target) return;
    setLoading(true);
    setError('');
    setSearched(true);

    try {
      const res = await fetch(`/api/bookings?code=${encodeURIComponent(target)}`);
      if (!res.ok) {
        setBooking(null);
        setError('No reservation found matching this reference code.');
      } else {
        const data = await res.json();
        setBooking(data);
      }
    } catch (e: any) {
      setError('Error looking up booking. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status.toUpperCase()) {
      case 'CONFIRMED':
        return <span className="badge-pill badge-emerald">Confirmed</span>;
      case 'PENDING':
        return <span className="badge-pill badge-gold">Pending Confirmation</span>;
      case 'COMPLETED':
        return <span className="badge-pill badge-blue">Completed</span>;
      case 'CANCELLED':
        return <span className="badge-pill badge-coral">Cancelled</span>;
      default:
        return <span className="badge-pill badge-gold">{status}</span>;
    }
  };

  return (
    <div style={{ padding: '60px 0 100px 0' }}>
      <div className="max-w-site" style={{ maxWidth: '850px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="section-tag">Traveler Self-Service</span>
          <h1 className="section-title">Track Your Expedition Reservation</h1>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Enter your unique 5-digit booking reference code to inspect your departure status, dates, and full itinerary.
          </p>
        </div>

        {/* Search Bar Box */}
        <div className="glass-panel" style={{ padding: '24px', marginBottom: '40px' }}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch(code);
            }}
            style={{ display: 'flex', gap: '12px' }}
          >
            <div style={{ flex: 1, position: 'relative' }}>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="e.g. TRV-89421"
                className="form-input"
                style={{ paddingLeft: '42px', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}
              />
              <Search size={18} color="#94a3b8" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
            </div>

            <button type="submit" disabled={loading} className="btn-primary" style={{ padding: '12px 28px' }}>
              {loading ? 'Searching...' : 'Find Reservation'}
            </button>
          </form>

          {/* Quick Demo Pre-fills */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '16px', fontSize: '0.82rem', color: '#94a3b8' }}>
            <span>Quick Demo:</span>
            <button
              type="button"
              onClick={() => {
                setCode('TRV-89421');
                handleSearch('TRV-89421');
              }}
              style={{ background: 'transparent', border: '1px solid rgba(0,210,255,0.3)', color: '#00d2ff', borderRadius: '6px', padding: '3px 8px', cursor: 'pointer' }}
            >
              TRV-89421 (Amalfi)
            </button>
            <button
              type="button"
              onClick={() => {
                setCode('TRV-47392');
                handleSearch('TRV-47392');
              }}
              style={{ background: 'transparent', border: '1px solid rgba(0,210,255,0.3)', color: '#00d2ff', borderRadius: '6px', padding: '3px 8px', cursor: 'pointer' }}
            >
              TRV-47392 (Swiss Alps)
            </button>
          </div>
        </div>

        {/* Results */}
        {error && (
          <div style={{ background: 'rgba(239, 68, 68, 0.12)', border: '1px solid #ef4444', borderRadius: '12px', padding: '20px', textAlign: 'center', color: '#fca5a5', marginBottom: '30px' }}>
            <p>{error}</p>
          </div>
        )}

        {booking && (
          <div className="glass-panel" style={{ padding: '36px', border: '1px solid rgba(0, 210, 255, 0.3)', boxShadow: 'var(--shadow-lg)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <span style={{ fontSize: '0.78rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Booking Reference
                </span>
                <h2 style={{ fontSize: '2rem', color: '#00d2ff', margin: '4px 0' }}>{booking.bookingCode}</h2>
              </div>
              <div>{getStatusBadge(booking.status)}</div>
            </div>

            {/* Main Details Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', padding: '20px 0', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: '24px' }}>
              <div>
                <span style={{ color: '#94a3b8', fontSize: '0.8rem', display: 'block', marginBottom: '4px' }}>Lead Traveler</span>
                <span style={{ color: '#ffffff', fontWeight: 600 }}>{booking.customerName}</span>
              </div>
              <div>
                <span style={{ color: '#94a3b8', fontSize: '0.8rem', display: 'block', marginBottom: '4px' }}>Contact</span>
                <span style={{ color: '#ffffff', fontWeight: 600 }}>{booking.customerEmail}</span>
              </div>
              <div>
                <span style={{ color: '#94a3b8', fontSize: '0.8rem', display: 'block', marginBottom: '4px' }}>Departure Date</span>
                <span style={{ color: '#ffffff', fontWeight: 600 }}>
                  {new Date(booking.travelDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
              </div>
              <div>
                <span style={{ color: '#94a3b8', fontSize: '0.8rem', display: 'block', marginBottom: '4px' }}>Explorers</span>
                <span style={{ color: '#ffffff', fontWeight: 600 }}>{booking.guestsCount} Guests</span>
              </div>
            </div>

            {/* Tour info if linked */}
            {booking.tour && (
              <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '12px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  {booking.tour.images && booking.tour.images[0] && (
                    <img
                      src={booking.tour.images[0]}
                      alt={booking.tour.title}
                      style={{ width: '80px', height: '60px', borderRadius: '8px', objectFit: 'cover' }}
                    />
                  )}
                  <div>
                    <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginBottom: '4px' }}>{booking.tour.title}</h4>
                    <span style={{ color: '#94a3b8', fontSize: '0.82rem' }}>{booking.tour.durationDays} Days • {booking.tour.category}</span>
                  </div>
                </div>

                <Link
                  href={`/tours/${booking.tour.slug}`}
                  className="btn-secondary"
                  style={{ padding: '8px 18px', fontSize: '0.82rem', textDecoration: 'none' }}
                >
                  <span>View Itinerary</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            )}

            {booking.specialRequests && (
              <div style={{ background: 'rgba(6, 13, 23, 0.6)', borderRadius: '8px', padding: '14px', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '24px' }}>
                <strong style={{ color: '#94a3b8', display: 'block', marginBottom: '2px' }}>Special Requests & Notes:</strong>
                {booking.specialRequests}
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Total Reservation Value</span>
              <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#10b981' }}>${booking.totalAmount.toLocaleString()}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
