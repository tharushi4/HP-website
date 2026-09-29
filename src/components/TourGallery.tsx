'use client';

import React, { useState } from 'react';

export default function TourGallery({ images, title }: { images: string[]; title: string }) {
  const [activeImage, setActiveImage] = useState(images[0] || '');

  return (
    <div style={{ marginBottom: '40px' }}>
      {/* Primary Display */}
      <div
        style={{
          position: 'relative',
          height: '460px',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          marginBottom: '14px',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: 'var(--shadow-md)',
        }}
      >
        <img
          src={activeImage}
          alt={title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'all 0.4s ease' }}
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '4px' }}>
          {images.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveImage(img)}
              style={{
                width: '100px',
                height: '70px',
                borderRadius: '8px',
                overflow: 'hidden',
                border: activeImage === img ? '2px solid #00d2ff' : '2px solid transparent',
                cursor: 'pointer',
                padding: 0,
                opacity: activeImage === img ? 1 : 0.6,
                transition: 'all 0.2s ease',
                flexShrink: 0,
                background: '#0c1829',
              }}
            >
              <img src={img} alt={`Thumbnail ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
