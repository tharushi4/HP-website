import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBookingByCode } from '@/lib/data-service';
import { CheckCircle2, Calendar, Users, MapPin, Printer, ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import PrintButton from '@/components/PrintButton';

interface PageProps {
  params: Promise<{ code: string }>;
}

export default async function BookingConfirmationPage({ params }: PageProps) {
  const { code } = await params;
  const booking = await getBookingByCode(code);

  if (!booking) {
    notFound();
  }

  return (
    <div style={{ padding: '60px 0 100px 0' }}>
      <div className="max-w-site" style={{ maxWidth: '800px' }}>
        {/* Success Card */}
        <div
          className="glass-panel"
          style={{
            padding: '48px',
            textAlign: 'center',
            position: 'relative',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(16, 185, 129, 0.15)',
          }}
        >
          {/* Animated Green Badge */}
          <div
            style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              background: 'rgba(16, 185, 129, 0.15)',
              border: '2px solid #10b981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px auto',
              color: '#10b981',
            }}
          >
            <CheckCircle2 size={42} />
          </div>

          <span className="section-tag" style={{ color: '#10b981' }}>Reservation Guaranteed</span>
          <h1 style={{ fontSize: '2.5rem', color: '#ffffff', marginBottom: '12px' }}>
            You're Going on an Expedition!
          </h1>
          <p style={{ color: '#cbd5e1', fontSize: '1.05rem', marginBottom: '32px' }}>
            We have confirmed your booking and notified your private expedition manager.
          </p>

          {/* Booking Code Banner */}
          <div
            style={{
              background: 'rgba(6, 13, 23, 0.8)',
              border: '1px dashed rgba(0, 210, 255, 0.4)',
              borderRadius: '12px',
              padding: '20px',
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px',
              marginBottom: '36px',
            }}
          >
            <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Booking Reference Code
            </span>
            <span style={{ fontSize: '1.8rem', fontWeight: 800, color: '#00d2ff', letterSpacing: '0.08em', fontFamily: 'var(--font-display)' }}>
              {booking.bookingCode}
            </span>
            <span style={{ fontSize: '0.78rem', color: '#64748b' }}>
              Save this code to look up your reservation under "My Trips"
            </span>
          </div>

          {/* Details Table */}
          <div
            style={{
              textAlign: 'left',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '12px',
              padding: '24px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              marginBottom: '36px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              fontSize: '0.92rem',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '12px' }}>
              <span style={{ color: '#94a3b8' }}>Expedition Title:</span>
              <span style={{ color: '#ffffff', fontWeight: 600 }}>{booking.tour?.title || 'Signature Expedition'}</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '12px' }}>
              <span style={{ color: '#94a3b8' }}>Lead Traveler:</span>
              <span style={{ color: '#ffffff', fontWeight: 600 }}>{booking.customerName}</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '12px' }}>
              <span style={{ color: '#94a3b8' }}>Registered Email:</span>
              <span style={{ color: '#ffffff', fontWeight: 600 }}>{booking.customerEmail}</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '12px' }}>
              <span style={{ color: '#94a3b8' }}>Departure Date:</span>
              <span style={{ color: '#ffffff', fontWeight: 600 }}>
                {new Date(booking.travelDate).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '12px' }}>
              <span style={{ color: '#94a3b8' }}>Group Size:</span>
              <span style={{ color: '#ffffff', fontWeight: 600 }}>{booking.guestsCount} Travelers</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingTop: '6px' }}>
              <span style={{ color: '#94a3b8', fontSize: '1.05rem', fontWeight: 600 }}>Total Confirmed Fare:</span>
              <span style={{ color: '#10b981', fontSize: '1.4rem', fontWeight: 800 }}>${booking.totalAmount.toLocaleString()}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <PrintButton />
            <Link href="/my-trips" className="btn-secondary" style={{ textDecoration: 'none' }}>
              <Compass size={16} />
              <span>Go to My Trips</span>
            </Link>
            <Link href="/" className="btn-primary" style={{ textDecoration: 'none' }}>
              <span>Return to Home</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
