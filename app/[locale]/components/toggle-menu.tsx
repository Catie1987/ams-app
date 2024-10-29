
import React , {useState} from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import {motion} from 'framer-motion';
import { Button } from '@/components/ui/button';
import { businessOption } from '@/app/constants/types';
import { getBusinessOptions } from './businessOptions';
import { useCurrentLocale, useI18n, useScopedI18n } from '@/locales/client';
import { SearchForm } from './search-form';
import { Factory, Waypoints, Settings} from 'lucide-react';
import Link from 'next/link';

export default function ToggleButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [isShow1, setIsShow1] = useState(false);
  const [isShow2, setIsShow2] = useState(false);
  const locale = useCurrentLocale();
  const t = useI18n();
  const navbarT = useScopedI18n('navbar');
  const businessOptions :businessOption[] = getBusinessOptions(t, locale);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const showMenu = () => {
    setIsShow(!isShow);
  };
  const showMenu1 = () => {
    setIsShow1(!isShow1);
  };
  const showMenu2 = () => {
    setIsShow2(!isShow2);
  };

  return (
    <div className='relative h-[calc(100vh-4rem)] w-full'>
      <div className='w-10 h-10 fixed right-4 top-0 translate-y-3 lg:hidden'>
        
        <button 
          onClick={toggleMenu}
          className="h-full w-full flex flex-col justify-center items-center"
        >
          <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'transform rotate-45 translate-y-[8px]' : ''}`}></span>
          <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-[6px] ${isOpen ? 'opacity-0 translate-x-4' : ''}`}></span>
          <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'transform -rotate-45 -translate-y-[8px]' : ''}`}></span>
        </button>
      </div>
      <motion.div 
      initial={{ x: '100%' }}
      animate={{ x: isOpen ? '0%' : '100%' }}
      transition={{ duration: 0.3 }}
      className='fixed h-[calc(100vh-4rem)] w-full bg-white border-l shadow-xl lg:hidden right-0 z-40 pb-8'>
            <ScrollArea className='h-full relative px-4'>
                <div className='divide-y flex flex-col gap-2 text-gray-800'>
                  <div className='mt-4'>
                    <div className='flex w-full justify-between items-center mb-2'>
                      <Link onClick={toggleMenu} href={`/${locale}/about`} className='text-lg font-medium hover:text-[--cta] hover:font-semibold'>
                      {t('navbar.about')}
                      </Link>
                      <div className="w-8 h-8 relative flex items-center justify-center">
                        <button
                          onClick={showMenu}
                          className="flex items-center justify-center h-8 w-8 rounded-full transition-transform duration-300"
                        >
                          <div
                            className={`transform transition-transform duration-300 ${
                              isShow ? 'rotate-[360deg]' : 'rotate-0'
                            }`}
                          >
                            <div className="relative">
                              <span className="block bg-[--cta] w-5 h-0.5 absolute top-1/2 -translate-y-1/2"></span>
                              <span className={`block bg-[--cta] w-5 h-0.5 transform transition-transform duration-300 ${isShow ? '' : 'rotate-90'}`}></span>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                    <motion.ul
                     initial={{ height: 0, opacity: 0 }}
                     animate={{ height: isShow ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                     transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className={`pl-4 flex flex-col gap-2 overflow-hidden text-base`}>
                      <li className='hover:text-[--cta] hover:font-semibold'><Link onClick={toggleMenu} href={`/${locale}/about/overview`}>{navbarT('overview')}</Link></li>
                      <li className='hover:text-[--cta] hover:font-semibold'><Link onClick={toggleMenu} href={`/${locale}/about/principle`}>{navbarT('principles')}</Link></li>
                      <li className='hover:text-[--cta] hover:font-semibold'><Link onClick={toggleMenu} href={`/${locale}/about/visionvalue`}>{navbarT('visionvalue')}</Link></li>
                      <li className='hover:text-[--cta] hover:font-semibold'><Link onClick={toggleMenu} href={`/${locale}/about/message`}>{navbarT('message')}</Link></li>
                    </motion.ul>
                  </div>
                  <div className='pt-2'>
                    <div className='flex w-full justify-between items-center mb-2'>
                      <Link onClick={toggleMenu} href={`/${locale}/business`} className='text-lg font-medium hover:text-[--cta] hover:font-semibold'>
                      {t('navbar.business')}
                      </Link>
                      <div className="w-8 h-8 relative flex items-center justify-center">
                        <button
                          onClick={showMenu1}
                          className="flex items-center justify-center h-8 w-8 rounded-full transition-transform duration-300"
                        >
                          <div
                            className={`transform transition-transform duration-300 ${
                              isShow1 ? 'rotate-[360deg]' : 'rotate-0'
                            }`}
                          >
                            <div className="relative">
                              <span className="block bg-[--cta] w-5 h-0.5 absolute top-1/2 -translate-y-1/2"></span>
                              <span className={`block bg-[--cta] w-5 h-0.5 transform transition-transform duration-300 ${isShow1 ? '' : 'rotate-90'}`}></span>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                    <motion.ul
                     initial={{ height: 0, opacity: 0 }}
                     animate={{ height: isShow1 ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                     transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className={`pl-4 flex flex-col gap-2 overflow-hidden text-base`}>
                      {businessOptions.map((business) => (
                          <li onClick={toggleMenu} className='hover:text-[--cta] hover:font-semibold' key={business.title}>
                              <Link href={business.href}>{business.title}</Link>
                          </li>
                      ))}
                      </motion.ul>
                    
                  </div>
                  <div className='pt-2'>
                    <div className='flex w-full justify-between items-center mb-2'>
                      <Link onClick={toggleMenu} href={`/${locale}/product`} className='text-lg font-medium hover:text-[--cta] hover:font-semibold'>
                      {t('navbar.product')}
                      </Link>
                      <div className="w-8 h-8 relative flex items-center justify-center">
                        <button
                          onClick={showMenu2}
                          className="flex items-center justify-center h-8 w-8 rounded-full transition-transform duration-300"
                        >
                          <div
                            className={`transform transition-transform duration-300 ${
                              isShow2 ? 'rotate-[360deg]' : 'rotate-0'
                            }`}
                          >
                            <div className="relative">
                              <span className="block bg-[--cta] w-5 h-0.5 absolute top-1/2 -translate-y-1/2"></span>
                              <span className={`block bg-[--cta] w-5 h-0.5 transform transition-transform duration-300 ${isShow2 ? '' : 'rotate-90'}`}></span>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                    
                    <motion.ul
                     initial={{ height: 0, opacity: 0 }}
                     animate={{ height: isShow2 ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                     transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className={`pl-4 flex flex-col gap-2 overflow-hidden text-base`}>
                      <div className='relative mt-2 w-full px-4 py-6 flex items-center bg-gradient-to-b from-[--top] to-[--bottom] rounded-md mb-2'>
                        <SearchForm/>
                      </div>
                      <li onClick={toggleMenu} className='hover:text-[--cta] hover:font-semibold text-gray-700'><Link className='flex gap-2 items-center' href={`/${locale}/product/maker`}>
                        <Factory size={20}/>{navbarT('product1')}
                      </Link></li>
                      <li onClick={toggleMenu} className='hover:text-[--cta] hover:font-semibold text-gray-700'><Link className='flex gap-2 items-center' href={`/${locale}/product/type`}>
                        <Waypoints size={20}/>{navbarT('product2')}
                      </Link></li>
                      <li onClick={toggleMenu} className='hover:text-[--cta] hover:font-semibold text-gray-700'><Link className='flex gap-2 items-center' href={`/${locale}/product/function`}>
                        <Settings size={20}/>{navbarT('product3')}
                      </Link></li>
                      </motion.ul>
                    
                  </div>
                  <div className='pt-2'>
                    <div onClick={toggleMenu} className='flex w-full justify-between items-center mb-2'>
                      <Link href={`/${locale}/blog`} className='text-lg font-medium hover:text-[--cta] hover:font-semibold'>
                      {t('navbar.blog')}
                      </Link>
                    </div>
                  </div>
                  <div className='py-4'>

                    <Button onClick={toggleMenu} size="full" className='w-full text-lg font-normal'>
                      <Link href={`/${locale}/contact`}>
                      {t('navbar.contact')}
                      </Link>
                    </Button>

                  </div>
                </div>
            </ScrollArea>
      </motion.div>
    </div>
  )
}



