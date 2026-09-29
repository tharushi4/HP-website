'use client';

import React, { useState } from 'react';
import { ItineraryItem } from '@/types';
import { ChevronDown, ChevronUp, Utensils, Bed, Sparkles } from 'lucide-react';

export default function ItineraryTimeline({ items }: { items: ItineraryItem[] }) {
  const [expandedDays, setExpandedDays] = useState<number[]>([1]); // Day 1 open by default

  const toggleDay = (day: number) => {
    if (expandedDays.includes(day)) {
      setExpandedDays(expandedDays.filter((d) => d !== day));
    } else {
      setExpandedDays([...expandedDays, day]);
    }
  };

  const expandAll = () => setExpandedDays(items.map((it) => it.day));
  const collapseAll = () => setExpandedDays([]);

  return (
    <div style={{ marginTop: '32px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <span className="section-tag">Day-By-Day Blueprint</span>
          <h3 style={{ fontSize: '1.8rem', color: '#ffffff' }}>Your Daily Expedition Journey</h3>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            onClick={expandAll}
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.15)',
              color: '#94a3b8',
              padding: '6px 14px',
              borderRadius: '8px',
              fontSize: '0.8rem',
              cursor: 'pointer',
            }}
          >
            Expand All
          </button>
          <button
            onClick={collapseAll}
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.15)',
              color: '#94a3b8',
              padding: '6px 14px',
              borderRadius: '8px',
              fontSize: '0.8rem',
              cursor: 'pointer',
            }}
          >
            Collapse
          </button>
        </div>
      </div>

      {/* Timeline Steps */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {items.map((item) => {
          const isExpanded = expandedDays.includes(item.day);

          return (
            <div
              key={item.day}
              style={{
                background: isExpanded ? 'var(--bg-surface)' : 'rgba(12, 24, 41, 0.5)',
                border: `1px solid ${isExpanded ? 'rgba(0, 210, 255, 0.35)' : 'rgba(255, 255, 255, 0.08)'}`,
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                transition: 'all 0.25s ease',
              }}
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleDay(item.day)}
                style={{
                  width: '100%',
                  padding: '18px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'transparent',
                  border: 'none',
                  color: 'inherit',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: isExpanded ? 'var(--primary-gradient)' : 'rgba(255, 255, 255, 0.06)',
                      color: isExpanded ? '#060d17' : '#00d2ff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '1rem',
                      flexShrink: 0,
                    }}
                  >
                    D{item.day}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '4px' }}>
                      {item.title}
                    </h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '0.8rem', color: '#94a3b8' }}>
                      {item.meals && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Utensils size={12} color="#f59e0b" />
                          {item.meals}
                        </span>
                      )}
                      {item.accommodation && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Bed size={12} color="#38bdf8" />
                          {item.accommodation}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div style={{ color: '#94a3b8', paddingLeft: '12px' }}>
                  {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </button>

              {/* Accordion Body */}
              {isExpanded && (
                <div
                  style={{
                    padding: '0 24px 24px 84px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                    paddingTop: '16px',
                  }}
                >
                  <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '14px' }}>
                    {item.description}
                  </p>

                  {item.highlights && item.highlights.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '10px' }}>
                      {item.highlights.map((h, i) => (
                        <span
                          key={i}
                          style={{
                            background: 'rgba(0, 210, 255, 0.08)',
                            color: '#7dd3fc',
                            fontSize: '0.78rem',
                            padding: '4px 10px',
                            borderRadius: '6px',
                            border: '1px solid rgba(0, 210, 255, 0.15)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                          }}
                        >
                          <Sparkles size={11} />
                          {h}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
