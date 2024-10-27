
import React from 'react';
import ProductBanner from './product-banner';

const ProductPage = () => {

  return (
    <div className="w-full">
      <ProductBanner />
      <section className="min-h-screen w-full">
        <div>Product</div>
      </section>
    </div>
  );
};

export default ProductPage;
