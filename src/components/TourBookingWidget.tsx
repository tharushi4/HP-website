'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Tour } from '@/types';
import { Calendar, Users, ShieldCheck, Check, Sparkles, ArrowRight } from 'lucide-react';

export default function TourBookingWidget({ tour }: { tour: Tour }) {
  const router = useRouter();
  const [guests, setGuests] = useState(2);
  const [travelDate, setTravelDate] = useState('2026-10-15');

  const unitPrice = tour.discountPrice || tour.price;
  const totalPrice = unitPrice * guests;
  const savings = tour.discountPrice ? (tour.price - tour.discountPrice) * guests : 0;

  const handleProceed = () => {
    router.push(`/book/${tour.id}?guests=${guests}&date=${travelDate}`);
  };

  return (
    <div
      className="glass-panel"
      style={{
        padding: '30px',
        position: 'sticky',
        top: '100px',
        border: '1px solid rgba(0, 210, 255, 0.25)',
        boxShadow: 'var(--shadow-lg)',
      }}
    >
      {/* Price Header */}
      <div style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <span style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Expedition Fare
        </span>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginTop: '4px' }}>
          <span style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff' }}>
            ${unitPrice.toLocaleString()}
          </span>
          {tour.discountPrice && (
            <span style={{ fontSize: '1.1rem', color: '#64748b', textDecoration: 'line-through' }}>
              ${tour.price.toLocaleString()}
            </span>
          )}
          <span style={{ color: '#94a3b8', fontSize: '0.88rem' }}>/ traveler</span>
        </div>

        {savings > 0 && (
          <div style={{ marginTop: '8px', display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b', padding: '4px 10px', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 600 }}>
            <Sparkles size={12} />
            <span>Early Booking Savings: ${savings.toLocaleString()} off</span>
          </div>
        )}
      </div>

      {/* Date Selection */}
      <div style={{ marginBottom: '18px' }}>
        <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Calendar size={14} color="#00d2ff" />
          <span>Select Departure Date</span>
        </label>
        <input
          type="date"
          value={travelDate}
          min="2026-09-15"
          onChange={(e) => setTravelDate(e.target.value)}
          className="form-input"
        />
      </div>

      {/* Guests Counter */}
      <div style={{ marginBottom: '24px' }}>
        <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Users size={14} color="#00d2ff" />
          <span>Number of Travelers</span>
        </label>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '8px 16px' }}>
          <span style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.95rem' }}>
            {guests} {guests === 1 ? 'Traveler' : 'Travelers'}
          </span>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              type="button"
              disabled={guests <= 1}
              onClick={() => setGuests(guests - 1)}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'rgba(255,255,255,0.08)',
                border: 'none',
                color: '#ffffff',
                cursor: guests <= 1 ? 'not-allowed' : 'pointer',
                opacity: guests <= 1 ? 0.4 : 1,
                fontSize: '1.1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              -
            </button>
            <button
              type="button"
              disabled={guests >= tour.groupSize}
              onClick={() => setGuests(guests + 1)}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'rgba(255,255,255,0.08)',
                border: 'none',
                color: '#ffffff',
                cursor: guests >= tour.groupSize ? 'not-allowed' : 'pointer',
                opacity: guests >= tour.groupSize ? 0.4 : 1,
                fontSize: '1.1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Summary Box */}
      <div style={{ background: 'rgba(6,13,23,0.6)', borderRadius: '10px', padding: '16px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', color: '#94a3b8', marginBottom: '8px' }}>
          <span>${unitPrice.toLocaleString()} × {guests} guests</span>
          <span>${totalPrice.toLocaleString()}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', color: '#10b981', marginBottom: '8px' }}>
          <span>Carbon Offset & Permits</span>
          <span>Included</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', paddingTop: '10px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <span>Estimated Total</span>
          <span>${totalPrice.toLocaleString()}</span>
        </div>
      </div>

      {/* CTA Button */}
      <button
        onClick={handleProceed}
        className="btn-accent"
        style={{
          width: '100%',
          padding: '16px',
          fontSize: '1.05rem',
          borderRadius: '12px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          marginBottom: '16px',
        }}
      >
        <span>Reserve This Expedition</span>
        <ArrowRight size={18} />
      </button>

      {/* Trust guarantees */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.78rem', color: '#94a3b8' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Check size={14} color="#10b981" />
          <span>Risk-free 100% deposit refund within 48h</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <ShieldCheck size={14} color="#00d2ff" />
          <span>Guaranteed Departure with Certified Guides</span>
        </div>
      </div>
    </div>
  );
}
