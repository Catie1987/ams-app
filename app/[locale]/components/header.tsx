"use client"
import React, { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from "../../assets/image/logo.png";
import { useCurrentLocale } from '@/locales/client';
import LocalSwitcher from './local-switcher';
import { Navbar } from './navbar';
import ToggleButton from './toggle-menu';


const Header = () => {
const locale = useCurrentLocale();


  return (
    <header className='border-b bg-white shadow-lg fixed w-full z-50 h-16 flex justify-center'>
        <div className='h-full w-full max-w-7xl text-gray-950 flex items-center px-5 justify-between'>
            <Link href ={`/${locale}`} className=''>
                <Image alt='' src={logo} width={90}/>
            </Link>
            <div className='hidden lg:block'>
              <Navbar/>
            </div>
            <Suspense>
              <div className='ml-auto lg:ml-0 flex items-center'>
                <LocalSwitcher/> 
                <div className='w-10 h-10 lg:hidden'></div>
              </div>
            </Suspense>
            <div className='z-50 left-0 top-16 bg-white absolute'>
              <ToggleButton/>
            </div>
            
        </div>
    </header>
  )
}

export default Header