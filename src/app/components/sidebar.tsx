'use client';
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Sidebar() {
    const pathname = usePathname();
    return(
        <div className="w-60 bg-gray-900 min-h-screen pt-8 flex flex-col pb-10">
          <Link href='/'>
          <span className="w-32 block mx-auto">
            <svg width="122" height="25">
              <use xlinkHref="/image/icons.svg#logosvg" />
            </svg>
          </span>
          </Link>
          <div className="flex flex-col justify-between grow">
          <nav className="mt-20 grow pl-4 pr-1">
            <ul>
              <li className="mb-7">
                <Link href="/dashboard"  className={clsx("flex gap-3.5 items-center h-9", 
                pathname === '/dashboard' && 'after:h-9 after:ml-auto after:border-2 after:border-purple-200 after:rounded-sm')}>
                    <svg width="18" height="18">
                      <use xlinkHref="/image/icons.svg#squares" />
                    </svg>
                    <span className='text-zinc-50 font-medium'>Dashboard</span>      
                </Link>
              </li>
              <li>
                <Link href="/companies" className={clsx("flex gap-3.5 items-center h-9", 
                pathname === '/companies' && 'after:h-9 after:ml-auto after:border-2 after:border-purple-200 after:rounded-sm')}>
                                     <svg width="18" height="18">
                      <use xlinkHref="/image/icons.svg#briefcase" />
                    </svg>
                    <span className='text-zinc-50 font-medium'>Companies</span>   
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
    )
}