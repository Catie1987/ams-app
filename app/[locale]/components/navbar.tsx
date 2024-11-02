
import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import logo from "../../assets/image/logo.png";
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from '@/components/ui/button';
import { businessOption } from '@/app/constants/types';
import { getBusinessOptions } from './businessOptions';
import { useCurrentLocale, useI18n, useScopedI18n } from '@/locales/client';
import { SearchForm } from './search-form';
import { Factory, Waypoints, Settings } from 'lucide-react';


export function Navbar() {
  const locale = useCurrentLocale();
  const t = useI18n();
  const navbarT = useScopedI18n('navbar');
  const businessOptions :businessOption[] = getBusinessOptions(t, locale);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Link href={`/${locale}/about`}>
            {t('navbar.about')}
            </Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-gray-100/50 to-gray-100 p-6 no-underline outline-none focus:shadow-md"
                    href={`/${locale}/about/overview`}
                  >
                    <Image alt='' src={logo} width={100}/>
                    <div className="mb-2 mt-4 text-lg font-bold text-gray-800">
                      {navbarT('overview')}
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                    {navbarT('overview1')}
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href={`/${locale}/about/principle`} title={navbarT('principles')}>
                {navbarT('prindes1')}
              </ListItem>
              <ListItem href={`/${locale}/about/visionvalue`} title={navbarT('visionvalue')}>
                {navbarT('visiondes1')}
              </ListItem>
              <ListItem href={`/${locale}/about/message`} title={navbarT('message')}>
                {navbarT('messagedes1')}
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger><Link href={`/${locale}/business`}>{navbarT('business')}</Link></NavigationMenuTrigger>
          <NavigationMenuContent>
         
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {businessOptions.map((business) => (
                <ListItem
                  key={business.title}
                  title={business.title}
                  href={business.href}
                >
                  {business.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Link href={`/${locale}/product`}>
            {t('navbar.product')}
            </Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] grid-cols-1">
              <li className="row-span-1">
                <div>
                  <div
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-[--top] to-[--bottom] p-6 no-underline outline-none focus:shadow-md"
                    
                  >
                    <div className="mb-2 mt-4 text-lg font-semibold text-white">
                      {navbarT('search')}
                    </div>
                    <div className='w-full'>
                      <SearchForm/>
                    </div>
                    
                  </div>
                </div>
              </li>
              <ListItem href={`/${locale}/product/maker`} title={navbarT('product1')} className='relative pl-16 group'>
                <Factory className='absolute left-4 top-1/2 -translate-y-1/2 group-hover:text-[--cta]' size={30}/>
                {navbarT('product1des')}
              </ListItem>
              <ListItem href={`/${locale}/product/type`} title={navbarT('product2')} className='relative pl-16 group'>
                <Waypoints className='absolute left-4 top-1/2 -translate-y-1/2 group-hover:text-[--cta]' size={30}/>
                {navbarT('product2des')}
              </ListItem>
              <ListItem href={`/${locale}/product/function`} title={navbarT('product3')} className='relative pl-16 group'>
                <Settings className='absolute left-4 top-1/2 -translate-y-1/2 group-hover:text-[--cta]' size={30}/>
                {navbarT('product3des')}
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={`/${locale}/blog`} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            {t('navbar.blog')}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        
      </NavigationMenuList>
      <Button className='ml-6'>
        <Link href={`/${locale}/contact`}>
        {t('navbar.contact')}
        </Link>
      </Button>
    </NavigationMenu>
  )
}
 
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-[--cta] focus:bg-accent hover:bg-gray-100/50 focus:text-[--cta]",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"