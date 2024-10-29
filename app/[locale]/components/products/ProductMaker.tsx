import React from 'react';

const ProductMaker = ({ product } : {product:any}) => {
  const { maker} = product.fields;
  return (
    <div className='text-white'>Manufacture: {maker?.fields?.makerName || 'N/A'}</div>
  )
}

export default ProductMaker