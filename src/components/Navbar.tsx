'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Compass, MapPin, Calendar, ShieldCheck, Menu, X, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currency, setCurrency] = useState('USD');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'rgba(6, 13, 23, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
      }}
    >
      <div className="max-w-site" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
        {/* Brand Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(0, 210, 255, 0.4)',
            }}
          >
            <Compass size={24} color="#060d17" strokeWidth={2.5} />
          </div>
          <div>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.45rem',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                background: 'linear-gradient(to right, #ffffff, #93c5fd)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Terra<span style={{ color: '#00d2ff', WebkitTextFillColor: '#00d2ff' }}>Venture</span>
            </span>
            <span style={{ display: 'block', fontSize: '0.68rem', color: '#94a3b8', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '-3px' }}>
              Experiential Travel
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
          <Link href="/destinations" style={{ fontSize: '0.95rem', fontWeight: 500, color: '#e2e8f0', transition: 'color 0.2s' }}>
            Destinations
          </Link>
          <Link href="/tours" style={{ fontSize: '0.95rem', fontWeight: 500, color: '#e2e8f0', transition: 'color 0.2s' }}>
            Curated Expeditions
          </Link>
          <Link href="/my-trips" style={{ fontSize: '0.95rem', fontWeight: 500, color: '#e2e8f0', transition: 'color 0.2s' }}>
            My Trips
          </Link>
          <Link href="/admin" style={{ fontSize: '0.85rem', fontWeight: 600, color: '#94a3b8', background: 'rgba(255,255,255,0.06)', padding: '6px 14px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
            Operator Portal
          </Link>
        </nav>

        {/* Right Action Area */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Currency Switcher */}
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            style={{
              background: 'rgba(255, 255, 255, 0.07)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#cbd5e1',
              padding: '6px 10px',
              borderRadius: '8px',
              fontSize: '0.85rem',
              cursor: 'pointer',
              outline: 'none',
            }}
          >
            <option value="USD" style={{ background: '#0c1829', color: '#fff' }}>USD ($)</option>
            <option value="EUR" style={{ background: '#0c1829', color: '#fff' }}>EUR (€)</option>
            <option value="GBP" style={{ background: '#0c1829', color: '#fff' }}>GBP (£)</option>
            <option value="INR" style={{ background: '#0c1829', color: '#fff' }}>INR (₹)</option>
          </select>

          <Link href="/tours" className="btn-primary" style={{ textDecoration: 'none', padding: '10px 22px', fontSize: '0.88rem' }}>
            <Sparkles size={16} />
            <span>Explore Tours</span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#ffffff',
              cursor: 'pointer',
              display: 'none',
              padding: '8px',
            }}
            className="mobile-toggle-btn"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'rgba(6, 13, 23, 0.98)',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <Link
            href="/destinations"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: '1.1rem', fontWeight: 600, color: '#f8fafc', padding: '8px 0' }}
          >
            Destinations
          </Link>
          <Link
            href="/tours"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: '1.1rem', fontWeight: 600, color: '#f8fafc', padding: '8px 0' }}
          >
            Curated Expeditions
          </Link>
          <Link
            href="/my-trips"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: '1.1rem', fontWeight: 600, color: '#f8fafc', padding: '8px 0' }}
          >
            My Trips & Reservations
          </Link>
          <Link
            href="/admin"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: '1.1rem', fontWeight: 600, color: '#94a3b8', padding: '8px 0' }}
          >
            Operator Portal
          </Link>
        </div>
      )}
    </header>
  );
}
