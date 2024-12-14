'use client';

import { Nunito } from 'next/font/google';
import { useEffect } from 'react';
import { makeServer } from '~/mirage/server';
import './globals.css';

const nunito = Nunito({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      makeServer();
    }
  }, []);
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
