import React from 'react';

export const metadata = {
  title: 'Printable CV - Dr. Matthew Doyle',
  description: 'A printable version of Dr. Matthew Doyle\'s curriculum vitae.',
};

export default function CVLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="cv-page-container">
      {children}
    </div>
  );
} 