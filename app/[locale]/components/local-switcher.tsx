"use client"
import React from 'react';
import { useChangeLocale, useCurrentLocale } from '../../../locales/client'

import { useTransition, useState  } from 'react';
import { Globe,ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";

const languages = [
    { code: 'en', name: 'English', emoji: '🇬🇧'  },
    { code: 'vn', name: 'Tiếng Việt',emoji: '🇬🇧'  },
    { code: 'zh', name: '中文',emoji: '🇬🇧' },
    { code: 'ja', name: '日本語',emoji: '🇬🇧'  },
  ];

  type Locale = 'en' | 'vn' | 'zh' | 'ja';

export default function LocalSwitcher() {
    const [isPending, startTransition] = useTransition();
    const locale = useCurrentLocale();
    const changeLocale = useChangeLocale({ preserveSearchParams: true })
    const [isOpen, setIsOpen] = useState(false);

  
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='min-w-20'>
        <Button 
          onClick={() => setIsOpen((prev) => !prev)}
          variant="outline" className='relative flex items-center gap-2 text-gray-700'>
          <Globe size={16} className=''/>
          <p className='uppercase'>{locale}</p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-2">
        {languages.map((language, idx) => (
          
          <DropdownMenuItem
            key={idx}
            onClick={() =>  changeLocale(language.code as Locale)}
            className={`relative text-sm flex items-center cursor-pointer px-4 ${isPending ? 'cursor-wait' : ''}`}
          >
            
            {language.name}
            <span className='ml-1 uppercase'>({language.code})</span>
          </DropdownMenuItem>
          
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
