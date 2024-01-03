'use client'
import React from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Sidebar from './components/sidebar';
import Providers from '@/utils/providers';
import { usePathname } from 'next/navigation';
const font = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={`${font.className} flex`}>
      <Sidebar/>
        <Providers>    
                <div className='w-full'>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
