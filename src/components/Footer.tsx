'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Compass, ShieldCheck, Award, HeartHandshake, Send, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer
      style={{
        background: 'linear-gradient(180deg, #060d17 0%, #03070d 100%)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        marginTop: '100px',
        paddingTop: '80px',
        paddingBottom: '40px',
        color: '#94a3b8',
      }}
    >
      <div className="max-w-site">
        {/* Value Prop Badges */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
            paddingBottom: '60px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
            marginBottom: '60px',
          }}
        >
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 210, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00d2ff' }}>
              <ShieldCheck size={26} />
            </div>
            <div>
              <h4 style={{ color: '#ffffff', fontSize: '1rem', marginBottom: '2px' }}>Verified Experiences</h4>
              <p style={{ fontSize: '0.85rem' }}>100% vetted local guides & boutique stays</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(245, 158, 11, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f59e0b' }}>
              <Award size={26} />
            </div>
            <div>
              <h4 style={{ color: '#ffffff', fontSize: '1rem', marginBottom: '2px' }}>Exceptional Curation</h4>
              <p style={{ fontSize: '0.85rem' }}>Award-winning small group departures</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981' }}>
              <HeartHandshake size={26} />
            </div>
            <div>
              <h4 style={{ color: '#ffffff', fontSize: '1rem', marginBottom: '2px' }}>Sustainable Travel</h4>
              <p style={{ fontSize: '0.85rem' }}>Carbon-neutral offset & local community aid</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            marginBottom: '60px',
          }}
        >
          {/* Col 1: Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--primary-gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Compass size={20} color="#060d17" strokeWidth={2.5} />
              </div>
              <span style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff' }}>TerraVenture</span>
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '20px' }}>
              Bespoke travel experiences and life-defining adventures designed for curious explorers seeking deep cultural immersion and luxury.
            </p>
          </div>

          {/* Col 2: Destinations */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '0.95rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Popular Destinations
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <li><Link href="/destinations/amalfi-coast" style={{ color: '#94a3b8', transition: 'color 0.2s' }}>Amalfi Coast, Italy</Link></li>
              <li><Link href="/destinations/swiss-alps" style={{ color: '#94a3b8', transition: 'color 0.2s' }}>Swiss Alpine Peaks</Link></li>
              <li><Link href="/destinations/kyoto-japan" style={{ color: '#94a3b8', transition: 'color 0.2s' }}>Kyoto & Mount Fuji</Link></li>
              <li><Link href="/destinations/serengeti-safari" style={{ color: '#94a3b8', transition: 'color 0.2s' }}>Serengeti Wildlife</Link></li>
              <li><Link href="/destinations/iceland-glaciers" style={{ color: '#94a3b8', transition: 'color 0.2s' }}>Iceland Aurora & Ice Caves</Link></li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '0.95rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Company & Trips
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <li><Link href="/tours" style={{ color: '#94a3b8' }}>All Tour Packages</Link></li>
              <li><Link href="/my-trips" style={{ color: '#94a3b8' }}>Track My Booking</Link></li>
              <li><Link href="/admin" style={{ color: '#94a3b8' }}>Operator Portal</Link></li>
              <li><Link href="/#why-us" style={{ color: '#94a3b8' }}>Why Choose TerraVenture</Link></li>
              <li><Link href="/#reviews" style={{ color: '#94a3b8' }}>Verified Reviews</Link></li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '0.95rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '16px' }}>
              The Explorer’s Dispatch
            </h4>
            <p style={{ fontSize: '0.88rem', marginBottom: '16px', lineHeight: '1.6' }}>
              Receive handpicked seasonal itineraries, secret hideaways, and early expedition access.
            </p>
            {subscribed ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10b981', background: 'rgba(16,185,129,0.1)', padding: '12px', borderRadius: '8px' }}>
                <CheckCircle2 size={18} />
                <span style={{ fontSize: '0.88rem' }}>Welcome aboard! Check your inbox.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    flex: 1,
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '8px',
                    padding: '10px 14px',
                    color: '#ffffff',
                    fontSize: '0.88rem',
                    outline: 'none',
                  }}
                />
                <button
                  type="submit"
                  style={{
                    background: 'var(--primary-gradient)',
                    border: 'none',
                    borderRadius: '8px',
                    width: '42px',
                    height: '42px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: '#060d17',
                  }}
                >
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom copyright */}
        <div
          style={{
            paddingTop: '30px',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            fontSize: '0.82rem',
          }}
        >
          <div>
            © {new Date().getFullYear()} TerraVenture Expeditions Ltd. All rights reserved. Powered by Next.js & PostgreSQL.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Travel Advisory</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
