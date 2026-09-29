'use client';

import React, { useState, useEffect } from 'react';
import { Booking } from '@/types';
import { Database, ShieldCheck, TrendingUp, Users, DollarSign, Calendar, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';

export default function AdminPortalPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/bookings');
      const data = await res.json();
      setBookings(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleStatusChange = async (id: string, newStatus: string) => {
    setUpdatingId(id);
    try {
      const res = await fetch('/api/bookings', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus }),
      });
      if (res.ok) {
        setBookings((prev) =>
          prev.map((b) => (b.id === id ? { ...b, status: newStatus as any } : b))
        );
      }
    } catch (e) {
      console.error(e);
    } finally {
      setUpdatingId(null);
    }
  };

  // KPIs
  const totalRevenue = bookings.reduce((sum, b) => (b.status !== 'CANCELLED' ? sum + b.totalAmount : sum), 0);
  const totalTravelers = bookings.reduce((sum, b) => (b.status !== 'CANCELLED' ? sum + b.guestsCount : sum), 0);
  const confirmedCount = bookings.filter((b) => b.status === 'CONFIRMED').length;

  return (
    <div style={{ padding: '60px 0 100px 0' }}>
      <div className="max-w-site">
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <span className="section-tag">Operator Operations</span>
            <h1 className="section-title">Expedition Management Portal</h1>
            <p className="section-desc" style={{ marginBottom: 0 }}>
              Live reservations tracking, passenger manifests, and PostgreSQL database synchronization.
            </p>
          </div>

          <button
            onClick={fetchBookings}
            className="btn-secondary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', fontSize: '0.88rem' }}
          >
            <RefreshCw size={15} />
            <span>Refresh Manifest</span>
          </button>
        </div>

        {/* Database Connectivity Banner */}
        <div
          className="glass-panel"
          style={{
            padding: '20px 24px',
            marginBottom: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            border: '1px solid rgba(0, 210, 255, 0.25)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(0, 210, 255, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00d2ff' }}>
              <Database size={22} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h4 style={{ color: '#ffffff', fontSize: '1rem', margin: 0 }}>Database Synchronization</h4>
                <span className="badge-pill badge-emerald">Prisma ORM Ready</span>
              </div>
              <p style={{ fontSize: '0.82rem', color: '#94a3b8', marginTop: '2px' }}>
                PostgreSQL schema configured. Data service provides automatic live database operations with resilient zero-downtime fallback.
              </p>
            </div>
          </div>
          <div style={{ fontSize: '0.82rem', color: '#cbd5e1', background: 'rgba(255,255,255,0.06)', padding: '6px 14px', borderRadius: '8px' }}>
            Connection String: <code>DATABASE_URL</code> (.env)
          </div>
        </div>

        {/* KPI Metric Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          <div className="glass-panel" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ color: '#94a3b8', fontSize: '0.85rem', fontWeight: 600 }}>Total Gross Bookings</span>
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981' }}>
                <DollarSign size={20} />
              </div>
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff' }}>${totalRevenue.toLocaleString()}</div>
            <span style={{ fontSize: '0.78rem', color: '#10b981' }}>Active reservations revenue</span>
          </div>

          <div className="glass-panel" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ color: '#94a3b8', fontSize: '0.85rem', fontWeight: 600 }}>Total Travelers</span>
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(0, 210, 255, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00d2ff' }}>
                <Users size={20} />
              </div>
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff' }}>{totalTravelers}</div>
            <span style={{ fontSize: '0.78rem', color: '#38bdf8' }}>Registered expedition participants</span>
          </div>

          <div className="glass-panel" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ color: '#94a3b8', fontSize: '0.85rem', fontWeight: 600 }}>Confirmed Departures</span>
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(245, 158, 11, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f59e0b' }}>
                <TrendingUp size={20} />
              </div>
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff' }}>{confirmedCount}</div>
            <span style={{ fontSize: '0.78rem', color: '#fbbf24' }}>Ready for expedition dispatch</span>
          </div>

          <div className="glass-panel" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ color: '#94a3b8', fontSize: '0.85rem', fontWeight: 600 }}>Total Bookings Logged</span>
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(255, 94, 98, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff5e62' }}>
                <ShieldCheck size={20} />
              </div>
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff' }}>{bookings.length}</div>
            <span style={{ fontSize: '0.78rem', color: '#f87171' }}>Across all global tours</span>
          </div>
        </div>

        {/* Bookings Manifest Table */}
        <div className="glass-panel" style={{ padding: '28px', overflowX: 'auto' }}>
          <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '20px' }}>
            Expedition Reservations Manifest
          </h3>

          {loading ? (
            <div style={{ textAlign: 'center', padding: '40px 0', color: '#94a3b8' }}>
              <p>Refreshing database manifest...</p>
            </div>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.12)', color: '#94a3b8', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  <th style={{ padding: '14px 16px' }}>Reference</th>
                  <th style={{ padding: '14px 16px' }}>Lead Traveler</th>
                  <th style={{ padding: '14px 16px' }}>Expedition Tour</th>
                  <th style={{ padding: '14px 16px' }}>Date</th>
                  <th style={{ padding: '14px 16px' }}>Guests</th>
                  <th style={{ padding: '14px 16px' }}>Total Fare</th>
                  <th style={{ padding: '14px 16px' }}>Status</th>
                  <th style={{ padding: '14px 16px' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b) => (
                  <tr
                    key={b.id}
                    style={{
                      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                      transition: 'background 0.2s',
                    }}
                  >
                    <td style={{ padding: '16px', fontWeight: 700, color: '#00d2ff', fontFamily: 'var(--font-display)' }}>
                      {b.bookingCode}
                    </td>
                    <td style={{ padding: '16px' }}>
                      <div style={{ fontWeight: 600, color: '#ffffff' }}>{b.customerName}</div>
                      <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>{b.customerEmail}</div>
                    </td>
                    <td style={{ padding: '16px', maxWidth: '240px', color: '#cbd5e1' }}>
                      {b.tour?.title || 'Custom Expedition'}
                    </td>
                    <td style={{ padding: '16px', color: '#cbd5e1', whiteSpace: 'nowrap' }}>
                      {new Date(b.travelDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                    </td>
                    <td style={{ padding: '16px', color: '#cbd5e1' }}>
                      {b.guestsCount}
                    </td>
                    <td style={{ padding: '16px', fontWeight: 700, color: '#10b981' }}>
                      ${b.totalAmount.toLocaleString()}
                    </td>
                    <td style={{ padding: '16px' }}>
                      <span
                        className={`badge-pill ${
                          b.status === 'CONFIRMED'
                            ? 'badge-emerald'
                            : b.status === 'PENDING'
                            ? 'badge-gold'
                            : b.status === 'COMPLETED'
                            ? 'badge-blue'
                            : 'badge-coral'
                        }`}
                      >
                        {b.status}
                      </span>
                    </td>
                    <td style={{ padding: '16px' }}>
                      <select
                        value={b.status}
                        disabled={updatingId === b.id}
                        onChange={(e) => handleStatusChange(b.id, e.target.value)}
                        style={{
                          background: 'rgba(255, 255, 255, 0.08)',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          color: '#ffffff',
                          padding: '6px 10px',
                          borderRadius: '6px',
                          fontSize: '0.8rem',
                          cursor: 'pointer',
                          outline: 'none',
                        }}
                      >
                        <option value="CONFIRMED" style={{ background: '#0c1829' }}>CONFIRMED</option>
                        <option value="PENDING" style={{ background: '#0c1829' }}>PENDING</option>
                        <option value="COMPLETED" style={{ background: '#0c1829' }}>COMPLETED</option>
                        <option value="CANCELLED" style={{ background: '#0c1829' }}>CANCELLED</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
