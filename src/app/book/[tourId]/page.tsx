'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useParams, useSearchParams, useRouter } from 'next/navigation';
import { Tour } from '@/types';
import { ShieldCheck, Calendar, Users, MapPin, CheckCircle2, Lock, ArrowLeft, Clock } from 'lucide-react';
import Link from 'next/link';

function BookingFormContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();

  const tourId = params?.tourId as string;
  const initialGuests = Number(searchParams?.get('guests') || 2);
  const initialDate = searchParams?.get('date') || '2026-10-15';

  const [tour, setTour] = useState<Tour | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Form Fields
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [travelDate, setTravelDate] = useState(initialDate);
  const [guestsCount, setGuestsCount] = useState(initialGuests);
  const [specialRequests, setSpecialRequests] = useState('');
  const [dietaryPrefs, setDietaryPrefs] = useState('');

  useEffect(() => {
    async function loadTour() {
      try {
        const res = await fetch('/api/tours');
        const tours: Tour[] = await res.json();
        const found = tours.find((t) => t.id === tourId);
        if (found) setTour(found);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    if (tourId) loadTour();
  }, [tourId]);

  if (loading) {
    return (
      <div style={{ padding: '100px 0', textAlign: 'center', color: '#94a3b8' }}>
        <p>Loading reservation details...</p>
      </div>
    );
  }

  if (!tour) {
    return (
      <div style={{ padding: '100px 0', textAlign: 'center' }}>
        <h2 style={{ color: '#ffffff', marginBottom: '16px' }}>Tour not found</h2>
        <Link href="/tours" className="btn-primary">Browse All Expeditions</Link>
      </div>
    );
  }

  const unitPrice = tour.discountPrice || tour.price;
  const totalAmount = unitPrice * guestsCount;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg('');

    try {
      const combinedRequests = [
        specialRequests.trim(),
        dietaryPrefs.trim() ? `Dietary: ${dietaryPrefs.trim()}` : '',
      ].filter(Boolean).join(' | ');

      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tourId: tour.id,
          customerName,
          customerEmail,
          customerPhone,
          travelDate,
          guestsCount,
          totalAmount,
          specialRequests: combinedRequests,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to complete reservation');
      }

      const booking = await res.json();
      router.push(`/booking/confirmation/${booking.bookingCode}`);
    } catch (err: any) {
      setErrorMsg(err.message || 'Something went wrong during reservation.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ padding: '40px 0 100px 0' }}>
      <div className="max-w-site">
        <Link
          href={`/tours/${tour.slug}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: '#93c5fd',
            fontSize: '0.88rem',
            marginBottom: '28px',
            textDecoration: 'none',
          }}
        >
          <ArrowLeft size={16} />
          <span>Back to Tour Details</span>
        </Link>

        <div style={{ marginBottom: '36px' }}>
          <span className="section-tag">Secure Reservation Checkout</span>
          <h1 className="section-title">Finalize Your Expedition Booking</h1>
        </div>

        {errorMsg && (
          <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', borderRadius: '10px', padding: '16px', color: '#fca5a5', marginBottom: '24px' }}>
            {errorMsg}
          </div>
        )}

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr',
            gap: '40px',
            alignItems: 'start',
          }}
          className="booking-grid"
        >
          {/* Left: Checkout Form */}
          <form onSubmit={handleSubmit} className="glass-panel" style={{ padding: '36px' }}>
            <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Lock size={18} color="#00d2ff" />
              <span>Primary Traveler Details</span>
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <div>
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Captain Laura Croft"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="form-input"
                />
              </div>

              <div>
                <label className="form-label">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="laura@example.com"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  className="form-input"
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>
              <div>
                <label className="form-label">Phone / WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+1 (555) 000-0000"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="form-input"
                />
              </div>

              <div>
                <label className="form-label">Departure Date *</label>
                <input
                  type="date"
                  required
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="form-input"
                />
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label className="form-label">Number of Explorers</label>
              <div style={{ display: 'flex', gap: '12px' }}>
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <button
                    type="button"
                    key={num}
                    onClick={() => setGuestsCount(num)}
                    style={{
                      flex: 1,
                      padding: '10px 0',
                      borderRadius: '8px',
                      border: guestsCount === num ? '1px solid #00d2ff' : '1px solid rgba(255,255,255,0.1)',
                      background: guestsCount === num ? 'var(--primary-gradient)' : 'rgba(255,255,255,0.04)',
                      color: guestsCount === num ? '#060d17' : '#ffffff',
                      fontWeight: 700,
                      cursor: 'pointer',
                    }}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label className="form-label">Dietary & Meal Preferences</label>
              <input
                type="text"
                placeholder="e.g. Vegetarian, Gluten-Free, Halal, No shellfish"
                value={dietaryPrefs}
                onChange={(e) => setDietaryPrefs(e.target.value)}
                className="form-input"
              />
            </div>

            <div style={{ marginBottom: '32px' }}>
              <label className="form-label">Special Occasion or Notes</label>
              <textarea
                rows={3}
                placeholder="Celebrating milestone anniversary, photography support needed, twin beds request..."
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                className="form-input"
                style={{ resize: 'vertical' }}
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="btn-accent"
              style={{
                width: '100%',
                padding: '16px',
                fontSize: '1.1rem',
                borderRadius: '12px',
                cursor: submitting ? 'not-allowed' : 'pointer',
              }}
            >
              {submitting ? 'Confirming with Expedition Dispatch...' : `Confirm Reservation • $${totalAmount.toLocaleString()}`}
            </button>
          </form>

          {/* Right: Order Summary */}
          <div className="glass-panel" style={{ padding: '30px' }}>
            <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '20px' }}>
              Reservation Overview
            </h3>

            <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
              <img
                src={tour.images[0]}
                alt={tour.title}
                style={{ width: '100px', height: '80px', borderRadius: '10px', objectFit: 'cover' }}
              />
              <div>
                <h4 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.3', marginBottom: '6px' }}>
                  {tour.title}
                </h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#94a3b8', fontSize: '0.82rem' }}>
                  <Clock size={13} color="#00d2ff" />
                  <span>{tour.durationDays} Days</span>
                </div>
              </div>
            </div>

            <div style={{ padding: '16px 0', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#cbd5e1' }}>
                <span>Travel Date</span>
                <span style={{ color: '#ffffff', fontWeight: 600 }}>{travelDate}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#cbd5e1' }}>
                <span>Travelers</span>
                <span style={{ color: '#ffffff', fontWeight: 600 }}>{guestsCount} Guests</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#cbd5e1' }}>
                <span>Fare per Person</span>
                <span style={{ color: '#ffffff', fontWeight: 600 }}>${unitPrice.toLocaleString()}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#10b981' }}>
                <span>National Park & Conservation Dues</span>
                <span>Included</span>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingTop: '20px', marginBottom: '24px' }}>
              <span style={{ fontSize: '1.1rem', color: '#ffffff', fontWeight: 700 }}>Total Payable</span>
              <span style={{ fontSize: '1.8rem', color: '#00d2ff', fontWeight: 800 }}>${totalAmount.toLocaleString()}</span>
            </div>

            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', background: 'rgba(0, 210, 255, 0.08)', border: '1px solid rgba(0, 210, 255, 0.2)', padding: '12px', borderRadius: '10px', color: '#7dd3fc', fontSize: '0.82rem' }}>
              <ShieldCheck size={20} style={{ flexShrink: 0 }} />
              <span>Free cancellation up to 30 days prior to departure. Instant confirmation generated.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div style={{ textAlign: 'center', padding: '100px 0', color: '#94a3b8' }}>Loading reservation...</div>}>
      <BookingFormContent />
    </Suspense>
  );
}
