'use client'
import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";
import { usePathname } from 'next/navigation';
import { useCurrentLocale,useScopedI18n } from '@/locales/client';

export default function BreadCrumb() {
    const pathname = usePathname();
    const locale = useCurrentLocale();
    const navbarT = useScopedI18n('navbar');
    const pathSegments = pathname.split('/').filter(Boolean);
    const breadcrumbMapping: { [key: string]: string } = {
        about: navbarT('about'), // Assuming 'about' is a valid key in your locale files
        blog: navbarT('blog'),
        overview: navbarT('overview'),
        principle: navbarT('principles'),
        visionvalue: navbarT('visionvalue'),
        message: navbarT('message'),
      };
  return (
    
    <div className='mt-5 px-2'>
    <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={`/${locale}/`}>Home</BreadcrumbLink>
          </BreadcrumbItem>
          {pathSegments.map((segment, index) => {
            // Skip the locale segment if it matches the current locale
            if (segment === locale) return null;

            const href = `/${locale}/` + pathSegments.slice(0, index + 1).join('/');

            return (
              <React.Fragment key={segment}>
                <BreadcrumbSeparator />
                <BreadcrumbItem className='capitalize'>
                  {index === pathSegments.length - 1 ? (
                    <BreadcrumbPage>
                      {breadcrumbMapping[segment] || segment}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={href}>
                      {breadcrumbMapping[segment] || segment}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </React.Fragment>
            );
          })}
        
            </BreadcrumbList>
 
    </Breadcrumb>
    </div>
  )
}
