import React from 'react';
import { client } from '@/lib/contentful/client';
import ProductCard from '../components/products/ProductCard';


export default async function ProductPage() {
  const response = await client.getEntries({ content_type: 'product' });
  const product = response.items;
  return (
    <div>
      <ul className='my-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
              {product.map((product: any, idx) => (
                <ProductCard key={idx} product={product}/>
              ))}
      </ul>
    </div>
  )
}
