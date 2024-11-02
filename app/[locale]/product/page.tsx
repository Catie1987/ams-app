import React from 'react';
import { client } from '@/lib/contentful/client';
import ProductCard from '../components/products/ProductCard';
import { getCurrentLocale } from '@/locales/server';
import { mapToContentfulLocale } from '@/lib/contentful/types/locales';


export default async function ProductPage() {
  const locale = getCurrentLocale();
  const response = await client.getEntries({ 
    content_type: 'product' ,
    locale: mapToContentfulLocale(locale)
  });
  const product = response.items;
  return (
    <div>
      <ul className='my-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
              {product.map((product: any, idx) => (
                <ProductCard key={idx} product={product} locale={locale}/>
              ))}
      </ul>
    </div>
  )
}
