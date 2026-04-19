'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { cn } from '@/lib/utils'

const Header = () => {
    const pathname = usePathname();
  return (
    <header className='my-10 flex justify-between gap-5'>
        <Link href={"/"}>BookWise</Link>

        <ul className='flex flex-row items-center gap-8'>
            <li>
                <Link href={"/library"} className={cn('text-base cursor-pointer capitalize', pathname === "/library" ? "text-cyan-700" : "text-cyan-200",)}>
                    Library
                </Link>
            </li>
        </ul>
    </header>
  )
}

export default Header
