'use client';

import React from 'react';
import { Printer } from 'lucide-react';

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="btn-secondary"
      style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
    >
      <Printer size={16} />
      <span>Print Itinerary</span>
    </button>
  );
}
