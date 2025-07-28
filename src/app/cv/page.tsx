'use client';

import React from 'react';
import Link from 'next/link';
import PrintableCV from '@/components/PrintableCV';

const CVPage: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="top-bar print-hidden bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
        <Link href="/" className="text-lg hover:text-blue-300 transition-colors flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="40" y="40" width="20" height="20" rx="3" fill="#BCC3CF"/>
            <rect x="42" y="42" width="16" height="16" rx="2" fill="#E5E7EB"/>
            <path d="M50 30 C 40 32, 40 38, 50 40 C 60 38, 60 32, 50 30 Z" fill="#F3F4F6"/>
            <circle cx="50" cy="35" r="2" fill="#4B5563"/>
            <rect x="5" y="42.5" width="30" height="15" rx="2" fill="#4A90E2"/>
            <rect x="65" y="42.5" width="30" height="15" rx="2" fill="#4A90E2"/>
            <line x1="10" y1="45" x2="30" y2="45" stroke="#D1D5DB" strokeWidth="1"/>
            <line x1="10" y1="50" x2="30" y2="50" stroke="#D1D5DB" strokeWidth="1"/>
            <line x1="10" y1="55" x2="30" y2="55" stroke="#D1D5DB" strokeWidth="1"/>
            <line x1="70" y1="45" x2="90" y2="45" stroke="#D1D5DB" strokeWidth="1"/>
            <line x1="70" y1="50" x2="90" y2="50" stroke="#D1D5DB" strokeWidth="1"/>
            <line x1="70" y1="55" x2="90" y2="55" stroke="#D1D5DB" strokeWidth="1"/>
          </svg>
          Back
        </Link>
        <h1 className="text-xl font-bold">
          Curriculum Vitae - Dr. Matthew Doyle
        </h1>
        <button
          onClick={handlePrint}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          Print / Download PDF
        </button>
      </div>
      <main className="p-4 print:p-0">
        <PrintableCV />
      </main>
    </div>
  );
};

export default CVPage; 