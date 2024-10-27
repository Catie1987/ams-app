"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/image/logo-white.png';
import { useCurrentLocale, useScopedI18n } from '@/locales/client';
import { Phone, Mail, Facebook, Youtube,Linkedin } from 'lucide-react';

export default function Footer() {
const locale = useCurrentLocale();
const footerT = useScopedI18n('footer');
const navbarT = useScopedI18n('navbar');
  return (
    <div className='min-h-72 w-full bg-gradient-to-b from-[--gradient3] to-[--gradient1] text-white flex flex-col items-center'>
        <div className='max-w-7xl w-full px-4'>
            <div className='py-8 h-auto flex items-center border-b border-gray-500/50 justify-between max-sm:flex-col max-sm:gap-y-4'>
                <Link href ={`/${locale}`} className=''>
                    <Image alt='' src={logo} width={150}/>
                </Link>
                <div className='font-bold text-sm text-gray-100 flex items-center gap-2 tracking-wider'>
                    <span>ADVANCED</span><div className='block h-2 w-2 border border-[--dot1] rounded-full bg-[--dot1]'></div>
                    <span>MATERIALS</span><div className='block h-2 w-2 border border-[--dot1] rounded-full bg-[--dot1]'></div>
                    <span>SOLUTION</span>
                </div>
            </div>
            <div className='py-8 h-auto grid grid-cols-6 max-sm:grid-cols-1 max-lg:grid-cols-3 gap-4 border-b border-gray-500/50 justify-between uppercase'>
                <div className='tracking-widest text-xs flex flex-col justify-between col-span-2 max-sm:col-span-1 max-lg:mb-10'>
                    <div className='flex flex-col relative'>
                        <p className='font-bold mb-4'>{footerT('name')}</p>
                        <div className='absolute w-7 h-1 bg-[--dot1] top-4'></div>
                        <p>{footerT('address')}</p>
                        <div className='inline-flex gap-4 mt-4'><Phone size={16}/><span>+84 24 6329 5652</span></div>
                        <div className='inline-flex gap-4 mt-4'><Mail size={16}/><span className='normal-case'>info@amsvn.net</span></div>
                    </div>
                    <div className='inline-flex gap-3 mt-6'>
                        <Link href='' className='h-10 w-10 border border-gray-500/50 bg-black/20 place-items-center place-content-center rounded-full hover:bg-black/70 hover:border-gray-300 transition-colors duration-300'><Facebook size={18}/></Link>
                        <Link href='' className='h-10 w-10 border border-gray-500/50 bg-black/20 place-items-center place-content-center rounded-full hover:bg-black/70 hover:border-gray-300 transition-colors duration-300'><Youtube size={18}/></Link>
                        <Link href='' className='h-10 w-10 border border-gray-500/50 bg-black/20 place-items-center place-content-center rounded-full hover:bg-black/70 hover:border-gray-300 transition-colors duration-300'><Linkedin size={18}/></Link>
                    </div>
                </div>
                <div className='tracking-widest'>
                    <div><Link className='hover:underline font-bold' href={`/${locale}/about`}>{navbarT('about')}</Link></div>
                    <ul className='capitalize text-sm flex flex-col gap-1 mt-2 text-gray-300 max-sm:hidden'>
                        <li><Link className='hover:underline ' href={`/${locale}/about/overview`}>{navbarT('overview')}</Link></li>
                        <li><Link className='hover:underline ' href={`/${locale}/about/principle`}>{navbarT('principles')}</Link></li>
                        <li><Link className='hover:underline ' href={`/${locale}/about/visionvalue`}>{navbarT('visionvalue')}</Link></li>
                        <li><Link className='hover:underline ' href={`/${locale}/about/message`}>{navbarT('message')}</Link></li>
                    </ul>
                </div>
                <div className='tracking-widest'>
                    <div><Link className='hover:underline font-bold' href={`/${locale}/business`}>{navbarT('business')}</Link></div>
                    <ul className='capitalize text-sm flex flex-col gap-1 mt-2 text-gray-300 max-sm:hidden'>
                        <li><Link className='hover:underline ' href={`/${locale}/business/automotive`}>{navbarT('business1')}</Link></li>
                        <li><Link className='hover:underline ' href={`/${locale}/business/speaker`}>{navbarT('business2')}</Link></li>
                        <li><Link className='hover:underline ' href={`/${locale}/business/camera-module`}>{navbarT('business3')}</Link></li>
                        <li><Link className='hover:underline ' href={`/${locale}/business/transformer`}>{navbarT('business4')}</Link></li>
                        <li><Link className='hover:underline ' href={`/${locale}/business/electronic`}>{navbarT('business5')}</Link></li>
                        <li><Link className='hover:underline ' href={`/${locale}/business/medical`}>{navbarT('business6')}</Link></li>
                        <li><Link className='hover:underline ' href={`/${locale}/business/battery-energy`}>{navbarT('business7')}</Link></li>
                        <li><Link className='hover:underline ' href={`/${locale}/business/motor`}>{navbarT('business8')}</Link></li>
                    </ul>
                </div>
                <div className='tracking-widest'>
                    <div><Link className='hover:underline font-bold' href={`/${locale}/product`}>{navbarT('product')}</Link></div>
                    <ul className='capitalize text-sm flex flex-col gap-1 mt-2 text-gray-300 max-sm:hidden'>
                        <li><Link className='hover:underline ' href={`/${locale}/product/maker`}>{navbarT('product1')}</Link></li>
                        <li><Link className='hover:underline ' href={`/${locale}/product/type`}>{navbarT('product2')}</Link></li>
                        <li><Link className='hover:underline ' href={`/${locale}/product/function`}>{navbarT('product3')}</Link></li>
                    </ul>
                </div>
                <div className='tracking-widest flex flex-col gap-1'>
                    <div><Link className='hover:underline font-bold' href={`/${locale}/blog`}>{navbarT('blog')}</Link></div>
                    <div><Link className='hover:underline font-bold' href={`/${locale}/contact`}>{navbarT('contact')}</Link></div>
                    <div><Link className='hover:underline font-bold' href={`/${locale}/legal-compliance`}>{footerT('legal')}</Link></div>
                    <div><Link className='hover:underline font-bold' href={`/${locale}/job`}>{footerT('job')}</Link></div>
                </div>
            </div>
            <div className='py-8 flex justify-between items-center max-sm:flex-col max-sm:gap-4'>
                <div className='text-xs text-gray-300'>© 2024 AMS. All rights reserved</div>
                <div className='text-sm text-gray-300 flex divide-x divide-gray-300/50 gap-2'>
                    <Link href ={`/${locale}/site-map`} className='hover:underline'>{footerT('site')}</Link>
                    <Link href ={`/${locale}/privacy-statement`} className='hover:underline pl-2'>{footerT('privacy')}</Link>
                    <Link href ={`/${locale}/terms-of-use`} className='hover:underline pl-2'>{footerT('term')}</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
