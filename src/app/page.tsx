import React from 'react';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import DestinationCard from '@/components/DestinationCard';
import TourCard from '@/components/TourCard';
import { getDestinations, getTours } from '@/lib/data-service';
import { Compass, Sparkles, Shield, Award, Users, Globe, ArrowRight, Quote } from 'lucide-react';

export default async function HomePage() {
  const destinations = await getDestinations();
  const tours = await getTours();

  const featuredDestinations = destinations.slice(0, 3);
  const featuredTours = tours.slice(0, 3);

  return (
    <div>
      {/* 1. Cinematic Hero Section */}
      <HeroSection />

      {/* 2. Featured Destinations */}
      <section style={{ padding: '80px 0' }}>
        <div className="max-w-site">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <span className="section-tag">Iconic Landscapes</span>
              <h2 className="section-title">Trending Global Destinations</h2>
              <p className="section-desc" style={{ marginBottom: 0 }}>
                From ancient Mediterranean cliffs to high alpine glaciers, explore realms that redefine wonder.
              </p>
            </div>
            <Link
              href="/destinations"
              className="btn-secondary"
              style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <span>View All 12 Destinations</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid-cards">
            {featuredDestinations.map((dest) => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Curated Tour Packages */}
      <section style={{ padding: '80px 0', background: 'rgba(12, 24, 41, 0.4)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-site">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <span className="section-tag">Handcrafted Itineraries</span>
              <h2 className="section-title">Curated Signature Expeditions</h2>
              <p className="section-desc" style={{ marginBottom: 0 }}>
                Carefully orchestrated journeys featuring boutique accommodations, private charters, and world-class guides.
              </p>
            </div>
            <Link
              href="/tours"
              className="btn-primary"
              style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <Compass size={16} />
              <span>Explore All Expeditions</span>
            </Link>
          </div>

          <div className="grid-cards">
            {featuredTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us / Value Proposition */}
      <section id="why-us" style={{ padding: '100px 0' }}>
        <div className="max-w-site">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px auto' }}>
            <span className="section-tag">The TerraVenture Distinction</span>
            <h2 className="section-title">Travel Without Compromise</h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              We reject mass tourism in favor of deep immersion, intimate group dynamics, and environmental stewardship.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {/* Feature 1 */}
            <div className="glass-panel" style={{ padding: '36px 28px', textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(0, 210, 255, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', color: '#00d2ff' }}>
                <Users size={30} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '12px' }}>Intimate Small Groups</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: '1.6' }}>
                Capped at 8 to 12 explorers per departure, ensuring personalized access to remote sites and seamless flexibility.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="glass-panel" style={{ padding: '36px 28px', textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(245, 158, 11, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', color: '#f59e0b' }}>
                <Award size={30} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '12px' }}>Elite Native Naturalists</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: '1.6' }}>
                Led by resident historians, wildlife biologists, and mountain guides with decades of generational knowledge.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="glass-panel" style={{ padding: '36px 28px', textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(16, 185, 129, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', color: '#10b981' }}>
                <Globe size={30} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '12px' }}>Carbon-Neutral Journeys</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: '1.6' }}>
                Every kilometer traveled is 100% verified carbon offset, directly funding biodiversity conservation projects.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="glass-panel" style={{ padding: '36px 28px', textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(255, 94, 98, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', color: '#ff5e62' }}>
                <Shield size={30} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '12px' }}>24/7 Global Concierge</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: '1.6' }}>
                Dedicated private travel managers monitor every leg of your trip, providing frictionless logistical support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Verified Traveler Testimonials */}
      <section id="reviews" style={{ padding: '80px 0', background: 'linear-gradient(180deg, rgba(12, 24, 41, 0.6) 0%, #060d17 100%)' }}>
        <div className="max-w-site">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px auto' }}>
            <span className="section-tag">Traveler Impressions</span>
            <h2 className="section-title">Stories From The Field</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            <div className="glass-panel" style={{ padding: '36px', position: 'relative' }}>
              <Quote size={40} color="rgba(0,210,255,0.2)" style={{ position: 'absolute', top: '24px', right: '24px' }} />
              <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: '1.7', fontStyle: 'italic', marginBottom: '24px' }}>
                "Our private yacht excursion to Capri was straight out of a classic cinema piece. The attention to detail from the TerraVenture team was sublime."
              </p>
              <div>
                <h4 style={{ color: '#ffffff', fontSize: '1rem', marginBottom: '2px' }}>Clara & David Thorne</h4>
                <span style={{ color: '#00d2ff', fontSize: '0.82rem' }}>Amalfi Coastline Yacht Odyssey • Oct 2025</span>
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '36px', position: 'relative' }}>
              <Quote size={40} color="rgba(245,158,11,0.2)" style={{ position: 'absolute', top: '24px', right: '24px' }} />
              <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: '1.7', fontStyle: 'italic', marginBottom: '24px' }}>
                "Watching sunrise from the rim of Ngorongoro crater with hundreds of wild animals waking up in the mist was the spiritual highlight of our lives."
              </p>
              <div>
                <h4 style={{ color: '#ffffff', fontSize: '1rem', marginBottom: '2px' }}>Samantha & Noah Patel</h4>
                <span style={{ color: '#f59e0b', fontSize: '0.82rem' }}>Serengeti & Ngorongoro Safari • Aug 2025</span>
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '36px', position: 'relative' }}>
              <Quote size={40} color="rgba(16,185,129,0.2)" style={{ position: 'absolute', top: '24px', right: '24px' }} />
              <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: '1.7', fontStyle: 'italic', marginBottom: '24px' }}>
                "The Glacier Express Excellence Class in Switzerland exceeded all expectations. Gourmet wine pairings and front-row seats to the Matterhorn."
              </p>
              <div>
                <h4 style={{ color: '#ffffff', fontSize: '1rem', marginBottom: '2px' }}>Julian Weber</h4>
                <span style={{ color: '#10b981', fontSize: '0.82rem' }}>Swiss Glacier High Summit Trek • Jul 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Call to Action Banner */}
      <section style={{ padding: '80px 0' }}>
        <div className="max-w-site">
          <div
            style={{
              borderRadius: 'var(--radius-lg)',
              background: 'linear-gradient(135deg, #0c1f36 0%, #173b67 50%, #0c1829 100%)',
              border: '1px solid rgba(0, 210, 255, 0.3)',
              padding: '60px 40px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
            }}
          >
            <div style={{ position: 'relative', zIndex: 2, maxWidth: '650px', margin: '0 auto' }}>
              <span className="section-tag" style={{ color: '#38bdf8' }}>Begin Your Journey</span>
              <h2 style={{ fontSize: '2.4rem', color: '#ffffff', marginBottom: '16px', lineHeight: '1.2' }}>
                Ready to Experience The World's Most Extraordinary Frontiers?
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '1.05rem', marginBottom: '32px' }}>
                Book today with guaranteed departure dates and flexible cancellation options.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <Link href="/tours" className="btn-primary" style={{ padding: '14px 32px', fontSize: '1rem' }}>
                  <span>Browse All Expeditions</span>
                  <ArrowRight size={18} />
                </Link>
                <Link href="/destinations" className="btn-secondary" style={{ padding: '14px 28px', fontSize: '1rem' }}>
                  <span>View Destinations</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
