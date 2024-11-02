import React from 'react';
import Link from 'next/link';
import { getCurrentLocale, getScopedI18n } from "@/locales/server";
import Image from 'next/image';
import err from '@/public/404.svg'
import bgerr from '@/public/ams-line-dark.svg'


export default async function NotFound() {
  const notfoundT = await getScopedI18n('notfound');
  const locale = getCurrentLocale();
  return (
    
    <div className='w-full'>
      <section className="min-h-screen w-full pt-16 flex justify-center overflow-hidden">
        
        <Image
              src={bgerr}
              alt="Background"
              priority
              quality={100}
              className="z-0 object-cover h-full opacity-30 min-w-[50em]"  // Make sure the image is behind the gradient
            />
        <div className="absolute top-16 inset-0 w-full z-10 flex flex-col items-center justify-center px-4 gap-10 text-gray-800">
          <Image alt='404' src={err} priority
          className='w-[40em]'/>
          <p className='text-2xl sm:text-3xl lg:text-4xl text-center max-w-xl'>{notfoundT('moving')}</p>
          <p className='px-5 text-base sm:text-lg lg:text-xl text-center max-w-lg'>{notfoundT('sorry')}
            <Link className='underline text-[--cta]' href={`/${locale}/`}>{notfoundT('home')}</Link>
          </p>
        </div>
      </section>

    </div>
    
  )
}
