import React from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Image from 'next/image';
import Link from 'next/link';
const font = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className} flex`}>
        <div className="w-60 bg-gray-900 min-h-screen pt-8 flex flex-col pb-10">
          <Link href='/'>
          <span className="w-32 block mx-auto">
            <svg width="122" height="25">
              <use xlinkHref="/image/icons.svg#logosvg" />
            </svg>
          </span>
          </Link>
          <div className="flex flex-col justify-between grow">
          <nav className="mt-20 grow pl-4">
            <ul>
              <li className="mb-7">
                <Link href="/dashboard">
                  <span className="flex gap-3.5 items-center text-zinc-50">
                    <svg width="18" height="18">
                      <use xlinkHref="/image/icons.svg#squares" />
                    </svg>
                    Dashboard
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/companies">
                  <span className="flex gap-3.5 items-center text-zinc-50">
                    <svg width="18" height="18">
                      <use xlinkHref="/image/icons.svg#briefcase" />
                    </svg>
                    Companies
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
          <span className="flex gap-2 items-center text-zinc-50 mx-auto w-14 mb-auto">
            <svg width="18" height="18">
              <use xlinkHref="/image/icons.svg#exit" />
            </svg>
            Exit
          </span>
          </div>
        </div>

        <div>{children}</div>
      </body>
    </html>
  );
}
